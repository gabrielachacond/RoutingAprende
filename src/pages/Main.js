import React from "react";
import Cursos from "./cursos";
import Eventos from "./eventos";
import Home from "./home";
import { Route } from "react-router-dom";

const Main = () => {
  return (
    <main className="main">
      <Route exact path="/" component={Home} />
      <Route path="/cursos" component={Cursos} />
      <Route path="/eventos" component={Eventos} />
    </main>
  );
};

export default Main;
