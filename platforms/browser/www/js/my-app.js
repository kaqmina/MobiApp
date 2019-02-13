var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.example.cleanblank',
  // Pushstate
  view: {
    pushState: true
  },
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
    {
      path: '/index/',
      url: 'index.html',
    },
    {
      path: '/time/',
      url: 'timeline.html',
    },
    {
      path: '/food/',
      url: 'food.html',
    },
    {
      path: '/list/',
      url: 'listview.html',
    },
    {
      path: '/attire/',
      url: 'attire.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');


$('#listview').click(function() {
    mainView.router.navigate  ('/list/');
});

$('#events').click(function() {
  mainView.router.navigate  ('/time/');
});

$('#clothing').click(function() {
  mainView.router.navigate  ('/attire/');
});

$('#food').click(function() {
  mainView.router.navigate  ('/food/');
});