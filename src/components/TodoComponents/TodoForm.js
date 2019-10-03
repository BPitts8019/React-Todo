import React from "react";

class TodoForm extends React.Component {
   constructor () {
      super();
      this.state = {
         task: ""
      }
   }

   handleChange = event => {
      this.setState({
         task: event.target.value
      });
   };
   
   render () {
      return (
         <form onSubmit={event => {
            event.preventDefault();
            this.props.addNewTodo(this.state.task);
         }}>
            <input className="newTask" type="text" placeholder="...todo" onChange={this.handleChange} value={this.state.task}/>
            <button type="submit">Add Todo</button>
            <button>Clear Completed</button>
         </form>
      );
   };
}

export default TodoForm;