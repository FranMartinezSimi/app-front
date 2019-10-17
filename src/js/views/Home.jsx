import React from "react";
import "../../sass/main.scss";
import Task from "../component/Task";
import Navbar from "../component/Navbar";
import { Consumer } from "../store/appContext";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Consumer>
        {({store, actions}) => {
          return store.tasks.map((task, i) => {
            return (
              <Task title={task.title} description={task.description} category={task.category} location={task.location} date={task.date} />
            )
          })
        }}
        </Consumer>
    </div>
  );
};

export default Home;