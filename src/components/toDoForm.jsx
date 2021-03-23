import React, { Component } from "react";

class ToDoForm extends Component {
  state = {
    input: [],
  };

  handleChange = (e) => {
    const input = e.target.value;
    this.setState({ input });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: this.state.input,
    });

    this.setState({ input: "" });
  };

  render() {
    const { input } = this.state;

    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        {this.props.edit ? (
          <div>
            <input
              type="text"
              placeholder="Update your item"
              value={input}
              name="text"
              className="todo-input edit"
              onChange={this.handleChange}
              ref={(input) => input && input.focus()}
            />
            <button className="todo-button edit">Update</button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Add a Task"
              value={input}
              name="text"
              className="todo-input"
              onChange={this.handleChange}
              ref={(input) => input && input.focus()}
            />
            <button className="todo-button">Add Task</button>
          </div>
        )}
      </form>
    );
  }
}

export default ToDoForm;
