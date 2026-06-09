import "./App.css";
import {
  Shield,
  Wifi,
  Thermometer,
  ArrowUpRight,
  BookOpen,
  Truck,
  Home,
  Archive,
} from "lucide-react";

function App() {
  return (
    <div className="dashboard">
      <section className="welcome-section">
        <div className="welcome-greeting">
          <h1>Smart Home Dashboard</h1>
        </div>

        <div className="welcome-status-cards">
          <div className="status-card">
            <div className="status-card-icon green">
              <Shield size={20} />
            </div>
            <div className="status-card-info">
              <span className="status-card-label">Hubb-status</span>
              <span className="status-card-value">SKYDDAD &amp; ONLINE</span>
            </div>
          </div>

          <div className="status-card">
            <div className="status-card-icon blue">
              <Wifi size={20} />
            </div>
            <div className="status-card-info">
              <span className="status-card-label">Enheter anslutna</span>
              <span className="status-card-value">12 AKTIVA</span>
            </div>
          </div>

          <div className="status-card">
            <div className="status-card-icon gold">
              <Thermometer size={20} />
            </div>
            <div className="status-card-info">
              <span className="status-card-label">Medeltemperatur</span>
              <span className="status-card-value">21.8°C</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-bar">
        <div className="stats-group">
          <div className="stat-pill">
            <span className="stat-pill-label">Belysning</span>
            <div className="stat-pill-row">
              <span className="pill">15%</span>
            </div>
          </div>
          <div className="stat-pill">
            <span className="stat-pill-label">Luftfuktighet</span>
            <div className="stat-pill-row">
              <span className="pill active">45%</span>
            </div>
          </div>
          <div className="stat-pill">
            <span className="stat-pill-label">Energisparmål</span>
            <div className="stat-pill-row">
              <span className="pill progress">
                60%
                <span className="mini-bars">
                  <span style={{ height: "6px" }}></span>
                  <span style={{ height: "10px" }}></span>
                  <span style={{ height: "8px" }}></span>
                  <span style={{ height: "14px" }}></span>
                  <span style={{ height: "10px" }}></span>
                  <span style={{ height: "16px" }}></span>
                  <span style={{ height: "12px" }}></span>
                  <span style={{ height: "8px" }}></span>
                </span>
              </span>
            </div>
          </div>

          <div className="stat-pill">
            <span className="stat-pill-label">Systemlast</span>
            <div className="stat-pill-row">
              <span className="pill">10%</span>
            </div>
          </div>
        </div>

        <div className="stats-group-right">
          <div className="stat-big">
            <span className="stat-big-number">32</span>
            <span className="stat-big-label">Enheter</span>
          </div>
          <div className="stat-big">
            <span className="stat-big-number">18</span>
            <span className="stat-big-label">Sensorer</span>
          </div>
          <div className="stat-big">
            <span className="stat-big-number">4</span>
            <span className="stat-big-label">Scener</span>
          </div>
        </div>
      </section>

      <section className="main-grid">
        <div className="card">
          <div className="card-header">
            <span className="card-title">Vardagsrum</span>
            <span className="floor-badge">Våning 1</span>
          </div>
          <div className="bedroom-gauge-wrapper">
            <div className="gauge-container">
              <div className="gauge-ring"></div>
              <div className="gauge-inner">
                <span className="temp-value">
                  18<span className="degree">°C</span>
                </span>
                <span className="gauge-label">
                  Luftfuktighet: 54%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">K&ouml;k</span>
            <span className="floor-badge">Våning 1</span>
          </div>
          <div className="bedroom-gauge-wrapper">
            <div className="gauge-container">
              <div className="gauge-ring"></div>
              <div className="gauge-inner">
                <span className="temp-value">
                  21<span className="degree">°C</span>
                </span>
                <span className="gauge-label">
                  Luftfuktighet: 51%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">Huvudsovrum</span>
            <span className="floor-badge">Våning 2</span>
          </div>
          <div className="bedroom-gauge-wrapper">
            <div className="gauge-container">
              <div className="gauge-ring"></div>
              <div className="gauge-inner">
                <span className="temp-value">
                  19.2<span className="degree">°C</span>
                </span>
                <span className="gauge-label">
                  Luftfuktighet: 48%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">Arbetsrum</span>
            <span className="floor-badge">Våning 2</span>
          </div>
          <div className="bedroom-gauge-wrapper">
            <div className="gauge-container">
              <div className="gauge-ring"></div>
              <div className="gauge-inner">
                <span className="temp-value">
                  18<span className="degree">°C</span>
                </span>
                <span className="gauge-label">
                  Luftfuktighet: 51%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">Garage</span>
            <span className="floor-badge">Källare</span>
          </div>
          <div className="bedroom-gauge-wrapper">
            <div className="gauge-container">
              <div className="gauge-ring"></div>
              <div className="gauge-inner">
                <span className="temp-value">
                  15<span className="degree">°C</span>
                </span>
                <span className="gauge-label">
                  Luftfuktighet: 50%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card date-card">
          <div className="date-card-content">
            <span className="date-day-number">09</span>
            <div className="date-meta">
              <span className="date-weekday">Tisdag</span>
              <span className="date-month-year">Juni 2026</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">&Ouml;vriga Zoner</span>
            <button className="card-icon">
              <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="zones-list">
            <div className="zone-item">
              <div className="zone-left">
                <div className="zone-icon">
                  <BookOpen size={16} />
                </div>
                <div className="zone-info">
                  <span className="zone-name">Arbetsrum</span>
                  <span className="zone-range">
                    <span className="indicator green"></span> 18°C-26°C
                  </span>
                </div>
              </div>
              <div className="zone-right">
                <span className="zone-temp">22.1°C</span>
                <span className="zone-status comfortable">Bekv&auml;mt</span>
              </div>
            </div>

            <div className="zone-item">
              <div className="zone-left">
                <div className="zone-icon">
                  <Truck size={16} />
                </div>
                <div className="zone-info">
                  <span className="zone-name">Garage</span>
                  <span className="zone-range">
                    <span className="indicator blue"></span> 15°C-25°C
                  </span>
                </div>
              </div>
              <div className="zone-right">
                <span className="zone-temp">15.5°C</span>
                <span className="zone-status cool">Svalt</span>
              </div>
            </div>

            <div className="zone-item">
              <div className="zone-left">
                <div className="zone-icon">
                  <Home size={16} />
                </div>
                <div className="zone-info">
                  <span className="zone-name">Hall</span>
                  <span className="zone-range">
                    <span className="indicator green"></span> 18°C-21°C
                  </span>
                </div>
              </div>
              <div className="zone-right">
                <span className="zone-temp">21.0°C</span>
                <span className="zone-status optimal">Optimalt</span>
              </div>
            </div>

            <div className="zone-item">
              <div className="zone-left">
                <div className="zone-icon">
                  <Archive size={16} />
                </div>
                <div className="zone-info">
                  <span className="zone-name">G&auml;strum</span>
                  <span className="zone-range">
                    <span className="indicator green"></span> Optimalt
                  </span>
                </div>
              </div>
              <div className="zone-right">
                <span className="zone-temp">19.0°C</span>
                <span className="zone-status optimal">Optimalt</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
