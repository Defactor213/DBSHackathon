import React from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

const TextInput = React.forwardRef((props, ref) => {
        return (
            <FormControl>
                <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
                <Input ref={ref} id={props.id} {...props} />
            </FormControl>
        )
    })
    

export default TextInput