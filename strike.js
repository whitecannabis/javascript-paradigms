const goToTop = () => window.scrollTo(0, 0);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());