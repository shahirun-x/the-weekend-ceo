import { useState } from 'react'
import Text from './Text'
import Button from './Button'
import './PackageCard.css'

function PackageCard({ title, price, subtitle, steps, additionalInfo, isSignature }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className={`package-card ${isSignature ? 'package-card--signature' : ''}`}>
            <div className="package-card__header" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="package-card__title-row">
                    <Text variant="h3" className="package-card__title">{title}</Text>
                    <Text variant="h2" className="package-card__price">{price}</Text>
                </div>
                {subtitle && <Text className="package-card__subtitle">{subtitle}</Text>}
                <button className="package-card__toggle" aria-expanded={isExpanded}>
                    {isExpanded ? 'Hide Details' : 'View Details'}
                </button>
            </div>
            
            <div className={`package-card__content ${isExpanded ? 'package-card__content--expanded' : ''}`}>
                {steps && steps.length > 0 && (
                    <div className="package-card__steps">
                        {steps.map((phase, idx) => (
                            <div key={idx} className="package-card__phase">
                                <Text variant="h4" className="package-card__phase-title">{phase.phaseName}</Text>
                                <ol className="package-card__step-list">
                                    {phase.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ol>
                            </div>
                        ))}
                    </div>
                )}
                
                {additionalInfo && (
                    <div className="package-card__info">
                        {additionalInfo.map((info, idx) => (
                            <Text key={idx} className="package-card__info-text">{info}</Text>
                        ))}
                    </div>
                )}

                <div className="package-card__cta">
                    <Button to="/appointment" variant={isSignature ? 'yellow' : 'primary'}>
                        Request a Slot
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PackageCard
