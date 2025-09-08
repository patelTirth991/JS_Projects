//Q-1
/*var num:number=10;
if(num%2==0){
    console.log(`${num} is even Number`);
}
else{
    console.log(`${num} is odd Number`);
}

//Q-2
var num1:number=15,num2:number=10;
if(num1>num2){
    console.log(`${num1} is largest`);
}
else{
    console.log(`${num2} is largest`);
}

//Q-3
var num1:number=10,num2:number=15,num3:number=20;
if(num1>num2 && num1>num3){
    console.log(`${num1} is largest`);
}
else if(num2>num3){
    console.log(`${num2} is largest`);
}
else{
    console.log(`${num3} is largest`);
}

//Q-4
var num:number=10;
if(num>0){
    console.log(`${num} is positive number`);
}
else if(num<0){
    console.log(`${num} is negative number`);
}
else{
    console.log(`${num} is zero`);
}

//Q-5
var age:number=19;
if(age>=18){
    console.log(`Yes He/She is eligible to vote`);
}
else{
    console.log(`No He/She is not eligible to vote`);
}

//Q-6
var marks:number=85;
if(marks>=90){
    console.log(`Grade A`);
}
else if(marks>=80){
    console.log(`Grade B`);
}
else if(marks>=70){
    console.log(`Grade C`);
}
else if(marks>=60){
    console.log(`Grade D`);
}
else if(marks>=40){
    console.log(`Grade E`);
}
else{
    console.log(`You have Failed`);
}

//Q-7
var year:number=2024;
if((year%4==0 && year%100!=0) || (year%400==0)){
    console.log(`${year} is a leap year`);
}
else{
    console.log(`${year} is a not leap year`);
}

//Q-8
var num:number=55;
if(num%5==0 && num%11==0){
    console.log(`${num} is divisible by both 5 and 11`);
}
else{
    console.log(`${num} is not divisible by both 5 and 11`);
}

//Q-9
var ch:any='A';
if(ch>='a' && ch<='z'){
    console.log(`the given character ${ch} is a lowercase character`);
}
else if(ch>='A' && ch<='Z'){
    console.log(`the given character ${ch} is a uppercase character`);
}
else if(ch>=0 && ch<=9){
    console.log(`the given character ${ch} is a digit`);
}
else{
    console.log(`the given character ${ch} is a special character`);
}

//Q-10
var day:number=4;
switch(day){
    case 1:
        console.log("The day is Monday");
        break;
    case 2:
        console.log("The day is Tuesday");
        break;
    case 3:
        console.log("The day is Wednesday");
        break;
    case 4:
        console.log("The day is Thursday");
        break;    
    case 5:
        console.log("The day is Friday");
        break;    
    case 6:
        console.log("The day is Saturday");
        break;    
    case 7:
        console.log("The day is Sunday");
        break; 
    default:
        console.log("Invalid day number");

}

//Q-11
var month:number=11;
switch(month){
    case 1:
        console.log("It has 31 days");
        break;
    case 2:
        console.log("It has 28 or 29 days");
        break;
    case 3:
        console.log("It has 31 days");
        break;
    case 4:
        console.log("It has 30 days");
        break;    
    case 5:
        console.log("It has 31 days");
        break;    
    case 6:
        console.log("It has 30 days");
        break;    
    case 7:
        console.log("It has 31 days");
        break; 
    case 8:
        console.log("It has 31 days");
        break;  
    case 9:
        console.log("It has 30 days");
        break;   
    case 10:
        console.log("It has 31 days");
        break; 
    case 11:
        console.log("It has 30 days");
        break; 
    case 12:
        console.log("It has 31 days");
        break;                  
    default:
        console.log("Invalid day number");
}

//Q-12
var num1:number=10,num2:number=20,cal:any="+";
switch(cal){
    case "+":
        console.log(`Addition : ${num1+num2}`);
        break;
    case "-":
        console.log(`Subtraction : ${num1-num2}`);
        break;
    case "*":
        console.log(`Multiplication : ${num1*num2}`);
        break;  
    case "/":
        console.log(`Division : ${num1/num2}`);
        break;
    default:
        console.log("Invalid day number");    
}

//Q-13
var marks:number=85;
if(marks>=40){
    console.log("You have passed");
}
else{
    console.log("You have failed");
}

//Q-14
var amount:number=2500;
if(amount>=5000){
    console.log(`the final amount after discount is: ${amount*0.9}`);
}
else{
    console.log(`the final amount after discount is: ${amount*0.95}`);
}

//Q-15
var ch:any='a';
if((ch>='a' && ch<='z') || (ch>='A' && ch<='Z')){
    console.log(`the given character ${ch} is a vowel`);
}
else{
    console.log(`the given character ${ch} is a consonant`);
}

//Q-16
var num:number=150;
if(num>=1 && num<=100){
    console.log(`the number ${num} is in range`);
}
else{
    console.log(`the number ${num} is not in range`);
}

//Q-17
var amount:number=1500;
if(amount%100==0){
    console.log(`Can withdraw ${amount}`);
}
else{
    console.log("Amount must be multiple of 100");
}

//Q-18
var side1:number=5,side2:number=10,side3:number=10;
if(side1==side2 && side2==side3 && side3==side1){
    console.log("It is a equilateral triangle");
}
else if((side1==side2) || (side2==side3) || (side3==side1)){
    console.log("It is a isosceles triangle");
}
else{
    console.log("It is a scalene triangle");
}

//Q-19
var temp:number=28;
if(temp>=35){
    console.log("Hot")
}    
else if(temp>=25 && temp<=34){
    console.log("Warm")
}                   
else if(temp>=15 && temp<=24){
    console.log("Cool")
}            
else{
    console.log("Cold")
}

//Q-20
var units:number=250,bill:number=0;
if (units <= 100) {
    bill = units * 5;
} else if (units <= 300) {
    bill = 100 * 5 + (units - 100) * 7;
} else {
    bill = 100 * 5 + 200 * 7 + (units - 300) * 10;
}
console.log(`Electricity bill: ${bill}`);

//Q-21
//using for loop
var sum:number=0,i:number=1;
for(i=1;i<=10;i++){
    sum=sum+i;
}
console.log(`sum is: ${sum}`);

//Q-22
// using for loop
var num:number=6
var mul:number=undefined
var i:number=1
for(i=1;i<=10;i++){
    mul=num*i 
    console.log(`${num}*${i}=${mul}`);
}

//Q-23
//using while loop
var fact:number=1
var num:number=7
var i:number=1
while(i<=num){
    fact=fact*num
    num--
}
i++
console.log(`Factorial : ${fact}`);

//Q-24
//using while loop
var sumE:number=0,sumO:number=0
var i:number=0
while(i<=10){
    if(i%2==0){
        sumE+=i
    }else{
        sumO+=i
    }
    i++
}
console.log(`all Even No. sum: ${sumE}`);
console.log(`all Odd No. sum: ${sumO}`);

//Q-25
var num:number=4235,count:number=0,rem:number
while(num>0){
    rem=num%10          
    count++     
    num=(num-rem)/10   
}
console.log(`Count: ${count}`)

//Q-26
var num:number=7514,rem:number,firstnum:number=0,lastnum:number=0
lastnum=num%10 
while(num>0){
    rem=num%10
    firstnum=rem
    num=(num-rem)/10
}
console.log(`Sum of first and last digit of the number is: ${firstnum+lastnum}`)

//Q-27
var num1:number=0,num2:number=1,num3:number,num=10
console.log(num1)
console.log(num2)
for(var i=3;i<=num;i++){
    num3=num1+num2
    console.log(num3)
    num1=num2
    num2=num3
}*/

//Q-28
var num:number=153,temp:number=num,rem:number,sum:number=0
while(num>0){
rem=num%10
sum=sum+rem*rem*rem
num=(num-rem)/10
}
if(sum==temp){
console.log(`${temp} is Armstrong Number`)
}else{
console.log(`${temp} is not Armstrong Number`)
}

//Q29
var num:number=12321,temp:number=num,rem:number,rev:number=0
while(num>0){
rem=num%10
rev=rev*10+rem
num=(num-rem)/10
}
if(rev==temp){
console.log(`${temp} is Palindrome Number`)
}else{
console.log(`${temp} is not Palindrome Number`)
}

//Q-30
var num:number=1234
console.log(`Factors :`);
for(var i=1;i<=num;i++){
    if(num%i==0){
        console.log(i);
    }
}