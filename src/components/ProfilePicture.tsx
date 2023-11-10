import { useStaticQuery, graphql } from "gatsby";
import React from "react";

const ProfilePicture: React.FC = () => {
  const data = useStaticQuery(getProfilePicture);
  return (
    <section className="ProfilePicture">
      <img
        alt="My picture!"
        src={data.allImageSharp.edges[0].node.fluid.srcWebp}
      />
    </section>
  );
};

const getProfilePicture = graphql`
  query GetProfilePicture {
    allImageSharp(
      filter: { fluid: { originalName: { eq: "alvbarros.png" } } }
    ) {
      edges {
        node {
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            originalImg
            originalName
          }
        }
      }
    }
  }
`;

export default ProfilePicture;
