import { TagsFolders } from "../types";

export const rootLevel1 = [{
    _id: 'id1',
    name: 'folder1',
    isFolder: true,
    parent: null,
    ancestors: []
},
{
    _id: 'id2',
    name: 'tag2',
    isFolder: false,
    parent: null,
    ancestors: []
}];

export const folder1 = [
    {
        _id: 'id3',
        name: 'tag3',
        isFolder: false,
        parent: 'id1',
        ancestors: ['id1']
    }
] as TagsFolders;

export const tagsFolders1 = [
    ...rootLevel1,
    ...folder1
] as TagsFolders;
