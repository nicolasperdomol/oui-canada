import Hero from "./Hero"
import "../styles/css/main.css"

const Home = (props) => {
    return(
        <div>
            <Hero themes={props.themes} mainTheme={props.mainTheme}/>
        </div>
    );
}

export default Home;