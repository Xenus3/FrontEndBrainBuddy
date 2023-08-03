import { Role } from "./role";

export interface User {
    userName: string,
    email: string,
    password: string,
    roles: Role
}
