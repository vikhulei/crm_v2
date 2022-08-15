import NavBar from "./navbar/NavBar";
import {Wrapper, BackgroundColor, BackgroundImage} from "./BackgroundStyle"
import background from "../../assets/background.jpg"


const Background = () => {
  return (
    <Wrapper>
    <NavBar/>
    <BackgroundColor>
        <BackgroundImage src={background} alt="background image" />
    </BackgroundColor>
    </Wrapper>
  );
}

export default Background;
