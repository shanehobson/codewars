function sumIntervals(intervals) {
    let taken = [];
    let total = 0;
    intervals.forEach(interval => {
      for (let i = interval[0]; i < interval[1]; i++) {
        if (!taken.includes(i)) {
          total++;
          taken.push(i);
        }
      }
    });
    return total;
  }