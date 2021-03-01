import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'
import { Fragment } from 'react';





export default function CenteredTabs() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark " style={{ background: 'rgba(0,0,0,0.7)' }}>
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/explore">Explore</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Music alchemy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Login</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Register</a>
          </li>

        </ul>
      </div>
    </nav>
  );
}