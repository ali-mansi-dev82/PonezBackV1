/**
 * @swagger
 * tags:
 *  name: auth
 *  description: auth modules and routes
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      SendOTP: 
 *          type: object
 *          required:
 *              -   mobile
 *          properties: 
 *              mobile: 
 *                  type: string
 *                  example: 09138992971
 * 
 *      CheckOTP: 
 *          type: object
 *          required:
 *              -   mobile
 *          properties: 
 *              mobile: 
 *                  type: string
 *                  example: 09138992971
 *              code: 
 *                  type: string 
 *                  example: 123456
 */



/**
 * @swagger
 * /auth/send-otp/:
 *  post:
 *      tags:
 *          -   auth
 *      summary: send otp code
 *      description: Returns a single pet
 *      requestBody: 
 *          content: 
 *              application/x-www-form-urlencoded:
 *                  schema: 
 *                      $ref: '#/components/schemas/SendOTP'
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/SendOTP'
 *          required: true
 *      responses: 
 *          default: 
 *              description: successful operation
 *  
 * /auth/check-otp/:
 *  post:
 *      tags:
 *          -   auth
 *      summary: check otp code
 *      description: Returns a single pet
 *      requestBody: 
 *          content: 
 *              application/x-www-form-urlencoded:
 *                  schema: 
 *                      $ref: '#/components/schemas/CheckOTP'
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/CheckOTP'
 *      responses: 
 *          default: 
 *              description: successful operation
 * 
 * /auth/logout/:
 *  post:
 *      tags:
 *          -   auth
 *      summary: logout of account
 *      description: logout of account
 *      responses: 
 *          default: 
 *              description: successful operation
 */

