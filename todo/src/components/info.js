import { useState,useEffect } from "react"
import { useContext } from "react"
import MyContext from "./myContext"
export default function Info() {
    const {user,setUser} = useContext(MyContext)
    const [fact,setFact] = useState('Loading...... ')
    const API_URL ='https://catfact.ninja/fact'
    const fetchData =async ()=>{
        const res = await fetch(API_URL)
        const data = await res.json()
        console.log(data.fact)
        setFact(data.fact)
        console.log("fact data",data)
        return data
        //  save the object in the fact state 
    }
    useEffect(()=>{
        fetchData()


    },[])

    return(
        <>
        <h1>this is a fact for User : {user?user:"Gust"} </h1>
        <p>{fact}</p>
        </>
    )
}