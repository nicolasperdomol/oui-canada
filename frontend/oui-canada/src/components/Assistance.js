import { t } from "i18next";
import StepProgressBar from 'react-step-progress';
import Card from "react-bootstrap/Card";
import 'react-step-progress/dist/index.css';
import "../styles/css/Assistance.css";
import library from '../img/library.png'
import health from '../img/health.jpg'

const Assistance = (props) => {
    const mainTheme = props.mainTheme;
    const step1Content = 
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <Card>
                    <Card.Body>
                        <Card.Title>{t("assistanceCollegeTitle")}</Card.Title>
                        <Card.Text>{t("assistanceCollege")}</Card.Text>
                        <Card.Img src={library}/>
                    </Card.Body>
                    </Card>
                </div>
            </div>
        </div>;
    const step2Content = 
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <Card>
                    <Card.Body>
                        <Card.Title>{t("assistanceInsuranceTitle")}</Card.Title>
                        <Card.Text>{t("assistanceInsurance")}</Card.Text>
                        <Card.Img src={health}/>
                    </Card.Body>
                    </Card>
                </div>
            </div>
        </div>;
    const step3Content = 
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <Card>
                    <Card.Body>
                        <Card.Title>{t("assistanceAfterYouArriveTitle")}</Card.Title>
                        <Card.Text>{t("assistanceAfterYouArrive")}</Card.Text>
                    </Card.Body>
                    </Card>
                </div>
            </div>
        </div>;
    return(
    <div className="container-fluid">
        <div className={`row ${mainTheme}_assistanceHeader`}>
                <h2 className={`${mainTheme}_title`}>{t("assistTitle")}</h2>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-6">
                <StepProgressBar
                    startingStep={0}
                    previousBtnName={t("previousBtnName")}
                    nextBtnName={t("nextBtnName")}
                    primaryBtnClass={`${mainTheme}_stepProgressPrimaryBtn`}
                    secondaryBtnClass={`${mainTheme}_stepProgressSecondaryBtn`}
                    steps={[
                        {
                        label: 'Step 1',
                        name: 'step 1',
                        content: step1Content
                        },
                        {
                        label: 'Step 2',
                        name: 'step 2',
                        content: step2Content
                        },
                        {
                        label: 'Step 3',
                        name: 'step 3',
                        content: step3Content
                        }
                    ]}
                />
            </div>
        </div>
    </div>)
}
export default Assistance;