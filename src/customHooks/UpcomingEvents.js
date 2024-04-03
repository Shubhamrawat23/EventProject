import { useEffect, useState } from "react";

const URL = process.env.REACT_APP_UPCOMING

export default function useEvents(pageNo,setLoading){
    const [eventData,setEventData] = useState([])
    useEffect(()=>{
        if (pageNo<=5) {
            fetch(`${URL}&page=${pageNo}&type=upcoming`)
            .then(resp=>resp.json())
            .then(res=>{
                setLoading(false)
                setEventData(prev=>[...prev,...res.events])
            })
            .catch((e)=>console.log(e))
        }
    },[pageNo,setLoading])
    return eventData
}