import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import "./PillNav.css";

interface NavItem {
  label: string;
  href: string;
}

interface PillNavProps {
  logo: string;
  items: NavItem[];
}

export default function PillNav({ logo, items }: PillNavProps) {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  return (
    <div className="pillnav-container">
      <nav className="pillnav">
        <img src={logo} alt="logo" className="pillnav-logo" />
        {items.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`pillnav-item ${isActive ? "active" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
        
        <div className="theme-dropdown">
          <button 
            className="theme-button"
            onClick={() => setShowThemeMenu(!showThemeMenu)}
          >
            {theme === 'light' ? '☀️' : '🌙'}
          </button>
          {showThemeMenu && (
            <div className="theme-menu">
              <button 
                className={`theme-option ${theme === 'light' ? 'active' : ''}`}
                onClick={() => { toggleTheme(); setShowThemeMenu(false); }}
              >
                ☀️ Claro
              </button>
              <button 
                className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => { toggleTheme(); setShowThemeMenu(false); }}
              >
                🌙 Oscuro
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
