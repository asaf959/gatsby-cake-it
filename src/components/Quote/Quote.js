import React from 'react'
import { useQuoteQuery } from '../../Hooks/useQuoteQuery'
import QuoteImg from '../../images/quote.svg'
import { Wrapper, Content } from "./Quote.styles"


const Quote = () => {
  const data = useQuoteQuery();
  // const header = data.wpPage.ACF_HomePage.citat1Text
  // const text = data.wpPage.ACF_HomePage.citat1Author

  return (
    <Wrapper>
      <Content>
        <img src={QuoteImg} alt="quote" />
        <h6>{data.wpPage.ACF_HomePage.citat1Text}</h6>
        <p>{data.wpPage.ACF_HomePage.citat1Author}</p>
      </Content>
    </Wrapper>
  )
}

export default Quote