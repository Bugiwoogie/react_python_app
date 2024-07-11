import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { hideSignUp } from '../../redux/reducers/uiSlice';

function Sign_up() {
    const dispatch = useDispatch();
    dispatch(hideSignUp())

    return (
        <Fragment>
            <div>Sign_up</div>
        </Fragment>
    )
}

export default Sign_up