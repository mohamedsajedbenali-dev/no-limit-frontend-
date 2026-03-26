import { useEffect, useState } from "react";
import API from "../api";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function ExerciseCard({ exercise, open }) {

  const [fav, setFav] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  // ✅ check if already favorite
  useEffect(() => {
    const checkFav = async () => {
      try {
        const res = await API.get("/user");
        const exists = res.data.favorites.find(
          (e) => e.id === exercise.id
        );
        setFav(!!exists);
      } catch {
        // not logged in
      }
    };

    checkFav();
  }, [exercise.id]);

  // ❤️ TOGGLE FAVORITE (API)
  const toggleFavorite = async (e) => {
    e.stopPropagation();

    try {
      const res = await API.post("/user/favorite", {
        exercise,
      });

      const exists = res.data.find((e) => e.id === exercise.id);
      setFav(!!exists);

    } catch {
      alert("Please login first");
    }
  };

  // ➕ OPEN PICKER
  const openPicker = (e) => {
    e.stopPropagation();
    setShowPicker(true);
  };

  // 📅 ADD TO DAY (API)
  const addToDay = async (day) => {
    try {
      await API.post("/user/plan", {
        day,
        exercise,
      });

      setShowPicker(false);
      alert(`Added to ${day} 💪`);

    } catch {
      alert("Please login first");
    }
  };

  return (
    <>
      <div className="exercise-card" onClick={() => open(exercise)}>

        <img src={exercise.image} alt={exercise.name} />

        <div className="exercise-info">
          <h3>{exercise.name}</h3>

          <div className="card-actions">

            {/* ❤️ FAVORITE */}
            <span
              className={`fav ${fav ? "active" : ""}`}
              onClick={toggleFavorite}
            >
              {fav ? "❤️" : "🤍"}
            </span>

            {/* ➕ SPLIT */}
            <button className="add-btn" onClick={openPicker}>
              + Split
            </button>

          </div>
        </div>
      </div>

      {/* 📅 DAY PICKER */}
      {showPicker && (
        <div className="picker-overlay" onClick={() => setShowPicker(false)}>
          <div className="picker" onClick={(e) => e.stopPropagation()}>

            <h3>Select Day</h3>

            {days.map((day) => (
              <button key={day} onClick={() => addToDay(day)}>
                {day}
              </button>
            ))}

          </div>
        </div>
      )}
    </>
  );
}