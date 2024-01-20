import {
	Box,
	Button,
	Container,
	Divider,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isHidden, setisHidden] = useState(true);

	const handleLogin = async (e) => {
		e.preventDefault();
		console.log(username, password);
		console.log("submited");

		// try {
		// 	const response = await axios.post(
		// 		"http://localhost:8000/user/userLogin",
		// 		{
		// 			username: username,
		// 			password: password,
		// 		}
		// 	);

		// const token = response.data.token;
		const token =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVtaWx5c21pdGgiLCJpZCI6MiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IlNtaXRoIiwiaWF0IjoxNzA1NzI3NjY0LCJleHAiOjE3MDU5MDA0NjR9.GwG4Z00DABbPUBB2Y9EUBT_oaTc4Z2LfqJk1LfUIWa4";
		const decodedToken = jwtDecode(token);
		for (const key in decodedToken) {
			const value = decodedToken[key];
			localStorage.setItem(key, value);
		}
    localStorage.setItem('token', token);
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	const setPasswordVisibility = () =>
		!isHidden ? setisHidden(true) : setisHidden(false);
	return (
		<Container
			maxW="lg"
			py={{
				base: "12",
				md: "24",
			}}
			px={{
				base: "0",
				sm: "8",
			}}>
			<Stack spacing="8">
				<Stack spacing="6">
					<Stack
						spacing={{
							base: "2",
							md: "3",
						}}
						textAlign="center">
						<Heading
							size={{
								base: "xs",
								md: "sm",
							}}>
							Log in to your account
						</Heading>
					</Stack>
				</Stack>
				<Box
					py={{
						base: "0",
						sm: "8",
					}}
					px={{
						base: "4",
						sm: "10",
					}}
					bg={{
						base: "transparent",
						sm: "bg.surface",
					}}
					boxShadow={{
						base: "none",
						sm: "md",
					}}
					borderRadius={{
						base: "none",
						sm: "xl",
					}}>
					<Stack spacing="6">
						<Stack spacing="5">
							<form onSubmit={handleLogin}>
								<FormControl>
									<FormLabel htmlFor="username">
										Username
									</FormLabel>
									<Input
										id="username"
										type="text"
										value={username}
										onChange={(e) =>
											setUsername(e.target.value)
										}
									/>
								</FormControl>
								<FormControl>
									<FormLabel htmlFor="password">
										Password
									</FormLabel>
									<InputGroup>
										<InputRightElement>
											<IconButton
												variant="text"
												aria-label={
													isHidden
														? "Mask password"
														: "Reveal password"
												}
												icon={
													isHidden ? (
														<HiEye />
													) : (
														<HiEyeOff />
													)
												}
												onClick={setPasswordVisibility}
											/>
										</InputRightElement>
										<Input
											id="password"
											type={
												isHidden ? "password" : "text"
											}
											value={password}
											onChange={(e) => {
												setPassword(e.target.value);
											}}
										/>
									</InputGroup>
								</FormControl>
								<HStack justify="space-between">
									<Button variant="text" size="sm">
										Forgot password?
									</Button>
								</HStack>
								<Stack spacing="6">
									<Button type="submit">Sign in</Button>
									<HStack>
										<Divider />
									</HStack>
								</Stack>{" "}
							</form>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Container>
	);
}
