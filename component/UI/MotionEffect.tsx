import { motion } from "framer-motion";
import { useRouter } from "next/router"

interface MotionProps {
    children: React.ReactNode
}

const spring = {
    type: "spring",
    ease:0.33,
    damping: 20,
    stiffness: 100,
    when: "afterChildren"
};

const MotionEffect = ({ children }: MotionProps) => {
    const router = useRouter();
    return (
        <motion.div
            transition={spring}
            key={router.pathname}
            initial={{ 
                transform : `translateY(50px)`,
                opacity: 0 
            }}
            animate={{ transform : `translateY(0px)`, opacity: 1 }}
            exit={{ transform : `translateY(50px)`, opacity: 0 }}
            id="page-transition-container"
        >
            {children}
        </motion.div>
    )
}


export default MotionEffect;