import React, { useState, useEffect } from 'react';
import { Form, Button} from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export default function Update() {
    let history = useHistory();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [id, setID] = useState('');

    useEffect(() => {
        setTitle(localStorage.getItem("title"));
        setCategory(localStorage.getItem("category"));
        setID(localStorage.getItem("ID"));

}, []);

    console.log(id);
    console.log(title);
    console.log(category);
    const sendDatatoAPI = () => {
        axios.put('https://643d54cff0ec48ce90596036.mockapi.io/Crud/$(ID)', {
            id,
            title,
            category
        }).then(()=>{
            history.push('/read')
        })
    }

  return (
    <div>
        <Form className='create-form'>
        <Form.Field>
                <label>ID</label>
                <input placeholder='id' value={id}
                 onChange={(e) => setID(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Title</label>
                <input placeholder='title' value={title}
                 onChange={(e) => setTitle(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Category</label>
                <input placeholder='category' value={category}
                 onChange={(e) => setCategory(e.target.value)} />
            </Form.Field>

            <Button type='submit' onClick={sendDatatoAPI}>Update</Button>
            </Form>
    </div>
  )
}

