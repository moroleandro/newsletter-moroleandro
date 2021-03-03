import { Flex, Image, Link, Text } from '@chakra-ui/core'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Home() {

  return (
    <Flex
      as="main"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="center"
        padding={8}
        width="100%" 
        maxW="400px"
      >
        <Image size={220} alignSelf="center" src="/logo.png" alt="Leandro Moro" />
        <Text textAlign="center" color="gray.400" marginBottom={10}>
          <b>Atenção!</b> O email de confirmação que acabamos de enviar possivelmente caiu na caixa de Spam ou em Promoções do seu e-mail.
        </Text>
        <Flex>
        <Link color="#8B0000" href="https://gmail.com" isExternal={true}>
          <ExternalLinkIcon mx="2px" />Acessar Gmail 
        </Link>
        <Text>&nbsp;&nbsp;&nbsp;</Text>
        <Link color="#0078d4" href="https://outlook.live.com/" isExternal={true}>
          <ExternalLinkIcon mx="2px" />Acessar Outlook 
        </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}