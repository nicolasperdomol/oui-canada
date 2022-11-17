import { t } from "i18next";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import blueGirl from "../img/blue-girl.png";
import greyGirl from "../img/grey-girl.png";
import redGirl from "../img/red-girl.png";
import "../styles/css/Assistance.css";
const Assistance = (props) => {
    const mainTheme = props.mainTheme;
    return(<div className={`container-fluid ${props.mainTheme}_assistanceContainer`}>
        <div className={`row`}>
            <div className={`col`}>
                <h1 className={`${props.mainTheme}_title`} style={{margin:"8% 2%"}}>{t("assistTitle")}</h1>
                <div className="container-fluid" style={{marginBottom:"8%"}}>
                    <div className="row">
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={blueGirl} />
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                </Card.Body>
                                <Button variant="primary">Go somewhere</Button>
                            </Card>
                        </div>
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={greyGirl} />
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                </Card.Body>
                                <Button variant="primary">Go somewhere</Button>
                            </Card>
                        </div>
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={redGirl} />
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                </Card.Body>
                                <Button variant="primary">Go somewhere</Button>
                            </Card>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Assistance;