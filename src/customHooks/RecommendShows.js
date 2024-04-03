import { useEffect, useState } from "react";

const URL = process.env.REACT_APP_RECOMMEND;
export default function useRecommendShows(){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(URL)
        .then(res=>res.json())
        .then(res=>setData(prev=>[...prev,...res.events,...res.events]))
    },[])
    return data
}