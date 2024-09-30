import UsuarioCRUD from "@/model/UsuarioCRUD";
interface UserProps {
  email?: string;
  user?: string;
  password?: string;
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

export async function createUser({
  email,
  user,
  password,
}: UserProps): Promise<UserData | void> {
  try {
    //INSERT INTO `Usuario` ( `Usuario`, `Email`, `Senha`, `Diamante`, `Ip`, `Vitorias`, `Partidas`, `OuroMaximo`, `nSaves`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?);",
    const userData = await UsuarioCRUD(
      "create",
      null,
      user,
      email,
      password,
      0,
      0,
      0,
      0,
      0,
      0
    );
    return userData; // If needed elsewhere
  } catch (error) {
    console.error("Error creating new user: ", error);
  }
}

export async function createCustomUser({
  Id,
  Usuario,
  Email,
  Senha,
  Diamantes,
  Ip,
  Vitorias,
  Partidas,
  OuroMaximo,
  nSaves,
}: UserData): Promise<UserData | void> {
  try {
    const userData: UserData = await UsuarioCRUD(
      "create",
      Id,
      Usuario,
      Email,
      Senha,
      Diamantes,
      Ip,
      Vitorias,
      Partidas,
      OuroMaximo,
      nSaves
    );
    return userData;
  } catch (error) {
    console.error("Error creating custom user from data:", error);
  }
}
