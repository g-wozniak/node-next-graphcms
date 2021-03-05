import Link from 'next/link'
import { GraphQLClient } from 'graphql-request'

export async function getStaticProps() {
  const graphcms = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/cklweq1a4cm5j01xp7ojl0uob/master')
  const { pages } = await graphcms.request(
    `
      {
        pages {
          id,
          title,
          content { html },
          slug
        }
      }
    `
  )
  return {
    props: {
      pages
    }
  }
}

export default (props) => {
  return props.pages.map((page) => {
    return (
      <Link key={page.slug} href={`/${page.slug}`}>
        <a>{page.title}</a>
      </Link>
    )
  })
}
