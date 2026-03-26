import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) setUser(true);
}, []);

  return (
    <>
      <nav className="navbar">

        <Link to="/" className="logo">
          <div className="logo-icon">⚡</div>
          <span>NO<span className="red">LIMIT</span></span>
        </Link>

        <input
          className="search"
          placeholder="Search muscle, exercise, or workout..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate(`/muscles?search=${query}`);
            }
          }}
        />

        <div className="nav-buttons">
          {user ? (
            <div
              className="profile-icon"
              onClick={() => navigate("/dashboard")}
            >
              👤
            </div>
          ) : (
            <>
              <button className="btn-outline" onClick={() => setShowLogin(true)}>
                Sign In
              </button>

              <button className="btn-primary" onClick={() => setShowSignup(true)}>
                Get Started
              </button>
            </>
          )}
        </div>

      </nav>

      {showLogin && <LoginModal close={() => setShowLogin(false)} />}
      {showSignup && <SignupModal close={() => setShowSignup(false)} />}
    </>
  );
}