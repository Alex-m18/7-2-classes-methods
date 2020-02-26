import Undead from '../Undead';

test('should return Undead', () => {
  const expected = {
    name: 'vasya',
    type: 'Undead',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(new Undead('vasya')).toMatchObject(expected);
});
