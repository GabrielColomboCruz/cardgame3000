"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { getUserEmail } from "./getUserData";
import { createUser } from "./createUser";

import { error } from "console";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  console.log(values);
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields) {
    return { error: "Invalid fields!" };
  }

  try {
    const result = await getUserEmail({ email: validatedFields.data?.email });
    if (result) {
      return { error: "Email already in use" };
    } else {
      await createUser({
        email: validatedFields.data?.email,
        user: validatedFields.data?.name,
        password: validatedFields.data?.password,
      });
      return { success: "Account created!" };
    }
  } catch (err) {
    console.error("Database error:", err);
    return { error: "Internal server error" };
  }
};
