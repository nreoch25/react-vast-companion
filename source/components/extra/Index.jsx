import React, {PropTypes} from 'react';

export default React.createClass({

    componentDidMount : function() {
        console.log("Index did mount");
    },

    render() {

        return(
            <div>
                <h3>Select Ad Unit</h3>
            </div>
        );

    }

});