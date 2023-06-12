let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section')
let navLink = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// استدعاء الأزرار
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");

// استدعاء الأقسام
var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var section4 = document.getElementById("section4");

// تعريف وظيفة عرض القسم
function showSection(section) {
  section.style.display = "block";
}

// تعريف وظيفة إخفاء القسم
function hideSection(section) {
  section.style.display = "none";
}

// إضافة مستمعين للأزرار
button1.addEventListener("click", function() {
  hideSection(section2);
  hideSection(section3);
  hideSection(section4);
  showSection(section1);
});

button2.addEventListener("click", function() {
  hideSection(section1);
  hideSection(section3);
  hideSection(section4);
  showSection(section2);
});

button3.addEventListener("click", function() {
  hideSection(section1);
  hideSection(section2);
  hideSection(section4);
  showSection(section3);
});

button4.addEventListener("click", function() {
  hideSection(section1);
  hideSection(section2);
  hideSection(section3);
  showSection(section4);
});


// استدعاء الأزرار
var buttons = document.getElementsByClassName("button");

// تعيين الزر الأول كنشط تلقائيًا
buttons[3].classList.add("active");

// تعريف وظيفة استجابة الأزرار
function buttonClick(event) {
  var button = event.target;

  // إزالة الفئة "active" من الأزرار الأخرى
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // إضافة الفئة "active" للزر المنقر عليه
  button.classList.add("active");
}

// إضافة مستمعين للأزرار
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", buttonClick);
}

