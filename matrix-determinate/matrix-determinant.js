function determinant(m) {
    if (m.length === 1) {
      return m[0][0];           
    } else {
        let calcInput = [];
        m[0].forEach((topRowElement, i) => {
          let minor = [];
          m.forEach((row, j) => {
            if (j !== 0) {
              minor.push(row.filter((rowElement, k) => {
                return i !== k;
              }));
            }
          });
          calcInput.push(m[0][i] * determinant(minor));
        });
        return calcInput.reduce((acc, cur, currentIndex) => {
          if (currentIndex % 2) {
            return acc - cur;
          } else {
            return acc + cur;
          }
        });
    }
};