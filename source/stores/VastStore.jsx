import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import VastActions from '../actions/VastActions.jsx';
import Constants from '../constants/AppConstants.jsx';
import EventEmitter from 'events';
import assign from 'object-assign';

let vastObj;

var VastStore = assign({}, EventEmitter.prototype, {

    onVastReceived(data) {
        vastObj = data;
    },

    getVastObject() {
        return vastObj;
    },

    removeLoadListener(callback) {
        this.removeListener(Constants.NEW_VAST_XML, callback);
    },

    addLoadListener(callback) {
        this.on(Constants.NEW_VAST_XML, callback);
    },

    emitNewVastEvent() {
        this.emit(Constants.NEW_VAST_XML);
    },

});

AppDispatcher.register(function(action) {

    console.log("received action: " + action.actionType);
    switch(action.actionType) {

        case Constants.LOAD_VAST_XML:
            console.log(action);
            VastStore.onVastReceived(action.payload);
            VastStore.emitNewVastEvent();
            break;

    }

});

module.exports = VastStore;