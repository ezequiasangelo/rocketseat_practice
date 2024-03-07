import { sql } from './db.js'

sql`
CREATE TABLE videos(
    title       TEXTE,
    description TEXTE,
    duracion    INTEGER 
):
` .then(() => {
    console.log('tabela criada!')
})