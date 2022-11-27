import { t } from "i18next";
import StepProgressBar from 'react-step-progress';
import Card from "react-bootstrap/Card";
import 'react-step-progress/dist/index.css';
import "../styles/css/Assistance.css";

const Assistance = (props) => {
    const mainTheme = props.mainTheme;
    const step1Content = <div className="container-fluid">
        <div className="row d-flex justify-content-center">
            <div className="col-6">
                <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
        </div>
    </div>;
    const step2Content = <h1>Step 2 Content</h1>;
    const step3Content = <h1>Step 3 Content</h1>;

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