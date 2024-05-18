/**
 * @swagger
 * tags:
 *  name: special
 *  description: specialpost modules and routes
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      SpecialOption:
 *          type: object
 *          required:
 *              -   postId
 *          properties:
 *              postId:
 *                  type: string
 */

/**
 * @swagger
 * /special/:
 *  get:
 *      tags:
 *          -   special
 *      summary: get all options
 *      description: get all options
 *      responses:
 *          default:
 *              description: successful operation
 * /special/create:
 *  post:
 *      tags:
 *          -   special
 *      summary: create new options
 *      description: create new options
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/SpecialOption'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/SpecialOption'
 *      responses:
 *          default:
 *              description: successful operation
 *
 * /special/delete/{id}:
 *  delete:
 *      tags:
 *          -   special
 *      summary: get user information
 *      description: Returns a single pet
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: string
 *              required: true
 *      responses:
 *          default:
 *              description: successful operation
 *
 *
 */
