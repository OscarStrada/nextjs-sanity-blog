import Container from './container'
import cn from 'classnames'
// import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert ({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-black border-accent-7': preview,
        'bg-black border-accent-2': !preview
      })}
    >
      <Container>
        <div className='py-2 text-center text-sm'>
          {preview
            ? (
              <>
                This page is a preview.{' '}
                <a
                  href='/api/exit-preview'
                  className='underline hover:text-cyan duration-200 transition-colors'
                >
                  Click here
                </a>{' '}
                to exit preview mode.
              </>
              )
            : (
              <>
                The source code for this blog is{' '}
                <a
                  href='https://github.com/OscarStrada/nextjs-sanity-blog'
                  className='underline hover:text-success duration-200 transition-colors'
                  target='_blank' rel='noreferrer'
                >
                  available on GitHub
                </a>
                .
              </>
              )}
        </div>
      </Container>
    </div>
  )
}
