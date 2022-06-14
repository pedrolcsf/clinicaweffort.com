import { Flex, Box, useColorModeValue, Button, Text } from '@chakra-ui/react'
import { RiGithubLine, RiInstagramLine, RiLinkedinLine, RiTwitterLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <>
    <Box color={useColorModeValue('#282a36', '#f8f8f2')} align="center" opacity={0.5} fontFamily='Ubuntu Condensed; sans-serif' mt="16" fontSize="sm">
      &copy; {new Date().getFullYear()} Clínica Weffort - Todos os direitos reservados.
    </Box>
    <Flex justifyContent="center" mt="2" alignItems="center" opacity={0.5} fontSize="sm">
      <Button
        as="a"
        cursor="pointer"
        href="https://www.instagram.com/clinicaweffort/"
        size="sm"
        ml="2"
      >
        <RiInstagramLine color={useColorModeValue('#282a36', '#f8f8f2')} />
        <Text ml="2" fontSize={12} fontWeight="400">Clínica Weffort</Text>
      </Button>

      <Button
        as="a"
        cursor="pointer"
        href="https://www.instagram.com/drluisweffort/"
        size="sm"
        ml="2"
      >
        <RiInstagramLine color={useColorModeValue('#282a36', '#f8f8f2')} />
        <Text ml="2" fontSize={12} fontWeight="400">Dr. Luis Weffort</Text>
      </Button>
    </Flex>
    </>

  )
}

export default Footer
