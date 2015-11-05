import React, {PropTypes} from 'react';

export default React.createClass({

    componentDidMount() {
        console.log("404 did mount");
    },

    render() {

        return(
            <div>
                <h3>404 - Not Found</h3>
            </div>
        );

    }

});