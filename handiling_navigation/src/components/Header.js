import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header>
        <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Bidisha Developer</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
    <ul className="nav navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users/">Users</Link></li>
      
       
    </ul>
      
    </div>
  </div>
</nav>
</header>
    )
}
