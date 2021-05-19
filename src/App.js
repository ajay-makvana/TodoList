import Header from './Components/Header'
import { Footer } from './Components/Footer'
import { Todos } from './Components/Todos'
import { AddTodo } from './Components/AddTodo'
import React, { useState, useEffect } from 'react';
import { About } from './Components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo = (title, Desc) => {
    let sno
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo =
    {
      sno: sno,
      title: title,
      Desc: Desc,
    }
    setTodos([...todos, mytodo]);
  }

  return (
    <>
      <Router>
        <Header title="TodoList" contactusrequire={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>);
}

export default App;
