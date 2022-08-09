import {Title, BackgroundColor, BackgroundImage} from "./HomeStyle"
import background from "../../../assets/background.jpg"

const Home = () => {
    return (
        <BackgroundColor>
        <BackgroundImage src={background} alt="background image"/>
        <Title>Hello I am here</Title>
        </BackgroundColor>
    )
}

export default Home