import { useEffect } from "react";

const FlashMessage = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="bg-green-500 text-white px-6 py-3 rounded shadow-lg transition-opacity duration-300 animate-fade-in">
        {message}
      </div>
    </div>
  );
};

export default FlashMessage;
