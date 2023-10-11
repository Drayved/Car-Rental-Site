"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const users = [];
function handler(event) {
    return __awaiter(this, void 0, void 0, function* () {
        if (event.httpMethod === 'GET' && event.path === '/') {
            return {
                statusCode: 200,
                body: JSON.stringify('Welcome to the Car Rental'),
            };
        }
        if (event.httpMethod === 'GET' && event.path === '/users') {
            const userNames = users.map((user) => user.name);
            return {
                statusCode: 200,
                body: JSON.stringify(userNames),
            };
        }
        if (event.httpMethod === 'POST' && event.path === '/users') {
            const requestBody = JSON.parse(event.body || '{}');
            // Check if the user already exists
            const existingUser = users.find((user) => user.name === requestBody.name);
            if (existingUser) {
                return {
                    statusCode: 409,
                    body: JSON.stringify({ error: 'Username taken' }),
                };
            }
            // Hash the password
            const salt = yield bcryptjs_1.default.genSalt();
            const hashedPassword = yield bcryptjs_1.default.hash(requestBody.password, salt);
            // Insert the new user
            const newUser = { name: requestBody.name, password: hashedPassword };
            users.push(newUser);
            return {
                statusCode: 201,
                body: 'User created successfully',
            };
        }
        if (event.httpMethod === 'POST' && event.path === '/users/login') {
            const requestBody = JSON.parse(event.body || '{}');
            const { name, password } = requestBody;
            const user = users.find((user) => user.name === name);
            if (!user) {
                return {
                    statusCode: 404,
                    body: 'User not found',
                };
            }
            const isPasswordValid = yield bcryptjs_1.default.compare(password, user.password);
            if (isPasswordValid) {
                return {
                    statusCode: 200,
                    body: 'Login successful',
                };
            }
            else {
                return {
                    statusCode: 401,
                    body: 'Incorrect password',
                };
            }
        }
        return {
            statusCode: 404,
            body: 'Not Found',
        };
    });
}
exports.handler = handler;
