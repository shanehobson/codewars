function formatDuration (seconds) {
    if (seconds == 0) return 'now';
    let resultArr = [];
    if (seconds / 31536000 >= 1) {
      let years = Math.floor(seconds / 31536000);
      seconds = seconds % 31536000;
      years > 1 ? resultArr.push(years + ' years') : resultArr.push(years + ' year');
    }
    if (seconds / 86400 >= 1) {
       let days = Math.floor(seconds / 86400);
       seconds = seconds % 86400;
       days > 1 ? resultArr.push(days + ' days') : resultArr.push(days + ' day');
    }
    if (seconds / 3600 >= 1) {
       let hours = Math.floor(seconds / 3600);
       seconds = seconds % 3600;
       hours > 1 ? resultArr.push(hours + ' hours') : resultArr.push(hours + ' hour');
    }
    if (seconds / 60 >= 1) {
       let minutes = Math.floor(seconds / 60);
       seconds = seconds % 60;
       minutes > 1 ? resultArr.push(minutes + ' minutes') : resultArr.push(minutes + ' minute');
    }
    if (seconds > 0) {
       seconds > 1 ? resultArr.push(seconds + ' seconds') : resultArr.push(seconds + ' second');
    }
    if (resultArr.length > 1) {
       let newArr = resultArr.map((el, i, arr) => {
         if (i < arr.length - 2) return el + ',';
         if (i == arr.length - 2) return el + ' and';
         if (i == arr.length - 1) return el;
       });
       return newArr.join(' ');
    } else {
       return resultArr.join();
    }
}
  