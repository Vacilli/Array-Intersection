
// FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

var array = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];

function FindIntersection(arr){
    var [firstList, secondList] = arr.map(string => string.split(", "));
    var duplicates = [];

    for(var i = 0; i <= firstList.length; i++){
        if(secondList.indexOf(firstList[i]) !== -1){
            duplicates.push(firstList[i]);
        }
    }

    return duplicates.length ? duplicates.join(",") : false;
}

FindIntersection(array);