import Tree, { TreeNode } from 'rc-tree';
import * as React from 'react';
export const gData = [{ "title": "0-0-label", "key": "0-0-key", "children": [{ "title": "0-0-0-label", "key": "0-0-0-key", "children": [{ "title": "0-0-0-0-label", "key": "0-0-0-0-key" }, { "title": "0-0-0-1-label", "key": "0-0-0-1-key" }, { "title": "0-0-0-2-label", "key": "0-0-0-2-key" }] }, { "title": "0-0-1-label", "key": "0-0-1-key", "children": [{ "title": "0-0-1-0-label", "key": "0-0-1-0-key" }, { "title": "0-0-1-1-label", "key": "0-0-1-1-key" }, { "title": "0-0-1-2-label", "key": "0-0-1-2-key" }] }, { "title": "0-0-2-label", "key": "0-0-2-key" }] }, { "title": "0-1-label", "key": "0-1-key", "children": [{ "title": "0-1-0-label", "key": "0-1-0-key", "children": [{ "title": "0-1-0-0-label", "key": "0-1-0-0-key" }, { "title": "0-1-0-1-label", "key": "0-1-0-1-key" }, { "title": "0-1-0-2-label", "key": "0-1-0-2-key" }] }, { "title": "0-1-1-label", "key": "0-1-1-key", "children": [{ "title": "0-1-1-0-label", "key": "0-1-1-0-key" }, { "title": "0-1-1-1-label", "key": "0-1-1-1-key" }, { "title": "0-1-1-2-label", "key": "0-1-1-2-key" }] }, { "title": "0-1-2-label", "key": "0-1-2-key" }] }, { "title": "0-2-label", "key": "0-2-key" }];

class Demo extends React.Component {
    state = {
        gData,
        autoExpandParent: true,
        expandedKeys: ['0-0-key', '0-0-0-key', '0-0-0-0-key'],
    };
    onDragStart = (info: any) => {
        console.log('start', info);
    }
    onDragEnter = (info: any) => {
        console.log('enter', info);
        this.setState({
            expandedKeys: info.expandedKeys,
        });
    }
    onDrop = (info: any) => {
        console.log('drop', info);
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
        console.log('onExpand', arguments);
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    }

    onCheck(checkedKeys: string[]) {
        console.log('checkedKeys', checkedKeys);
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
                    onSelect={this.onCheck.bind(this)}
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

export default Demo;
