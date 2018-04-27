import * as types from '../constants/ActionTypes';
import * as actionCreators from './FriendsActions';
import { GenreTypes } from '../reducers/friendlist';

describe('Friend Actions', () => {
  describe('addFriend', () => {
    it('should add a friend', () => {
      //arrange
      const payload = { name: 'Ricardo Saumeth', genre: GenreTypes.Male };
      const expectedAction = {
        type: types.ADD_FRIEND,
        payload: payload
      };

      //act
      const action = actionCreators.addFriend({ name: 'Ricardo Saumeth', genre: GenreTypes.Male });

      //assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('deleteFriend', () => {
    it('should delete a friend', () => {
      //arrange
      const id = 1;
      const expectedAction = {
        type: types.DELETE_FRIEND,
        id: id
      };

      //act
      const action = actionCreators.deleteFriend(id);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('starFriend', () => {
    it('should star a friend', () => {
      //arrange
      const id = 1;
      const expectedAction = {
        type: types.STAR_FRIEND,
        id: id
      };

      //act
      const action = actionCreators.starFriend(id);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });

});