"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlog = exports.createBlog = exports.signinUser = exports.signupUser = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupUser = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6).max(15),
    name: zod_1.default.string().min(2),
});
exports.signinUser = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6).max(15),
});
exports.createBlog = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});
exports.updateBlog = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});
