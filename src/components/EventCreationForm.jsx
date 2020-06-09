import React from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

export default function EventCreator() {
    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null,
    })

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latlng = await getLatLng(results[0]);
        setAddress(value)
        setCoordinates(latlng)
    };

    return (

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

    );
};
