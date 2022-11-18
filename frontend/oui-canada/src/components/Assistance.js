import { t } from "i18next";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import studentImg from "../img/student.jpg"
import workerImg from "../img/worker.jpg"
import advisorImg from "../img/advisor.jpg"
import "../styles/css/Assistance.css";
const Assistance = (props) => {
    const mainTheme = props.mainTheme;
    return(<div className={`container-fluid ${props.mainTheme}_assistanceContainer`}>
        <div className={`row`}>
                <h1 className={`${props.mainTheme}_title`} style={{marginTop:"8%"}}>{t("assistTitle")}</h1>
                <div className={`col ${mainTheme}_groupCard d-xxl-flex justify-content-center`}>
                    <Card className={`${mainTheme}_card`} style={{ width: '25rem' }}>
                    <Card.Img className="_img" variant="top" src={studentImg} alt="international student"/>
                    <Card.Body className="_body">
                        <Card.Title>{t("studentAssistance")}</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolore voluptatibus fugiat vero? Reprehenderit blanditiis in, quae cum et nemo beatae, saepe nisi, incidunt provident nam nostrum quasi.
                        </Card.Text>
                        <Button className="_button ">Explore</Button>
                    </Card.Body>
                    </Card>
                    <Card className={`${mainTheme}_card`} style={{ width: '25rem'}}>
                    <Card.Img className="_img" variant="top" src={workerImg} alt="worker smiling"/>
                    <Card.Body className="_body">
                        <Card.Title>{t("workerAssistance")}</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit possimus, tempore exercitationem sunt esse et, alias consequuntur ad reiciendis quos ea!
                        </Card.Text>
                        <Button className="_button">Explore</Button>
                    </Card.Body>
                    </Card>
                    <Card className={`${mainTheme}_card`} style={{ width: '25rem' }}>
                    <Card.Img className="_img" variant="top" src={advisorImg} alt="Advisor"/>
                    <Card.Body className="_body">
                        <Card.Title>{t("adviceAssistance")}</Card.Title>
                        <Card.Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis placeat corrupti atque, quo eius officia explicabo error sapiente reprehenderit deserunt. Quis reiciendis voluptate laudantium. Reprehenderit deleniti fugit nihil cumque architecto.
                        </Card.Text>
                        <Button className="_button">Explore</Button>
                    </Card.Body>
                    </Card>
                </div>
        </div>
    </div>)
}
export default Assistance;