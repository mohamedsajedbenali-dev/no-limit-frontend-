import gym from "../assets/gym.webp";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
  id="hero"
  className="hero"
  style={{ backgroundImage: `url(${gym})` }}
>
      <div className="overlay" />

      <div className="hero-content">

        <div className="tag">SMART FITNESS COMPANION</div>

        <h1>
          PUSH YOUR <br />
          <span className="glow">LIMITS</span>
        </h1>

        <p>
          Your intelligent training partner. Discover exercises, build custom
          workout splits, and track your transformation — all in one place.
        </p>

        <div className="hero-buttons">
          <Link to="/muscles">
            <button className="btn-primary">Explore Muscles</button>
          </Link>
        </div>

      </div>
    </section>
  );
}