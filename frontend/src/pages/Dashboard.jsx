'use client'

import {
  Flex,
} from '@chakra-ui/react'

import ItineraryTable from "../components/ItineraryTable.jsx";
import NavBar from "../components/NavBar.jsx";
import CreateItineraryPopover from '../components/CreateItineraryPopover.jsx';

export default function Dashboard(props) {
  // const { user } = props;
  return (
    <>
      <Flex p={4} flexDirection={'column'}>
        <NavBar user={'testUser'}/>
        <ItineraryTable/>
      </Flex>
        <CreateItineraryPopover/>
    </>
  )
}