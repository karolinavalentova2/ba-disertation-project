import {BoardModel} from "./boardModel";
import {InboxItemModel} from "./inboxItemModel";
import {UserModel} from "./userModel";

export const MockProjectBoard: BoardModel[] = [
  {
    id: 1,
    name: "To do",
    tasks: [
      {
        name: "test",
        createdAt: new Date().toLocaleDateString(),
        author: {
          id: 1,
          name: 'Karolina',
          email: 'test@test.com',
          password: '1234',
          verificationCode: 'string',
          imagePath: './assets/profile_1.png',
          created: new Date().toLocaleDateString(),
          active: true,
        },
        id: 1,
        assignedTo: {
          id: 1,
          name: 'Karolina',
          email: 'test@test.com',
          password: '1234',
          verificationCode: 'string',
          imagePath: './assets/profile_1.png',
          created: new Date().toLocaleDateString(),
          active: true,
        },
        description: "test test test test",
        subTasks: [
          {
            name: "test sub 1",
            createdAt: new Date().toLocaleDateString(),
            author: {
              id: 1,
              name: 'Karolina',
              email: 'test@test.com',
              password: '1234',
              verificationCode: 'string',
              imagePath: './assets/profile_1.png',
              created: new Date().toLocaleDateString(),
              active: true,
            },
            id: 4,
            assignedTo: {
              id: 1,
              name: 'Karolina',
              email: 'test@test.com',
              password: '1234',
              verificationCode: 'string',
              imagePath: './assets/profile_1.png',
              created: new Date().toLocaleDateString(),
              active: true,
            },
            description: "test test test test",
            subTasks: [],
            dueDate: new Date().toLocaleDateString(),
            contributors: [],
            comments: [],
            trackedTime: 30,
            completed: true,
            active: true,
            modified: new Date().toLocaleDateString(),
            columnIndex: 1,
          },
          {
            name: "test sub 2",
            createdAt: new Date().toLocaleDateString(),
            author: {
              id: 1,
              name: 'Karolina',
              email: 'test@test.com',
              password: '1234',
              verificationCode: 'string',
              imagePath: './assets/profile_1.png',
              created: new Date().toLocaleDateString(),
              active: true,
            },
            id: 5,
            assignedTo: {
              id: 1,
              name: 'Karolina',
              email: 'test@test.com',
              password: '1234',
              verificationCode: 'string',
              imagePath: './assets/profile_1.png',
              created: new Date().toLocaleDateString(),
              active: true,
            },
            description: "test test test test",
            subTasks: [],
            dueDate: new Date().toLocaleDateString(),
            contributors: [],
            comments: [],
            trackedTime: 30,
            completed: false,
            active: true,
            modified: new Date().toLocaleDateString(),
            columnIndex: 2,
          },
          {
            name: "test sub 2",
            createdAt: new Date().toLocaleDateString(),
            author: {
              id: 1,
              name: 'Karolina',
              email: 'test@test.com',
              password: '1234',
              verificationCode: 'string',
              imagePath: './assets/profile_1.png',
              created: new Date().toLocaleDateString(),
              active: true,
            },
            id: 5,
            assignedTo: {
              id: 1,
              name: 'Karolina',
              email: 'test@test.com',
              password: '1234',
              verificationCode: 'string',
              imagePath: './assets/profile_1.png',
              created: new Date().toLocaleDateString(),
              active: true,
            },
            description: "test test test test",
            subTasks: [],
            dueDate: new Date().toLocaleDateString(),
            contributors: [],
            comments: [],
            trackedTime: 0,
            completed: false,
            active: true,
            modified: new Date().toLocaleDateString(),
            columnIndex: 2,
          }
        ],
        totalTrackedSubtaskTime: 60,
        dueDate: new Date().toLocaleDateString(),
        contributors: [
          {name: "Jane doe", id: 1, imagePath: './assets/profile_1.png'},
          {name: "John doe", id: 2, imagePath: './assets/default_profile.png'},
        ],
        comments: [
          {
            id: 1,
            author: {
              id: 1,
              name: 'Karolina',
              email: 'test@test.com',
              password: '1234',
              verificationCode: 'string',
              imagePath: './assets/profile_1.png',
              created: new Date().toLocaleDateString(),
              active: true,
            },
            created: new Date().toLocaleDateString(),
            description: "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.",
          },
          {
            id: 1,
            author: {
              id: 1,
              name: 'Karolina',
              email: 'test@test.com',
              password: '1234',
              verificationCode: 'string',
              imagePath: './assets/profile_1.png',
              created: new Date().toLocaleDateString(),
              active: true,
            },
            created: new Date().toLocaleDateString(),
            description: "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.",
          },
        ],
        trackedTime: 60,
        completed: false,
        active: true,
        modified: new Date().toLocaleDateString(),
        columnIndex: 1,
      }
    ],
    project: 'project 1',
    author: {
      id: 1,
      name: 'Karolina',
      email: 'test@test.com',
      password: '1234',
      verificationCode: 'string',
      imagePath: './assets/profile_1.png',
      created: new Date().toLocaleDateString(),
      active: true,
    },
    created: new Date().toLocaleDateString(),
    active: true,
    boardIndex: 1,
  },
  {
    id: 2,
    name: "Done",
    tasks: [
      {
        name: "test 2",
        createdAt: new Date().toLocaleDateString(),
        author: {
          id: 1,
          name: 'Karolina',
          email: 'test@test.com',
          password: '1234',
          verificationCode: 'string',
          imagePath: './assets/profile_1.png',
          created: new Date().toLocaleDateString(),
          active: true,
        },
        id: 2,
        assignedTo: {
          id: 1,
          name: 'Karolina',
          email: 'test@test.com',
          password: '1234',
          verificationCode: 'string',
          imagePath: './assets/profile_1.png',
          created: new Date().toLocaleDateString(),
          active: true,
        },
        description: "test test test test",
        subTasks: [],
        totalTrackedSubtaskTime: 0,
        dueDate: new Date().toLocaleDateString(),
        contributors: [],
        comments: [],
        trackedTime: 30,
        completed: false,
        active: true,
        modified: new Date().toLocaleDateString(),
        columnIndex: 1,
      },
      {
        name: "test 3",
        createdAt: new Date().toLocaleDateString(),
        author: {
          id: 1,
          name: 'Karolina',
          email: 'test@test.com',
          password: '1234',
          verificationCode: 'string',
          imagePath: './assets/profile_1.png',
          created: new Date().toLocaleDateString(),
          active: true,
        },
        id: 3,
        assignedTo: null,
        description: "",
        subTasks: [],
        totalTrackedSubtaskTime: 0,
        dueDate: null,
        contributors: [],
        comments: [],
        trackedTime: 0,
        completed: true,
        active: true,
        modified: new Date().toLocaleDateString(),
        columnIndex: 2,
      }
    ],
    project: 'project 1',
    author: {
      id: 1,
      name: 'Karolina',
      email: 'test@test.com',
      password: '1234',
      verificationCode: 'string',
      imagePath: './assets/profile_1.png',
      created: new Date().toLocaleDateString(),
      active: true,
    },
    created: new Date().toLocaleDateString(),
    active: true,
    boardIndex: 2,
  },
  {
    id: 3,
    name: "Review",
    tasks: [],
    project: 'project 1',
    author: {
      id: 1,
      name: 'Karolina',
      email: 'test@test.com',
      password: '1234',
      verificationCode: 'string',
      imagePath: './assets/profile_1.png',
      created: new Date().toLocaleDateString(),
      active: true,
    },
    created: new Date().toLocaleDateString(),
    active: true,
    boardIndex: 3,
  }
]

export const MockInboxItem: InboxItemModel[] = [
  {
    id: 1,
    author: {
      id: 1,
      name: 'Karolina',
      email: 'test@test.com',
      password: '1234',
      verificationCode: 'string',
      imagePath: './assets/profile_1.png',
      created: new Date().toLocaleDateString(),
      active: true,
    },
    type: 'commented',
    task: 'Peanut is broken',
    project: 'Karolina',
    team: 'Iglass',
    isRead: false,
    created: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    author: {
      id: 1,
      name: 'Karolina',
      email: 'test@test.com',
      password: '1234',
      verificationCode: 'string',
      imagePath: './assets/profile_1.png',
      created: new Date().toLocaleDateString(),
      active: true,
    },
    type: 'completed',
    task: 'Peanut is broken',
    project: 'Karolina',
    team: 'Iglass',
    isRead: true,
    created: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    author: {
      id: 1,
      name: 'Karolina',
      email: 'test@test.com',
      password: '1234',
      verificationCode: 'string',
      imagePath: './assets/profile_1.png',
      created: new Date().toLocaleDateString(),
      active: true,
    },
    type: 'completed',
    task: 'Peanut is broken',
    project: 'Karolina',
    team: 'Iglass',
    isRead: true,
    created: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    author: {
      id: 1,
      name: 'Karolina',
      email: 'test@test.com',
      password: '1234',
      verificationCode: 'string',
      imagePath: './assets/profile_1.png',
      created: new Date().toLocaleDateString(),
      active: true,
    },
    type: 'assigned',
    task: 'Peanut is broken',
    project: 'Karolina',
    team: 'Iglass',
    isRead: true,
    created: "12/29/2021",
  },
  {
    id: 4,
    author: {
      id: 1,
      name: 'Karolina',
      email: 'test@test.com',
      password: '1234',
      verificationCode: 'string',
      imagePath: './assets/profile_1.png',
      created: new Date().toLocaleDateString(),
      active: true,
    },
    type: 'deleted',
    task: 'Peanut is broken',
    project: 'Karolina',
    team: 'Iglass',
    isRead: true,
    created: "12/30/2021",
  },
  {
    id: 5,
    author: {
      id: 1,
      name: 'Karolina',
      email: 'test@test.com',
      password: '1234',
      verificationCode: 'string',
      imagePath: './assets/profile_1.png',
      created: new Date().toLocaleDateString(),
      active: true,
    },
    type: 'completed',
    task: 'Peanut is broken',
    project: 'Karolina',
    team: 'Iglass',
    isRead: true,
    created: new Date().toLocaleDateString(),
  },
]

export const MockUserModel: UserModel = {
    id: 1,
    name: 'Karolina',
    email: 'test@test.com',
    password: '1234',
    verificationCode: 'string',
    imagePath: './assets/profile_1.png',
    created: new Date().toLocaleDateString(),
    active: true,
}
