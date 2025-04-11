import { useEffect, useState } from 'react'
import './home.style.scss'
import { io } from 'socket.io-client'
import { useNavigate } from 'react-router'


const socket = io('http://localhost:3000')

export const Home: React.FC = () => {
  const [ message, setMessage ] = useState<string>('')
  const [ chat, setChat ] = useState<string[]>([])
  const navigate = useNavigate()
  const storedUser = window.localStorage.getItem('user');
  useEffect(() => {
    socket.on('chat message', (msg) => {
      setChat((prev: any) => [...prev, msg]);
    })
    if (!storedUser) {
      navigate('/login');
    }

    return () => {
      socket.off('chat message');
    };
  }, [storedUser]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    socket.emit('chat message', {
      username: storedUser,
      message: message
    })
    setMessage('');
    
  }

  return(
    <div className='HomePage__container'>
      <ul className={`HomePage__messages`}>
        {chat.map((msg, index) => (
          <li key={index} className={`HomePage__message ${msg.username === storedUser ? 'HomePage__message--right' : 'HomePage__message--left'}`}>
            {`${msg.username}: ${msg.message}`}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className='HomePage__chat-container'>
        <input value={message} onChange={(e) => setMessage(e.target.value)} className='HomePage__input' type="text" />
        <button type='submit' className='HomePage__button'>Send</button>
      </form>
    </div>
  )
}