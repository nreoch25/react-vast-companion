// React and React Router modules
import React from 'react';
import Router from 'react-router';
import { RouteHandler } from 'react-router';

import Header from './global/Header.jsx';
import Nav from './global/Nav.jsx';

export default React.createClass({

    viewCheckStyles : {
        width: "300px",
        height: "1500px",
        backgroundColor: "#CCC"
    },

    render() {
        return (
            <div>
                <div className="page-wrap">
                    <main className="content">
                        <div id="content" className="content-wrap_tight">
                            <div className="slot_primary">
                                <section className="grid-wrapper">
                                    <Header />
                                    <Nav />
                                    <div style={this.viewCheckStyles}>
                                        <h6>DIV TO CHECK VIEWABILITY FUNCTIONALITY</h6>
                                    </div>
                                    <RouteHandler />
                                </section>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }

});