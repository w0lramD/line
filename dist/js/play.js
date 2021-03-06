// Optimizing some brushes' settings for painting

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x9, _x10, _x11) { var _again = true; _function: while (_again) { var object = _x9, property = _x10, receiver = _x11; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x9 = parent; _x10 = property; _x11 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GrowLineBrush = (function (_GrowLine) {
  _inherits(GrowLineBrush, _GrowLine);

  function GrowLineBrush() {
    _classCallCheck(this, GrowLineBrush);

    _get(Object.getPrototypeOf(GrowLineBrush.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(GrowLineBrush, [{
    key: "draw",
    value: function draw() {
      var f = arguments.length <= 0 || arguments[0] === undefined ? this.form : arguments[0];

      if (!this.shouldDraw()) return;
      f.stroke(this.getColor()).fill(false);
      f.growLine(this.points, this.lastPoints, 7);
    }
  }]);

  return GrowLineBrush;
})(GrowLine);

var JaggedLineBrush = (function (_JaggedLine) {
  _inherits(JaggedLineBrush, _JaggedLine);

  function JaggedLineBrush() {
    _classCallCheck(this, JaggedLineBrush);

    _get(Object.getPrototypeOf(JaggedLineBrush.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(JaggedLineBrush, [{
    key: "draw",
    value: function draw() {
      var f = arguments.length <= 0 || arguments[0] === undefined ? this.form : arguments[0];

      if (!this.shouldDraw()) return;

      f.stroke(this.getColor());
      f.jaggedLine(this.points, this.lastPoints, 10, 4);
    }
  }]);

  return JaggedLineBrush;
})(JaggedLine);

var InnerLineBrush = (function (_WiggleLine) {
  _inherits(InnerLineBrush, _WiggleLine);

  function InnerLineBrush() {
    _classCallCheck(this, InnerLineBrush);

    _get(Object.getPrototypeOf(InnerLineBrush.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(InnerLineBrush, [{
    key: "draw",
    value: function draw() {
      var f = arguments.length <= 0 || arguments[0] === undefined ? this.form : arguments[0];

      if (!this.shouldDraw()) return;

      f.stroke(this.getColor()).fill(false);
      f.innerLine(this.points, 20, 2, 7, 0, 2);
    }
  }]);

  return InnerLineBrush;
})(WiggleLine);

var DottedLineBrush = (function (_DottedLine) {
  _inherits(DottedLineBrush, _DottedLine);

  function DottedLineBrush() {
    _classCallCheck(this, DottedLineBrush);

    _get(Object.getPrototypeOf(DottedLineBrush.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(DottedLineBrush, [{
    key: "draw",
    value: function draw() {
      var f = arguments.length <= 0 || arguments[0] === undefined ? this.form : arguments[0];

      if (!this.shouldDraw()) return;

      f.fill(this.getColor()).stroke(false);
      f.dottedLine(this.points, 3, 1, 0.5);
    }
  }]);

  return DottedLineBrush;
})(DottedLine);

var ZigZagLineBrush = (function (_ZigZagLine) {
  _inherits(ZigZagLineBrush, _ZigZagLine);

  function ZigZagLineBrush() {
    _classCallCheck(this, ZigZagLineBrush);

    _get(Object.getPrototypeOf(ZigZagLineBrush.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(ZigZagLineBrush, [{
    key: "draw",
    value: function draw() {
      var f = arguments.length <= 0 || arguments[0] === undefined ? this.form : arguments[0];

      if (!this.shouldDraw() || Math.random() < 0.5) return;

      this.maxTracePoints = 1 + Math.floor(Math.random() * 8);

      var swidth = this.tracing ? 1 : 2;
      f.stroke(this.getColor(), swidth).fill(false);
      f.zigZagLine(this.points, Math.random() / 3, this.maxDistance(10));
    }
  }]);

  return ZigZagLineBrush;
})(ZigZagLine);

var NoiseBrushTwo = (function (_NoiseBrush) {
  _inherits(NoiseBrushTwo, _NoiseBrush);

  function NoiseBrushTwo() {
    _classCallCheck(this, NoiseBrushTwo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _get(Object.getPrototypeOf(NoiseBrushTwo.prototype), "constructor", this).apply(this, args);
    this.seedIndex = Math.floor(Math.random() * this.seeds.length);
    this.noise.seed(this.seeds[this.seedIndex]);
  }

  return NoiseBrushTwo;
})(NoiseBrush);

var NoiseDashLineBrush = (function (_NoiseDashLine) {
  _inherits(NoiseDashLineBrush, _NoiseDashLine);

  function NoiseDashLineBrush() {
    _classCallCheck(this, NoiseDashLineBrush);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _get(Object.getPrototypeOf(NoiseDashLineBrush.prototype), "constructor", this).apply(this, args);
    this.seedIndex = Math.floor(Math.random() * this.seeds.length);
    this.noise.seed(this.seeds[this.seedIndex]);
  }

  _createClass(NoiseDashLineBrush, [{
    key: "draw",
    value: function draw() {
      var f = arguments.length <= 0 || arguments[0] === undefined ? this.form : arguments[0];

      if (!this.shouldDraw()) return;

      f.fill(false).stroke(this.getColor());

      var distRatio = this.points.length < this.maxPoints ? Math.random() + 0.5 : Math.random() + 1;
      var smooth = 3;
      var layers = 10;
      var magnify = 2;
      var curveSegments = 1;
      var flatness = 0.5;

      this.noiseProgress += this.points.length < this.maxPoints ? 0.7 : 0.005;

      var noiseFactors = { a: this.noiseProgress, b: this.noiseFactorIndex, c: this.noiseFactorLayer };
      f.noiseDashLine(this.points, this.noise, noiseFactors, this.flipSpeed, distRatio, smooth, this.maxDistance(), layers, magnify, curveSegments, flatness);
    }
  }]);

  return NoiseDashLineBrush;
})(NoiseDashLine);

var NoiseChopLineBrush = (function (_NoiseChopLine) {
  _inherits(NoiseChopLineBrush, _NoiseChopLine);

  function NoiseChopLineBrush() {
    _classCallCheck(this, NoiseChopLineBrush);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _get(Object.getPrototypeOf(NoiseChopLineBrush.prototype), "constructor", this).apply(this, args);
    this.seedIndex = Math.floor(Math.random() * this.seeds.length);
    this.noise.seed(this.seeds[this.seedIndex]);
  }

  _createClass(NoiseChopLineBrush, [{
    key: "draw",
    value: function draw() {
      var f = arguments.length <= 0 || arguments[0] === undefined ? this.form : arguments[0];

      if (!this.shouldDraw()) return;

      f.stroke(this.getColor());

      var distRatio = Math.random() / 3 + 1;
      var smooth = 4;
      var layers = 5;
      var magnify = 1.2;
      var curveSegments = 3;

      this.noiseProgress -= 0.008;
      var noiseFactors = { a: this.noiseProgress, b: this.noiseFactorIndex, c: this.noiseFactorLayer };
      f.noiseChopLine(this.points, this.noise, noiseFactors, this.flipSpeed, distRatio, smooth, this.maxDistance(), layers, magnify, curveSegments);
    }
  }]);

  return NoiseChopLineBrush;
})(NoiseChopLine);

var SmoothNoiseLineBrush = (function (_SmoothNoiseLine) {
  _inherits(SmoothNoiseLineBrush, _SmoothNoiseLine);

  function SmoothNoiseLineBrush() {
    _classCallCheck(this, SmoothNoiseLineBrush);

    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _get(Object.getPrototypeOf(SmoothNoiseLineBrush.prototype), "constructor", this).apply(this, args);
    this.seedIndex = Math.floor(Math.random() * this.seeds.length);
    this.noise.seed(this.seeds[this.seedIndex]);
  }

  // Main app

  _createClass(SmoothNoiseLineBrush, [{
    key: "draw",
    value: function draw() {
      var f = arguments.length <= 0 || arguments[0] === undefined ? this.form : arguments[0];

      if (!this.shouldDraw()) return;

      var strokeWidth = this.tracing ? 0.5 : 1;
      f.stroke(this.getColor(), strokeWidth).fill(this.getColor("color2"));

      var distRatio = 2.5;
      var smooth = 5;
      var layers = Math.floor(Math.random() * 3) + 3;
      var magnify = 1;
      var curveSegments = 3;

      this.noiseProgress += 0.001;
      var noiseFactors = { a: this.noiseProgress, b: this.noiseFactorIndex, c: this.noiseFactorLayer };
      f.noisePolygon(this.points, this.noise, noiseFactors, this.flipSpeed, distRatio, smooth, this.maxDistance(), layers, magnify, curveSegments);
    }
  }]);

  return SmoothNoiseLineBrush;
})(SmoothNoiseLine);

(function () {

  var space = new CanvasSpace("playCanvas", false).display("#playground");
  var line = new BaseLine().init(space);
  space.refresh(false);
  space.clear("rgb(250,252,255)");

  var currentBrush = "RestatedLine";
  var lastBrush = document.querySelector("#initialBrush");
  var lastBrushColor = document.querySelector("#initialBrushColor");
  var brushColor = "dark";

  var brushes = document.querySelectorAll(".brush");

  var _loop = function (i) {
    ["mouseup", "touchend"].forEach(function (e) {
      brushes[i].addEventListener(e, function (evt) {
        if (lastBrush) lastBrush.className = "brush";
        currentBrush = evt.currentTarget.getAttribute("data-id") || currentBrush;
        evt.currentTarget.className = "brush selected";
        lastBrush = evt.currentTarget;

        evt.stopPropagation();
      });
    });
  };

  for (var i = 0; i < brushes.length; i++) {
    _loop(i);
  }

  var brushcolors = document.querySelectorAll(".brushcolor");

  var _loop2 = function (i) {
    ["mouseup", "touchend"].forEach(function (e) {
      brushcolors[i].addEventListener(e, function (evt) {
        if (lastBrushColor) lastBrushColor.className = "brushcolor";
        brushColor = evt.currentTarget.getAttribute("data-id") || brushColor;
        evt.currentTarget.className = "brushcolor selected";
        updateTo(false);
        lastBrushColor = evt.currentTarget;

        evt.stopPropagation();
      });
    });
  };

  for (var i = 0; i < brushcolors.length; i++) {
    _loop2(i);
  }

  document.querySelector("#pager").addEventListener("click", function (evt) {
    var curr = evt.target.className;
    if (curr == "black") {
      evt.target.className = "white";
      space.clear("rgb(30,35,42)");

      brushColor = "light";
      document.querySelector("#initialBrushColor").className = "brushcolor";
      document.querySelector("#nextBrushColor").className = "brushcolor selected";
    } else {
      evt.target.className = "black";
      space.clear("rgb(237,240,242)");

      brushColor = "dark";
      document.querySelector("#initialBrushColor").className = "brushcolor selected";
      document.querySelector("#nextBrushColor").className = "brushcolor";
    }
  });

  document.querySelector("#menu").addEventListener("mouseenter", function () {
    penUp();
  });

  function penDown(evt) {
    updateTo(window[currentBrush]);
    line.trace(true);
  }

  function penUp(evt) {
    line.points = [];
    line.trace(false);
    space.remove(line);
  }

  space.add({
    animate: function animate() {
      // app specific animation here
    },

    onMouseAction: function onMouseAction(type, x, y) {
      if (type == "down") {
        penDown();
      } else if (type == "up") {
        penUp();
      }
    },

    onTouchAction: function onTouchAction(type, x, y) {
      if (type == "down") {
        penDown();
      } else if (type == "up") {
        penUp();
      }
    }

  });

  /**
   * Load Line class
   * @param LineClass
   */
  function updateTo(LineClass) {

    var shouldAddLine = true;
    if (!LineClass) {
      LineClass = window[currentBrush];
      shouldAddLine = false;
    }

    var _temp = line.points.slice();
    space.remove(line);
    line = new LineClass().init(space);

    // Very rough color picker logic
    if (brushColor === "dark") {
      line.setColor({
        dark: "rgba(0,0,0,.08)",
        dark2: "rgba(0,0,0,.02)",
        light: "rgba(0,0,0,.02)",
        ligh2: "rgba(0,0,0,.02)"
      }, {
        dark: "rgba(0,0,0,.01)",
        dark2: "rgba(0,0,0,.01)",
        light: "rgba(0,0,0,.01)",
        ligh2: "rgba(0,0,0,.01)"
      });
      if (LineClass === InnerLineBrush) {
        line.setColor({
          dark: "rgba(0,0,0,.01)",
          dark2: "rgba(0,0,0,.01)",
          light: "rgba(0,0,0,.01)",
          ligh2: "rgba(90,90,90,.01)"
        });
      }
      if (LineClass === ZigZagLineBrush) {
        line.setColor({
          dark: "rgba(0,0,0,.3)",
          dark2: "rgba(0,0,0,.3)",
          light: "rgba(0,0,0,.1)",
          ligh2: "rgba(0,0,0,.1)"
        });
      }
    } else {
      line.setColor({
        dark: "rgba(255,255,255,.03)",
        dark2: "rgba(255,255,255,.03)",
        light: "rgba(255,255,255,.03)",
        ligh2: "rgba(255,255,255,.03)"
      }, {
        dark: "rgba(255,255,255,.01)",
        dark2: "rgba(255,255,255,.01)",
        light: "rgba(255,255,255,.01)",
        ligh2: "rgba(255,255,255,.01)"
      });
      if (LineClass === InnerLineBrush) {
        line.setColor({
          dark: "rgba(255,255,255,.03)",
          dark2: "rgba(255,255,255,.03)",
          light: "rgba(255,255,255,.03)",
          ligh2: "rgba(90,90,90,.03)"
        });
      }
      if (LineClass === ZigZagLineBrush) {
        line.setColor({
          dark: "rgba(255,255,255,.3)",
          dark2: "rgba(255,255,255,.3)",
          light: "rgba(255,255,255,.1)",
          ligh2: "rgba(255,255,255,.1)"
        });
      }
      if (LineClass === SmoothNoiseLineBrush) {
        line.setColor({
          dark: "rgba(255,255,255,.01)",
          dark2: "rgba(255,255,255,.01)",
          light: "rgba(255,255,255,.01)",
          ligh2: "rgba(255,255,255,.01)"
        });
      }
    }

    line.points = _temp;
    line.maxPoints = 30;
    line.maxTracePoints = 30;
    line.pointThreshold = Math.max(line.pointThreshold, 50);

    if (shouldAddLine) space.add(line);
  }

  // UI
  window.menuToggle = function () {
    document.querySelector("#menu").classList.toggle("open");
    document.querySelector("#playground").classList.toggle("larger");
    document.querySelector("#close").classList.toggle("closed");
  };

  window.infoToggle = function () {
    document.querySelector("#description").classList.toggle("open");
  };

  // http://stackoverflow.com/questions/12796513/html5-canvas-to-png-file
  function dlCanvas() {
    var dt = space.space.toDataURL('image/png');
    dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
    dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=drawing.png');
    this.href = dt;
  };
  document.getElementById("download").addEventListener('click', dlCanvas, false);

  // Start
  space.bindMouse();
  space.bindTouch();
  space.play();
})();