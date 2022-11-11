import React from 'react'
import { useCTAAreaQuery } from '../../Hooks/useCTAAreaQuery'
import { Wrapper } from './CTAArea.styles'

const CTAArea = () => {
const { cta } = useCTAAreaQuery();
console.log(cta)

  return (
    <Wrapper>
      CTA Area
    </Wrapper>
  )
}

export default CTAArea


