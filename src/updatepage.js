import { useState } from "react";
import { replace } from "./temporaryvalues";
 
 
export const Updatepage = (myindex) => {

    const [position, setPosition] = useState(myindex.who)

    const [updatedetails, setUpdatedetails] = useState(
        {
            eventname: myindex.mention.eventname,
            date: myindex.mention.date,
            location: myindex.mention.location,
            description: myindex.mention.description,
        })

    let setter = (temp) => {
        const { name, value } = temp.target;

        setUpdatedetails(
            (mydata) => {
                return {
                    ...mydata,
                    [name]: value,
                }
            }
        )

    }

    const update = () => {
        alert("UPDATED....!" + JSON.stringify(updatedetails));
        replace(updatedetails,position);
    }

 return (
   <>
  <div className='bg-secondary'>
      <div className='mb-3'>
          <div className='text-center'>
             <br/><br/>
              <h1 className='mt-3'><ins><span className='text-danger'>REGISTRATION</span></ins></h1>
         </div>
            <br/>
         <div className="row justify-content-center">
             <div className=" row ms-3 col-lg-3 mt-5 me-2 border mb-5"> 
                <label className="form-label mt-4 ">Event Name </label>
                 <div className='col-10'>
                     <input type='text' name='eventname' value={updatedetails.eventname} className="form-control ms-5" onChange={setter} placeholder="Enter your Event" />
                 </div>
                  <br></br><br></br>
                 <label className="form-label mt-2">Date </label>
                 <div className='col-10'>
                     <input type='date' name='date' value={updatedetails.date} className="form-control ms-5" onChange={setter}  placeholder="Select your Date" />
                 </div>
                    <br></br><br></br>
                <label className="form-label mt-2">Location </label>
                 <div className='col-10'>
                     <input type='text' name='location' value={updatedetails.location} className="form-control ms-5" onChange={setter} placeholder="Enter the Location" />
                 </div>
                  <label className="form-label mt-2">Description</label>
                  <div className='col-10'>
                         <input type='text' name='description' value={updatedetails.description} className="form-control ms-5" onChange={setter} placeholder="Enter your Description" />
                 </div>
                 <div className=' mt-5 row justify-content-center'>
                      <button className='btn btn-outline-success col-5'
                        onClick={update}>Update</button>
                       <button className='btn btn-outline-danger col-5 ms-2'>cancel</button>
                 </div>
             </div>
         </div>
     </div>
 </div>
        </>
    );
}


