import React, {PropTypes} from 'react';

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

    generateFlash() {

        var flashFile = this.vastObj.data.companionBigbox.staticResource;
        var flashClickThrough = encodeURIComponent(this.vastObj.data.companionBigbox.clickthrough);
        
        return (
            <object classID="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="vastCompanionAd" width="300" height="250">
                <embed src={flashFile} quality="high" pluginspage="http://www.macromedia.com/go/getfashplayer" type="application/x-shockwave-flash" width="300" height="250" />
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

    generateHTML() {
        return <h1>HTML</h1>
    },

    getBigbox() {
        if(typeof this.vastObj == "undefined") {
            return;
        } else {
            if(this.vastObj.data.companionBigbox.resourceType === "static") {
                var staticBigbox = this.generateStatic();
                return staticBigbox;
            } else if(this.vastObj.data.companionBigbox.resourceType === "html") {
                var htmlBigbox = this.generateHTML();
                return htmlBigbox;
            }
            
        }
        
    },

    render() {
        return (
            <div>
                { this.getBigbox() }
            </div>
        );
    }

});