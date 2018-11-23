import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TreeView } from 'tquinlan92-material-core-ui';
import { TagsFolders } from 'tquinlan92-material-core-ui/dist/components/TreeView/types';

const rootLevel = [{
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

const folder1 = [
  {
      _id: 'id3',
      name: 'tag3',
      isFolder: false,
      parent: 'id1',
      ancestors: ['id1']
  },
  {
      _id: 'id4',
      name: 'folder4',
      isFolder: true,
      parent: 'id1',
      ancestors: ['id1']
  },
  {
      _id: 'id5',
      name: 'folder5',
      isFolder: true,
      parent: 'id1',
      ancestors: ['id1']
  }
];

const folder5 = [
  {
      _id: 'id6',
      name: 'tag7',
      isFolder: false,
      parent: 'id5',
      ancestors: ['id5', 'id1']
  }
];

const tagsFolders = [
  ...rootLevel,
  ...folder1,
  ...folder5
] as TagsFolders;

const selectedTags: string[] = [];

function onTagSelectionChange(selectedTags: string[]) {
}

const props = {
  tagsFolders,
  selectedTags,
  onTagSelectionChange
};

storiesOf('TreeView', module)
  .add('with some folders', () => (
    <div>
    <TreeView {...props}>
     </TreeView>
    </div>
  ))
  .add('with some folders2', () => (
    <div>
    <TreeView {...props}>
     </TreeView>
    </div>
  ));

  storiesOf('TreeView2', module)
  .add('with some folders', () => (
    <div>
    <TreeView {...props}>
     </TreeView>
    </div>
  ))
  .add('with some folders2', () => (
    <div>
    <TreeView {...props}>
     </TreeView>
    </div>
  ));
