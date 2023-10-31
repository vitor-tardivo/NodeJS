import { Request, Response, Router } from 'express'

//Inicializa uma nova instância para rotas padrões
const defaultRoutes = Router()

//Inicializa uma nova instância para rotas e alunos
//Seu código aqui ... 


//Inicializa uma nova instância para rotas de chamadas
//Seu código aqui ...


//------ ROTAS PADRÕES -------------
defaultRoutes.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript' })
})


//------ ROTAS DE ALUNOS -----------
//Seu código aqui ...


//------ ROTAS DE CHAMADAS ---------
//Seu código aqui ...


//Exporta as rotas criadas
export { defaultRoutes }
