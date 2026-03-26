import { useState } from "react";
import API from "../api";

export default function SignupModal({ close }) {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await API.post("/auth/register", {
        username,
        email,
        password
      });

      localStorage.setItem("token", res.data.token);

      close();
      window.location.reload();

    } catch {
      alert("Signup failed");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <button onClick={close}>✕</button>

        <h2>Create Account</h2>

        <input placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

        <button onClick={handleSignup}>Sign Up</button>

      </div>
    </div>
  );
}