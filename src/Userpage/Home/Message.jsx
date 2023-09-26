import React, { useState } from 'react'
import { FaRegSmile} from 'react-icons/fa'


function Message() {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hey there!", sender: "user" },
        { id: 2, text: "Hi! How are you?", sender: "friend" },
        { id: 3, text: "I'm good, thanks!", sender: "user" },
        { id: 4, text: "What's up?", sender: "user" },
        { id: 5, text: "Not much, just chilling.", sender: "friend" },
        { id: 6, text: "OK Enjoy .", sender: "user" },
        { id: 7, text: "what you are doing", sender: "friend" },
        { id: 8, text: "I was playing circket", sender: "user" },  
       { id: 9, text: "ok mm", sender: "friend" }, 
        { id: 10, text: "we will meet today", sender: "friend" },
        { id: 11, text: "ok bye..", sender: "user" },
      ]);
    
      const [newMessage, setNewMessage] = useState("");
    
      const handleSendMessage = () => {
        if (newMessage.trim() === "") return;
        const newMsg = {
          id: messages.length + 1,
          text: newMessage,
          sender: "user",
        };
        setMessages([...messages, newMsg]);
        setNewMessage("");
      };
  return (
    <div className="flex h-screen w-screen bg-gray-100">
    {/* Sidebar */}
    <div className="w-1/4 bg-gray-200 p-4 border-r border-gray-300">
      {/* Sender Profile */}
      <div className="text-center  bg-gray-400 ">
        <div className='flex gap-2 py-3'>

      <img className='w-11 h-11 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tOXr1F4ROKisn7pNSRHeF9pJ1o0dBzPnZA&usqp=CAU'></img>
        <p className="text-gray-800 font-semibold relative">vimal</p>
        <p className="text-green-600 absolute top-11 left-[480px] ">Online</p>
        </div>
        
        
     
        
      </div>
      {/* Other sidebar content can be added here */}
    </div>

    {/* Chat */}
    <div className="flex-1 p-4 ">
      <div className="bg-white shadow-lg rounded-lg h-full">
        <div className="flex px-4 py-2 border-b border-gray-300  gap-3 text-lg items-center">
            <img className='w-11 h-11 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tOXr1F4ROKisn7pNSRHeF9pJ1o0dBzPnZA&usqp=CAU'></img>
        <p className="text-gray-800 font-semibold">vimal</p>
        <p className="text-green-600">Online</p>
        </div>
        <div className="p-4 h-[780px] overflow-y-scroll">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-2 ${
                message.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block px-3 py-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
              >
                {message.text}
              </span>
            </div>
          ))}
        </div>
        <div className="px-4 py-2 border-t border-gray-300  ">
          <div className="flex items-center gap-3  ">
          <FaRegSmile></FaRegSmile>
            <input
              type="text"
              className="flex-1 py-2 px-3 rounded-full border border-gray-300 focus:outline-none "
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Message