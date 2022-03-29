const kanbanData = {
  coords: {
    'coord-1': {
      id: 'coord-1',
      content: 'GDNSW Annual Report',
      people: ['Sergio', 'Nina', 'Sam'],
    },
    'coord-2': {
      id: 'coord-2',
      content: 'GD National SEM',
      people: ['Mike', 'Dan'],
    },
    'coord-3': {
      id: 'coord-3',
      content: 'CatchUp Private Groups',
      people: ['Bridget', 'Maikel', 'Vince'],
    },
    'coord-4': {
      id: 'coord-4',
      content: 'EE ANZ WIP',
      people: ['Sam', 'Tim C', 'Elliott'],
    },
    'coord-5': {
      id: 'coord-5',
      content: 'LinkedIn contact stuff',
      people: ['Isabella', 'Zoe'],
    },
    'coord-6': {
      id: 'coord-6',
      content: 'AA Bulk post status update',
      people: ['Seb', 'Sergio'],
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Backlog',
      coordIds: [
        'coord-1',
        'coord-2',
        'coord-3',
        'coord-4',
        'coord-5',
        'coord-6',
      ],
    },
    'column-2': {
      id: 'column-2',
      title: 'Doing',
      coordIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      coordIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default kanbanData;
