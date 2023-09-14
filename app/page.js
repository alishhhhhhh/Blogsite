import Blogss from '@/components/Blogss'
import Homes from '@/components/Homes'
import Search from '@/components/Search'
// import CardsPage from '@/components/card'
import Image from 'next/image'

export default function Home() {
  return (
  <div className=' h-screen'>
    <Search />
<Homes />
<Blogss/>
{/* <CardsPage/> */}
  </div>
  )
}
