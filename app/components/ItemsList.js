/**
 * Created by Mohan Rathour on 18/09/17.
 */
import React from "react";
import {ItemInfo} from "./ItemInfo";
import {Search} from "./Search";
import {Header} from "./Header";
/**
 * Render the recipe list data
 * @param props
 * @returns {XML}
 * @constructor
 */
export const ItemsList = (props) => {
  return (
      <div className="row">
        <Header
            info={props}
        />
        <div className="content col-sm-12 col-md-12">
          <Search
              search={props.search}
              searchByText={props.searchByText}
              filter={props.filter}
              state={props.state}
              handleDelete={props.handleDelete}
              handleAddition={props.handleAddition}
              handleDrag={props.handleDrag}
          />
          <div className="box">
            <div className="row">
              {
                props.items.length > 0 && <form role="form" className="form" name="recipeForm" id="recipeForm">
                  {
                    props.items.map(function (s, index) {
                      s.category = s.category.toString();
                      return (<ItemInfo info={s}
                                        key={index}
                                        keyIndex={index}
                                        handleSubmit={props.handleSubmit}
                                        selectItem={props.selectItem}
                                        isChecked={props.state.isChecked}
                                        goToDetails={props.goToDetails}
                                        refs="items"
                      />)
                    })
                  }
                </form> || <p className="text-center">No data found.</p>
              }
            </div>
          </div>
        </div>
      </div>
  );
}
