import * as React from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../../actions';
import { pick } from '../../utils';
import * as _ from 'lodash';

interface NestedListActions {
    navigateToFeed: typeof actions.navigateToFeed;
    history: any;
}

class GetListComponent {

    public keyCount = 1;
    public List = React.Component;

    constructor(listItems: any) {
       this.List = this.getListComponent(_.cloneDeep(listItems));
    }

    public getListComponent(listItems: any) {
        return listItems.map((listItem: any) => {
            listItem.key = this.keyCount;
            this.keyCount++;
            if (listItem.nestedItems) {
                listItem.nestedItems = this.getListComponent(listItem.nestedItems);
            }
            return <ListItem {...listItem} />;
        });
    }    
}

class ListExampleNested extends React.Component<NestedListActions, any> {

    state = {
        open: true,
    };

    mockListItems = [{
        primaryText: "Sent mail",
        leftIcon: < ContentSend />,
        onClick: this.onClickListItem.bind(this)
    }, {
        primaryText: "Drafts",
        leftIcon: < ContentDrafts />,
    },
    {
        primaryText: "Inbox",
        leftIcon: < ContentInbox />,
        initiallyOpen: true,
        primaryTogglesNestedList: true,
        nestedItems: [
            {
                primaryText: "Starred",
                leftIcon: <ActionGrade />
            }, {
                primaryText: "Sent Mail",
                leftIcon: <ContentSend />,
                nestedItems: [{
                    primaryText: "Drafts",
                    leftIcon: <ContentDrafts />
                }]
            }, {
                primaryText: "Sent Mail",
                leftIcon: <ContentSend />,
                nestedItems: [{
                    primaryText: "Drafts",
                    leftIcon: <ContentDrafts />
                }]
            }, {
                primaryText: "Inbox",
                leftIcon: <ContentInbox />,
                open: true
            }
        ]
    }
    ];

    handleNestedListToggle(item: any) {
        this.setState({
            open: item.state.open,
        });
    }

    onClickListItem() {
        console.log('listItem clicked');
        this.props.navigateToFeed(this.props.history, 'new page');
    }

    render() {
        return (
            <div>
                <List>
                    {new GetListComponent(this.mockListItems).List}
                </List>
                <h1>asdf{new GetListComponent(this.mockListItems).keyCount}</h1>
                {/* <List>
                    <ListItem
                        primaryText="Inbox"
                        leftIcon={<ContentInbox />}
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={1}
                                primaryText="Starred"
                                leftIcon={<ActionGrade />}
                            />,
                            <ListItem
                                key={2}
                                primaryText="Sent Mail"
                                leftIcon={<ContentSend />}
                                nestedItems={[
                                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                                ]}
                            />,
                            <ListItem
                                key={4}
                                primaryText="Sent Mail"
                                leftIcon={<ContentSend />}
                                nestedItems={[
                                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                                ]}
                            />,
                            <ListItem
                                key={3}
                                primaryText="Inbox"
                                leftIcon={<ContentInbox />}
                                open={this.state.open}
                                onClick={this.onClickListItem.bind(this)}
                            />,
                        ]}
                    />
                </List> */}
            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    console.log('state', state, 'ownProps', ownProps);
    const { history } = ownProps;
    return {
        history
    };
};

const mapActionsToProps = pick(actions, 'navigateToFeed');

export default withRouter(connect(mapStateToProps, mapActionsToProps)(ListExampleNested));
