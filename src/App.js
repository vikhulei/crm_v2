import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Profile from "./components/contact_store/profile/Profile"
import Protected from "./util/Protected"

const App = () => {
  const [auth, setAuth] = useState(false)
  return (
    <>
      <Router>
        <Home/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Protected auth={auth}/>}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
