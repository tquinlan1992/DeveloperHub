import * as React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { withRouter } from 'react-router-dom';
import * as ReactMarkdown from 'react-markdown';
import './style.css';

function getValueFromEvent(event: React.ChangeEvent<HTMLTextAreaElement>) {
    return event.target.value;
}

class DocEditor extends React.Component<{
    doc: string;
    docChange: typeof actions.onDocChange
}, {}> {

    onDocChangeFromHTML(event: React.ChangeEvent<HTMLTextAreaElement>) {
        this.props.docChange({ value: getValueFromEvent(event) });
    }

    render() {
        return (
            <div>
                <textarea value={this.props.doc} onChange={this.onDocChangeFromHTML.bind(this)} />
                <div style={{width:"50%"}}>
                <ReactMarkdown source={this.props.doc} />
                </div>            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    console.log('state', state);
    return {
        doc: state.doc.edit
    };
};

const mapActionsToProps = {
    docChange: actions.onDocChange,
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(DocEditor));
