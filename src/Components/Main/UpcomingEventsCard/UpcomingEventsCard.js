import React from "react";
import './UpcomingEventsCard.css'
import LocationIcon from '../../../Images/icons8-location-50.png'

export default function UpcomingEventsCard({no,eventImg,eventDate,eventName,eventLoc,eventWeather,eventDist}){
    //-----------For Images------------
    const ArrOfUrl = eventImg.split("/")
    const UrlId = ArrOfUrl[5]
    const URL = `https://drive.google.com/thumbnail?id=${UrlId}`
    
    //-----------For Date--------------------
    const eventDateInString = eventDate.toString()
    const eventCardDate  = new Date(eventDateInString)

    const ArrayOfMonths= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const monthOfDate = ArrayOfMonths[eventCardDate.getMonth()];
    const dateOfDate = eventCardDate.getDate();
    const yearOfDate = eventCardDate.getFullYear();  
    
    return(
        <div id="eventBox">
            <img src={URL} alt="eventImg" id="eventImg"/>
            <div id="eventDates">{`${monthOfDate} ${dateOfDate}, ${yearOfDate}`}</div>
            <div id="eventName">{eventName}</div>
            <img src={LocationIcon} alt="locIcon" id="eventLocIcon"/>
            <div id={eventLoc.length===8?"eventSmallLoc":"eventLoc"}>
                {eventLoc}
            </div>
            <div id="eventWeather">{eventWeather}</div>
            <hr id="eventCardLine"/>
            <div id="eventDist">{`${Math.round(eventDist)}Km`}</div>
        </div>
    )
}