import { sql } from './db.js';

sql`
    CREATE TABLE VideosFoi (
        title TEXT,
        description TEXT NOT NULL,
        duracion TEXT NOT NULL UNIQUE
    );
`.then(() => {
    console.log('Tabela criada!');
}).catch(err => {
    console.error('Erro ao criar tabela:', err);
});
