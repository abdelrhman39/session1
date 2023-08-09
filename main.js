

// var loading=true;
// var data;


// (!data)??loading==false;

// if(!data){

// }else{
//     loading==false;
// }

// if(loading == true){
//     'display:block';
// }else{
//     'display:none';
// }

// var myData =``;
// alert(myData);


// myData = data??'false'

// if(data){
//     data
// }else{
//     'false'
// }

// alert(myData);
// ====================== End var If , else

// var , Let , Const
// const x = 11;

// if(x == 11){
//     let h ='Hello';
// }
// console.log(i);

// &=and
// || = or

// name ='ali'
// age =18

// name ='ahmed' & age= 18
// name ='ahmed' || age= 18


// ==================== switch ====================
// var name = 'ali';

// if(name=='mohamed'){
//     alert('mohamed')
// }else{
//     alert('false');
// }


// switch (name) {
//     case 'mohamed':
//         alert('mohamed')
//         break;
//     case 'ali':
//         alert('ali')
//         break;
//     case 'mahmoud':
//         alert('mahmoud')
//         break;
//     default:
//         alert('false');
//         break;
// }


// =========================== loops ==========
// For , While , Do While , foeach



// var i =1;
// ++i Pre => 2
// i++ Post => 1

// --i
// i--

// var data = ['ali' , 15 , 18];



// for (let i = 0; i < 3; i++) {
//     const element = data[i];
//     console.log(element);
// }



// ========= Task =======

/*

- Task-1
var data = [1,12,2,56,8,64,46,7,465,8,4,5,54,8,3,5,456,4,8];
عاوز اطبع الارقام الفرديه بس تحت بعض

- Task-2
عاوز اطلب الاسم من اليوزر 
فلو بعت اسمو محمد

اطلع رساله بتقولو 
(مرحباً محمد)

*/


// var data = [1,12,2,56,8,64,46,7,465,8,4,5,54,8,3,5,456,4,8];
// var dataArr =[];

// for (let i = 0; i < data.length; i++) {
//     if(data[i]%2 !=0){
//         dataArr.push(data[i]);
//         console.log(dataArr[i]);
//     }
// }


// var fullName = prompt('Enter Full Name: ');

// fullName = fullName.toLowerCase();

// if(fullName =="mohamed"){
//     console.log('Hi Mohamed');
// }else{
//     console.log('Sorry');
// }


// ============ Session 2 ==================
// DRY

// function Re-use Code

// var fullName = prompt('First Name : '); //Ali



// function checkFullName(name){
//     var fullARR = [];
//     var newName = name.toLowerCase();

//     for (let i = 0; i < newName.length; i++) {
//         if(i == 0){
//             var x = newName[i].toUpperCase()
//             fullARR.push(x);
//         }else{
//             fullARR.push(newName[i]);
//         }
//     }

//     return fullARR.join('');
// } 

// alert(checkFullName(fullName))



// ============= Task Session2 ================

// عاوز اطلب من اليوزر الاسم  وبعدين العمر  وبعدين الخبره وبعدين تخصصه
// واطبعهم بالشكل ده 
// Name : Ali
// Age :22
// Experience : 2
// Specialization : Frone-end