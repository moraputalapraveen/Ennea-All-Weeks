import React from 'react'
import { useQuery} from '@tanstack/react-query'
import axios from 'axios'
import styled from 'styled-components'

const Table=styled.table`
margin-top: 20px;
margin-left: 50px;
background-color: black;
`
const Thead=styled.thead`
 
  border: 1px solid black;
  background-color: aliceblue;
 
  
`
const Tbody=styled.tbody`
border: 1px dotted black;
background-color: chartreuse;
`
const Tr=styled.tr`
border :1px dotted black;
`

function fetching()
{
    return axios.get("https://jsonplaceholder.typicode.com/users")
    
}


export const Fetchdata = () => {

const {data,error,isLoading}=useQuery( 
    
    {
        queryKey:['users'],
        queryFn:fetching
    })
console.log(data)
if (isLoading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;


  return (
    <>
   {
    
        <Table>
            <Thead>
                <Tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phone</th>
                </Tr>
            </Thead>
            <Tbody>
    {
            data.data.map((item) => (
           
               <Tr>
                    <td key={item.id}>{item.id}</td>
                    <td>{item.name}</td>  
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </Tr>
            
        ))
    }
     </Tbody>
        </Table>
        
      
   }
    </>
  )

}