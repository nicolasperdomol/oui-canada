import { t } from "i18next";
import "../styles/css/Assistance.css";
const Assistance = (props) => {
    const mainTheme = props.mainTheme;
    return(<div className={`container-fluid ${props.mainTheme}_assistanceContainer`}>
        <div className={`row`}>
            <div className={`col`}><h1 className={`${props.mainTheme}_title`}>{t("assistTitle")}</h1></div>
        </div>
    </div>)
}
export default Assistance;