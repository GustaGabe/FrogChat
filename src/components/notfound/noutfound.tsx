import "./notfound.style.scss"


export const NotFound = () => {
    return (
        <div className="NotFound__container">
           <span className="NotFound__error">404</span>
           <span className="NotFound__message">
            Page Not Found
            </span>
        </div>
    )
}