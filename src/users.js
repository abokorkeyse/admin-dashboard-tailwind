document.addEventListener('DOMContentLoaded', () => {
  // Toggle sidebar functionality
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

  // Notification functionality
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

  // Search functionality
  const searchInput = document.getElementById('search');
  const roleFilter = document.getElementById('role');
  const statusFilter = document.getElementById('status');
  const userRows = document.querySelectorAll('tbody tr');

  const filterUsers = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedRole = roleFilter.value.toLowerCase();
    const selectedStatus = statusFilter.value.toLowerCase();

    userRows.forEach(row => {
      const userName = row.querySelector('td:nth-child(1)').textContent.toLowerCase();
      const userEmail = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
      const userRole = row.querySelector('td:nth-child(3)').textContent.toLowerCase();
      const userStatus = row.querySelector('td:nth-child(4)').textContent.toLowerCase();
      
      const matchesSearch = userName.includes(searchTerm) || userEmail.includes(searchTerm);
      const matchesRole = selectedRole === '' || userRole.includes(selectedRole);
      const matchesStatus = selectedStatus === '' || userStatus.includes(selectedStatus);
      
      if (matchesSearch && matchesRole && matchesStatus) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  };

  if (searchInput) {
    searchInput.addEventListener('input', filterUsers);
  }
  
  if (roleFilter) {
    roleFilter.addEventListener('change', filterUsers);
  }
  
  if (statusFilter) {
    statusFilter.addEventListener('change', filterUsers);
  }

  // Add User Modal Functionality
  const addUserBtn = document.querySelector('.btn-primary');
  
  if (addUserBtn) {
    addUserBtn.addEventListener('click', () => {
      // In a real application, this would open a modal for adding a new user
      alert('This would open a form to add a new user in a real application');
    });
  }

  // Action buttons functionality
  const editButtons = document.querySelectorAll('button[title="Edit user"]');
  const viewButtons = document.querySelectorAll('button[title="View details"]');
  const deleteButtons = document.querySelectorAll('button[title="Delete user"]');
  
  editButtons.forEach(button => {
    button.addEventListener('click', function() {
      const userName = this.closest('tr').querySelector('td:nth-child(1) .text-sm').textContent;
      alert(`Edit user: ${userName}`);
    });
  });
  
  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
      const userName = this.closest('tr').querySelector('td:nth-child(1) .text-sm').textContent;
      alert(`View details for user: ${userName}`);
    });
  });
  
  deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
      const userName = this.closest('tr').querySelector('td:nth-child(1) .text-sm').textContent;
      if (confirm(`Are you sure you want to delete user: ${userName}?`)) {
        // In a real application, this would send a request to delete the user
        alert(`User ${userName} would be deleted in a real application`);
      }
    });
  });
}); 