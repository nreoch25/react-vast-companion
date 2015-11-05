import React, {PropTypes} from 'react';

export default React.createClass({

    videoStyles : {
        width: '60%',
        height: 'auto',
        float: 'left',
        marginRight: '7%'
    },

    render() {
        return (
            <video style={this.videoStyles} className="card-video" src={this.props.data.videoURL} autoPlay="true" controls></video>
        );
    }

});