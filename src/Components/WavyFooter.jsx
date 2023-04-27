import React from 'react'
import wave1 from '../images/wave1.png';
import wave2 from '../images/wave2.png';
import '../style/WavyFooter.css'

const WavyFooter = () => {
    return (
        <div className="footerDiv">
            <img src={wave1} alt="" id="wave-1" />
            <img src={wave2} alt="" id="wave-2" />
        </div>
    )
}

export default WavyFooter