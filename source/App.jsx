import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Route, NotFoundRoute } from 'react-router';

import AppRoutes from './AppRoutes.jsx';

Router.run(AppRoutes, function(Handler) {
    React.render(<Handler />, document.getElementById('main'));
});