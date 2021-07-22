// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello '+'World!';  // 将标题改为Hello World
// alert('YSW no JJ.'); // call function to display notice.

/* 条件语句 */
// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//     alert('I prefer chocolate iceCream!');
// } else {
//     alert('But chocolate is my favor.');
// }

// Function 
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

// 响应点击事件
document.querySelector('h1').onclick = function() {
    alert('Aha!');
}

let myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/firefox-icon.jpg') {
//         myImage.setAttribute('src', 'images/EMU.jpg');
//     } else {
//         myImage.setAttribute('src', 'images/firefox-icon.jpg');
//     }
//     alert('图片已经切换!');
// }

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字:');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name',myName);
        // alert('')
        myHeading.textContent = 'Hello, ' + myName;            
    }
    alert('Hello, '+ myName);
}

// 初始化
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName ;
}

myButton.onclick = function() {
    setUserName();
}
