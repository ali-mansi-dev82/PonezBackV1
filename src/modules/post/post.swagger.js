/**
 * @swagger
 * tags:
 *  name: post
 *  description: user modules and routes
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      Category: 
 *          type: object
 *          required:
 *              -   name
 *              -   slug
 *          properties: 
 *              name: 
 *                  type: string
 *              slug: 
 *                  type: string
 *              icon: 
 *                  type: string
 *              parent: 
 *                  type: integer
 * 
 */



/**
 * @swagger
 * /post/:
 *  post:
 *      tags:
 *          -   post
 *      summary: create category
 *      description: create category
 *      responses: 
 *          default: 
 *              description: successful operation
 * /post/{slug}:
 *  get:
 *      tags:
 *          -   post
 *      summary: create category
 *      description: create category
 *      parameters: 
 *          -   in: path 
 *              name: slug 
 *              type: string 
 *              required: true
 *      responses: 
 *          default: 
 *              description: successful operation
 * 
 * /post/create/:
 *  post:
 *      tags:
 *          -   post
 *      summary: create category
 *      description: create category
 *      requestBody: 
 *          content: 
 *              application/x-www-form-urlencoded:
 *                  schema: 
 *                      $ref: '#/components/schemas/Category'
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/Category'
 *      responses: 
 *          default: 
 *              description: successful operation
 * 
 * /post/update/{id}:
 *  put:
 *      tags:
 *          -   post
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
 *                      $ref: '#/components/schemas/Category'
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/Category'
 *      responses: 
 *          default: 
 *              description: successful operation
 *  
 * /post/{id}:
 *  delete:
 *      tags:
 *          -   post
 *      parameters: 
 *          -   in: path 
 *              name: id 
 *              type: string 
 *              required: true
 *      summary: delete category
 *      description: delete category
 *      responses: 
 *          default: 
 *              description: successful operation
 */

