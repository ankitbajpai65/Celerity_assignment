import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/Home.css'
import WavyFooter from './WavyFooter'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        origin: "",
        destination: "",
        date: "",
        load: ""
    })
    const inputEvent = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        // console.log(name, value);
        setData({ ...data, [name]: value });
    }
    function removeVal() {
        document.querySelectorAll('.input').forEach(element => {
            element.value = "";
        });
    }
    const submitForm = () => {
        const { origin, dest, date, load } = data;
        if (origin === '' || dest === '' || date === '' || load === '') {
            toast.error("Please fill all details!", {
                position: "top-center",
                theme: "dark"
            });
            return false;
        }
        navigate('/booking_summary', { state: data })
        setTimeout(removeVal, 500);
    }
    return (
        <>
            <div className="container-fluid homeDiv">
                <div className="childHomeDiv">
                    <div className="text-center">
                        <h1>Hassle-Free Shipping Solutions</h1>
                        <p>Compare, book, and manage your freight across the world’s top logistics providers, all on one platform.</p>
                    </div>
                    <div className="form container">
                        <ul className='list-unstyled d-flex align-items-center justify-content-between p-3'>
                            <li>
                                <i className="bi bi-geo-alt fs-4 me-3"></i>
                                <input type="text" placeholder="Origin,Port,City" onChange={inputEvent} name="origin" className='input' />
                            </li>
                            <li>
                                <i className="bi bi-geo-alt fs-4 me-3"></i>
                                <input type="text" placeholder="Destination,Port,City" onChange={inputEvent} name="destination" className='input' />
                            </li>
                            <li>
                                <i className="bi bi-calendar4 fs-4 me-3"></i>
                                <input type="text" placeholder="13 April 2023" onChange={inputEvent} name="date" className='input' />
                            </li>
                            <li>
                                <i className="bi bi-cloud-arrow-down fs-4 me-3"></i>
                                <input type="text" placeholder="Load" onChange={inputEvent} name="load" className='input' />
                            </li>
                            <li>
                                <button className="rightBtn" onClick={submitForm}>
                                    <i className="bi bi-arrow-right fs-4 fw-bold"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="servicesDiv">
                        <h2 className="text-center mb-5">Services</h2>
                        <div className="cardDiv">
                            <div className='servicesCard p-4'>
                                <p>Freight Services</p>
                                <hr className='mt-4 mb-4' />
                                <p>Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door.</p>
                            </div>
                            <div className='servicesCard p-4'>
                                <p>Business Services</p>
                                <hr className='mt-4 mb-4' />
                                <p>We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.</p>
                            </div>
                            <div className='servicesCard p-4'>
                                <p>Shipping & Logistics</p>
                                <hr className='mt-4 mb-4' />
                                <p>Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs.</p>
                            </div>
                            <div className='servicesCard p-4'>
                                <p>24/7 Support</p>
                                <hr className='mt-4 mb-4' />
                                <p>Receive support from our experts all over the world at every stage of the process, 24/7.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <WavyFooter />
            <ToastContainer />
        </>
    )
}

export default Home