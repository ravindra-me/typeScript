declare let num: number;
declare let firstName: string;
declare let bol: boolean;
declare let bigNumber: bigint;
declare class HandleObject<T> {
    constructor(value: T);
}
declare var x: HandleObject<number>;
interface User {
    firstName: string;
    lastName: string;
    age?: number;
    weight?: number;
}
interface User1 extends User {
    name?: string;
}
declare function sum(a: number, b: number): number;
interface obj {
    firstName: string;
    lastName: string;
}
declare function fullName({ firstName, lastName }: obj): string;
declare let user: User;
declare let user1: User1;
declare let a: string | number;
declare type SoftwareJob = 'frontend' | 'backend' | 'fullstack';
declare type ManagerJobs = 'ProductManager' | 'Slaes Manager' | 'team Manager';
declare type Jobs = SoftwareJob | ManagerJobs;
declare let job: Jobs;
declare type RequestLoading = {
    state: 'loading';
};
declare type RequestFailed = {
    state: 'failed';
    errorCode: number;
};
declare type RequestSucess = {
    state: 'success';
    response: {
        title: string;
        state: boolean;
        id: number;
    };
};
declare type Networkrequests = RequestLoading | RequestFailed | RequestSucess;
declare let req: Networkrequests;
declare type ErrorType = {
    status: number;
    error?: {
        message: string;
    };
};
declare type UserData = {
    username: string;
    userId: string;
    type: 'user' | 'guest';
};
declare type AdminData = {
    username: string;
    userId: string;
    users: UserData[];
};
declare type UserResponse = ErrorType & UserData;
declare type AdminResponse = ErrorType & AdminData;
declare let userResponse: UserResponse;
declare let adminResponse: AdminResponse;
