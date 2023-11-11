const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default scrollToElement;
