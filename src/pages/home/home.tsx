import './home.style.scss'

export const Home: React.FC = () => {
  return(
    <div className='HomePage__container'>
      <div className='HomePage__chat-container'>
        <input className='HomePage__input' type="text" />
        <button className='HomePage__button'>Send</button>
      </div>
    </div>
  )
}