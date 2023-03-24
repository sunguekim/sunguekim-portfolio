import { motion} from "framer-motion";


interface MotionProps {
    children: React.ReactNode
}

const MotionEffect = ({ children }: MotionProps) => {

    return (
        <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
        >
            {children}
        </motion.div>
    )
}


export default MotionEffect;