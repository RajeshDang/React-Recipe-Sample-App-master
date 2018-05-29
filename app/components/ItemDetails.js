/**
 * Created by IMFCORP\mohanpratap.singh on 16/9/17.
 */
import React from "react";
import {Header} from "./Header";
/**
 * Item Details Class
 */
export const ItemDetails = (props) => {
  let {item} = props;
  console.log(item);
  let ingredients = (item && (item != null || item !="") && item.ingredients) ? item.ingredients.split('.') : [];
  let method =  (item && (item != null || item !="") && item.method) ? item.method.split('.') : [];
  console.log(method);
  return (
      <div className="row">
        <Header
            info={props}
        />
      <div className="col-sm-12 box">
        <div className="item-simple">
          <div className="item-simple-content">
            <div className="item-detail col-sm-12">
              <h1 className="item-details-title">{item.title}</h1>
              <p className="details">
                <span className="item-time">
                  <span className="glyphicon glyphicon-time"></span> {item.preparationTime} minutes
                </span>
                <span>
                  <span className="glyphicon glyphicon-user"></span> Serves {item.members}
                </span>
              </p>
            </div>
            <div className="item-details-img col-sm-12">
              <a href="#" >
                <img alt="" src={item.image}/>
              </a>
            </div>
            <div className="item-detail col-sm-12">
              <div className="details">
                <span className="col-sm-6">
                  <h3> Ingredients</h3>
                    {
                      ingredients.length > 0 && <ul name="ingredients" id="ingredients">
                        {
                          ingredients.map(function (s, index) {
                             return <li key={index}>{s}</li>
                          })
                        }
                      </ul> || <p className="text-center">No data found.</p>
                    }
                </span>

                <span className="col-sm-6">
                  <h3>Method</h3>
                  {
                    method.length > 0 && <ul name="method" id="method">
                      {
                        method.map(function (s, index) {
                          return <li key={index}>{s}</li>
                        })
                      }
                    </ul> || <p className="text-center">No data found.</p>
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};