import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';

// POP-UP notifications
import 'react-toastify/dist/ReactToastify.css';
import { Flip, ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
		<ToastContainer
			position="top-center"
			autoClose={1000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss={false}
			draggable
			transition={Flip}
			pauseOnHover={false}
			theme="light"
		/>
	</React.StrictMode>,
);
