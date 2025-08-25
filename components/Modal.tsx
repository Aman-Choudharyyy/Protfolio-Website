
import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Set focus to the modal when it opens for accessibility
      modalRef.current?.focus();
    }

    // Cleanup the event listener on component unmount or when modal closes
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in-up"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[90vh] bg-rosewater dark:bg-deep-twilight rounded-lg shadow-xl m-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1} // Make the div focusable
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-blushed-linen dark:border-soft-graphite flex-shrink-0">
           <h2 className="text-2xl font-bold text-deep-rosewood dark:text-lavender-mist">{title}</h2>
           <button
            onClick={onClose}
            className="p-2 text-muted-cocoa dark:text-plum-grey rounded-full hover:bg-soft-petal dark:hover:bg-lavender-shadow focus:outline-none focus:ring-2 focus:ring-dusty-blush dark:focus:ring-violet-glow"
            aria-label="Close modal"
           >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
           </button>
        </div>
        {/* Modal Body */}
        <div className="overflow-y-auto p-6 md:p-8">
            {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
