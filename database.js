const {createClient} = require('@supabase/supabase-js')

// Creating a client to access the database
const supabase = createClient('https://pvutiassobejsnrksqoe.supabase.co',
                              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2dXRpYXNzb2JlanNucmtzcW9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4MDM4ODYsImV4cCI6MTk3NzM3OTg4Nn0.OIOHRogFevzChcvKN2i5l0nz4_drJ4wfbhmWh6gD7no')

async function fetchData(table){
    try {
        const {data, error } = await supabase.from(table).select()
        console.log(data)
    } catch (error){
        console.log(error)
    }
}