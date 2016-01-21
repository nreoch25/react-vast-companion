import React, {PropTypes} from 'react';
import VastTracking from '../../../utils/vast/VastTracking.jsx';

export default React.createClass({

    componentWillReceiveProps(vastProps) {
        this.videoPlayer = React.findDOMNode(this.refs.player);
        VastTracking.setEventListeners(this.videoPlayer);
    },

    videoStyles : {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '1000000',
        cursor: 'pointer'
    },

    render() {
        return (
            <video ref="player" style={this.videoStyles} src={this.props.data.videoURL} autoPlay="true" controls></video>
        );
    }

});