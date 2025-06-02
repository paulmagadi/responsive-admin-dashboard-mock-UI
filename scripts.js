
const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");
const main = document.querySelector(".main-content");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    main.classList.toggle("expanded");

    if (sidebar.classList.contains("collapsed")) {
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        toggleBtn.innerHTML = '<i class="fa-solid fa-angle-left"></i><i class="fas fa-bars"></i>';
    }
});

const toggleBtnTopnav = document.getElementById("toggle-btn-topbar");
toggleBtnTopnav.addEventListener("click", () => {
sidebar.classList.toggle("show");
    if (sidebar.classList.contains("show")) {
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        toggleBtn.innerHTML = '<i class="fa-solid fa-angle-left"></i><i class="fas fa-bars"></i>';
    }
});

const exitSidebar = document.getElementById("exit-sidebar");

exitSidebar.addEventListener("click", () => {
    sidebar.classList.remove("show");
});

  // Sales Chart (bar)
  const salesChart = new Chart(document.getElementById("salesChart"), {
    type: 'bar',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
      datasets: [{
        label: 'Sales ($)',
        data: [1200, 1900, 3000, 2400, 3100, 3300],
        backgroundColor: '#3498db'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Monthly Sales'
        }
      }
    }
  });

  // Orders Chart (doughnut)
  const ordersChart = new Chart(document.getElementById("ordersChart"), {
    type: 'doughnut',
    data: {
      labels: ["Shipped", "Pending", "Delivered", "Cancelled"],
      datasets: [{
        label: 'Orders',
        data: [12, 8, 25, 2],
        backgroundColor: ['#2ecc71', '#f1c40f', '#3498db', '#e74c3c']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Order Status Breakdown'
        }
      }
    }
  });

    // Daily Visits Line Chart
    const visitsChart = new Chart(document.getElementById("visitsChart"), {
        type: 'line',
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [{
            label: 'Daily Visits',
            data: [120, 150, 170, 130, 190, 220, 200],
            borderColor: '#8e44ad',
            backgroundColor: 'rgba(142, 68, 173, 0.2)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#8e44ad'
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top'
            },
            title: {
              display: true,
              text: 'Website Daily Visits'
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    
