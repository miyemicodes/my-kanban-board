// export const DefaultData = [
//   {
//     boardID: "uuid-1",
//     boardColumnsData: [
//       {
//         columnId: "in-progress",
//         columnLabel: "In Progress",
//         columnTasks: [],
//       },
//       {
//         columnId: "in-progress",
//         columnLabel: "In Progress",
//         columnTasks: [],
//       },
//     ],
//   },
//   {
//     boardID: "uuid-2",
//     boardColumnsData: [],
//   },
// ];

export const DefaultData = [
  {
    id: "todo",
    label: "Todo",
    tasks: [
      {
        id: "kdjtghj-1",
        title: "cooking baens",
        description: "ninini is ninipoo",
        subTasks: [
          {
            id: '1',
            name: 'boil rice',
            isDone: false,
          },
          {
            id: '2',
            name: 'fry rice',
            isDone: false,
          }
        ],
      },
      {
        id: "kdjtghj-2",
        title: "cooking fish",
        description: "ninini is ninipoo",
        subTasks: []
      },
    ],
  },
  {
    id: "in-progress",
    label: "In Progress",
    tasks: [],
  },
  {
    id: "done",
    label: "Done",
    tasks: [],
  },
];
