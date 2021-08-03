import express, { Request, Response } from 'express';
import { getUserHobbies, addUserHobby, removeUserHobby } from '../controllers/hobby.controller';
import { getUsers, createUser } from '../controllers/user.controller';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:user_id/hobbies', getUserHobbies);

router.post('/:user_id/hobbies', addUserHobby);

router.delete('/:user_id/hobbies/:hobby_id', removeUserHobby);

export = router;
