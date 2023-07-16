try {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
            if (registrations.length > 0) {
                var serviceWorker_found = registrations[0].active;
                if (serviceWorker_found) {
                    var serviceWorkerURL = serviceWorker_found.scriptURL;
                    console.log('Service Worker URL: ', serviceWorkerURL);
                    return 'Service Worker URL: ' + serviceWorkerURL;
                }
                console.log(serviceWorkerURL);
                return 'No service worker found.';
            }
            else {
                console.log('No service worker found.');
                return 'No service worker found.';
            }
        });
    }
    else {
        console.log('Service workers are not supported in this browser.');
    }
}
catch (error) {
    console.log('An error occurred:', error);
}