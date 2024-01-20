import React from 'react'
import { Stack, Button, ButtonGroup, FormControl, FormLabel, Select} from '@chakra-ui/react'
import TextInput from './TextInput.jsx'

const CreateItineraryForm = ({ firstFieldRef, onCancel, onClick, props }) => {
        return (
            <Stack spacing={4}>
                    <TextInput
                        label='Title'
                        id='title'
                        ref={firstFieldRef}
                        // defaultValue={props.title}
                    />
                    <TextInput 
                        label='Budget (SGD)' 
                        id='budget' 
                        // defaultValue={props.budget}
                    />
                    <FormControl>
                        <FormLabel>Country</FormLabel>
                        <Select placeholder='Country'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                        </Select>
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