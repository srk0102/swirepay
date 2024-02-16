import { useEffect } from 'react'

// import {  } from '../components'

export const ErrorPage = () => {

  useEffect(() => {
    document.title = 'Error Page';
  }, []);


  return (
    <>
      <main className="grid min-h-full place-items-center bg-gray-800 px-6 py-24 sm:py-32 lg:px-8 h-screen">
        <div className="text-center">
          <p className="text-base font-semibold text-green-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white-900 sm:text-5xl">Sacred Pathway Not Found </h1>
          <p className="mt-6 text-base leading-7 text-white-600">Apologies, the spiritual trail you seek eludes us – Return to the Temple Sanctity!</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Go back to Temple Sanctity
            </a>
            <a href="/contact" className="text-sm font-semibold text-white-900">
              contact digital monks <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
