export default class UtilsHelper {
  static hasPath(root, path) {
    if (!root || !path) {
      return false;
    }

    const properties = path.split('.');
    let obj = root;
    let pathExists = true;

    /* eslint-disable consistent-return TODO: check this disable */
    properties.forEach((property) => {
      if (!obj
        || obj[property] === ''
        || obj[property] === null
        || !Object.prototype.hasOwnProperty.call(obj, property)) {
        pathExists = false;
        return;
      }

      obj = obj[property];
    });

    return pathExists;
    /* eslint-disable */
  }

  /**
   * checks an object path to see if it contains a value
   * @param {object} root 
   * @param {string} path 
   * @returns {boolean} false when false || undefined || '' || null
   */
  static hasValue(root, path) {
    if (!root || !path) {
      return false;
    }

    const properties = path.split('.');
    let obj = root;
    let hasValue = true;

    properties.forEach((property) => {
      if (!obj || typeof obj === 'undefined' || obj[property] === '' || obj[property] === null || !Object.prototype.hasOwnProperty.call(obj, property)) {
        hasValue = false;
        return;
      }

      obj = obj[property];
    });

    return hasValue;
  }

  /**
   * 
   * @param {object} root 
   * @param {string} path 
   * @param {boolean} prefix
   * @returns {* || ''} 
   */
  static getValue(root, path, prefix = false) {
    if (!root) {
      return '';
    }

    if (root && !path) {
      return root !== '' ? root : '';
    }

    if (root && path) {
      const properties = path.split('.');
      let obj = root;
      let value = '';

      /* eslint-disable consistent-return TODO: check this disable */
      properties.forEach((property) => {
        if (!obj || typeof obj[property] === 'undefined' || !Object.prototype.hasOwnProperty.call(obj, property)) {
          value = '';
          return;
        }

        if (properties.indexOf(property) === properties.length - 1) {
          value = obj[property];
          return;
        }

        obj = obj[property];
      });

      return (prefix && value !== '') ? ` ${value}` : value;
      /* eslint-disable */
    }
  }
}
