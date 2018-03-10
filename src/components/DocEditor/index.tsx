import * as React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { withRouter } from 'react-router-dom';
import * as ReactMarkdown from 'react-markdown';
import SplitPane from 'react-split-pane';
import './style.css';
import MonacoEditor from 'react-monaco-editor';

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

    onDocChangeFromMonaco(value: string) {
        this.props.docChange({ value });
    }

    render() {
        const options = {
            selectOnLineNumbers: true
        };
        return (
            <div style={{ float: 'left'}}>
                <SplitPane split="vertical" minSize={300} defaultSize={500} style={{ position: 'relative', minHeight: '100vh'}}>
                <div>
                    {/* <textarea value={this.props.doc} onChange={this.onDocChangeFromHTML.bind(this)} /> */}
                        <MonacoEditor
                            width="800"
                            height="600"
                            language="markdown"
                            theme="vs"
                            value={this.props.doc}
                            onChange={this.onDocChangeFromMonaco.bind(this)}
                            options={options}
                    /> 
                </div>
                <div>
                        <ReactMarkdown source={this.props.doc} escapeHtml={false} />
                </div>  
                </SplitPane>   
            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        doc: state.doc.edit
    };
};

const mapActionsToProps = {
    docChange: actions.onDocChange,
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(DocEditor));
