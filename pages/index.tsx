import { useState, FormEvent } from 'react';
import { Flex, Image, Button, Text } from '@chakra-ui/core'
import Input from '../components/Input'
import axios from 'axios';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSignUpToNewsletter(event: FormEvent) {
    event.preventDefault();

    axios.post('/api/subscribe', { name, email });
  }

  return (
    <Flex
      as="main"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        as="form"
        onSubmit={handleSignUpToNewsletter}
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%" 
        maxW="400px"
      >
        <Image size={220} alignSelf="center" src="/logo.png" alt="Leandro Moro" />

        <Text textAlign="center" fontSize="sm" color="gray.400" marginBottom={3}>
          Assine minha newsletter e receba os melhores conteúdos sobre devops e programação!
        </Text>

        <Input
          placeholder="Nome completo"
          marginTop={2}
          value={name}
          borderBottomColor="#4bd16f"
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="Seu principal e-mail"
          marginTop={2}
          value={email}
          borderBottomColor="#4bd16f"
          onChange={e => setEmail(e.target.value)}
        />

        <Button
          type="submit"
          backgroundColor="#4bd16f"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: '#7e7e7e' }}
        >
          INSCREVER
        </Button>
      </Flex>
    </Flex>
  )
}