/**
 * @swagger
 * tags:
 *  name: image
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      UploadImage:
 *          type: object
 *          required:
 *              -   file
 *          properties:
 *              file:
 *                  type: file
 */

/**
 * @swagger
 * /image/upload/:
 *  post:
 *      tags:
 *          -   image
 *      summary: get all options
 *      description: get all options
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/UploadImage'
 *      responses:
 *          default:
 *              description: successful operation
 *
 *
 * /image/delete/{id}:
 *  delete:
 *      tags:
 *          -   image
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
 */
