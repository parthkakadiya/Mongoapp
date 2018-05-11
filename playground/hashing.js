const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const data = {
    id: 10
};
// const password = '123abc!';
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

const hashedPassword = '$2a$10$huAU4qTnQuGPifHEXfV9cOmPJ7p61oKaoXrY1WviiDAznE/rW8oLK';

bcrypt.compare('123ab!', hashedPassword, (err, res) => {
    console.log(res);
});



// const token = jwt.sign(data, '123abc');
// console.log(token);
//
// const decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// const msg = 'I am Parth';
//
// const res = SHA256(msg).toString();
// console.log(msg);
// console.log(res);
//
// const data = {
//   id: 4
// };
// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
// //
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!');
// }



