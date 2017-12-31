import * as React from 'react';

class TreeViewCustom extends React.Component<{ onClick?: Function; className?: string; itemClassName?: string; nodeLabel: any; collapsed?: boolean; all?: boolean;}, any> {
    
    state = {
        collapsed: this.props.all as boolean
    };

    handleClick(args: any) {
        this.setState({ collapsed: !this.state.collapsed });
        if (this.props.onClick) {
            this.props.onClick(...args);
        }
    }

    render() {
        const {
      collapsed = this.state.collapsed,
            className = '',
            itemClassName = '',
            nodeLabel,
            children,
            ...rest,
    } = this.props;

        let arrowClassName = 'tree-view_arrow';
        let containerClassName = 'tree-view_children';
        if (collapsed) {
            arrowClassName += ' tree-view_arrow-collapsed';
            containerClassName += ' tree-view_children-collapsed';
        }

        const arrow =
            <div
                {...rest}
                className={className + ' ' + arrowClassName}
                onClick={this.handleClick.bind(this)} />;

        return (
            <div className="tree-view">
                <div className={'tree-view_item ' + itemClassName}>
                    {arrow}
                    {nodeLabel}
                </div>
                <div className={containerClassName}>
                    {children}
                </div>
            </div>
        );
    }
}

export default TreeViewCustom;
