import React from "react";

import { faDownload, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

declare var navigator: Navigator;

export const ShareProfile = () => {
  return (
    <section className="ShareProfile">
      {navigator.canShare && navigator.canShare() ? (
        <>
          <h1> ShareProfile my profile </h1>
          <ul>
            <li className="mobile-only clickable">
              <FontAwesomeIcon icon={faPaperPlane} /> Share profile link
            </li>
          </ul>
        </>
      ) : (
        ""
      )}
    </section>
  );
};
export default ShareProfile;
