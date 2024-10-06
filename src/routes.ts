import { Request, Response, Router } from 'express'
import { prisma } from './prisma-client/prisma-client'
import { Cotacao } from './entities/cotacao'

const routes = Router()

routes.get('/cotacoes/:id', async (request: Request, response: Response) => {
    const id = parseInt(request.params.id)
    await prisma.cotacao.findUnique({
        where: {
            ID: id
        }
    }).then((data) => {
        if (data !== null) {
            const cotationsFormatted: Cotacao = {
                id: data.ID,
                tipo_moeda: data.COIN_TYPE,
                valor: data.VALUE,
                data_registro: data.DATE_REGISTER
            }

            response.json(cotationsFormatted)
        }
    }).catch(() => {
        response.send('Cotação indisponível!').status(404)
    })   
})

routes.get('/cotacoes', async (request: Request, response: Response) => {
        await prisma.cotacao.findMany().then((data) => {
        const cotationsFormatted = data.map((cotation) => {
            const formatted: Cotacao = {
               id: cotation.ID,
               tipo_moeda: cotation.COIN_TYPE,
               valor: cotation.VALUE,
               data_registro: cotation.DATE_REGISTER
            }
    
            return formatted
        })

        response.json(cotationsFormatted).status(200)
    }).catch(() => {
        response.send('Erro ao deletar cotação').status(404)
    })
})

routes.post('/cotacoes', async (request: Request, response: Response) => {
    const cotationFormatted: Cotacao = request.body

    await prisma.cotacao.create({
        data: {
            COIN_TYPE: cotationFormatted.tipo_moeda,
            VALUE: cotationFormatted.valor
        }
    }).then(() => {
        response.send('Cotação criada com sucesso!').status(200)
    }).catch(() => {
        response.send('Erro ao deletar cotação').status(404)
    })
})

routes.delete('/cotacoes/:id', async (request: Request, response: Response) => {
    const id = parseInt(request.params.id)
    await prisma.cotacao.delete({
        where: {
            ID: id
        }
    }).then(() => {
        response.send('Cotação deletada com sucesso!').status(200)
    }).catch(() => {
        response.send('Erro ao deletar cotação').status(404)
    })
})

export default routes