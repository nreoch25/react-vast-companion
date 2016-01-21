module.exports = {

    initTracking: function(vast) {

        this.vastTracking = {}
        this.vastTracking['impression'] = vast.VAST.Ad[0].InLine[0].Impression[0];
        this.vastTracking['start'] = vast.VAST.Ad[0].InLine[0].Creatives[0].Creative[0].Linear[0].TrackingEvents[0].Tracking[0]._;
        this.vastTracking['quarter'] = vast.VAST.Ad[0].InLine[0].Creatives[0].Creative[0].Linear[0].TrackingEvents[0].Tracking[1]._;
        this.vastTracking['mid'] = vast.VAST.Ad[0].InLine[0].Creatives[0].Creative[0].Linear[0].TrackingEvents[0].Tracking[2]._;
        this.vastTracking['threeQuarters'] = vast.VAST.Ad[0].InLine[0].Creatives[0].Creative[0].Linear[0].TrackingEvents[0].Tracking[3]._;
        this.vastTracking['complete'] = vast.VAST.Ad[0].InLine[0].Creatives[0].Creative[0].Linear[0].TrackingEvents[0].Tracking[4]._;
        this.vastTracking['clickthrough'] = vast.VAST.Ad[0].InLine[0].Creatives[0].Creative[0].Linear[0].VideoClicks[0].ClickThrough[0]._;
        this.vastTracking['inView'] = vast.VAST.Ad[0].InLine[0].Extensions[0].Extension[0].CustomTracking[0].Tracking[0]._;

        this.impressionLoaded = false;
        this.startLoaded = false;
        this.quarterLoaded = false;
        this.midLoaded = false
        this.threeQuarterLoaded = false;
        this.completeLoaded = false;
    },

    checkViewability: function() {
        var rect = this.player.getBoundingClientRect();
        return (rect.top >= 0 && rect.left >0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth);
        
    },

    viewHandler: function() {
        var handler = this.checkViewability();
        if(handler) {
            this.player.play();
            clearInterval(this.viewTimer);
            this.loadTrackingPixel("inView");
        }
    },

    setViewability: function(player) {
        this.player = player;
        this.viewTimer = setInterval(this.viewHandler.bind(this), 1000);
    },

    loadTrackingPixel: function(type) {
        console.log("LOADING TRACKING PIXEL: " + type);
        var impressionImage = document.createElement("img");
        impressionImage.src = this.vastTracking[type];
    },

    checkTime(currentTime, player) {
        var videoPercentage = (currentTime / player.duration) * 100;
        if(videoPercentage >= 25 && this.quarterLoaded === false) {
            this.loadTrackingPixel('quarter');
            this.quarterLoaded = true;
        }
        if(videoPercentage >= 50 && this.midLoaded === false) {
            this.loadTrackingPixel('mid');
            this.midLoaded = true;
        }
        if(videoPercentage >= 75 && this.threeQuarterLoaded === false) {
            this.loadTrackingPixel('threeQuarters');
            this.threeQuarterLoaded = true;
        }
    },

    setEventListeners: function(player) {
        player.addEventListener("play", function(event) {
            if(!this.impressionLoaded) { this.loadTrackingPixel("impression"); this.impressionLoaded = true; }
            if(!this.startLoaded) { this.loadTrackingPixel("start"); this.startLoaded = true; }
        }.bind(this));
        player.addEventListener("timeupdate", function(event) {
            this.checkTime(player.currentTime, player);
        }.bind(this));
        player.addEventListener("ended", function(event) {
            if(!this.completeLoaded) { this.loadTrackingPixel("complete"); this.completeLoaded = true; }
            //Hide Video Player on Video Ended
            player.style.display = "none";
            //Display Companion on Video Ended
            document.getElementById("companion-bigbox").style.display = "block";
        }.bind(this));
        player.addEventListener("click", function(event) {
            window.open(this.vastTracking['clickthrough'], "_blank");
            player.pause();
        }.bind(this));
    }

}