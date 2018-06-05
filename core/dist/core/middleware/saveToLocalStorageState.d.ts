export default function saveToLocalStorageState(params: {
    getState: Function;
}): (next: any) => (action: any) => any;
