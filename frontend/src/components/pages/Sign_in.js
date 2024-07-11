import React from 'react'
import { useDispatch } from 'react-redux';
import { hideSignIn } from '../../redux/reducers/uiSlice';

function Sign_in() {
    const dispatch = useDispatch();
    dispatch(hideSignIn())


    return (
        <div>Sign_in</div>
    )
}

export default Sign_in