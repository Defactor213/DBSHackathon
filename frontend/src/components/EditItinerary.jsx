import {
  Button,
  Flex,
  FocusLock,
  FormControl,
  FormLabel,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger, Select, useDisclosure
} from "@chakra-ui/react";
import {useRef, useState} from "react";

export default function EditItinerary(props) {
  const { itinerary } = props
  const { id, title, budget, country } = itinerary
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = useRef(null)

  const [newTitle, setNewTitle] = useState(title)
  const [newBudget, setNewBudget] = useState(budget)
  const [newCountryId, setNewCountryId] = useState(country)

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
                <Input type='text' value={newTitle} onClick={e => setNewTitle(e.value)} />
              </FormControl>
              <FormControl>
                <FormLabel>Budget</FormLabel>
                <Input type='text' value={newBudget} onClick={e => setNewBudget( e.value)}/>
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