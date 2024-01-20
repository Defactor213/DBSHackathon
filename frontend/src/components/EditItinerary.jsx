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
import React, {useEffect, useRef, useState} from "react";
import {getRequest, patchRequest} from "../utilites/axios.js";

export default function EditItinerary(props) {

  const { itinerary, loadItinerary } = props
  const { itinerary_id, title, budget, country } = itinerary
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = useRef(null)

  const [newTitle, setNewTitle] = useState(title)
  const [newBudget, setNewBudget] = useState(budget)

  const [countries, setCountries] = useState([])

  useEffect(() => {
    try {
      const country = getRequest('/destination/getallcountry').then((res) => {
        // setCountries(res)
        console.log(res.Countries)
        setCountries(res.Countries)
      })
    } catch (err) {
      console.log(err)
    }
  }, [])

  const patchData = () => {
    patchRequest(`/itinerary/patchItinerary/${itinerary_id}`, {
      title: newTitle,
      budget: newBudget,
      country_id: 1
    }).then((res) => {
      loadItinerary()
    })

  }

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
                <Input type='text' value={newTitle} onChange={e => setNewTitle(e.target.value)} />
              </FormControl>
              <FormControl>
                <FormLabel>Budget</FormLabel>
                <Input type='text' value={newBudget} onChange={(e) => setNewBudget( e.target.value)}/>
              </FormControl>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Select>
                  {
                    countries.map((country) => (
                      <option key={country.id}>{country.name}</option>
                    ))
                  }
                </Select>
              </FormControl>
              <Button
                mt={4}
                onClick={patchData}
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