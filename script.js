const sortButton = document.getElementById('sort');
const sortInputArray = (event) => {
  event.preventDefault();
  const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => 
  Number(dropdown.value));
  // console.log(inputValues); //print out the values of the dropdown
  // const sortedValues = bubbleSort(inputValues); //uncomment to see the bubbleSort algo
  // const sortedValues = selectionSort(inputValues); //uncomment to see the selection sort algo
  const sortedValues = insertionSort(inputValues);
  // const sortedValues = inputValues.sort(); //uncomment to use js built-in method to sort an array
  // .sort method to prevent the default behavior of .sort method:
  // const sortedValues = inputValues.sort((a, b) => {
  //   return a-b;
  // });

  updateUI(sortedValues); 
}

//the below function has a default value of array which is an empty array, this prevents the potential runtime error when the function is called without passing argument
const updateUI = (array = []) => {
  console.log(array);
  array.forEach((num, i) => {
    //num is the value and i is the index to iterate over the whole array
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};

//function to sort the array
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for(let j=0; j<array.length-1; j++) {
      //Because you need to compare elements, you'll need to use a nested for loop. This loop should iterate through every element in the array except the last one.
      console.log(array, array[j], array[j+1]); //for debugging

      if(array[j] > array[j+1]){ //swap the value
        const temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  //below is the output of each iteration:
  /*
    [ 8, 2, 4, 1, 3 ] 8 2
    [ 2, 8, 4, 1, 3 ] 8 4
    [ 2, 4, 8, 1, 3 ] 8 1
    [ 2, 4, 1, 8, 3 ] 8 3
    [ 2, 4, 1, 3, 8 ] 2 4
    [ 2, 4, 1, 3, 8 ] 4 1
    [ 2, 1, 4, 3, 8 ] 4 3
    [ 2, 1, 3, 4, 8 ] 4 8
    [ 2, 1, 3, 4, 8 ] 2 1
    [ 1, 2, 3, 4, 8 ] 2 3
    [ 1, 2, 3, 4, 8 ] 3 4
    [ 1, 2, 3, 4, 8 ] 4 8
    [ 1, 2, 3, 4, 8 ] 1 2
    [ 1, 2, 3, 4, 8 ] 2 3
    [ 1, 2, 3, 4, 8 ] 3 4
    [ 1, 2, 3, 4, 8 ] 4 8
    [ 1, 2, 3, 4, 8 ] 1 2
    [ 1, 2, 3, 4, 8 ] 2 3
    [ 1, 2, 3, 4, 8 ] 3 4
    [ 1, 2, 3, 4, 8 ] 4 8
  */

  return array;
};

//other selection algo (Selection sort)
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      console.log(array, array[j], array[minIndex]);
      if(array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
};

//other selection algo (InsertionSort)
const insertionSort = (array) => {
  for(let i=1;i<array.length;i++) {
    const currValue = array[i];
    let j = i-1;
    while(j >= 0 && array[j]>currValue) {
      console.log(array, currValue, array[j], array[j+1]);
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = currValue;
  }
  return array;
};



sortButton.addEventListener('click', sortInputArray);



//checking the getElbyClassName
const inputValues2 = document.getElementsByClassName("values-dropdown");
console.log(inputValues2);


// check .sort method
console.log([1,9,4,7,10,2,4].sort()); //[1, 10, 2, 4, 4, 7, 9]

