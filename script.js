function showTab(event, tabId) {
    event.preventDefault();
    const tabs = document.querySelectorAll('.tab-content');
    const links = document.querySelectorAll('.tabs a');

    // Hide all tabs
    tabs.forEach(tab => tab.classList.remove('active'));
    // Remove active state from links
    links.forEach(link => link.classList.remove('active'));

    // Activate the clicked tab
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
    event.target.classList.add('active');
}
