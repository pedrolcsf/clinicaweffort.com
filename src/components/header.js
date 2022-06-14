import {
  Box,
  Heading,
  Flex,
  useColorModeValue,
  Link,
  useBreakpointValue,
  Button
} from '@chakra-ui/react'

import NextLink  from 'next/link'
import { RiMoreLine, RiToggleLine } from 'react-icons/ri'

import Logo from './logo'

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={undefined}
        color={active ? 'blue.500' : ''}
        mr="6"
        fontFamily="Rubik; sans-serif"
        fontSize="16"
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Header = (props) => {
  const { path } = props

  const active = path === '/' ? '/' : ''

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box
      w="100%"
    >
      <Flex
        as="header"
        w="100%"
        maxW="1100px"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Heading>
            <Logo active={active} />
          </Heading>
          <Box ml="16">
            <LinkItem href="/" path={path}>Home</LinkItem>
            <LinkItem href="/agendar" path={path}>Agendar Consulta</LinkItem>
            <LinkItem href="/sobre" path={path}>Sobre</LinkItem>
            <LinkItem href="#contato" path={path}>Contato</LinkItem>
          </Box>
        </Flex>

        <Flex alignItems="center">
          <Heading alignItems="center">
            <Button fontFamily="Rubik; sans-serif" colorScheme="blue" fontSize={15} fontWeight="400">Acessar Sistema</Button>
          </Heading>
        </Flex>
      </Flex>
    </Box>
    )
}

export default Header
