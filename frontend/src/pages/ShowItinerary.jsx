import { useLocation, useNavigate } from "react-router-dom";
import { Text, Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import EditDestination from "../components/destinationComponents/EditDestination.jsx";
import NavBar from "../components/NavBar.jsx";
import { useEffect, useState } from "react";
import { delRequest, getRequest } from "../utilites/axios.js";
import CreateDestinationPopover from "../components/destinationComponents/CreateDestinationPopover.jsx";

// const backendUrl = "http://localhost:9000";

const ShowItinerary = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const queryParams = new URLSearchParams(location.search);

	const itinerary = {
		destination1: { id: 1, name: "marina", cost: "10", notes: "lorem" },
		destination2: { id: 2, name: "test", cost: "10", notes: "lorem" },
	};
	const [destinations, setDestinations] = useState([{}]);

	useEffect(() => {
		try {
			const result = getRequest("/destination/viewAll").then((res) => {
				console.log(res["destinations "]);
				setDestinations(res["destinations "]);
			});
		} catch (err) {
			console.log(err);
		}
	}, []);

	const handleDelete = async (id) => {
		try {
			const result = await getRequest(`/destination/delete/${id}`);
			console.log("DELETE request successful:", result);
			// Handle the result as needed
		} catch (error) {
			// Handle errors
			console.error("Error making DELETE request:", error);
		}
	};

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
			<NavBar />

			<Heading style={{ textAlign: "left" }}>Itinerary Details</Heading>
			{itinerary ? (
				<>
					<div style={{ textAlign: "left" }}>
						<Text>
							<strong>Title:</strong> {itinerary.title}
						</Text>
						<Text>
							<strong>Budget:</strong> {itinerary.budget}
						</Text>
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
							{Object.values(destinations).map((destination) => (
								<Tr key={destination.id}>
									<Td>{destination.id}</Td>
									<Td>{destination.name}</Td>
									<Td>{destination.cost}</Td>
									<Td>{destination.notes}</Td>
									<Td>
										<EditDestination
											name={destination.name}
											cost={destination.cost}
											notes={destination.notes}
											id={destination.id}
										/>
									</Td>
									<Td>
										<div style={{ textAlign: "center" }}>
											<Button
												colorScheme={"red"}
												onClick={() =>
													handleDelete(destination.id)
												}>
												Delete
											</Button>
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
			<div style={{ textAlign: "right" }}>
				<CreateDestinationPopover />
			</div>
		</div>
	);
};

export default ShowItinerary;
