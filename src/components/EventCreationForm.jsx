import React from "react";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { eventCreationMutation } from "../queries/EventCreation";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "@reach/router";
import Axios from "axios";
import ErrorDisplayer from "./re-usable/ErrorDisplayer";
import Loader from "./re-usable/Loader";
import GoogleImage from  "../styling/assets/powered_by_google_on_white.png"
import {
  Grid,
  Button,
  TextField,
  InputLabel,
  FormHelperText,
  FormControl,
  Select,
  Checkbox,
} from "@material-ui/core";

const EventCreationForm = ({ query: { users }, organiser }) => {
  const [error, setError] = React.useState("");
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

  const [setEvent, { loading: eventLoading, error: eventError }] = useMutation(
    eventCreationMutation
  );
  const [eData, setReturnedEventData] = React.useState(null);
  const [myLocationReadable, setMyLocationReadable] = React.useState("");
  const [missLocation, setMissLocation] = React.useState(false);

  let guestList = [];

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
        setError(err);
      });
  };

  const handleCheckbox = (event) => {
    const { checked, value } = event.target;
    checked
      ? guestList.push(value)
      : guestList.splice(guestList.indexOf(value), 1);
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

    const guests = guestList;
    if (lat === "null" || long === "null") {
      setMissLocation(true)
    } else {
      setMissLocation(false)
      setEvent({
        variables: {
          name,
          lat,
          long,
          distance,
          endDate,
          voteDate,
          organiser,
          guests,
        },
      })
        .then(({ data }) => {
          setReturnedEventData(data);
        })
        .catch((err) => {
          setError(err);
        });
      clearForm();
    }
  };

  const clearForm = () => {
    setEventName("");
    setEventDate("");
    setEventClosingDate("");
    setAddress("");
    setCoordinates({ lat: null, lng: null });
    setMyLocation({ lat: null, lng: null });
    setRadius("1");
  };

  return (
    <Grid container justify="center">
      <Grid item xs={8}>
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
                  <TextField
                    {...getInputProps({
                      placeholder: "Start typing your location...",
                    })}
                    fullWidth
                    variant="outlined"
                    label="location"
                  />

                  <div>
                    {loading && <Loader />}
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
                  <Grid container justify="flex-end">
                    <img
                      src={GoogleImage}
                      alt="powered by Google"
                      className="google-logo"
                    />
                  </Grid>
                </div>
              )}
            </PlacesAutocomplete>
          )}
          <Button
            className="use-location"
            size="large"
            color="primary"
            variant="contained"
            onClick={getMyLocation}
          >
            Use My Location
          </Button>
          {myLocation.lat && (
            <div className="location-text">
              <h3>Your location</h3>
              <p>{myLocationReadable}</p>
              <img
                src="powered_by_google_on_white.png"
                alt="powered by Google"
              />
            </div>
          )}
          <Grid container justify="flex-start">
            <Grid item xs={12}>
              <FormControl variant="outlined">
                <InputLabel htmlFor="radius">Radius</InputLabel>
                <Select
                  native
                  value={radius}
                  label="Radius"
                  onChange={(event) => setRadius(event.target.value)}
                  inputProps={{
                    name: "radius",
                    id: "radius",
                  }}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </Select>
                <FormHelperText>Miles</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container direction="column" spacing={3}>
            <Grid item xs={12}>
              <TextField
                InputLabelProps={{ shrink: true}}
                id="eventDate"
                label="Event date"
                type="datetime-local"
                variant="outlined" 
                required
                onChange={(event) => setEventDate(event.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputLabelProps={{ shrink: true}}
                id="eventClosingDate"
                label="Closing date"
                type="datetime-local"
                variant="outlined"
                required
                onChange={(event) => setEventClosingDate(event.target.value)}
              ></TextField>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} >
              <h3>Invite friends</h3>
            </Grid>
            <Grid item xs={12} style={{maxHeight: 150, overflow: "auto"}} >
              <ul>
                {users.map((friend) => {
                  return (
                    <li key={friend.id}>
                      <img
                        src={
                          friend.photo ||
                          "https://d29fhpw069ctt2.cloudfront.net/icon/image/120759/preview.svg"
                        }
                        alt=""
                        className="friend-photo"
                      />
                      {friend.username || "Friend"}
                      <Checkbox
                        color="primary"
                        inputProps={{ "aria-label": "guestList" }}
                        value={friend.id}
                        onChange={handleCheckbox}
                      />
                    </li>
                  );
                })}
              </ul>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
          >
            Create Event
          </Button>
          {missLocation &&
            <p>Please provide a location</p>
          }
          <Button
            variant="contained"
            size="large"
            color="secondary"
            type="reset"
            onClick={clearForm}
          >
            Reset Form
          </Button>
          {eventLoading && <p>Creating Event</p>}
          {eventError && <ErrorDisplayer msg={eventError} />}
          {error && <ErrorDisplayer msg={error} />}
          {eData && (
            <Button variant="contained" size="large" color="primary">
              <Link to={`/event/${eData.addEvent.id}`}>Take me to event</Link>
            </Button>
          )}
          <Button variant="contained" size="large" color="primary">
            <Link to="/">Home</Link>
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default EventCreationForm;
