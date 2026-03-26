import { useNavigate } from "react-router-dom";

export default function DashboardNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="dashboard-navbar">

      {/* LOGO */}
      <div
        className="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        ⚡ NO<span className="red">LIMIT</span>
      </div>

      {/* RIGHT SIDE */}
      <div className="dashboard-actions">

        <div
          className="profile-icon"
          onClick={() => navigate("/dashboard")}
        >
          👤
        </div>

        <button className="btn-outline" onClick={handleLogout}>
          Sign Out
        </button>

      </div>
    </div>
  );
}