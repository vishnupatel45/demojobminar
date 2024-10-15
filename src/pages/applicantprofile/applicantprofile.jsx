import { useState } from 'react'
<<<<<<< HEAD
import profile from '../../assets/Images/dp-dummy.png'
export function Applicantprofile() {
    const [applicantdetails, setapplicatdetails] = useState({ name: "Nikhil ahirwar", DOB: "29/08/2001", Gmail: "Nikhilraj2908@gmail.com", Location: "Vidisha" })
    return (
        <>
            <div className='container row'>

                <div className='col-9 bg-light'>
                    <div className='fw-bold fs-5 '>About</div>
                    <div className='mt-5 ps-4 d-flex align-items-center ' >
                        <div className="row text-secondary " style={{ height: "30vh", backgroundColor: "white", boxShadow: "1px 1px 5px 4px #edf1f0  " }}>
                            <div className='col-3 d-flex align-items-center'>
                                <img className='border border-1 rounded bg-secondary' src={profile} alt="Profile Pictre" style={{ width: "100%", }}></img>
                            </div>
                            <div className='col-9 ps-4 ' style={{ alignContent: "center" }} >
                                <dl >
                                    <div className='row'>
                                        <dt className='col-3'>Name:</dt>
                                        <dd className='col-9'>{applicantdetails.name}</dd>

                                    </div>
                                    <div className='row'>
                                        <dt className='col-3'>Birth Date:</dt>
                                        <dd className='col-9'>{applicantdetails.DOB}</dd>
                                    </div>
                                    <div className='row'>
                                        <dt className='col-3'>Email:</dt>
                                        <dd className='col-9'>{applicantdetails.Gmail}</dd>
                                    </div>
                                    <div className='row'>
                                        <dt className='col-3'>Location:</dt>

                                        <dd className='col-9'>{applicantdetails.Location}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className='fw-bold text-secondary bg-light p-3'>
                        Documents from user
                    </div>
                    <div className='bg-light text-secondary fw-bold p-3'>
                        Financials
                    </div >
                    <div className='bg-light text-secondary p-3 fw-bold'>My Applications</div>
=======
import './applicantprofile.css'
import profile from '../../assets/Images/dp-dummy.png'
import { useNavigate } from 'react-router-dom'
import { Userprofile } from '../../components/userprofile/userprofile'
export function Applicantprofile() {
    const navigate = useNavigate()
    const [applicantdetails, setapplicatdetails] = useState({ name: "Nikhil ahirwar", DOB: "29/08/2001", Gmail: "Nikhilraj2908@gmail.com", Location: "Vidisha" })
    const applicantprofileapplication = () => {
        navigate('/dashboardadmin/applicantprofileapplication') ////////////////////with parameter applicant application no will come and then  we will get the applicant application details from the database
    }
    const applicantfinanceclick = () => {

        navigate('/dashboardadmin/applicantfinance')
    }
    return (
        <>
            <div className='container row'>
                <div className='col-9 ' style={{ width: "100%" }}>
                    <div className='fw-bold fs-5 '>About</div>
                    <Userprofile applicantdetails={applicantdetails} />

                    <div >
                        <div >
                            <button style={{ width: "250px"}} className='my-5 btn btn-light applicantprofile fw-bold text-secondary  p-3'>
                                Documents from user
                            </button>
                        </div>
                        <div  >
                            <button style={{ width: "250px" }} className='my-5 btn btn-light applicantprofile  text-secondary fw-bold p-3' onClick={applicantfinanceclick}>
                                Financials
                            </button >
                        </div>
                        <div  >
                            <button style={{ width: "250px" }} className='my-5 btn btn-light applicantprofile  text-secondary p-3 fw-bold' onClick={applicantprofileapplication} >My Applications</button>

                        </div>
                    </div>
>>>>>>> nikhil
                </div>
            </div>

        </>
    )
}