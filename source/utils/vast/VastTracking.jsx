module.exports = {

    initTracking: function(vast) {

        this.vastTracking = {}
        this.vastTracking.videoImpression = vast.VAST.Ad[0].InLine[0].Impression[0];
        console.log("VIDEOIMPRESSION", this.vastTracking.videoImpression);
        this.vastTracking.videoStart = vast.VAST.Ad[0].InLine[0].Creatives[0].Creative[0].Linear[0].TrackingEvents[0].Tracking[0]._;
        console.log("VIDEOSTART", this.vastTracking.videoStart);
    },

    setEventListeners: function(player) {
        player.addEventListener("ended", function(event) {
            //Hide Video Player on Video Ended
            this.style.display = "none";
            //Display Companion on Video Ended
            document.getElementById("companion-bigbox").style.display = "block";
        });
    }

}