import React from 'react';
import { Route } from 'react-router-dom';
import ListPage from "./components/pages/ListPage";
import TopicPage from "./components/pages/TopicPage";
import LoginPage from "./components/pages/LoginPage";
import 'semantic-ui-css/semantic.min.css';
import PropTypes from 'prop-types';
import NewTopicPage from "./components/pages/NewTopicPage";
import './App.css';

const App = ({location}) => (
    <div>
        <Route location={location} path="/list" component={ListPage} />
        <Route location={location} path="/topic/:id" component={TopicPage} />
        <Route location={location} path="/login" component={LoginPage} />
        <Route location={location} path="/new-topic" component={NewTopicPage} />
    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default App;
