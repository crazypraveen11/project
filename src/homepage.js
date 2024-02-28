import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Create, Fetchexact, Listall,Remove1, } from './temporaryvalues';
import { Readpage } from './readpage';
import { Updatepage } from './updatepage';
 
export let Homepage = () =>
{
       var [page,setPage] = useState(false);
       var [nextpage,setNextpage] =useState(false);
       var[tempvalues,setTempvalues] = useState([]);
       var [readpage, setReadpage] = useState(false);
       var [position, setPosition] =useState(0);
       const [updatepage, setUpdatepage] = useState(false);
        const [obj, setObj] = useState({})

       const [eventdetails, setEventdetails] = useState(
        {
            Eventname:"",
            Date:"",
            Location:"",
            Description:""
        })

    let setter = (temp) => {
        const { name, value } = temp.target;

        setEventdetails(
            (mydata) => {
                return {
                    ...mydata,
                    [name]: value,
                }
            }
        )

    }

    const Login = () =>{
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        
        if (name.length === 0) {
            document.getElementById("name1").innerHTML = "Your name shouldn't be empty"
            return false;
        }
        else if (!(/^[a-z A-Z]$/)){
            document.getElementById("name1").innerHTML ="Your name should be in Alphabets"
            return false;
        }

        if (email.length === 0) {
            document.getElementById("email1").innerHTML = "Your email cannot be empty"
            return false;
        }
        else if (!(/^[a-z A-Z @ 0-9]$/)){
            document.getElementById("email11").innerHTML ="Your name should be in Alphabets"
            return false;
        }

        if (password.length === 0) {
            document.getElementById("password1").innerHTML = "Your password cannot be empty"
            return false;
        }
        else if (!(/^[a-z A-Z @ 0-9]$/)){
            document.getElementById("password1").innerHTML ="Your password should be Strong"
            return false;
        }
        alert("Login Successfull...!");
        setPage(true);
        return true;       
    }

    const Register = () => {
        alert(" Registered ...! " + JSON.stringify(eventdetails));
        Create(eventdetails);
        setNextpage(true);
    }
       useEffect(() =>{
        setTempvalues(Listall);
       },[])
    

    return(
        <>
        {
            (page) ?
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
                              <input type='text' name='eventname' value={eventdetails.Eventname} className="form-control ms-5" onChange={setter} placeholder="Enter your Event" />
                         </div>
                          <br></br><br></br>
                         <label className="form-label mt-2">Date </label>
                         <div className='col-10'>
                              <input type='date' name='date' value={eventdetails.Date} className="form-control ms-5" onChange={setter}  placeholder="Select your Date" />
                         </div>
                         <br></br><br></br>
                         <label className="form-label mt-2">Location </label>
                         <div className='col-10'>
                              <input type='text' name='location' value={eventdetails.Location} className="form-control ms-5" onChange={setter} placeholder="Enter the Location" />
                         </div>
                         <label className="form-label mt-2">Description</label>
                         <div className='col-10'>
                              <input type='text' name='description' value={eventdetails.Description} className="form-control ms-5" onChange={setter} placeholder="Enter your Description" />
                         </div>
                          <div className="text-center mt-5 mb-4 ">
                              <button className="btn btn-outline-danger text-center"
                              onClick={Register}
                             >Register</button>
                          </div>
                     </div>
                 </div>
             </div><br/><br/><br/><br/>
             <button className='btn btn-outline-danger mb-5 ms-4'
            onClick={() => {
                setPage(false)
            }} >Back</button>
         </div>
            </>
            :
            (readpage) ?
                <>
                    <Readpage who={position} />
                    <button
                        className='btn btn-outline-secondary'
                        onClick={
                            () => {
                                setReadpage(false)
                            }
                        }>
                        BACK
                    </button>
                </>
            :
            (updatepage) ?
                <>
                    <Updatepage who={position} mention={obj} />
                    <button className='btn btn-outline-danger' onClick={() => {
                        setUpdatepage(false);
                    }}>
                        BACK
                    </button>
                </>
            :
            (nextpage) ?
            <>
              <div className='container mt-3'>
                <h2 className='text-center'><ins>EVENT <span className='text-danger'> MANAGEMENT </span> SYSTEM</ins></h2>
                <br/>
                <h3 className='text-center'><ins>Event Details</ins></h3>
                <table className='table table-striped table-bordered mt-5 text-center'>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tempvalues.map(
                                (element,index) =>
                                <>
                                <tr>
                                    <td>{element.Eventname}</td>
                                    <td>{element.Date}</td>
                                    <td>{element.Location}</td>
                                    <td>{element.Description}</td>
                                    <td>
                                        <button className='btn btn-outline-info '
                                         onClick={() => {
                                            setReadpage(true);
                                            setPosition(index);
                                        }} >
                                            LIST
                                        </button>
                                        <button className='btn btn-outline-success ms-2'
                                         onClick={() => {
                                            setUpdatepage(true);
                                            setPosition(index);
                                            setObj(Fetchexact(element.Eventname))
                                        }} >
                                            EDIT
                                        </button>
                                        <button className='btn btn-outline-danger ms-2' 
                                        onClick={
                                            () => {

                                                setTempvalues(Remove1(index));
                                            }
                                        } >
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                                </>
                            )
                        }
                    </tbody>
                </table>
              </div>
              <button className='btn btn-outline-secondary'
              onClick={()=>{
              setNextpage(false)
              }} >Back</button>
            </>
            :
            <>
             <div className=' bg-info'>
              <div className='mb-3'>
                 <div className='text-center'>
                     <br/><br/><br/><br/><br/>
                     <h1 className='mt-4'><ins><span className='text-danger'>LOGIN </span> PAGE</ins></h1>
                 </div>
                  <br/>
                 <div className="row justify-content-center">
                      <div className=" row ms-3 col-lg-3 mt-5 me-2 border mb-5"> 
                         <label for="name" className="form-label mt-4 ">Name </label>
                         <div className='col-10'>
                              <input id='name' type='text' className="form-control ms-5" placeholder="Enter your Name" />
                              <span id='name1'className='text-danger' ></span>
                         </div>
                          <br></br><br></br>
                         <label for="email" className="form-label mt-2">Email </label>
                         <div className='col-10'>
                              <input id='email' type='email' className="form-control ms-5" placeholder="Enter your Email" />
                              <span id='email1' className='text-danger' ></span>
                         </div>
                         <br></br><br></br>
                         <label for="password" className="form-label mt-2">Password </label>
                         <div className='col-10'>
                              <input id='password' type='text' className="form-control ms-5" placeholder="Enter your Password" />
                              <span id='password1' className='text-danger' ></span>
                         </div>
                          <div className="text-center mt-5 mb-4">
                              <button className="btn btn-outline-danger text-center" 
                              onClick={Login} >Login</button>
                          </div>
                     </div> 
                 </div>
             </div><br/><br/><br/><br/><br/><br/><br/><br/>
         </div>
            </> 
        }
        </>
    )
}