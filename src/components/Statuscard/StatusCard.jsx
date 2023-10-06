import React from "react";

import "./StatusCard.css";

const StatusCard = ({ count, icon, title }) => {
  return (
    <article className="status-card">
      <div className="status-card-icon">
        <i className={icon}></i>
      </div>
      <div className="status-card-info">
        <h4>{count}</h4>
        <span>{title}</span>
      </div>
    </article>
  );
};

export default StatusCard;
