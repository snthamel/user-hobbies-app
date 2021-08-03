import { Request, Response } from "express";
import { getUserHobbiesByUserId, addNewUserHobby, deleteUserHobby } from '../services/user.service';
import { Types } from "mongoose";

export async function getUserHobbies(req: Request, res: Response) {
    try {
        const userId = Types.ObjectId(req.params.user_id);
        const userHobbies = await getUserHobbiesByUserId(userId);
        return res.json({
            data: userHobbies
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export async function addUserHobby(req: Request, res: Response) {
    try {
        const userId = Types.ObjectId(req.params.user_id);
        const hobby = req.body;
        const addedHobby = await addNewUserHobby(userId, hobby);
        return res.json({
            message: 'Hobby successfully added to the user',
            data: addedHobby
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export async function removeUserHobby(req: Request, res: Response) {
    try {
        const userId = Types.ObjectId(req.params.user_id);
        const hobbyId = Types.ObjectId(req.params.hobby_id);
        await deleteUserHobby(userId, hobbyId);
        return res.json({
            message: 'Hobby successfully deleted from the user'
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}
