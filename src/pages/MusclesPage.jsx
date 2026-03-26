import { useState } from "react";
import { useLocation } from "react-router-dom";
import { exercises } from "../data/exercises";
import ExerciseCard from "../components/ExerciseCard";
import ExerciseModal from "../components/ExerciseModal";

export default function MusclesPage() {

  const [selected, setSelected] = useState(null);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = params.get("search") || "";

  // FILTER LOGIC
  const filteredExercises = exercises.filter((ex) =>
    ex.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="muscles-page">

      <h1>
        {search ? `Results for "${search}"` : "Exercise Library"}
      </h1>

      <div className="exercise-grid">
        {filteredExercises.map((ex) => (
          <ExerciseCard
            key={ex.id}
            exercise={ex}
            open={setSelected}
          />
        ))}
      </div>

      <ExerciseModal
        exercise={selected}
        close={() => setSelected(null)}
      />

    </section>
  );
}