export function motionProps(i, direction, circInOut) {
  const motionProps = {
    initial: {
      opacity: 0,
      translateY: direction === 'up' ? -50 : direction === 'down' ? 50 : 0,
    },
    animate: { opacity: 1, translateY: 0 },
    exit: {
      opacity: 0,
      translateY: direction === 'up' ? -50 : direction === 'down' ? 50 : 0,
    },
    transition: {
      ease: circInOut == undefined ? 'circInOut' : 'circOut',
      delay: i * 0.1,
      duration: 0.6,
    },
  };

  return motionProps;
}
