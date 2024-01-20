import { useState } from "react";
import {
	Stack,
	Button,
	ButtonGroup,
	FormControl,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import TextInput from "../TextInput.jsx";
import { postRequest } from "../../utilites/axios.js";

const PopoverForm = ({ firstFieldRef, onCancel, onClick, props }) => {
	const [destID, setDestID] = useState(props.id); // [id, setter

	const handleUpdate = async (e) => {
		try {
			const path = `destination/update/${destID}`;
			const postData = {
				destination_name:
					document.getElementById("destination_name").value,
				destination_cost:
					document.getElementById("destination_cost").value,
				destination_notes:
					document.getElementById("destination_notes").value,
			};
			const result = await postRequest(path, postData);
			console.log("POST request successful:", result);
			// Handle the result as needed
		} catch (error) {
			// Handle errors
			console.error("Error making POST request:", error);
		}
	};

	return (
		<Stack spacing={4}>
			<TextInput
				label="Destination Name"
				id="destination_name"
				ref={firstFieldRef}
				defaultValue={props.name}
			/>
			<TextInput
				label="Cost"
				id="destination_cost"
				defaultValue={props.cost}
			/>
			<TextInput
				label="Notes"
				id="destination_notes"
				defaultValue={props.notes}
			/>
			<ButtonGroup display="flex" justifyContent="flex-end">
				<Button variant="outline" onClick={onCancel}>
					Cancel
				</Button>
				<Button colorScheme="teal" onClick={handleUpdate}>
					Save
				</Button>
			</ButtonGroup>
		</Stack>
	);
};

export default PopoverForm;
