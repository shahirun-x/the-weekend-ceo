import { Link } from 'react-router-dom'
import './NotFoundPage.css'

function NotFoundPage() {
    return (
        <div className="not-found-page">
            <div className="not-found__ambient not-found__ambient--wine"></div>
            <div className="not-found__ambient not-found__ambient--blue"></div>
            
            <div className="not-found__content">
                <span className="not-found__code">404</span>
                <h1 className="not-found__title">Wrong Turn.</h1>
                <p className="not-found__text">
                    This road doesn't lead anywhere. Let's get you back to the garage.
                </p>
                <Link to="/" className="not-found__cta">
                    <span>Return Home</span>
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage
