import SensorCard from "./SensorCard";

function Modal({ room, sensors, loading, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <section
        className="modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-floor">{room.floor}</div>
        <h2 id="modal-title" className="modal-title">
          {room.name}
        </h2>

        {loading ? (
          <div className="spinner-wrap">
            <span className="spinner" />
          </div>
        ) : (
          <div className="sensor-grid">
            {sensors.map((sensor) => (
              <SensorCard key={sensor._id} sensor={sensor} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

useEffect(() => {
  function handleEscape(event) {
    if (event.key === "Escape") {
      onClose();
    }
  }

  window.addEventListener("keydown", handleEscape);

  return () => {
    window.removeEventListener("keydown", handleEscape);
  };
}, [onClose]);

export default Modal;