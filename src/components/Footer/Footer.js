import React from "react";
import EmbeddedEmail from "../Email/Email";
import "./Footer.css";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

// export default () => (

// );

export default function Footer() {
  return (
    <div>
      <h2>Footer</h2>

      <Popup trigger={<button> Trigger</button>} position="center">
        <EmbeddedEmail />
      </Popup>
    </div>
  );
}
