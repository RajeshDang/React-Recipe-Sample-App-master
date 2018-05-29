/**
 * Created by Mohan Rathour on 13/09/17.
 */
import fetch from 'isomorphic-fetch';
import {RESOURCE_URL, ITEM_DATA} from '../constants/ActionTypes';

/**
 * Item action to send data from action to your store, When action will dispatch,the state will update immediately.
 * It's a GET Rest api call to get the recipes data.
 * @returns {function(*)}
 * @constructor
 */
export function ItemAction() {
  return dispatch => {
    return fetch(RESOURCE_URL+'getRecipes', {method: 'GET'})
    .then(res => res.json())
    .then(json => dispatch({type: ITEM_DATA, payload: json.recipes}));
  }
}
