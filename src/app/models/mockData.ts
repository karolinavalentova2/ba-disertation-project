import {BoardModel} from "./boardModel";

export const MockProjectBoard: BoardModel[] = [
  {
    id: 1,
    name: "To do",
    tasks: [
      {
        name: "test",
        createdAt: new Date().toLocaleDateString(),
        author: "Adrian",
        id: 1,
        assignedTo: "Karolina",
        description: "test test test test",
        subTasks: [
          {
            name: "test sub 1",
            createdAt: new Date().toLocaleDateString(),
            author: "Adrian",
            id: 4,
            assignedTo: "Karolina",
            description: "test test test test",
            subTasks: [],
            dueDate: new Date().toLocaleDateString(),
            contributors: [],
            comments: [],
            trackedTime: "6:00h",
          },
          {
            name: "test sub 2",
            createdAt: new Date().toLocaleDateString(),
            author: "Adrian",
            id: 5,
            assignedTo: "Karolina",
            description: "test test test test",
            subTasks: [],
            dueDate: new Date().toLocaleDateString(),
            contributors: [],
            comments: [],
            trackedTime: "6:00h"
          }
        ],
        totalTrackedSubtaskTime: "6:00h",
        dueDate: new Date().toLocaleDateString(),
        contributors: [
          {name: "Jane doe", id: 1},
          {name: "John doe", id: 2},
        ],
        comments: [],
        trackedTime: "6:00h"
      }
    ],
  },
  {
    id: 2,
    name: "Done",
    tasks: [
      {
        name: "test 2",
        createdAt: new Date().toLocaleDateString(),
        author: "Adrian",
        id: 2,
        assignedTo: "Karolina",
        description: "test test test test",
        subTasks: [],
        totalTrackedSubtaskTime: "6:00h",
        dueDate: new Date().toLocaleDateString(),
        contributors: [],
        comments: [],
        trackedTime: "6:00h"
      }
    ],
  },
  {
    id: 3,
    name: "Review",
    tasks: [

    ],
  }
]
