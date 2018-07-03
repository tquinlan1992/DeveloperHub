import { TagsFolders } from "./types";
interface GetTagsFolderForParent {
    tagsFolders: TagsFolders;
    parent: string | null;
}
export declare function getTagsFolderAtLevel({ tagsFolders, parent }: GetTagsFolderForParent): (import("./types").Tag | import("./types").Folder)[];
export {};
