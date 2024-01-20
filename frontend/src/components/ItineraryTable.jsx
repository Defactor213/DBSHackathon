import {Table, TableContainer, Tbody, Tr, Td, Th, Thead, Tfoot, Button, Flex} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import EditItinerary from "./EditItinerary.jsx";

export default function ItineraryTable(props) {

  const navigate = useNavigate()


  const tableTitles = ['Title', 'Budget', 'Country', 'Destination', 'Actions'];
  const data = [
    {
      id: 1,
      title: 'First Trip',
      budget: '10.00',
      country: 'Singapore',
      destination: ['Marina Bay Sands', 'Gardens by the Bay']
    },
    {
      id: 2,
      title: 'Second Trip',
      budget: '20.00',
      country: 'Singapore',
      destination: ['Marina Bay Sands', 'Gardens by the Bay']
    },
    {
      id: 3,
      title: 'Third Trip',
      budget: '30.00',
      country: 'Singapore',
      destination: ['Marina Bay Sands', 'Gardens by the Bay']
    }
  ]

  return (
    // <Flex flexDirection='column' borderColor={'white'} border={1} borderWidth={1}>
    //   <Heading size='lg'>Itinerary Title</Heading>
    //   <Text>Budget</Text>
    //   <Text>Country</Text>
    //
    // </Flex>
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
              data.map((row) => (
                <Tr key={row.title}>
                  <Td>{row.title}</Td>
                  <Td>{`$${row.budget}`}</Td>
                  <Td>{row.country}</Td>
                  <Td>{row.destination.join(", ")}</Td>

                    <Td>
                      <Flex gap={2}>
                            <Button onClick={() => navigate(`showitinerary?id=${row.id}`)}  colorScheme={'green'} variant='outline'>View</Button>
                            <EditItinerary itinerary={row}/>
                        <Button colorScheme={'red'} variant='outline'>Delete</Button>
                      {/*{*/}
                      {/*  buttons.map((button) => (*/}
                      {/*    <Button key={button.text} onClick={() => button.onClick(row.id)}  colorScheme={button.color} variant='outline'>{button.text}</Button>*/}
                      {/*  ))*/}
                      {/*} */}
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