/**
 * @swagger
 * components:
 *    responses:
 *      BadRequest:
 *        description: 400 Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                errors:
 *                  type: object
 *                  description: key-value pairs of validation error messages with field name as key and validation message as value
 *      NotFound:
 *        description: 404 Not Found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  default: Not found
 *      UnprocessableEntity:
 *        description: 422 Unprocessable Entity
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: Exception message
 */