export const countdownIncrement = (add) => {
  console.log("masuk increment");
    return {
      type: 'INCREMENT',
      payload: add,
    }
  }