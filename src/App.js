import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import {About} from './MyComponents/About';
import { useState, useEffect } from 'react';
import { 
  BrowserRouter as 
  Router, 
  Route, 
  Routes } from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") == null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    console.log("Deleting todo:", todo);
    setTodos(todos.filter((e) => e !== todo));
  }

  const addTodo = (title, desc) => {
    console.log("Adding todo:", title, desc);
    let sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const myTodo = { sno, title, desc };
    setTodos([...todos, myTodo]);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <Header title="My Todos List" searchBar={false} />
      <Routes>
        <Route 
           exact path="/" 
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } 
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
