import friends from './friendlist';
import * as actions from '../actions/FriendsActions';
import { GenreTypes } from './friendlist.js';


// arrange
const initialState = {
  friendsById: [
    {
      id: 1,
      name: 'Theodore Roosevelt',
      starred: true,
      genre: GenreTypes.Male
    },
    {
      id: 2,
      name: 'Abraham Lincoln',
      starred: false,
      genre: GenreTypes.Female
    },
    {
      id: 3,
      name: 'George Washington',
      starred: false,
      genre: GenreTypes.Male
    }
  ]
};

describe('friendlist Reducer', () => {
  it('should add a friend when passed ADD_FRIEND', () => {

    const action = actions.addFriend({ name: 'Ricardo Santana', genre: GenreTypes.Male });

    //act
    const newState = friends(initialState, action);

    //assert
    expect(newState.friendsById.length).toEqual(4);
    expect(newState.friendsById[0].id).toEqual(1);
    expect(newState.friendsById[1].id).toEqual(2);
    expect(newState.friendsById[2].id).toEqual(3);
  });

  it('should delete a friend when passed DELETE_FRIEND', () => {

    const action = actions.deleteFriend(1);

    //act
    const newState = friends(initialState, action);

    //assert
    expect(newState.friendsById.length).toEqual(2);
    expect(newState.friendsById[0].name).toEqual(initialState.friendsById[1].name);
    expect(newState.friendsById[1].name).toEqual(initialState.friendsById[2].name);
  });

  it('should star_friend a friend when passed STAR_FRIEND', () => {

    const action = actions.starFriend(1);

    //act
    const newState = friends(initialState, action);

    //assert
    expect(newState.friendsById[0].starred).toEqual(false);
    expect(newState.friendsById[1].starred).toEqual(false);
    expect(newState.friendsById[2].starred).toEqual(false);
  });
  
});