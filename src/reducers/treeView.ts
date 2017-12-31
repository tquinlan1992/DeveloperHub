//import actionTypes from '../actions/actionTypes';

const children: any = [
    { title: 'Paul Gordon', snippetsCount: 29, collapsed: false },
    { title: 'Sarah Lee2', snippetsCount: 27,  collapsed: false },
];

const children3: any = [
    { title: 'Paul Gordon3', snippetsCount: 29, collapsed: false },
    { title: 'Sarah Lee4', snippetsCount: 27, collapsed: false },
];
 
const snippets = [
    { title: 'Snippet Title', snippetsCount: 0, collapsed: false, children: [ { title: 'snippet 1'}] },
];

const children2: any = [
    { title: 'Paul Gordon2', snippetsCount: 29, collapsed: false },
    { title: 'Sarah Lee3', snippetsCount: 27, collapsed: false, snippets, children: children3 },
];
export const dataSource = [
    {
        type: 'Employees',
        collapsed: false,
        children: [...children, { title: 'Sarah Lee', snippetsCount: 27, collapsed: false, children: children2 }]
    }
];

export default function increment(state = dataSource, action: any) {
    console.log('state treeView', state);
    switch (action.type) {
        default:
            return state;
    }
}
