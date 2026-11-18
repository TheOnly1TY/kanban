import * as z from "zod";

export const SignupSchema = z.object({
    name: z.string().min(2, { error: "Username must be at least 3 characters" }).max(255, { error: "Username cannot exceed 255 characters" }),
    email: z.email({ error: "Please enter a valid email address" }),
    password: z.string().min(12, {error: "Password must be at least 12 characters"}),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    error: "Passwords don't match",
    path: ["confirmPassword"],
}).transform(({confirmPassword, ...data}) => data);

export const LoginSchema = z.object({
    email: z.email({ error: "Please enter a valid email address" }),
    password: z.string().min(12, {error: "Password must be at least 12 characters"})
})