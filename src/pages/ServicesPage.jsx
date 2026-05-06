import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import PackageCard from '../components/PackageCard'
import ScrollReveal from '../components/ScrollReveal'
import './ServicesPage.css'

const packages = [
    {
        title: "CEO's Luxury Pro Pack",
        price: "Rs.75,000/- + GST",
        subtitle: "25+ steps | 6 to 8 hours Craftsmanship",
        isSignature: false,
        steps: [
            { phaseName: "Phase 1 — Inspection & Preparation", items: ["Pre-detail inspection and paint condition assessment", "Surface contamination analysis", "Wheel, tire, and lower panel inspection"] },
            { phaseName: "Phase 2 — Exterior Decontamination", items: ["Controlled high-pressure rinse", "pH-neutral foam pre-wash", "Two-bucket hand wash method", "Wheel and tire deep cleaning", "Iron fallout removal (chemical decontamination)", "Tar and adhesive removal", "Clay bar treatment for bonded contaminants"] },
            { phaseName: "Phase 3 — Surface Correction", items: ["Controlled drying using microfiber and air system", "Paint thickness awareness (safe correction limits)", "Single-stage machine polishing", "Light swirl and haze removal", "Gloss enhancement pass"] },
            { phaseName: "Phase 4 — Protection & Finishing", items: ["Surface wipe-down (residue removal)", "Premium wax application (hand-applied)", "Exterior plastic trim restoration", "Tire dressing", "Glass cleaning and clarity enhancement"] },
            { phaseName: "Phase 5 — Interior Basic Refinement", items: ["Interior vacuuming", "Dashboard and trim cleaning", "Leather surface wipe-down", "Odour neutralization"] },
            { phaseName: "Phase 6 — Finalisation", items: ["Final inspection and controlled finish review"] }
        ],
        additionalInfo: ["Scope note: Precision enhancement. Controlled refinement. Approx. 6–8 hours"]
    },
    {
        title: "CEO's Ultra Luxury Pack",
        price: "Rs.1,50,000/- + GST",
        subtitle: "40+ steps | 8 to 12 hours Craftsmanship",
        isSignature: false,
        steps: [
            { phaseName: "Includes everything in CEO's Luxury Pro Pack, plus:", items: ["Multi-layer foam wash cycles", "Intensive iron and chemical decontamination", "Extended clay bar refinement", "Paint defect analysis (panel-wise)", "Dual-stage machine correction (cut + polish)", "Medium scratch and swirl reduction", "Panel-by-panel refinement passes", "High-gloss finishing pass", "Steam cleaning (interior surfaces)", "Fabric deep cleaning / extraction", "Leather conditioning treatment", "Air vent detailing", "Door jamb deep cleaning", "Engine bay safe cleaning (non-invasive)", "Sealant layer enhancement over wax base"] }
        ],
        additionalInfo: ["Scope note: Deeper correction. Stronger presence. Approx. 8–12 hours"]
    },
    {
        title: "CEO's Premium Signature Pack",
        price: "Rs.3,00,000/- + GST",
        subtitle: "Until CEO's Satisfaction — 2 days",
        isSignature: true,
        steps: [
            { phaseName: "Scope includes:", items: ["Full multi-stage correction (as required)", "Extended defect removal cycles", "Deep interior restoration", "Precision finishing and enhancement", "Premium-grade materials and compounds", "Execution continues until completion criteria is met."] }
        ],
        additionalInfo: ["This is not a fixed process. The vehicle is worked on continuously until it meets the required standard. Every surface — interior and exterior — is refined without restriction on time or number of passes."]
    },
    {
        title: "CEO's Celebrities Signature Pack",
        price: "Rs.5,00,000/- + GST",
        subtitle: "Until CEO's Satisfaction — 2 days",
        isSignature: true,
        steps: [
            { phaseName: "Scope includes:", items: ["Fully bespoke detailing approach", "Personal consultation prior to execution", "Extended multi-day refinement if required", "Highest-grade materials available", "Priority scheduling and handling", "No predefined scope. No limitation on effort."] }
        ],
        additionalInfo: ["Reserved for vehicles requiring the highest level of attention, discretion, and outcome. Suitable for Celebrities, Car collectors etc.", "Crafted without limits. 2 Days | with Museum level wax shine"]
    }
]

function ServicesPage() {
    return (
        <div className="services-page">
            <Hero
                eyebrow="Care Protocols"
                title="STRUCTURED."
                titleAccent="PURPOSE-DRIVEN."
                subtitle="Nothing is compromised. Nothing exists without reason. Each car follows a methodology built on discipline."
                short
            />

            <Section variant="darker" id="packs">
                <ScrollReveal direction="up">
                    <div className="services-header">
                        <Text variant="eyebrow">Packages</Text>
                        <Text variant="h2">Choose Your <span className="text-wine">Experience</span></Text>
                    </div>
                </ScrollReveal>

                <div className="services-list">
                    {packages.map((pkg, idx) => (
                        <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                            <PackageCard {...pkg} />
                        </ScrollReveal>
                    ))}
                </div>
            </Section>
        </div>
    )
}

export default ServicesPage
