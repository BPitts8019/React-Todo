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
         <form>
            <input className="newTask" type="text" placeholder="...todo" onChange={this.handleChange} value={this.state.task}/>
            <button onClick={event => {
               event.preventDefault();

               const newTask = this.state.task;
               this.setState({
                  task: ""
               });
               this.props.addNewTodo(newTask);
            }}>Add Todo</button>
            <button onClick={event => {
               event.preventDefault();
               this.props.clearCompleted();
            }}>Clear Completed</button>
         </form>
      );
   };
}

export default TodoForm;