var circle1 = new Path.Circle(new Point(0,50), 10);
circle1.fillColor = 'purple';

for (var i = 0; i < 100; i++) {
  var cloneC1 = circle1.clone();
  cloneC1.position += new Point(50, 0);
};
