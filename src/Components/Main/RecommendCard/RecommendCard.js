import React from "react";
import './RecommendCard.css'
import LocationIcon from '../../../Images/icons8-location-50.png'

export default function RecommendCard({image,event,fullDate,loc,weather,distance}){
    //-----------For Images------------
    const ArrOfUrl = image.split("/")
    const UrlId = ArrOfUrl[5]
    const URL = `https://drive.google.com/thumbnail?id=${UrlId}`
    
    //-----------For Date--------------------
    const dateInString = fullDate.toString()
    const cardDate  = new Date(dateInString)

    const ArrayOfMonths= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const monthOfDate = ArrayOfMonths[cardDate.getMonth()];
    const dateOfDate = cardDate.getDate();
    const yearOfDate = cardDate.getFullYear();  
    
    return(
        <div id="cardBox">
            <img src={URL} alt="eventImage" id="showsImg" />
            <div id={event=== "Snowy Peaks Photography Workshop"?"cardName3":"cardName"}>{event}</div>
            <div id="date">{`${monthOfDate} ${dateOfDate}, ${yearOfDate}`}</div>
            <img src={LocationIcon} alt="Location_Icon" id="LocationIcon" />
            <div id="location">{loc}</div>
            <div id="weather">{weather}</div>
            <hr id="cardLine" />
            <div id="distance">{`${Math.round(distance)}Km`}</div>
        </div>
    )
}