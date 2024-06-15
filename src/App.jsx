import "./App.css";
import { Navbar, Chats, Messages } from "./components";
import { useStore } from "./appStore";
import { useEffect } from "react";
import data from "./data/data";
function App() {
  const { updateUser, updateChat } = useStore();

  useEffect(() => {
    const newUser = {
      id: 1,
      name: "Asosa",
      firstName: "Junior",
      phone: "+237 6 52 57 57 57",
      avatar: "https://i.imgur.com/wfxoqxh.jpg",
    };

    const newChat = data[0] || [];
    updateChat(newChat);
    updateUser(newUser);
  }, [updateUser, updateChat]);

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="h-[95vh] w-[95vw] bg-slate-900 flex">
        <Navbar />
        <Chats />
        <Messages />
      </div>
    </main>
  );
}

export default App;
