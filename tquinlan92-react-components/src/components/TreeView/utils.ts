import { TagsFolders } from "./types";

interface GetTagsFolderForParent {
    tagsFolders: TagsFolders;
    parent: string | null;
}

export function getTagsFolderAtLevel({ tagsFolders, parent }: GetTagsFolderForParent) {
    return tagsFolders.filter(tagFolder => {
        return tagFolder.parent === parent;
    });
}
