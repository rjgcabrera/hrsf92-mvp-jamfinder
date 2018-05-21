import React from 'react';

let EventListEntry = (props) => {

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
      <div><a href={props.oneEvent.link}>{props.oneEvent.name}</a></div>
      <div><p>Hosted by: {props.oneEvent.group.name}</p></div>
      <div><p>Number of Attendees: {props.oneEvent.yes_rsvp_count}</p></div>
      <div><p>Event date: {props.oneEvent.local_date}</p></div>
      <div><p>Time: {props.oneEvent.local_time}</p></div>
      {venue}
    </div>
  )
}

export default EventListEntry;
