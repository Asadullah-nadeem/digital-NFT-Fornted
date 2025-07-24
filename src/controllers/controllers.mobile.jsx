import React, { useEffect, useState } from "react";

const isMobileDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return (
    /mobile|iphone|ipod|android|windows phone|tablet|ipad/g.test(userAgent) ||
    window.innerWidth < 768
  );
};

const ControllerMobile = () => {
  const [showMobilePopup, setShowMobilePopup] = useState(false);

  useEffect(() => {
    const popupSeen = localStorage.getItem("mobilePopupSeen");
    if (isMobileDevice() && !popupSeen) {
      setShowMobilePopup(true);
    }
  }, []);

  const handleClose = () => {
    setShowMobilePopup(false);
    localStorage.setItem("mobilePopupSeen", "true");
  };

  return (
    <>
      {showMobilePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-400 dark:text-gray-400">
                  This feature is not available on mobile devices. Please use a
                  laptop or another supported device.
                </h3>
                <button
                  onClick={handleClose}
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ControllerMobile;
