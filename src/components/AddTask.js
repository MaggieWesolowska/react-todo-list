import React, { Component } from 'react';

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: '',
    checked: false,
    date: this.minDate,
  };

  handleText = ev => {
    this.setState({
      text: ev.target.value,
    });
  };

  handleDate = ev => {
    this.setState({
      date: ev.target.value,
    });
  };

  handleCheckbox = ev => {
    this.setState({
      checked: ev.target.checked,
    });
  };

  handleClick = () => {
    const { text, date, checked } = this.state;
    if (text.length > 1) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: '',
          checked: false,
          date: this.minDate,
        });
      }
    } else {
      alert('enter task name');
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + '-12-31';

    return (
      <div className='form'>
        <h2>Create New Task</h2>
        <input
          type='text'
          placeholder='add task'
          value={this.state.text}
          onChange={this.handleText}></input>

        <label htmlFor='important'>
          Priority
          <input
            type='checkbox'
            id='important'
            checked={this.state.checked}
            onChange={this.handleCheckbox}></input>
        </label>
        <label htmlFor='date'>Task due by:</label>
        <input
          type='date'
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDate}></input>
        <button onClick={this.handleClick}>Add Task</button>
      </div>
    );
  }
}

export default AddTask;
