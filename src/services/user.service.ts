import { Types, DocumentDefinition } from "mongoose";
import User, { UserDocument } from "../models/user.model";
import Hobby, { HobbyDocument } from "../models/hobby.model";

export async function getAllUsers() {
    return await User.find();
}

export async function createNewUser(user: DocumentDefinition<UserDocument>) {
    return await User.create(user);
}

export async function getUserHobbiesByUserId(userId: Types.ObjectId) {
    const user = await User.findOne({ _id: userId }, { hobbies: 1 }).populate('hobbies');
    return user?.hobbies || [];
}

export async function addNewUserHobby(userId: Types.ObjectId, hobby: DocumentDefinition<HobbyDocument>) {
    const addedHobby = await Hobby.create(hobby);
    return await User.updateOne(
        {
            _id: userId
        },
        {
            $push: {
                hobbies: addedHobby._id
            }
        }
    )
}

export async function deleteUserHobby(userId: Types.ObjectId, hobbyId: Types.ObjectId) {
    await Hobby.deleteOne({ _id: hobbyId });
    return await User.updateOne(
        {
            _id: userId
        },
        {
            $pull: {
                hobbies: hobbyId
            }
        }
    )
}
