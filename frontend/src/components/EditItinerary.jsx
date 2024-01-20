import {
  Button, Flex,
  FocusLock, FormControl, FormLabel,
  IconButton, Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger, Select, useDisclosure
} from "@chakra-ui/react";
import {useRef} from "react";

export default function EditItinerary(props) {
  const { itinerary } = props
  const { id, title, budget, country } = itinerary
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
          <Button colorScheme={'edit'} variant='outline'>Edit</Button>
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow/>
            <PopoverCloseButton/>
            <Flex flexDirection='column' gap={4}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input type='text' />
              </FormControl>
              <FormControl>
                <FormLabel>Budget</FormLabel>
                <Input type='text' />
              </FormControl>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Select placeholder='Country'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </FormControl>
              <Button
                mt={4}
                type='submit'
              >
                Submit
              </Button>
            </Flex>

          </FocusLock>
        </PopoverContent>
      </Popover>
    </div>
  )
}