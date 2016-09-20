function Point(x,y){
  this.x = x
  this.y = y
  this.toString = function(){
    return "(" +this.x+", " +this.y+ ")"
  }
}

function Side(x){
  this.length = x
}

function Shape(){

}

Shape.prototype.addToPlane = function(x,y){
  return this.position = new Point(x,y)
}

Shape.prototype.move = function(x,y){
  return this.position = new Point(x,y)
}

function Circle(x){
  this.radius = x

  this.diameter = function(){
    return this.radius * 2
  }
}

Circle.prototype = Object.create(Shape.prototype)
Circle.constructor = Circle
Circle.prototype.area = function(){
  return Math.PI * this.radius^2
}

Circle.prototype.circumference = function(){
  return 2 * Math.PI * this.radius
}

function Polygon(array){
  this.sides = array
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.constructor = Polygon
Polygon.prototype.perimeter = function(){
  var perimeter = 0;
  for(i=0; i< this.sides.length; i++){
    perimeter += this.sides[i].length
  }
  return perimeter
}

Polygon.prototype.numberOfSides = function(){
  return this.sides.length
}

function Quadrilateral(a,b,x,y){
  this.sides = [new Side(a),new Side(b),new Side(x),new Side(y)]

}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.constructor = Quadrilateral

function Rectangle(x,y){
  this.width = x
  this.height = y
  this.sides = [new Side(x),new Side(y),new Side(x),new Side(y)]
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.constructor = Rectangle
Rectangle.prototype.area = function (){
  return this.width * this.height
}

function Square(x){
  this.width = x
  this.height = x
  this.sides = [new Side(x),new Side(x),new Side(x),new Side(x)]
}
Square.prototype = Object.create(Rectangle.prototype)
Square.constructor = Square
Square.prototype.listProperties = function(){
  return Object.getOwnPropertyNames(Square.prototype)[0]
}


function Triangle(x,y,z){
  this.sides = [new Side(x),new Side(y),new Side(z)]  
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.constructor = Triangle










