import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from 'react-modern-calendar-datepicker';
import { getDate, getMonth, getYear } from 'date-fns';
import { useState } from 'react'
import { Button, Flex, Input, Select, Text, Textarea } from '@chakra-ui/react';

const Agendar = () => {
  const defaultValue = {
    year: getYear(new Date()),
    month: getMonth(new Date()) + 1,
    day: getDate(new Date()),
  };
  const [selectedDay, setSelectedDay] = useState(defaultValue);


  return (
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
  )

}

export default Agendar
