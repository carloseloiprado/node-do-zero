import sql from './db.js'

sql`CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    duration INTEGER NOT NULL CHECK (duration > 0)
);`
    .then(() => {
        console.log('Tabela Criada...')
    })