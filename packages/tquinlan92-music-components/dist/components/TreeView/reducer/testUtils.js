"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootLevel1 = [{
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
exports.folder1 = [
    {
        _id: 'id3',
        name: 'tag3',
        isFolder: false,
        parent: 'id1',
        ancestors: ['id1']
    }
];
exports.tagsFolders1 = exports.rootLevel1.concat(exports.folder1);
