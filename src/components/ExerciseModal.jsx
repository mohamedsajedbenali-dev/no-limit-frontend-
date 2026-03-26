export default function ExerciseModal({ exercise, close }) {
  if (!exercise) return null;

  return (
    <div className="modal-overlay">

      <div className="exercise-modal">

        <button className="close-btn" onClick={close}>✕</button>

        <h2>{exercise.name}</h2>

        <img
          className="exercise-step"
          src={exercise.stepImage}
          alt={exercise.name}
        />

        <p>{exercise.description}</p>

      </div>

    </div>
  );
}