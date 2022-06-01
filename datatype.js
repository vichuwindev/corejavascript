//Primitive Data Types
////primitives holds single values but in the case they can also provide inbuilt functions because of object wrapper.It provides necesary functions and get destroyed when the function returns a value
////unll and undefined are the most primitive one because it does not provide object wrappers.
//"use strict"
//let str = 'vishnu';
//// str.test = 'won';
//// console.log(str.test);
//let a = 0b11111111; // binary form of 255
//let b = 0o377; // octal form of 255
//console.log(typeof(a));
//console.log(typeof(b));
//console.log( a === b );
//console.log(a.toString(10));//converts the base of numbers specifies in the brackets
//console.log(a.toString(36));/*base=36 is the maximum, digits can be 0..9 or A..Z. The whole latin alphabet is used to represent a number. A funny, but useful case for 36 is when we need to turn a long numeric identifier into something shorter, for example to make a short url. Can simply represent it in the numeral system with base 36:*/
///*lease note that two dots in 123456..toString(36) is not a typo. If we want to call a method directly on a number, like toString in the example above, then we need to place two dots .. after it.
//
//If we placed a single dot: 123456.toString(36), then there would be an error, because JavaScript syntax implies the decimal part after the first dot. And if we place one more dot, then JavaScript knows that the decimal part is empty and now goes the method.
//
//Also could write (123456).toString(36).*/
//let numToRnd = 123.34443;
//let roundedNum = Math.round(numToRnd * 100);
//console.log(roundedNum);
////in decimal number system 1/10 is measurable but in bianry number system 1/10 becomes infinity
//let compAdd = 0.1+0.2;
//console.log(compAdd.toFixed(2));
//console.log(typeof(compAdd.toFixed(2)));//eventuallt to fixed methods returns stirng
//console.log(compAdd.toFixed(2) + 2);//string
//console.log(+compAdd.toFixed(2) + 2);//number
//console.log( 9999999999999999 ); // shows 10000000000000000
///*
//This suffers from the same issue: a loss of precision. There are 64 bits for the number, 52 of them can be used to store digits, but that’s not enough. So the least significant digits disappear.
//
//JavaScript doesn’t trigger an error in such events. It does its best to fit the number into the desired format, but unfortunately, this format is not big enough.
//
//*///Also study about bits and bytes storage in programming (in our case javascript)
//console.log(Object.is(0,0));
//console.log(Object.is(0,-0));//return false because the sign bit is different here.
////Parse Int ad Parse Float
///*The sole exception is spaces at the beginning or at the end of the string, as they are ignored.
//
//But in real life we often have values in units, like "100px" or "12pt" in CSS. Also in many countries the currency symbol goes after the amount, so we have "19€" and would like to extract a numeric value out of that.
//
//That’s what parseInt and parseFloat are for.
//
//They “read” a number from a string until they can’t. In case of an error, the gathered number is returned. The function parseInt returns an integer, whilst parseFloat will return a floating-point number:*/
// console.log(+'100px');//Nan
//  console.log(parseInt('100px'));//Int
//   console.log(parseFloat('100px'));//Float
//
//    /*1.In case of Repay if the type is not cash => convert the bill category to gst.
//      2.In case of converting any type of bill to gst convert all the repay correspond to that bill in to gst*/
//      function randomInteger(min, max) {
//        // now rand is from  (min-0.5) to (max+0.5)
//          let rand = min - 0.5 + Math.random() * (max - min + 1);
//            return Math.round(rand);
//            }
//            console.log( randomInteger(1, 3));
//            let randomNum = Math.random();
//            console.log(1 - 0.5 + randomNum * (5-1));
//
//            let strA = 'Hello';
//            console.log(strA.charAt(7));//returns emptty string
//            console.log(strA[7]);//returns undefined
//            // Strings can’t be changed in JavaScript. It is impossible to change a character.
//            console.log(String.fromCodePoint(5));
//            console.log("z".codePointAt(0));
//            console.log("vishnu".localeCompare('cr7'));
//            /*All frequently used characters have 2-byte codes. Letters in most european languages, numbers, and even most hieroglyphs, have a 2-byte representation.
//
//            But 2 bytes only allow 65536 combinations and that’s not enough for every possible symbol. So rare symbols are encoded with a pair of 2-byte characters called “a surrogate pair”.*/
//            console.log('\u0307\u0323');
//            console.log('S\u0307\u0323');
//            console.log(strA.repeat(5));
//            /*For stacks, the latest pushed item is received first, that’s also called LIFO (Last-In-First-Out) principle. For queues, we have FIFO (First-In-First-Out).
//
//            Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements both to/from the beginning or the end.
//
//            In computer science the data structure that allows this, is called deque.*/
//            /*Two objects are equal == only if they’re references to the same object.
//            If one of the arguments of == is an object, and the other one is a primitive, then the object gets converted to primitive, as explained in the chapter Object to primitive conversion.
//            …With an exception of null and undefined that equal == each other and nothing else.*/
//            let spliceAr= [1,2,3,4];
//            // console.log(spliceAr);
//            // spliceAr.splice(2,1);//removes one elemnt from index one first one index and second one number of elements to be removed
//            // console.log(spliceAr);
//            // Here and in other array methods, negative indexes are allowed. They specify the position from the end of the array, like here:
//            spliceAr.splice(-1,0,5,6);//adds new elements 5 and 6 in the array just before the last one.
//            console.log(spliceAr);
//            console.log(spliceAr.slice(1,3));
//            spliceAr = spliceAr.concat([7,8]);
//            console.log(spliceAr);
//
//            let arraylike={
//            0:'something',
//            [Symbol.isConcatSpreadable]: true,
//            length:1
//            }//without System isconcatSpreadable variable we cannot add the properties of object like normal primitive values
//            console.log(spliceAr.concat(arraylike));
//            spliceAr.forEach((item,index)=>{
//            console.log(item,index);
//            });
//            let listSplAr = spliceAr.find(item => item < 5);//returns single found valur
//            let listFiltAr = spliceAr.filter(item => item < 5);//returns multiple found values
//            console.log(listSplAr);
//            console.log(listFiltAr);
//
//            let listMapAr = spliceAr.map((item,index,array) =>{
//            return item+item; //perform some actons on the values of an array and returns the array with updated value
//            })
//            console.log(listMapAr);
//            console.log(spliceAr.sort());
//            console.log(spliceAr.reverse());
//            console.log(spliceAr.sort((a,b) => b-a));
//            let cmplxAr = [11,'d',3,5,0,2,'f','[]'];
//            console.log(cmplxAr.sort());
//            console.log(cmplxAr.sort((a,b) => {
//            a = (typeof(a) == 'string') ? a.codePointAt(0) : a;
//            b = (typeof(b) == 'string') ? b.codePointAt(0) : b;
//            console.log(typeof(a));
//            return a-b;
//            }));
//            console.log(typeof('a') == 'string');
//            let strArr = ['sa','bbb','sdsdsd'];
//            console.log(strArr.sort((a,b) => a.localeCompare(b))); //sort based on first letter assci code
//            console.log(strArr.sort((a,b) => {
//            return (a.length == b.length) ? 0 :(a.length > b.length) ? 1 : -1;//sort based on length of string
//
//            }))
//            /*The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.
//            The syntax is:
//            let value = arr.reduce(function(accumulator, item, index, array) {
//              // ...
//              }, [initial]);
//              The function is applied to all array elements one after another and “carries on” its result to the next call.
//
//              Arguments:
//              accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
//              item – is the current array item.
//              index – is its position.
//              array – is the array.
//              As function is applied, the result of the previous function call is passed to the next one as the first argument.
//
//              So, the first argument is essentially the accumulator that stores the combined result of all previous executions. And at the end it becomes the result of reduce.*/
//              let simpleArr = [1,2,4,5,'10000',866545,55];
//              let reduceStA = console.log(simpleArr.reduce((sum,current) => {
//              sum = (current == simpleArr[0]) ? 0 : sum;
//              console.log(sum)
//              return sum+(+current);//without this conversion we get string of values after an string encountered instead of number
//              }));
//              //reduceRight goes from right to left
//              console.log(Array.isArray([]));//checks it array or not
//
//              let army = {
//                minAge: 18,
//                  maxAge: 27,
//                    canJoin(user) {
//                        return user.age >= this.minAge && user.age < this.maxAge;
//                          },
//                            showMinAge(){
//                              return this.minAge;
//                                }
//                                };
//
//                                let users = [
//                                  {age: 16},
//                                    {age: 20},
//                                      {age: 23},
//                                        {age: 30}
//                                        ];
//                                        // find users, for who army.canJoin returns true
//                                        let soldiers = users.filter(army.canJoin, army);
//                                        console.log(soldiers);
//                                        console.log(army.showMinAge());
//                                        /*If in the example above we used users.filter(army.canJoin), then army.canJoin would be called as a standalone function, with this=undefined, thus leading to an instant error.
//
//                                        A call to users.filter(army.canJoin, army) can be replaced with users.filter(user => army.canJoin(user)), that does the same. The latter is used more often, as it’s a bit easier to understand for most people.*/
//                                        /*These methods are the most used ones, they cover 99% of use cases. But there are few others:
//
//                                        arr.some(fn)/arr.every(fn) check the array.
//
//                                        The function fn is called on each element of the array similar to map. If any/all results are true, returns true, otherwise false.
//
//                                        These methods behave sort of like || and && operators: if fn returns a truthy value, arr.some() immediately returns true and stops iterating over the rest of items; if fn returns a falsy value, arr.every() immediately returns false and stops iterating over the rest of items as well.*/
//                                        let range = {
//                                          from: 1,
//                                            to: 5
//                                            }
//                                            for(let num of range){
//                                            console.log(num);
//                                            }
