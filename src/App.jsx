import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Tasks from './pages/Tasks/Tasks';
import Profile from './pages/Profile/Profile';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="anim_bg">
      </div>

      <Router>
      <div className="app_content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
        </div>
        <Navigation/>
    </Router>
    </div>
  );
}

export default App;
