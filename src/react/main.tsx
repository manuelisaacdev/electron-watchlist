import { HashRouter } from 'react-router';
import { createRoot } from 'react-dom/client';

import "@fontsource/nunito/200.css"; 
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/800.css";
import "@fontsource/nunito/900.css";
import './index.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <App />
    </HashRouter>,
)
