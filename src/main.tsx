import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { MyCounterApp } from "./counter/components/MyCounterApp.tsx";
import {GifsApp} from "./GifsApp.tsx";

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifsApp/>
    {/*<MyCounterApp/>*/}
  </StrictMode>,
)
