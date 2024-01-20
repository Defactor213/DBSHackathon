import {
	FocusLock,
	Button,
	Popover,
	PopoverArrow,
	PopoverCloseButton,
	PopoverContent,
	PopoverTrigger,
	useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import CreateDestinationForm from "./CreateDestinationForm.jsx";

export default function CreateDestinationPopover(props) {
	const { onOpen, onClose, isOpen } = useDisclosure();
	const firstFieldRef = useRef(null);
	return (
		<div style={{ textAlign: "center" }}>
			<Popover
				isOpen={isOpen}
				initialFocusRef={firstFieldRef}
				onOpen={onOpen}
				onClose={onClose}
				placement="right"
				closeOnBlur={false}>
				<PopoverTrigger>
					<Button size="sm"> Create New Destination </Button>
				</PopoverTrigger>
				<PopoverContent p={5}>
					<FocusLock returnFocus persistentFocus={false}>
						<PopoverArrow />
						<PopoverCloseButton />
						<CreateDestinationForm
							firstFieldRef={firstFieldRef}
							onCancel={onClose}
							props={props}
							onClose={onClose}
						/>
					</FocusLock>
				</PopoverContent>
			</Popover>
		</div>
	);
}
