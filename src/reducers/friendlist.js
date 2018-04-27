import * as types from '../constants/ActionTypes';

let _id = 1;

export const GenreTypes = { Male:  1, Female:  2 };

const initialState = {
  friendsById: [
    {
      id: _id++,
      name: 'Theodore Roosevelt',
      starred: true,
      genre: GenreTypes.Male
    },
    {
      id: _id++,
      name: 'Abraham Lincoln',
      starred: false,
      genre: GenreTypes.Female
    },
    {
      id: _id++,
      name: 'George Washington',
      starred: false,
      genre: GenreTypes.Male
    }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            id: _id++,
            name: action.payload.name,
            genre: action.payload.genre,
            starred: true
          }
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((friend) => friend.id !== action.id)
      };
    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      let friend = friends.find((friend) => friend.id === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };

    default:
      return state;
  }
}
