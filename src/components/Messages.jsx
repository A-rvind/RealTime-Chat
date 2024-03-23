import React, { useContext, useEffect, useState } from 'react'
import Message from './Message'
import { db } from '../firebase';
import { doc, onSnapshot } from "firebase/firestore";
import { ChatContext } from '../Context/ChatContext'

const Messages = () => {
  const [messages, setMessages]= useState([])
  const{data} = useContext(ChatContext)

  useEffect(()=>{
    const unSub = onSnapshot(doc(db, "Lchats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };


  },[data.chatId]);

  console.log(messages);
  return (
    <div className="messages">
    {messages.map((m) => (
      <Message message={m} key={m.id} />
    ))}
    </div>
  )
}

export default Messages