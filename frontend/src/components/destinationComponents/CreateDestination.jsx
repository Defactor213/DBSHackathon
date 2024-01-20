import React from "react";
import {
	Box,
	Popover,
	PopoverTrigger,
	IconButton,
	PopoverContent,
	FocusLock,
	PopoverArrow,
	PopoverCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons"; // Add this line
import PopoverForm from "./PopoverForm";

const CreateDestinationPopover = () => {
	const { onOpen, onClose, isOpen } = useDisclosure();
	const firstFieldRef = React.useRef(null);
	return (
		<div>
			<Box display="inline-block" mr={3}>
				Destination A
			</Box>
			<Popover
				isOpen={isOpen}
				initialFocusRef={firstFieldRef}
				onOpen={onOpen}
				onClose={onClose}
				placement="right"
				closeOnBlur={false}>
				<PopoverTrigger>
					<IconButton size="sm" icon={<EditIcon />} />
				</PopoverTrigger>
				<PopoverContent p={5}>
					<FocusLock returnFocus persistentFocus={false}>
						<PopoverArrow />
						<PopoverCloseButton />
						<PopoverForm
							firstFieldRef={firstFieldRef}
							onCancel={onClose}
						/>
					</FocusLock>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default CreateDestinationPopover;
