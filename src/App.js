import "./App.css";
import Emptable from "./components/EmpTable/Emptable";
import { Route, Routes } from "react-router-dom";
import Adduser from "./components/Adduser/Adduser";
import UserContextProvider from "./Context/UserContextProvider";
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Emptable />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/edit-user/:id" element={<Adduser />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
