// 1-12.js에서 정의된 copyObject 함수 불러오기
const copyObject = require('./1-12.js');

var user = {
    name: 'Jaenam',
    gender: 'male'
};

var user2 = copyObject(user);
user2.name = 'Jung';

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.');
}
console.log(user.name, user2.name);
console.log(user == user2);