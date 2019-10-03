import React from "react";
import Todo from "./Todo.js";
import TodoForm from "./TodoForm.js";

class TodoList extends React.Component {
   constructor() {
      super();
   }

   renderList () {
      if (this.props.list && this.props.list.length > 0) {
         // return this.props.list.map(todo => <Todo key={todo.id} {...todo} />);
         return this.props.list.map(todo => <li key={todo.id} id={todo.id} className={(todo.completed)? "todo completed" : "todo"}>{todo.task}</li>);
      }

      return <h2>Nothing to do... yet!</h2>;
   }

   render() {
      return (
         <div>
            <ul className="todo-list">
               {this.renderList()}
            </ul>
            <TodoForm addTodo={undefined} clearTodo={undefined} />
         </div>
      );
   }
}

export default TodoList;