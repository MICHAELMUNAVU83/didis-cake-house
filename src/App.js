import "./App.css";
import Home from "./pages/Home";
import Order from "./pages/Order";
import OrderDetails from "./pages/OrderDetails"
import About from "./pages/About";
import Saved from "./pages/Saved";
import Gallery from "./pages/Gallery";
import { RoomProvider } from "./context"
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <RoomProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={  <Home />} />
          <Route path="/about" element={  <About />} />
          <Route path="/order" element={  <Order />} />
          <Route path="/gallery" element={  <Gallery />} />
          <Route path="/order/:id" element={  <OrderDetails />} />
          <Route path="/saved" element={  <Saved />} />
          

        </Routes>
        
      </Router>

    </RoomProvider>
      
    
  );
}

export default App;
