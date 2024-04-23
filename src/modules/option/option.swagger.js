/**
 * @swagger
 * tags:
 *  name: option
 *  description: option modules and routes
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      SendOption:
 *          type: object
 *          required:
 *              -   title
 *              -   key
 *              -   type
 *              -   category
 *          properties:
 *              title:
 *                  type: string
 *              key:
 *                  type: string
 *              category:
 *                  type: string
 *              guid:
 *                  type: string
 *              prefix:
 *                  type: string
 *              required:
 *                  type: boolean
 *              type:
 *                  type: string
 *                  enum:
 *                      -   currency
 *                      -   number
 *                      -   string
 *                      -   array
 *                      -   boolean
 *              enum:
 *                  type: array
 *                  items:
 *                      -   number
 *                      -   string
 *                      -   array
 *                      -   boolean
 *      UpdateOption:
 *          type: object
 *          properties:
 *              title:
 *                  type: string
 *              key:
 *                  type: string
 *              category:
 *                  type: string
 *              guid:
 *                  type: string
 *              required:
 *                  type: boolean
 *              type:
 *                  type: string
 *                  enum:
 *                      -   number
 *                      -   string
 *                      -   array
 *                      -   boolean
 *              enum:
 *                  type: array
 *                  items:
 *                      -   number
 *                      -   string
 *                      -   array
 *                      -   boolean
 */

/**
 * @swagger
 * /option/:
 *  get:
 *      tags:
 *          -   option
 *      summary: get all options
 *      description: get all options
 *      responses:
 *          default:
 *              description: successful operation
 * /option/create:
 *  post:
 *      tags:
 *          -   option
 *      summary: create new options
 *      description: create new options
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/SendOption'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/SendOption'
 *      responses:
 *          default:
 *              description: successful operation
 *
 * /option/update/{id}:
 *  put:
 *      tags:
 *          -   option
 *      summary: update option
 *      description: update option
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: string
 *              required: true
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/UpdateOption'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/UpdateOption'
 *      responses:
 *          default:
 *              description: successful operation
 *
 * /option/delete/{id}:
 *  delete:
 *      tags:
 *          -   option
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
 * /option/{id}:
 *  get:
 *      tags:
 *          -   option
 *      summary: Get option by category slug.
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: string
 *              required: true
 *      responses:
 *          default:
 *              description: successful operation
 *
 * /option/by-category-id/{categoryId}:
 *  get:
 *      tags:
 *          -   option
 *      summary: Get option by category slug.
 *      parameters:
 *          -   in: path
 *              name: categoryId
 *              type: string
 *              required: true
 *      responses:
 *          default:
 *              description: successful operation
 *
 * /option/by-category-slug/{categorySlug}:
 *  get:
 *      tags:
 *          -   option
 *      summary: Get option by category slug.
 *      parameters:
 *          -   in: path
 *              name: categorySlug
 *              type: string
 *              required: true
 *      responses:
 *          default:
 *              description: successful operation
 *
 *
 *
 */
