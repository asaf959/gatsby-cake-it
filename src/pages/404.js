import * as React from "react"

import SEO from "../components/SEO/SEO"

const NotFoundPage = () => (
  <div>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export const Head = () => <SEO title="404: Not Found" />

export default NotFoundPage
