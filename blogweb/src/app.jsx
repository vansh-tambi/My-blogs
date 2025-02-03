import './app.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'


export function App() {


  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center background bg-no-repeat bg-cover'>
      <Header/>
      <Blogs/>
      <Pagination/>
        
    </div>
  )
}
