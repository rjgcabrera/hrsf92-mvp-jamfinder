import React from 'react';

let EventListEntry = (props) => {

  let labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let venue = <div></div>;
  if (props.oneEvent.venue) {
    // let venueAddress = `https://www.google.com/maps/place/1550+California+St+%232,+San+Francisco,+CA+94109/@37.7909273,-122.4222365`;
    //
    venue = <div>
      <div><p>Venue Name: {props.oneEvent.venue.name}</p></div>
      <div>
        <span>Venue Address: </span>
        <span>{props.oneEvent.venue.address_1}, </span>
        <span>{props.oneEvent.venue.city}, {props.oneEvent.venue.state}, {props.oneEvent.venue.zip}</span>
      </div>
    </div>;
  }

  return(
    <div className="event-list-entry">
      <span>{labels[props.idx]} | <a href={props.oneEvent.link}>{props.oneEvent.name}</a></span>
      <span><p>Hosted by: {props.oneEvent.group.name}</p></span>
      <span><p>Number of Attendees: {props.oneEvent.yes_rsvp_count}</p></span>
      <span><p>Event date: {props.oneEvent.local_date}</p></span>
      <span><p>Time: {props.oneEvent.local_time}</p></span>
      {venue}
      <br></br>
      <button>Attend?</button>
    </div>
  )
}

export default EventListEntry;
