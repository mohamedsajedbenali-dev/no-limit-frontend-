import { useEffect, useState } from "react";
import API from "../api";
import DashboardNavbar from "../components/DashboardNavbar";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Dashboard() {

  // ✅ SAFE DEFAULTS
  const [saved, setSaved] = useState([]);
const [plan, setPlan] = useState({
  Mon: [],
  Tue: [],
  Wed: [],
  Thu: [],
  Fri: [],
  Sat: [],
  Sun: []
});

  // ✅ FETCH USER DATA
  useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await API.get("/user");

      setSaved(res.data.favorites || []);

      setPlan({
        Mon: res.data.plan?.Mon || [],
        Tue: res.data.plan?.Tue || [],
        Wed: res.data.plan?.Wed || [],
        Thu: res.data.plan?.Thu || [],
        Fri: res.data.plan?.Fri || [],
        Sat: res.data.plan?.Sat || [],
        Sun: res.data.plan?.Sun || [],
      });

    } catch (err) {
      console.log(err);
    }
  };

  fetchUser();
}, []);
  // ❌ REMOVE EXERCISE
 const removeExercise = async (day, index) => {
  try {
    const res = await API.post("/user/plan/remove", {
      day,
      index
    });

    // ✅ FULL SAFE UPDATE
    setPlan({
      Mon: res.data?.Mon || [],
      Tue: res.data?.Tue || [],
      Wed: res.data?.Wed || [],
      Thu: res.data?.Thu || [],
      Fri: res.data?.Fri || [],
      Sat: res.data?.Sat || [],
      Sun: res.data?.Sun || [],
    });

  } catch (err) {
    console.log(err);
  }
};
  // 📅 RENDER DAY CONTENT (SAFE)
  const getDayContent = (day) => {

    if (!plan || !plan[day] || plan[day].length === 0) {
      return <p className="rest-day">Rest 💤</p>;
    }

    return plan[day].map((ex, i) => (
      <div key={i} className="day-ex">

        <span>{ex.name}</span>

        <button
          className="remove-btn"
          onClick={() => removeExercise(day, i)}
        >
          ❌
        </button>

      </div>
    ));
  };

  return (
    <div className="dashboard">

      <DashboardNavbar />

      <div className="dashboard-content">

        {/* ⭐ SAVED EXERCISES */}
        <h2>⭐ Saved Exercises</h2>

        <div className="exercise-grid">
          {saved.length === 0 ? (
            <p>No saved exercises yet</p>
          ) : (
            saved.map((ex) => (
              <div key={ex.id} className="exercise-card">
                <img src={ex.image} alt={ex.name} />
                <p>{ex.name}</p>
              </div>
            ))
          )}
        </div>

        {/* 📅 WORKOUT SPLIT */}
        <h2>📅 My Split</h2>

        <div className="days-grid">
          {days.map((day) => (
            <div key={day} className="day-card">

              <h3>{day}</h3>

              <div>
                {getDayContent(day)}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}