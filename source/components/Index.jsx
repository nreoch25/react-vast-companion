import React, {PropTypes} from 'react';

export default React.createClass({

    componentDidMount() {
        console.log("Index did mount");
    },

    render() {

        return(
            <div>
                <h1>Select Ad Unit</h1>
            </div>
        );

    }

});