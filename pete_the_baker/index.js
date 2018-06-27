function cakes(recipe, available) {
    let limits = [];
    for (let item in recipe) {
      limits.push(Math.floor(parseInt(available[item]) / parseInt(recipe[item])));
    }
    let result = limits.reduce((a, b) => {
      return Math.min(a, b);
    });
    if (isNaN(result)) return 0;
    else return result;
  }