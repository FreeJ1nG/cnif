/**
 * Utility function to do conditionals with object syntax
 * @param {Record<string, boolean>} entry Object to inspect, returns the first key where the value is true
 * @param {?string} defaultValue A string to return if no values in the object is true
 */
export const cnif = (
  entry: Record<string, boolean>,
  defaultValue: string = '',
): string => {
  for (const key of Object.keys(entry)) {
    if (entry[key]) return key;
  }
  return defaultValue;
};

export default cnif;
