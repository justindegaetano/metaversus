'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

/**
 * TypingText component displays animated text.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The text to be displayed.
 * @param {string} props.textStyles - Additional CSS classes for styling.
 * @returns {JSX.Element} The TypingText component.
 */
export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((Letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {Letter === '' ? '\u00A0' : Letter}
      </motion.span>
    ))}
  </motion.p>
);

/**
 * TitleText component displays a title with animation.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title text to be displayed.
 * @param {string} props.textStyles - Additional CSS classes for styling.
 * @returns {JSX.Element} The TitleText component.
 */
export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);

