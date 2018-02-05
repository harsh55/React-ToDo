import React, {Component} from 'react';
import ListItem from "./ListItem";

class List extends Component {
  render() {

    function createItem(text, index) {
      return (<ListItem key = {index + text} text = {text} />);
    }

    return (<ul>{this.props.items.map(createItem)}</ul>);
  }
}

export default List;
