/**
 * @swagger
 * tags:
 *  name: state
 *  description: state modules and routes
 */

/**
 * @swagger
 * /state/:
 *  get:
 *      tags:
 *          -   state
 *      summary: get all states
 *      description: get all states
 *      responses:
 *          default:
 *              description: successful operation
 *
 * /state/{id}:
 *  get:
 *      tags:
 *          -   state
 *      summary: update state
 *      description: update state
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: string
 *              required: true
 *      responses:
 *          default:
 *              description: successful operation
 *
 * /state/search/{query}:
 *  get:
 *      tags:
 *          -   state
 *      summary: update state
 *      description: update state
 *      parameters:
 *          -   in: path
 *              name: query
 *              type: string
 *              required: true
 *      responses:
 *          default:
 *              description: successful operation
 */
