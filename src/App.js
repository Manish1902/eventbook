import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/Login/Login";
// import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import HomePage from "./pages/HomePage/HomePage";
import PaymentPage from "./pages/Payment/Payment";
import EventDetailPage from "./pages/Events/EventDetailPage";
import Events from "./pages/Events/Events";
// import { DataContext } from "./context/dataContext";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginScreen />}></Route>
            {/* <Route path="/SignIn" element={<SignIn />}></Route> */}
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/HomePage" element={<HomePage />}></Route>
            <Route path="/Payment" element={<PaymentPage />}></Route>
            <Route path="/Events" element={<EventDetailPage />}></Route>
            <Route path="/Events" element={<Events />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
