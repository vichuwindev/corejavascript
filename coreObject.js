tion alertMnl(callBack){//recieving a functiona  as a parameter
	alert('before callBack');
	return callBack();//does not execute next alert
	alert('after callBack');
}
// alertMnl(function(){//passing function as an argument of another function
// // alert('inside callBacks');******
// // });
// // alter table credit_repayment_mysc_ngl add column bill_category enum('gst','estimation','quotation','performa') after payment_mode;
//
// //Null is collasing operator
// //It returns the first defined value
//
// let a = 10;
// console.log(a??b);
// console.log((1&&2)??3);
//
// //arrow functions
// //if it enclose inside a curly braces return keyword is usable otherwise return keyword is not acceptable in arrow function
//
// let ask = (question,yes,no) =>{
// if(confirm(question)) yes();
// else no();
// }
// // ask("Do you agree?",() => {alert("You agreed,")},() => {alert("you canceled the execution")});********
//
// //objects
// window.name = 'vishnuWindow';
// let objecta = {};
// // let objectb = {};// In this case they are not referencing to same object
// let objectb = objecta;
// console.log(objecta === objectb);//In objects === checks the address and values
// // but
// let stringA = 'A';
// let stringB = 'A';
// console.log(stringA === stringB);//but in primitive types it checks its type and value
//
// let orginalObj = {user:'vishnu'};
// let objWtObjProp = {user:'vishnu',address:{
// street:'vinayagarStreet',
// town:"Krishnancoil"
// }}
// // let cloneObj = Object.assign(orginalObj); //these two method of copying obj will reflect changes in both objects
// let cloneObj = objWtObjProp;
// //for seperate memory address
// // let cloneObj = Object.assign({},objWtObjProp);
// console.log(cloneObj);
// console.log(objWtObjProp);
// // console.log(objWtObjProp.address === cloneObj.address);//now the objects inside are objected
// // console.log(objWithObjP)
// cloneObj.age = 23;
// // cloneObj = null;
// console.log(cloneObj);
// console.log(objWtObjProp);
//
// //garbage collector
// //mark and sweep
//
// let methodObj = {
// id:1,
// skill:'Cricket',
// name:'vishnuObj',
// sayHi(){
// alert('method of the object');
// }
// }
// methodObj.sayHi();
// methodObj.sayHiOut = sayHiOut;
// function sayHiOut(name){
// alert(this);
// alert(this.name);
// }
// // sayHiOut('vishnu');//here this refers to window object but incase of strict mode this will results in undefined******
// // methodObj.sayHiOut('vishnu');//here this refers to object before dot*******
// // for making chaining call of methods inside the object return the object itself from the function
//
// //object with new keyword
//
// function NewObject(name){
// this.name =name,
// alert(new.target)
// this.strength='abnormal skills'
// }
// let newObjCrt1 = new NewObject('vishnuSpr');
// alert(newObjCrt1.name);
// // NewObject('maasss');
// //here new creates a empty object and appends the properties to it.
// //we can create new objects like class
//
// function calculator(){
// this.read = function(){
// this.a = + prompt('enter first value',0);
// this.b = + prompt('enter second value',0);
// }
// this.sum = function(){
// return this.a + this.b;
// }
// }
// let calcObj = new calculator();
// // calcObj.read();
// // alert(calcObj.sum());
// console.log(calcObj);
//
// //optional chaining
// let optUser={
// user:'dddd'
// }
// console.log(optUser.user);
// console.log(optUser.user?.address);
// //use while accessing the method of an object.
// let key = "userName";
//
// let optUsrNm ={
// userName:'vishnu'
// }
// console.log(optUsrNm[key]);
// console.log(optUser?.[key]);
//
// //symbols
// //used for maintain or create hidden properties for objects
// let apiObj ={
// user:'vishnu'
// }
// let id = Symbol('id');
// apiObj[id] = 10;
// console.log(apiObj[id]);
// //As user objects belong to another codebase, it’s unsafe to add fields to them, since we might affect pre-defined behavior in that other codebase. However, symbols cannot be accessed accidentally. The third-party code won’t be aware of newly defined symbols, so it’s safe to add symbols to the user objects.
//
// let apiObj1 ={
// [id]:10,//use symbols as a key,put them inside square brackets That’s because we need the value from the variable id as the key, not the string “id”.
// }
// //the symbol property omitted in for in loop
// //Global Symbols
// /*As we’ve seen, usually all symbols are different, even if they have the same name. But sometimes we want same-named symbols to be same entities. For instance, different parts of our application want to access symbol "id" meaning exactly the same property.
//
// To achieve that, there exists a global symbol registry. We can create symbols in it and access them later, and it guarantees that repeated accesses by the same name return exactly the same symbol.
//
// In order to read (create if absent) a symbol from the registry, use Symbol.for(key).
//
// That call checks the global registry, and if there’s a symbol described as key, then returns it, otherwise creates a new symbol Symbol(key) and stores it in the registry by the given key.*/
//
// let idd = Symbol.for(100);//global Symbol
// // idd = id we can overwrite Symbol values lik normal variables
// console.log(Symbol.keyFor(idd));//accessing Global symbol
// //we can see them Symbol tables in internet
// // Technically, symbols are not 100% hidden. There is a built-in method Object.getOwnPropertySymbols(obj) that allows us to get all symbols. Also there is a method named Reflect.ownKeys(obj) that returns all keys of an object including symbolic ones. But most libraries, built-in functions and syntax constructs don’t use these methods.
//
// console.log(apiObj + 10);//If we add object to primitive it auto converts them in to primitive
// let syObj = {
// [id]:10,
// name:'suii',//use symbols as a key,put them inside square brackets That’s because we need the value from the variable id as the key, not the string “id”.
// [Symbol.toPrimitive](hint){
// alert(`hint:${hint}`);
// return hint == 'string' ? this.name:Symbol.keyFor(idd);
// }
// }
// console.log(syObj[id]);//we can access Symbols key value only through []
// console.log(+syObj);
// // As we can see from the code, syObj becomes a self-descriptive name or a symbol id, depending on the conversion. The single method user[Symbol.toPrimitive] handles all conversion cases.
// // In the absence of Symbol.toPrimitive and valueOf, toString will handle all primitive conversions.If we have explicitly define these functions inside our object then it will be called else the built in methods are called
// // For historical reasons, if toString or valueOf returns an object, there’s no error, but such value is ignored (like if the method didn’t exist). That’s because in ancient times there was no good “error” concept in JavaScript.
// // In contrast, Symbol.toPrimitive is stricter, it must return a primitive, otherwise there will be an error
// // Read-Eval-Print-Loop -> REPL
