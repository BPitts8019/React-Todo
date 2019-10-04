import React from 'react';
import TodoList from "./components/TodoComponents/TodoList.js";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
   // you will need a place to store your state in this component.
   // design `App` to be the parent component of your application.
   // this component is going to take care of state, and any change handlers you need to work with your state
   constructor () {
      super();
      this.state = {
         // listIds: [10, 15, 2, 4, 6, 8],
         // todoList: [
         //    {
         //       task: 'Organize Garage',
         //       id: 2,
         //       completed: true
         //    },
         //    {
         //       task: 'Bake Cookies',
         //       id: 4,
         //       completed: false
         //    },
         //    {
         //       task: 'Task 3',
         //       id: 6,
         //       completed: true
         //    },
         //    {
         //       task: 'Task 4',
         //       id: 8,
         //       completed: false
         //    },
         //    {
         //       task: 'Task 5',
         //       id: 10,
         //       completed: true
         //    },
         //    {
         //       task: 'Task 6',
         //       id: 15,
         //       completed: false
         //    }
         // ]
         listIds: [],
         todoList: []
      };
   }

   get BAD_ID () {
      return -1;
   }
   get NO_TASK () {
      return "";
   }

   generateId = () => {
      const MAX_ID = 20;
      const MIN_ID = 1;
      let newId = MIN_ID;

      if (this.state.listIds.length === MAX_ID) {
         return this.BAD_ID;
      }

      do {
         newId = Math.floor(Math.random() * (MAX_ID - MIN_ID + 1) ) + MIN_ID;
      } while (this.state.listIds.includes(newId));

      return newId;
   }

   addNewTodo = task => {
      const currentIds = this.state.listIds;
      const currentList = this.state.todoList;
      const newId = this.generateId();

      // check for errors
      if (task === this.NO_TASK) {
         alert("Please enter a task");
         return;
      }
      if (newId === this.BAD_ID) {
         alert("Cannot add anymore tasks to the list.");
         return;
      }

      //create the new task
      const newTodo = {
         task,
         id: newId,
         completed: false
      };

      //add it and it's id to state
      this.setState({
         listIds: [...currentIds, newId],
         todoList: [...currentList, newTodo]
      });
   }

   render() {
      return (
         <div>
            <h1>Welcome to your Todo App!</h1>
            <TodoList 
               list={this.state.todoList} 
               addNewTodo={this.addNewTodo}
               clearCompleted={() => {}}
            />
         </div>
      );
   }
}

export default App;
