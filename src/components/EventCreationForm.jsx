import React from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

export default function EventCreator() {
    const [address, setAddress] = React.useState("");

    const handleSelect = async value => { };

    return (

        <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect} >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) =>
                <div>
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
