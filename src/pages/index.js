import { useRouter } from 'next/router'
import { useState } from 'react';

import { Box, Button, Flex, Image, Input, Select, Text, Textarea } from '@chakra-ui/react'
import { RiInstagramLine } from 'react-icons/ri'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from 'react-modern-calendar-datepicker';
import { getDate, getMonth, getYear } from 'date-fns';
const Home = () => {
  const router = useRouter()
  const defaultValue = {
    year: getYear(new Date()),
    month: getMonth(new Date()) + 1,
    day: getDate(new Date()),
  };
  const [selectedDay, setSelectedDay] = useState(defaultValue);

  return (
    <Box>
      <Flex w="100%" justifyContent="space-between" alignItems="center">
        <Box>
          <Text
            fontFamily="Rubik; sans-serif"
            fontWeight={400}
            fontSize={50}
          >Clínica Weffort
          </Text>
          <Text
            fontFamily="Rubik; sans-serif"
            fontWeight={400}
            mt="4"
            w="500px"
            fontSize={18}>
            <Text as="span" fontWeight="bold" color="cyan.400">Lorem</Text> Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  <Text as="span" fontWeight="bold" color="cyan.400">1500s</Text> , when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Text>

          <Button size="md" fontSize={16} fontWeight="500" colorScheme="blue" mt="4">Ler Mais</Button>
        </Box>
        <Image w="310px" src="tiofotos/3.png" />
      </Flex>

      <Flex bg="rgba(0, 0, 0, 0.1)" p="8" borderRadius="20" mt="12" mb="12" w="100%" justifyContent="space-between" alignItems="center">
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          borderRadius="10px" p="4" bg="#fff" >
          <Text
            textAlign="center"
            fontFamily="Rubik; sans-serif"
            fontWeight={500}
            fontSize={18}
            w="250px"
            mb="4"
          >
            Limpeza de pele
          </Text>
          <Image src="service2.jpeg" w="250px" />
          <Button w="100%" size="md" fontSize={16} fontWeight="500" colorScheme="blue" mt="4">Visualizar</Button>
        </Flex>

        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          borderRadius="10px" p="4" bg="#fff" >
          <Text
            textAlign="center"
            fontFamily="Rubik; sans-serif"
            fontWeight={500}
            fontSize={18}
            w="250px"
            mb="4"
          >
            Preenchimento Labial
          </Text>
          <Image src="service1.jpeg" w="250px" />
          <Button w="100%" size="md" fontSize={16} fontWeight="500" colorScheme="blue" mt="4">Visualizar</Button>
        </Flex>

        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          borderRadius="10px" p="4" bg="#fff" >
          <Text
            textAlign="center"
            fontFamily="Rubik; sans-serif"
            fontWeight={500}
            fontSize={18}
            w="250px"
            mb="4"
          >
            Botox
          </Text>
          <Image src="service1.jpeg" w="250px" />
          <Button w="100%" size="md" fontSize={16} fontWeight="500" colorScheme="blue" mt="4">Visualizar</Button>
        </Flex>
        </Flex>

        <Flex bg="rgba(0, 0, 0, 0.08)" p="8" borderRadius="20" mt="12" mb="12" w="100%" flexDir="column">
        <Text
          id="#contato"
          fontFamily="Rubik; sans-serif"
          fontWeight={500}
          fontSize={18}
          color="blue.500"
          mb="2"
        >Contato:
        </Text>
        <Text
          fontFamily="Rubik; sans-serif"
          fontWeight={500}
          fontSize={14}
          mb="2"
        >Instagram: <Text as="span" fontWeight="400"><a href="https://instagram.com/clinicaweffort">@clinicaweffort</a> </Text>
        </Text>
        <Text
          fontFamily="Rubik; sans-serif"
          fontWeight={500}
          fontSize={14}
          mb="2"
        >Telefone: <Text as="span" fontWeight="400"> (65) 99224-0857</Text>
        </Text>
        <Text
          fontFamily="Rubik; sans-serif"
          fontWeight={500}
          fontSize={14}
          ml="0.5"
          mb="4"
        >E-mail: <Text as="span" fontWeight="400"> clinicaweffort@gmail.com</Text>
        </Text>
        <Input bg="white" mb="4" placeholder="Nome:" />
        <Input bg="white" mb="4" placeholder="E-mail:" type="email" />
        <Textarea bg="white" mb="4" placeholder="Mensagem:" />

        <Flex justifyContent="space-between">
          <Box />
          <Button colorScheme="blue" w="200px">Enviar</Button>
        </Flex>
      </Flex>

      <Flex w="100%" justifyContent="space-between" alignItems="center">
        <Image w="310px" src="tio.png" />
        <Box>
          <Text
            fontFamily="Rubik; sans-serif"
            fontWeight={400}
            fontSize={50}
          >Dr. Luis Weffort
          </Text>
          <Text
            fontFamily="Rubik; sans-serif"
            fontWeight={400}
            mt="4"
            w="500px"
            fontSize={18}>
            <Text as="span" fontWeight="bold" color="cyan.400">Lorem</Text> Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  <Text as="span" fontWeight="bold" color="cyan.400">1500s</Text> , when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
          <Flex justifyContent="space-between">
            <Box />
            <Button size="md" fontSize={16} fontWeight="500" colorScheme="blue" mt="4">Ler Mais</Button>
          </Flex>
        </Box>

      </Flex>


        <Flex bg="rgba(0, 0, 0, 0.08)" p="8" borderRadius="20" mt="12" mb="12" w="100%" justifyContent="center" flexDir="column">
        <Text
          id="#contato"
          fontFamily="Rubik; sans-serif"
          fontWeight={500}
          fontSize={20}
          color="blue.500"
          mb="8"
        >Agendar Horário:
        </Text>

        <Flex justifyContent="space-between"> {/* or center*/}
          <Calendar
            minimumDate={utils().getToday()}
            value={selectedDay}
            onChange={setSelectedDay}
            shouldHighlightWeekends
            colorPrimary="blue"
          />

          <Flex flexDir="column">
            <Flex ml="16" mb="4">
              <Flex
                bg="white"
                w="100px"
                alignItems="center"
                justifyContent="center"
                borderRadius={10}
                h="30px">
                <Text
                  fontFamily="Rubik; sans-serif"
                  fontWeight={500}
                  fontSize={16}
                  color="blue.600"
                >08:00</Text>
              </Flex>

              <Flex
                bg="white"
                ml="4"
                w="100px"
                alignItems="center"
                justifyContent="center"
                borderRadius={10}
                h="30px">
                <Text
                  fontFamily="Rubik; sans-serif"
                  fontWeight={500}
                  fontSize={16}
                  color="blue.600"
                >10:00</Text>
              </Flex>

              <Flex
                bg="white"
                ml="4"
                w="100px"
                alignItems="center"
                justifyContent="center"
                borderRadius={10}
                h="30px">
                <Text
                  fontFamily="Rubik; sans-serif"
                  fontWeight={500}
                  fontSize={16}
                  color="blue.600"
                >12:00</Text>
              </Flex>
            </Flex>

            <Flex ml="16" mb="6">
              <Flex
                bg="white"
                w="100px"
                alignItems="center"
                justifyContent="center"
                borderRadius={10}
                h="30px">
                <Text
                  fontFamily="Rubik; sans-serif"
                  fontWeight={500}
                  fontSize={16}
                  color="blue.600"
                >15:00</Text>
              </Flex>

              <Flex
                bg="white"
                ml="4"
                w="100px"
                alignItems="center"
                justifyContent="center"
                borderRadius={10}
                h="30px">
                <Text
                  fontFamily="Rubik; sans-serif"
                  fontWeight={500}
                  fontSize={16}
                  color="blue.600"
                >17:00</Text>
              </Flex>

              <Flex
                bg="white"
                ml="4"
                w="100px"
                alignItems="center"
                justifyContent="center"
                borderRadius={10}
                h="30px">
                <Text
                  fontFamily="Rubik; sans-serif"
                  fontWeight={500}
                  fontSize={16}
                  color="blue.600"
                >18:00</Text>
              </Flex>
            </Flex>

            <Flex ml="16" flexDir="column">
              <Input mb="4" placeholder="Nome Completo:" bg="white" />
              <Select mb="4" placeholder="Tipo :" bg="white">
                <option value="">Botox</option>
                <option value="">Limpeza de pele</option>
              </Select>

              <Textarea mb="8" bg="white" placeholder="Mensagem:" />

              <Button colorScheme="blue">Agendar</Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>








    </Box>
  )
}

export default Home



