import { useTranslation } from "react-i18next";
import {Fade} from "react-reveal";
import blueGirl from "../img/blue-girl.png";
import greyGirl from "../img/grey-girl.png";
import redGirl from "../img/red-girl.png";
import yellowGirl from "../img/yellow-girl.png";
import {useRef, useEffect} from 'react'
import "../styles/css/Hero.css";
import Typed from "typed.js";
import i18next from "i18next";

const Hero = (props) => {
    const { t } = useTranslation();
    const autoTyped = useRef(null);
    const girlImage = (themes, mainTheme) => {
        switch (mainTheme) {
            case themes[0] : return blueGirl;
            case themes[1] : return greyGirl;
            case themes[2] : return redGirl;
            default: return yellowGirl;
        }
    }

    useEffect(()=>{
    const strings = i18next.language === "es" ? ["Viaja", "Estudia", "Trabaja", "Explora"] 
        : ["Travel", "Study", "Work", "Explore"];

        const typed = new Typed(autoTyped.current, {
            strings:strings,
            startDelay:800,
            typeSpeed:150,
            backDelay:600,
            backSpeed:250,
            smartBackspace:false,
            showCursor:true,
            loop:true,
        });

        return () => {
        typed.destroy();
        };
    }, [])

    return(<div className="container">
        <div className="row">
            <div className="col d-flex align-items-center">
                <h1>{t("heroTitle")}<span id="auto-typed" className={props.mainTheme + "_header"} ref={autoTyped}></span></h1>
            </div>
            <div className="col d-flex justify-content-center">
                <Fade left>
                    <img className="studyingGirl" src={girlImage(props.themes, props.mainTheme)} alt="Girl studying"/>
                </Fade>
            </div>
        </div>
    </div>)
}

export default Hero;