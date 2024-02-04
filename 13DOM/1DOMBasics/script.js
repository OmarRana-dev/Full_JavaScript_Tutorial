// const parent = document.querySelector(".parent")
// console.log(parent)
// this will throw your htmlcollection of all childs
// console.log(parent.children)
// console.log(parent.children[1].innerHTML)

// // and we able to put simple for loop on HTML collection
// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML)
// }

// // also some of the array propertis access by HTMLCollection
// parent.children[1].style.color = "orange"

// // not going to selects itmes from query because its make more complexe for  javascript engin
// // use its giving elements
// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)

// const day1 = parent.firstElementChild;

// console.log(day1.parentElement)
// console.log(day1.nextElementSibling)
// console.log(day1)

// // create now elements in javascript
// const parent1 = document.querySelector(".parent");
// console.log(parent1);

// const div1 = document.createElement("div");
// div1.className = "main"
// div1.setAttribute("styel", "color: red");
// div1.appendChild(document.createTextNode("Hello Bro"));
// document.body.appendChild(div1)

// // Create new elements with javascript function
// const parent = document.querySelector(".parent");

// function CreateElements(element) {
//   const ele = document.createElement("div");
//   ele.setAttribute("class", "day");
//   ele.appendChild(document.createTextNode(element));
//   parent.appendChild(ele);
// }

// CreateElements("Friday");
// CreateElements("Saturday");
// CreateElements("Sunday");

// // Now maybe you want to edit some thing
// function editElement(element_text, element_no) {
//   const secondLang = parent.children[element_no];
//   const newdiv = document.createElement("div");
//   newdiv.textContent = element_text;
//   secondLang.replaceWith(newdiv);

//   //   secondLang.innerText = element_text //this way is not good way
// }

// editElement("WEEKDAY", 6);

// // another editer 
// const editelement2 = parent.children[1]
// editelement2.outerHTML = '<div>Friday</div>'  


// // now maybe you want to remove some thing
// const removeElement = parent.children[1]
// removeElement.remove()