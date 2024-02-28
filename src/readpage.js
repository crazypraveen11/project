import { useEffect, useState } from "react"
import { Read } from "./temporaryvalues"



export let Readpage = (pos) => {
    const [details, setDetails] = useState({
        eventname: "",
        date: "",
        location: "",
        description: ""
    })
  

    useEffect(() => {
        setDetails(Read(pos.who))
    },[pos.who])

    return (
        <>
            <div className="row justify-content-center">
                <div className="card col-5">
                    <h1 className="card-title text-center"> Event Details</h1>
                    <ul className="list-group">
                        <li className="list-group-item">{details.eventname}</li>
                        <li className="list-group-item">{details.date}</li>
                        <li className="list-group-item">{details.location}</li>
                        <li className="list-group-item">{details.description}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}