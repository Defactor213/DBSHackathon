import React from 'react'
import { Stack, Button, ButtonGroup, FormControl, FormLabel, Select} from '@chakra-ui/react'
import TextInput from './TextInput.jsx'

const CreateItineraryForm = ({ firstFieldRef, onCancel }) => {
    const [title, setTitle] = React.useState('')
    const [budget, setBudget] = React.useState('')
    const onClick = () => {
        // AXIOS POST REQUEST HERE
        onClose()
        return
    }
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