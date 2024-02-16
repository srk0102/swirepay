import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PricingPageV1, PricingPageV2, ErrorPage } from '../pages'

export const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/v1'
            exact
            element={<PricingPageV1 />}
          />
          <Route
            path='/v2'
            exact
            element={<PricingPageV2 />}
          />
          <Route
            path='*'
            exact
            element={<ErrorPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}
