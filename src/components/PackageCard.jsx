import { useState } from 'react'
import { Link } from 'react-router-dom'
import './PackageCard.css'

function PackageCard({ title, price, subtitle, isSignature, steps, additionalInfo }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className={`pkg-card ${isSignature ? 'pkg-card--signature' : ''}`}>
            {isSignature && <div className="pkg-card__badge">Signature</div>}
            
            <div className="pkg-card__header">
                <h3 className="pkg-card__title">{title}</h3>
                <div className="pkg-card__price">{price}</div>
                <p className="pkg-card__subtitle">{subtitle}</p>
            </div>

            <button
                className="pkg-card__toggle"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                <svg className={`pkg-card__arrow ${isExpanded ? 'pkg-card__arrow--open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </button>

            <div className={`pkg-card__details ${isExpanded ? 'pkg-card__details--open' : ''}`}>
                {steps && steps.map((phase, idx) => (
                    <div key={idx} className="pkg-card__phase">
                        <span className="pkg-card__phase-name">{phase.phaseName}</span>
                        <ul className="pkg-card__list">
                            {phase.items.map((item, itemIdx) => (
                                <li key={itemIdx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                {additionalInfo && additionalInfo.map((info, idx) => (
                    <p key={idx} className="pkg-card__info">{info}</p>
                ))}
            </div>

            <Link to="/appointment" className="pkg-card__cta">
                Request This Experience
            </Link>
        </div>
    )
}

export default PackageCard
