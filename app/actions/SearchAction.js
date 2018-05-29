/**
 * Created by Mohan Rathour on 12/09/17.
 */
import fetch from 'isomorphic-fetch';
import {RESOURCE_URL, SEARCH_DATA} from '../constants/ActionTypes';

/**
 * Search action to send data from action to your store, When action will dispatch,the state will update immediately.
 * It will hit the Get 'Recipes' rest api to get recipes data on to the basis of filters.
 * @returns {function(*)}
 * @constructor
 */
export function SearchItems(searchParams) {
  return dispatch => {
    let filter = {};
    searchParams.title ? (filter['title'] = searchParams.title) : '';
    (searchParams.tags && searchParams.tags.length > 0)? (filter['tags'] = searchParams.tags) : null;
    return fetch(RESOURCE_URL + 'recipes/search?filter=' + JSON.stringify(filter), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }).then(json => dispatch({type: SEARCH_DATA, payload: json.recipes})).catch(error => {
      console.log('request failed', error);
    });
  }
}