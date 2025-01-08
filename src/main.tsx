import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NavBar from './components/NavBar.tsx'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer.tsx'
import { Provider } from 'react-redux'
import store from './context/redux/store.ts'
import ContextWrapper from './context/ContextWrapper.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400"> */}
    <ContextWrapper>
    <Provider store={store}>
    <div>

    <BrowserRouter>
    <NavBar></NavBar>
    <App />
    <Footer></Footer>
    </BrowserRouter>    
    </div>
    </Provider>
    </ContextWrapper>
  </StrictMode>,
)
