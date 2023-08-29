let string = "";
const display = document.querySelector('#id');
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'AC') {
      string = "";
      document.querySelector('input').value = string;
    }
    else if (button.id == 'clear') {
      string = string.substring(0, string.length - 1);
      document.querySelector('input').value = string;
    }
    else if (button.id == '*'){
      string = string + e.target.id;
      document.querySelector('input').value += button.id;
    }
    else {
      try {
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
      }
      catch(err) {
        alert("Invalid");
      }
    }
  })
})