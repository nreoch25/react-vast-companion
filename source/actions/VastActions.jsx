import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import Constants from '../constants/AppConstants.jsx';
import WebApi from '../utils/WebApi.jsx';
import Xml2js from 'xml2js';

module.exports = {

    self : this,

    loadVast(uri, action) {
        
        var data_action;
        var parser = new Xml2js.Parser();

        WebApi.getVast(uri, function(response) {

            switch(action.actionType) {
                case Constants.LOAD_VAST_XML:
                    parser.parseString(response.body, function(err, result) {
                        if(!err) {
                            data_action = { actionType: action.actionType, payload: result };
                            this.dispatchEvent(data_action);
                        } else {
                            console.log(err);
                        }
                    }.bind(this));
                    
                    //data_action = { actionType: action.actionType, payload: data };
                    //this.dispatchEvent(data_action);
                    break;
            }

        }.bind(this), function(error) {

            console.log(error);

        }.bind(this));
    },

    getVastXML(tag) {
        var action = { actionType: Constants.LOAD_VAST_XML };
        var uri = tag;
        this.loadVast(uri, action);
    },

    dispatchEvent(action) {
        console.log('dispatch event: ' + action.actionType);
        AppDispatcher.dispatch(action);
    }

};