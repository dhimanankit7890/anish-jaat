import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Lightbox({ image, onClose }) {
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [onClose])

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:border-gold hover:text-gold transition-all duration-300"
                    aria-label="Close"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                    </svg>
                </button>
                <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.85, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-5xl max-h-[90vh] w-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-contain rounded-xl"
                    />
                    {image.caption && (
                        <p className="text-center text-white/50 text-sm mt-4">{image.caption}</p>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
