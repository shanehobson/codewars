function createPhoneNumber(numbers) {
    let array1 = numbers.unshift("(");
    let array2 = numbers.splice(4, 0, ") ");
    let array3 = numbers.splice(8, 0, "-");
    return numbers.join("");
}