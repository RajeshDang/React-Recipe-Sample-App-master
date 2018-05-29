/**
 * Created by Mohan Rathour on 12/09/17.
 */

/**
 * Initialize the initial state properties.
 * @type {{items: string, message: string}}
 */
let initialState = {
  items: "",
  item: ""
}

/**
 * Handle the Action event and return the data according to Action event.
 * @param state
 * @param action
 * @returns {{items: string, message: string}}
 */
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Item_Data":
      state = {
        ...state,
        items: action.payload
      };
      break;
    case "Details_Data":
      state = {
        ...state,
        item: action.payload
      };
      break;
    case "Search_Data":
      state = {
        ...state,
        items: action.payload
      };
      break;
  }
  return state;
};
export default listReducer;