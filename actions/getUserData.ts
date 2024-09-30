import UsuarioCRUD from "@/model/UsuarioCRUD";
interface UserProps {
  user?: string;
}

interface EmailProps {
  email?: string;
}

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

export async function getUser({
  user = "miguel",
}: UserProps): Promise<UserData | void> {
  try {
    const userData: UserData = await UsuarioCRUD("read", null, user);
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

export async function getUserEmail({
  email = "miguel@mig.com",
}: EmailProps): Promise<UserData | void> {
  try {
    const userData: UserData = await UsuarioCRUD(
      "emailread",
      null,
      null,
      email
    );
    //console.log(userData);
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
