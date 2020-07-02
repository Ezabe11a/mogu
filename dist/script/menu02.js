"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu = /*#__PURE__*/function () {
  function Menu(title, clsName, href, subClsName) {
    _classCallCheck(this, Menu);

    this.title = title;
    this.clsName = clsName;
    this.href = href;
    this.children = [];
    this.subClsName = subClsName;
  } //给该菜单增加子菜单。


  _createClass(Menu, [{
    key: "appendSubMenu",
    value: function appendSubMenu(obj) {
      this.children.push(obj);
    } //

  }, {
    key: "render",
    value: function render(boxDom) {
      //1、创建li
      var liDom = document.createElement("li");
      liDom.className = this.clsName;
      boxDom.appendChild(liDom); //2、创建a

      if (this.href == "") {
        var spanDom = document.createElement("span");
        spanDom.innerHTML = this.title;
        liDom.appendChild(spanDom);
      } else {
        var aDom = document.createElement("a");
        aDom.innerHTML = this.title;
        aDom.href = this.href;
        liDom.appendChild(aDom);
      } //3、创建孩子


      if (this.children.length > 0) {
        //1）、创建孩子的容器
        var ulDom = document.createElement("ul");
        ulDom.className = this.subClsName;
        liDom.appendChild(ulDom); //2）、创建孩子

        for (var i in this.children) {
          this.children[i].render(ulDom);
        }
      }
    }
  }]);

  return Menu;
}(); //根菜单没有外观，仅仅只是包含所有的一级菜单而已


var RootMenu = /*#__PURE__*/function () {
  function RootMenu(boxDom) {
    _classCallCheck(this, RootMenu);

    this.boxDom = boxDom;
    this.children = []; //所有的一级菜单
  }

  _createClass(RootMenu, [{
    key: "appendSubMenu",
    value: function appendSubMenu(menu) {
      this.children.push(menu);
    }
  }, {
    key: "render",
    value: function render() {
      for (var i in this.children) {
        this.children[i].render(this.boxDom);
      }
    }
  }]);

  return RootMenu;
}(); //指定父菜单对象和子菜单数据，创建子菜单。
//参数：
//parentMenu:福菜单对象
//sonMenus:子菜单的数据


function createSonMenu(parentMenu, sonMenus) {
  for (var i = 0; i < sonMenus.length; i++) {
    var menu = new Menu(sonMenus[i].title, sonMenus[i].className, sonMenus[i].href, sonMenus[i].ulClass);
    parentMenu.appendSubMenu(menu);

    if (sonMenus[i].children && Array.isArray(sonMenus[i].children)) {
      //创建孩子的孩子        
      createSonMenu(menu, sonMenus[i].children);
    }
  }
}

function createMenu(boxDom, sonMenus) {
  var rootMenu = new RootMenu(boxDom); //创建所有的菜单对象

  createSonMenu(rootMenu, sonMenus); //渲染

  rootMenu.render();
}