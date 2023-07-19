import React, { Component } from 'react';
import sthome from "./Gallary.module.css"
import { NavLink, Outlet } from 'react-router-dom';
export default class Gallary extends Component {
  render() {
    return (
      <>
        <div  className={`h1 pb-5 ${sthome.h1}`}>
            <div  className={`h2 ${sthome.h2}`}>
                <h1>Gallary</h1>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                <ul>
                    <li><NavLink to="">Games</NavLink></li>
                    <li><NavLink to="Toyes">Toyes</NavLink></li>
                    <li><NavLink to="Baby">Baby</NavLink></li>

                </ul>
                </div>
                <div className="col-md-8 col-sm-12 bg-danger text-light text-center vh-100">
                    <Outlet/>
                </div>
            </div>
        </div>
      </>
    );
  }
}
