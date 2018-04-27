import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';
import { Pagination } from '../components';

class FriendList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      renderedFriends: [],
      page: 1,
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps === this.props) return;
    const page = newProps.friends.length === 2 ? 1 : this.state.page;// needs improvement
    // const page = this.state.page;
    const friendlist = newProps.friends.slice((page - 1) * 2, (page - 1) * 2 + 2);
    const friendlistLength = newProps.friends.length;
    this.setState({ page: page, renderedFriends: friendlist, total:  friendlistLength });
  }

  componentDidMount() {
    const friendlist = this.props.friends.slice(0,2);
    // In a real app we make an http request
    setTimeout(() => {
      this.setState({ friends: friendlist, renderedFriends: friendlist.slice(0, 2), total:  this.props.friends.length });
    })
  }

  handlePageChange = (page) => {
    const friendlist = this.props.friends.slice((page - 1) * 2, (page - 1) * 2 + 2);
    const friendlistLength = this.props.friends.length;
    // in a real app you could query the specific page from a server user list
    this.setState({ page: page, renderedFriends: friendlist, total:  friendlistLength  });
  }

  render () {
    const { page, total, renderedFriends } = this.state;

    return (
      <div>
      <ul className={styles.friendList}>
        {
          renderedFriends.map((friend, index) => {
			      return (
              <FriendListItem
                key={index}
                id={friend.id}
                name={friend.name}
                starred={friend.starred}
                genre={friend.genre}
                {...this.props.actions} />
              );
          })
        }
      </ul>
      { this.props.friends.length > 2 ? <Pagination
          margin={0}
          page={page}
          count={Math.ceil(total / 2)}
          onPageChange={this.handlePageChange}
        /> : null
      }
      </div>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
