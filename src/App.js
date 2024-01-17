import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import LoginScreen from './pages/Login/Login';
import Footer from "./pages/Footer/Footer";
// import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <LoginScreen />
      {/* <HomePage /> */}
      <Footer />
    </div>
  );
}

export default App;
