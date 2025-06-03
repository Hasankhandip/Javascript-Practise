var num = 0;



//even odd

// if (num % 2 == 0) {
//     console.log('Even');
// }else{
//     console.log('Odd');
// } 



// positive negative

// if (num>0) {
//     console.log('positive');
// }else if(num<0){
//       console.log('negative');
// }else{
//     console.log('zero');
// }


// marks grade

var marks= prompt('Enter your marks number : ');
if (marks>100 || marks<0) {
    document.write('Invalid Number');
}else if(marks > 80){
    document.write('A+');
}else if(marks > 70){
    document.write('A');
}else if(marks > 60){
    document.write('A-');
}else if(marks > 50){
    document.write('B');
}else if(marks > 40){
    document.write('C');
}else if(marks >= 33){
    document.write('D');
}else{
    document.write('Fail');
}