let num: number = 12;

let firstName: string = 'Ravindra';

// boolean Value
let bol: boolean = false;

//big

let bigNumber: bigint;

bigNumber = 10n;

console.log(BigInt(Number.MAX_SAFE_INTEGER));

class HandleObject<T> {
  constructor(value: T) {}
}

var x: HandleObject<number>;

interface User {
  firstName: string;
  lastName: string;
  age?: number;
  weight?: number;
}

interface User1 extends User {
  name?: string;
}

//function

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(2, 3));

interface obj {
  firstName: string;
  lastName: string;
}

function fullName({ firstName, lastName }: obj): string {
  return `${firstName} ${lastName}`;
}

console.log(fullName({ firstName: 'rajpoot', lastName: 'ravindra' }));

let user: User = { firstName: 'Rav', lastName: 'ghgh' };

let user1: User1 = { firstName: 'Rav', lastName: 'ghgh' };

// opretor |, &

// union type

let a: string | number;

type SoftwareJob = 'frontend' | 'backend' | 'fullstack';

type ManagerJobs = 'ProductManager' | 'Slaes Manager' | 'team Manager';

type Jobs = SoftwareJob | ManagerJobs;

let job: Jobs;

job = 'frontend';

// job = "gshg" // error
type RequestLoading = {
  state: 'loading';
};

type RequestFailed = {
  state: 'failed';
  errorCode: number;
};

type RequestSucess = {
  state: 'success';
  response: {
    title: string;
    state: boolean;
    id: number;
  };
};

type Networkrequests = RequestLoading | RequestFailed | RequestSucess;

let req: Networkrequests = {
  state: 'success',
  response: {
    title: 'NEW ITEM',
    state: true,
    id: 1,
  },
};

// intersection type &

type ErrorType = {
  status: number;
  error?: {
    message: string;
  };
};

type UserData = {
  username: string;
  userId: string;
  type: 'user' | 'guest';
};

type AdminData = {
  username: string;
  userId: string;
  users: UserData[];
};

type UserResponse = ErrorType & UserData;

type AdminResponse = ErrorType & AdminData;

let userResponse: UserResponse = {
  username: 'Ravindra Singh',
  userId: 'rav_0.12',
  type: 'user',
  status: 200,
};

let adminResponse: AdminResponse = {
  username: 'Asvindra Singh',
  userId: 'asv_10202',
  status: 200,
  users: [
    {
      username: 'ravindra',
      userId: 'sm_02',
      type: 'user',
    },
  ],
};

console.log({ firstName, num });
