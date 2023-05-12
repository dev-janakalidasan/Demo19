$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".navbar").removeClass("navbar-bg");
            $(".navbar").addClass("navbar-bg2").style.top = "0";
        } else {
            $(".navbar").removeClass("navbar-bg2");
            $(".navbar").addClass("navbar-bg").style.top = "-50px";
        }
    });
});
fetch("./header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
    });

fetch("./footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });


    const myButton = document.getElementById('color-box');
    // const myButton1 = document.getElementById('color-box-1');
    // const myButton2 = document.getElementById('color-box-2');
    const fi1 = document.getElementById('fi_1');
    const fi2 = document.getElementById('fi_2');

    myButton.addEventListener('click', () => {
      fi1.style.display = fi1.style.display === 'none' ? 'block' : 'none';
      fi2.style.display = fi2.style.display === 'block' ? 'none' : 'block';
    
    });


    