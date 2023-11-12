import React from "react";

import { faDownload, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ShareProfile = () => {
  return (
    <section className="ShareProfile">
      <h1> ShareProfile my profile </h1>
      <ul>
        <li className="mobile-only clickable">
          <FontAwesomeIcon icon={faPaperPlane} /> Share profile link
        </li>
        <li className="clickable">
          <FontAwesomeIcon icon={faDownload} /> Download as PDF file
        </li>
        <li>[QR Code]</li>
      </ul>
    </section>
  );
};
export default ShareProfile;