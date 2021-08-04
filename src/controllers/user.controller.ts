import { Request, Response } from "express";
import { getAllUsers, createNewUser } from '../services/user.service';

export default class UserController {
    public async getUsers(req: Request, res: Response) {
        try {
            const users = await getAllUsers();
            return res.json({
                data: users
            });
        } catch (error) {
            return res.status(422).json({ message: error.message });
        }
    }
    
    public async createUser(req: Request, res: Response) {
        try {
            await createNewUser(req.body);
            return res.json({
                message: 'User saved successfully'
            });
        } catch (error) {
            return res.status(422).json({ message: error.message });
        }
    }
}
