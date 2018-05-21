import React from 'react';
import EventListEntry from './EventListEntry.jsx';
import ScrollArea from 'react-scrollbar';
// import GoogleMap from './GoogleMap.jsx';

let EventList = (props) => {

  let mapPicUrl = `https://maps.googleapis.com/maps/api/staticmap?center=Fremont,CA&zoom=9&size=600x600&maptype=roadmap&markers=color:red%7Clabel:1%7C37.778650,-122.389264`;

  return(
    <div className="event-list">
      <ScrollArea
        className="scrollbar"
        horizontal={false}
        vertical={true}
        >
        {props.events.map((oneEvent, index) => {
          for (let i = 0; i < props.events.length; i++) {
            return <EventListEntry oneEvent={oneEvent} key={index} />
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
