/**
 * @swagger
 * tags:
 *  name: note
 *  description: user modules and routes
 */


/**
 * @swagger
 * components:
 *  schemas:
 *      Note:
 *          type: object
 *          required:
 *              -   content
 *          properties:
 *              content:
 *                  type: string
 */


/**
 * @swagger
 * /note/{id}:
 *  get:
 *      tags:
 *          -   note
 *      summary: create category
 *      description: create category
 *      parameters: 
 *          -   in: path 
 *              name: id 
 *              type: string 
 *              required: true
 *      responses: 
 *          default: 
 *              description: successful operation
 * 
 * /note/save/{id}:
 *  post:
 *      tags:
 *          -   note
 *      summary: create category
 *      description: create category
 *      parameters: 
 *          -   in: path 
 *              name: id 
 *              type: string 
 *              required: true
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/Note'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Note'
 *      responses: 
 *          default: 
 *              description: successful operation
 * 
 */

