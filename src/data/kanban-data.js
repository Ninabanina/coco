const kanbanData = {
  coords: {
    'coord-1': { id: 'coord-1', content: 'coord content 1' },
    'coord-2': { id: 'coord-2', content: 'coord content 2' },
    'coord-3': { id: 'coord-3', content: 'coord content 3' },
    'coord-4': { id: 'coord-4', content: 'coord content 4' },
    'coord-5': { id: 'coord-5', content: 'coord content 5' },
    'coord-6': { id: 'coord-6', content: 'coord content 6' },
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
