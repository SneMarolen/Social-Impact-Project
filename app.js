document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('searchDropdown');
  const searchBar = document.querySelector('.search-bar');
  if (dropdown && searchBar && !dropdown.contains(event.target) && !searchBar.contains(event.target)) {
    dropdown.classList.add('hidden');
  }
});

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('hidden');
}