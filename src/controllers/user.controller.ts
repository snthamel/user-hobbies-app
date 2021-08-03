import { Request, Response } from "express";
import { getAllUsers, createNewUser } from '../services/user.service';

export async function getUsers(req: Request, res: Response) {
    try {
        const users = await getAllUsers();
        return res.json({
            data: users
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export async function createUser(req: Request, res: Response) {
    try {
        const user = await createNewUser(req.body);
        return res.json({
            message: 'User saved successfully',
            data: user.toJSON()
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}
