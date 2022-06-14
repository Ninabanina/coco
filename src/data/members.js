const members = [
  {
    id: 0,
    name: 'Isabella',
    team: 'Blue',
  },
  {
    id: 1,
    name: 'James',
    team: 'Blue',
  },
  {
    id: 2,
    name: 'Jeremy',
    team: 'Blue',
  },
  {
    id: 3,
    name: 'Mike',
    team: 'Blue',
  },
  {
    id: 4,
    name: 'Nina',
    team: 'Blue',
  },
  {
    id: 5,
    name: 'Rach',
    team: 'Blue',
  },
  {
    id: 6,
    name: 'Sam',
    team: 'Blue',
  },
  {
    id: 7,
    name: 'Seb',
    team: 'Blue',
  },
  {
    id: 8,
    name: 'Sergio',
    team: 'Blue',
  },
  {
    id: 9,
    name: 'Timocles',
    team: 'Blue',
  },
  {
    id: 10,
    name: 'Sarah',
    team: 'Green',
  },
  {
    id: 11,
    name: 'Dan',
    team: 'Green',
  },
  {
    id: 12,
    name: 'Zoe',
    team: 'Green',
  },
  {
    id: 13,
    name: 'Bridget',
    team: 'Red',
  },
  {
    id: 14,
    name: 'Elliott',
    team: 'Red',
  },
  {
    id: 15,
    name: 'Isabel',
    team: 'Red',
  },
  {
    id: 16,
    name: 'Jon',
    team: 'Red',
  },
  {
    id: 17,
    name: 'Kurt',
    team: 'Red',
  },
  {
    id: 18,
    name: 'Maikel',
    team: 'Red',
  },
  {
    id: 19,
    name: 'Matt',
    team: 'Red',
  },
  {
    id: 20,
    name: 'Tim H',
    team: 'Red',
  },
  {
    id: 21,
    name: 'Vince',
    team: 'Red',
  },
  {
    id: 22,
    name: 'Harley',
    team: 'Blue',
  },
  {
    id: 23,
    name: 'Talor',
    team: 'Blue',
  },
  {
    id: 24,
    name: 'Natasha',
    team: 'Red',
  },
];

const blueTeamMembers = members.filter((member) => member.team === 'Blue');
const redTeamMembers = members.filter((member) => member.team === 'Red');
const greenTeamMembers = members.filter((member) => member.team === 'Green');

export { members, blueTeamMembers, redTeamMembers, greenTeamMembers };
