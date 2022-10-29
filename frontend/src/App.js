import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import WorkoutContextProvider from "./context/CreateContext";
function App() {
  return (
    <WorkoutContextProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </WorkoutContextProvider>
  );
}

export default App;
