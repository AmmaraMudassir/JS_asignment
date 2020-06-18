//... Chapter #1 //
// Task#1...//
var wel = "Welcome to Our Website";
alert(wel);
//...  Task#2...///
var a = 'Error! Please enter a valid password'
alert(a);
//... Task#3...///
var b = "Welcome to Js Land \n Happy coding.. "
alert(b);
//...  Task#4...///
var d = "Welcome to Js Land";
alert(d);
var e ="Happy Coding \n Prevent this page for creating additional dailogue"
alert(e);
//...  Task#5...///
var c = "Hello... I can run Js through web browser console";
alert(c)
//...  Task#6...///

var b = 6;
var c = 9 ;
var d = b+c;
alert (d);
//... Chapter #2 //
// Task#1...///
var a = 'username' ;
console.log(a);
//...  Task#2...///
var myname= 'AMMARA ZAHID'
document.write("<br>"+myname);
//... Task#3...///
var message = 'Hello World';
alert(message);
//... Task#4...///
var name ='Jhone Doe';
       var age = ' 15 years old';
       var qul = 'Certified Mobile Application Devlopment'
       var nam ='Hanna';
       var ag = ' 20 years old';
       var qu = 'qulified Nurse'
       var n ='Tom';
       var a = ' 18 years old';
       var q = 'Enrolled in Engineering program'
   alert (name);
   alert(age);
   alert(qul);
   alert(nam);
   alert(ag);
   alert(qu);
alert(n);
alert(a);
alert(q);
//... Task#5...///
var pizza = ('PIZZA\nPIZZ\nPIZ\nPI\nP')
alert(pizza)
//...  Task#6...///
var a = 'ammarazahid.az'
var ema =  '@.com'
var email = a + ema
alert ("My E-mail address is " + email);
//...  Task#7...///

var a ="A smater way to learn javaScript "
alert(a);
//...  Task#8...///
var f = ' Yeah! I can write HTML code in javaScript'
document.write("<br>"+f);
//...  Task#9...///
var g = ("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")
alert(g)
//... Chapter#3 //
//Task#1...///
var a = 'I am ';
var age = 26;
var b =' years old';
var d =a+age+b;
alert(d);

//... Task#2...///
var a = 'I am ';
var age = 26;
var b =' years old';
var d =a+age+b;
alert(d);
//... Task#3...///
var d = 'My Birth year is'
var birthyear = 1993
document.write( "<br>"+d + birthyear);

//... Task#4...///
var name = prompt ("Enter your name");
var q = 'ordered';
var title = prompt( "Enter product title");
var quan = prompt("Enter your quantity");
var w = 'from Amazon'
var u = '<br>'
var g = ( u+ name + "  " +q +"  " +quan+"  "  +title +"  " +w);
document.write("<br>"+ g );



//... Chapter#4 //
// Task#1...///
var s =2, r=9 ,y=1;
alert("your 3 variable sum is"+s+r+y);




//...  Task#3...///
document.write("<h1>Rules of writing js Variable</h1>")
var a = 'Variable names only contain $ ,alphbets,numbers e.g $uin_jScript.';
var b = 'variables must begin with a small alphbets ,$ , _sign , small alphabets e.g: _orange.';
var c = 'Variable names are case sensitive.';
var d = 'Variable should not be js keywords.';
var e = '<br>'
var k = (a);
var f = (e+b);
var o =(e+ c);
var g = (e+d);
document.write("<br>"+k )
document.write("<br>"+f )
document.write("<br>"+o )
document.write("<br>"+g )


//... Chapter#5 //
// Task#1...///

var a =+prompt("Enter your 1st value for addition");
var b =+prompt("Enter your 2nd value for addition");
var q = (a + b );

var j = ("sum of"+ " "+ a +" "+ "&"+" "+ b +" "+ "is" +" "+ q)
document.write("<br>"+j)

//...  Task#2...///

var i = +prompt("Enter your value for subtraction");
var j = +prompt("Enter your second value for subtraction");
var o = i - j;
var v = ("<br> sub of"+ " "+ i +" "+ "&"+" "+ j +" "+ "is" +" "+ o)
document.write("<br>"+v);

var c = +prompt("Enter your value for multiplication");
var z = +prompt("Enter your second value for multiplication");
var u = c * z;
var x = ("<br> Multiplication of"+ " "+ c +" "+ "&"+" "+ z +" "+ "is" +" "+ u)
document.write("<br>"+x);

var w = +prompt("Enter your value for division");
var d = +prompt("Enter your second value for division");
var c = w /d;
var t = ("<br> division of"+ " "+ w +" "+ "&"+" "+ d +" "+ "is" +" "+ c)
document.write("<br>"+t);

var p = +prompt("Enter your value for modulus");
var u = +prompt("Enter your second value  for modulus");
var r = p % u;
var e = ("<br> Modulus of"+ " "+ p +" "+ "&"+" "+ u +" "+ "is" +" "+ r)
document.write("<br>"+e);

//...  Task#3...///

var s = '<br><br><br> Value after variable decleration is 5'
var x = 5
 var t = '<br> Intial value :'+"  " + x ;
 var i = ++x ;
 var h ="<br>Value after increment is :"+"  " + i
 var o = 7 + i
 var x = "<br> value after addition is :"+" "+ o
 var k = --o ;
 var d = "<br> value after decrement is :" +  " "+ k 
 var f = k % 3 ;
 var i = " <br> the remaider is :" + " "+ f
 document.write("<br>"+s);
 document.write("<br>"+t);
 document.write("<br>"+h);
 document.write("<br>"+x);
 document.write("<br>"+d);
 document.write("<br>"+i);

//...  Task#4...///
var movieticket = 600 
var fivetickets = movieticket * 5 ;
var mt = "<br><br> Total cost to buy 5  tickets is" +" " + fivetickets+"PKR"
document.write("<br>"+mt);

//... Task#5...///

var x= 4 ;
for (i=1 ; i<=10 ;i++) {
  document.write ( '<br><br>' + x + "x" + i + "=" + x * i );
}
  
//...  Task#6...///
document.write("<h1>The Temperature Converter</h1>")
var  cel = +prompt('Enter Celcius value');
var  fer = +prompt('Enter your fer value');
var io = (fer-32)*5/9;
var en = (cel*9/5)+32;
var dc = '<br><br>'+ cel +'\u00B0 C'+ "is "+ " "+ io +'\u00B0 F' ;
var ht = '<br><br>'+ fer + '\u00B0F'+"is" + " " + en +'\u00B0 C';
document.write("<br>"+dc);
document.write("<br>"+ht);

//... Task#7...///
document.write("<h1>Shopping Chart</h1>")
var aw = +prompt("Enter Price of an item 1");
var bv = +prompt("Enter Quantity of item 1");
var hu = +prompt("Enter price of item 2");
var bb = +prompt("Quantity of item 22 is");
var cx = ('Shipping charges is 200 PKR');
var hu = ('Price of item 1 is');
var we =('Quantity of item 1 is');
var tf = ('Price of item 2 is');
var ke =('Quantity of item 2 is');
var ui = '<br>'+'<br>' + hu +" " + aw;
var io = '<br>' + we +" " + bv;
var hi ='<br>' + tf +" " + hu;
var vg ='<br>' + ke +" " + bb;
document.write("<br>"+ui);
document.write("<br>"+io);
document.write("<br>"+hi);
document.write("<br>"+vg);
document.write("<br>"+cx);

//... Task#8...///
document.write("<h1>Mark Sheet</h1>")
var u8 = ( "Total marks :980");
var e4 = +prompt ("Ente your Marks obtained");
var q2 = (e4/980 *100) ;
var s5 = "<br>"+ " Marks Obtained:"+" " + e4 ;
var u7 = "<br>"+ "Percentage:" +" "+ q2 + '%' ;
var w2 = "<br>" + u8 ;
document.write("<br>"+w2);
document.write("<br>"+s5);
document.write("<br>"+u7);

//.. Task#9...///
document.write("<h1>Currency in PKR</h1>")
var zde = +prompt("Enter your currency in USD");
var gty = +prompt("Enter your currency in SD");
var bbb = zde *104.80 ;
var uuu = gty * 28 ;
var uio = "<br><br>"+"Total currency in pkr from usd is " +" " + bbb;
var opo = "<br>"+"Total currency in pkr from SR is " +" " + uuu;
document.write("<br>"+uio);
document.write("<br>"+(opo));

//...  Task#10...///
document.write("<h1>Age Calculater</h1>")
var lOp = 5 ;
var uio = lOp+5*10/2;
document.write("<br>"+uio);

//...  Task#11...///
document.write("<h1>The Geometizer</h1>")

var y5y = +prompt("Enter your birth year");
var $ni = 2020-y5y
var hy8 = "<br>"+"your age is:" +" " +$ni ;
var iot =  "<br>"+"Birthyear:" + " "+y5y ;
var kil =  "<br>"+'current year: 2020'
document.write("<br>"+kil);
document.write("<br>"+iot);
document.write("<br>"+hy8);

//...  Task#12...///


var hmn =+prompt("Enter the radius in m");
var pai = 3.142;
var frt = 2*pai *hmn;
var are = pai*hmn^2;
var gop = '<br>'+'<br>'+'Radius of a circle :'+" "+hmn;
var tyu ='<br>'+'The circumference is :'+" "+frt;
var ref ='<br>'+' The area is :'+" "+are;
document.write("<br>"+gop);
document.write("<br>"+tyu);
document.write("<br>"+ref);

//...  Task#13...///
document.write("<h1>The Lifetime supply calculater</h1>")
var sna = prompt("Enter your Favourite Snake");
            var age = +prompt("Enter your current age");
            var max =+prompt ("Estimated maximum age");
            var amo = +prompt("Enter estimated amount of snake per day");
            var tyf =  "<br>"+ "<br>"+"Favourite Snake:"+"  "+ sna;
            var qqq =  "<br>"+"Current ge:" +" "+ age;
            var qaz =  "<br>"+"Estimated Maximum age:"+ max;
            var cko = "<br>"+ "Amount of Snakes per day:"+amo;
            var pop = (max-age)*amo
            var hjn =  "<br>"+"You will need " +" "+pop+" " +sna +"to last until you ripe old age of "+max ;
            document.write("<br>"+tyf);
            document.write("<br>"+qqq);
            document.write("<br>"+qaz);
            document.write("<br>"+cko);
            document.write("<br>"+hjn);


//... Chapter#6-9 //
// Task#2...///

var  a = 10 ;
 var c = ++a ;
 var e = a++ ;
 var t = a++ ;
 var s = --a;
 var x = --a ;
 var g =  a-- ;
 var o = a-- ;
 document.write ("<br>"+"<br>"+ "RESULT");
 document.write("<br>"+"<br>"+ "The value of a is :"+ " " + 10 )
 document.write ("<br>"+"<br>"+ "The value of ++a is :"+ " " + c);
 document.write ("<br>"+ "Now the vale of a is :"+ " " + c);

 document.write ("<br>"+ "<br>"+"The value of ++a is :"+ " " + c);
 document.write ("<br>"+ "Now the value of a++ :"+ " " + t);
 document.write ("<br>"+"<br>"+ "The value of --a is :"+ " " + x);
 document.write ("<br>"+ "Now the value of a is :"+ " " + x);
 document.write ("<br>"+ "<br>"+"The value of a-- is :"+ " " + x);
 document.write ("<br>"+ "<br>"+"The value of a-- is :"+ " " + x);
 document.write ("<br>"+ "Now the value of a is :"+ " " + o);

//... Task#2...///
var a = 2 , b =1 ;
 var q1a = --a - --b + ++b +b-- ;
 document.write ("<br>" + "--a"+" "+ '=' + "1");
 document.write ("<br>" + "--a---b"+" "+ '='  + "1-0");
 document.write ("<br>" + "--a- --b+ ++b"+" "+ '='  +" 1- 0 + 1");
 document.write ("<br>" + "--a- --b+ ++b + b--"+" "+ '='  +" 1- 0 + 1 + 1");
 document.write ("<br>" + "--a- --b+ ++b +b--"+" "+ '=' + q1a);

//... Task#3...///
var name = prompt("Enter your name");
var greed = ("Welcome"+" " + name +" " + "JavaScript Enivornment")
document.write("<br>"+greed);
//...  Task#4...///
var pohu =+prompt("Enter your number for table");
for (i=1;i<=10;i++){
    if (pohu==" "){
        document.write("<br>"+ 5 + '*' +i +"="+5*i +'<br>');
    }
    else{
        document.write("<br>"+ pohu + '*' +i +"="+pohu*i +'<br>');
    }
}

//... Task#5..///

document.write("<h5>Subject Total Marks Obtained Marks Percentage</h5>")

var trig = prompt("Enter your Subject for marks calculation");
        var grit = prompt("Enter your Subject");
        var prit = prompt("Enter your Subject");
        var numb = +prompt("Enter your obtained marks of 1st subject");
        var yunk = +prompt("Enter your obtained marks of 2nd subject");
        var hfgt = +prompt("Enter your obtained marks of 3rd subject");
        var zzzz = 100 ;
        var yhnm = numb*100 /100 ;
        var maho = yunk*100 /100 ;
        var zadc = hfgt*100 /100 ;
        var jjaj = numb+yunk+hfgt
       var pert = 300;
       var swed = (jjaj/300*100);
        var uiok = (trig +'&nbsp' +'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+numb
        +'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+zzzz+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+
        '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+yhnm +"%" +"<br>"+'&nbsp'+grit+'&nbsp'+'&nbsp'+'&nbsp' +'&nbsp' +'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+yunk
        +'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+zzzz+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+
        '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+maho +"%"+"<br>"+prit +'&nbsp' +'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+hfgt
        +'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+zzzz+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+zadc +"%");
          
      var hyuv = "<br>"+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+jjaj+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+ pert+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+ swed +"%" ;
   
      document.write("<br>"+uiok);
        document.write("<br>"+hyuv); 
      





//chapter#9-11//
// Task#1///

var sd = prompt("Enter your city");
if (sd=='karachi'){
document.write("<br>"+"Welcome to city of Karachi")
}
else{
    document.write("<br>"+"try again")
}

//Task#2///

var gender = prompt("Enter your gender");
if (gender=='male'){
    document.write("<br>"+"Good Morning Sir")
}
else{
    document.write("<br>"+"Good Morning Ma'am")

}
//Task#3///
var colour = prompt("Enter Road traffic light colour")
if( colour=='Red'){
    document.write('<br>'+'Must Stop')
}
 else if (colour=='yellow'){
    document.write('<br>'+'Ready to move')

}
else {
    document.write('<br>'+' Move on')

}

//Task#4///

var vgj = prompt("Enter your amount of Petrol into Literes");
if (vgj<0.26){
    document.write('<br>'+'Please Refill the fuel in your car')

}
else{
    document.write('<br>'+'Fuel is enough')

}
//Task#5///
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
    alert("True");
    }
    if (false){
      alert("False");
    }
 if("car" < "cat"){
        alert("car is smaller than cat");
        }
 //Task#6///
 document.write("<h1>Mark Sheet</h1>")
 alert("Now enter subjects and total marks for mark sheet")
 var mar = +prompt("Enter your 1st subject marks");
 var par = +prompt("Enter your 2nd subject marks");
 var har = +prompt("Enter your 1st subject marks");
var tyu = +prompt("Enter total marks");
var xsz = mar+par+har ;
var per = xsz*100/tyu ;
document.write('<br>'+'Total Marks:'+xsz);
document.write('<br>'+'Marks Obtained'+mar);
document.write('<br>'+'Percentage'+per+"%");
if (per>=80){
    document.write("<br>"+"Grade: A-One")
    document.write("<br>"+"Excellent")

}
else if (per>=70){
 document.write("<br>"+"Grade: A")
    document.write("<br>"+"Remark:Good")
}
else if (per>=60){
 document.write("<br>"+"Grade: B")
    document.write("<br>"+"Remark:You need Improvement")
}
else{
    document.write("<br>"+"Grade: Fail")
    document.write("<br>"+"Remark: Sorry")
}

 //Task#7///

  document.write("<h1>Gucess Game</h1>")
        var der = +prompt("Enter your number between 1 to 10");
        if (der == 5){
            document.write("<br>"+"Bingo! Correct")
        }
        else if (der == 6){
            document.write("<br>"+"Close enough to correct answer")

        }
        else{
            document.write("<br>"+"Try again")

        }
    //Task#8///
        var hh= +prompt("Enter your number for divisiable by 3");
        if (hh % 3==0){
document.write("<br>"+"It is divisiable by 3")
        }
        else{
            document.write("<br>"+"It is not divisiable by 3")

        } 
 //Task#9//
 var k = +prompt("Enter Your Number for checking odd and even");
 
 if (k % 2==0){
     document.write("<br>"+"Even Number")
 }
 else{ document.write("<br>"+"Odd Number")

 }
  //Task#10///
  var lkj=+prompt("Enter your City Temperature");

if( lkj>40){
    alert("Its hot outside" );
}
else if ( lkj>30){

    alert("The Weather today is Normal")
}
else if(lkj>20){
    alert("Today’s Weather is cool")
}
else{
    alert("OMG! Today’s weather is so Cool")
}
//Task#11///
document.write("<h1>Calculater</h1>")
var y9o = +prompt("Enter 1st number");
    var f4d = prompt("Enter your sign");
    var g7h = +prompt("Enter 2nd number");

    if(f4d === '+'){
        
  document.write("<br>"+y9o+g7h)
    }
     else if (f4d === '*') {
      
    document.write("<br>"+y9o*g7h)
    }
     else if(f4d === '-') {
     
        document.write("<br>"+y9o-g7h)
    }
     else if (f4d === '/'){
  
    document.write("<br>"+y9o/g7h)
        
    }
    // chapter 12-13 //
    // Task#01//
var sd = prompt("Enter Letter or Alphabet");
var k = sd.charCodeAt()
   alert(k)
if ( k<=90){
    alert("Uppercase Letter ")
}
else {
    alert("Lowercase Letter")
} 
// Task#02//
var int1 = +prompt("Enter 1st Integer");
var int2 = +prompt("Enter Second Integer");

if (int1 > int2 ){
alert("Int1 is larger then Int2");
}
else if(int1<int2){
    alert("Int2 is larger then Int1");

}
else {
    alert("Int1 and Int2 are equal");
}
//  Task#03//
var int4 = prompt("Enter your number");

if (int4>0 ){
    alert("POSITIVE")
}
else if (int4<0){
    alert("NEGATIVE")
}
else if (int4 =='0'){
    alert("ZERO")
}
// Task#04//
var chac = prompt("Enter Alphabet");

if (chac === "A" || chac === "E" ||chac === "I"|| chac ==="O" || chac ==="U" || chac ==="a" ||chac === "e" || chac ==="i" ||chac === "o" || chac ==="u" ){
    alert("Vowel")

}
else{
    alert("Consonent")
}
//  Task#05//

var pass = 'Xyz*596';
var erqw = prompt("Enter your 1st Passward");
var yhnm = prompt("Enter your Confirm Passward");
 if (pass==erqw && yhnm){
    alert("Correct! The password you entered matches the original password");
}
else if (pass!==erqw && yhnm){
    alert("Incorrect password");
}
else{
    alert("Please Enter your Passward");
}
// Task#06//
var greeting ='Good day' ;
var hour = 13;
if (hour < 18) {
    alert(greeting)
}
else{
alert('Good evening') 
}
//  Task#07//
var time = +prompt("Enter current Time of your city");
if ( time>=0000 && time<1200){
    alert("Good Morning")
}
else if(time>=1200 && time<1700){
    alert("Good Afternoon")
}
else if (time>=1700 && time<2100){
    alert("Good Evening")
}
else if(time>=2100  && time<=2359){

    alert("Good Night")
}


//chapter#14-16 //
//Task #01//
var arr =[];

// Task #02//

var g = new Array();
//c Task #03//

var yh = ["Computer","Laptop","Phone","Smart watch"]
console.log (yh);
// Task #04//

var num =[1,2,3,8,5,9,10,7];
console.log(num[2]);
// Task #05//

var arra4y =["Civic","Honda","Tesla","Bmw"]
var tyunb =prompt ("Enter your Favourite car name")
if( arra4y && tyunb =="Civic"){
    console.log(true)
    alert("you are right")
}
else{
console.log(false)
alert("wrong")
}
// Task #05//

var tong = ["home",1,"Name",10,45]
 console.log(tong);
//Task #06//


document.write("<h1>Qulifications</h1>")
var edu =["1)SSC" ];
var tyu =["2) HSC"];
var vbn =["3) BSC"];
var mnm =["4) BS"];
var hjk =["5) BCOM"];
var qws =["6) MS"];
var ghj =["7) M.Phil."]
var cdf =["8) Phd"]

document.write([edu]+"<br>")
document.write([tyu]+"<br>")
document.write([vbn]+"<br>")
document.write([mnm]+"<br>")
document.write([hjk]+"<br>")
document.write([qws]+"<br>")
document.write([ghj]+"<br>")
document.write([cdf]+"<br>")


// Task #07/

var bv5g =["Jhon","Tom","Lance"];
var mark =[ 390 ,482,214];
var totl = 500 ;
var yui = mark[0]*100/500 ;
var tyb =  mark[1]*100/500 ;
var blk =  mark[2]*100/500 ;
document.write("Score of" +" "+ bv5g[0]+" "+"is"+" "+ mark[0]+"."+" "+"Percentage:"+" " + yui+"%")
document.write("<br>"+"Score of" +" "+ bv5g[1]+" "+"is"+" "+ mark[1]+"."+" "+"Percentage:"+" " + tyb+"%")
document.write("<br>"+"Score of" +" "+ bv5g[2]+" "+"is"+" "+ mark[2]+"."+" "+"Percentage:"+" " + blk+"%")
// Task #08//

var color=["red","Black ","Grey"];
        alert([color]);
        op = color.unshift(prompt("Enter your favourite color") )
     
      alert([color])
      ik = color.push(prompt("Enter your another favourite colour"))
      alert([color])
      hy = color.unshift(prompt("Enter your 1 favourite color"))
      alert([color])
      hy = color.unshift(prompt("Enter your 1 favourite color"))
      alert([color])
      vf = color.push();
      alert (color);
      pi = color.splice(prompt("ENTER your position for splice"),1,prompt("Enter your favourite color"))
      alert (color)

      LL = color.slice(prompt("Enter your position for slice"),prompt("Enter how much colours you want to delete"))
      alert(LL);
//c Task #09//

      var score= [320,230,480,120]
      var thy =[320,230,480,120]
      var byhj = thy.sort();
      alert("Scores of Students:"+ " "+ score)
      alert("Ordered Scores ofStudents:"+" "+ byhj)

// Task #10//

var cities = [ "Karachi","Lahore" ,"Islamabad","Quetta","Peshawar"]
var name ="Cities List:";
var selec =[cities[2],cities[3]]
var nameh = "Selected Cities:"
document.write(name);
document.write("<br>"+[cities]);
document.write("<br>"+nameh)
document.write("<br>"+selec)

// Task #11//

var ar1r =["This","is","my","cat"]
var plkm =["This","is","my","cat"]
var poll = plkm.join( " ");
document .write("<br> Array:")
document.write("<br>"+ ar1r)
document .write("<br> String:")
document.write("<br>"+ poll)

// Task #11 and 12//

var t1 = "Devices:";
var w3 = ["Keyboard","Mouse","Printer","Moniter"]
var q1 = "Out:";
document.write(t1)
document.write("<br>"+w3)
document.write("<br>")
document.write("<br>"+q1)
document.write("<br>"+w3[0])
document.write("<br>"+q1)
document.write("<br>"+w3[1])
document.write("<br>"+q1)
document.write("<br>"+w3[2])
document.write("<br>"+q1)
document.write("<br>"+w3[3])
document.write("<br>")

document.write("<br>"+t1)
document.write("<br>"+w3)
document.write("<br>")
document.write("<br>"+q1)
document.write("<br>"+w3[3])
document.write("<br>"+q1)
document.write("<br>"+w3[2])
document.write("<br>"+q1)
document.write("<br>"+w3[1])
document.write("<br>"+q1)
document.write("<br>"+w3[0])

// Task #13//

document.write("<h1>Phone Manufacturers</h1>")
document.write("<select>")
var am = ["Apple","Samsung","Motorola","Nokia","Sony &Haier"]
for (i=0 ;i<am.length;i++){
    document.write("<option>"+ am[i]+"</option>")}

document.write("</select>")
///chapter#17-20 //
// Task#01///


var array =[
    [ 
        [  
            [  ]
        ]
     ]
    

    
] 

/// Task#2///

var  mul = [
    [ 0,1,2,3],
    [ 1,0,1,2]  ,     
    [  2,1,0,1]
];
for (i=0;i<mul.length;i++){
    document.write("<br>"+mul[i]+"<br>")
}
/// Task#03///

for (i=1;i<=10;i++)
{
    document.write(i +"<br>")
}
/// Task#04///

var w = +prompt("Enter number to show multiplication table");
var t = +prompt("Enter Length Multiplication table");
document.write("Multiplication table of"+" "+w+"<br>"+"Length"+t+
"<br>")

for ( i=1 ;i<=t;i++){
    document.write(w+"*"+i +"="+ w*i+"<br>");
}
/// Task#05///

var fruit = ["apple","banana","mango","orange","stawbery"]
for (i=0;i<fruit.length;i++){
    document.write(fruit[i]+"<br>")
      
}
document.write("<br>")

var  fruit =["apple","banana","mango","orange","stawbery"]
for (j=0 ;j<fruit.length;j++){
    document.write("Element of index "+ fruit.indexOf(fruit[j])+" "+ fruit[j]+"<br>")
}
    ///& Task#06///

var iot = "Counting:" ;
document.write(iot+"<br>")

for (i=1;i<16;i++){
    document.write(i+",");

    
}
var pol ="Reverse Counting";
document.write("<br>"+pol+"<br>")
    for(j=11-1;j>0;j--){
        document.write(j+",");

    }
    

var lp ="Even";
document.write("<br>"+lp+"<br>")
for(i=0;i<21;i++){
    if(i % 2===0){
        document.write(i +",")
    }
    
}

var ji = "odd"
document.write("<br>"+ji+"<br>")
for(k=1;k<21;k++){
    if(k % 2 !== 0){
        document.write(k +",")
    }
}
var pm ="Series"
document.write("<br>"+pm+"<br>")
for (n=1;n<21;n++){
    if (n % 2 === 0){
        document.write(n+"k"+",")
    }
}

/// Task#07///

var ty = prompt("Welcome to freshy Bakery.What do you want sir/mam ?")
var ik = ["cake","apple pie","cookie","chips","patties"];
if (ty==="cake"){
    document.write("Cake is available at Index 0 in our bakery")
}
else if (ty==="apple pie"){
    document.write("apple pie is available at Index 1 in our bakery")

}

else if (ty==="cookie"){
    document.write("cookie is available at Index 2 in our bakery")

}

else if (ty==="chips"){
    document.write("chips is available at Index 3 in our bakery")

}

else if (ty==="patties"){
    document.write("patties is available at Index 4 in our bakery")

}

else{
    document.write("We are sorry"+" "+ty +"is not available in our bakery")

}

/// Task#08///

var uio = [24, 53, 78, 91, 12];
document.write("<br>"+"Array items"+ uio)
document.write("<br>"+  "The largest number is "+" "+ Math.max(... uio));
/// Task#09///

var A = [24, 53, 78, 91, 12]
document.write("<br>"+"Array items"+A+" "+
document.write("<br>"+"The lowest number is"+" "+Math.min(...A))

/// Task#10///

var numb = 5 ;
for(i=1;i<=20;i++){
    document.write( numb*i  + ",")
}