import React, { useContext } from 'react'
import Cam from "../assets/videocam.png"
import New from "../assets/add-user.png"
import More from "../assets/dots.png"
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../Context/ChatContext'

const Chat = () => {
  const {data} = useContext(ChatContext)
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt=''/>
          <img src={New} alt=''/>
          <img src={More} alt=''/>
        </div>
      </div>
      <Messages/>
      <Input/>

    </div>
  )
}

export default Chat