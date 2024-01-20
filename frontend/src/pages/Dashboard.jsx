'use client'

import {
  Flex,
} from '@chakra-ui/react'

import ItineraryTable from "../components/ItineraryTable.jsx";
import NavBar from "../components/NavBar.jsx";
import CreateItineraryPopover from '../components/CreateItineraryPopover.jsx';
import {getRequest} from "../utilites/axios.js";
import {useState} from "react";

export default function Dashboard(props) {
  // const { user } = props;
  const [itinerary, setItinerary] = useState([])
  const loadItinerary = () => {
    try {
      const result = getRequest('/itinerary/getItineraries/user').then((res) => {

        setItinerary(res.itinerary)
      })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <Flex p={4} flexDirection={'column'}>
        <NavBar user={'testUser'}/>
        <ItineraryTable itinerary={itinerary} loadItinerary={loadItinerary} setItinerary={setItinerary}/>
      </Flex>
        <CreateItineraryPopover loadItinerary={loadItinerary} />
    </>
  )
}