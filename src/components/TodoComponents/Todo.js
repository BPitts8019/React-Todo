import React from "react";

class Todo extends React.Component {
   handleClick = () => {
      this.props.toggleComplete(this.props.id);
   };

   render () {
      return (
         <div 
            id={this.props.id} 
            className={(this.props.completed)? "todo completed" : "todo"}
            onClick={this.handleClick}
         >
            {this.props.task}
         </div>
      );
   }
}

export default Todo;