import React, {useState} from 'react'
import './ReservationCard.css'
import { useHistory } from 'react-router-dom'

import { init} from 'emailjs-com'
import emailjs from 'emailjs-com'

init(process.env.REACT_APP_EMAILJS_ID);

const ReservationCard = () => {
    let history = useHistory()
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
            <h2 className="title">Enjoy your wonderful time <br/> with us</h2>
            

            <form action="" id="reservierung" onSubmit={onSubmit}>
                <div className='form__element'>
                    <label htmlFor="name">Your name</label>
                    <input className='inputText' type="text" name='name'  onChange={handleChange} value={infos.name} required/>
                </div>
                <div className='form__element'>
                    <label htmlFor="gaste">Number of people</label>
                    <input className='inputText' type="number" name='personenzahl'  onChange={handleChange} value={infos.personenzahl} />
                </div>
                
                <div className='form__element'>
                    <label htmlFor="sitzplatz">Where do you want to be seated?</label>
                    <select className='inputText' name="sitzplatz" id="sitzplatz" onChange={handleChange} value={infos.sitzplatz}>
                        <option value="Garten">Garden</option>
                        <option value="im Hause">Main Lounge</option>
                        <option value="im Hause">At the Bar</option>
                    </select>
                </div>
                <div className='form__element'>
                    <label htmlFor="datum">Date</label>
                    <input className='inputText' type="date" name="datum"  onChange={handleChange} value={infos.datum} required/>
                </div>
                <div className='form__element'>
                    <label htmlFor="zeit">Time</label>
                    <input className='inputText' type="time"  name="zeit"  onChange={handleChange} value={infos.zeit} required/>
                </div>
                <div className='form__element'>
                    <label htmlFor="zeit">Your Email</label>
                    <input className='inputText' type="email"  name="reply_to"  onChange={handleChange} value={infos.reply_to} required/>
                </div>

                <button className='submitBtn' type='submit'>Submit</button>
            </form>

            
            
        </div>
    )
}

export default ReservationCard
