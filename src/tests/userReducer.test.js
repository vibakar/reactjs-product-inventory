import UserReducer from '../reducers/userReducer';
import * as types from '../actions/actionTypes';

describe('Testing user reducer', () => {
    
    let defaultState;

    beforeEach(() => {
        defaultState = [{
            "firstName": "Vibakar",
            "lastName": "K V",
            "email": "vibakar@gmail.com",
            "password": "Password@123",
            "id": 2,
            "city": "Coimbatore",
            "mobile": "7639228797",
            "views": {
                "1": 1,
                "3": 4,
                "5": 1,
                "14": 2
            }
        }]
    });

    it('should return the initial state', () => {
        expect(UserReducer(undefined, [])).toEqual([]);
    });

    it('should FETCH_ALL_USERS', () => {
        let action = {};
        action.type = types.FETCH_ALL_USERS;
        action.users = [action.user];
        expect(UserReducer([], action)).toHaveLength(1);
    });

    it('should update the user', () => {
        let action = {};
        action.type = types.UPDATE_SINGLE_USER;
        action.user = {...defaultState[0]};
        action.user.firstName = "Viba";
        let updatedUser = UserReducer(defaultState, action);
        expect(updatedUser[0].firstName).toEqual("Viba");
    });
});
