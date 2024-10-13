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
                valor_dolar: data.DOLAR_VALUE,
                valor_euro: data.EURO_VALUE,
                valor_pesos: data.PESOS_VALUE,
                valor: data.VALUE,
                data_registro: data.DATE_REGISTER,
                data_apuracao: data.DATE_APURATION
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
               valor_dolar: cotation.DOLAR_VALUE,
               valor_euro: cotation.EURO_VALUE,
               valor_pesos: cotation.PESOS_VALUE,
               valor: cotation.VALUE,
               data_registro: cotation.DATE_REGISTER,
               data_apuracao: cotation.DATE_APURATION
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
            DOLAR_VALUE: cotationFormatted.valor_dolar,
            EURO_VALUE: cotationFormatted.valor_euro,
            PESOS_VALUE: cotationFormatted.valor_pesos,
            VALUE: cotationFormatted.valor,
            DATE_APURATION: cotationFormatted.data_apuracao
        }
    }).then(() => {
        response.send('Cotação criada com sucesso!').status(200)
    }).catch(() => {
        response.send('Erro ao criar cotação').status(404)
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