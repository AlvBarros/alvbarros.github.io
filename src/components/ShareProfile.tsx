import React from "react";

import { faDownload, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ShareProfile = () => {
  return (
    <section className="ShareProfile">
      <h1> Share my profile </h1>
      <ul>
        <li className="clickable">
          <FontAwesomeIcon icon={faDownload} />
          <a download href="/Alvaro_Barros.pdf">
            Download PDF resume
          </a>
        </li>
        <li className="mobile-only clickable">
          <FontAwesomeIcon icon={faPaperPlane} /> Share profile link
        </li>
      </ul>
    </section>
  );
};
export default ShareProfile;
