import { useId, useState } from "react";
const LoginForm = () => {
  const id = useId();
  console.log("🚀 ~ file: LoginForm.jsx:4 ~ LoginForm ~ id:", id);
  // const altId = Math.random().toString(16);
  const username = `${id}-username`;
  const password = `${id}-password`;

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <form>
        <label htmlFor={username}>Username</label>
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          id={username}
          type="text"
          placeholder="Username"
        />
        <label htmlFor={password}>Password</label>
        <input
          value={pass}
          id={password}
          onChange={(event) => {
            setPass(event.target.value);
          }}
          type="password"
          placeholder="Password"
        />
      </form>
    </div>
  );
};

export default LoginForm;
