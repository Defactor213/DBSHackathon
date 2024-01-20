import {Box, Flex, HStack, IconButton, Stack, useColorModeValue, useDisclosure, Link,} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useNavigate} from "react-router-dom";

const Links = ['Dashboard']

export default function NavBar(props) {
  const username = localStorage.getItem("username")
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Link href={'/'}>Dashboard</Link>
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          {username}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}