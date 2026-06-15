import { useState, useEffect } from "react";
import "./App.css";
import RoomCard from "./components/RoomCard";
import Modal from "./components/Modal";

// ── App ──────────────────────────────────────────────────────
export default function App() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [modalSensors, setModalSensors] = useState([]);
  const [sensorsLoading, setSensorsLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5050/api/rooms")
      .then((r) => {
        if (!r.ok) throw new Error('Kunde inte hämta rum');
        return r.json();
      })
      .then((data) => {
        setRooms(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  function handleRoomClick(room) {
    if (selectedRoom?._id === room._id) {
      setSelectedRoom(null);
      setModalSensors([]);
      return;
    }
    setSelectedRoom(room);
    setSensorsLoading(true);
    fetch(`http://localhost:5050/api/rooms/${room._id}/sensors`)
      .then((r) => r.json())
      .then((data) => {
        setModalSensors(data);
        setSensorsLoading(false);
      })
      .catch(() => setSensorsLoading(false));
  }

  const warningCount = rooms.filter((r) => r.sensors?.some((s) => s.status === 'Varning')).length;

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="header-logo">
            <span className="logo-icon">🏠</span>
            <span className="logo-text">SmartHome</span>
          </div>
          <div className="header-stats">
            <div className="stat">
              <span className="stat-num">{rooms.length}</span>
              <span className="stat-label">Rum</span>
            </div>
            <div className={`stat ${warningCount > 0 ? 'stat-warn' : ''}`}>
              <span className="stat-num">{warningCount}</span>
              <span className="stat-label">Varningar</span>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="page-title-wrap">
          <h1 className="page-title">Temperaturöversikt</h1>
          <p className="page-sub">Klicka på ett rum för att se sensordetaljer</p>
        </div>

        {loading && (
          <div className="spinner-wrap full">
            <span className="spinner" />
          </div>
        )}
        {error && (
          <div className="error-box">
            <strong>Kunde inte ansluta till servern.</strong>
            <p>Kontrollera att backend körs på port 5000.</p>
          </div>
        )}

        {!loading && !error && (
          <div className="rooms-grid">
            {rooms.map((room) => (
              <RoomCard
                key={room._id}
                room={room}
                isSelected={selectedRoom?._id === room._id}
                onClick={() => handleRoomClick(room)}
              />
            ))}
          </div>
        )}
      </main>

      {selectedRoom && (
        <Modal
          room={selectedRoom}
          sensors={modalSensors}
          loading={sensorsLoading}
          onClose={() => {
            setSelectedRoom(null);
            setModalSensors([]);
          }}
        />
      )}
    </div>
  );
}
