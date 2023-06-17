import { Suspense } from 'react'
import HomePage from './HomePage'

export default function Home() {
  return <Suspense fallback={<p className='h-screen w-screen bg-black text-white text-5xl text-center'>loading...........</p>}><HomePage/></Suspense>
}
