import React, {PropTypes} from 'react';
import { DefaultRoute, Route, NotFoundRoute } from 'react-router';

import AppContainer from './components/AppContainer.jsx';
import Index from './components/extra/Index.jsx';
import NotFound from './components/extra/NotFound.jsx';

import ReactVast from './components/ads/vast/ReactVast.jsx';

module.exports = (
    <Route handler={AppContainer}>
        <Route name="index" path="/" handler={Index} />
        <Route name="react-vast-companion" path="/ads/vast/?" handler={ReactVast} />
        <NotFoundRoute handler={NotFound} />
    </Route>
);