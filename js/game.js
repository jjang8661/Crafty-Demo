'use strict';

var canvasWidth = 1000;
var canvasHeight = 500;

// When the DOM has loaded
$(document).ready(function() {
    // Create the canvas on ‘game’ div  
    Crafty.init(canvasWidth,canvasHeight,document.getElementById('game'));
    Crafty.background("black");

    // Create floor with Crafty entity method
    var floor = Crafty.e('Floor,2D, Canvas, Color')
    .attr({x: 0, y: canvasHeight-10, w: 800, h: 10})
    .color('green'); 

    // Create a box with Crafty entity method
    var box = Crafty.e('2D, DOM, Color, Twoway, Gravity')
    .attr({x: 0, y: 0, w: 100, h: 100})
    .color('yellow') 
    .twoway(5)
    .gravity('Floor');

});
