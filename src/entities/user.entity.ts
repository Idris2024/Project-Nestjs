export default interface User {
    id: number,
    firstName: string,
    lastname: string,
    email: string,
    password?: string,
    passwordHash: string;
}