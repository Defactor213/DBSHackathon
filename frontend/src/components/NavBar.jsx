import {
	Box,
	Flex,
	HStack,
	IconButton,
	Stack,
	useColorModeValue,
	useDisclosure,
	Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";

const NavLink = (props) => {
	let children;
	({ children } = props);
	return (
		<Box
			as="a"
			px={2}
			py={1}
			rounded={"md"}
			_hover={{
				textDecoration: "none",
				bg: useColorModeValue("gray.200", "gray.700"),
			}}
			href={"#"}>
			{children}
		</Box>
	);
};

const Links = ["Dashboard"];

export default function NavBar(props) {
	const navigate = useNavigate();

	const signOut = () => {
		// Clear the JWT token from localStorage or any other user-related data
		localStorage.clear();

		// Redirect the user to the login page
		navigate("/login");
	};

	const { isOpen, onOpen, onClose } = useDisclosure();
	const { user } = props;
	const firstName = localStorage.getItem("firstName");
	const lastName = localStorage.getItem("lastName");
	return (
		<Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
			<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
				<IconButton
					size={"md"}
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label={"Open Menu"}
					display={{ md: "none" }}
					onClick={isOpen ? onClose : onOpen}
				/>
				<HStack spacing={8} alignItems={"center"}>
					<HStack
						as={"nav"}
						spacing={4}
						display={{ base: "none", md: "flex" }}>
						{Links.map((link) => (
							<NavLink key={link}>{link}</NavLink>
						))}
					</HStack>
				</HStack>
				<Flex alignItems={"center"}>
					{firstName + " " + lastName}
					<Button
						colorScheme="red"
						style={{ marginLeft: "10px" }}
						onClick={signOut}
						component={Link}
						to="/login">
						Sign out
					</Button>
				</Flex>
			</Flex>

			{isOpen ? (
				<Box pb={4} display={{ md: "none" }}>
					<Stack as={"nav"} spacing={4}>
						{Links.map((link) => (
							<NavLink key={link}>{link}</NavLink>
						))}
					</Stack>
				</Box>
			) : null}
		</Box>
	);
}
