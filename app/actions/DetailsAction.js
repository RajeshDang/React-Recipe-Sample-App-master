/**
 * Created by Mohan Rathour on 16/09/17.
 */
import fetch from "isomorphic-fetch";
import {RESOURCE_URL, DETAILS_DATA} from "../constants/ActionTypes";

/**
 * Get the recipe details for a specific recipe from server, When action will dispatch,the state will update immediately.
 * It will hit the Get 'getRecipe/:id' rest api to get recipe details
 * @returns {function(*)}
 * @constructor
 */
export function DetailsAction(id) {
  return dispatch => {
    return fetch(RESOURCE_URL + 'getRecipes/' + id, {
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
    }).then(json => dispatch({type: DETAILS_DATA, payload: json.recipes})).catch(error => {
      console.log('request failed', error);
    });
  }
}
