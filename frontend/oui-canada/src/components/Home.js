import Hero from "./Hero"
import "../styles/css/main.css"
import Assistance from "./Assistance";

const Home = (props) => {
    return(
        <div>
            <Hero themes={props.themes} mainTheme={props.mainTheme}/>
            <Assistance mainTheme={props.mainTheme}/>
            
        </div>
    );
}

export default Home;