import React from 'react'
import './Thankyou.css'

const Thankyou = () => {
    return (
        <div className="wrapper">
            <h2 className="title">Vielen Dank, dass Sie bei uns reserviert haben :)</h2>
            <p className="msg">Das gibt uns Zeit, uns darauf vorzubereiten, Ihnen zu dienen. <br/><br />
            Sie erhalten in wenigen Sekunden eine Reservierungsbestätigungs-E-Mail. <br/><br />
            Wir freuen uns darauf, Sie im Goc Pho Jena zu bedienen.</p>

            <p className="author">
            Schöne Grüße, <br/> <br />

            GocPho-Team
            </p>
        </div>
    )
}

export default Thankyou
