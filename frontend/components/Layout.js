import React, { ReactNode } from "react"
import Link from "next/link"
import Head from "next/head"
import Sidebar from "./menus/sidebar"
import Nav from "./nav"

const Layout = ({ children, title = "This is the default title" }) => (
  <div style={{ display: "flex" }}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Sidebar />
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        marginLeft: "20rem",
      }}
    >
      <Nav />
      {children}
    </main>
  </div>
)

export default Layout
