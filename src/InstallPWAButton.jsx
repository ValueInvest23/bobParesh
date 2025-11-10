import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react'; // optional icon (npm install lucide-react)

const InstallPWAButton = ({ position = 'right' }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') console.log('App installed');
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-6 ${
        position === 'right' ? 'right-6' : 'left-6'
      } z-50`}
    >
      <button
        onClick={handleInstallClick}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-full shadow-lg shadow-blue-400/40 transition-all active:scale-95"
      >
        <Download size={18} />
        <span>Install App</span>
      </button>
    </div>
  );
};

export default InstallPWAButton;
