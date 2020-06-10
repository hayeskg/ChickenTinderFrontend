import React from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

export default function EventCreator() {
    const [eventName, setEventName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null,
    })
    const [myLocation, setMyLocation] = React.useState({
        lat: null,
        lng: null,
    });
    const [radius, setRadius] = React.useState(1)

    const getMyLocation = async () => {
        const position = await new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        })
        setMyLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
    }

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latlng = await getLatLng(results[0]);
        setAddress(value)
        setCoordinates(latlng)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        const lat = myLocation.lat
        const lng = myLocation.lng
        const restaurantEvent = {
            eventName,
            lat,
            lng, 
            radius,
        }
        console.log(restaurantEvent)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="eventName">
                <input type="text" name="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="Event name here..." />
            </label>
            <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect} >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) =>
                    <div>
                        <p>Latitude: {coordinates.lat}</p>
                        <p>Longitude: {coordinates.lng}</p>
                        <input {...getInputProps({ placeholder: 'location' })} />
                        <div>
                            {loading &&
                                <p>Loading!</p>
                            }
                            {
                                suggestions.map((suggestion) => {
                                    const style = {
                                        backgroundColor: suggestion.active ? "#d1e7ed" : "#fff"
                                    }
                                    return (
                                        <div {...getSuggestionItemProps(suggestion, { style })}>
                                            {suggestion.description}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </PlacesAutocomplete>
            <p>Latitude: {myLocation.lat}</p>
            <p>Longitude: {myLocation.lng}</p>
            <button onClick={getMyLocation}>Use My Location</button>
            <label htmlFor="eventName">
                <input type="text" name="radius" value={radius} onChange={(e) => setRadius(e.target.value)} placeholder="distance in miles..."/>
            </label>
            <button>Create Event</button>
        </form>
    );
};
