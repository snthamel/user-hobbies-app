import { Request, Response, NextFunction } from "express";
import { checkSchema, validationResult, ValidationError, ErrorFormatter, Schema } from "express-validator/check";
import { Types } from "mongoose";
import { PASSION_LEVEL } from "../constants/app.constants";
import moment from 'moment';

const formatter: ErrorFormatter = (error: ValidationError) => { return error.msg; }

const validate = async (schema: Schema, req:Request, res: Response, next: NextFunction) => {
    await Promise.all(checkSchema(schema).map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }

    res.status(400).json({
        errors: errors.formatWith(formatter).mapped()
    });
}

export async function validateCreateUser(req:Request, res: Response, next: NextFunction) {
    await validate({
        name: {
            in: ['body'],
            exists: {
                errorMessage: 'User name is required'
            }
        }
    }, req, res, next);
};

export async function validateGetUserHobbies(req:Request, res: Response, next: NextFunction) {
    await validate({
        user_id: {
            in: ['params'],
            isMongoId: {
                errorMessage: 'User id should be a valid ObjectId'
            },
            customSanitizer: {
                options: value => {
                    if (Types.ObjectId.isValid(value)) return Types.ObjectId(value);
                    return value;
                }
            }
        }
    }, req, res, next);
}

export async function validateAddUserHobby(req:Request, res: Response, next: NextFunction) {
    const passionLevelValues = Object.values(PASSION_LEVEL);
    await validate({
        user_id: {
            in: ['params'],
            isMongoId: {
                errorMessage: 'User id should be a valid ObjectId'
            },
            customSanitizer: {
                options: value => {
                    if (Types.ObjectId.isValid(value)) return Types.ObjectId(value);
                    return value;
                }
            }
        },
        name: {
            in: ['body'],
            exists: {
                errorMessage: 'Hobby name is required'
            }
        },
        passionLevel: {
            in: ['body'],
            exists: {
                errorMessage: 'Hobby passion level is required'
            },
            isIn: {
                options: [passionLevelValues.join()],
                errorMessage: `Hobby passion level value should be one of [${passionLevelValues.join(', ')}]`
            }
        },
        year: {
            in: ['body'],
            exists: {
                errorMessage: 'Hobby year is required'
            },
            isNumeric: {
                errorMessage: 'Hobby year should be a numeric value'
            },
            custom: {
                options: value => {
                    return moment(value, 'YYYY', true).isValid();
                },
                errorMessage: 'Hobby year should be a valid year'
            }
        }
    }, req, res, next);
}

export async function validateRemoveUserHobby(req:Request, res: Response, next: NextFunction) {
    await validate({
        user_id: {
            in: ['params'],
            isMongoId: {
                errorMessage: 'User id should be a valid ObjectId'
            },
            customSanitizer: {
                options: value => {
                    if (Types.ObjectId.isValid(value)) return Types.ObjectId(value);
                    return value;
                }
            }
        },
        hobby_id: {
            in: ['params'],
            isMongoId: {
                errorMessage: 'Hobby id should be a valid ObjectId'
            },
            customSanitizer: {
                options: value => {
                    if (Types.ObjectId.isValid(value)) return Types.ObjectId(value);
                    return value;
                }
            }
        }
    }, req, res, next);
}
