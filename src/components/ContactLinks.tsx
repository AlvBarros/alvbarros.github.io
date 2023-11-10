import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faDev,
} from "@fortawesome/free-brands-svg-icons";

import data from "../data/contacts.json";
import { IconDefinition, IconName } from "@fortawesome/fontawesome-svg-core";

const contactLinks = data.contacts as {
  description: string;
  link: string;
  icon: string;
}[];

function iconToComponent(iconName: string): IconDefinition {
  return (
    {
      faEnvelope: faEnvelope,
      faGithub: faGithub,
      faLinkedin: faLinkedin,
      faDev: faDev,
    }[iconName] ?? faBug
  );
}

const ContactLinks: React.FC = () => {
  function redirect(link: string) {
    window.location.href = link;
  }

  const icon = "faGithub" as IconName;

  return (
    <section className="ContactLinks">
      <ul>
        {contactLinks.map((contact) => {
          return (
            <li key={contact.icon}>
              <FontAwesomeIcon
                icon={iconToComponent(contact.icon)}
                onClick={() => redirect(contact.link)}
              />
              <span onClick={() => redirect(contact.link)}>
                {" "}
                {contact.description}{" "}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ContactLinks;
