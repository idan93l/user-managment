import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./pages/Header/Header";
import Customers from "./pages/Customers/Customers";
import Customer from "./pages/Customer/Customer";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/users");
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header users={users} />} />
          <Route path="/customers" element={<Customers users={users} />} />
          <Route path="/customer/:id" element={<Customer /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
