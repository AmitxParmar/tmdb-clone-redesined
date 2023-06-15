"use client"
import React, { useState } from 'react'

import Header from '@/components/Header/Header'
type Props = {}

const HomePage = (props: Props) => {
    const [query, setQuery] = useState('');

    return (
        <main className='main-element relative h-screen overflow-y-scroll'>
            <Header setQuery={setQuery} />
        </main>
    )
}

export default HomePage