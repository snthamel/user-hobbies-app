import express from 'express';
import UserController from '../controllers/user.controller';
import HobbyController from '../controllers/hobby.controller';
import { validateCreateUser, validateGetUserHobbies, validateAddUserHobby, validateRemoveUserHobby } from '../validators/user.validator';

const router = express.Router();
const userController = new UserController();
const hobbyController = new HobbyController();

router.get('/', userController.getUsers);

router.post('/', validateCreateUser, userController.createUser);

router.get('/:user_id/hobbies', validateGetUserHobbies, hobbyController.getUserHobbies);

router.post('/:user_id/hobbies', validateAddUserHobby, hobbyController.addUserHobby);

router.delete('/:user_id/hobbies/:hobby_id', validateRemoveUserHobby, hobbyController.removeUserHobby);

export = router;
