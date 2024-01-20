import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Text, Container, Button } from "@chakra-ui/react";
import axios from "axios";

// const backendUrl = "http://localhost:9000";

const ShowItinerary = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const queryParams = new URLSearchParams(location.search);
	const id = queryParams.get("id");

	const [transaction, setTransaction] = useState(null);

	useEffect(() => {
		const fetchTransaction = async () => {
			try {
				const response = await axios.get(
					`${backendUrl}/transactions/${id}`
				);

				setTransaction(response.data);
			} catch (error) {
				console.error("Error fetching transaction:", error);
			}
		};

		fetchTransaction();
	}, [id]);

	return (
		<div>
			<Container style={{ marginTop: "20px" }}>
				<Text variant="h5" gutterBottom>
					Transaction Details
				</Text>
				{transaction ? (
					<>
						<Text variant="body1">
							<strong>ID:</strong> {transaction.id}
						</Text>
						<Text variant="body1">
							<strong>Description:</strong>{" "}
							{transaction.description}
						</Text>
						<Text variant="body1">
							<strong>Amount:</strong> {transaction.amount}
						</Text>
					</>
				) : (
					<Text variant="body1">Loading...</Text>
				)}
				<Button
					variant="outlined"
					color="primary"
					onClick={() => navigate("/homepage")}>
					Back to Transactions List
				</Button>
			</Container>
		</div>
	);
};

export default ShowItinerary;
