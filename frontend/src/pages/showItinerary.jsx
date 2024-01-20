import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Text, Container, Button } from "@chakra-ui/react";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import DestinationModal from "../components/destinationComponents/DestinationPopover";
import CreateDestinationPopover from "../components/destinationComponents/CreateDestination";

// const backendUrl = "http://localhost:9000";

const ShowItinerary = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const queryParams = new URLSearchParams(location.search);
	const id = queryParams.get("id");
	const itinerary = {
		destination1: { id: 1, name: "marina", cost: "10", notes: "lorem" },
		destination2: { id: 2, name: "test", cost: "10", notes: "lorem" },
	};
	const [showCreateDestination, setShowCreateDestination] = useState(false);

	// const [itinerary, setitinerary] = useState("lorem ipsum");

	// useEffect(() => {
	// 	const fetchItinerary = async () => {
	// 		try {
	// 			const response = await axios
	// 				.get
	// 				// `${backendUrl}/transactions/${id}`
	// 				();

	// 			// setitinerary(response.data);
	// 		} catch (error) {
	// 			console.error("Error fetching transaction:", error);
	// 		}
	// 	};

	// 	fetchItinerary();
	// }, [id]);

	return (
		<div>
			{/* add header here*/}

			<Heading style={{ textAlign: "left" }}>Itinerary Details</Heading>
			{itinerary ? (
				<>
					<div style={{ textAlign: "left" }}>
						<Text>
							<strong>ID:</strong> {itinerary.id}
						</Text>
						<Text>
							<strong>Title:</strong> {itinerary.title}
						</Text>
						<Text>
							<strong>Budget:</strong> {itinerary.budget}
						</Text>
						<Button>Edit Itinerary</Button>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}>
						<Heading size="md">Destinations</Heading>
						<Button onClick={() => navigate("/homepage")}>
							Back to Itinerary List
						</Button>
					</div>
					<Table variant="striped" colorScheme="teal">
						<Thead>
							<Tr>
								<Th>Number</Th>
								<Th>Name</Th>
								<Th>Cost</Th>
								<Th>Notes</Th>
								<Th>
									<div style={{ textAlign: "center" }}>
										Edit
									</div>
								</Th>
								<Th>
									<div style={{ textAlign: "center" }}>
										Delete
									</div>
								</Th>
							</Tr>
						</Thead>
						<Tbody>
							{Object.values(itinerary).map((destination) => (
								<Tr key={destination.id}>
									<Td>{destination.id}</Td>
									<Td>{destination.name}</Td>
									<Td>{destination.cost}</Td>
									<Td>{destination.notes}</Td>
									<Td>
										<div style={{ textAlign: "center" }}>
											<Button>Edit</Button>
										</div>
									</Td>
									<Td>
										<div style={{ textAlign: "center" }}>
											<Button colorScheme={"red"}>
												Delete
											</Button>
										</div>
									</Td>
								</Tr>
							</Thead>
							<Tbody>
								{Object.values(itinerary).map((destination) => (
									<Tr key={destination.id}>
										<Td>{destination.id}</Td>
										<Td>{destination.name}</Td>
										<Td>{destination.cost}</Td>
										<Td>{destination.notes}</Td>
										{/* both is popup/modal  */}
										<Td>
											<div
												style={{
													display: "flex",
													justifyContent:
														"space-between",
												}}>
												<Button
													style={{
														marginRight: "10px",
													}}>
													Update
												</Button>
												<Button>Delete</Button>
											</div>
										</Td>
									</Tr>
								))}
							</Tbody>
						</Table>
					</>
				) : (
					<Text variant="body1">Loading...</Text>
				)}
				<br />
			</Container>
		</div>
	);
};

export default ShowItinerary;
