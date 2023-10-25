import React from 'react'
import ArticleList from '@/app/components/ArticleList'
import classes from "@/app/styles/page.module.scss"

const page = () => {
  return (
    <div className={classes.home}>
      <section>
        <ArticleList />
      </section>

      <aside className={classes.aside}>
      <div className={classes.about_me}>
        <h3 className={classes.title}>About Me</h3>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <div className={classes.category}>
        <h3 className={classes.title}>Category</h3>
        <ul className={classes.list}>
          <li>
            <a href="#">Technology</a>
          </li>
          <li>
            <a href="#">Automotive</a>
          </li>
          <li>
            <a href="#">Finance</a>
          </li>
          <li>
            <a href="#">Sports</a>
          </li>
        </ul>
      </div>
        </aside>
    </div>

  )
}

export default page