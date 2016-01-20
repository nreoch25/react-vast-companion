import React, {PropTypes} from 'react';

export default React.createClass({

    componentDidMount() {
        this.videoPlayer = React.findDOMNode(this.refs.player);
        this.videoPlayer.addEventListener('ended', this.videoEnd);
    },

    videoEnd() {
        this.videoPlayer.style.display = "none";
        document.getElementById("companion-bigbox").style.display = "block";
    },  

    videoStyles : {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '1000000'
    },

    render() {
        return (
            <video ref="player" style={this.videoStyles} src={this.props.data.videoURL} autoPlay="true" controls></video>
        );
    }

});