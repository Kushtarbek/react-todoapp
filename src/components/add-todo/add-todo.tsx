import { collection, addDoc } from 'firebase/firestore';
import KeyboardEvent from 'react'
import TextField from '@mui/material/TextField';
import { db } from '../../firebase';

export const AddTodo = () => {
    const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            const inputValue = (event.target as HTMLInputElement).value;
            if(inputValue) {
                addDoc(collection(db, 'todos'), {
                    title: inputValue,
                    isCompleted: false,
                    userId: user?.uid,
                });
            }
        }
    };
    return (
        <TextField 
            id="input-with-sx"
            fullWidth
            label="Add Todo"
            variant="standard"
            onKeyPress={onKeyPress}
        />
    )
}