import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";

import "../styles/global.scss";

/* Aside */
import ProfilePicture from "../components/ProfilePicture";
import ContactLinks from "../components/ContactLinks";
import Clock from "../components/Clock";

/* Main */
import Introduction from "../components/Introduction";
import Experiences from "../components/Experience";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="root">
      <aside>
        <ProfilePicture />
        <ContactLinks />
        <Clock />
      </aside>
      <main>
        <Introduction />
        <Experiences />
      </main>
    </div>
  );
};
export const Head: HeadFC = () => <title>AlvBarros</title>;
export default IndexPage;
