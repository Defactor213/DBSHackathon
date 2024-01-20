import React from 'react'
import { Stack, Button, ButtonGroup } from '@chakra-ui/react'
import TextInput from './TextInput.jsx'

const CreateItineraryForm = ({ firstFieldRef, onCancel, onClick, props }) => {
        return (
            <Stack spacing={4}>
                <FormControl>
                    <TextInput
                        label='Title'
                        id='title'
                        ref={firstFieldRef}
                        // defaultValue={props.title}
                    />
                </FormControl>
                <FormControl>
                    <TextInput 
                        label='Budget (SGD)' 
                        id='budget' 
                        // defaultValue={props.budget}
                    />
                </FormControl>
                <FormControl>
                    <TextInput 
                        label='Country' 
                        id='country' 
                        // defaultValue={props.country}
                    />
                </FormControl>
                <ButtonGroup display='flex' justifyContent='flex-end'>
                    <Button variant='outline' onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button colorScheme='teal' onClick={onClick}>
                        Save
                    </Button>
                </ButtonGroup>
            </Stack>
        )
    }

export default CreateItineraryForm