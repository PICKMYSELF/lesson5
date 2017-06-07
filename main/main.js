module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.elementsNumber()}
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
  constructor(input) {
    // Write your code here
    this.input = input;
  }

  minimum() {
    // Write your code here
    var minimum_number = this.input[0];
    for (var i = 0; i < this.input.length; i ++) {
      if (this.input[i] < minimum_number) {
        minimum_number = this.input[i];
      }  
    }
    return minimum_number;
  }
  
  // Write your code here
  maximum() {
    var maximum_number = this.input[0];
    for (var i = 0; i < this.input.length; i ++) {
      if (this.input[i] > maximum_number) {
        maximum_number = this.input[i];
      }  
    }
    return maximum_number;
  }
  
  elementsNumber() {
    var elements_number = this.input.length;
    return elements_number;
  }
    
  average() {
    var sum_number = 0, average_number = 0;
    for (var i = 0; i < this.input.length; i ++) {
      sum_number += this.input[i];
    }
    average_number = sum_number / this.input.length;
    return average_number;
  }    
}
