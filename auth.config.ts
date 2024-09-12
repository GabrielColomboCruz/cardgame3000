import type { NextAuthConfig, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import { getUserEmail } from "./actions/getUserData";

interface UserData {
  Id: number;
  Usuario: string;
  Email: string;
  Senha: string;
  Diamantes: string;
  Ip: string;
  Vitorias: string;
  Partidas: string;
  OuroMaximo: string;
  nSaves: string;
}

export default {
  providers: [
    Credentials({
      async authorize(credentials): Promise<null | User> {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const userData = await getUserEmail({ email });

          if (!userData || !userData.Senha) return null;

          if (password === userData.Senha) {
            return {
              name: userData.Usuario,
              email: userData.Email,
            };
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
