// /users/{user_id}/hobbies
/**
 * @swagger
 *  /users/{user_id}/hobbies:
 *    parameters:
 *      - in: path
 *        name: user_id
 *        schema:
 *          type: string
 *        required: true
 *        description: User id
 *    get:
 *      summary: Returns hobbies of specified user
 *      tags: [Hobby]
 *      responses:
 *        200:
 *          description: Returns a data array with hobby objests
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
 *                          example: 61093e1de824e901978e3431
 *                        name:
 *                          type: string
 *                          example: Diving
 *                        passionLevel:
 *                          type: string
 *                          enum: [Low, Medium, High, Very-High]
 *                          example: High
 *                        year:
 *                          type: integer
 *                          example: 2020
 *        400:
 *          $ref: '#/components/responses/BadRequest'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        422:
 *          $ref: '#/components/responses/UnprocessableEntity'
 *    post:
 *      summary: Add new hobby to specified user
 *      tags: [Hobby]
 *      requestBody:
 *        required: true,
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  example: Camping
 *                passionLevel:
 *                  type: string
 *                  enum: [Low, Medium, High, Very-High]
 *                  example: Medium
 *                year:
 *                  type: integer
 *                  example: 2015
 *      responses:
 *        200:
 *          description: Returns a success message
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Hobby successfully added to the user
 *        400:
 *          $ref: '#/components/responses/BadRequest'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        422:
 *          $ref: '#/components/responses/UnprocessableEntity'
 */

// /users/{user_id}/hobbies/{hobby_id}
/**
 * @swagger
 *  /users/{user_id}/hobbies/{hobby_id}:
 *    parameters:
 *      - in: path
 *        name: user_id
 *        schema:
 *          type: string
 *        required: true
 *        description: User id
 *      - in: path
 *        name: hobby_id
 *        schema:
 *          type: string
 *        required: true
 *        description: Hobby id
 *    delete:
 *      summary: Delete specified hobby from user
 *      tags: [Hobby]
 *      responses:
 *        200:
 *          description: Returns a success message
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Hobby successfully deleted from the user
 *        400:
 *          $ref: '#/components/responses/BadRequest'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        422:
 *          $ref: '#/components/responses/UnprocessableEntity'
 */
