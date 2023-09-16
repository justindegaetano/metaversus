'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Track friends around you and invite them to play together in the same world
          </>
        )}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h0-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-[40%] left-[10%] w-[150px] h-[120px] p-[6px] rounded-3xl bg-[#5d6680] flex">
          <div className="relative">
            <img
              src="upside-down.png"
              alt="upside down"
              className="relative w-full h-full rounded-3xl"
            />
            <div className="absolute bottom-9 left-3.5 w-[20px] h-[20px] rounded-full bg-[#5d6680]">
              <img
                src="people-01.png"
                alt="people"
                className="w-full h-full"
              />
            </div>
            <p className="absolute bottom-10 left-9 italic text-[9px] text-white">
              240 active players
            </p>
            <h2 className="absolute bottom-0 left-0 ml-3 mb-3 font-semibold text-[14px] text-white">
              The Upside Down
            </h2>
          </div>
        </div>
        <div className="absolute top-[5%] right-[20%] w-[150px] h-[120px] p-[6px] rounded-3xl bg-[#5d6680] flex">
          <div className="relative">
            <img
              src="hawkins-labs.png"
              alt="hawkins labs"
              className="relative w-full h-full rounded-3xl"
            />
            <div className="absolute bottom-9 left-3.5 w-[20px] h-[20px] rounded-full bg-[#5d6680]">
              <img
                src="people-03.png"
                alt="people"
                className="w-full h-full"
              />
            </div>
            <p className="absolute bottom-10 left-9 italic text-[9px] text-white">
              312 active players
            </p>
            <h2 className="absolute bottom-0 left-0 ml-3 mb-3 font-semibold text-[14px] text-white">
              Hawkins Labs
            </h2>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
