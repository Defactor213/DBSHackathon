import { Stack, Button, ButtonGroup, FormControl, FormLabel, Input } from '@chakra-ui/react'
import TextInput from '../TextInput.jsx'

const PopoverForm = ({ firstFieldRef, onCancel, onClick, props }) => {
    return (
        <Stack spacing={4}>
                <TextInput
                    label='Destination Name'
                    id='destination_name'
                    ref={firstFieldRef}
                    defaultValue={props.name}
                />
                <TextInput 
                    label='Cost' 
                    id='destination_cost' 
                    defaultValue={props.cost}
                />
                <TextInput 
                    label='Notes' 
                    id='destination_notes' 
                    defaultValue={props.notes}
                />
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

export default PopoverForm