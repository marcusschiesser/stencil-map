const CALLBACK = 'initMap';

// @ts-ignore
let initialized = false;
let resolveInit;
let rejectInit;

const initPromise = new Promise((resolve, reject) => {
    resolveInit = resolve;
    rejectInit = reject;
});

export function gmapsInit(apiKey: string) {
    if (initialized) return initPromise;

    initialized = true;
    window[CALLBACK] = () => resolveInit();

    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${CALLBACK}`;
    script.onerror = rejectInit;
    document.querySelector('head').appendChild(script);

    return initPromise;
}
