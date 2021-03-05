import React from 'react'
import { GraphQLClient } from 'graphql-request'

const graphcms = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/cklweq1a4cm5j01xp7ojl0uob/master')

export async function getStaticProps(props) {
  const { page } = await graphcms.request(`
    query PageQuery($slug: String!) {
      page(where: { slug: $slug }) {
        title,
        content { html }
      }
    }
  `, { slug: props.params.slug }
  )
  return {
    props: {
      page
    }
  }
}


export async function getStaticPaths() {
  const { pages } = await graphcms.request(
    `
      {
        pages {
          slug
        }
      }
    `
  )

  return {
    paths: pages.map((page) => ({
      params: {
        slug: page.slug
      }
    })),
    fallback: false
  }
}

export default (props) => {
  const page = props.page
  return (
    <React.Fragment>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{__html: page.content.html}} />
    </React.Fragment>
  )
}
