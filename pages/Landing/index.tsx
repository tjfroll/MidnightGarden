import React from 'react'
import LandingHeader from './LandingHeader'
import LandingTile from './LandingTile'
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <article className={styles.article}>
      <LandingTile
        name="who"
      />
      <LandingTile
        name="what"
      />
      <LandingTile
        name="how"
      />
      <LandingTile
        name="why"
      />
      <LandingHeader />
      <LandingTile
        name="who"
      />
      <LandingTile
        name="what"
      />
      <LandingTile
        name="how"
      />
      <LandingTile
        name="why"
      />
    </article>
  )
}
export default Landing