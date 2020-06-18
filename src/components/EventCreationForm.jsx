import React, { useEffect } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
import { eventCreationMutation } from '../queries/EventCreation';
import { useMutation, useQuery, useLazyQuery } from '@apollo/react-hooks';
import { Link } from '@reach/router';
import Axios from 'axios';
//import { getUsers } from "../queries/GetUsers"

const EventCreationForm = ({ query: { users } }) => {
  console.log(users, 'QUERY');
  const [eventName, setEventName] = React.useState('');
  const [eDate, setEventDate] = React.useState('');
  const [eClosingDate, setEventClosingDate] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  const [myLocation, setMyLocation] = React.useState({
    lat: null,
    lng: null,
  });
  const [radius, setRadius] = React.useState('1');
  const [setEvent, { loading: eventLoading, error: eventError }] = useMutation(
    eventCreationMutation
  );
  const [eData, setReturnedEventData] = React.useState(null);
  const [myLocationReadable, setMyLocationReadable] = React.useState('');
  let guestList = [];

  //  const { loading, error, data } = useQuery(getUsers);

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latlng = await getLatLng(results[0]);
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
    setCoordinates({ lat: null, lng: null });
    getMyLocationReadable(position.coords.latitude, position.coords.longitude);
  };

  const getMyLocationReadable = (lat, lng) => {
    Axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBfKa69QF4Y6ghdqsTzsWcLoBTmPvYnBF8`
    )
      .then((response) => {
        setMyLocationReadable(response.data.results[0].formatted_address);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCheckbox = (event) => {
    const { checked, value } = event.target;
    checked
      ? guestList.push(value)
      : guestList.splice(guestList.indexOf(value), 1);
    console.log(guestList);
    return guestList;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = eventName;
    const lat = !coordinates.lat ? `${myLocation.lat}` : `${coordinates.lat}`;
    const long = !coordinates.lng ? `${myLocation.lng}` : `${coordinates.lng}`;
    const distance = radius;
    const endDate = new Date(eDate).toISOString();
    const voteDate = new Date(eClosingDate).toISOString();
    // const organiser = user
    const guests = guestList;
    setEvent({
      variables: {
        name,
        lat,
        long,
        distance,
        endDate,
        voteDate,
        //organiser,
        guests,
      },
    }).then(({ data }) => {
      setReturnedEventData(data);
    });
    clearForm();
  };

  const clearForm = () => {
    setEventName('');
    setEventDate('');
    setEventClosingDate('');
    setAddress('');
    setCoordinates({ lat: null, lng: null });
    setMyLocation({ lat: null, lng: null });
    setRadius('1');
  };

  return (
    <Grid container justify="center">
      <form onSubmit={handleSubmit} className="eventForm">
        <TextField
          fullWidth
          required
          variant="outlined"
          margin="normal"
          type="text"
          name="eventName"
          label="Event"
          value={eventName}
          onChange={(event) => setEventName(event.target.value)}
          placeholder="e.g. Meal with friends..."
        />
        {/* <label htmlFor="eventName">
          Event:
          <input
            type="text"
            name="eventName"
            value={eventName}
            onChange={(event) => setEventName(event.target.value)}
            placeholder="Event name here..."
            required="required"
          />
        </label> */}
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
                {/* <label htmlFor="location">
                  Location:
                  <input
                    {...getInputProps({
                      placeholder: 'Start typing your location...',
                    })}
                  />
                </label> */}
                <TextField
                  {...getInputProps({
                    placeholder: 'Start typing your location...',
                  })}
                  fullWidth
                  variant="outlined"
                  label="location"
                />

                <div>
                  {loading && <p>Loading!</p>}
                  {suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? '#d1e7ed' : '#fff',
                    };
                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                  <img
                    src="powered_by_google_on_white.png"
                    alt="powered by Google"
                  />
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        )}
        <button type="button" onClick={getMyLocation}>
          Use My Location
        </button>
        <img src="powered_by_google_on_white.png" alt="powered by Google" />
        {myLocation.lat && (
          <>
            <p>
              Your location:
              <br />
              {myLocationReadable}
            </p>
            <img src="powered_by_google_on_white.png" alt="powered by Google" />
          </>
        )}
        <label htmlFor="radius">
          Search Radius (miles):
          <select
            name="topic"
            onChange={(event) => setRadius(event.target.value)}
            value={radius}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label htmlFor="eventDate">
          Event Date:
          <input
            type="date"
            name="eventDate"
            value={eDate}
            onChange={(event) => setEventDate(event.target.value)}
            required="required"
          />
        </label>
        <label htmlFor="eventClosingDate">
          Voting Deadline:
          <input
            type="date"
            name="eventClosingDate"
            value={eClosingDate}
            onChange={(event) => setEventClosingDate(event.target.value)}
            required="required"
          />
        </label>
        <p>Invite friends</p>
        <ul>
          {users.map((friend) => {
            return (
              <li key={friend.id} className="noBull">
                <label htmlFor="guestList">
                  {friend.email}
                  <input
                    type="checkbox"
                    value={friend.id}
                    onChange={handleCheckbox}
                  />
                </label>
              </li>
            );
          })}
        </ul>
        <button type="submit">Create Event</button>
        <button type="reset" onClick={clearForm}>
          Reset Form
        </button>
        {eventLoading && <p>Creating Event</p>}
        {eventError && <p>Error in creating event.</p>}
        {eData && (
          <button>
            <Link to={`/swipe/${eData.addEvent.id}`}>Take me to event</Link>
          </button>
        )}
      </form>
    </Grid>
  );
};

export default EventCreationForm;
