import './App.css';
import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  counter = 0;
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    tasks: [
      {
        id: this.counter++,
        text: '',
        date: null,
        important: false,
        active: true,
        finishDate: null,
      },
      // {
      //   id: 1,
      //   text: 'Daily "Good Deed"',
      //   date: '2023-11-12',
      //   important: false,
      //   active: true,
      //   finishDate: null,
      // },
      // {
      //   id: 2,
      //   text: 'Home renovations',
      //   date: '2024-03-11',
      //   important: false,
      //   active: true,
      //   finishDate: null,
      // },
      // {
      //   id: 3,
      //   text: 'Go on diet',
      //   date: '2023-10-20',
      //   important: true,
      //   active: true,
      //   finishDate: null,
      // },
      // {
      //   id: 4,
      //   text: 'Freelance work',
      //   date: '2023-10-10',
      //   important: false,
      //   active: true,
      //   finishDate: null,
      // },
      // {
      //   id: 5,
      //   text: 'New appliances install',
      //   date: '2024-01-30',
      //   important: false,
      //   active: true,
      //   finishDate: null,
      // },
      // {
      //   id: 6,
      //   text: 'Hairdresser',
      //   date: '2023-11-20',
      //   important: true,
      //   active: true,
      //   finishDate: null,
      // },
      // {
      //   id: 7,
      //   text: 'Forget the lottery ticket',
      //   date: '2023-12-12',
      //   important: false,
      //   active: true,
      //   finishDate: null,
      // },
      // {
      //   id: 8,
      //   text: 'Buy new hoverboard',
      //   date: '2024-02-11',
      //   important: false,
      //   active: true,
      //   finishDate: null,
      // },
    ],
  };

  deleteTask = id => {
    let tasks = [...this.state.tasks];

    // using indexOf:
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);

    // using Filter:
    tasks = tasks.filter(task => task.id !== id);

    this.setState({
      tasks: tasks,
    });
  };
  changeTaskStatus = id => {
    // let tasks = Array.from(this.state.tasks)
    let tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };
    this.counter++;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task],
    }));
    return true;
  };

  render() {
    return (
      <div className='App-header'>
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
