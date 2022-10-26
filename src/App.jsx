import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  const toEdit = (data) => {
    setUsername((state) => data);
  };

  return (
    <Routes>
      <Route path="/main" element={<Main username={username} />} />
      <Route
        path="/login"
        element={<Login username={username} edit={toEdit} />}
      />
    </Routes>
  );
};

export default App;
