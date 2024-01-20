import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Text, Container, Button } from "@chakra-ui/react";
import axios from "axios";
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

// const backendUrl = "http://localhost:9000";

const ShowItinerary = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const queryParams = new URLSearchParams(location.search);
	const id = queryParams.get("id");

	const [itinerary, setitinerary] = useState("lorem ipsum");

	useEffect(() => {
		const fetchItinerary = async () => {
			try {
				const response = await axios
					.get
					// `${backendUrl}/transactions/${id}`
					();

				setitinerary(response.data);
			} catch (error) {
				console.error("Error fetching transaction:", error);
			}
		};

		fetchItinerary();
	}, [id]);

	return (
		<div>
			{/* add header here*/}
			<Container style={{ marginTop: "20px" }}>
				<Text variant="h5" gutterBottom>
					Itinerary Details
				</Text>
				{itinerary ? (
					<>
						<Text variant="body1">
							<strong>ID:</strong> {itinerary.id}
						</Text>
						<Text variant="body1">
							<strong>Description:</strong>{" "}
							{itinerary.description}
						</Text>
						<Text variant="body1">
							<strong>Amount:</strong> {itinerary.amount}
						</Text>

						<heading>Destinations</heading>
						<Table variant="striped" colorScheme="teal">
							<Tr>
								<Th>Number</Th>
								<Th>Name</Th>
								<Th>Cost</Th>
								<Th>Notes</Th>
								<Th>Actions</Th>
							</Tr>
							<Tr>
								<Td>1</Td>
								<Td>marina</Td>
								<Td>$10</Td>
								<Td>lorem</Td>
								<Button>Delete</Button>
							</Tr>
							<Tr>
								<Td>2</Td>
								<Td>test</Td>
								<Td>$20</Td>
								<Td>ipsun</Td>
								<Button>Delete</Button>
							</Tr>
						</Table>
					</>
				) : (
					<Text variant="body1">Loading...</Text>
				)}
				<br />
				<Button onClick={() => navigate("/homepage")}>
					Back to Itinerary List
				</Button>
			</Container>
		</div>
	);
};

export default ShowItinerary;
