module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
// Write your code here

`);
};

class Sequence {
  constructor(input) {
    // Write your code here
    this.input = input;
  }

  minimum() {
    // Write your code here
    var minimum_number = this.input[0];
    for (var i = 0; i < this.input.length; i ++){
      if (this.input[i] < minimum_number){
        minimum_number = this.input[i];
      }  
    }
    return minimum_number;
  }

  // Write your code here
}
