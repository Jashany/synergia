import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Ghost } from 'lucide-react'
export default function Home() {
  return(
    <>
    <p className='text-3xl font-bold text-indigo-600'>hello world</p>
    <Button variant={Ghost} className='bg-black text-white rounded-xl'>HELLO WORLD</Button>
    </>
  )
}
