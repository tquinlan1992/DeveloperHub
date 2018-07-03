# tquinlan92-material-core-ui

A collection of @material-ui/core typescript components

- `TreeView` allows navigation through a folder and file type structure
    - 
    ### Props


    | Prop Name         | Type  | Description                                                                                                              | Purpose                                                                         |
    |-------------------|-------|--------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
    | tags              | Array | List of all available folders and tags (at all depths).                                                                  | Used to determine what folders/tags to display at the current depth             |
    | selectedTags      | Array | List of Tag-ids that are currently selected (across all depths).                                                         | Used to determine what tags should be marked as selected                        |
    | onTagSelectionChange     | Func  | Callback method to call when a tag is selected or deselected. Should receive an array of all currently-selected Tag-ids. | Used to inform the parent component that the list of selected-Tags has changed. |

    ### Tag List

    Each item in this list contains the folowing props:
    
    | Property  | Type    | Description                                                                                                     |
    |-----------|---------|-----------------------------------------------------------------------------------------------------------------|
    | _id       | String  | Alphanumeric ID, represents the unique tag or folder.                                                           |
    | name      | String  | Represents the Tag or Folder                                                                                    |
    | isFolder  | Boolean | If true, means Tag is a Folder of Tags.                                                                         |
    | parent    | String  | If null, means Tag or Folder is at 'Root Level'. If present, identifies the id of the direct parent of the tag or folder. |
    | ancestors | Array   | List of direct ancestors (including Parent)                                                                     |


    ### Usage
    ```typescript
    import { TreeView } from 'tquinlan92-material-core-ui';

    class TreeViewDemo extends React.Component<Props & Actions> {

        onTagSelectionChange(selectedTags: string[]) {
            alert(selectedTags);
        }

        render() {
            const tags =[{
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
            const selectedTags = ['id1'];
            const treeViewProps = {
                onTagSelectionChange: this.onTagSelectionChange.bind(this),
                tags,
                selectedTags
            };
            return (
                <div>
                    <TreeView {...treeViewProps} />
                </div>
            );
        }
    }  
    ```