import Magician from '../Magician';

test('should return Magician', () => {
  const expected = {
    name: 'vasya',
    type: 'Magician',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(new Magician('vasya')).toMatchObject(expected);
});
