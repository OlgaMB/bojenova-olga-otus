import { favourites, IActions, IStates } from './reducers';
import { TOGGLE_FAVOURITES } from '../actions/actions';

describe('redux actions reducer', () => {
  describe('favoures', () => {
    it('should a city to be added to the empty favourites', () => {
        const state:IStates = {favourites: []};
        const action:IActions = {type: TOGGLE_FAVOURITES, city: 'Minsk' };
        const result = favourites(state, action);
        expect(result.favourites).toHaveLength(1);
        expect(result.favourites[0]).toEqual('Minsk');
    })
    it('should a city to be removed from the favourites', () => {
        const state:IStates = {favourites: ['Minsk']};
        const action:IActions = {type: TOGGLE_FAVOURITES, city: 'Minsk' };
        const result = favourites(state, action);
        expect(result.favourites).toHaveLength(0);
    })

    it('should  a city to be added to the non-empty favourites', () => {
        const state:IStates = {favourites: ['Minsk']};
        const action:IActions = {type: TOGGLE_FAVOURITES, city: 'London' };
        const result = favourites(state, action);
        expect(result.favourites).toHaveLength(2);
        expect(result.favourites[0]).toEqual('Minsk');
        expect(result.favourites[1]).toEqual('London');
    })
})
})