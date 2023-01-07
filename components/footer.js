import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer () {
  return (
    <footer className='bg-black border-t border-accent-2'>
      <Container>
        <div className='py-14 md:py-20 flex flex-col lg:flex-row items-center'>
          <h3 className='text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2'>
            Blog.
          </h3>
          <h4 className='lg:w-1/2 text-right'>
            Powered by Oscar Estrada copy&2023
          </h4>
        </div>
      </Container>
    </footer>
  )
}
