import { useState } from "react";
import API from "../api";

export default function LoginModal({ close }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);

      close();
      window.location.reload();

    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <button onClick={close}>✕</button>

        <h2>Sign In</h2>

        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

        <button onClick={handleLogin}>Login</button>

      </div>
    </div>
  );
}