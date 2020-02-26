import Daemon from '../Daemon';

test('should return Daemon', () => {
  const expected = {
    name: 'vasya',
    type: 'Daemon',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(new Daemon('vasya')).toMatchObject(expected);
});
