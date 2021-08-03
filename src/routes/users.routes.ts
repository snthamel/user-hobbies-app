import express from 'express';
import { getUserHobbies, addUserHobby, removeUserHobby } from '../controllers/hobby.controller';
import { getUsers, createUser } from '../controllers/user.controller';
import { validateCreateUser, validateGetUserHobbies, validateAddUserHobby, validateRemoveUserHobby } from '../validators/user.validator';

const router = express.Router();

router.get('/', getUsers);

router.post('/', validateCreateUser, createUser);

router.get('/:user_id/hobbies', validateGetUserHobbies, getUserHobbies);

router.post('/:user_id/hobbies', validateAddUserHobby, addUserHobby);

router.delete('/:user_id/hobbies/:hobby_id', validateRemoveUserHobby, removeUserHobby);

export = router;
