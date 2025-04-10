import { useEffect, useState } from 'react'
import './home.style.scss'
import { io } from 'socket.io-client'


const socket = io('http://localhost:3000')

export const Home: React.FC = () => {
  const [ message, setMessage ] = useState<string>('')
  const [ chat, setChat ] = useState([])


  useEffect(() => {
    socket.on('chat message', (msg) => {
      setChat((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('chat message', message);
    setMessage('');
  }

  
  
  return(
    <div className='HomePage__container'>
      <ul>
        {chat.map((msg, index) => (
          <li key={index} className='HomePage__message'>{msg}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className='HomePage__chat-container'>
        <input value={message} onChange={(e) => setMessage(e.target.value)} className='HomePage__input' type="text" />
        <button type='submit' className='HomePage__button'>Send</button>
      </form>
    </div>
  )
}