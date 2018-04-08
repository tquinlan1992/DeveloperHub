export function mockPouchDB() {
    jest.mock('../database/pouch', () => {
        return {};
    });
}
