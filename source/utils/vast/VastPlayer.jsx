module.exports = {
    
    getMediaFiles : function(vast) {
        var MediaFiles = vast.VAST.Ad[0].InLine[0].Creatives[0].Creative[0].Linear[0].MediaFiles[0].MediaFile;
        var mp4Files = [];
        MediaFiles.map(function(media) {
            var videoType = media.$.type;
            if(videoType.indexOf('mp4') !== -1) {
                mp4Files.push(media._);
            }
        });
        return mp4Files;
    },

    getCompanionAd : function(vast) {
        var companionAd = {};
        //check if companion ad exists
        if(vast.VAST.Ad[0].InLine[0].Creatives[0].Creative[1]) {
            console.log("companion");
            var companionObj = vast.VAST.Ad[0].InLine[0].Creatives[0].Creative[1].CompanionAds[0].Companion[0]; 
        } else {
            console.log("no companion");
            return false;
        }
        console.log(companionObj);
        //check for static resource
        if(companionObj.StaticResource) { 
            console.log("static resource");
            companionAd.resourceType = "static";
            companionAd.clickthrough = companionObj.CompanionClickThrough[0];
            companionAd.staticResource = companionObj.StaticResource[0]._;
            companionAd.staticType = companionObj.StaticResource[0].$.creativeType;
        } else if(companionObj.HTMLResource) {
            console.log("html resource");
            companionAd.resourceType = "html";
            companionAd.htmlResource = companionObj.HTMLResource[0];
        }

        return companionAd;
    
    },

}