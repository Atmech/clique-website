import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
          >
            <div className="relative w-full max-w-[90%] sm:max-w-[85%] md:max-w-2xl lg:max-w-3xl mx-auto" style={{ maxHeight: '90vh', minHeight: '200px' }}>
              <button
                onClick={onClose}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-7 h-7 sm:w-8 sm:h-8 bg-[#3C184E] rounded-full flex items-center justify-center text-white hover:bg-[#4A2B5C] transition-colors z-10 text-lg sm:text-xl"
              >
                ×
              </button>
              <div className="overflow-y-auto scrollbar-hide h-full" style={{ maxHeight: '90vh' }}>
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 