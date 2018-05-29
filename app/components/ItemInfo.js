/**
 * Created by Mohan Rathour on 18/09/17.
 */
import React from "react";
/**
 * Search Item Class
 */
export const ItemInfo = (props) => {
  let {info, goToDetails} = props;
  return (
      <div className="col-sm-3">
        <div className="item-simple">
          <div className="item-simple-content">
            <div className="item-img col-sm-12">
              <a href="#" >
                <img alt="" src={info.image}/>
              </a>
            </div>
            <div className="item-detail col-sm-12">
              <h2 className="item-simple-title" onClick={() => goToDetails(info._id, info.title)} title={info.title}>{info.title}</h2>

              <p className="details">
                <span>
                  <span className="glyphicon glyphicon-time"></span> {info.preparationTime} minutes
                </span>
                <span>
                  <span className="glyphicon glyphicon-user"></span> Serves {info.members}
                </span>
              </p>
              <p className="hline"></p>
            </div>
          </div>
        </div>
      </div>
  );
};
