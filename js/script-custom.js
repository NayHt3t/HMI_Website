// header and footer
$(document).ready(function () {
  $("#header").load("layouts/header.html", function () {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
      const linkPath = link.getAttribute("href").split("/").pop();
      if (linkPath === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

  $("#footer").load("layouts/footer.html", function () {
    const currentPath = window.location.pathname.split("/").pop();
    const footerLink = document.querySelectorAll(".footer-link");

    footerLink.forEach(link => {
      const linkPath = link.getAttribute("href").split("/").pop();
      if (linkPath === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

var ctx = document.getElementById('studentPieChart').getContext('2d');
var studentPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Matriculation Exam', 'IT and Electric Field', 'Business Management', 'Art & Science Field', 'Medicine'],
    datasets: [{
      data: [64, 12, 8, 8, 8],
      backgroundColor: ['#36A2EB', '#9966FF', '#4BC0C0', '#FFCE56', '#FF6384'],
      hoverOffset: 4
    }]
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          boxWidth: 10,
          boxHeight: 10
        }
      }
    }
  }
});

