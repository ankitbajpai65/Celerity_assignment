import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/Home.css'
import WavyFooter from './WavyFooter'

const Home = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        origin: "",
        dest: "",
        data: "",
        load: ""
    })
    const inputEvent = (e) => {
        console.log(e.target.name, e.target.value);
    }
    const submitForm = () => {
        navigate('/booking_summary')
    }
    return (
        <>
            <div className="container-fluid homeDiv">
                <div className="childHomeDiv">
                    <div className="text-center">
                        <h1>Hassle-Free Shipping Solutions</h1>
                        <p>Compare, book, and manage your freight across the world’s top logistics providers, all on one platform.</p>
                    </div>
                    <div className="infoDiv container">
                        <ul className='list-unstyled d-flex align-items-center justify-content-between p-3'>
                            <li>
                                <i class="bi bi-geo-alt fs-4 me-3"></i>
                                <input type="text" placeholder="Origin,Port,City" onChange={inputEvent} name="origin" />
                            </li>
                            <li>
                                <i class="bi bi-geo-alt fs-4 me-3"></i>
                                <input type="text" placeholder="Destination,Port,City" onChange={inputEvent} name="destination" />
                            </li>
                            <li>
                                <i class="bi bi-calendar4 fs-4 me-3"></i>
                                <input type="text" placeholder="13 April 2023" onChange={inputEvent} name="date" />
                            </li>
                            <li>
                                <i class="bi bi-cloud-arrow-down fs-4 me-3"></i>
                                <input type="text" placeholder="Load" onChange={inputEvent} name="load" />
                            </li>
                            <li>
                                <button className="rightBtn" onClick={submitForm}>
                                    <i class="bi bi-arrow-right fs-4 fw-bold"></i>
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
        </>
    )
}

export default Home