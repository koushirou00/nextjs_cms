import Link from 'next/link'
import classes from "@/app/Header.module.scss"
import React from 'react'

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <h1 className={classes.title}>
          <Link href={"/"}>Next.js13 blog</Link>
        </h1>
      </div>
      <div>
        <nav className={classes.nav}>
          <Link href={"/articles/new"} className={classes.new_link}>記事を書く</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header