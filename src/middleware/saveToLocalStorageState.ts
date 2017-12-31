export default function saveToLocalStorageState(params: { getState: Function; }) {
    return (next: any) => (action: any) => {
        console.log('will dispatch', action);

        // Call the next dispatch method in the middleware chain.
        const returnValue = next(action);

        localStorage.state = JSON.stringify(params.getState());

        return returnValue;
    };
}
