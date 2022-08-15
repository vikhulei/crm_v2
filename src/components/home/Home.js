import NavBar from "./navbar/NavBar";
import {Wrapper, BackgroundColor, BackgroundImage} from "./HomeStyle"
import background from "../../assets/background.jpg"


const Home = () => {
  return (
    <Wrapper>
    <NavBar/>
    <BackgroundColor>
        <BackgroundImage src={background} alt="background image" />
    </BackgroundColor>
    </Wrapper>
  );
}

export default Home;
