import { motion } from 'framer-motion'

export default function PageLoader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
            <div className="flex flex-col items-center gap-6">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-14 h-14 rounded-full border-2 border-white/10 border-t-gold"
                />
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="font-display text-white/60 text-sm tracking-widest uppercase"
                >
                    LensArt Studio
                </motion.p>
            </div>
        </motion.div>
    )
}
