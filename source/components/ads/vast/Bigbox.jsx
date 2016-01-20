import React, {PropTypes} from 'react';
import HTMLResource from './HTMLResource.jsx';

export default React.createClass({

    componentWillReceiveProps(bigboxProps) {
        this.vastObj = bigboxProps;
        console.log(this.vastObj);
    },

    generateImage() {
        return (
            <a href={this.vastObj.data.companionBigbox.clickthrough} target="_blank">
                <img src={this.vastObj.data.companionBigbox.staticResource} width="300" height="250" />
            </a>
        );
    },

    bigboxStyles : {
        width: '300px',
        height: '250px',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '100000',
        display: 'none'
    },

    generateFlash() {

        var flashFile = this.vastObj.data.companionBigbox.staticResource;
        var flashClickThrough = encodeURIComponent(this.vastObj.data.companionBigbox.clickthrough);
        
        return (
            <object classID="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="vastCompanionAd" width="300" height="250">
                <embed src={flashFile} quality="high" type="application/x-shockwave-flash" width="300" height="250" />
            </object>
        );
    },

    generateStatic() {
        if(this.vastObj.data.companionBigbox.staticType.indexOf("image") !== -1) {
            var imageBigbox = this.generateImage();
            return imageBigbox;
        } else if(this.vastObj.data.companionBigbox.staticType.indexOf("flash") !== -1) {
            var flashBigbox = this.generateFlash();
            return flashBigbox;
        }
    },

    getBigbox() {
        if(typeof this.vastObj == "undefined") {
            return;
        } else {
            if(this.vastObj.data.companionBigbox.resourceType === "static") {
                var staticBigbox = this.generateStatic();
                return staticBigbox;
            } else if(this.vastObj.data.companionBigbox.resourceType === "html") {
                return <HTMLResource html={this.vastObj.data.companionBigbox.htmlResource} />
            }
            
        }
        
    },

    render() {
        return (
            <div id="companion-bigbox" style={this.bigboxStyles} >
                { this.getBigbox() }
            </div>
        );
    }

});