import { login } from "./actions";

const LoginPage = () => {
  return (
    <form action={login}>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginPage;
