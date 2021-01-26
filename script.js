const navTabs = document.querySelectorAll("#nav-tabs > a");
navTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    navTabs.forEach((tab) => {
      tab.classList.remove("active");
      const id = tab.getAttribute('data-target');
      const element = document.getElementById(id);
      if(element !== null){
        element.classList.remove("active");
        }
    });
    tab.classList.add("active");
      const id = tab.getAttribute('data-target');
      const element = document.getElementById(id);
      if(element !== null){
        element.classList.add("active");
        }
  });
});

