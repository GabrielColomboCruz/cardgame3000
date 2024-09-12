import { redirect } from "next/navigation";
import { getSession, login, logout } from "@/login";
import styles from "./LoginForm.module.css"

export default async function Login() {
  const session = await getSession();
  return (
    <div className={styles.form}>
    <section>
      <form
        action={async (formData) => {
          "use server";
          await login(formData);
          redirect("/login");
        }}
      >
        <input required className="input input-bordered flex items-center gap-2" type="email" placeholder="Email" />
        <br />
        <button className="btn" type="submit">Login</button>
      </form>
      <form action={async (formData) => {
          "use server";
          await login(formData);
          redirect("/login");
        }}><input required className="input input-bordered flex items-center gap-2" type="email" placeholder="Email" />
        <br />
        <button className="btn" type="submit">Register</button></form>
      <form
        action={async () => {
          "use server";
          await logout();
          redirect("/login");
        }}
      >
        <button className="btn" type="submit">Logout</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section></div>
  );
}