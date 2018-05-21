import React from 'react';

let EventListEntry = (props) => {

  return(
    <div className="event-list-entry">
      <div><p>Event title</p></div>
      <div><p>Hosted by: </p></div>
      <div><p>Number of Attendees</p></div>
      <div><p>Event date</p></div>
      <div><p>Start time - End time</p></div>
      <div><p>Venue Name</p></div>
      <div><p>Venue Address</p></div>
    </div>
  )
}

export default EventListEntry;
