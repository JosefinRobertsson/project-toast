import React from 'react';

// This hook is used to listen for an Escape key press and trigger a callback when it happens. In this app it's the "handleEscape" function in the ToastProvider component.

const useEscapeKey = (callback) => {
    React.useEffect(() => {

        const handleKeyDown = (event) => {
            if (event.code === 'Escape') {
                callback();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [callback]);
}

export default useEscapeKey;