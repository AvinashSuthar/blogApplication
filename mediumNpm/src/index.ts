import z from "zod";

export const signupUser = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(15),
  name: z.string().min(2),
});

export const signinUser = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(15),
});

export const createBlog = z.object({
  title: z.string(),
  content: z.string(),
});

export const updateBlog = z.object({
  title: z.string(),
  content: z.string(),
});

export type UpdateBlog = z.infer<typeof updateBlog>;

export type CreateBlog = z.infer<typeof createBlog>;

export type SigninUser = z.infer<typeof signinUser>;

export type SignupUser = z.infer<typeof signupUser>;

