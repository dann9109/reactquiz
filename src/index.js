
import ReactDOM from 'react-dom';
import App from './App'; // Change the import statement to match the case of the actual file name.
import { ModalProvider } from './context/modal-context';
import { ThemeProvider } from './context/theme-context';
import './index.css'

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<ThemeProvider><ModalProvider><App /></ModalProvider></ThemeProvider>);