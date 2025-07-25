import {Link} from "react-router-dom"
import "./index.css"

const NotFound = () => {
  return (
    <>
        <div className="notfound-background">
            <div className="notfound-adjust">
                <h1 className="lost-text-heading">Lost Your Way ?</h1>
                <p className="request-description">We are sorry, the page you requested</p>
                <p className="request-description">could not be found</p>
                <p className="request-description">Please go back to the homepage</p>
                <div className="button-container">
                    <Link to="/" className="linking-underline">
                        <button className="button-go">Go to Home</button>
                    </Link>
                    
                </div>
            </div>

        </div>
    </>
  )
}

export default NotFound