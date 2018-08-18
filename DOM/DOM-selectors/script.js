//dom selectors

//all operation is perform on console. In editor output is slight differ.

//selector-1: getElementsByTagName
console.log(document.getElementsByTagName("h1")); //it identify the element by html tag.
/*output:
    HTMLCollection []
                0:h1
                length:1
                __proto__ : HTMLCollection


  In Console:
  >document.getElementsByTagName("ul")
  <HTMLCollection [ul]
*/
var li = (document.getElementsByTagName("li"));
console.log(li);

//selector-2: getElementsByClassName
console.log(document.getElementsByClassName("first"));

/*output:
   //it store the whole elements which class name is first,store in the htmlcollection array
   HTMLCollection []
        0: p.first 1: p.first
        length: 2
        __proto__: HTMLCollection

  In Console:
  >document.getElementsByClassName("first")
  >HTMLCollection(2) [p.first, p.first]
*/

//to aceess the getElementsByClassName we need to specify the array index.
document.getElementsByClassName("first")[0]  //<p class="first">Get it Done today</p>

document.getElementsByClassName("first")[1];  //<p class="first">this class name is second</p>

document.getElementsByClassName("first")[2];  //undefined


/*In document.getElementsByClassName ,we writes Elements because there are many elements have same class name.*/


//selector-3: getElementById
//In document.getElementById ,we writes Element because there are unique id in webpage.

document.getElementById("second");
/*
> : document.getElementById("second");
< : <p id="second">No execuses.</p>
*/

document.getElementById("second")[0]; //or
document.getElementById("second")[1];
/*
> : document.getElementById("second");
< : undefined
*/


//selector-4: querySelector("element")
//This work same as above selector,but selects only on query.

document.querySelector("h1");
/*
> : document.querySelector("h1");
< : <h1>Shopping List</h1>

>:  console.log(document.querySelector("h1"))
<:  <h1>Shopping List</h1>
    undefined
*/

document.querySelector("li");  //it select only one.
/*
> : document.querySelector("li");
< : <li random="random">A</li>
*/


//selector-4: querySelectorAll("element")
//This work same as above selector,but selects all query.

document.querySelectorAll("li");  //it select only one.
/*
> : document.querySelector("li");
< : NodeList(5) [li, li, li, li, li]

*/
