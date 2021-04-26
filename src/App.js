import './App.css';

import React from "react";

import Joueurs from "./Pages/joueurs/Joueurs";

import Home from "./Pages/home/Home";
import Sign from "./Pages/sign/Sign";
import UserForm from "./Pages/Admin/Form/UserForm";
function App() {
  return (
    <div className="wrapper">
      {/*<Joueurs/>*/}
     {/*<Home/>*/}
     {/*<Sign/>*/}
     <UserForm/>
    </div>
  );
}

export default App;
