import React, {Component} from 'react';
import List from "./components/List";
import "./App.css"

class ListManager extends Component {

  constructor(props) {
      super(props);

      this.state = {
        items: [],
        newItemText: ""
      }

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({newItemText: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    let currentItems = this.state.items;
    currentItems.push(this.state.newItemText);
    this.setState({items: currentItems, newItemText: ''});
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} value={this.state.newItemText} />
          <button className="btn">Add</button>
        </form>

        <List items={this.state.items} />
      </div>
    );
  }
}

export default ListManager;
