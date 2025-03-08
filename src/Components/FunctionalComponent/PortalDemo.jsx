import React from "react";
import ReactDOM from "react-dom";

const PortalDemo = () => {
  return ReactDOM.createPortal(
    <div>Portals Demo</div>,
    document.getElementById("portal-root")
  );
};

export default PortalDemo;
