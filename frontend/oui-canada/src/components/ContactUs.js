import { t } from "i18next";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button";
// import ReCaptcha from "react-google-recaptcha"
import EmailJS from "@emailjs/browser"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/css/ContactUs.css"

const ContactUs = (props) => {
    const [btnDisabled] = useState(true);
    const [reCaptcha] = useState(null);
    const mainTheme = props.mainTheme;

    // const handleReCaptcha = (token) => {
    //     setReCaptcha(token)
    //     setBtnDisabled(false);
    // }
    const toastNotify = (toastMsg) => {
        toast.success(toastMsg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const formParams = e.target;
        if(formParams["firstname"].value.trim().length === 0
            || formParams["lastname"].value.trim().length === 0
            || formParams["email"].value.trim().length === 0){
                console.log("Empty field found");
                e.target.reset()
                return;
        }
        const params = {
            'firstname':formParams["firstname"].value.trim(),
            'lastname':formParams["lastname"].value.trim(),
            'email':formParams["email"].value.trim(),
            'message':formParams["message"].value.trim(),
            'date': new Date().toISOString().split('T')[0],
            'g-recaptcha-response': reCaptcha
        }
        
        EmailJS.send("oui-canada", "ouiCanadaForm", params, process.env.REACT_APP_EMAIL_KEY)
            .then((result) => {
                console.log(result.text)
                toastNotify("Success")} 
            ,(error)=>{
                console.log(error)
                toast.error("Ups, something went wrong")
            });
        e.target.reset();
    }

    return(<div className="container-fluid">
        <div id="contactUsRow" className="row justify-content-center">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className="col-4">
                <h1 style={{padding:"16px 0 16px 0"}}>{t("contactUsTitle")}</h1>
                {t("contactUsSubTitle")}
                <ul id="unorderList">
                    <li id="firstListItem"><b>{t("canada")}: </b>+1 (514) 571-0901</li>
                    <li><b>Colombia: </b>+47 (111) 111-1111</li>
                    <li><b>{t("email")}: </b>karen.lamilla@ouicanada.com</li>
                    <li><b>{t("email")}: </b>karen.lamilla2@ouicanada.com</li>
                </ul>
            </div>
            <div className="col-4">
                <Card>
                    <Card.Body className="p-5">
                        <Card.Title><h2>{t("contactUsCardTitle")}</h2></Card.Title>
                        <form className="container-fluid" onSubmit={sendEmail}>
                            <div className="row">
                                <div className="p-1"><div className="form-floating" id="floatingFirstName">
                                    <input type="text" name="firstname" className="form-control" id="firstName" placeholder={t("firstName")}/>
                                    <label htmlFor="floatingFirstName">{t("firstName")}</label>
                                </div></div>
                                <div className="p-1"><div className="form-floating" id="floatingLastName">
                                    <input type="text" name="lastname" className="form-control" id="lastName" placeholder={t("lastName")}/>
                                    <label htmlFor="floatingLastName">{t("lastName")}</label>
                                </div></div>
                                <div className="p-1">
                                    <div className="form-floating" id="floatingEmail">
                                        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder={t("email")}/>
                                        <label htmlFor="floatingEmail">{t("email")}</label>
                                    </div>
                                    <div id="emailHelp" className="form-text m-1">{t("emailSubtitle")}</div>
                                    <div className="form-outline form-floating" id="floatingMessage">
                                        <textarea className="form-control" name="message" id="textAreaExample" rows="4" placeholder="message"></textarea>
                                        <label htmlFor="floatingMessage">{t("message")}</label>
                                    </div>
                                    {/* <ReCaptcha 
                                        className="recatcha"
                                        sitekey= {process.env.REACT_APP_SITE_KEY}
                                        onChange={(token)=>{handleReCaptcha(token)}}
                                    /> */}
                                </div>
                                <Button type="submit" id="contactUsFormBtn" className={`mt-4 ${mainTheme}_contactUsFormBtn`} disabled={btnDisabled}>Send</Button>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>)
}

export default ContactUs;