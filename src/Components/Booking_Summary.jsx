import React from 'react'
import '../style/Booking_Summary.css'
import origin from '../images/origin.png'
import plane from '../images/plane.png'
import weight from '../images/weight.png'
import boat from '../images/boat.png'
import pallets from '../images/pallets.png'

const Booking_Summary = () => {
  return (
    <div className='summaryDiv pb-5'>
      <div className='navigationDiv d-flex flex-column align-items-center justify-content-center'>
        <div className='d-flex'>
          <button className="navBtn">1</button>
          <hr className="navLine" size="10" />
          <button className="navBtn">2</button>
          <hr className="navLine" />
          <button className="navBtn">3</button>
          <hr className="navLine" />
          <button className="navBtn">4</button>
        </div>
        <div className='d-flex justify-content-between navLink'>
          <p>Services</p>
          <p>Recommended services</p>
          <p className='me-5'>Results</p>
          <p>Booking</p>
        </div>

      </div>
      <div className='row h-75 d-flex justify-content-between ps-5 pe-5'>
        <div className='col-8 leftDiv'>
          <div className="summary mb-3 box p-5">
            <h2>Booking Summary</h2>
            <div className="d-flex align-flex-start m-auto p-5 mt-4 w-75 info">
              <div className='text-center'>
                <img src={origin} alt="" />
                <h4 className='mt-4'>Delhi,</h4>
                <h4>110003 India</h4>
              </div>
              <hr className="w-100" id="line" />
              <div className='text-center'>
                <img src={origin} alt="" />
                <h4 className='mt-4'>Shanghai</h4>
                <h4>200080, China</h4>
              </div>
              <img src={plane} alt="" id="plane" className='mb-3' />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-4 weight box p-4 text-center">
              <h4 className="fw-normal">Total Weight/Volume</h4>
              <img src={weight} alt="" className='m-3' />
              <h4 className="fw-semibold">114.21KG</h4>
            </div>
            <div className="col-8 load box p-4">
              <h4>Seller: Primetime Worldwide</h4>
              <div className="d-flex align-items-baseline justify-content-center">
                <h2>1 X &nbsp;</h2>
                <div>
                  <img src={pallets} alt="" />
                  <h4>Pallets</h4>
                  <p>230 X 140 X  120 CM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6 seller box p-5">
              <h4>Seller: Primetime Worldwide</h4>
              <img src={boat} alt="" className='mt-5 d-block m-auto' />
            </div>
            <div className="col-6 insurance box p-5">
              <h4>Insurance:Xcover.com</h4>
              <h3 className='mt-5 text-center fw-bold'>XCOVER.COM</h3>
            </div>
          </div>
        </div>
        <div className='col-3 price_details box p-5'>
          <h2>Price Details</h2>
          <div className="d-flex justify-content-between details">
            <p>Seller’s Quote</p>
            <p>$ 3,659.25</p>
          </div>
          <hr className='mb-4' />
          <div className="d-flex justify-content-between details">
            <p>Duties and taxes</p>
            <p>Not included</p>
          </div>
          <div className="d-flex justify-content-between details">
            <p>Insurance</p>
            <p>$323.40</p>
          </div>
          <p id="additional_detail">Based on the items cost</p>
          <hr className='mb-4' />
          <p className="details">Add a promo code</p>
          <div className="d-flex justify-content-between details">
            <p>Platform fee</p>
            <p>$119.48</p>
          </div>
          <hr className='mb-4' />
          <div className="d-flex justify-content-between">
            <h1>Total</h1>
            <h1>$ 4,102.13</h1>
          </div>
          <button className="checkBtn">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Booking_Summary