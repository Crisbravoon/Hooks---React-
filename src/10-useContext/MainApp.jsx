
import React from 'react'
import { Navbar } from './Navbar'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
    return (
        <>
            <UserProvider>
                <Navbar />
                <hr />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="*" element={<img width="830" className='flex d-flex mx-auto justify-content-center' src='./image.png' />} />
                </Routes>
            </UserProvider>
        </>
    )
}
