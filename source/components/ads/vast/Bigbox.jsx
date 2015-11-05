import React, {PropTypes} from 'react';

export default React.createClass({

    componentWillReceiveProps(bigboxProps) {
        console.log(bigboxProps);
    },

    render() {
        return (
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Ad-MediumRectangle-300x250.jpg" width="300" height="250" />
        );
    }

});