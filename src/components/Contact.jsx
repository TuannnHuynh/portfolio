import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="my-12 text-center text-5xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -110 }}
          transition={{ duration: 0.6 }}
          className="my-4"
        >
          <i className="fa-solid fa-location-dot mr-2"></i>TP. Hồ Chí Minh
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 110 }}
          transition={{ duration: 0.6 }}
          className="my-4"
        >
          <i className="fa-solid fa-phone mr-2"></i>+84373460065
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 110 }}
          transition={{ duration: 0.6 }}
          className="my-4"
        >
          <i className="fa-solid fa-envelope mr-2"></i>
          huynhanhtuan8547@gmail.com
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
