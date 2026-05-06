import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envPath = path.join(__dirname, '.env')
let envVars = {}

if (fs.existsSync(envPath)) {
    const envFile = fs.readFileSync(envPath, 'utf8')
    envFile.split(/\r?\n/).forEach(line => {
        const match = line.match(/^([^=]+)=(.*)$/)
        if (match) {
            envVars[match[1].trim()] = match[2].trim().replace(/^['"]|['"]$/g, '')
        }
    })
}

const supabaseUrl = envVars.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL
const supabaseKey = envVars.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

const seedStories = async () => {
    console.log('Seeding stories...')

    const storiesToInsert = [
        {
            story_number: 1,
            year: 2026,
            car_make_model: "Mercedes-Benz S-Class",
            car_colour: "Obsidian Black",
            city: "Chennai",
            pack: "CEO's Ultra Luxury Pack",
            month: "January",
            narrative: "This Mercedes-Benz S-Class arrived demanding nothing less than absolute perfection. Known as the pinnacle of executive luxury, its Obsidian Black paint was unfortunately marred by improper washing techniques prior to our engagement.\n\nOver the course of three days, we executed a multi-stage refinement process. The CEO's Ultra Luxury Pack ensured every inch of this long-wheelbase flagship was restored to better-than-factory standards, concluding with a specialized glaze to deepen the black finish.",
            after_photos: [],
            is_published: true
        },
        {
            story_number: 2,
            year: 2026,
            car_make_model: "Porsche 911",
            car_colour: "Arctic Silver",
            city: "Bangalore",
            pack: "CEO's Luxury Pro Pack",
            month: "February",
            narrative: "The Porsche 911 is an icon that requires a delicate, disciplined approach. The Arctic Silver metallic flake needed to be fully activated without compromising the clear coat integrity.\n\nOur Luxury Pro Pack was deployed. We focused heavily on the intricate curves of the rear haunches and the aggressive front fascia, carefully polishing the surface until the silver possessed a liquid-like quality. The vehicle left our care ready to dominate both the aesthetic standard and the road.",
            after_photos: [],
            is_published: true
        }
    ]

    try {
        const { error } = await supabase.from('stories').insert(storiesToInsert)
        if (error) {
            if (error.code === '23505') {
                console.log('Seed stories already exist in the database.')
            } else {
                throw error
            }
        } else {
            console.log('✅ Successfully seeded 2 placeholder stories.')
        }
    } catch (err) {
        console.error('❌ Error seeding stories:', err)
    }
}

seedStories()
