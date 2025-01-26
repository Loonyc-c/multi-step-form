import { motion } from "framer-motion";
export default function StepFour({ setStep }) {

    return (
        <motion.div
        animate={{ x: [0, -100, 0] }}
        >
            <img src="logo.png" />
            <h2>You're All Set 🔥</h2>
            <p>We have received your submission. Thank you!</p>
        </motion.div>
    );
}