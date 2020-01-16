import React from 'react' ;
import './style.css';



const Weather = (props) => {

    
    
    
        return (
            <div className="info">
                
                {
                    props.tempreature && <p className="InfoKey">temperature : <span className="infoValue">{props.tempreature}</span></p>
                }
                {
                    props.city &&  <p className="InfoKey">city : <span className="infoValue">{props.city}</span></p>
                }
                {
                    props.rank && <p className="InfoKey">Rank : <span className="infoValue">{props.rank}</span></p>
                }
               {
                   props.humidity && <p className="InfoKey">Humidity : <span className="infoValue">{props.humidity}</span></p>
               }
                {
                    props.pressure && <p className="InfoKey">Name : <span className="infoValue">{props.pressure}</span></p>
                }
                {
                    props.description && <p className="InfoKey">description : <span className="infoValue">{props.description}</span></p>
                }
                {
                     props.error && <p className="InfoKey"> Prix :<span className="infoValue">{props.error}</span></p>
                }
                
                
            </div>
        )
    
}

export default Weather;