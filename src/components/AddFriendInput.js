import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GenreTypes }  from '../reducers/friendlist.js';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  render () {
    return (
      <div>
        <label>
          Male?:
          <input
            name="isMale"
            type="checkbox"
            checked={this.state.isMale}
            onChange={this.handleInputChange} />
          </label>
          <input
            type="text"
            autoFocus="true"
            className={classnames('form-control', styles.addFriendInput)}
            placeholder="Type the name of a friend"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.handleSubmit.bind(this)} />
      </div> 
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      isMale: true
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit (e) {
    const genre = this.state.isMale ? GenreTypes.Male : GenreTypes.Female;
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addFriend({ name: name, genre: genre });
      this.setState({ name: '' });
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
