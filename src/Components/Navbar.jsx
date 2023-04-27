import React from 'react'
import '../style/Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid pt-3 pb-3 navDiv">
                <div className="row d-flex align-items-center justify-content-between">
                    <h1 className="col-xl-2 col-lg-3 col-md-4 col-5 ms-3 display-4 fw-semibold" id="title">Shipmate</h1>
                    <div className="col-3 d-flex justify-content-evenly">
                        <button className="loginBtn">Login</button>
                        <button className="learnBtn">Learn more</button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar