import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { eventCreationMutation } from "../queries/EventCreation";
import { useMutation } from "@apollo/react-hooks";
import { Link } from '@reach/router';
import Axios from 'axios';

const EventCreationForm = () => {
  const [eventName, setEventName] = React.useState("");
  const [eDate, setEventDate] = React.useState("");
  const [eClosingDate, setEventClosingDate] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  const [myLocation, setMyLocation] = React.useState({
    lat: null,
    lng: null,
  });
  const [radius, setRadius] = React.useState("1");
  const [setEvent, {
    loading: eventLoading,
    error: eventError
  }] = useMutation(eventCreationMutation);
  const [eData, setReturnedEventData] = React.useState(null)
  const [myLocationReadable, setMyLocationReadable] = React.useState("")

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latlng = await getLatLng(results[0]);
    console.log(latlng)
    setAddress(value);
    setCoordinates(latlng);
  };

  const getMyLocation = async () => {
    const position = await new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    setMyLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
    //{lat: 9.657496199999999, lng: -82.75507449999999}
    setCoordinates({ lat: null, lng: null })
    getMyLocationReadable(position.coords.latitude, position.coords.longitude)
  };

  const getMyLocationReadable = (lat, lng) => {
    Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBfKa69QF4Y6ghdqsTzsWcLoBTmPvYnBF8`)
    .then((response) => {
      setMyLocationReadable(response.data.results[0].formatted_address)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const eventLat = !coordinates.lat ? `${myLocation.lat}` : `${coordinates.lat}`;
    const eventLong = !coordinates.lng ? `${myLocation.lng}` : `${coordinates.lng}`;
    const eventDistance = radius;
    const eventDate = `${eDate}`;
    const eventClosingDate = `${eClosingDate}`;
    setEvent({
      variables: {
        eventName,
        eventLat,
        eventLong,
        eventDistance,
        eventDate,
        eventClosingDate,
        eventOrganiser: "Fred",
        attendees: ["Freddy", "Freddo", "Freda"]
      }
    })
      .then(({ data }) => {
        setReturnedEventData(data)
      })
    clearForm()
  };

  const clearForm = () => {
    setEventName("");
    setEventDate("");
    setEventClosingDate("");
    setAddress("");
    setCoordinates({ lat: null, lng: null });
    setMyLocation({ lat: null, lng: null });
    setRadius("1");
  }

  return (
    <form onSubmit={handleSubmit} className="eventForm">
      <label htmlFor="eventName">
        Event:
        <input
          type="text"
          name="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Event name here..."
          required="required"
        />
      </label>
      {!myLocation.lat && (
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
              <div>
                <label htmlFor="location">
                  Location:
                <input
                    {...getInputProps({
                      placeholder: "Start typing your location...",
                    })}
                  />
                </label>
                <div>
                  {loading && <p>Loading!</p>}
                  {suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#d1e7ed" : "#fff",
                    };
                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
        </PlacesAutocomplete>
      )}
      <button type="button" onClick={getMyLocation}>
        Use My Location
      </button>
      {myLocation.lat && (
        <p>
          Your location:
          <br />
          {myLocationReadable}
          Latitude: {myLocation.lat}, Longitude: {myLocation.lng}
        </p>
      )}
      <label htmlFor="radius">
        Search Radius (miles):
        <select name='topic' onChange={(e) => setRadius(e.target.value)} value={radius}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </label>
      <label htmlFor="eventDate">Event Date:
        <input type="date"
          name="eventDate"
          value={eDate}
          onChange={(e) => setEventDate(e.target.value)}
          required="required"
        />
      </label>
      <label htmlFor="eventClosingDate">Voting Deadline:
        <input type="date"
          name="eventClosingDate"
          value={eClosingDate}
          onChange={(e) => setEventClosingDate(e.target.value)}
          required="required"
        />
      </label>
      <button type="submit">Create Event</button>
      <button type="reset" onClick={clearForm}>Reset Form</button>
      {eventLoading &&
        <p>Loading...</p>
      }
      {eventError &&
        <p>ERROR</p>
      }
        <button><Link to={`/swipe/5ee23fa0976ee6001793e49f`}>Take me to event</Link></button>
      </form>
  );
};

export default EventCreationForm;
