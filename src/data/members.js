export const TEAM = {
  BLUE: 'Blue',
  RED: 'Red',
  GREEN: 'Green',
}


const members = [
  {
    id: 0,
    name: 'Isabella',
    team: TEAM.BLUE,
  },
  {
    id: 1,
    name: 'James',
    team: TEAM.BLUE,
  },
  {
    id: 2,
    name: 'Jeremy',
    team: TEAM.BLUE,
  },
  {
    id: 3,
    name: 'Mike',
    team: TEAM.BLUE,
  },
  {
    id: 4,
    name: 'Nina',
    team: TEAM.BLUE,
  },
  {
    id: 5,
    name: 'Rach',
    team: TEAM.BLUE,
  },
  {
    id: 6,
    name: 'Sam',
    team: TEAM.BLUE,
  },
  {
    id: 7,
    name: 'Seb',
    team: TEAM.BLUE,
  },
  {
    id: 8,
    name: 'Sergio',
    team: TEAM.BLUE,
  },
  {
    id: 9,
    name: 'Timocles',
    team: TEAM.BLUE,
  },
  {
    id: 10,
    name: 'Sarah',
    team: TEAM.GREEN,
  },
  {
    id: 11,
    name: 'Dan',
    team: TEAM.GREEN,
  },
  {
    id: 12,
    name: 'Zoe',
    team: TEAM.GREEN,
  },
  {
    id: 13,
    name: 'Bridget',
    team: TEAM.RED,
  },
  {
    id: 14,
    name: 'Elliott',
    team: TEAM.RED,
  },
  {
    id: 15,
    name: 'Isabel',
    team: TEAM.RED,
  },
  {
    id: 16,
    name: 'Jon',
    team: TEAM.RED,
  },
  {
    id: 17,
    name: 'Kurt',
    team: TEAM.RED,
  },
  {
    id: 18,
    name: 'Maikel',
    team: TEAM.RED,
  },
  {
    id: 19,
    name: 'Matt',
    team: TEAM.RED,
  },
  {
    id: 20,
    name: 'Tim H',
    team: TEAM.RED,
  },
  {
    id: 21,
    name: 'Vince',
    team: TEAM.RED,
  },
  {
    id: 22,
    name: 'Harley',
    team: TEAM.BLUE,
  },
  {
    id: 23,
    name: 'Talor',
    team: TEAM.BLUE,
  },
  {
    id: 24,
    name: 'Natasha',
    team: TEAM.RED,
  },
];

const blueTeamMembers = members.filter((member) => member.team === TEAM.BLUE).sort((a, b) => a.name.localeCompare(b.name));
const redTeamMembers = members.filter((member) => member.team === TEAM.RED).sort((a, b) => a.name.localeCompare(b.name));
const greenTeamMembers = members.filter((member) => member.team === TEAM.GREEN).sort((a, b) => a.name.localeCompare(b.name));

export { members, blueTeamMembers, redTeamMembers, greenTeamMembers };
