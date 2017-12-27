import React from 'react';
import { Route } from 'react-router-dom';
import ListPage from "./components/pages/ListPage";
import Post from "./components/pages/PostPage";
import LoginPage from "./components/pages/LoginPage";
import 'semantic-ui-css/semantic.min.css';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import PropTypes from 'prop-types';

const App = ({location}) => (
    <div>
        <UserRoute location={location} path="/list" component={ListPage} />
        <GuestRoute location={location} path="/post" component={Post} />
        <Route location={location} path="/login" component={LoginPage} />
    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default App;
