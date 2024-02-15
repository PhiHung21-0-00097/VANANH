import React from "react";
import Homee from "./style/Homee.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="admin-home position-absolute">
        <div className="sidebar">
          <Link to={""} className="item">
            <i class="fas fa-house"></i>
            <div className="text">The app</div>
          </Link>
          <hr></hr>
          <Link to={""} className="item">
            <i class="fa-solid fa-border-all"></i>
            <div className="text">Dashboard</div>
          </Link>
          <Link to={""} className="item">
            <i class="fas fa-search"></i>
            <div className="text">Search</div>
          </Link>
          <Link to={""} className="item">
            <i class="fa-solid fa-chart-line"></i>
            <div className="text">Insights</div>
          </Link>
          <Link to={""} className="item">
            <i class="fa-regular fa-folder"></i>
            <div className="text">Docs</div>
          </Link>
          <Link to={""} className="item">
            <i class="fas fa-gear"></i>
            <div className="text">Settings</div>
          </Link>
        </div>
      </div>
    </>
  );
}
