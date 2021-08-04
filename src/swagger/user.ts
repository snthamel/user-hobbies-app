// /user
/**
 * @swagger
 *  /users:
 *    get:
 *      summary: Return users list
 *      tags: [User]
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  data:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        _id:
 *                          type: string
 *                          example: 61093d14e824e901978e3427
 *                        name:
 *                          type: string
 *                          example: John
 *        422:
 *          $ref: '#/components/responses/UnprocessableEntity'
 *    post:
 *      summary: Add new user
 *      tags: [User]
 *      requestBody:
 *        required: true,
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  description: User name
 *                  example: John Appleseed
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: User saved successfully
 *        400:
 *          $ref: '#/components/responses/BadRequest'
 *        422:
 *          $ref: '#/components/responses/UnprocessableEntity'
 */
