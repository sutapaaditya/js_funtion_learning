let m = document.getElementById('main');

let d = document.createElement('div');
d.classList.add("button");
d.classList.add("green");
d.textContent = "I can do it 🙂"

m.append(d);



let h = document.createElement('a');
h.classList.add('red');
h.classList.add('button');
h.textContent = 'In my future'

m.append(h);

setInterval (() => {
  if (d.classList.contains('green')) {
    d.classList.remove('green');
    d.classList.add('red');

    d.textContent = "I can do it 🙂";
  } else {
    d.classList.remove('red');
    d.classList.add('green');
    d.textContent = "yes🥰"; 
  } 
}, 2000);


setInterval (() => {
  if (h.classList.contains('green')) {
    h.classList.remove('red');
    h.classList.add('green');

    h.textContent = "Always believe yourself 🙂";
  } else {
    h.classList.remove('red');
    h.classList.add('green');
    h.textContent = "yes !😎🥰"; 
  } 
}, 2000);


