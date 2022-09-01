// destracturing and accesing
//[a,b,...rest]=[123,34,4534,56,'mahesh','sravani','raju','likhitha'];
//console.log(a);
//console.log(b);
//console.log(rest);// means the rest will come
//console.log(rest['3']);// not accepeted rest will come all
//console.log(rest[4]);// here in rest the index 4 value will come.





// let hero=['Mahesh','nani','NTR',"Raviteja",'RamCharan','Sunil']
// let [Keerthy,rosi,Jenny,Nayanatara,Kajal,saloni,Roman,Rock]=hero;

// console.log(Jenny);
// console.log(saloni);
// console.log(hero[0]);
// console.log(Rock); // not assigned to hero so undefined will come.




// interchanging the numbers.
// let x=123;
// let y="mahesh";
// let z='nani'
// z=y;
// [x,y]=[y,x]
// console.log(x);
// console.log(y);
// console.log(z)

const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6,234,345,2433,4234,8];
console.log(a,b,c,d,e,f,); // 1 2 3 4 5 6





