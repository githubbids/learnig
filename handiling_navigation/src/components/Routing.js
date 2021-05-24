import React from 'react';
import Header from './Header';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import CourseDetail from './CourseDetail';


const Routing = () => {
    return(
        <BrowserRouter>
        <div>
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route path="/courses/:id" component={CourseDetail}></Route> 
        <Route path="/users/" component={Users}></Route>
        <footer />
        </div>
    </BrowserRouter>
    )
}

export default Routing;