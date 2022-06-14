import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const ContainerLogo = styled.span`
  display: inline-flex;
  align-items: center;
  height: 100px;
  padding: 10px;
  transition: 200ms ease;

  &:hover {
    transform: scale(0.98);
    opacity: 50%
  }

`

const Logo = ({ active }) => {
    const pathImg = `/logo-certa.png`
    const pathImg2 = `/loogo.png`
    // var pathImg = `/logos/logo${useColorModeValue('-dark', '-white')}.svg`

    // if(active === '/') {
    //   pathImg = '/logos/logo-rosa.svg'
    // }

    return (
      <Link href="/">
        <a>
          <ContainerLogo>
            <Image src={pathImg} width={200} height={150}  alt="Clínica Weffort" />

            {/* <Text
              ml="4"
              fontSize={24}
              color={useColorModeValue('#282a36', '#f8f8f2')}
              fontFamily='Ubuntu Condensed; sans-serif'
              fontWeight="bold"
            >
            Clínica Weffort
          </Text> */}
          {/* <Image src={pathImg2} width={52} height={50} alt="Clínica Weffort" /> */}
          </ContainerLogo>
        </a>
      </Link>
    )
}

export default Logo
