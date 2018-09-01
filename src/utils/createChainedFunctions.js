import warning from "warning";

/**
 *
 * @param {Array<Function>} funcs
 */
function createChainedFunction(...funcs) {
  return funcs.reduce(
    (acc, func) => {
      if (func == null) {
        return acc;
      }

      warning(
        typeof func === "function",
        "Invalid Argument Type, must only provide functions, undefined, or null."
      );

      return function chainedFunction(...args) {
        acc.apply(this, args);
        func.apply(this, args);
      };
    },
    () => {}
  );
}
export default createChainedFunction
