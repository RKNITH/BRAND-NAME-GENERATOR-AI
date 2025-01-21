import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
export const Topbar = () => {
    return (
        <div className='fixed top-0 left-0 w-full bg-cblack flex justify-between md:px-56 px-5 md:py-8 py-5'>
            <Link href="/">
                <h1 className='uppercase md:text-4xl text-3xl font-semibold text-primary'>Business</h1>
            </Link>
            <Link href="https://developergoswami.com/" className='text-white hover:underline hover:text-primary flex gap-2 items-center'>
                By Developer Goswami
                <MoveRight />
            </Link>
        </div>
    )
}
