import React from "react" 
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { t } from "i18next";
import "../styles/css/Navbar.css"

const Navbar = () => {
    const languages = [
        'en', 'es'
    ];

    const getLangCookie = (name) => {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
    }

    const setLangCookie = (event) => {
        const lng = event.value
        document.cookie = `i18next=${lng}`
        window.location.reload()
    }

    const handleServices = (event) => {
        alert(event);
    }

    return (
        <div id="navbar" className="container my-5">
            <div className="row d-flex align-items-center">
                <div id="ouiCanada" className="col-5"><a href="/" className="navbarLink homeTitle">Oui Canada</a></div>
                <div className="col"><a href="/about" className="navbarLink">{t("aboutUs")}</a></div>
                <div className="col">
                    <Dropdown className="servicesDropdown" options={["First service", "Another service"]} onChange={(event)=>{handleServices(event.value)}} value={t("services")} placeholder="Select a service" />
                </div>
                <div className="col"><a href="/contact" className="navbarLink">{t("contact")}</a></div>
                <div className="col-1">
                    <Dropdown options={languages} onChange={(event)=>{setLangCookie(event)}} value={getLangCookie("i18next")} placeholder="Select a language" />
                </div>
            </div>
        </div>)
}

export default Navbar;