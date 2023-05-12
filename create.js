import React, { useState } from 'react';
import { Form, Button} from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export default function Create() {
    let history = useHistory();
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    console.log(title);
    console.log(id);
    console.log(category);
    const sendDatatoAPI = () => {
        axios.post('https://643d54cff0ec48ce90596036.mockapi.io/Crud', {
            id,
            title,
            category
        }).then(() => {
            history.push('./read');
        })
    }
    return (
        <div>
            <Form>
            <Form.Field>
                <label>ID</label>
                <input name='id' onChange={(e) => setTitle(e.target.value)}
                 placeholder='id' />
            </Form.Field>
            <Form.Field>
                <label>Title</label>
                <input name='fname' onChange={(e) => setTitle(e.target.value)}
                 placeholder='Title' />
            </Form.Field>
            <Form.Field><label>Category</label>
                <input name='lname' onChange={(e) => setCategory(e.target.value)}
                placeholder='Category' />
            </Form.Field>

            <Button type='submit' onClick={sendDatatoAPI}>Submit</Button>
            </Form>
        </div>
    )
}



