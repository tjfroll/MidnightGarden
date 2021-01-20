import React from 'react'

interface Props {
  name: string;
}

const LandingTile = ({ name }: Props) => {
  return (
    <section>
      {name}
    </section>
  )
}

export default LandingTile