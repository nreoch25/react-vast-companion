import React, {PropTypes} from 'react';

export default React.createClass({

    componentDidMount() {
        var htmlResource = this.props.html;
        var iframeRef = React.findDOMNode(this.refs.htmlCompanion);
        var iframeDoc = iframeRef.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(htmlResource);
        iframeDoc.close();
    },

    render() {
        return (
            <div>
                <iframe width="300" height="250" scrolling="no" frameBorder="no" marginWidth="0" marginHeight= "0" ref="htmlCompanion"></iframe>
            </div>
        );
    }

});