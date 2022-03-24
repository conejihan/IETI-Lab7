import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
    
    <React.StrictMode>
        <App />
        <body>
	<noscript>You need to enable JavaScript to run this app.</noscript>
	<div  id="root"></div>
		<script>
			if ('serviceWorker'  in  navigator) {
				window.addEventListener('load', function() {
					navigator.serviceWorker.register('worker.js').then(function(registration) 			{
					console.log('Worker registration successful', registration.scope);
				}, function(err) {
					console.log('Worker registration failed', err);
				}).catch(function(err) {
					console.log(err);
				});
				});
				} else {
					console.log('Service Worker is not supported by browser.');
				}
		</script>
</body>
    </React.StrictMode>,
    document.getElementById("root")
);
