/**
 * Created by Mohan Rathour on 11/09/17.
 */
import React from "react";
import {connect} from "react-redux";
import {ItemAction} from "../actions/ItemAction";
import {DetailsAction} from "../actions/DetailsAction";
import {ItemsList} from "../components/ItemsList";
import {SearchItems} from "../actions/SearchAction";
import {ItemDetails} from "../components/ItemDetails";

/**
 * Call the Item action function.
 * @param dispatch
 * @returns {{ItemAction: (function()), details: (function(*=))}}
 */
const mapDispatchToProps = (dispatch) => {
  return {
    ItemAction: () => {
      return dispatch(ItemAction());
    },

    details: (id) => {
      return dispatch(DetailsAction(id));
    },

    SearchItems: (formData) => {
      dispatch(SearchItems(formData));
    }
  };
};

/**
 * Get the recipe data and order success message from reducer.
 * @param state
 * @returns {{items: (*|string|DataTransferItemList), message}}
 */
const mapStateToProps = (state) => {
  return {items: state.items, item: state.item}
};

/**
 * Root Class
 */
class Root extends React.Component {
  /**
   * Constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      title: "",
      tags: [],
      suggestions: [],
      onDetailsPage: false
    };
    /**
     * Call ItemAction Action function.
     */
    this.props.ItemAction();
  };

  /**
   * Search recipe on the basis of search text.
   * @param event
   */
  search = (event) => {
    event.preventDefault();
    this.props.SearchItems(this.state);
  };

  /**
   * Set the search text data into the state object
   * @param event
   */
  searchByText = (event) => {
    this.state[event.target.name] = event.target.value;
    this.state.tags && (this.state.tags != null || this.state.tags.length > 0) ? ( this.state.tags = []) : this.state.tags;
    this.setState(this.state);
  };

  /**
   * Set the loading false When DOM update
   */
  componentDidUpdate() {
    setTimeout(() => this.setState({loading: false}), 500);
  };

  handleDelete = (i) => {
    let tags = this.state.tags;
    tags.splice(i, 1);
    this.setState({tags: tags});
    this.state.title && (this.state.title != null || this.state.title != '') ? ( this.state.title = '') : this.state.title;
    this.props.SearchItems(this.state);
  };

  handleAddition = (tag) => {
    let tags = this.state.tags;
    tags.push({
      id: tags.length + 1,
      text: tag
    });
    this.setState({tags: tags});
    this.state.title && (this.state.title != null || this.state.title != '') ? ( this.state.title = '') : this.state.title;
    this.props.SearchItems(this.state);
  };

  handleDrag = (tag, currPos, newPos) => {
    let tags = this.state.tags;
    // mutate array
    tags.splice(currPos, 1);
    tags.splice(newPos, 0, tag);
    // re-render
    this.setState({tags: tags});
  };
  goToDetails = (id, title) => {
    console.log("title & id", title +  " &&& " + id);
    this.state.onDetailsPage = true;
    this.setState(this.state);
    this.props.details(id);
  };

  /**
   * Render the recipe list data
   * @returns {*}
   */
  render() {
    const {loading, onDetailsPage} = this.state;
    if (loading) {
      return null; // render null when app is not ready
    }
    if (!onDetailsPage) {
      return (
          <ItemsList
              items={this.props.items}
              handleSubmit={this.handleSubmit}
              search={this.search}
              searchByText={this.searchByText}
              filter={this.filter}
              state={this.state}
              selectItem={this.selectItem}
              handleDelete={this.handleDelete}
              handleAddition={this.handleAddition}
              handleDrag={this.handleDrag}
              goToDetails={this.goToDetails}
          />
      );
    }
    if(onDetailsPage){
      return (
          <ItemDetails
              item={this.props.item}
          />
      );
    }
  }
}

/**
 * attach  both Reducer and Action into the Root Container.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Root);