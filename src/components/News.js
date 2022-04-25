import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import styled from 'styled-components'

function News({ news }) {
  return (
    <NewsContainer>
      <BreadcrumbsContainer>
        <Breadcrumbs />
      </BreadcrumbsContainer>
      <NewsHeader>
        <NewsCategory>News</NewsCategory>
        <NewsTitle>{news.title}</NewsTitle>
      </NewsHeader>
      <NewsDate>
        {news.date}
      </NewsDate>
      <NewsContent>
        {news.content}
      </NewsContent>

    </NewsContainer>
  )
}

const NewsContainer = styled.div`
  margin: 35px 125px;
  width: 80%;`

const BreadcrumbsContainer = styled.div``

const NewsHeader = styled.div``

const NewsCategory = styled.h3`
  margin-top: 57px;
  margin-bottom: 20px;
  font-size: 1.6rem;
  font-weight: 700;
`

const NewsTitle = styled.h1`
  margin: 0;
  font-size: 6rem;
`

const NewsDate = styled.div`
  margin-top: 30px;
  text-transform: uppercase;
  font-size: 1.5rem;
  opacity: 0.8;
`
const NewsContent = styled.div`
  margin-top: 50px;
  font-size: 1.3rem;
`


export default News