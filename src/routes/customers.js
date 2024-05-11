import { Router } from "express";

const custRouter = Router()

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Descripción corta de la operación
 *     description: Descripción más detallada de la operación
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *       '404':
 *         description: Recurso no encontrado
 */
custRouter.get('/', (req, res) => {
    res.status(200).send('Customer results');
});

export default custRouter;