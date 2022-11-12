import React from "react" 
import "../styles/css/Navbar.css"
function Navbar(){
    return (
        <div id="navbar" className="container">
            <div className="row">
                <div className="col-6">Oui Canada</div>
                <div className="col">Nosotros</div>
                <div className="col">Servicios</div>
                <div className="col">Contactanos</div>
            </div>
        </div>)
}

export default Navbar;