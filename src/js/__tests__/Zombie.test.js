import Zombie from '../Zombie';

test('should return Zombie', () => {
  const expected = {
    name: 'vasya',
    type: 'Zombie',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(new Zombie('vasya')).toMatchObject(expected);
});
