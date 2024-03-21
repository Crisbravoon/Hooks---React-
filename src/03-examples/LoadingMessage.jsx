import { CircularProgress } from '@mui/material';
import React from 'react'

export const LoadingMessage = () => {
    return (

        <section className='mx-auto d-flex align-items-center text-center justify-content-center'>
            <CircularProgress color="secondary" />
        </section>
    )
};
