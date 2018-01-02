import 'rc-tree/assets/index.css';
import { connect } from 'react-redux';
import Tree, { TreeNode } from 'rc-tree';
import * as React from 'react';
import { withRouter } from 'react-router';
import actions from '../../actions';

class TreeViewCustom extends React.Component<any, any> {
    state = {
        gData: this.props.data,
        autoExpandParent: true,
        expandedKeys: ['0-0-key', '0-0-0-key', '0-0-0-0-key'],
    };
    onDragStart = (info: any) => {
    }
    onDragEnter = (info: any) => {
        this.setState({
            expandedKeys: info.expandedKeys,
        });
    }
    onDrop = (info: any) => {
        const dropKey = info.node.props.eventKey;
        const dragKey = info.dragNode.props.eventKey;
        // const dragNodesKeys = info.dragNodesKeys;
        const loop = (data: any, key: any, callback: any) => {
            data.forEach((item: any, index: any, arr: any) => {
                if (item.key === key) {
                    return callback(item, index, arr);
                }
                if (item.children) {
                    return loop(item.children, key, callback);
                }
            });
        };
        const data = [...this.state.gData];
        let dragObj: any;
        loop(data, dragKey, (item: any, index: any, arr: any) => {
            arr.splice(index, 1);
            dragObj = item;
        });
        if (info.dropToGap) {
            let ar;
            let i = 0;
            loop(data, dropKey, (item: any, index: any, arr: any) => {
                ar = arr;
                i = index;
            });
            ar && (ar as any[]).splice(i, 0, dragObj);
        } else {
            loop(data, dropKey, (item: any) => {
                item.children = item.children || [];
                // where to insert 示例添加到尾部，可以是随意位置
                item.children.push(dragObj);
            });
        }
        this.setState({
            gData: data,
        });
    }
    onExpand = (expandedKeys: any) => {
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    }

    onSelect(checkedKeys: string[]) {
        console.log('checkedKeys', checkedKeys);
        this.props.navigateToFeed(this.props.history, checkedKeys[0]);
    }

    render() {
        const loop = (data: any) => {
            return data.map((item: any) => {
                if (item.children && item.children.length) {
                    return <TreeNode key={item.key} title={item.title}>{loop(item.children)}</TreeNode>;
                }
                return <TreeNode key={item.key} title={item.title} />;
            });
        };
        return (<div className="draggable-demo">
            <h2>draggable </h2>
            <p>drag a node into another node</p>
            <div className="draggable-container">
                <Tree
                    expandedKeys={this.state.expandedKeys}
                    onExpand={this.onExpand} autoExpandParent={this.state.autoExpandParent}
                    draggable
                    selectedKeys={['0-0-0-0-label']}
                    onSelect={this.onSelect.bind(this)}
                    onDragStart={this.onDragStart}
                    onDragEnter={this.onDragEnter}
                    onDrop={this.onDrop}
                >
                    {loop(this.state.gData)}
                </Tree>
            </div>
        </div>);
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    console.log('ownPropsTree', ownProps);
    return {
        data: state.treeView,
        history: ownProps.history
    };
};

const mapActionsToProps = {
    navigateToFeed: actions.navigateToFeed
};

export const TreeViewRedux = withRouter(connect(mapStateToProps, mapActionsToProps)(TreeViewCustom));
