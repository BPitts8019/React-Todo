import React from 'react';
import TodoList from "./components/TodoComponents/TodoList.js";

class App extends React.Component {
   // you will need a place to store your state in this component.
   // design `App` to be the parent component of your application.
   // this component is going to take care of state, and any change handlers you need to work with your state
   constructor () {
      super();
      this.state = {
         // todoList: [
         //    {
         //       task: 'Organize Garage',
         //       id: 1528817077286,
         //       completed: true
         //    },
         //    {
         //       task: 'Bake Cookies',
         //       id: 1528817084358,
         //       completed: false
         //    },
         //    {
         //       task: 'Task 3',
         //       id: 1528847077286,
         //       completed: true
         //    },
         //    {
         //       task: 'Task 4',
         //       id: 1522817084358,
         //       completed: false
         //    },
         //    {
         //       task: 'Task 5',
         //       id: 1528817078286,
         //       completed: true
         //    },
         //    {
         //       task: 'Task 6',
         //       id: 1529817084358,
         //       completed: false
         //    }
         // ]
         todoList: []
      };
   }

   render() {
      return (
         <div>
            <h2>Welcome to your Todo App!</h2>
            <TodoList list={this.state.todoList} />
         </div>
      );
   }
}

export default App;
