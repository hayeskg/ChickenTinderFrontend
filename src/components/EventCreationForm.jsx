import React from "react";

class EventCreator extends React.Component {
    state = {
        eventName: "",
        location: "",
        radius: "",
    };

    handleInputChange = (event) => {
        
        const { value, name } = event.target
        this.setState({
            [name]: value,
        })
        console.log(this.state)
    }

    render() {
        const { eventName, location, radius } = this.state
        return (
            <form onSubmit={this.handleSubmitForm} className='eventForm'>
                <label>Event Name:
            <input type="text" name='eventName' required='required' onChange={this.handleInputChange} placeholder='Event name here...' value={eventName} />
                </label>
                <label >Location:
            <input type="text" name='location' required='required' onChange={this.handleInputChange} placeholder='Location here...' value={location} />
                </label>
                <label >Radius:
            <select className='select' name='topicradius' onChange={this.handleInputChange} value={radius}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">3</option>
                        <option value="5">3</option>
                    </select>
                </label>
                <button className='postButton'>Create Event</button>
            </form>
        );
    };
};

export default EventCreator;