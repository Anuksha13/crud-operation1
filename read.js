import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get('https://643d54cff0ec48ce90596036.mockapi.io/Crud')
            .then((getData) => {
                console.log(Response.data);
                setApiData(getData.data);
            }
            )

    }, []);

    // const setID = (id) => {
    //     console.log(id);
    //     localStorage.setItem('ID', id);
    // }

    const setData = (id, title, category) => {
        localStorage.setItem('ID', id);
        localStorage.setItem('title', title);
        localStorage.setItem('category', category);
    } 

    const getData = () => {
        axios.get('https://643d54cff0ec48ce90596036.mockapi.io/Crud')
            .then((getData) => {
                setApiData(getData.data);
            }
            )

    } 

    const onDelete = (id) => {
        axios.delete('https://643d54cff0ec48ce90596036.mockapi.io/Crud/${id}')
        .then(() => {
            getData();
        }
        )
    }

    return (
        <div>

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Category</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.title}</Table.Cell>
                                <Table.Cell>{data.category}</Table.Cell>
                                <Table.Cell>
                                    <Link to='./update'>
                                        <Button color='green' onClick={() => setData(data.id, data.title,data.category)}>
                                            Update
                                        </Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <link to='./delete'>
                                        <Button color='delete' onClick={() => onDelete(data.id)}>Delete</Button>
                                    </link>
                                </Table.Cell>
                            </Table.Row>


                        )
                    }
                    )}

                </Table.Body>
            </Table>

        </div>
    )
}
