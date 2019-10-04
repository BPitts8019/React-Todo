import React from "react";

class Todo extends React.Component {
   constructor (props) {
      super(props);
      this.state = {
         completed: props.completed
      }
   }

   toggleComplete = () => {
      this.setState({
         completed: !this.state.completed
      });
   };

   render () {
      return (
         <div 
            id={this.props.id} 
            className={(this.state.completed)? "todo completed" : "todo"}
            onClick={this.toggleComplete}
         >
            {this.props.task}
         </div>
      );
   }
}

export default Todo;