import "../styles/css/Hero.css"
import {Fade} from "react-reveal"
import blueGirl from "../img/blue-girl.png"
function Hero(){
    return(<div className="container">
        <div className="row">
            <div className="col">hero</div>
            <div className="col">
                <Fade left>
                    <img src={blueGirl} alt="Girl studying"/>
                </Fade>
            </div>
        </div>
    </div>)
}

export default Hero;