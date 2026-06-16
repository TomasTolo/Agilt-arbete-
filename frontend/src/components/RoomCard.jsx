function RoomCard({ room, isSelected, onClick }) {
  const hasWarning = room.sensors?.some((sensor) => sensor.status === "Varning");

  return (
    <article
      className={`room-card ${isSelected ? "room-selected" : ""} ${
        hasWarning ? "room-has-warning" : ""
      }`}
    >
      <button className="room-card-button" onClick={onClick}>
        <div className="room-card-top">
          <div>
            <div className="room-floor">{room.floor}</div>
            <h2 className="room-name">{room.name}</h2>
          </div>

          {hasWarning && <span className="badge-warning">⚠ Varning</span>}
        </div>

        <div className="room-sensor-summary">
          {room.sensors?.map((sensor) => (
            <span key={sensor._id} className="sensor-pill">
              {sensor.type === "Temperatur" ? "🌡️" : "💧"} {sensor.value}
            </span>
          ))}
        </div>

        <span className="room-btn">
          {isSelected ? "Stäng detaljer" : "Visa detaljer"}
        </span>
      </button>
    </article>
  );
}

export default RoomCard;