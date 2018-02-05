import React, {Component} from 'react';

class ListItem extends Component {
  render() {

    return(
      <li>
        <h4 className="h4">{this.props.text}</h4>
      </li>
    );
  }
}

export default ListItem;
