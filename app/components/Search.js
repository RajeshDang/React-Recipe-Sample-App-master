/**
 * Created by Mohan Rathour on 12/09/17.
 */
import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
/**
 * Search Item Class
 */
export const Search = (props) => {
  const { tags, suggestions } = props.state;
  return (
      <div className="row">
        <div className="col-md-12 col-md-offset-0">
          <div className="form-section">
            <form role="form" className="form" name="searchForm" id="searchForm" onSubmit={(e) => props.search(e)}>
              <div className="row">
                <div className="col-md-8 pull-left col-md-offset-2">
                  <div className="form-group">
                    <input type="text" className="form-control-search search-input-box" id="title" name="title" value={props.state.title} onChange={(e) => props.searchByText(e)} placeholder="&#61442; Search for recipes"/>
                  </div>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-default btn-success" name="city" type="submit">Search</button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <div className="form-group font-group-font-size">
                    Or Filter By:
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="form-group ">
                  <ReactTags tags={tags}
                             suggestions={suggestions}
                             handleDelete={props.handleDelete}
                             handleAddition={props.handleAddition}
                             handleDrag={props.handleDrag} />
                </div>
                </div>
               {/* <div className="col-md-3 pull-left">
                  <div className="form-group">
                    <select className="form-control form-control-by-2" name="budget" id="budget" value={props.state.budget} onChange={(e) => props.filter(e)}>
                      <option value="">BUDGET</option>
                      <option value="200-399">200-399</option>
                      <option value="400-599">400-599</option>
                      <option value="600-799">600-799</option>
                      <option value="800-999">800-999</option>
                      <option value="1000-1199">1000-1199</option>
                      <option value="1200-1399">1200-1399</option>
                      <option value="1400-1599">1400-1599</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-2 pull-left">
                  <div className="form-group">
                    <select className="form-control" name="sortBy" id="sortBy" value={props.state.sortBy} onChange={(e) => props.filter(e)}>
                      <option value="">Sort By Name</option>
                      <option value="1">ASC</option>
                      <option value="-1">DESC</option>
                    </select>
                  </div>
                </div>*/}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};