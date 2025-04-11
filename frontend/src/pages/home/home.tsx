import { useEffect, useState } from 'react'
import './home.style.scss'
import { io } from 'socket.io-client'
import { useNavigate } from 'react-router'


const socket = io('http://localhost:3000')

export const Home: React.FC = () => {
  const [ message, setMessage ] = useState<string>('')
  const [ chat, setChat ] = useState<string[]>([])
  const [user, setUser] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setChat((prev: any) => [...prev, msg]);
    })
    const storedUser = window.localStorage.getItem('user');

    if (!storedUser) {
      navigate('/login');
    }

    setUser(storedUser || '')
  
    return () => {
      socket.off('chat message');
    };
  }, [user]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    socket.emit('chat message', message);
    setMessage('');
  }

  return(
    <div className='HomePage__container'>
      <ul className='HomePage__messages'>
        {chat.map((msg, index) => (
          <li key={index} className='HomePage__message'>
            {`${user}: ${msg}`}
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