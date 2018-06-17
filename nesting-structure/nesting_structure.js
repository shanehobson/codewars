Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.
    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array.
    if (this.length !== other.length) return false;
    for (let i = 0; i < this.length; i++) {
      if (isArray(other[i]) && isArray(this[i])) {
        if (!this[i].sameStructureAs(other[i])) return false
      } else if (!isArray(other[i]) && isArray(this[i])) {
        return false
      } else if (isArray(other[i]) && !isArray(this[i])) {
        return false;
      }
    };
    return true;
  }
   

