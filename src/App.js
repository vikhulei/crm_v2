import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Wrapper, BackgroundColor, BackgroundImage, NavBar, Title, Logo} from "./AppStyle"
import background from "./assets/background.jpg"
import logo from "./assets/logo.png"
import Login from "./components/login/Login"
import Profile from "./components/profile/Profile"
import Protected from "./util/Protected"

function App() {
  const [auth, setAuth] = useState(false)
  return (
    <Wrapper>
      <Router>
        <NavBar>
          <Logo src={logo} alt="logo" />
          <Title>Contact Store</Title>
        </NavBar>
    <BackgroundColor>
        <BackgroundImage src={background} alt="background image" />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Protected auth={auth}/>}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
    </BackgroundColor>
      </Router>
    </Wrapper>
  );
}

export default App;
