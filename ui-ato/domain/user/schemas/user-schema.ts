import { z } from "zod";

export const UserSchema = z.object({
  email: z.email("Please input a valid email address."),
  fullname: z.string().min(1, "Name is required."),
  rolename: z.string().min(1, "Role is required."),
});

export type UserSchemaType = z.infer<typeof UserSchema>;