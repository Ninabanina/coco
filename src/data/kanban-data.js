export const COLUMN = {
  BACKLOG: 'Backlog',
  DOING: 'Doing',
  COMPLETE: 'Complete',
}

const kanbanData = {
  filter: '',
  coords: [
    {
      id: 'coord-1',
      content: 'GDNSW Annual Report',
      people: ['Sergio', 'Nina', 'Sam'],
      column: COLUMN.BACKLOG,
    },
    {
      id: 'coord-2',
      content: 'GD National SEM',
      people: ['Mike', 'Dan'],
      column: COLUMN.BACKLOG,
    },
    {
      id: 'coord-3',
      content: 'CatchUp Private Groups',
      people: ['Bridget', 'Maikel', 'Vince'],
      column: COLUMN.BACKLOG,
    },
    {
      id: 'coord-4',
      content: 'EE ANZ WIP',
      people: ['Sam', 'Tim C', 'Elliott'],
      column: COLUMN.BACKLOG,
    },
    {
      id: 'coord-5',
      content: 'LinkedIn contact stuff',
      people: ['Isabella', 'Zoe'],
      column: COLUMN.BACKLOG,
    },
    {
      id: 'coord-6',
      content: 'AA Bulk post status update',
      people: ['Seb', 'Sergio'],
      column: COLUMN.BACKLOG,
    },
    {
      id: 'coord-7',
      content: 'reCaptcha question (VSBC)',
      people: ['James', 'Rache', 'Sergio'],
      column: COLUMN.BACKLOG,
    },
    {
      id: 'coord-8',
      content: 'Content process question',
      people: ['Isabella', 'Elliott'],
      column: COLUMN.BACKLOG,
    },
  ],
};

export default kanbanData;
