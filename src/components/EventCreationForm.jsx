import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const EventCreationForm = () => {
  const [eventName, setEventName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  const [myLocation, setMyLocation] = React.useState({
    lat: null,
    lng: null,
  });
  const [radius, setRadius] = React.useState(1);

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latlng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latlng);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const lat = myLocation.lat;
    const lng = myLocation.lng;
    const restaurantEvent = {
      eventName,
      lat,
      lng,
      radius,
    };
    console.log(restaurantEvent);
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
    console.log(coordinates);
  };

  return (
    <form onSubmit={handleSubmit}>
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
          Latitude: {myLocation.lat}, Longitude: {myLocation.lng}
        </p>
      )}
      <label htmlFor="radius">
        Search Radius (miles):
        <input
          type="text"
          name="radius"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          placeholder="distance in miles..."
        />
      </label>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventCreationForm;
