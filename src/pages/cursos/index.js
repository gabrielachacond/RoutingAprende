import React from "react";
import { coursesData } from "../../api/courses-data";
import { Link, Route, Switch } from "react-router-dom";
import Curso from "../../components/Curso";

const listaCursos = props => {
  return (
    <ul>
      {coursesData.map(curso => (
        <li key={curso.id}>
          <Link to={`${props.match.url}/${curso.id}`}>{curso.name}</Link>
        </li>
      ))}
    </ul>
  );
};

const Cursos = props => {
  const { match } = props;
  console.log(props);
  console.log(props.match);

  return (
    <div>
      <h1>Cursos</h1>
      <Switch>
        <Route exact path={match.path} component={listaCursos} />
        <Route
          path={`${match.path}/:id`}
          render={props => {
            const curso = coursesData.find(
              curso => curso.id === props.match.params.id
            );
            return <Curso name={curso.name} description={curso.description} />;
          }}
        />
      </Switch>
    </div>
  );
};

export default Cursos;
