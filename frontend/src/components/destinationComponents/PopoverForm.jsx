import { useState } from 'react'
import { Stack, Button, ButtonGroup, FormControl, FormLabel, Input } from '@chakra-ui/react'
import TextInput from '../TextInput.jsx'

const PopoverForm = ({ firstFieldRef, onCancel, onClose, props }) => {
    const [destID, setDestID] = useState(props.id) // [id, setter
    const [destName, setDestName] = useState(props.name)
    const [destCost, setDestCost] = useState(props.cost)
    const [destNotes, setDestNotes] = useState(props.notes)
    const onClick = () => {
        // AXIOS PUT REQUEST HERE
      onClose()
      return
    }
    return (
        <Stack spacing={4}>
                <TextInput
                    label='Destination Name'
                    id='destination_name'
                    ref={firstFieldRef}
                    value={destName}
                    onChange={(e) => setDestName(e.target.value)}
                />
                <TextInput 
                    label='Cost' 
                    id='destination_cost' 
                    value={destCost}
                    onChange={(e) => setDestCost(e.target.value)}
                />
                <TextInput 
                    label='Notes' 
                    id='destination_notes' 
                    value={destNotes}
                    onChange={(e) => setDestNotes(e.target.value)}
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