import React from "react"

import Layout from "../components/Layout"
import Metadata from "../components/metadata"

const index = props => {
  return (
    <Layout>
      <Metadata title="Home" description="this is my home page" />
      <h1>Homepage</h1>
      <h2>We learn gatsby.js</h2>
    </Layout>
  )
}

export default index
