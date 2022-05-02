import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const { id } = useParams<{ id: string }>()
  return <Container>{id}</Container>
}

export default ProductPage
