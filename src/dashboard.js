// Toggle sidebar
document.addEventListener('DOMContentLoaded', () => {
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('content');

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
      sidebar.classList.toggle('lg:block');
      content.classList.toggle('lg:ml-64');
    });
  }

  // Chart.js implementation for dashboard analytics
  const setupCharts = () => {
    // Revenue Chart
    const revenueCtx = document.getElementById('revenue-chart');
    if (revenueCtx) {
      new Chart(revenueCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
            label: 'Revenue',
            data: [3500, 4800, 4200, 6000, 5800, 7200, 8000],
            borderColor: '#0ea5e9',
            backgroundColor: 'rgba(14, 165, 233, 0.1)',
            tension: 0.3,
            fill: true
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(200, 200, 200, 0.2)'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      });
    }

    // Users Chart
    const usersCtx = document.getElementById('users-chart');
    if (usersCtx) {
      new Chart(usersCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
            label: 'New Users',
            data: [120, 185, 210, 250, 280, 320, 380],
            backgroundColor: '#0ea5e9',
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(200, 200, 200, 0.2)'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      });
    }
  };

  // Initialize charts when Chart.js is loaded
  if (typeof Chart !== 'undefined') {
    setupCharts();
  } else {
    console.log('Chart.js not loaded');
  }

  // Handle notifications
  const notificationButton = document.getElementById('notifications-menu');
  const notificationPanel = document.getElementById('notifications-panel');
  
  if (notificationButton && notificationPanel) {
    notificationButton.addEventListener('click', (e) => {
      e.stopPropagation();
      notificationPanel.classList.toggle('hidden');
    });
    
    document.addEventListener('click', (e) => {
      if (!notificationPanel.contains(e.target) && e.target !== notificationButton) {
        notificationPanel.classList.add('hidden');
      }
    });
  }
}); 