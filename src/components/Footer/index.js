import React from "react"

export default function Footer() {
  return (
    <footer>
      <h1>Footer</h1>© {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}
