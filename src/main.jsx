import { StyledEngineProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/Home/css/HomeLayout.css';
import './components/Home/css/PageSelect.css';
import './components/Home/css/ListingBnb.css';
import './components/Home/css/Map.css';
import './components/Home/css/HomeCardBnb.css';
import App from './App.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
     <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
     
        <App />
     
    </StyledEngineProvider>
    
  </StrictMode>,
)
