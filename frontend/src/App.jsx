import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/NavBar.jsx";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
