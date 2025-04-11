import { useEffect, useState } from 'react'
import './login.style.scss'
import { useNavigate } from 'react-router'

export const LoginPage: React.FC = () => {
    const [hasUser, setHasUser] = useState<boolean>(false)
    const [user, setUser] = useState<string>('')
    const navigate = useNavigate()
    const storedUser = window.localStorage.getItem('user')

    const handleSubmit = (e: any) => {
      e.preventDefault()
      setUser('')
      window.localStorage.setItem('user', user)
    }

    useEffect(() => {
      if (storedUser) {
        navigate('/')
      }
    }, [storedUser])

    return(
        <div className='LoginPage__container'>
           {hasUser ? (
             <div  className='LoginPage__user'>
                <span>Digite seu nome de Usuário</span>
                <form onSubmit={handleSubmit}>
                  <input value={user} onChange={(e) => setUser(e.target.value)} className='LoginPage__input' type="text" />
                </form>
             </div>
           ) : (
            <button onClick={() => setHasUser(true)} className='LoginPage__button'>Login</button>
           )}
        </div>
    )
}