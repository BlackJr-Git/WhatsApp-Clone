import { create } from "zustand";

export const useStore = create((set) => ({
  currentUser: {
    id: 1,
    name: "",
    firstName: "",
    phone: "",
    avatar: "",
  },
  updateUser(newUser) {
    set({ currentUser: newUser });
  },

  currentChat: {
    id: 1,
    userName: "Junior Asosa",
    phone: "+237 6 52 57 57 57",
    avatar: "https://i.imgur.com/wfxoqxh.jpg",
    messages: [
      {
        id: 1,
        text: "Hello",
        userAvatar: "https://i.imgur.com/wfxoqxh.jpg",
        createdAt: "10:00",
        userId: 1,
      },
      {
        id: 2,
        text: "What's up?",
        userAvatar: "https://i.imgur.com/wfxoqxh.jpg",
        createdAt: "10:01",
        userId: 2,
      },
      {
        id: 3,
        text: "Lets do it today",
        userId: 1,
        createdAt: "10:02",
        userAvatar: "https://i.imgur.com/wfxoqxh.jpg",
      },
      {
        id: 4,
        text: "Okey ! Comming",
        userId: 2,
        createdAt: "10:03",
        userAvatar: "https://i.imgur.com/wfxoqxh.jpg",
      },
      {
        id: 5,
        text: "I am also fine. I am learning React",
        userId: 1,
        createdAt: "10:04",
        userAvatar: "https://i.imgur.com/wfxoqxh.jpg",
      },
      {
        id: 6,
        text: "I am also fine. I am learning React",
        userId: 2,
        createdAt: "10:05",
        userAvatar: "https://i.imgur.com/wfxoqxh.jpg",
      },
      {
        id: 7,
        text: "I am also fine. I am learning React",
        userId: 1,
        createdAt: "10:06",
        userAvatar: "https://i.imgur.com/wfxoqxh.jpg",
      },
      {
        id: 8,
        text: "I am also fine. I am learning React",
        userId: 2,
        createdAt: "10:07",
        userAvatar: "https://i.imgur.com/wfxoqxh.jpg",
      },
      {
        id: 9,
        text: "I am also fine. I am learning React",
        userId: 1,
        createdAt: "10:08",
        userAvatar: "https://i.imgur.com/wfxoqxh.jpg",
      },
    ],
  },
  updateChat(newChat) {
    set({ currentChat: newChat });
  },
}));
