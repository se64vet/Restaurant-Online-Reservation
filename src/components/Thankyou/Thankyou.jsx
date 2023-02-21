import React from 'react'
import './Thankyou.css'

const Thankyou = () => {
    return (
        <div className="wrapper">
            <div>
                <h2 className="title">Thank you for your reservation</h2>
                <p className="msg">This give us time for prepare all the best for you.<br/>
                You will receive a confirmation email soon. <br/>
                We're happy and waiting to serve you.</p>

                <p className="author">
                Sincerely, <br/> <br />

                Blues Team
                </p>
            </div>
            <div className='backBtn'>
                <a  href="#">Click to back to main website</a>
            </div>

        </div>
    )
}

export default Thankyou
