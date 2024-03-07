import { db } from './db.js'

db`
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
):
` .then(() => {
    console.log('tabela criada!')
})
