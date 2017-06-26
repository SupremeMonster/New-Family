import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491576317912&di=a16dcdd00974e75d1bf9923e3b3c98ad&imgtype=0&src=http%3A%2F%2Fp0.qhimg.com%2Fdmsmty%2F350_200_%2Ft01aef82a4f78746280.jpg',
    name: '丁一'
  }
];

const Users = [];

for (let i = 0; i<240; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.mock('丁')+Mock.Random.cname().slice(0,2),
    addr: Mock.mock('13')+Mock.Random.integer(100000000,999999999),
    age:Mock.Random.first()+'_'+Mock.Random.name().slice(0,4),
    birth: '19'+Mock.Random.integer(70,95)+'-'+Mock.Random.date().slice(5,10),
    sex: Mock.Random.integer(0, 1),
  }));
}

export { LoginUsers, Users };
