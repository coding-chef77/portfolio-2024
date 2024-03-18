import { motion } from "framer-motion";
import Weather from "../../components/weather";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.6 },
  },
};

const WeatherPage = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Weather />
    </motion.div>
  );
};

export default WeatherPage;
