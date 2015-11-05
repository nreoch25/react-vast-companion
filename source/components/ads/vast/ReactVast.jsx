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

    onVastReceived() {
        console.log("Vast Received");
        VastStore.removeLoadListener(this.onVastReceived);
        var vastObj = VastStore.getVastObject();
        this.videoFiles = VastPlayer.getMediaFiles(vastObj);
        this.companionAd = VastPlayer.getCompanionAd(vastObj);
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
            
            <div className="grid grid_gutters grid-med_full">
                <div className="grid-cell module_grid">
                    <div className="card">
                        <span className="card-title">React Vast Video Player</span>
                        <div className="card-feature">
                            <VideoPlayer data={this.state.vast} />
                            <Bigbox data={this.state.vast} />
                        </div>
                        <div className="card-meta">
                            <div className="card-tag">Advertisement</div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

});