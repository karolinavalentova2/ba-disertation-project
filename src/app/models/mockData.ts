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
        subTasks: [],
        dueDate: new Date().toLocaleDateString(),
        contributors: [],
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
