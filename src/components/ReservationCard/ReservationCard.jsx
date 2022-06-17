import React, {useState} from 'react'
import './ReservationCard.css'
import { useHistory } from 'react-router-dom'

import {EmailJSResponseStatus, init} from 'emailjs-com'
import emailjs from 'emailjs-com'

init(process.env.REACT_APP_EMAILJS_ID);

const ReservationCard = () => {
    let history = useHistory()
    const [redirect, setRedirect] = useState(false)
    const [infos, setInfos] = useState({
        personenzahl: " ",
        sitzplatz: "Garten",
        datum: " ",
        zeit: "17:30",
        reply_to: " ",
        name: " ",
    })

    const handleChange = (event) =>{
        

        const target = event.target;
        const name = target.name;
        const value = target.value;

        setInfos(({...infos,
            [name] : value
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(infos)
        emailjs.send('default_service', 'forOwner', infos);
        
        history.push("/thankyou")
    }
    
    return (
        <div className='card__wrapper'>
            <h2 className="title">Genießt eure schöne zeit <br/> bei uns</h2>
            

            <form action="" id="reservierung" onSubmit={onSubmit}>
                <div className='form__element'>
                    <label htmlFor="name">Ihre Name</label>
                    <input className='inputText' type="text" name='name'  onChange={handleChange} value={infos.name} required/>
                </div>
                <div className='form__element'>
                    <label htmlFor="gaste">Personenzahl</label>
                    <input className='inputText' type="number" name='personenzahl'  onChange={handleChange} value={infos.personenzahl} />
                </div>
                
                <div className='form__element'>
                    <label htmlFor="sitzplatz">Sitzplatz</label>
                    <select className='inputText' name="sitzplatz" id="sitzplatz" onChange={handleChange} value={infos.sitzplatz}>
                        <option value="Garten">Garten</option>
                        <option value="im Hause">im Hause</option>
                    </select>
                </div>
                <div className='form__element'>
                    <label htmlFor="datum">Datum</label>
                    <input className='inputText' type="date" name="datum"  onChange={handleChange} value={infos.datum} required/>
                </div>
                <div className='form__element'>
                    <label htmlFor="zeit">Zeit</label>
                    <input className='inputText' type="time"  name="zeit"  onChange={handleChange} value={infos.zeit} required/>
                </div>
                <div className='form__element'>
                    <label htmlFor="zeit">Ihre Email</label>
                    <input className='inputText' type="email"  name="reply_to"  onChange={handleChange} value={infos.reply_to} required/>
                </div>

                <button className='submitBtn' type='submit'>Reservieren</button>
            </form>

            
            
        </div>
    )
}

export default ReservationCard
