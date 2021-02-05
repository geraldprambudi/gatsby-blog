import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <Layout>
      <h1>404: page not found</h1>
      <p>
        <Link to="/blog">Check out latest articles</Link>
      </p>
    </Layout>
  )
}

export default NotFound
