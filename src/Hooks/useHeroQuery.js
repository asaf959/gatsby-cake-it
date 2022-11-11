import { graphql, useStaticQuery } from 'gatsby'

export const useHeroQuery = () => {
const data = useStaticQuery(graphql`
query HeroQuery {
  wpPage(databaseId: {eq: 47}) {
    id
    ACF_HomePage {
      heroText
      heroImage {
        localFile {
          childrenImageSharp {
            gatsbyImageData(width: 1920, layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
}
`)

  return data
}
