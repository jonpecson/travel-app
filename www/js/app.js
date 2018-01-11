// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular
  .module("starter", ["ionic", "starter.controllers"])

  .run(function($ionicPlatform, $rootScope, $location, $ionicPopup) {
    $rootScope.list = [
      { id: "1", img: "img/001.png" },
      { id: "2", img: "img/002.png" },
      { id: "3", img: "img/003.png" }
    ];
    $rootScope.home_list = [
      { id: "1", img: "img/004.png" },
      { id: "2", img: "img/002.png" },
      { id: "3", img: "img/005.png" }
    ];
    $rootScope.offers = [
      {
        id: "1",
        img: "img/007.png",
        name: "Jumeirah Beach",
        discount: "-35%",
        rate: "Excellent – 89",
        maxprice: "$627",
        minprice: "$502"
      },
      {
        id: "2",
        img: "img/008.png",
        name: "Roda Al Murooj",
        discount: "-28%",
        rate: "Poor – 69",
        maxprice: "$627 ",
        minprice: "$448"
      },
      {
        id: "3",
        img: "img/009.png",
        name: "Atlantis The Palm",
        discount: "Top Deal",
        rate: "Excellent – 90",
        maxprice: "$659 ",
        minprice: "$331"
      },
      {
        id: "4",
        img: "img/006.png",
        name: "Hilton Dubai Jumeirah Residence",
        discount: "-27%",
        rate: "Very good – 81 ",
        maxprice: "$330 ",
        minprice: "$164"
      }
    ];

    $rootScope.big_img = "img/001.png";
    $rootScope.showImg = function(img) {
      $rootScope.big_img = img;
    };
    /**********forget password***********/

    $rootScope.forget_password = function() {
      $ionicPopup.show({
        template:
          '<p>Enter your email address below.</p><div class="app_form"><label class="item item-input user_name"><i class="icon ion-email placeholder-icon main_color"></i><input type="email" placeholder="E-mail"></label></div>',
        title: "Forget Password",
        subTitle: " ",
        scope: $rootScope,
        buttons: [
          {
            text: "Send",
            type: "button-block bg_color"
          },
          {
            text: "cancel",
            type: "button-block sec_bg"
          }
        ]
      });
    };
    $rootScope.activeItemMenu = function(index) {
      $rootScope.activeMenu = index;
    };
    $rootScope.bookMark = function(item) {
      item.add_tolist = !item.add_tolist;
    };
    $rootScope.goto = function(url) {
      $location.path(url);
    };

    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.navBar.alignTitle("center");
    $ionicConfigProvider.backButton.text("").previousTitleText("");
    $stateProvider

      .state("app", {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: "AppCtrl"
      })
      .state("app.detail", {
        url: "/detail",
        views: {
          menuContent: {
            templateUrl: "templates/detail.html"
          }
        }
      })
      .state("app.about", {
        url: "/about",
        views: {
          menuContent: {
            templateUrl: "templates/about.html"
          }
        }
      })
      .state("app.services", {
        url: "/services",
        views: {
          menuContent: {
            templateUrl: "templates/services.html"
          }
        }
      })
      .state("app.home", {
        url: "/home",
        views: {
          menuContent: {
            templateUrl: "templates/home.html"
          }
        }
      })
      .state("app.reservation", {
        url: "/reservation",
        views: {
          menuContent: {
            templateUrl: "templates/reservation.html"
          }
        }
      })
      .state("app.contact", {
        url: "/contact",
        views: {
          menuContent: {
            templateUrl: "templates/contact.html"
          }
        }
      })
      .state("login", {
        url: "/login",
        templateUrl: "templates/login.html"
      })
      .state("register", {
        url: "/register",
        templateUrl: "templates/register.html"
      })
      .state("app.offer", {
        url: "/offer",
        views: {
          menuContent: {
            templateUrl: "templates/offer.html"
          }
        }
      })

      .state("app.single", {
        url: "/playlists/:playlistId",
        views: {
          menuContent: {
            templateUrl: "templates/playlist.html",
            controller: "PlaylistCtrl"
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise("/login");
  });
