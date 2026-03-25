// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     console.log('oi')
//     response.write('NodeJs do zero alterado run dev!')

//     return response.end()
// })

// server.listen(3333)
import { fastify } from 'fastify'
//import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js'

//const database = new DatabaseMemory()
const database = new DatabasePostgres

const server = fastify()

server.post('/videos', async (request, replay) => {
    const { title, description, duration } = request.body

    await database.create({
        title,
        description,
        duration
    })

    return replay.status(201).send()
})

server.get('/videos', async (request, replay) => {

    const search = request.query.search

    const videos = await database.list(search)

    return videos
})

server.put('/videos/:id', async (request, replay) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body

    await database.update(videoId, {
        title,
        description,
        duration
    })

    return replay.status(204).send()

})

server.delete('/videos/:id', async (request, replay) => {
    const videoId = request.params.id
    await database.delete(videoId)

    return replay.status(204).send()
})

server.listen(
    {
        host: '0.0.0.0',
        port: process.env.PORT ?? 3333,

    }
)