import React from 'react'
import { Stack, Button, ButtonGroup } from '@chakra-ui/react'
import TextInput from './TextInput'

const PopoverForm = ({ firstFieldRef, onCancel }) => {
        return (
            <Stack spacing={4}>
                <TextInput
                    label='Destination'
                    id='destination'
                    ref={firstFieldRef}
                    defaultValue='Destination'
                />
                <TextInput label='Name' id='-name' defaultValue='A' />
                <ButtonGroup display='flex' justifyContent='flex-end'>
                    <Button variant='outline' onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button colorScheme='teal'>
                        Save
                    </Button>
                </ButtonGroup>
            </Stack>
        )
    }

export default PopoverForm