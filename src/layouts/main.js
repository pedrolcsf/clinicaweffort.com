import Head from 'next/head'

// Header
import Header from '../components/header'

import { Box, Container } from '@chakra-ui/react'
import Footer from '../components/footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb="8">
    <Head>
      <title>Clínica Weffort</title>
      <link rel="icon" href="/icon.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Megrim&family=Ubuntu+Condensed&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet" />
    </Head>
    <Header path={router.asPath} />
    {/* maxW certo é = container.md */}
      <Container maxW="container.lg" >
        {children}
      </Container>
    <Footer />
    </Box>
  )
}

export default Main
