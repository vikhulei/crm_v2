import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Background from "./components/background/Background"
import Login from "./pages/login/Login"
import ContactStore from "./pages/contactstore/ContactStore"
import Protected from "./util/Protected"

const App = () => {
  const [auth, setAuth] = useState(true)
  return (
    <>
      <Background/>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Protected auth={auth} />}>
            <Route path="/contactstore" element={<ContactStore />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
