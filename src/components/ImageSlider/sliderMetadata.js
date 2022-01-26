import { useStaticQuery, graphql } from "gatsby"

export const useImageSliderMetadata = () => {
  const { allFrontpageYaml } = useStaticQuery(
    graphql`
        query GetFrontPageImages {
            allFrontpageYaml {
                nodes {
                    image {
                            childImageSharp {
                                gatsbyImageData(height: 800)
                        }
                    }
                }
            }
        }
    `
  )
  return allFrontpageYaml.nodes;
}