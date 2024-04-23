/**
 * @swagger
 * tags:
 *  name: category
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
 */

/**
 * @swagger
 * /category/:
 *  get:
 *      tags:
 *          -   category
 *      summary: create category
 *      description: create category
 *      responses:
 *          default:
 *              description: successful operation
 *
 * /category/create/:
 *  post:
 *      tags:
 *          -   category
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
 * /category/update/{id}:
 *  put:
 *      tags:
 *          -   category
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
 * /category/{id}:
 *  delete:
 *      tags:
 *          -   category
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
 *
 * /category/get-children-by-slug/{parent-slug}:
 *  get:
 *      tags:
 *          -   category
 *      parameters:
 *          -   in: path
 *              name: parent-slug
 *              type: string
 *      summary: get children by parent slug
 *      description: get children by parent slug
 *      responses:
 *          default:
 *              description: successful operation
 *
 * /category/get-by-slug/{slug}:
 *  get:
 *      tags:
 *          -   category
 *      parameters:
 *          -   in: path
 *              name: slug
 *              type: string
 *      summary: get category by slug
 *      description: get category by slug
 *      responses:
 *          default:
 *              description: successful operation
 *
 * /category/search/{q}:
 *  get:
 *      tags:
 *          -   category
 *      parameters:
 *          -   in: path
 *              name: q
 *              type: string
 *              required: true
 *      summary: search category
 *      description: search category
 *      responses:
 *          default:
 *              description: successful operation
 */
