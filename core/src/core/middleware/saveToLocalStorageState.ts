export default function saveToLocalStorageState(params: { getState: Function; }) {
    return (next: any) => (action: any) => {

        const returnValue = next(action);
        localStorage.state = JSON.stringify(params.getState());
        return returnValue;
        
    };
}
