import React from 'react'
import ReactDOM from 'react-dom/client'

import { AuxonaApp } from './AuxonaApp'

import './index.css'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuxonaApp />
        </BrowserRouter>
    </React.StrictMode>,
)
