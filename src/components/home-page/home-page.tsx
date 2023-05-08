import React, { FC, useContext, useEffect, useState} from 'react';
import { db } from '../../firebase';
import { collection, 
    onSnapshot, 
    doc, deleteDoc,
    updateDoc, where, query, QuerySnapshot } from 'firebase/firestore';

enum FilterState {
    ALL = 'All',
    ACTIVE = 'Active',
    COMPLETED = 'Completed',
}

export const HomePage = () => {

    const [todos, setTodos ] = useState<Todo[] | null> (null);
    const [activeFilter, setActiveFilter] = useState<FilterState>( FilterState.ALL );

    useEffect(
        () => {
        const q = query(
            collection(db, 'todos'),
            where('userId', '==', user.uid)
        );

        const subscribeToTodos = () => {
            return onSnapshot(q, (querySnapshot) => {
                const todos: Todo[] = [];
                querySnapshot.forEach((doc) => {
                    const todoItem = {
                        id: doc.id,
                        ...doc.data(),
                    };
                    todos.push(todoItem as Todo);
                });
                setTodos(todos);
            });
        };

        const ubsub = subscribeToTodos();
        return unsub;
    }, []);

    const deleteTodo = (todo: Todo) => {
        if(todo.id) {
            deleteDoc(doc(db, 'todos', todo.id));
        }
    };

    const handleRadioCheck = (todo: Todo) => {
        if(todo.id) {
            const docReference = doc(db, 'todos', todo.id);
            updateDoc(docReference, {
                isCompleted: true
            });
        }
    };

    const filteredTodos = activeFilter === FilterState.ALL
        ? todos 
        : todos?.filter((todo) => {
            const filterCondition = activeFilter === FilterState.ACTIVE ? false : true;

            return todo.isCompleted === filterCondition;
        })


}