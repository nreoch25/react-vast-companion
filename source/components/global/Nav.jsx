import React, {PropTypes} from 'react';
import Router from 'react-router';
import { Link } from 'react-router';

export default React.createClass({

    componentDidMount : function() {
        
    },

    render() {

        return(
            <nav className="ocelot-nav">
                <Link to="index">Index</Link> { " " }
                <Link to="react-vast-companion">React Vast Companion</Link> { " " }
            </nav>
        );

    }

});