import React from "react";
import { eventosData } from "../../api/eventos-data";
import { Link, Route, Switch } from "react-router-dom";
import Evento from "../../components/Evento";

const listaEventos = props => {
  return (
    <ul>
      {eventosData.map(Evento => (
        <li key={Evento.id}>
          <Link to={`${props.match.url}/${Evento.id}`}>{Evento.name}</Link>
          <li>El trabajo de la decada:Fullstack development</li>
          <li>Ser un buen Frontend</li>
          <li>En auge:Data Science</li>
        </li>
      ))}
    </ul>
  );
};

const Eventos = props => {
  const { match } = props;
  console.log(props);
  console.log(props.match);

  return (
    <div>
      <h1>Eventos</h1>
      <Switch>
        <Route exact path={match.path} component={listaEventos} />
        <Route
          path={`${match.path}/:id`}
          render={props => {
            const Evento = eventosData.find(
              Evento => Evento.id === props.match.params.id
            );
            return (
              <Evento name={Evento.name} description={Evento.description} />
            );
          }}
        />
      </Switch>
    </div>
  );
};

export default Eventos;
