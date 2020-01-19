import ProductReducer from '../reducers/productReducer';
import * as types from '../actions/actionTypes';

describe('Testing product reducer', () => {
    
    let defaultState;

    beforeEach(() => {
        defaultState = [{
            "id": 4,
            "name": "OnePlus 6",
            "category": "Electronics",
            "manufacturer": "One plus",
            "price": 32500,
            "quantity": 3,
            "description": "It’s built to endure, has a premium sense of heft, oh… and it’s made of glass.",
            "image": "https://cdn.mos.cms.futurecdn.net/A34hrrbFRE5soeqLEQ5aEi-768-80.jpg"
        }]
    });

    it('should return the initial state', () => {
        expect(ProductReducer(undefined, [])).toEqual([]);
    });

    it('should FETCH_ALL_PRODUCTS', () => {
        let action = {};
        action.type = types.FETCH_ALL_PRODUCTS;
        action.products = defaultState;
        expect(ProductReducer([], action)).toHaveLength(1);
    });

    it('should ADD_PRODUCT', () => {
        let action = {};
        action.type = 'ADD_PRODUCT';
        action.product = {
            "id": 5,
            "name": "Jeans",
            "category": "Fashion",
            "manufacturer": "Pep Jeans",
            "price": 3200,
            "quantity": 27,
            "description": "5 pockets mid rise jeans, lightly washed, has a zip fly with button closure.",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7S7JdPpd4TVIGkppWzQDF2MfwgmZ357ckVZgg6x5DJ43z7RRfQ"
        };
        expect(ProductReducer(defaultState, action)).toHaveLength(2);
    });

    it('should DELETE_PRODUCT', () => {
        let action = {};
        action.type = types.DELETE_PRODUCT;
        action.index = 0;
        expect(ProductReducer(defaultState, action)).toHaveLength(0);
    });

});
