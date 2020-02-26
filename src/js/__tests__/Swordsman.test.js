import Swordsman from '../Swordsman';

test('should return Swordsman', () => {
  const expected = {
    name: 'vasya',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(new Swordsman('vasya')).toMatchObject(expected);
});
