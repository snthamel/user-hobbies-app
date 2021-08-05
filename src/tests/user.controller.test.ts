import { app } from '../app';
import request from 'supertest';
import * as dbClient from './utils/database';
import 'jest-extended';
import 'jest-chain';

import User, { UserDocument } from '../models/user.model';

beforeAll(async () => {
    await dbClient.connect();
});

afterEach(async () => {
    await dbClient.clearDatabase();
});

afterAll(async () => {
    await dbClient.closeDatabase();
});

describe('UserController', () => {
    describe('getUsers', () => {
        test('should return an empty array', async () => {
            const response = await request(app).get('/users');
            expect(response.status).toBe(200);
            expect(response.body)
                .toBeObject()
                .toContainKey('data');
            expect(response.body.data).toBeArray().toBeEmpty();
        });

        test('should return user list with attributes', async () => {
            const newUser = await User.create({
                name: 'test-user'
            });

            const response = await request(app).get('/users');
            expect(response.status).toBe(200);
            expect(response.body)
                .toBeObject()
                .toContainKey('data');
            expect(response.body.data).toBeArrayOfSize(1);
            response.body.data.forEach((user: UserDocument) => {
                expect(user).toBeObject().toContainAllKeys(['_id', 'name']);
                expect(user.name).toEqual(newUser.name);
            });
        });
    });

    describe('addUser', () => {
        test('should add new user to database', async () => {
            const response = await request(app)
                .post('/users')
                .send({
                    name: 'test-user'
                });
            expect(response.status).toBe(200);
            expect(response.body)
                .toBeObject()
                .toContainKey('message');
            expect(response.body.message).toBeString().toEqual('User saved successfully');
        });

        test.todo('should fail if name is not specified');
    });
});
