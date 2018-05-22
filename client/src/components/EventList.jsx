import React from 'react';
import EventListEntry from './EventListEntry.jsx';
import ScrollArea from 'react-scrollbar';
import MAP_API_KEY from '../../../config.js';
// import GoogleMap from './GoogleMap.jsx';

let EventList = (props) => {

  let labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let mapPicUrl = `https://maps.googleapis.com/maps/api/staticmap?center=San+Francisco,CA&zoom=12&size=600x400&maptype=roadmap`;

  for (let i = 0; i < props.events.length; i++) {
    if (props.events[i].venue) {
      mapPicUrl += `&markers=color:red%7Clabel:${labels[i]}%7C${props.events[i].venue.lat},${props.events[i].venue.lon}`;

    }
    if (i === props.events.length) {
      mapPicUrl += `&key=${MAP_API_KEY}`;
    }
  }

  return(
    <div className="event-list">
      <ScrollArea
        className="scrollbar"
        horizontal={false}
        vertical={true}
        >
        {props.events.map((oneEvent, index) => {
          for (let i = 0; i < props.events.length; i++) {
            return <EventListEntry oneEvent={oneEvent} key={index} idx={index} />
          }
        })}
      </ScrollArea>
      <div className="google-map">
        <img src={mapPicUrl}></img>
      </div>
    </div>
  )
}

export default EventList;
