function debounce(cb, ms = 1000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      cb(...args);
    }, ms);
  };
}

export default debounce;
