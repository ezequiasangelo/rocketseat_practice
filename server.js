import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

//POST http://localhost:3333/videos
//PUT http://localhost:3333/videos/3

//Route Parameter
const database = new DatabaseMemory()

//requet Body

server.post('/videos', (request, reply) => {
    const {title, description, duracion} = request.body


    database.create({
        title,
        description,
        duracion,
    })


    return reply.status(201).send()
} )

server.get('/videos', () => {
    const videos = database.list()

    
    return videos
} )

server.put('/videos/:id', () => {
    return 'Tudo node.js'
} )

server.delete('/videos/:id', () => {
    return 'Hello node.js?'
} )

server.listen({
    port: 3333,
})