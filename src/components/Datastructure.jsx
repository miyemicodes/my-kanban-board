import React from "react";

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
        id: "kdj",
        title: "cooking baens",
        description: "ninini is ninipoo",
        subtasks: ["boil orange"],
      },
      {
        id: "kdjtghj",
        title: "cooking fish",
        description: "ninini is ninipoo",
        subtasks: ["boil orange", "put salt on fire"],
      },
    ],
  },
  {
    id: "in-progress",
    label: "In Progress",
    tasks: [],
  },
];
