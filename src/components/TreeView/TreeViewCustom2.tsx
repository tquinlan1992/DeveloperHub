import Tree, { TreeNode } from 'rc-tree';
import * as React from 'react';

export function generateData(x = 3, y = 2, z = 1, gData = []) {
    // x：每一级下的节点总数。y：每级节点里有y个节点、存在子节点。z：树的level层级数（0表示一级）
    function _loop(_level: any, _preKey?: any, _tns?: any) {
        const preKey = _preKey || '0';
        const tns = _tns || gData;

        const children = [];
        for (let i = 0; i < x; i++) {
            const key = `${preKey}-${i}`;
            tns.push({ title: `${key}-label`, key: `${key}-key` });
            if (i < y) {
                children.push(key);
            }
        }
        if (_level < 0) {
            return tns;
        }
        const __level = _level - 1;
        children.forEach((key, index) => {
            tns[index].children = [];
            return _loop(__level, key, tns[index].children);
        });
    }
    _loop(z);
    return gData;
}
export function calcTotal(x = 3, y = 2, z = 1) {
    /* eslint no-param-reassign:0*/
    const rec = (n: any): any => n >= 0 ? x * Math.pow(y, n--) + rec(n) : 0;
    return rec(z + 1);
}
console.log('总节点数（单个tree）：', calcTotal());
// 性能测试：总节点数超过 2000（z要小）明显感觉慢。z 变大时，递归多，会卡死。

export const gData = generateData();

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
