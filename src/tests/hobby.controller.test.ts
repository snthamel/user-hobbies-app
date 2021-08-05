import { app } from '../app';
import request from 'supertest';
import * as dbClient from './utils/database';
import 'jest-extended';
import 'jest-chain';
import User from '../models/user.model';
import Hobby, { HobbyDocument } from '../models/hobby.model';

beforeAll(async () => {
    await dbClient.connect();
});

afterEach(async () => {
    await dbClient.clearDatabase();
});

afterAll(async () => {
    await dbClient.closeDatabase();
});

describe('HobbyController', () => {
    describe('getUserHobbies', () => {
        test.todo('should return an empty list for user with no hobbies');

        test('should return hobbies for a user with hobbies added', async () => {
            const newHobby = await Hobby.create({
                name: 'test-hobby',
                passionLevel: 'High',
                year: 2020
            })
            const newUser = await User.create({
                name: 'test-user',
                hobbies: [
                    newHobby._id
                ]
            });


            const response = await request(app).get(`/users/${newUser._id}/hobbies`);
            expect(response.status).toBe(200);
            expect(response.body)
                .toBeObject()
                .toContainKey('data');
            response.body.data.forEach((hobby: HobbyDocument) => {
                expect(hobby).toBeObject().toContainAllKeys(['_id', 'name', 'passionLevel', 'year']);
            });
        });

        test.todo('should return 404 for invalid user id');
    });

    describe('addUserHobby', () => {
        test('should add specified hobby to specified user\'s hobbies', async () => {
            const newUser = await User.create({
                name: 'test-user'
            });


            const response = await request(app)
                .post(`/users/${newUser._id}/hobbies`)
                .send({
                    name: 'test-hobby',
                    passionLevel: 'High',
                    year: 2020
                });
            expect(response.status).toBe(200);
            expect(response.body)
                .toBeObject()
                .toContainKey('message');
            expect(response.body.message).toBeString().toEqual('Hobby successfully added to the user');
        });
        
        test.todo('should fail if hobby name is not specified');
        
        test.todo('should fail if hobby passion level is not specified');
        
        test.todo('should fail if hobby year is not specified');
        
        test.todo('should return 404 for invalid user id');
    });

    describe('removeUserHobby', () => {
        test('should delete spefied hobby from user\'s hobbies', async () => {
            const newHobby = await Hobby.create({
                name: 'test-hobby',
                passionLevel: 'High',
                year: 2020
            })
            const newUser = await User.create({
                name: 'test-user',
                hobbies: [
                    newHobby._id
                ]
            });


            const response = await request(app)
                .delete(`/users/${newUser._id}/hobbies/${newHobby._id}`);
            expect(response.status).toBe(200);
            expect(response.body)
                .toBeObject()
                .toContainKey('message');
            expect(response.body.message).toBeString().toEqual('Hobby successfully deleted from the user');
        });

        test.todo('should return 404 for invalid user id');

        test.todo('should return 404 for invalid hobby id');
    });
});
