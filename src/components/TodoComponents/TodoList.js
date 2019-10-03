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
         return this.props.list.map(todo => <h3 key={todo.id} info={todo}>{todo.task}</h3>);
      }

      return <h2>Nothing to do... yet!</h2>;
   }

   render() {
      return (
         <div>{this.renderList()}</div>
      );
   }
}

export default TodoList;