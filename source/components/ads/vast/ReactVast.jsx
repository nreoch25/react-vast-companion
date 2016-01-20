import React, {PropTypes} from 'react';
import VastStore from '../../../stores/VastStore.jsx';
import VastActions from '../../../actions/VastActions.jsx';
import WebApi from '../../../utils/WebApi.jsx';

import VastPlayer from '../../../utils/vast/VastPlayer.jsx';

import VideoPlayer from './VideoPlayer.jsx';
import Bigbox from './Bigbox.jsx';

export default React.createClass({

    vastTag : "https://pubads.g.doubleclick.net/gampad/ads?sz=320x240&iu=/5876/testsv/nigel_test/nigelhtml5video&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url=[referrer_url]&description_url=[description_url]&correlator=[timestamp]",
    videoFiles : [],
    
    getInitialState() {
        return {
            vast : {}
        }
    },

    containerStyles : {
        width: '302px',
        height: '252px',
        border: '1px solid #000',
        position: 'relative'
    },

    onVastReceived() {
        console.log("Vast Received");
        VastStore.removeLoadListener(this.onVastReceived);
        var vastObj = VastStore.getVastObject();
        this.videoFiles = VastPlayer.getMediaFiles(vastObj);
        this.companionAd = VastPlayer.getCompanionAd(vastObj);
        console.log(this.companionAd);
        this.setState({
            vast : {
                videoURL : this.videoFiles[0],
                companionBigbox : this.companionAd
            }
        });
    },

    componentDidMount() {
        VastStore.addLoadListener(this.onVastReceived);
        VastActions.getVastXML(this.vastTag);
    },

    render() {

        return(
            
            <div>
                <h6>React Vast Video Player</h6>
                <div style={this.containerStyles}>
                    <VideoPlayer data={this.state.vast} />
                    <Bigbox data={this.state.vast} />
                </div>
            </div>
        );

    }

});