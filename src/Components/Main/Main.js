import React, { useRef, useState } from "react"; 
import Banner from '../../Images/Banner.svg';
import WArrow from '../../Images/WhiteArrow.png'
import BArrow from '../../Images/BlackArrow.png'
import './Main.css'
import RecommendCard from "./RecommendCard/RecommendCard";
import useRecommendShows from "../../customHooks/RecommendShows.js";
import UpcomingEventsCard from "./UpcomingEventsCard/UpcomingEventsCard.js";
import useEvents from "../../customHooks/UpcomingEvents.js" 
import Loader from "./Loader/Loader.js";

export default function Main(){
    const [pageNo,setPageNo] = useState(1)
    const [loading, setLoading] = useState(false)
    const eventsRef = useRef()
    
    const RecommendShows = useRecommendShows()

    const UpcomingEvents = useEvents(pageNo,setLoading)

    const handleEventScroll = ()=>{
        const eventBoxElm = eventsRef.current
        if(eventBoxElm.clientHeight+eventBoxElm.scrollTop+1 >= eventBoxElm.scrollHeight && pageNo<5){
            setLoading(true)
            setPageNo(prev=>prev+1)
        }
    }
    return(
        <section>
            <img src={Banner} alt="banner" id="banner"/>

            <h1 id="heading">Discover Exciting Events Happening Near You - Stay Tuned for Updates!</h1>
            <p id="subHead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora, ipsa aliquid perspiciatis mollitia deleniti itaque facere est facilis culpa</p>

            <div id="recommendText">Recommended shows <img src={WArrow} alt="arrow"/></div>

            <div id="recommendBox">
                {RecommendShows && RecommendShows.map((value,index)=>(
                    <RecommendCard key={index} 
                    image={value.imgUrl} 
                    event={value.eventName} 
                    fullDate={value.date} 
                    loc={value.cityName} 
                    weather={value.weather} 
                    distance={value.distanceKm}/>
                ))}
            </div>

            <p id="upcomingEventsText">Upcoming Events <img src={BArrow} alt="arrow"/></p>

            <div id="upcomingEventBox" onScroll={handleEventScroll} ref={eventsRef}>
                {UpcomingEvents.length!==0 && UpcomingEvents.map((value,index)=>(
                    <UpcomingEventsCard key={index} no={index} 
                    eventImg={value.imgUrl} 
                    eventDate={value.date} 
                    eventName={value.eventName}
                    eventLoc={value.cityName}
                    eventWeather={value.weather}
                    eventDist={value.distanceKm}/>
                ))}
                {loading?<Loader/>:""}
            </div>

        </section>
    )
}