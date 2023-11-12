import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";

import "../styles/global.scss";

/* Aside */
import ProfilePicture from "../components/ProfilePicture";
import ContactLinks from "../components/ContactLinks";
import Clock from "../components/Clock";

import Introduction from "../components/Introduction";
import Experiences from "../components/Experience";
import CollapsableMenu from "../components/CollapsableMenu";
import CollapseButton from "../components/CollapseButton";
import ShareProfile from "../components/ShareProfile";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="root">
      <aside>
        <CollapseButton />
        <CollapsableMenu>
          <ProfilePicture />
          <ContactLinks />
          <ShareProfile />
          <Clock />
        </CollapsableMenu>
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
