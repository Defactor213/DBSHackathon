import React, {useEffect, useState} from 'react'
import { Stack, Button, ButtonGroup, FormControl, FormLabel, Select} from '@chakra-ui/react'
import TextInput from './TextInput.jsx'
import {getRequest, postRequest} from "../utilites/axios.js";

const CreateItineraryForm = ({ firstFieldRef, onCancel, loadItinerary }) => {
  const [title, setTitle] = React.useState('')
  const [budget, setBudget] = React.useState('')
  const [countries, setCountries] = useState([])

  const createItinerary = () => {
    try {
      const result = postRequest('/itinerary/postItinerary', {
        title: title,
        budget: budget,
        country_id: 1
      }).then((res) => {
        console.log(res)
        loadItinerary()
        onCancel()
      })
    } catch (err) {
      console.log(err)
    }
  }

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

        return (
            <Stack spacing={4}>
                    <TextInput
                        label='Title'
                        id='title'
                        ref={firstFieldRef}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                    <TextInput 
                        label='Budget (SGD)' 
                        id='budget' 
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        />
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
                <ButtonGroup display='flex' justifyContent='flex-end'>
                    <Button variant='outline' onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button colorScheme='teal' onClick={createItinerary}>
                        Save
                    </Button>
                </ButtonGroup>
            </Stack>
        )
    }

export default CreateItineraryForm