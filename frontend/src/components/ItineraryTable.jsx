import {Table, TableContainer, Tbody, Tr, Td, Th, Thead, Tfoot, Button, Flex} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import EditItinerary from "./EditItinerary.jsx";
import {useEffect, useState} from "react";
import {delRequest, getRequest} from "../utilites/axios.js";

export default function ItineraryTable(props) {

  const navigate = useNavigate()

  const [itinerary, setItinerary] = useState([])


  const deleteItinerary = (id) => {
    try {
      const result = delRequest(`/itinerary/deleteItinerary/${id}`).then((res) => {
        setItinerary((prev) =>
          itinerary.filter((itinerary) => itinerary.itinerary_id !== id)
        )
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    try {
      const result = getRequest('/itinerary/getItineraries/user').then((res) => {
        console.log(res.itinerary)
        setItinerary(res.itinerary)
      })
    } catch (err) {
      console.log(err)
    }
  },[])

  const tableTitles = ['Title', 'Budget', 'Country', 'Destination', 'Actions'];


  return (
    <>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              {
                tableTitles.map((title) => (<Th key={title}>{title}</Th>))
              }
            </Tr>
          </Thead>
          <Tbody>
            {
              itinerary.map((row) => (
                <Tr key={row.itinerary_id}>
                  <Td>{row.title}</Td>
                  <Td>{`$${row.budget}`}</Td>
                  <Td>{row.country_id}</Td>
                  <Td>{row.destination_names}</Td>

                    <Td>
                      <Flex gap={2}>
                            <Button onClick={() => navigate(`showitinerary?id=${row.itinerary_id}`)}  colorScheme={'green'} variant='outline'>View</Button>
                            <EditItinerary itinerary={row}/>
                        <Button colorScheme={'red'} variant='outline' onClick={() => deleteItinerary(row.itinerary_id)}>Delete</Button>
                      </Flex>
                    </Td>

                </Tr>
              ))
            }
          </Tbody>
          <Tfoot>
            <Tr>
              {
                tableTitles.map((title) => (<Th key={title}>{title}</Th>))
              }
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  )
}