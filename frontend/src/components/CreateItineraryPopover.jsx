import {
    FocusLock,
    Button,
    Popover,
    PopoverArrow,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger, useDisclosure
  } from "@chakra-ui/react";
import CreateItineraryForm from "./CreateItineraryForm";
import {useRef} from "react";
  
export default function CreateItineraryPopover(props) {
const { onOpen, onClose, isOpen } = useDisclosure()
const firstFieldRef = useRef(null)
return (
    <div style={{textAlign: "center"}}>
    <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
    >
        <PopoverTrigger>
        <Button size='sm'> Create New Itinerary </Button>        
        </PopoverTrigger>
        <PopoverContent p={5}>
        <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow/>
            <PopoverCloseButton/>
            <CreateItineraryForm firstFieldRef={firstFieldRef} onCancel={onClose}/>
        </FocusLock>
        </PopoverContent>
    </Popover>
    </div>
)
}