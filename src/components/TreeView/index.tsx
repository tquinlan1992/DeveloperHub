import * as React from 'react';
import TreeViewCustomInner from './TreeViewCustom';
import TreeViewCustomInner2 from './TreeViewCustom2';
import 'react-treeview/react-treeview.css';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';

function handleChildren(children: any) {
    return (
        children.map((node: any) => {
            const label = <RaisedButton label={node.title} className="node"/>;
            const nodeChildren = node.children ? handleChildren(node.children) : null;
            const nodeSnippets = node.snippets ? handleChildren(node.snippets) : null;
            return (
                <TreeViewCustomInner nodeLabel={label} key={node.title} collapsed={false} all={false}>
                    <div className="info">snippets: {node.snippetsCount}</div>
                    {nodeSnippets}
                    {nodeChildren}
                </TreeViewCustomInner>
            );
        })
    );
}
function TreeViewCustom(props: {dataSource: any[]}) {
    return (
        <div>
            <TreeViewCustomInner2 />
            {props.dataSource.map((node, i) => {
                console.log('node', node);
                const children = node.children ? handleChildren(node.children) : null;
                return children;
            })}
        </div>
    );
}

export default TreeViewCustom;

const mapStateToProps = (state: any) => {
    return {
        dataSource: state.treeView
    };
};

export const TreeViewRedux = connect(mapStateToProps, {})(TreeViewCustom);
