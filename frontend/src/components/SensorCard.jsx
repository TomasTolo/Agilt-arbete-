function SensorCard({ sensor }) {
  const isWarning = sensor.status === "Varning";
  const icon = sensor.type === "Temperatur" ? "🌡️" : "💧";

  return (
    <article className={`sensor-card ${isWarning ? "sensor-warning" : ""}`}>
      <div className="sensor-header">
        <span className="sensor-icon" aria-hidden="true">
          {icon}
        </span>

        <span className="sensor-type">{sensor.type}</span>

        <span
          className={`status-dot ${isWarning ? "dot-warning" : "dot-ok"}`}
          aria-label={isWarning ? "Varning" : "Aktiv"}
        />
      </div>

      <div className="sensor-value">{sensor.value}</div>

      <div className={`sensor-status ${isWarning ? "text-warning" : "text-ok"}`}>
        {sensor.status}
      </div>
    </article>
  );
}

export default SensorCard;