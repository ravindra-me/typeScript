"use strict";
let num = 12;
let firstName = 'Ravindra';
// boolean Value
let bol = false;
//big
let bigNumber;
bigNumber = 10n;
console.log(BigInt(Number.MAX_SAFE_INTEGER));
class HandleObject {
    constructor(value) { }
}
var x;
//function
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}
console.log(fullName({ firstName: 'rajpoot', lastName: 'ravindra' }));
let user = { firstName: 'Rav', lastName: 'ghgh' };
let user1 = { firstName: 'Rav', lastName: 'ghgh' };
// opretor |, &
// union type
let a;
let job;
job = 'frontend';
let req = {
    state: 'success',
    response: {
        title: 'NEW ITEM',
        state: true,
        id: 1,
    },
};
let userResponse = {
    username: 'Ravindra Singh',
    userId: 'rav_0.12',
    type: 'user',
    status: 200,
};
let adminResponse = {
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
