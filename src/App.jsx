import Homepage from "./components/Homepage"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import AddBlog from "./components/AddBlog"
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import ViewBlog from "./components/ViewBlog"


function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('loggedInUser')));
  }, [])

  const updateUser = (user) => {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    setUser(user);
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser({});
    window.location.reload()
  }

  console.log(user);
  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
      <Navbar user={user} handleLogout={handleLogout} />
      {/* <Router> */}
        <Routes>
          <Route path="/" exact element={<Homepage user={user} />} />
          <Route path="/view" exact element={<ViewBlog user={user} />} />
          <Route path="/login" element={!user ? <Login updateUser={updateUser} /> : <Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-blog" element={!user ? <Login updateUser={updateUser} /> : <AddBlog user={user} />} />
        </Routes>
      {/* </Router> */}
    </div>
  )
}

export default App
