import { useState } from 'react'
import './login.style.scss'

export const LoginPage: React.FC = () => {
    const [user, setUser] = useState<boolean>(false)

    return(
        <div className='LoginPage__container'>
           {user ? (
             <div  className='LoginPage__user'>
                <span>Digite seu nome de Usuário</span>
                <input className='LoginPage__input' type="text" />
             </div>
           ) : (
            <button onClick={() => setUser(true)} className='LoginPage__button'>Login</button>
           )}
        </div>
    )
}