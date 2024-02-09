export const isEmpty = (as) => {
  let objectIsEmpty = true;

  if (!as) {
    return true;
  }

  Object.keys(as).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(as, key)) {
      objectIsEmpty = false;
    }
  });

  return objectIsEmpty;
};
