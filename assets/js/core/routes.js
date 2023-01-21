const routes = {
  '/': '/pages/home.html',
  '/article': '/pages/article.html'
};

const handleLocation = (path) => {
  const routing = routes[path];
  const request = new XMLHttpRequest();
  request.open("GET", `${routing}`, false);
  request.send(null);
  const response = request.responseText || '';
  const content = document.getElementById('content');
  content.innerHTML = response;

  const components = content.querySelectorAll('component');
  componentImplementation(components);
};

window.addEventListener("load", (event) => {
  handleLocation('/');
}, false);
