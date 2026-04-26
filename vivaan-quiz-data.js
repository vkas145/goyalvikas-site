// Mathemagics — quiz content for NCERT Grades 1, 3-10 (Chapter 1 only so far).
// Shape: QUIZ_DATA[grade][chapter] = { title, beginner:[5 sets], pro:[5 sets] }.
// Each set = 10 questions: { t:topic, q:question, o:[correct, w1, w2, w3], a:0 }.
window.QUIZ_DATA = {

// ═══════════════════════════════════════════════════════════════
// GRADE 1 · Chapter 1 · Shapes and Space
// ═══════════════════════════════════════════════════════════════
1: { 1: { title:'Shapes and Space',
beginner:[
[
{t:"Flat Shapes",q:"How many sides does a triangle have?",o:["3","4","2","5"],a:0},
{t:"Flat Shapes",type:"tf",q:"A circle has no corners.",a:true},
{t:"Flat Shapes",q:"Which shape has 4 equal sides?",o:["Square","Rectangle","Triangle","Circle"],a:0},
{t:"Flat Shapes",type:"tf",q:"A rectangle has 5 sides.",a:false},
{t:"Flat Shapes",type:"fillin",q:"A square has ___ corners.",blanks:["4"]},
{t:"Flat Shapes",type:"tapall",q:"Tap ALL shapes with exactly 4 sides.",pool:["Triangle","Square","Circle","Rectangle","Diamond","Pentagon"],correct:["Square","Rectangle","Diamond"]},
{t:"Flat Shapes",q:"A pizza slice looks like a?",o:["Triangle","Circle","Square","Star"],a:0},
{t:"Flat Shapes",type:"enterval",q:"How many sides does a hexagon have?",a:6},
{t:"Flat Shapes",type:"tf",q:"A door is shaped like a rectangle.",a:true},
{t:"Flat Shapes",q:"A clock face is shaped like a?",o:["Circle","Square","Triangle","Diamond"],a:0}
],
[
{t:"Solid Shapes",q:"A ball is shaped like a?",o:["Sphere","Cube","Cylinder","Cone"],a:0},
{t:"Solid Shapes",type:"tf",q:"A dice is a cube.",a:true},
{t:"Solid Shapes",q:"How many faces does a cube have?",o:["6","4","8","5"],a:0},
{t:"Solid Shapes",type:"fillin",q:"A football is shaped like a ___.",blanks:["sphere"]},
{t:"Solid Shapes",type:"tapall",q:"Tap all 3D shapes.",pool:["Circle","Cube","Square","Sphere","Triangle","Cylinder"],correct:["Cube","Sphere","Cylinder"]},
{t:"Solid Shapes",type:"tf",q:"A cone has 6 faces.",a:false},
{t:"Solid Shapes",type:"enterval",q:"A cube has how many edges?",a:12},
{t:"Solid Shapes",q:"A brick is shaped like a?",o:["Cuboid","Sphere","Cone","Cylinder"],a:0},
{t:"Solid Shapes",type:"tf",q:"A birthday hat looks like a cone.",a:true},
{t:"Solid Shapes",q:"Which has a pointy top: ball, cube, or cone?",o:["Cone","Cube","Ball","None"],a:0}
],
[
{t:"Roll/Slide",q:"A ball can best?",o:["Roll","Stack","Slide","Float"],a:0},
{t:"Roll/Slide",type:"tf",q:"A cube can roll easily.",a:false},
{t:"Roll/Slide",q:"Which does NOT roll?",o:["Box","Ball","Orange","Wheel"],a:0},
{t:"Roll/Slide",type:"fillin",q:"A wheel is made to ___.",blanks:["roll"]},
{t:"Roll/Slide",type:"tapall",q:"Tap all objects that can roll.",pool:["Ball","Box","Orange","Book","Dice","Wheel"],correct:["Ball","Orange","Wheel"]},
{t:"Roll/Slide",type:"tf",q:"Oranges roll easily because they are round.",a:true},
{t:"Roll/Slide",q:"Which can stack the easiest?",o:["Box","Ball","Egg","Cone"],a:0},
{t:"Roll/Slide",type:"enterval",q:"How many balls can you stack straight up before they fall?",a:1},
{t:"Roll/Slide",type:"tf",q:"A cylinder on its side can roll.",a:true},
{t:"Roll/Slide",q:"A stack of books uses shapes that are?",o:["Flat","Round","Pointy","Tiny"],a:0}
],
[
{t:"Counting",q:"How many sides in a pentagon?",o:["5","4","6","3"],a:0},
{t:"Counting",type:"enterval",q:"How many sides does a hexagon have?",a:6},
{t:"Counting",type:"tf",q:"A triangle has 4 corners.",a:false},
{t:"Counting",type:"fillin",q:"An octagon has ___ sides.",blanks:["8"]},
{t:"Counting",type:"tapall",q:"Tap all shapes with more than 4 sides.",pool:["Triangle","Square","Pentagon","Hexagon","Rectangle","Octagon"],correct:["Pentagon","Hexagon","Octagon"]},
{t:"Counting",q:"Circle has how many corners?",o:["0","1","4","2"],a:0},
{t:"Counting",type:"enterval",q:"A rectangle has how many corners?",a:4},
{t:"Counting",type:"tf",q:"A pentagon has 5 corners.",a:true},
{t:"Counting",q:"Two triangles = total sides?",o:["6","3","4","5"],a:0},
{t:"Counting",type:"enterval",q:"Triangle + Square = total sides?",a:7}
],
[
{t:"Everyday",q:"A dinner plate is shaped like a?",o:["Circle","Square","Triangle","Oval"],a:0},
{t:"Everyday",type:"tf",q:"A postcard is a rectangle.",a:true},
{t:"Everyday",q:"A traffic cone is shaped like a?",o:["Cone","Cube","Cylinder","Sphere"],a:0},
{t:"Everyday",type:"fillin",q:"A window is usually a ___.",blanks:["rectangle"]},
{t:"Everyday",type:"tapall",q:"Tap all round objects.",pool:["Ball","Book","Plate","Dice","Orange","Wheel"],correct:["Ball","Plate","Orange","Wheel"]},
{t:"Everyday",type:"tf",q:"A kite (toy) is shaped like a circle.",a:false},
{t:"Everyday",q:"An egg is shaped like a?",o:["Oval","Circle","Square","Cube"],a:0},
{t:"Everyday",type:"enterval",q:"A stop sign has how many sides?",a:8},
{t:"Everyday",q:"A water bottle is usually a?",o:["Cylinder","Cube","Sphere","Cone"],a:0},
{t:"Everyday",type:"tf",q:"A sandwich cut diagonally looks like a triangle.",a:true}
]
],
pro:[
[
{t:"Cube",type:"enterval",q:"A cube has how many edges?",a:12},
{t:"Cube",type:"enterval",q:"A cube has how many vertices (corners)?",a:8},
{t:"Cube",type:"enterval",q:"A cube has how many faces?",a:6},
{t:"Sphere",type:"tf",q:"A sphere has zero vertices.",a:true},
{t:"Cylinder",q:"Cylinder has how many FLAT faces?",o:["2","1","3","0"],a:0},
{t:"Cone",type:"fillin",q:"A cone has ___ flat face.",blanks:["1"]},
{t:"Solids",type:"tapall",q:"Tap all solids with zero corners.",pool:["Cube","Sphere","Cylinder","Cone","Pyramid","Cuboid"],correct:["Sphere","Cylinder"]},
{t:"Solids",q:"Which has more edges: cube or cone?",o:["Cube","Cone","Equal","Neither"],a:0},
{t:"Cuboid",type:"tf",q:"A cuboid has 12 edges.",a:true},
{t:"Cone",type:"enterval",q:"A cone has how many vertices (pointy tips)?",a:1}
],
[
{t:"Polygons",q:"A 5-sided shape is called a?",o:["Pentagon","Hexagon","Octagon","Quadrilateral"],a:0},
{t:"Polygons",type:"enterval",q:"A hexagon has how many sides?",a:6},
{t:"Polygons",type:"tf",q:"An octagon has 8 sides.",a:true},
{t:"Polygons",type:"fillin",q:"A ___ has 4 sides and 4 equal angles.",blanks:["square"]},
{t:"Polygons",type:"tapall",q:"Tap all polygons (straight-sided closed shapes).",pool:["Circle","Triangle","Square","Oval","Pentagon","Hexagon"],correct:["Triangle","Square","Pentagon","Hexagon"]},
{t:"Polygons",q:"Shapes with 4 sides are called?",o:["Quadrilaterals","Triangles","Pentagons","Circles"],a:0},
{t:"Polygons",type:"tf",q:"A regular hexagon has sides of different lengths.",a:false},
{t:"Polygons",type:"enterval",q:"A decagon has how many sides?",a:10},
{t:"Polygons",q:"A honeycomb cell is a?",o:["Hexagon","Square","Pentagon","Triangle"],a:0},
{t:"Polygons",type:"enterval",q:"A stop sign (octagon) has how many sides?",a:8}
],
[
{t:"Position",q:"The sky is ____ us.",o:["Above","Below","Beside","Inside"],a:0},
{t:"Position",type:"tf",q:"The ground is above our feet.",a:false},
{t:"Position",type:"fillin",q:"A fish lives ___ water.",blanks:["in"]},
{t:"Position",q:"The opposite of INSIDE is?",o:["Outside","Beside","Above","Between"],a:0},
{t:"Position",q:"The opposite of LEFT is?",o:["Right","Up","Down","Back"],a:0},
{t:"Position",type:"tf",q:"A ball UNDER a chair is below the chair.",a:true},
{t:"Position",type:"fillin",q:"The opposite of UP is ___.",blanks:["down"]},
{t:"Position",type:"tapall",q:"Tap all words meaning 'up or higher'.",pool:["Above","Below","Over","Under","Top","Bottom"],correct:["Above","Over","Top"]},
{t:"Position",q:"If an apple is ON a table, it is?",o:["Above the table","Below the table","Inside the table","Beside the table"],a:0},
{t:"Position",type:"tf",q:"An apple INSIDE a box is outside the box.",a:false}
],
[
{t:"Patterns",q:"Next: red, blue, red, blue, red, ___?",o:["blue","red","yellow","green"],a:0},
{t:"Patterns",type:"tf",q:"In the pattern 1,2,1,2,1,2, the next is 1.",a:true},
{t:"Patterns",type:"fillin",q:"Next: 2, 4, 6, 8, ___.",blanks:["10"]},
{t:"Patterns",type:"enterval",q:"Next: 5, 10, 15, 20, ?",a:25},
{t:"Patterns",q:"Next: ABABAB ___?",o:["A","B","C","AB"],a:0},
{t:"Patterns",type:"tapall",q:"Tap all even numbers.",pool:["1","2","3","4","5","6"],correct:["2","4","6"]},
{t:"Patterns",type:"fillin",q:"Next: 1, 3, 5, 7, ___.",blanks:["9"]},
{t:"Patterns",type:"enterval",q:"Next (going down): 10, 9, 8, 7, ?",a:6},
{t:"Patterns",type:"tf",q:"In pattern ABCABC, after C comes B.",a:false},
{t:"Patterns",q:"Next: big, small, big, small, big, ___?",o:["small","big","tiny","medium"],a:0}
],
[
{t:"Mixed",q:"Which is 3D: circle or cube?",o:["Cube","Circle","Both","Neither"],a:0},
{t:"Mixed",type:"tf",q:"A square is 3D.",a:false},
{t:"Mixed",type:"fillin",q:"A rectangle with 4 equal sides is a ___.",blanks:["square"]},
{t:"Mixed",type:"tapall",q:"Tap all shapes that roll.",pool:["Ball","Box","Orange","Book","Dice","Wheel"],correct:["Ball","Orange","Wheel"]},
{t:"Mixed",q:"A balloon is shaped like a?",o:["Sphere","Cube","Cone","Cylinder"],a:0},
{t:"Mixed",type:"enterval",q:"Small squares in a 2×2 grid?",a:4},
{t:"Mixed",type:"tf",q:"A semi-circle is half of a circle.",a:true},
{t:"Mixed",q:"A cricket ball is a?",o:["Sphere","Cube","Cylinder","Cone"],a:0},
{t:"Mixed",type:"fillin",q:"A shape with 10 sides is a ___.",blanks:["decagon"]},
{t:"Mixed",type:"enterval",q:"How many sides does a triangle have?",a:3}
]
]
},
// ─── Grade 1 · Chapter 2 · Numbers from 1 to 9 ───
2: { title:'Numbers from 1 to 9',
beginner:[
[
{t:"Counting",q:"How many fingers on ONE hand?",o:["5","4","6","10"],a:0},
{t:"Counting",type:"tf",q:"A bicycle has 2 wheels.",a:true},
{t:"Counting",type:"enterval",q:"How many wheels on a car?",a:4},
{t:"Counting",q:"How many legs does a dog have?",o:["4","2","3","6"],a:0},
{t:"Counting",type:"fillin",q:"A weekend (Sat + Sun) has ___ days.",blanks:["2"]},
{t:"Counting",type:"tapall",q:"Tap all that come in pairs on your body.",pool:["Eyes","Nose","Ears","Mouth","Hands","Heart"],correct:["Eyes","Ears","Hands"]},
{t:"Counting",q:"How many sides in a triangle?",o:["3","4","5","2"],a:0},
{t:"Counting",type:"enterval",q:"How many toes on ONE foot?",a:5},
{t:"Counting",type:"tf",q:"A person has 3 eyes.",a:false},
{t:"Counting",q:"How many lenses in a pair of glasses?",o:["2","1","3","4"],a:0}
],
[
{t:"Names",q:"Write 3 in words?",o:["Three","Thirty","Third","Tree"],a:0},
{t:"Names",type:"tf",q:"7 is written as 'seven'.",a:true},
{t:"Names",type:"fillin",q:"The word for 5 is ___.",blanks:["five"]},
{t:"Names",q:"Which is number 'nine'?",o:["9","6","7","8"],a:0},
{t:"Names",type:"enterval",q:"'Four' in digits?",a:4},
{t:"Names",type:"tf",q:"'One' in digits is 11.",a:false},
{t:"Names",type:"tapall",q:"Tap all single-digit numbers.",pool:["3","10","7","15","5","22"],correct:["3","7","5"]},
{t:"Names",type:"fillin",q:"Zero in digits is ___.",blanks:["0"]},
{t:"Names",q:"'Eight' in digits?",o:["8","6","7","9"],a:0},
{t:"Names",type:"enterval",q:"'Six' in digits?",a:6}
],
[
{t:"Compare",q:"Bigger: 3 or 5?",o:["5","3","Equal","Cannot tell"],a:0},
{t:"Compare",type:"enterval",q:"Smallest of 3, 8, 6?",a:3},
{t:"Compare",type:"tf",q:"7 is smaller than 2.",a:false},
{t:"Compare",type:"fillin",q:"The largest of 1, 4, 2 is ___.",blanks:["4"]},
{t:"Compare",q:"What comes after 6?",o:["7","5","8","6"],a:0},
{t:"Compare",type:"enterval",q:"What comes before 9?",a:8},
{t:"Compare",type:"tapall",q:"Tap all numbers less than 5.",pool:["1","2","3","4","5","6"],correct:["1","2","3","4"]},
{t:"Compare",type:"tf",q:"The number between 4 and 6 is 5.",a:true},
{t:"Compare",type:"fillin",q:"'Seven' in digits is ___.",blanks:["7"]},
{t:"Compare",type:"enterval",q:"Between 4 and 6 is?",a:5}
],
[
{t:"MoreLess",type:"enterval",q:"One more than 5?",a:6},
{t:"MoreLess",type:"enterval",q:"One less than 7?",a:6},
{t:"MoreLess",type:"tf",q:"7 is more than 4.",a:true},
{t:"MoreLess",type:"tf",q:"2 is more than 6.",a:false},
{t:"MoreLess",q:"1 is the ___ single-digit counting number.",o:["smallest","largest","middle","first even"],a:0},
{t:"MoreLess",type:"fillin",q:"9 is the ___ single-digit number.",blanks:["largest"]},
{t:"MoreLess",type:"enterval",q:"Two more than 3?",a:5},
{t:"MoreLess",type:"enterval",q:"Two less than 8?",a:6},
{t:"MoreLess",type:"tapall",q:"Tap all numbers more than 5.",pool:["1","3","5","7","9","2"],correct:["7","9"]},
{t:"MoreLess",q:"More: 2 or 5?",o:["5","2","Equal","Cannot tell"],a:0}
],
[
{t:"Missing",type:"enterval",q:"1, 2, 3, ?, 5",a:4},
{t:"Missing",type:"enterval",q:"4, 5, ?, 7, 8",a:6},
{t:"Missing",type:"enterval",q:"7, ?, 9",a:8},
{t:"Missing",type:"enterval",q:"?, 2, 3, 4",a:1},
{t:"Missing",type:"enterval",q:"5, 6, 7, ?",a:8},
{t:"Missing",type:"enterval",q:"9, 8, ?, 6",a:7},
{t:"Missing",type:"tf",q:"In 3, __, 5, 6 the missing number is 4.",a:true},
{t:"Missing",type:"fillin",q:"2, ___, 4, 5",blanks:["3"]},
{t:"Missing",type:"fillin",q:"6, ___, 8, 9",blanks:["7"]},
{t:"Missing",type:"tf",q:"0, 1, 2, 3, 4 is in order.",a:true}
]
],
pro:[
[
{t:"GreaterLess",q:"Symbol: 5 ___ 3?",o:["> (greater than)","< (less than)","= (equal)","± (plus-minus)"],a:0},
{t:"GreaterLess",q:"Symbol: 2 ___ 7?",o:["< (less than)","> (greater than)","= (equal)","± (plus-minus)"],a:0},
{t:"GreaterLess",type:"tf",q:"5 = 5 is always true.",a:true},
{t:"GreaterLess",type:"tf",q:"9 < 7 is true.",a:false},
{t:"GreaterLess",type:"fillin",q:"Symbol: 4 __ 4 → ___",blanks:["="]},
{t:"GreaterLess",q:"Correct: 3 < 5 or 3 > 5?",o:["3 < 5","3 > 5","Both","Neither"],a:0},
{t:"GreaterLess",type:"enterval",q:"How many whole numbers are between 1 and 9 (exclusive)?",a:7},
{t:"GreaterLess",type:"tapall",q:"Tap all numbers greater than 5.",pool:["1","3","5","6","8","9"],correct:["6","8","9"]},
{t:"GreaterLess",type:"tf",q:"0 is less than 1.",a:true},
{t:"GreaterLess",q:"9 > 5 and 5 > 2. So 9 ___ 2?",o:[">","<","=","Cannot tell"],a:0}
],
[
{t:"BeforeAfter",type:"enterval",q:"Before 5?",a:4},
{t:"BeforeAfter",type:"enterval",q:"After 3?",a:4},
{t:"BeforeAfter",type:"enterval",q:"Between 6 and 8?",a:7},
{t:"BeforeAfter",type:"enterval",q:"After 9?",a:10},
{t:"BeforeAfter",type:"tf",q:"0 comes before 1.",a:true},
{t:"BeforeAfter",type:"fillin",q:"The number between 2 and 4 is ___.",blanks:["3"]},
{t:"BeforeAfter",q:"After 0?",o:["1","−1","0","2"],a:0},
{t:"BeforeAfter",type:"enterval",q:"Before 8?",a:7},
{t:"BeforeAfter",type:"tapall",q:"Tap all numbers between 3 and 8 (exclusive).",pool:["2","3","4","5","6","7","8","9"],correct:["4","5","6","7"]},
{t:"BeforeAfter",type:"tf",q:"6 is between 5 and 7.",a:true}
],
[
{t:"MinMax",type:"enterval",q:"Largest: 3, 7, 2?",a:7},
{t:"MinMax",type:"enterval",q:"Smallest: 8, 5, 6?",a:5},
{t:"MinMax",type:"enterval",q:"Largest of 1, 9, 4?",a:9},
{t:"MinMax",type:"enterval",q:"Smallest of 6, 2, 8?",a:2},
{t:"MinMax",q:"Middle of 3, 7, 5?",o:["5","3","7","6"],a:0},
{t:"MinMax",type:"enterval",q:"Largest 1-digit number?",a:9},
{t:"MinMax",type:"enterval",q:"Smallest 1-digit counting number?",a:1},
{t:"MinMax",type:"tf",q:"0 is the smallest whole number.",a:true},
{t:"MinMax",q:"Ascending order of 5, 2, 8?",o:["2, 5, 8","8, 5, 2","5, 2, 8","2, 8, 5"],a:0},
{t:"MinMax",type:"fillin",q:"In ascending order, the middle of 1, 5, 3 is ___.",blanks:["3"]}
],
[
{t:"OddEven",type:"tf",q:"2 is an even number.",a:true},
{t:"OddEven",type:"tf",q:"5 is an even number.",a:false},
{t:"OddEven",type:"tf",q:"7 is an odd number.",a:true},
{t:"OddEven",type:"enterval",q:"Smallest even counting number?",a:2},
{t:"OddEven",type:"enterval",q:"Smallest odd counting number?",a:1},
{t:"OddEven",type:"fillin",q:"The number 4 is ___ (odd/even).",blanks:["even"]},
{t:"OddEven",type:"fillin",q:"The number 3 is ___ (odd/even).",blanks:["odd"]},
{t:"OddEven",type:"tapall",q:"Tap all even numbers.",pool:["1","2","3","4","5","6"],correct:["2","4","6"]},
{t:"OddEven",type:"tapall",q:"Tap all odd numbers.",pool:["1","2","3","4","5","6"],correct:["1","3","5"]},
{t:"OddEven",q:"Is 8 odd or even?",o:["Even","Odd","Both","Neither"],a:0}
],
[
{t:"Add",type:"enterval",q:"2 + 3 = ?",a:5},
{t:"Add",type:"enterval",q:"4 + 4 = ?",a:8},
{t:"Add",type:"enterval",q:"1 + 6 = ?",a:7},
{t:"Add",type:"tf",q:"5 + 3 = 9.",a:false},
{t:"Add",type:"fillin",q:"2 + 7 = ___",blanks:["9"]},
{t:"Add",q:"3 + 5 = ?",o:["8","7","9","35"],a:0},
{t:"Add",type:"enterval",q:"6 + 2 = ?",a:8},
{t:"Add",type:"tf",q:"4 + 5 = 9.",a:true},
{t:"Add",type:"enterval",q:"1 + 8 = ?",a:9},
{t:"Add",type:"fillin",q:"7 + 2 = ___",blanks:["9"]}
]
]
},
3: { title:'Addition',
beginner:[
[
{t:"add",q:"What is 2 + 1?",o:["3","2","4","1"],a:0},
{t:"add",q:"What is 3 + 2?",o:["5","4","6","3"],a:0},
{t:"add",q:"What is 1 + 1?",o:["2","1","3","0"],a:0},
{t:"add",q:"What is 4 + 1?",o:["5","4","6","3"],a:0},
{t:"add",type:"tf",q:"2 + 2 is equal to 4.",a:true},
{t:"add",type:"tf",q:"1 + 3 is equal to 5.",a:false},
{t:"add",type:"fillin",q:"2 + 3 = ___",blanks:["5"]},
{t:"add",type:"enterval",q:"What is 3 + 3?",a:6},
{t:"add",type:"tapall",q:"Tap ALL pairs that add up to 4.",pool:["2 + 2","1 + 3","1 + 1","2 + 4","3 + 3"],correct:["2 + 2","1 + 3"]},
{t:"add",q:"You have 1 apple. Mom gives 2 more. How many now?",o:["3","2","4","1"],a:0}
],
[
{t:"add",q:"What is 5 + 2?",o:["7","6","8","5"],a:0},
{t:"add",q:"What is 4 + 3?",o:["7","6","8","5"],a:0},
{t:"add",q:"What is 2 + 5?",o:["7","6","8","5"],a:0},
{t:"add",q:"What is 1 + 5?",o:["6","5","7","4"],a:0},
{t:"add",type:"tf",q:"3 + 4 is equal to 7.",a:true},
{t:"add",type:"tf",q:"2 + 2 is equal to 5.",a:false},
{t:"add",type:"fillin",q:"4 + 2 = ___",blanks:["6"]},
{t:"add",type:"enterval",q:"What is 5 + 1?",a:6},
{t:"add",type:"tapall",q:"Tap ALL pairs that add up to 5.",pool:["2 + 3","1 + 4","2 + 2","3 + 3","4 + 4"],correct:["2 + 3","1 + 4"]},
{t:"add",q:"Riya has 3 candies. Dad gives 2. How many candies?",o:["5","4","6","3"],a:0}
],
[
{t:"add",q:"What is 6 + 2?",o:["8","7","9","6"],a:0},
{t:"add",q:"What is 5 + 3?",o:["8","7","9","6"],a:0},
{t:"add",q:"What is 4 + 4?",o:["8","7","9","6"],a:0},
{t:"add",q:"What is 7 + 1?",o:["8","7","9","6"],a:0},
{t:"add",type:"tf",q:"6 + 3 is equal to 9.",a:true},
{t:"add",type:"tf",q:"5 + 2 is equal to 8.",a:false},
{t:"add",type:"fillin",q:"3 + 5 = ___",blanks:["8"]},
{t:"add",type:"enterval",q:"What is 4 + 5?",a:9},
{t:"add",type:"tapall",q:"Tap ALL pairs that add up to 8.",pool:["6 + 2","4 + 4","3 + 4","5 + 4","7 + 2"],correct:["6 + 2","4 + 4"]},
{t:"add",q:"Show 3 fingers on one hand and 4 on other. How many fingers?",o:["7","6","8","5"],a:0}
],
[
{t:"add",q:"What is 0 + 5?",o:["5","0","4","6"],a:0},
{t:"add",q:"What is 7 + 0?",o:["7","0","6","8"],a:0},
{t:"add",q:"What is 6 + 3?",o:["9","8","7","6"],a:0},
{t:"add",q:"What is 8 + 1?",o:["9","8","7","10"],a:0},
{t:"add",type:"tf",q:"Adding 0 to a number gives the same number.",a:true},
{t:"add",type:"tf",q:"3 + 6 is equal to 8.",a:false},
{t:"add",type:"fillin",q:"5 + 4 = ___",blanks:["9"]},
{t:"add",type:"enterval",q:"What is 2 + 6?",a:8},
{t:"add",type:"tapall",q:"Tap ALL pairs that add up to 9.",pool:["5 + 4","6 + 3","7 + 1","4 + 4","8 + 0"],correct:["5 + 4","6 + 3","8 + 0"]},
{t:"add",q:"5 apples in a basket. Add 4 more. How many apples?",o:["9","8","7","10"],a:0}
],
[
{t:"add",q:"What is 1 + 8?",o:["9","8","10","7"],a:0},
{t:"add",q:"What is 2 + 7?",o:["9","8","10","7"],a:0},
{t:"add",q:"What is 4 + 5?",o:["9","8","10","7"],a:0},
{t:"add",q:"What is 3 + 4?",o:["7","6","8","5"],a:0},
{t:"add",type:"tf",q:"7 + 2 is equal to 9.",a:true},
{t:"add",type:"tf",q:"4 + 4 is equal to 9.",a:false},
{t:"add",type:"fillin",q:"6 + 2 = ___",blanks:["8"]},
{t:"add",type:"enterval",q:"What is 1 + 7?",a:8},
{t:"add",type:"tapall",q:"Tap ALL sums that equal 6.",pool:["3 + 3","5 + 1","2 + 4","4 + 4","6 + 1"],correct:["3 + 3","5 + 1","2 + 4"]},
{t:"add",q:"Tom has 4 candies. Sam gives 3. How many candies?",o:["7","6","8","5"],a:0}
]
],
pro:[
[
{t:"add",q:"2 + 3 + 1 = ?",o:["6","5","7","4"],a:0},
{t:"add",q:"1 + 2 + 4 = ?",o:["7","6","8","5"],a:0},
{t:"add",q:"3 + 3 + 2 = ?",o:["8","7","9","6"],a:0},
{t:"add",q:"Which is bigger: 4 + 3 or 5 + 1?",o:["4 + 3","5 + 1","Equal","Cannot say"],a:0},
{t:"add",type:"tf",q:"2 + 3 is the same as 3 + 2.",a:true},
{t:"add",type:"tf",q:"5 + 4 is bigger than 6 + 2.",a:true},
{t:"add",type:"fillin",q:"3 + ___ = 7",blanks:["4"]},
{t:"add",type:"enterval",q:"2 + 2 + 2 = ?",a:6},
{t:"add",type:"tapall",q:"Tap ALL sums equal to 7.",pool:["3 + 4","5 + 2","6 + 1","4 + 4","2 + 4"],correct:["3 + 4","5 + 2","6 + 1"]},
{t:"add",q:"Mia has 2 red and 3 blue balls. Dad gives 1 green. Total balls?",o:["6","5","7","4"],a:0}
],
[
{t:"add",q:"4 + ? = 9. The missing number is?",o:["5","4","6","3"],a:0},
{t:"add",q:"? + 3 = 8. The missing number is?",o:["5","4","6","3"],a:0},
{t:"add",q:"6 + ? = 9. The missing number is?",o:["3","2","4","5"],a:0},
{t:"add",q:"Which sum is the smallest?",o:["1 + 2","3 + 1","2 + 2","4 + 0"],a:0},
{t:"add",type:"tf",q:"If 4 + 5 = 9, then 5 + 4 also = 9.",a:true},
{t:"add",type:"tf",q:"3 + 6 is smaller than 4 + 4.",a:false},
{t:"add",type:"fillin",q:"___ + 2 = 6",blanks:["4"]},
{t:"add",type:"enterval",q:"3 + 4 + 2 = ?",a:9},
{t:"add",type:"tapall",q:"Tap ALL sums equal to 8.",pool:["3 + 5","6 + 2","4 + 4","7 + 2","5 + 2"],correct:["3 + 5","6 + 2","4 + 4"]},
{t:"add",q:"Anu has 3 pencils. She buys 2, then 1 more. How many pencils?",o:["6","5","7","4"],a:0}
],
[
{t:"add",q:"5 + 2 + 1 = ?",o:["8","7","9","6"],a:0},
{t:"add",q:"2 + 2 + 3 = ?",o:["7","6","8","5"],a:0},
{t:"add",q:"1 + 4 + 4 = ?",o:["9","8","7","10"],a:0},
{t:"add",q:"Bigger: 6 + 2 or 3 + 4?",o:["6 + 2","3 + 4","Equal","Cannot say"],a:0},
{t:"add",type:"tf",q:"7 + 2 = 2 + 7.",a:true},
{t:"add",type:"tf",q:"5 + 3 is bigger than 7 + 2.",a:false},
{t:"add",type:"fillin",q:"5 + ___ = 9",blanks:["4"]},
{t:"add",type:"enterval",q:"1 + 2 + 3 = ?",a:6},
{t:"add",type:"tapall",q:"Tap ALL sums equal to 9.",pool:["4 + 5","6 + 3","7 + 2","5 + 5","8 + 0"],correct:["4 + 5","6 + 3","7 + 2","8 + 0"]},
{t:"add",q:"Box has 4 apples. Add 3, then 2. How many apples?",o:["9","8","7","10"],a:0}
],
[
{t:"add",q:"? + 4 = 9. Find the number.",o:["5","4","6","3"],a:0},
{t:"add",q:"7 + ? = 8. Find the number.",o:["1","2","0","3"],a:0},
{t:"add",q:"3 + ? = 6. Find the number.",o:["3","2","4","1"],a:0},
{t:"add",q:"Which equals 8?",o:["6 + 2","5 + 2","3 + 4","7 + 0"],a:0},
{t:"add",type:"tf",q:"0 + 9 = 9.",a:true},
{t:"add",type:"tf",q:"4 + 4 is bigger than 5 + 3.",a:false},
{t:"add",type:"fillin",q:"2 + 3 + ___ = 9",blanks:["4"]},
{t:"add",type:"enterval",q:"What is 5 + 4?",a:9},
{t:"add",type:"tapall",q:"Tap ALL sums equal to 5.",pool:["1 + 4","2 + 3","5 + 0","4 + 4","3 + 3"],correct:["1 + 4","2 + 3","5 + 0"]},
{t:"add",q:"Rita gets 2 candies, then 3, then 2. Total candies?",o:["7","6","8","5"],a:0}
],
[
{t:"add",q:"3 + 3 + 3 = ?",o:["9","8","7","6"],a:0},
{t:"add",q:"2 + 4 + 2 = ?",o:["8","7","9","6"],a:0},
{t:"add",q:"4 + 1 + 3 = ?",o:["8","7","9","6"],a:0},
{t:"add",q:"Bigger: 8 + 1 or 5 + 3?",o:["8 + 1","5 + 3","Equal","Cannot say"],a:0},
{t:"add",type:"tf",q:"3 + 5 = 5 + 3.",a:true},
{t:"add",type:"tf",q:"2 + 7 is smaller than 4 + 4.",a:false},
{t:"add",type:"fillin",q:"___ + 6 = 9",blanks:["3"]},
{t:"add",type:"enterval",q:"6 + 2 + 1 = ?",a:9},
{t:"add",type:"tapall",q:"Tap ALL sums equal to 7.",pool:["4 + 3","6 + 1","5 + 2","3 + 5","2 + 2"],correct:["4 + 3","6 + 1","5 + 2"]},
{t:"add",q:"Sam has 2 fingers up. Lifts 3 more, then 4. Total fingers?",o:["9","8","7","10"],a:0}
]
]
},
4: { title:'Subtraction',
beginner:[
[
{t:"sub",q:"What is 5 - 2?",o:["3","2","4","1"],a:0},
{t:"sub",q:"What is 4 - 1?",o:["3","2","4","1"],a:0},
{t:"sub",q:"What is 3 - 1?",o:["2","1","3","0"],a:0},
{t:"sub",q:"What is 6 - 2?",o:["4","3","5","2"],a:0},
{t:"sub",type:"tf",q:"5 - 3 is equal to 2.",a:true},
{t:"sub",type:"tf",q:"4 - 2 is equal to 3.",a:false},
{t:"sub",type:"fillin",q:"6 - 1 = ___",blanks:["5"]},
{t:"sub",type:"enterval",q:"What is 4 - 2?",a:2},
{t:"sub",type:"tapall",q:"Tap ALL that equal 2.",pool:["3 - 1","4 - 2","5 - 1","6 - 4","7 - 3"],correct:["3 - 1","4 - 2","6 - 4"]},
{t:"sub",q:"You had 5 apples. Eat 2. How many left?",o:["3","2","4","1"],a:0}
],
[
{t:"sub",q:"What is 7 - 3?",o:["4","3","5","2"],a:0},
{t:"sub",q:"What is 8 - 5?",o:["3","2","4","1"],a:0},
{t:"sub",q:"What is 6 - 4?",o:["2","1","3","0"],a:0},
{t:"sub",q:"What is 9 - 1?",o:["8","7","9","6"],a:0},
{t:"sub",type:"tf",q:"8 - 4 is equal to 4.",a:true},
{t:"sub",type:"tf",q:"7 - 2 is equal to 4.",a:false},
{t:"sub",type:"fillin",q:"9 - 5 = ___",blanks:["4"]},
{t:"sub",type:"enterval",q:"What is 8 - 3?",a:5},
{t:"sub",type:"tapall",q:"Tap ALL that equal 3.",pool:["5 - 2","6 - 3","7 - 4","8 - 6","4 - 2"],correct:["5 - 2","6 - 3","7 - 4"]},
{t:"sub",q:"Riya had 7 candies. Gave 3 away. How many candies left?",o:["4","3","5","2"],a:0}
],
[
{t:"sub",q:"What is 9 - 4?",o:["5","4","6","3"],a:0},
{t:"sub",q:"What is 8 - 2?",o:["6","5","7","4"],a:0},
{t:"sub",q:"What is 7 - 5?",o:["2","1","3","0"],a:0},
{t:"sub",q:"What is 9 - 6?",o:["3","2","4","1"],a:0},
{t:"sub",type:"tf",q:"9 - 7 is equal to 2.",a:true},
{t:"sub",type:"tf",q:"6 - 5 is equal to 2.",a:false},
{t:"sub",type:"fillin",q:"7 - 6 = ___",blanks:["1"]},
{t:"sub",type:"enterval",q:"What is 9 - 3?",a:6},
{t:"sub",type:"tapall",q:"Tap ALL that equal 4.",pool:["8 - 4","9 - 5","7 - 3","5 - 2","6 - 1"],correct:["8 - 4","9 - 5","7 - 3"]},
{t:"sub",q:"There are 8 fingers up. Bend 2. How many fingers up?",o:["6","5","7","4"],a:0}
],
[
{t:"sub",q:"What is 5 - 0?",o:["5","0","4","6"],a:0},
{t:"sub",q:"What is 7 - 7?",o:["0","1","2","7"],a:0},
{t:"sub",q:"What is 6 - 6?",o:["0","1","2","6"],a:0},
{t:"sub",q:"What is 8 - 0?",o:["8","0","7","9"],a:0},
{t:"sub",type:"tf",q:"Any number minus 0 is itself.",a:true},
{t:"sub",type:"tf",q:"5 - 5 is equal to 1.",a:false},
{t:"sub",type:"fillin",q:"4 - 4 = ___",blanks:["0"]},
{t:"sub",type:"enterval",q:"What is 9 - 9?",a:0},
{t:"sub",type:"tapall",q:"Tap ALL that equal 0.",pool:["3 - 3","6 - 6","5 - 5","8 - 7","9 - 8"],correct:["3 - 3","6 - 6","5 - 5"]},
{t:"sub",q:"5 candies on a plate. Eat all 5. How many candies left?",o:["0","1","5","2"],a:0}
],
[
{t:"sub",q:"What is 8 - 6?",o:["2","1","3","0"],a:0},
{t:"sub",q:"What is 9 - 2?",o:["7","6","8","5"],a:0},
{t:"sub",q:"What is 7 - 1?",o:["6","5","7","4"],a:0},
{t:"sub",q:"What is 6 - 3?",o:["3","2","4","1"],a:0},
{t:"sub",type:"tf",q:"9 - 4 is equal to 5.",a:true},
{t:"sub",type:"tf",q:"8 - 1 is equal to 6.",a:false},
{t:"sub",type:"fillin",q:"5 - 1 = ___",blanks:["4"]},
{t:"sub",type:"enterval",q:"What is 6 - 2?",a:4},
{t:"sub",type:"tapall",q:"Tap ALL that equal 5.",pool:["9 - 4","8 - 3","7 - 2","6 - 2","9 - 5"],correct:["9 - 4","8 - 3","7 - 2"]},
{t:"sub",q:"Tom had 9 apples. He ate 4. How many apples left?",o:["5","4","6","3"],a:0}
]
],
pro:[
[
{t:"sub",q:"9 - 2 - 1 = ?",o:["6","5","7","4"],a:0},
{t:"sub",q:"8 - 1 - 2 = ?",o:["5","4","6","3"],a:0},
{t:"sub",q:"7 - 3 - 1 = ?",o:["3","2","4","1"],a:0},
{t:"sub",q:"Which is more: 9 - 4 or 7 - 1?",o:["7 - 1","9 - 4","Equal","Cannot say"],a:0},
{t:"sub",type:"tf",q:"5 - 2 is the same as 5 take away 2.",a:true},
{t:"sub",type:"tf",q:"9 - 6 is bigger than 8 - 2.",a:false},
{t:"sub",type:"fillin",q:"8 - ___ = 5",blanks:["3"]},
{t:"sub",type:"enterval",q:"9 - 1 - 2 = ?",a:6},
{t:"sub",type:"tapall",q:"Tap ALL that equal 4.",pool:["8 - 4","9 - 5","7 - 3","6 - 1","5 - 2"],correct:["8 - 4","9 - 5","7 - 3"]},
{t:"sub",q:"Mia had 9 balloons. 2 popped, then 1 more. How many balloons left?",o:["6","5","7","4"],a:0}
],
[
{t:"sub",q:"7 - ? = 4. Find the number.",o:["3","2","4","1"],a:0},
{t:"sub",q:"9 - ? = 6. Find the number.",o:["3","2","4","1"],a:0},
{t:"sub",q:"8 - ? = 2. Find the number.",o:["6","5","7","4"],a:0},
{t:"sub",q:"Which is smallest?",o:["9 - 8","9 - 6","9 - 5","9 - 4"],a:0},
{t:"sub",type:"tf",q:"If 9 - 4 = 5, then 5 + 4 = 9.",a:true},
{t:"sub",type:"tf",q:"6 - 3 is bigger than 8 - 4.",a:false},
{t:"sub",type:"fillin",q:"___ - 2 = 5",blanks:["7"]},
{t:"sub",type:"enterval",q:"8 - 2 - 1 = ?",a:5},
{t:"sub",type:"tapall",q:"Tap ALL that equal 3.",pool:["5 - 2","6 - 3","8 - 5","9 - 6","7 - 2"],correct:["5 - 2","6 - 3","8 - 5","9 - 6"]},
{t:"sub",q:"Anu had 8 pencils. Lost 2, gave 1. How many pencils left?",o:["5","4","6","3"],a:0}
],
[
{t:"sub",q:"9 - 2 - 3 = ?",o:["4","3","5","2"],a:0},
{t:"sub",q:"8 - 4 - 1 = ?",o:["3","2","4","1"],a:0},
{t:"sub",q:"7 - 1 - 1 = ?",o:["5","4","6","3"],a:0},
{t:"sub",q:"More: 8 - 5 or 6 - 4?",o:["8 - 5","6 - 4","Equal","Cannot say"],a:0},
{t:"sub",type:"tf",q:"7 - 0 is the same as 7.",a:true},
{t:"sub",type:"tf",q:"9 - 3 is smaller than 7 - 2.",a:false},
{t:"sub",type:"fillin",q:"7 - ___ = 2",blanks:["5"]},
{t:"sub",type:"enterval",q:"9 - 4 - 2 = ?",a:3},
{t:"sub",type:"tapall",q:"Tap ALL that equal 6.",pool:["9 - 3","8 - 2","7 - 1","6 - 1","5 - 0"],correct:["9 - 3","8 - 2","7 - 1"]},
{t:"sub",q:"Box had 9 apples. 3 eaten, then 2 more. How many apples left?",o:["4","3","5","2"],a:0}
],
[
{t:"sub",q:"? - 3 = 5. Find the number.",o:["8","7","9","6"],a:0},
{t:"sub",q:"? - 2 = 6. Find the number.",o:["8","7","9","6"],a:0},
{t:"sub",q:"? - 4 = 4. Find the number.",o:["8","7","9","6"],a:0},
{t:"sub",q:"Which equals 2?",o:["5 - 3","6 - 3","7 - 3","8 - 3"],a:0},
{t:"sub",type:"tf",q:"9 - 9 = 0.",a:true},
{t:"sub",type:"tf",q:"4 - 4 is bigger than 5 - 5.",a:false},
{t:"sub",type:"fillin",q:"9 - 3 - ___ = 4",blanks:["2"]},
{t:"sub",type:"enterval",q:"What is 8 - 5?",a:3},
{t:"sub",type:"tapall",q:"Tap ALL that equal 1.",pool:["3 - 2","5 - 4","8 - 7","6 - 4","9 - 7"],correct:["3 - 2","5 - 4","8 - 7"]},
{t:"sub",q:"Rita had 9 candies. Ate 3, gave 2 to Sam. How many left?",o:["4","3","5","2"],a:0}
],
[
{t:"sub",q:"9 - 1 - 1 - 1 = ?",o:["6","5","7","4"],a:0},
{t:"sub",q:"8 - 2 - 2 = ?",o:["4","3","5","2"],a:0},
{t:"sub",q:"7 - 2 - 2 = ?",o:["3","2","4","1"],a:0},
{t:"sub",q:"More: 9 - 1 or 6 - 0?",o:["9 - 1","6 - 0","Equal","Cannot say"],a:0},
{t:"sub",type:"tf",q:"6 - 3 = 3 and 3 + 3 = 6.",a:true},
{t:"sub",type:"tf",q:"9 - 5 is smaller than 8 - 5.",a:false},
{t:"sub",type:"fillin",q:"___ - 4 = 3",blanks:["7"]},
{t:"sub",type:"enterval",q:"9 - 2 - 4 = ?",a:3},
{t:"sub",type:"tapall",q:"Tap ALL that equal 7.",pool:["9 - 2","8 - 1","7 - 0","6 - 0","9 - 1"],correct:["9 - 2","8 - 1","7 - 0"]},
{t:"sub",q:"Sam had 9 fingers up. Bent 3, then 1. How many fingers up?",o:["5","4","6","3"],a:0}
]
]
},
5: { title:'Numbers from 10 to 20',
beginner:[
[
{t:"teen",q:"What comes after 10?",o:["11","12","9","13"],a:0},
{t:"teen",q:"What comes after 12?",o:["13","14","11","12"],a:0},
{t:"teen",q:"What comes before 15?",o:["14","13","16","15"],a:0},
{t:"teen",q:"What comes before 11?",o:["10","9","12","11"],a:0},
{t:"teen",type:"tf",q:"13 comes after 12.",a:true},
{t:"teen",type:"tf",q:"17 comes before 16.",a:false},
{t:"teen",type:"fillin",q:"The number after 14 is ___",blanks:["15"]},
{t:"teen",type:"enterval",q:"What is the number before 13?",a:12},
{t:"teen",type:"tapall",q:"Tap ALL teen numbers.",pool:["11","13","9","18","8"],correct:["11","13","18"]},
{t:"teen",q:"Count: 10, 11, 12, ___",o:["13","14","11","10"],a:0}
],
[
{t:"teen",q:"What comes after 16?",o:["17","18","15","16"],a:0},
{t:"teen",q:"What comes after 19?",o:["20","21","18","19"],a:0},
{t:"teen",q:"What comes before 18?",o:["17","16","19","18"],a:0},
{t:"teen",q:"What is between 13 and 15?",o:["14","12","16","13"],a:0},
{t:"teen",type:"tf",q:"20 comes after 19.",a:true},
{t:"teen",type:"tf",q:"15 is between 13 and 14.",a:false},
{t:"teen",type:"fillin",q:"The number after 17 is ___",blanks:["18"]},
{t:"teen",type:"enterval",q:"What is the number after 15?",a:16},
{t:"teen",type:"tapall",q:"Tap ALL numbers between 14 and 19.",pool:["15","16","17","18","13"],correct:["15","16","17","18"]},
{t:"teen",q:"Count: 14, 15, ___, 17",o:["16","18","15","14"],a:0}
],
[
{t:"teen",q:"10 + 1 = ?",o:["11","12","10","13"],a:0},
{t:"teen",q:"10 + 5 = ?",o:["15","14","16","13"],a:0},
{t:"teen",q:"10 + 8 = ?",o:["18","17","19","16"],a:0},
{t:"teen",q:"10 + 10 = ?",o:["20","19","21","18"],a:0},
{t:"teen",type:"tf",q:"10 + 3 is equal to 13.",a:true},
{t:"teen",type:"tf",q:"10 + 6 is equal to 17.",a:false},
{t:"teen",type:"fillin",q:"10 + 7 = ___",blanks:["17"]},
{t:"teen",type:"enterval",q:"10 + 4 = ?",a:14},
{t:"teen",type:"tapall",q:"Tap ALL that equal 15.",pool:["10 + 5","12 + 3","11 + 4","10 + 4","13 + 1"],correct:["10 + 5","12 + 3","11 + 4"]},
{t:"teen",q:"Rita has 10 marbles. Gets 4 more. How many now?",o:["14","13","15","12"],a:0}
],
[
{t:"teen",q:"Which is bigger: 13 or 17?",o:["17","13","Equal","Cannot say"],a:0},
{t:"teen",q:"Which is smaller: 12 or 19?",o:["12","19","Equal","Cannot say"],a:0},
{t:"teen",q:"Which is bigger: 15 or 11?",o:["15","11","Equal","Cannot say"],a:0},
{t:"teen",q:"Which is smaller: 16 or 18?",o:["16","18","Equal","Cannot say"],a:0},
{t:"teen",type:"tf",q:"19 is bigger than 14.",a:true},
{t:"teen",type:"tf",q:"11 is bigger than 17.",a:false},
{t:"teen",type:"fillin",q:"The number before 20 is ___",blanks:["19"]},
{t:"teen",type:"enterval",q:"What is the number after 11?",a:12},
{t:"teen",type:"tapall",q:"Tap ALL numbers bigger than 14.",pool:["15","16","17","18","12"],correct:["15","16","17","18"]},
{t:"teen",q:"Count back: 15, 14, 13, ___",o:["12","11","14","10"],a:0}
],
[
{t:"teen",q:"Count on from 12: 12, 13, ___",o:["14","15","13","12"],a:0},
{t:"teen",q:"Count on from 16: 16, 17, ___",o:["18","19","17","16"],a:0},
{t:"teen",q:"What is one more than 13?",o:["14","12","15","13"],a:0},
{t:"teen",q:"What is one less than 18?",o:["17","19","16","18"],a:0},
{t:"teen",type:"tf",q:"One more than 14 is 15.",a:true},
{t:"teen",type:"tf",q:"One less than 12 is 13.",a:false},
{t:"teen",type:"fillin",q:"One more than 19 is ___",blanks:["20"]},
{t:"teen",type:"enterval",q:"What is one less than 16?",a:15},
{t:"teen",type:"tapall",q:"Tap ALL numbers less than 14.",pool:["10","11","12","13","15"],correct:["10","11","12","13"]},
{t:"teen",q:"Count: 17, 18, ___, 20",o:["19","16","21","18"],a:0}
]
],
pro:[
[
{t:"teen",q:"11 + 2 = ?",o:["13","14","12","11"],a:0},
{t:"teen",q:"14 + 3 = ?",o:["17","16","18","15"],a:0},
{t:"teen",q:"12 + 5 = ?",o:["17","16","18","15"],a:0},
{t:"teen",q:"Which is biggest: 13, 18, 11, 15?",o:["18","13","11","15"],a:0},
{t:"teen",type:"tf",q:"15 + 2 is equal to 17.",a:true},
{t:"teen",type:"tf",q:"13 + 4 is bigger than 19.",a:false},
{t:"teen",type:"fillin",q:"16 + ___ = 19",blanks:["3"]},
{t:"teen",type:"enterval",q:"13 + 4 = ?",a:17},
{t:"teen",type:"tapall",q:"Tap ALL numbers between 12 and 17.",pool:["13","14","15","16","18"],correct:["13","14","15","16"]},
{t:"teen",q:"You have 12 fingers shown. 3 more lift. How many?",o:["15","14","16","13"],a:0}
],
[
{t:"teen",q:"What number is 2 more than 14?",o:["16","15","17","14"],a:0},
{t:"teen",q:"What number is 3 more than 13?",o:["16","15","17","14"],a:0},
{t:"teen",q:"What number is 2 less than 18?",o:["16","17","15","18"],a:0},
{t:"teen",q:"Which is smallest: 19, 11, 17, 13?",o:["11","13","17","19"],a:0},
{t:"teen",type:"tf",q:"3 more than 15 is 18.",a:true},
{t:"teen",type:"tf",q:"2 less than 12 is 11.",a:false},
{t:"teen",type:"fillin",q:"___ + 4 = 17",blanks:["13"]},
{t:"teen",type:"enterval",q:"What is 2 less than 19?",a:17},
{t:"teen",type:"tapall",q:"Tap ALL numbers bigger than 16.",pool:["17","18","19","20","15"],correct:["17","18","19","20"]},
{t:"teen",q:"Riya counts 11 candies. Adds 3, then 1 more. Total candies?",o:["15","14","16","13"],a:0}
],
[
{t:"teen",q:"Count on from 14 by ones: 14, 15, ___",o:["16","17","15","14"],a:0},
{t:"teen",q:"Count back from 18: 18, 17, ___",o:["16","15","17","18"],a:0},
{t:"teen",q:"15 + 4 = ?",o:["19","18","20","17"],a:0},
{t:"teen",q:"Bigger sum: 12 + 5 or 13 + 3?",o:["12 + 5","13 + 3","Equal","Cannot say"],a:0},
{t:"teen",type:"tf",q:"14 + 5 is bigger than 12 + 6.",a:true},
{t:"teen",type:"tf",q:"11 + 4 is bigger than 14 + 4.",a:false},
{t:"teen",type:"fillin",q:"11 + ___ = 15",blanks:["4"]},
{t:"teen",type:"enterval",q:"15 + 3 = ?",a:18},
{t:"teen",type:"tapall",q:"Tap ALL sums equal to 17.",pool:["10 + 7","13 + 4","15 + 2","16 + 2","11 + 5"],correct:["10 + 7","13 + 4","15 + 2"]},
{t:"teen",q:"Box has 13 apples. Add 4, then 2. How many apples?",o:["19","18","20","17"],a:0}
],
[
{t:"teen",q:"Which numbers come after 17? Pick first.",o:["18","16","15","17"],a:0},
{t:"teen",q:"What is 1 more than 19?",o:["20","18","21","19"],a:0},
{t:"teen",q:"What is 1 less than 11?",o:["10","12","9","11"],a:0},
{t:"teen",q:"Bigger: 16 or 1 more than 15?",o:["Equal","16","1 more than 15","Cannot say"],a:0},
{t:"teen",type:"tf",q:"19 comes just before 20.",a:true},
{t:"teen",type:"tf",q:"12 comes just after 14.",a:false},
{t:"teen",type:"fillin",q:"The number between 16 and 18 is ___",blanks:["17"]},
{t:"teen",type:"enterval",q:"What is 1 more than 18?",a:19},
{t:"teen",type:"tapall",q:"Tap ALL teen numbers (between 10 and 20).",pool:["11","15","19","9","20"],correct:["11","15","19"]},
{t:"teen",q:"Count back: 20, 19, ___, 17",o:["18","16","20","17"],a:0}
],
[
{t:"teen",q:"12 + 6 = ?",o:["18","17","19","16"],a:0},
{t:"teen",q:"14 + 4 = ?",o:["18","17","19","16"],a:0},
{t:"teen",q:"17 + 2 = ?",o:["19","18","20","17"],a:0},
{t:"teen",q:"Smaller: 14 + 3 or 12 + 4?",o:["12 + 4","14 + 3","Equal","Cannot say"],a:0},
{t:"teen",type:"tf",q:"15 + 4 = 19.",a:true},
{t:"teen",type:"tf",q:"13 + 6 is smaller than 12 + 6.",a:false},
{t:"teen",type:"fillin",q:"___ + 5 = 18",blanks:["13"]},
{t:"teen",type:"enterval",q:"16 + 3 = ?",a:19},
{t:"teen",type:"tapall",q:"Tap ALL sums equal to 19.",pool:["15 + 4","13 + 6","17 + 2","12 + 6","16 + 2"],correct:["15 + 4","13 + 6","17 + 2"]},
{t:"teen",q:"Sam had 12 marbles. Got 5, then 2 more. Total marbles?",o:["19","18","20","17"],a:0}
]
]
},
6: { title:'Time',
beginner:[
[
{t:"day/night",q:"When do we see the sun?",o:["Day","Night","Midnight","Never"],a:0},
{t:"day/night",q:"When do we see the moon and stars?",o:["Night","Morning","Noon","Afternoon"],a:0},
{t:"meals",q:"Which meal do we eat in the morning?",o:["Breakfast","Dinner","Supper","Lunch only"],a:0},
{t:"day/night",type:"tf",q:"We sleep at night.",a:true},
{t:"days",type:"tf",q:"There are 7 days in a week.",a:true},
{t:"days",type:"fillin",q:"The day after Monday is ___.",blanks:["Tuesday"]},
{t:"sequence",q:"Which comes first in the day?",o:["Morning","Evening","Night","Afternoon"],a:0},
{t:"days",type:"tapall",q:"Tap ALL days of the week.",pool:["Monday","Friday","Sunday","Apple","June","Red"],correct:["Monday","Friday","Sunday"]},
{t:"days",type:"enterval",q:"How many days are in one week?",a:7},
{t:"day/night",type:"enterval",q:"How many suns do we see in the sky during the day?",a:1}
],
[
{t:"morning",q:"What do we say when we meet a friend in the morning?",o:["Good morning","Good night","Goodbye","Sleep well"],a:0},
{t:"evening",q:"The sun sets in the ___.",o:["Evening","Morning","Noon","Midnight"],a:0},
{t:"days",q:"Which day comes after Sunday?",o:["Monday","Saturday","Friday","Tuesday"],a:0},
{t:"days",q:"Which day comes before Wednesday?",o:["Tuesday","Thursday","Friday","Sunday"],a:0},
{t:"day/night",type:"tf",q:"Stars shine brightly during the day.",a:false},
{t:"meals",type:"tf",q:"We eat dinner at night.",a:true},
{t:"days",type:"fillin",q:"The day before Friday is ___.",blanks:["Thursday"]},
{t:"sequence",type:"tapall",q:"Tap ALL parts of a day.",pool:["Morning","Afternoon","Night","Pencil","Banana","Chair"],correct:["Morning","Afternoon","Night"]},
{t:"days",type:"enterval",q:"How many days come after Monday in a week?",a:6},
{t:"day/night",q:"Which is darker?",o:["Night","Day","Morning","Afternoon"],a:0}
],
[
{t:"afternoon",q:"After morning comes ___.",o:["Afternoon","Night","Yesterday","Bedtime"],a:0},
{t:"days",q:"How many days make a week?",o:["Seven","Five","Ten","Three"],a:0},
{t:"day/night",q:"Which is brighter?",o:["Day","Night","Midnight","Dark sky"],a:0},
{t:"days",type:"tf",q:"Saturday comes before Sunday.",a:true},
{t:"days",type:"tf",q:"Wednesday comes after Thursday.",a:false},
{t:"days",type:"fillin",q:"The first day of the school week is often ___.",blanks:["Monday"]},
{t:"meals",q:"Which meal comes in the middle of the day?",o:["Lunch","Breakfast","Dinner","Snack at night"],a:0},
{t:"sequence",type:"tapall",q:"Tap ALL things we do in the morning.",pool:["Brush teeth","Eat breakfast","Wake up","Sleep deeply","Watch stars","Have dinner"],correct:["Brush teeth","Eat breakfast","Wake up"]},
{t:"days",type:"enterval",q:"If today is Monday, how many days till Wednesday?",a:2},
{t:"day/night",q:"Owls are awake at ___.",o:["Night","Noon","Morning","Afternoon"],a:0}
],
[
{t:"sequence",q:"Which comes between morning and evening?",o:["Afternoon","Night","Midnight","Yesterday"],a:0},
{t:"days",q:"Which day comes after Wednesday?",o:["Thursday","Tuesday","Monday","Sunday"],a:0},
{t:"days",q:"Which day comes before Sunday?",o:["Saturday","Monday","Friday","Tuesday"],a:0},
{t:"day/night",type:"tf",q:"The sun rises in the morning.",a:true},
{t:"day/night",type:"tf",q:"We see the moon in the bright noon sky.",a:false},
{t:"days",type:"fillin",q:"The day after Saturday is ___.",blanks:["Sunday"]},
{t:"meals",q:"Which meal is eaten last in the day?",o:["Dinner","Breakfast","Lunch","Snack at dawn"],a:0},
{t:"days",type:"tapall",q:"Tap ALL weekend days.",pool:["Saturday","Sunday","Monday","Tuesday","Friday","Wednesday"],correct:["Saturday","Sunday"]},
{t:"days",type:"enterval",q:"How many days are there from Monday to Friday?",a:5},
{t:"day/night",q:"Bats fly around mostly at ___.",o:["Night","Morning","Noon","Afternoon"],a:0}
],
[
{t:"sequence",q:"Which comes right after night?",o:["Morning","Evening","Afternoon","Noon"],a:0},
{t:"days",q:"Which is the day before Tuesday?",o:["Monday","Wednesday","Friday","Sunday"],a:0},
{t:"day/night",q:"When do we usually go to bed?",o:["Night","Morning","Noon","Sunrise"],a:0},
{t:"day/night",type:"tf",q:"It is dark at midnight.",a:true},
{t:"days",type:"tf",q:"Friday comes after Thursday.",a:true},
{t:"days",type:"fillin",q:"The day after Wednesday is ___.",blanks:["Thursday"]},
{t:"meals",q:"We eat breakfast in the ___.",o:["Morning","Night","Evening","Midnight"],a:0},
{t:"sequence",type:"tapall",q:"Tap ALL things we do at night.",pool:["Sleep","See stars","Switch on lights","Eat breakfast","Go to school","See sunshine"],correct:["Sleep","See stars","Switch on lights"]},
{t:"days",type:"enterval",q:"How many days in 1 week?",a:7},
{t:"day/night",q:"The sky turns dark in the ___.",o:["Night","Morning","Noon","Midday"],a:0}
]
],
pro:[
[
{t:"days",q:"If today is Monday, what day will it be tomorrow?",o:["Tuesday","Sunday","Wednesday","Friday"],a:0},
{t:"days",q:"If today is Friday, what day was yesterday?",o:["Thursday","Saturday","Monday","Sunday"],a:0},
{t:"sequence",q:"Order: Morning, ___, Evening, Night.",o:["Afternoon","Midnight","Sunrise","Bedtime"],a:0},
{t:"days",type:"tf",q:"Two days after Monday is Wednesday.",a:true},
{t:"days",type:"tf",q:"Three days after Sunday is Thursday.",a:false},
{t:"days",type:"fillin",q:"Two days after Tuesday is ___.",blanks:["Thursday"]},
{t:"sequence",q:"Which comes just before night?",o:["Evening","Morning","Noon","Sunrise"],a:0},
{t:"days",type:"tapall",q:"Tap ALL days that come after Wednesday in a week.",pool:["Thursday","Friday","Saturday","Sunday","Monday","Tuesday"],correct:["Thursday","Friday","Saturday","Sunday"]},
{t:"days",type:"enterval",q:"How many days from Monday to Thursday?",a:3},
{t:"days",type:"enterval",q:"How many days from Tuesday to Sunday?",a:5}
],
[
{t:"days",q:"If today is Wednesday, what day will it be after 2 days?",o:["Friday","Monday","Tuesday","Saturday"],a:0},
{t:"days",q:"If today is Sunday, what day was 2 days ago?",o:["Friday","Tuesday","Wednesday","Monday"],a:0},
{t:"sequence",q:"You eat lunch and then ___ comes next.",o:["Evening","Morning","Sunrise","Breakfast"],a:0},
{t:"days",type:"tf",q:"There are 5 weekdays from Monday to Friday.",a:true},
{t:"days",type:"tf",q:"Saturday is a weekday.",a:false},
{t:"days",type:"fillin",q:"The day before Monday is ___.",blanks:["Sunday"]},
{t:"sequence",q:"Just after sunrise it is ___.",o:["Morning","Night","Afternoon","Midnight"],a:0},
{t:"days",type:"tapall",q:"Tap ALL days that come before Friday.",pool:["Monday","Tuesday","Wednesday","Thursday","Saturday","Sunday"],correct:["Monday","Tuesday","Wednesday","Thursday"]},
{t:"days",type:"enterval",q:"If today is Tuesday, how many days till Friday?",a:3},
{t:"days",type:"enterval",q:"How many weekend days in 1 week?",a:2}
],
[
{t:"days",q:"3 days after Monday is ___.",o:["Thursday","Friday","Wednesday","Tuesday"],a:0},
{t:"days",q:"2 days before Saturday is ___.",o:["Thursday","Friday","Monday","Sunday"],a:0},
{t:"sequence",q:"Which comes between evening and morning?",o:["Night","Afternoon","Noon","Sunrise"],a:0},
{t:"days",type:"tf",q:"Sunday is the day after Saturday.",a:true},
{t:"sequence",type:"tf",q:"Afternoon comes before morning.",a:false},
{t:"days",type:"fillin",q:"3 days after Friday is ___.",blanks:["Monday"]},
{t:"days",q:"If yesterday was Tuesday, today is ___.",o:["Wednesday","Monday","Thursday","Sunday"],a:0},
{t:"sequence",type:"tapall",q:"Tap ALL words that name a part of the day.",pool:["Morning","Noon","Evening","Night","Tuesday","Banana"],correct:["Morning","Noon","Evening","Night"]},
{t:"days",type:"enterval",q:"From Wednesday to Sunday, how many days?",a:4},
{t:"days",type:"enterval",q:"How many days come before Saturday in a week starting Monday?",a:4}
],
[
{t:"days",q:"If tomorrow is Friday, today is ___.",o:["Thursday","Saturday","Wednesday","Monday"],a:0},
{t:"days",q:"If yesterday was Sunday, tomorrow is ___.",o:["Tuesday","Monday","Wednesday","Saturday"],a:0},
{t:"sequence",q:"After lunch we have ___ snacks.",o:["Afternoon","Morning","Midnight","Sunrise"],a:0},
{t:"days",type:"tf",q:"Wednesday is in the middle of the school week.",a:true},
{t:"days",type:"tf",q:"There are 4 days in a week.",a:false},
{t:"days",type:"fillin",q:"2 days before Sunday is ___.",blanks:["Friday"]},
{t:"sequence",q:"Order: Sunrise, Morning, Noon, ___, Sunset.",o:["Afternoon","Midnight","Yesterday","Tomorrow"],a:0},
{t:"days",type:"tapall",q:"Tap ALL days in the school week (Mon-Fri).",pool:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],correct:["Monday","Tuesday","Wednesday","Thursday","Friday"]},
{t:"days",type:"enterval",q:"How many days from Thursday to Sunday?",a:3},
{t:"days",type:"enterval",q:"How many days are NOT weekend in 1 week?",a:5}
],
[
{t:"days",q:"4 days after Monday is ___.",o:["Friday","Thursday","Saturday","Wednesday"],a:0},
{t:"days",q:"3 days before Thursday is ___.",o:["Monday","Tuesday","Sunday","Friday"],a:0},
{t:"sequence",q:"Sunrise happens in the ___.",o:["Morning","Night","Evening","Midnight"],a:0},
{t:"days",type:"tf",q:"5 days after Monday is Saturday.",a:true},
{t:"days",type:"tf",q:"The day after Friday is Wednesday.",a:false},
{t:"days",type:"fillin",q:"The day after Thursday is ___.",blanks:["Friday"]},
{t:"sequence",q:"What time of day is just before sunset?",o:["Evening","Morning","Noon","Midnight"],a:0},
{t:"days",type:"tapall",q:"Tap ALL days that start with the letter S.",pool:["Saturday","Sunday","Monday","Friday","Tuesday","Thursday"],correct:["Saturday","Sunday"]},
{t:"days",type:"enterval",q:"How many days from Sunday to Friday?",a:5},
{t:"days",type:"enterval",q:"If today is Wednesday, how many days till next Wednesday?",a:7}
]
]
},
7: { title:'Measurement',
beginner:[
[
{t:"taller/shorter",q:"Who is usually taller?",o:["A grown-up","A baby","A puppy","An ant"],a:0},
{t:"taller/shorter",q:"Which is shorter?",o:["A pencil","A tree","A house","A bus"],a:0},
{t:"longer/shorter",q:"Which is longer?",o:["A snake","A worm","A bead","A button"],a:0},
{t:"heavier/lighter",q:"Which is heavier?",o:["An elephant","A feather","A balloon","A leaf"],a:0},
{t:"heavier/lighter",q:"Which is lighter?",o:["A balloon","A rock","A brick","A bag of books"],a:0},
{t:"taller/shorter",type:"tf",q:"A giraffe is taller than a cat.",a:true},
{t:"longer/shorter",type:"tf",q:"A bus is longer than a car.",a:true},
{t:"heavier/lighter",type:"fillin",q:"A feather is ___ than a stone.",blanks:["lighter"]},
{t:"taller/shorter",type:"tapall",q:"Tap ALL things that are tall.",pool:["Tree","Building","Giraffe","Ant","Coin","Button"],correct:["Tree","Building","Giraffe"]},
{t:"longer/shorter",type:"enterval",q:"If a string has 6 beads and another has 3 beads, the longer one has how many beads?",a:6}
],
[
{t:"taller/shorter",q:"Which is the tallest?",o:["A house","A chair","A book","A spoon"],a:0},
{t:"taller/shorter",q:"Which is the shortest?",o:["An ant","A tree","A door","A man"],a:0},
{t:"longer/shorter",q:"Which is longer?",o:["A train","A toy car","A pen","A coin"],a:0},
{t:"longer/shorter",q:"Which is shorter?",o:["A spoon","A ladder","A road","A river"],a:0},
{t:"heavier/lighter",q:"Which is heavier?",o:["A bag of bricks","A balloon","A paper","A feather"],a:0},
{t:"heavier/lighter",type:"tf",q:"An apple is heavier than a feather.",a:true},
{t:"taller/shorter",type:"tf",q:"A baby is taller than its father.",a:false},
{t:"longer/shorter",type:"fillin",q:"A snake is ___ than a worm.",blanks:["longer"]},
{t:"heavier/lighter",type:"tapall",q:"Tap ALL things that are heavy.",pool:["Brick","Big stone","Bag of books","Feather","Paper","Balloon"],correct:["Brick","Big stone","Bag of books"]},
{t:"taller/shorter",type:"enterval",q:"Tom is 5 blocks tall and Sam is 3 blocks tall. How many blocks taller is Tom?",a:2}
],
[
{t:"taller/shorter",q:"Who is taller, an adult or a small child?",o:["The adult","The child","Both same","No one"],a:0},
{t:"longer/shorter",q:"Which is the longest?",o:["A python","A pencil","A pin","A bead"],a:0},
{t:"longer/shorter",q:"Which is the shortest?",o:["An eraser","A road","A river","A train"],a:0},
{t:"heavier/lighter",q:"Which is the heaviest?",o:["A truck","A bicycle","A skateboard","A scooter toy"],a:0},
{t:"heavier/lighter",q:"Which is the lightest?",o:["A leaf","A book","A bag","A brick"],a:0},
{t:"taller/shorter",type:"tf",q:"A flower is shorter than a tree.",a:true},
{t:"heavier/lighter",type:"tf",q:"A balloon is heavier than a rock.",a:false},
{t:"taller/shorter",type:"fillin",q:"A tree is ___ than a flower.",blanks:["taller"]},
{t:"longer/shorter",type:"tapall",q:"Tap ALL things that are long.",pool:["River","Train","Snake","Coin","Bead","Pin"],correct:["River","Train","Snake"]},
{t:"heavier/lighter",type:"enterval",q:"A bag has 5 books, another has 2 books. The lighter bag has how many books?",a:2}
],
[
{t:"taller/shorter",q:"Which is taller?",o:["A building","A chair","A book","A toy car"],a:0},
{t:"taller/shorter",q:"Which is shorter?",o:["A spoon","A pole","A flagpole","A coconut tree"],a:0},
{t:"longer/shorter",q:"Which is longer?",o:["A road","A pencil","A nail","A coin"],a:0},
{t:"heavier/lighter",q:"Which is heavier?",o:["A watermelon","A grape","A peanut","A feather"],a:0},
{t:"heavier/lighter",q:"Which is lighter?",o:["A leaf","A football","A school bag","A box of toys"],a:0},
{t:"taller/shorter",type:"tf",q:"A pencil is taller than a building.",a:false},
{t:"longer/shorter",type:"tf",q:"A line of 6 dots is longer than a line of 2 dots.",a:true},
{t:"heavier/lighter",type:"fillin",q:"An elephant is ___ than a mouse.",blanks:["heavier"]},
{t:"taller/shorter",type:"tapall",q:"Tap ALL things that are short.",pool:["Pencil","Coin","Button","Tree","Building","Giraffe"],correct:["Pencil","Coin","Button"]},
{t:"longer/shorter",type:"enterval",q:"One ribbon is 4 hands long, another is 7 hands long. The longer one is how many hands long?",a:7}
],
[
{t:"taller/shorter",q:"Which is the tallest?",o:["A coconut tree","A bush","A flower","Grass"],a:0},
{t:"longer/shorter",q:"Which is the shortest?",o:["A bead","A snake","A train","A road"],a:0},
{t:"heavier/lighter",q:"Which is the heaviest?",o:["A big rock","A small stone","A pebble","A grain of sand"],a:0},
{t:"heavier/lighter",q:"Which is the lightest?",o:["A feather","A book","A laptop","A bag"],a:0},
{t:"taller/shorter",q:"Which is shorter than a tree?",o:["A flower","A house","A tower","A hill"],a:0},
{t:"taller/shorter",type:"tf",q:"A door is taller than an ant.",a:true},
{t:"heavier/lighter",type:"tf",q:"A feather is heavier than an apple.",a:false},
{t:"longer/shorter",type:"fillin",q:"A road is ___ than a footpath at home.",blanks:["longer"]},
{t:"heavier/lighter",type:"tapall",q:"Tap ALL things that are light.",pool:["Feather","Balloon","Paper","Brick","Big stone","Iron rod"],correct:["Feather","Balloon","Paper"]},
{t:"taller/shorter",type:"enterval",q:"Anu is 4 hands tall, Mia is 6 hands tall. How many hands taller is Mia?",a:2}
]
],
pro:[
[
{t:"taller/shorter",q:"Ali is taller than Bittu. Bittu is taller than Cee. Who is the tallest?",o:["Ali","Bittu","Cee","All same"],a:0},
{t:"longer/shorter",q:"A red ribbon is longer than a blue one. The blue is longer than green. Which is shortest?",o:["Green","Blue","Red","All same"],a:0},
{t:"heavier/lighter",q:"A bag of apples is heavier than a bag of oranges. The orange bag is heavier than a bag of grapes. Which bag is lightest?",o:["Grapes","Apples","Oranges","All same"],a:0},
{t:"taller/shorter",type:"tf",q:"If A is taller than B, then B is shorter than A.",a:true},
{t:"heavier/lighter",type:"tf",q:"If a box is heavier than another, the other one is heavier too.",a:false},
{t:"longer/shorter",type:"fillin",q:"If a snake is 8 steps and a worm is 1 step, the snake is ___ than the worm.",blanks:["longer"]},
{t:"taller/shorter",q:"A tree is 9 blocks tall. A pole is 6 blocks tall. The tree is how many blocks taller?",o:["3","2","9","6"],a:0},
{t:"heavier/lighter",type:"tapall",q:"Tap ALL things heavier than a balloon.",pool:["Brick","Book","Stone","Feather","Paper","Empty cup"],correct:["Brick","Book","Stone"]},
{t:"longer/shorter",type:"enterval",q:"Ribbon A is 7 hands long, Ribbon B is 4 hands long. How many hands longer is A?",a:3},
{t:"heavier/lighter",type:"enterval",q:"Box X is 10 kg. Box Y is 6 kg. How many more kg is X?",a:4}
],
[
{t:"taller/shorter",q:"If Rita is shorter than Mira, who is taller?",o:["Mira","Rita","Both same","Cannot say"],a:0},
{t:"longer/shorter",q:"A road has 10 lights. Another has 4 lights. Which road seems longer?",o:["The one with 10 lights","The one with 4 lights","Both same","Neither"],a:0},
{t:"heavier/lighter",q:"A book has 100 pages. Another has 20 pages. Which is likely heavier?",o:["The 100-page book","The 20-page book","Both same","Neither"],a:0},
{t:"taller/shorter",type:"tf",q:"If A is taller than B and B is taller than C, then A is taller than C.",a:true},
{t:"longer/shorter",type:"tf",q:"A chain made of 5 paperclips is shorter than a chain of 9 paperclips.",a:true},
{t:"heavier/lighter",type:"fillin",q:"A balloon filled with air is ___ than a balloon filled with sand.",blanks:["lighter"]},
{t:"taller/shorter",q:"Stack A has 7 blocks. Stack B has 3 blocks. How many more blocks tall is A?",o:["4","3","7","10"],a:0},
{t:"longer/shorter",type:"tapall",q:"Tap ALL items that are usually longer than a pencil.",pool:["Cricket bat","Rope","Broom","Eraser","Coin","Button"],correct:["Cricket bat","Rope","Broom"]},
{t:"taller/shorter",type:"enterval",q:"Tom is 5 blocks. Sam is 8 blocks. How many blocks taller is Sam?",a:3},
{t:"heavier/lighter",type:"enterval",q:"If apples weigh 9 and oranges weigh 4, how much heavier are apples?",a:5}
],
[
{t:"longer/shorter",q:"Three pencils: 4, 7, 9 cubes long. Which is longest?",o:["9 cubes","7 cubes","4 cubes","All same"],a:0},
{t:"taller/shorter",q:"Three towers: 6, 2, 8 blocks tall. Which is shortest?",o:["2 blocks","6 blocks","8 blocks","Same"],a:0},
{t:"heavier/lighter",q:"Three boxes: 5, 9, 2 kg. Which is heaviest?",o:["9 kg","5 kg","2 kg","All same"],a:0},
{t:"taller/shorter",type:"tf",q:"A 10 block tower is taller than a 7 block tower.",a:true},
{t:"heavier/lighter",type:"tf",q:"A 3 kg bag is heavier than a 8 kg bag.",a:false},
{t:"longer/shorter",type:"fillin",q:"A pencil 8 cubes long is ___ than a pencil 5 cubes long.",blanks:["longer"]},
{t:"taller/shorter",q:"A 12 block tower fell. Now it is 5 blocks tall. How many blocks fell?",o:["7","5","12","17"],a:0},
{t:"heavier/lighter",type:"tapall",q:"Tap ALL items that are usually lighter than a book.",pool:["Feather","Balloon","Paper","Brick","Big stone","Brick wall"],correct:["Feather","Balloon","Paper"]},
{t:"longer/shorter",type:"enterval",q:"A snake measures 9 hands, worm measures 2 hands. How many hands longer is the snake?",a:7},
{t:"heavier/lighter",type:"enterval",q:"Bag A has 4 books, Bag B has 9 books. How many more books does B have?",a:5}
],
[
{t:"taller/shorter",q:"Anu(4), Bina(7), Cara(5) blocks tall. Tallest?",o:["Bina","Anu","Cara","Same"],a:0},
{t:"taller/shorter",q:"Anu(4), Bina(7), Cara(5) blocks tall. Shortest?",o:["Anu","Bina","Cara","Same"],a:0},
{t:"longer/shorter",q:"Ropes are 10, 6 and 3 m. Which is in the middle?",o:["6 m","10 m","3 m","All same"],a:0},
{t:"heavier/lighter",type:"tf",q:"If C is heavier than D and D is heavier than E, then C is heavier than E.",a:true},
{t:"taller/shorter",type:"tf",q:"A flagpole is shorter than a small toy.",a:false},
{t:"longer/shorter",type:"fillin",q:"A 7 cm pencil is ___ than a 4 cm pencil.",blanks:["longer"]},
{t:"taller/shorter",q:"Tower had 9 blocks. 4 fell. How tall now?",o:["5","4","9","13"],a:0},
{t:"heavier/lighter",type:"tapall",q:"Tap ALL items heavier than a leaf.",pool:["Stone","Book","Coin","Air","Tiny dust","Soap bubble"],correct:["Stone","Book","Coin"]},
{t:"longer/shorter",type:"enterval",q:"Pencil A is 9 cubes. Pencil B is 6 cubes. How many cubes longer is A?",a:3},
{t:"heavier/lighter",type:"enterval",q:"If a box weighs 7 and a stone 3, how much heavier is the box?",a:4}
],
[
{t:"taller/shorter",q:"Three trees A(5), B(8), C(2) m tall. Tallest?",o:["B","A","C","All same"],a:0},
{t:"longer/shorter",q:"Three roads X(20), Y(10), Z(15). Shortest?",o:["Y","X","Z","All same"],a:0},
{t:"heavier/lighter",q:"Three sacks 5, 9, 7 kg. Heaviest?",o:["9 kg","5 kg","7 kg","All same"],a:0},
{t:"taller/shorter",type:"tf",q:"Two towers: A is 6 blocks, B is 9 blocks. A is shorter than B.",a:true},
{t:"heavier/lighter",type:"tf",q:"A bag with 2 books is heavier than a bag with 8 books.",a:false},
{t:"longer/shorter",type:"fillin",q:"A 10 cube ribbon is ___ than a 4 cube ribbon.",blanks:["longer"]},
{t:"taller/shorter",q:"Boy is 5 blocks tall, his dad is 9 blocks tall. How many blocks taller is dad?",o:["4","5","9","14"],a:0},
{t:"longer/shorter",type:"tapall",q:"Tap ALL items longer than a small spoon.",pool:["Cricket bat","Long rope","Broomstick","Bead","Coin","Pin"],correct:["Cricket bat","Long rope","Broomstick"]},
{t:"taller/shorter",type:"enterval",q:"Tower A has 8 blocks, B has 3 blocks. How many blocks taller is A?",a:5},
{t:"heavier/lighter",type:"enterval",q:"If a bag has 10 books and another has 6, how many more books in the heavier bag?",a:4}
]
]
},
8: { title:'Numbers from 21 to 50',
beginner:[
[
{t:"counting",q:"What number comes after 21?",o:["22","20","23","24"],a:0},
{t:"counting",q:"What number comes before 30?",o:["29","31","28","27"],a:0},
{t:"more/less",q:"Which is more, 25 or 22?",o:["25","22","Same","Cannot say"],a:0},
{t:"more/less",q:"Which is less, 30 or 35?",o:["30","35","Same","Cannot say"],a:0},
{t:"counting",type:"tf",q:"The number after 24 is 25.",a:true},
{t:"counting",type:"tf",q:"The number before 28 is 30.",a:false},
{t:"counting",type:"fillin",q:"The number after 26 is ___.",blanks:["27"]},
{t:"counting",type:"tapall",q:"Tap ALL numbers between 21 and 25.",pool:["22","23","24","20","26","30"],correct:["22","23","24"]},
{t:"add/sub",type:"enterval",q:"What is 21 + 1?",a:22},
{t:"add/sub",type:"enterval",q:"What is 25 + 2?",a:27}
],
[
{t:"counting",q:"What number comes after 35?",o:["36","34","37","40"],a:0},
{t:"counting",q:"What number comes before 40?",o:["39","41","38","42"],a:0},
{t:"more/less",q:"Which is greater, 33 or 39?",o:["39","33","Same","Cannot say"],a:0},
{t:"more/less",q:"Which is smaller, 28 or 21?",o:["21","28","Same","Cannot say"],a:0},
{t:"counting",type:"tf",q:"After 49 comes 50.",a:true},
{t:"more/less",type:"tf",q:"32 is greater than 36.",a:false},
{t:"counting",type:"fillin",q:"The number before 32 is ___.",blanks:["31"]},
{t:"counting",type:"tapall",q:"Tap ALL numbers between 30 and 34.",pool:["31","32","33","29","35","40"],correct:["31","32","33"]},
{t:"add/sub",type:"enterval",q:"What is 30 + 5?",a:35},
{t:"add/sub",type:"enterval",q:"What is 28 - 3?",a:25}
],
[
{t:"counting",q:"What comes after 42?",o:["43","41","44","45"],a:0},
{t:"counting",q:"What comes before 50?",o:["49","51","48","47"],a:0},
{t:"more/less",q:"Which is more, 40 or 44?",o:["44","40","Same","Cannot say"],a:0},
{t:"more/less",q:"Which is less, 38 or 33?",o:["33","38","Same","Cannot say"],a:0},
{t:"counting",type:"tf",q:"30 comes just after 29.",a:true},
{t:"more/less",type:"tf",q:"45 is less than 41.",a:false},
{t:"counting",type:"fillin",q:"The number after 44 is ___.",blanks:["45"]},
{t:"counting",type:"tapall",q:"Tap ALL numbers between 40 and 44.",pool:["41","42","43","39","45","50"],correct:["41","42","43"]},
{t:"add/sub",type:"enterval",q:"What is 40 + 4?",a:44},
{t:"add/sub",type:"enterval",q:"What is 35 - 2?",a:33}
],
[
{t:"counting",q:"What comes after 29?",o:["30","28","31","32"],a:0},
{t:"counting",q:"What comes before 23?",o:["22","24","21","20"],a:0},
{t:"more/less",q:"Which is greater, 50 or 47?",o:["50","47","Same","Cannot say"],a:0},
{t:"more/less",q:"Which is smaller, 36 or 31?",o:["31","36","Same","Cannot say"],a:0},
{t:"counting",type:"tf",q:"38 comes after 37.",a:true},
{t:"counting",type:"tf",q:"The number before 41 is 42.",a:false},
{t:"counting",type:"fillin",q:"The number before 50 is ___.",blanks:["49"]},
{t:"counting",type:"tapall",q:"Tap ALL numbers between 45 and 49.",pool:["46","47","48","44","50","51"],correct:["46","47","48"]},
{t:"add/sub",type:"enterval",q:"What is 24 + 5?",a:29},
{t:"add/sub",type:"enterval",q:"What is 40 - 5?",a:35}
],
[
{t:"counting",q:"What comes after 49?",o:["50","48","51","45"],a:0},
{t:"counting",q:"What comes before 36?",o:["35","37","34","33"],a:0},
{t:"more/less",q:"Which is more, 22 or 27?",o:["27","22","Same","Cannot say"],a:0},
{t:"more/less",q:"Which is less, 43 or 49?",o:["43","49","Same","Cannot say"],a:0},
{t:"counting",type:"tf",q:"After 26 comes 27.",a:true},
{t:"more/less",type:"tf",q:"34 is greater than 39.",a:false},
{t:"counting",type:"fillin",q:"The number after 38 is ___.",blanks:["39"]},
{t:"counting",type:"tapall",q:"Tap ALL numbers greater than 30 in this set.",pool:["31","45","49","21","25","28"],correct:["31","45","49"]},
{t:"add/sub",type:"enterval",q:"What is 26 + 3?",a:29},
{t:"add/sub",type:"enterval",q:"What is 45 - 4?",a:41}
]
],
pro:[
[
{t:"counting",q:"Which number is missing? 22, 23, ___, 25.",o:["24","26","21","20"],a:0},
{t:"counting",q:"Which number is missing? 30, ___, 32, 33.",o:["31","29","34","28"],a:0},
{t:"more/less",q:"Which is the greatest? 28, 35, 31",o:["35","28","31","All same"],a:0},
{t:"more/less",q:"Which is the smallest? 41, 36, 49",o:["36","41","49","All same"],a:0},
{t:"counting",type:"tf",q:"In 21, 22, 23, 24, the next number is 25.",a:true},
{t:"more/less",type:"tf",q:"40 is less than 30.",a:false},
{t:"counting",type:"fillin",q:"Missing number: 47, 48, ___, 50.",blanks:["49"]},
{t:"counting",type:"tapall",q:"Tap ALL numbers between 35 and 40.",pool:["36","37","38","39","34","41"],correct:["36","37","38","39"]},
{t:"add/sub",type:"enterval",q:"What is 25 + 10?",a:35},
{t:"add/sub",type:"enterval",q:"What is 40 - 10?",a:30}
],
[
{t:"counting",q:"Missing: 38, 39, ___, 41.",o:["40","42","37","36"],a:0},
{t:"counting",q:"Missing: 26, ___, 28, 29.",o:["27","25","30","24"],a:0},
{t:"more/less",q:"Order from smallest: 33, 22, 44.",o:["22, 33, 44","44, 33, 22","33, 22, 44","22, 44, 33"],a:0},
{t:"add/sub",q:"What is 30 + 12?",o:["42","32","52","40"],a:0},
{t:"add/sub",q:"What is 40 - 6?",o:["34","36","32","46"],a:0},
{t:"more/less",type:"tf",q:"23 is greater than 32.",a:false},
{t:"counting",type:"tf",q:"The number that comes 2 after 30 is 32.",a:true},
{t:"counting",type:"fillin",q:"Missing: 42, 43, 44, ___.",blanks:["45"]},
{t:"counting",type:"tapall",q:"Tap ALL numbers less than 30 in this set.",pool:["21","25","28","31","40","45"],correct:["21","25","28"]},
{t:"add/sub",type:"enterval",q:"What is 22 + 6?",a:28}
],
[
{t:"add/sub",q:"Mira has 25 stickers. She gets 4 more. How many now?",o:["29","21","30","20"],a:0},
{t:"add/sub",q:"There are 40 birds. 5 fly away. How many are left?",o:["35","45","40","30"],a:0},
{t:"counting",q:"Missing: 33, 34, ___, ___, 37.",o:["35, 36","36, 35","32, 31","38, 39"],a:0},
{t:"more/less",q:"Which is just before 50?",o:["49","51","48","45"],a:0},
{t:"add/sub",type:"tf",q:"20 + 10 equals 30.",a:true},
{t:"add/sub",type:"tf",q:"45 - 5 equals 50.",a:false},
{t:"counting",type:"fillin",q:"Missing: 21, ___, 23.",blanks:["22"]},
{t:"counting",type:"tapall",q:"Tap ALL numbers in counting order from 26 to 28.",pool:["26","27","28","25","29","30"],correct:["26","27","28"]},
{t:"add/sub",type:"enterval",q:"23 + 5 = ?",a:28},
{t:"add/sub",type:"enterval",q:"50 - 7 = ?",a:43}
],
[
{t:"add/sub",q:"Sam has 30 marbles. He gives 8 to his sister. How many left?",o:["22","38","32","20"],a:0},
{t:"add/sub",q:"There are 21 apples. 9 more are added. How many in all?",o:["30","12","31","29"],a:0},
{t:"more/less",q:"Order from greatest: 27, 39, 44.",o:["44, 39, 27","27, 39, 44","39, 44, 27","27, 44, 39"],a:0},
{t:"counting",q:"Which number is between 35 and 37?",o:["36","34","38","40"],a:0},
{t:"add/sub",type:"tf",q:"25 + 5 = 30.",a:true},
{t:"more/less",type:"tf",q:"50 is the smallest number from 21 to 50.",a:false},
{t:"counting",type:"fillin",q:"Missing: 30, ___, 32, 33.",blanks:["31"]},
{t:"counting",type:"tapall",q:"Tap ALL numbers greater than 40 in this set.",pool:["41","45","49","38","30","25"],correct:["41","45","49"]},
{t:"add/sub",type:"enterval",q:"40 - 8 = ?",a:32},
{t:"add/sub",type:"enterval",q:"34 + 6 = ?",a:40}
],
[
{t:"add/sub",q:"A box has 35 sweets. 10 are eaten. How many left?",o:["25","45","30","20"],a:0},
{t:"add/sub",q:"There are 26 boys and 4 girls. How many children in all?",o:["30","22","26","31"],a:0},
{t:"counting",q:"Missing: 47, ___, 49, 50.",o:["48","46","51","45"],a:0},
{t:"more/less",q:"What number is one less than 41?",o:["40","42","39","30"],a:0},
{t:"add/sub",type:"tf",q:"38 + 2 = 40.",a:true},
{t:"add/sub",type:"tf",q:"50 - 10 = 30.",a:false},
{t:"counting",type:"fillin",q:"Missing: ___, 41, 42, 43.",blanks:["40"]},
{t:"counting",type:"tapall",q:"Tap ALL numbers between 22 and 26.",pool:["23","24","25","21","27","30"],correct:["23","24","25"]},
{t:"add/sub",type:"enterval",q:"30 + 15 = ?",a:45},
{t:"add/sub",type:"enterval",q:"45 - 20 = ?",a:25}
]
]
},
9: { title:'Data Handling',
beginner:[
[
{t:"picture graph",q:"3 apples and 2 bananas are drawn. How many apples?",o:["3","2","5","1"],a:0},
{t:"picture graph",q:"4 cats and 1 dog. How many dogs?",o:["1","4","5","2"],a:0},
{t:"tally",q:"|||| means how many?",o:["4","5","3","2"],a:0},
{t:"tally",q:"|| means how many?",o:["2","3","1","4"],a:0},
{t:"sorting",type:"tf",q:"We can sort fruits by their color.",a:true},
{t:"most",type:"tf",q:"If there are 5 red and 2 blue, red is more.",a:true},
{t:"least",q:"3 stars, 5 moons, 1 sun. Which is least?",o:["sun","stars","moons","none"],a:0},
{t:"count",type:"fillin",q:"5 balls and 2 bats. There are ___ balls.",blanks:["5"]},
{t:"tap all",type:"tapall",q:"Tap things we can count.",pool:["apples","books","air","cars"],correct:["apples","books","cars"]},
{t:"enter",type:"enterval",q:"4 birds plus 2 birds shown in graph. Total?",a:6}
],
[
{t:"picture graph",q:"Graph shows 6 stars and 3 hearts. How many stars?",o:["6","3","9","2"],a:0},
{t:"picture graph",q:"5 dogs and 4 cats drawn. How many cats?",o:["4","5","9","1"],a:0},
{t:"tally",q:"||||| means how many?",o:["5","4","3","6"],a:0},
{t:"tally",q:"||| means how many?",o:["3","2","4","5"],a:0},
{t:"most",q:"Apples 7, mango 3, banana 2. Which is most?",o:["apples","mango","banana","equal"],a:0},
{t:"least",type:"tf",q:"If 2 red and 5 blue, red is least.",a:true},
{t:"sorting",type:"tf",q:"A circle and a square can be sorted by shape.",a:true},
{t:"count",type:"fillin",q:"In a graph 4 cars and 3 buses. There are ___ buses.",blanks:["3"]},
{t:"tap all",type:"tapall",q:"Tap colors we use to sort.",pool:["red","blue","loud","green"],correct:["red","blue","green"]},
{t:"enter",type:"enterval",q:"3 ducks and 4 ducks shown. How many ducks?",a:7}
],
[
{t:"picture graph",q:"Graph: 2 pencils and 5 pens. How many pens?",o:["5","2","7","3"],a:0},
{t:"picture graph",q:"3 hats and 6 caps. How many hats?",o:["3","6","9","2"],a:0},
{t:"tally",q:"|||| | means how many?",o:["6","5","4","7"],a:0},
{t:"tally",type:"tf",q:"|||| | stands for 6.",a:true},
{t:"most",q:"Cat 4, dog 6, fish 2. Most is?",o:["dog","cat","fish","none"],a:0},
{t:"least",q:"Mango 8, plum 1, fig 4. Least is?",o:["plum","fig","mango","equal"],a:0},
{t:"sorting",type:"tf",q:"We can group toys by their size.",a:true},
{t:"count",type:"fillin",q:"6 stars and 2 moons. There are ___ stars.",blanks:["6"]},
{t:"tap all",type:"tapall",q:"Tap shapes you can sort.",pool:["circle","square","music","triangle"],correct:["circle","square","triangle"]},
{t:"enter",type:"enterval",q:"5 cows and 1 cow in graph. Total cows?",a:6}
],
[
{t:"picture graph",q:"5 fish and 2 frogs. How many frogs?",o:["2","5","7","3"],a:0},
{t:"picture graph",q:"4 books and 3 bags. How many books?",o:["4","3","7","1"],a:0},
{t:"tally",q:"|||| || means how many?",o:["7","5","6","8"],a:0},
{t:"tally",type:"tf",q:"||| means three.",a:true},
{t:"most",q:"Red 9, blue 4, green 5. Most is?",o:["red","blue","green","none"],a:0},
{t:"least",type:"tf",q:"If 1 owl and 3 crow, owl is least.",a:true},
{t:"sorting",q:"Which is best to sort animals?",o:["legs they have","their loudness","weather","food cost"],a:0},
{t:"count",type:"fillin",q:"7 apples and 3 oranges. There are ___ oranges.",blanks:["3"]},
{t:"tap all",type:"tapall",q:"Tap things we sort by shape.",pool:["square","circle","time","oval"],correct:["square","circle","oval"]},
{t:"enter",type:"enterval",q:"6 sheep and 2 sheep in graph. Total sheep?",a:8}
],
[
{t:"picture graph",q:"3 buses and 7 cars. How many cars?",o:["7","3","10","4"],a:0},
{t:"picture graph",q:"2 hats and 5 caps. How many hats?",o:["2","5","7","3"],a:0},
{t:"tally",q:"|||| ||| means how many?",o:["8","7","6","9"],a:0},
{t:"tally",type:"tf",q:"|||| | means 6.",a:true},
{t:"most",q:"Apple 2, banana 5, grape 9. Most is?",o:["grape","apple","banana","none"],a:0},
{t:"least",q:"Pen 3, pencil 1, ruler 5. Least is?",o:["pencil","pen","ruler","equal"],a:0},
{t:"sorting",type:"tf",q:"Sorting helps us count quickly.",a:true},
{t:"count",type:"fillin",q:"8 stars and 1 moon. There are ___ stars.",blanks:["8"]},
{t:"tap all",type:"tapall",q:"Tap fruits to put in fruit group.",pool:["apple","mango","table","banana"],correct:["apple","mango","banana"]},
{t:"enter",type:"enterval",q:"4 frogs plus 5 frogs in graph. Total?",a:9}
]
],
pro:[
[
{t:"compare",q:"Apples 8, oranges 5. How many more apples?",o:["3","2","13","4"],a:0},
{t:"compare",q:"Red 6, blue 9. How many more blue?",o:["3","2","15","5"],a:0},
{t:"tally two-step",q:"|||| || apples and ||| oranges. Total?",o:["10","7","9","8"],a:0},
{t:"missing",type:"fillin",q:"Apples 5, mangoes 4, total 12. Bananas = ___.",blanks:["3"]},
{t:"compare",type:"tf",q:"If cats 7 and dogs 4, cats are 3 more.",a:true},
{t:"sorting",q:"Best way to sort coins?",o:["by value","by sound","by smell","by taste"],a:0},
{t:"two-step",q:"3 birds came, 4 more came. How many?",o:["7","6","8","5"],a:0},
{t:"tap all",type:"tapall",q:"Tap groups with more than 5.",pool:["7 stars","9 hats","2 caps","6 books"],correct:["7 stars","9 hats","6 books"]},
{t:"enter",type:"enterval",q:"Tally |||| ||| equals?",a:8},
{t:"enter",type:"enterval",q:"7 cows minus 4 cows. How many left?",a:3}
],
[
{t:"compare",q:"Bananas 9, mangoes 6. Difference?",o:["3","15","2","5"],a:0},
{t:"two-step",q:"In a graph 4 hens and 5 ducks. Total birds?",o:["9","8","10","7"],a:0},
{t:"missing",type:"fillin",q:"Total 10 fruits: 6 apples, ___ mangoes.",blanks:["4"]},
{t:"compare",type:"tf",q:"Pen 3 and pencil 8. Pencil is 5 more.",a:true},
{t:"least",q:"Cat 6, dog 6, rat 2. Least is?",o:["rat","cat","dog","none"],a:0},
{t:"tally",q:"|||| |||| equals?",o:["10","9","11","8"],a:0},
{t:"two-step",q:"5 stars in row 1 and 4 in row 2. Total?",o:["9","8","10","7"],a:0},
{t:"tap all",type:"tapall",q:"Tap groups less than 4.",pool:["3 fish","2 frogs","6 cats","1 owl"],correct:["3 fish","2 frogs","1 owl"]},
{t:"enter",type:"enterval",q:"Tally |||| |||| | equals?",a:11},
{t:"enter",type:"enterval",q:"9 hats and 6 hats. Total?",a:15}
],
[
{t:"compare",q:"Red 10, blue 4. How many more red?",o:["6","5","14","7"],a:0},
{t:"two-step",q:"Apples 7, oranges 2, mangoes 3. Total fruits?",o:["12","11","13","10"],a:0},
{t:"missing",type:"fillin",q:"Total 9 birds: 4 hens, ___ ducks.",blanks:["5"]},
{t:"compare",type:"tf",q:"Ball 5 and bat 2. Ball is 3 more.",a:true},
{t:"most",q:"Cow 3, sheep 8, goat 5. Most is?",o:["sheep","cow","goat","none"],a:0},
{t:"tally",q:"|||| ||| means?",o:["8","7","9","6"],a:0},
{t:"tap all",type:"tapall",q:"Tap groups equal to 5.",pool:["5 caps","5 cars","3 dogs","5 mats"],correct:["5 caps","5 cars","5 mats"]},
{t:"two-step",q:"3 sparrows, 2 crows, 4 owls. Total birds?",o:["9","8","10","7"],a:0},
{t:"enter",type:"enterval",q:"6 frogs minus 2 frogs equals?",a:4},
{t:"enter",type:"enterval",q:"Tally |||| |||| ||| equals?",a:13}
],
[
{t:"compare",q:"Pen 12, pencil 7. How many more pen?",o:["5","4","19","6"],a:0},
{t:"two-step",q:"Cats 6 and dogs 6. Total?",o:["12","11","13","10"],a:0},
{t:"missing",type:"fillin",q:"Apples 5, mangoes 7, oranges ___, total 14.",blanks:["2"]},
{t:"compare",type:"tf",q:"Hat 4 and cap 9. Cap is 5 more.",a:true},
{t:"least",q:"Star 9, moon 4, sun 4. Least is?",o:["moon","star","sun","none"],a:0},
{t:"tally",q:"|||| |||| || equals?",o:["12","11","13","10"],a:0},
{t:"tap all",type:"tapall",q:"Tap groups with more than 8.",pool:["9 cows","10 hens","5 cats","12 ducks"],correct:["9 cows","10 hens","12 ducks"]},
{t:"two-step",q:"4 boys, 5 girls in graph. Children?",o:["9","8","10","7"],a:0},
{t:"enter",type:"enterval",q:"15 minus 6 equals?",a:9},
{t:"enter",type:"enterval",q:"Tally |||| |||| |||| equals?",a:15}
],
[
{t:"compare",q:"Books 11, bags 5. Difference?",o:["6","16","5","7"],a:0},
{t:"two-step",q:"3 buses, 4 cars, 2 bikes. Total?",o:["9","8","10","7"],a:0},
{t:"missing",type:"fillin",q:"Total 13 toys: 8 cars, ___ dolls.",blanks:["5"]},
{t:"compare",type:"tf",q:"Apple 10 and banana 4. Apple is 6 more.",a:true},
{t:"most",q:"Hen 7, duck 9, owl 4. Most is?",o:["duck","hen","owl","none"],a:0},
{t:"tally",q:"|||| |||| |||| | equals?",o:["16","15","17","14"],a:0},
{t:"tap all",type:"tapall",q:"Tap groups less than 7.",pool:["6 hats","3 mats","8 cats","2 rats"],correct:["6 hats","3 mats","2 rats"]},
{t:"two-step",q:"5 red, 4 blue, 3 green balls. Total balls?",o:["12","11","13","10"],a:0},
{t:"enter",type:"enterval",q:"14 minus 7 equals?",a:7},
{t:"enter",type:"enterval",q:"8 stars plus 4 stars equals?",a:12}
]
]
},
10: { title:'Patterns',
beginner:[
[
{t:"color",q:"Red, Blue, Red, Blue, ___?",o:["Red","Blue","Green","Yellow"],a:0},
{t:"shape",q:"Circle, Square, Circle, Square, ___?",o:["Circle","Square","Triangle","Star"],a:0},
{t:"number +1",q:"1, 2, 3, ___?",o:["4","5","3","6"],a:0},
{t:"number +2",q:"2, 4, 6, ___?",o:["8","7","9","10"],a:0},
{t:"ABAB",type:"tf",q:"A, B, A, B is an ABAB pattern.",a:true},
{t:"ABCABC",type:"tf",q:"X, Y, Z, X, Y, Z is an ABCABC pattern.",a:true},
{t:"color",type:"fillin",q:"Yellow, Green, Yellow, Green, ___",blanks:["Yellow"]},
{t:"shape",q:"Star, Star, Star, what comes next?",o:["Star","Circle","Square","Triangle"],a:0},
{t:"tap all",type:"tapall",q:"Tap patterns that repeat.",pool:["AB AB","XY XY","random","123 123"],correct:["AB AB","XY XY","123 123"]},
{t:"enter",type:"enterval",q:"In 1, 2, 3, 4, ___ what is next?",a:5}
],
[
{t:"color",q:"Pink, Blue, Pink, Blue, ___?",o:["Pink","Blue","Red","Green"],a:0},
{t:"shape",q:"Triangle, Circle, Triangle, Circle, ___?",o:["Triangle","Circle","Square","Star"],a:0},
{t:"number +1",q:"5, 6, 7, ___?",o:["8","9","6","10"],a:0},
{t:"number +2",q:"1, 3, 5, ___?",o:["7","6","8","9"],a:0},
{t:"ABAB",type:"tf",q:"Cat, Dog, Cat, Dog is an ABAB pattern.",a:true},
{t:"ABCABC",q:"A, B, C, A, B, ___?",o:["C","A","B","D"],a:0},
{t:"color",type:"fillin",q:"Red, Red, Red, ___",blanks:["Red"]},
{t:"shape",q:"Square, Circle, Square, Circle, what comes next?",o:["Square","Circle","Triangle","Star"],a:0},
{t:"tap all",type:"tapall",q:"Tap things that show a pattern.",pool:["1 2 1 2","red blue red","cloud","ABC ABC"],correct:["1 2 1 2","red blue red","ABC ABC"]},
{t:"enter",type:"enterval",q:"3, 4, 5, 6, ___?",a:7}
],
[
{t:"color",q:"Green, Yellow, Green, Yellow, ___?",o:["Green","Yellow","Blue","Red"],a:0},
{t:"shape",q:"Heart, Star, Heart, Star, ___?",o:["Heart","Star","Circle","Square"],a:0},
{t:"number +1",q:"7, 8, 9, ___?",o:["10","11","8","12"],a:0},
{t:"number +5",q:"5, 10, 15, ___?",o:["20","25","18","17"],a:0},
{t:"ABAB",q:"X, O, X, O, ___?",o:["X","O","Y","Z"],a:0},
{t:"ABCABC",type:"tf",q:"Red, Blue, Green, Red, Blue, Green is ABCABC.",a:true},
{t:"color",type:"fillin",q:"Blue, Red, Blue, Red, ___",blanks:["Blue"]},
{t:"shape",q:"Circle, Triangle, Square, Circle, Triangle, ___?",o:["Square","Circle","Triangle","Star"],a:0},
{t:"tap all",type:"tapall",q:"Tap number patterns by +1.",pool:["1 2 3","4 5 6","2 4 6","8 9 10"],correct:["1 2 3","4 5 6","8 9 10"]},
{t:"enter",type:"enterval",q:"6, 7, 8, ___?",a:9}
],
[
{t:"color",q:"Black, White, Black, White, ___?",o:["Black","White","Grey","Pink"],a:0},
{t:"shape",q:"Square, Square, Circle, Square, Square, ___?",o:["Circle","Square","Triangle","Star"],a:0},
{t:"number +1",q:"10, 11, 12, ___?",o:["13","14","11","15"],a:0},
{t:"number +2",q:"6, 8, 10, ___?",o:["12","11","13","14"],a:0},
{t:"ABAB",type:"tf",q:"1, 1, 1, 1 is an ABAB pattern.",a:false},
{t:"ABCABC",q:"P, Q, R, P, Q, ___?",o:["R","P","Q","S"],a:0},
{t:"color",type:"fillin",q:"Yellow, Pink, Yellow, Pink, ___",blanks:["Yellow"]},
{t:"shape",q:"Star, Heart, Star, Heart, what comes next?",o:["Star","Heart","Circle","Square"],a:0},
{t:"tap all",type:"tapall",q:"Tap shape patterns.",pool:["circle square circle","star star star","triangle triangle","ABAB"],correct:["circle square circle","star star star","triangle triangle"]},
{t:"enter",type:"enterval",q:"4, 6, 8, 10, ___?",a:12}
],
[
{t:"color",q:"Orange, Purple, Orange, Purple, ___?",o:["Orange","Purple","Red","Pink"],a:0},
{t:"shape",q:"Circle, Star, Circle, Star, ___?",o:["Circle","Star","Square","Triangle"],a:0},
{t:"number +1",q:"15, 16, 17, ___?",o:["18","19","16","20"],a:0},
{t:"number +5",q:"10, 15, 20, ___?",o:["25","30","22","23"],a:0},
{t:"ABAB",q:"Sun, Moon, Sun, Moon, ___?",o:["Sun","Moon","Star","Cloud"],a:0},
{t:"ABCABC",type:"tf",q:"Cat, Dog, Cow, Cat, Dog, Cow is ABCABC.",a:true},
{t:"color",type:"fillin",q:"Green, Blue, Green, Blue, ___",blanks:["Green"]},
{t:"shape",q:"Heart, Heart, Star, Heart, Heart, ___?",o:["Star","Heart","Circle","Square"],a:0},
{t:"tap all",type:"tapall",q:"Tap +2 patterns.",pool:["2 4 6","3 5 7","1 2 3","10 12 14"],correct:["2 4 6","3 5 7","10 12 14"]},
{t:"enter",type:"enterval",q:"20, 21, 22, ___?",a:23}
]
],
pro:[
[
{t:"missing",q:"Red, ___, Red, Blue, Red, Blue. Find missing.",o:["Blue","Red","Green","Yellow"],a:0},
{t:"missing",q:"1, 2, ___, 4, 5. Find missing.",o:["3","6","2","7"],a:0},
{t:"+5",q:"5, 10, ___, 20, 25. Find missing.",o:["15","18","12","17"],a:0},
{t:"two-step",q:"Star, Heart, Heart, Star, Heart, Heart. What comes next?",o:["Star","Heart","Circle","Square"],a:0},
{t:"+2",type:"fillin",q:"3, 5, 7, ___",blanks:["9"]},
{t:"+1",type:"tf",q:"Pattern 8, 9, 10, 11 grows by 1.",a:true},
{t:"missing",q:"A, B, C, A, B, ___. Missing letter?",o:["C","A","B","D"],a:0},
{t:"tap all",type:"tapall",q:"Tap +5 sequences.",pool:["5 10 15","10 15 20","2 3 4","20 25 30"],correct:["5 10 15","10 15 20","20 25 30"]},
{t:"enter",type:"enterval",q:"In 7, 9, 11, 13, what is next?",a:15},
{t:"enter",type:"enterval",q:"Pattern 25, 30, 35, ___?",a:40}
],
[
{t:"missing",q:"Cat, Dog, ___, Dog, Cat, Dog. Missing?",o:["Cat","Dog","Cow","Owl"],a:0},
{t:"missing",q:"2, 4, ___, 8, 10. Missing?",o:["6","5","7","9"],a:0},
{t:"+5",q:"15, 20, 25, ___?",o:["30","35","28","27"],a:0},
{t:"two-step",q:"Red, Red, Blue, Red, Red, Blue, Red, Red, ___?",o:["Blue","Red","Green","Yellow"],a:0},
{t:"+2",type:"fillin",q:"6, 8, 10, ___",blanks:["12"]},
{t:"+1",type:"tf",q:"Pattern 13, 14, 15, 16 grows by 2.",a:false},
{t:"missing",q:"Star, Heart, Sun, Star, Heart, ___. Missing?",o:["Sun","Star","Heart","Moon"],a:0},
{t:"tap all",type:"tapall",q:"Tap +1 sequences.",pool:["3 4 5","7 8 9","2 4 6","11 12 13"],correct:["3 4 5","7 8 9","11 12 13"]},
{t:"enter",type:"enterval",q:"In 30, 35, 40, what is next?",a:45},
{t:"enter",type:"enterval",q:"Find missing: 4, 6, ___, 10",a:8}
],
[
{t:"missing",q:"X, Y, X, ___, X, Y. Missing?",o:["Y","X","Z","W"],a:0},
{t:"missing",q:"10, 12, ___, 16. Missing?",o:["14","13","15","17"],a:0},
{t:"+5",q:"20, 25, 30, ___?",o:["35","40","32","33"],a:0},
{t:"two-step",q:"1, 3, 5, 7, 9, ___?",o:["11","10","12","8"],a:0},
{t:"+2",type:"fillin",q:"5, 7, 9, ___",blanks:["11"]},
{t:"compare",type:"tf",q:"Pattern 0, 5, 10, 15 grows by 5.",a:true},
{t:"missing",q:"A, B, B, A, B, ___. Missing?",o:["B","A","C","D"],a:0},
{t:"tap all",type:"tapall",q:"Tap repeating ABAB.",pool:["red blue red blue","cat dog cat dog","sun sun sun","1 2 1 2"],correct:["red blue red blue","cat dog cat dog","1 2 1 2"]},
{t:"enter",type:"enterval",q:"What number completes 18, 20, 22, ___?",a:24},
{t:"enter",type:"enterval",q:"Find next: 0, 5, 10, 15, ___?",a:20}
],
[
{t:"missing",q:"Sun, Moon, Star, Sun, ___, Star. Missing?",o:["Moon","Sun","Star","Cloud"],a:0},
{t:"missing",q:"3, 6, ___, 12, 15. Missing?",o:["9","8","10","11"],a:0},
{t:"two-step",q:"What two come after 13, 14, 15?",o:["16, 17","15, 16","17, 18","14, 15"],a:0},
{t:"+5",q:"50, 55, 60, ___?",o:["65","70","62","63"],a:0},
{t:"+2",type:"fillin",q:"11, 13, 15, ___",blanks:["17"]},
{t:"+1",type:"tf",q:"19, 20, 21, 22 grows by 1.",a:true},
{t:"missing",q:"P, P, Q, P, P, Q, P, P, ___. Missing?",o:["Q","P","R","S"],a:0},
{t:"tap all",type:"tapall",q:"Tap +2 patterns.",pool:["1 3 5","4 6 8","5 6 7","20 22 24"],correct:["1 3 5","4 6 8","20 22 24"]},
{t:"enter",type:"enterval",q:"Pattern 35, 40, 45, ___?",a:50},
{t:"enter",type:"enterval",q:"Find missing: 7, 9, ___, 13",a:11}
],
[
{t:"missing",q:"Big, Small, Big, ___, Big, Small. Missing?",o:["Small","Big","Tall","Short"],a:0},
{t:"missing",q:"5, 10, 15, ___, 25. Missing?",o:["20","18","22","17"],a:0},
{t:"+5",q:"40, 45, ___, 55. Missing?",o:["50","48","52","47"],a:0},
{t:"two-step",q:"Triangle, Square, Square, Triangle, Square, ___?",o:["Square","Triangle","Circle","Star"],a:0},
{t:"+2",type:"fillin",q:"14, 16, 18, ___",blanks:["20"]},
{t:"compare",type:"tf",q:"Pattern 22, 24, 26 grows by 2.",a:true},
{t:"missing",q:"Cat, Dog, Cow, Cat, Dog, ___. Missing?",o:["Cow","Cat","Dog","Owl"],a:0},
{t:"tap all",type:"tapall",q:"Tap valid ABCABC patterns.",pool:["1 2 3 1 2 3","red blue green red","cat dog cow cat","one one one"],correct:["1 2 3 1 2 3","red blue green red","cat dog cow cat"]},
{t:"enter",type:"enterval",q:"What is next in 2, 4, 6, 8, ___?",a:10},
{t:"enter",type:"enterval",q:"Find missing: 60, 65, ___, 75",a:70}
]
]
},
11: { title:'Numbers up to 99',
beginner:[
[
{t:"counting",q:"What number comes after 24?",o:["25","23","26","22"],a:0},
{t:"counting",q:"What number comes before 30?",o:["29","31","28","27"],a:0},
{t:"place value",q:"In 35, the tens digit is?",o:["3","5","8","2"],a:0},
{t:"place value",q:"In 47, the ones digit is?",o:["7","4","11","3"],a:0},
{t:"compare",q:"Which is greater: 56 or 65?",o:["65","56","equal","none"],a:0},
{t:"counting",type:"tf",q:"After 49 comes 50.",a:true},
{t:"counting",type:"fillin",q:"Before 70 is ___",blanks:["69"]},
{t:"add",q:"20 + 5 equals?",o:["25","20","30","15"],a:0},
{t:"tap all",type:"tapall",q:"Tap 2-digit numbers.",pool:["12","45","8","99"],correct:["12","45","99"]},
{t:"enter",type:"enterval",q:"What is 30 + 4?",a:34}
],
[
{t:"counting",q:"What comes after 60?",o:["61","59","62","58"],a:0},
{t:"counting",q:"What comes before 50?",o:["49","51","48","52"],a:0},
{t:"place value",q:"In 72, tens digit is?",o:["7","2","9","5"],a:0},
{t:"place value",q:"In 84, ones digit is?",o:["4","8","12","2"],a:0},
{t:"compare",q:"Which is smaller: 39 or 93?",o:["39","93","equal","none"],a:0},
{t:"counting",type:"tf",q:"79 comes just before 80.",a:true},
{t:"counting",type:"fillin",q:"After 89 is ___",blanks:["90"]},
{t:"add",q:"40 + 6 equals?",o:["46","40","50","36"],a:0},
{t:"tap all",type:"tapall",q:"Tap numbers between 50 and 60.",pool:["52","58","45","60"],correct:["52","58"]},
{t:"enter",type:"enterval",q:"What is 50 + 7?",a:57}
],
[
{t:"counting",q:"What comes after 88?",o:["89","87","90","86"],a:0},
{t:"counting",q:"What comes before 99?",o:["98","100","97","96"],a:0},
{t:"place value",q:"In 56, tens digit is?",o:["5","6","11","2"],a:0},
{t:"place value",q:"In 23, ones digit is?",o:["3","2","5","1"],a:0},
{t:"compare",q:"Which is greater: 41 or 14?",o:["41","14","equal","none"],a:0},
{t:"sub",q:"30 - 10 equals?",o:["20","10","40","30"],a:0},
{t:"counting",type:"fillin",q:"Before 41 is ___",blanks:["40"]},
{t:"add",type:"tf",q:"20 + 9 = 29.",a:true},
{t:"tap all",type:"tapall",q:"Tap numbers more than 80.",pool:["85","99","75","90"],correct:["85","99","90"]},
{t:"enter",type:"enterval",q:"What is 60 + 8?",a:68}
],
[
{t:"counting",q:"Number after 75?",o:["76","74","77","73"],a:0},
{t:"counting",q:"Number before 88?",o:["87","89","86","85"],a:0},
{t:"place value",q:"In 91, tens digit is?",o:["9","1","10","7"],a:0},
{t:"place value",q:"In 64, ones digit is?",o:["4","6","10","2"],a:0},
{t:"compare",q:"Which is smaller: 67 or 76?",o:["67","76","equal","none"],a:0},
{t:"sub",q:"50 - 20 equals?",o:["30","70","20","40"],a:0},
{t:"counting",type:"fillin",q:"After 53 is ___",blanks:["54"]},
{t:"add",type:"tf",q:"30 + 7 = 37.",a:true},
{t:"tap all",type:"tapall",q:"Tap numbers less than 30.",pool:["12","25","45","18"],correct:["12","25","18"]},
{t:"enter",type:"enterval",q:"What is 70 + 5?",a:75}
],
[
{t:"counting",q:"After 99 we count up to ___?",o:["100","98","90","89"],a:0},
{t:"counting",q:"Before 11 is?",o:["10","12","9","13"],a:0},
{t:"place value",q:"In 28, tens digit is?",o:["2","8","10","6"],a:0},
{t:"place value",q:"In 37, ones digit is?",o:["7","3","10","4"],a:0},
{t:"compare",q:"Which is greater: 80 or 70?",o:["80","70","equal","none"],a:0},
{t:"add",q:"60 + 9 equals?",o:["69","60","70","51"],a:0},
{t:"counting",type:"fillin",q:"Before 60 is ___",blanks:["59"]},
{t:"sub",type:"tf",q:"40 - 10 = 30.",a:true},
{t:"tap all",type:"tapall",q:"Tap numbers between 90 and 99.",pool:["92","95","85","98"],correct:["92","95","98"]},
{t:"enter",type:"enterval",q:"What is 80 + 9?",a:89}
]
],
pro:[
[
{t:"compare",q:"Which is greatest: 45, 54, 44?",o:["54","45","44","equal"],a:0},
{t:"two-step add",q:"25 + 10 + 4 equals?",o:["39","35","40","29"],a:0},
{t:"missing",type:"fillin",q:"Number between 67 and 69 is ___",blanks:["68"]},
{t:"place value",q:"35 = 30 + ___",o:["5","3","8","15"],a:0},
{t:"compare",type:"tf",q:"83 is greater than 38.",a:true},
{t:"sub",q:"45 - 20 equals?",o:["25","65","20","30"],a:0},
{t:"two-step",q:"What is 50 + 30 - 10?",o:["70","60","80","40"],a:0},
{t:"tap all",type:"tapall",q:"Tap numbers greater than 60.",pool:["72","85","45","99"],correct:["72","85","99"]},
{t:"enter",type:"enterval",q:"40 + 30 equals?",a:70},
{t:"enter",type:"enterval",q:"86 - 5 equals?",a:81}
],
[
{t:"compare",q:"Smallest of 27, 72, 17?",o:["17","27","72","equal"],a:0},
{t:"two-step",q:"30 + 20 + 5 equals?",o:["55","50","60","45"],a:0},
{t:"missing",type:"fillin",q:"Number between 88 and 90 is ___",blanks:["89"]},
{t:"place value",q:"62 = 60 + ___",o:["2","6","8","12"],a:0},
{t:"compare",type:"tf",q:"55 is less than 65.",a:true},
{t:"sub",q:"60 - 30 equals?",o:["30","90","20","40"],a:0},
{t:"two-step",q:"40 + 10 + 5 equals?",o:["55","50","45","60"],a:0},
{t:"tap all",type:"tapall",q:"Tap numbers less than 40.",pool:["25","38","45","19"],correct:["25","38","19"]},
{t:"enter",type:"enterval",q:"50 + 25 equals?",a:75},
{t:"enter",type:"enterval",q:"77 - 6 equals?",a:71}
],
[
{t:"compare",q:"Greatest of 39, 49, 59?",o:["59","49","39","equal"],a:0},
{t:"two-step",q:"20 + 30 + 10 equals?",o:["60","50","70","40"],a:0},
{t:"missing",type:"fillin",q:"Number between 49 and 51 is ___",blanks:["50"]},
{t:"place value",q:"78 = 70 + ___",o:["8","7","15","9"],a:0},
{t:"compare",type:"tf",q:"99 is the greatest 2-digit number.",a:true},
{t:"sub",q:"80 - 50 equals?",o:["30","130","20","40"],a:0},
{t:"two-step",q:"60 - 20 + 5 equals?",o:["45","40","35","85"],a:0},
{t:"tap all",type:"tapall",q:"Tap numbers between 30 and 50.",pool:["35","42","48","20"],correct:["35","42","48"]},
{t:"enter",type:"enterval",q:"30 + 25 equals?",a:55},
{t:"enter",type:"enterval",q:"94 - 4 equals?",a:90}
],
[
{t:"compare",q:"Smallest of 91, 19, 90?",o:["19","91","90","equal"],a:0},
{t:"two-step",q:"15 + 20 + 5 equals?",o:["40","35","45","30"],a:0},
{t:"missing",type:"fillin",q:"Number just before 80 is ___",blanks:["79"]},
{t:"place value",q:"45 = ___ + 5",o:["40","4","45","50"],a:0},
{t:"compare",type:"tf",q:"24 is less than 42.",a:true},
{t:"sub",q:"55 - 25 equals?",o:["30","80","25","20"],a:0},
{t:"two-step",q:"10 + 40 + 20 equals?",o:["70","60","80","50"],a:0},
{t:"tap all",type:"tapall",q:"Tap numbers more than 50.",pool:["62","75","48","91"],correct:["62","75","91"]},
{t:"enter",type:"enterval",q:"60 + 20 equals?",a:80},
{t:"enter",type:"enterval",q:"68 - 8 equals?",a:60}
],
[
{t:"compare",q:"Greatest of 66, 60, 6?",o:["66","60","6","equal"],a:0},
{t:"two-step",q:"25 + 25 equals?",o:["50","45","55","40"],a:0},
{t:"missing",type:"fillin",q:"Number just after 39 is ___",blanks:["40"]},
{t:"place value",q:"83 = 80 + ___",o:["3","8","11","13"],a:0},
{t:"compare",type:"tf",q:"10 is the smallest 2-digit number.",a:true},
{t:"sub",q:"75 - 30 equals?",o:["45","105","40","50"],a:0},
{t:"two-step",q:"50 + 10 + 30 equals?",o:["90","80","100","70"],a:0},
{t:"tap all",type:"tapall",q:"Tap numbers between 70 and 90.",pool:["72","85","65","88"],correct:["72","85","88"]},
{t:"enter",type:"enterval",q:"45 + 20 equals?",a:65},
{t:"enter",type:"enterval",q:"99 - 9 equals?",a:90}
]
]
},
12: { title:'Money',
beginner:[
[
{t:"coins",q:"Which is a ₹1 coin?",o:["one rupee coin","ten paise","ten rupee note","fifty rupees"],a:0},
{t:"coins",type:"tf",q:"₹2 is a coin in India.",a:true},
{t:"notes",q:"₹10 can be a note or a coin?",o:["both note and coin","only paper","only metal","neither"],a:0},
{t:"notes",q:"Which note is bigger value?",o:["₹100","₹50","₹20","₹10"],a:0},
{t:"paise",type:"fillin",q:"50 paise is half of ₹___ .",blanks:["1"]},
{t:"coins",type:"tapall",q:"Tap the Indian coins.",pool:["₹1","₹2","₹5","cookie","apple","₹10"],correct:["₹1","₹2","₹5","₹10"]},
{t:"count",type:"enterval",q:"You have two ₹1 coins. How many rupees?",a:2},
{t:"count",q:"One ₹5 coin equals how many ₹1 coins?",o:["5","2","3","10"],a:0},
{t:"notes",type:"tf",q:"₹20 is a note.",a:true},
{t:"count",type:"enterval",q:"One ₹10 note plus one ₹10 note equals ₹___?",a:20}
],
[
{t:"shop",q:"A pencil costs ₹2. You give ₹2 coin. Change?",o:["₹0","₹1","₹2","₹5"],a:0},
{t:"coins",type:"tf",q:"₹3 is a coin.",a:false},
{t:"count",type:"enterval",q:"Two ₹5 coins = ₹___?",a:10},
{t:"notes",q:"Which is the smallest note?",o:["₹10","₹20","₹50","₹100"],a:0},
{t:"paise",q:"How many paise in ₹1?",o:["100","10","50","1"],a:0},
{t:"shop",type:"fillin",q:"Eraser is ₹5. One ₹5 coin pays for ___ eraser(s).",blanks:["1"]},
{t:"count",type:"tapall",q:"Tap notes (not coins).",pool:["₹10 note","₹20 note","₹50 note","₹1 coin","₹2 coin","₹100 note"],correct:["₹10 note","₹20 note","₹50 note","₹100 note"]},
{t:"count",type:"enterval",q:"₹5 + ₹5 = ₹___?",a:10},
{t:"shop",q:"Toffee is ₹1. Which coin pays exactly?",o:["₹1","₹5","₹10","₹50"],a:0},
{t:"count",type:"tf",q:"Five ₹2 coins make ₹10.",a:true}
],
[
{t:"count",type:"enterval",q:"₹10 + ₹10 = ₹___?",a:20},
{t:"shop",q:"Ball is ₹20. You give ₹20 note. Change?",o:["₹0","₹10","₹20","₹5"],a:0},
{t:"coins",type:"tf",q:"₹50 is only a coin.",a:false},
{t:"notes",q:"Which note has the highest value here?",o:["₹100","₹50","₹20","₹10"],a:0},
{t:"count",type:"fillin",q:"Two ₹10 notes make ₹___.",blanks:["20"]},
{t:"count",type:"enterval",q:"Three ₹2 coins = ₹___?",a:6},
{t:"shop",q:"A book costs ₹50. One note can pay it. Which?",o:["₹50","₹10","₹20","₹2"],a:0},
{t:"coins",type:"tapall",q:"Tap rupee coins.",pool:["₹1","₹2","₹5","₹10","₹100 note","₹50 note"],correct:["₹1","₹2","₹5","₹10"]},
{t:"count",type:"tf",q:"₹5 + ₹2 = ₹7.",a:true},
{t:"shop",type:"enterval",q:"Pen ₹10. Pencil ₹2. Total ₹___?",a:12}
],
[
{t:"count",q:"Two ₹5 coins + one ₹10 note = ₹?",o:["₹20","₹15","₹10","₹25"],a:0},
{t:"shop",q:"You have ₹20. Apple is ₹10. Change?",o:["₹10","₹20","₹0","₹5"],a:0},
{t:"count",type:"enterval",q:"₹20 + ₹10 = ₹___?",a:30},
{t:"coins",type:"tf",q:"₹2 coin is bigger value than ₹1 coin.",a:true},
{t:"notes",type:"fillin",q:"₹50 + ₹50 = ₹___.",blanks:["100"]},
{t:"count",type:"tapall",q:"Tap coins less than ₹10.",pool:["₹1","₹2","₹5","₹10","₹20","₹50"],correct:["₹1","₹2","₹5"]},
{t:"shop",q:"Chips ₹10. Juice ₹20. Total?",o:["₹30","₹20","₹10","₹40"],a:0},
{t:"count",type:"enterval",q:"Five ₹10 notes = ₹___?",a:50},
{t:"shop",type:"tf",q:"With ₹50 you can buy a toy of ₹40.",a:true},
{t:"paise",q:"50 paise + 50 paise = ?",o:["₹1","₹2","50 paise","₹5"],a:0}
],
[
{t:"shop",q:"Sweet ₹5. You pay ₹10. Change?",o:["₹5","₹10","₹0","₹2"],a:0},
{t:"count",type:"enterval",q:"₹2 + ₹2 + ₹2 = ₹___?",a:6},
{t:"notes",q:"Which is correct ordering, smallest first?",o:["₹10, ₹20, ₹50, ₹100","₹100, ₹50, ₹20, ₹10","₹20, ₹10, ₹50, ₹100","₹50, ₹100, ₹10, ₹20"],a:0},
{t:"count",type:"tf",q:"Ten ₹1 coins = ₹10.",a:true},
{t:"shop",type:"fillin",q:"Banana ₹2. Three bananas cost ₹___ .",blanks:["6"]},
{t:"count",type:"enterval",q:"₹50 - ₹20 = ₹___?",a:30},
{t:"coins",type:"tapall",q:"Tap items used as Indian money.",pool:["₹1 coin","₹10 note","candy","sticker","₹50 note","₹5 coin"],correct:["₹1 coin","₹10 note","₹50 note","₹5 coin"]},
{t:"shop",q:"You have one ₹100 note. Bag is ₹50. Change?",o:["₹50","₹100","₹40","₹10"],a:0},
{t:"count",type:"tf",q:"₹5 + ₹5 + ₹5 = ₹15.",a:true},
{t:"shop",type:"enterval",q:"Pen ₹5, eraser ₹5, sharpener ₹10. Total ₹___?",a:20}
]
],
pro:[
[
{t:"shop",q:"Book ₹30, pen ₹10. Total?",o:["₹40","₹30","₹20","₹50"],a:0},
{t:"shop",type:"enterval",q:"Toy ₹25. You give ₹50. Change ₹___?",a:25},
{t:"count",type:"tf",q:"Two ₹20 notes + one ₹10 note = ₹50.",a:true},
{t:"count",q:"Which makes ₹15?",o:["₹10 + ₹5","₹10 + ₹2","₹5 + ₹5","₹20 - ₹10"],a:0},
{t:"shop",type:"fillin",q:"Apple ₹4. Five apples cost ₹___ .",blanks:["20"]},
{t:"count",type:"enterval",q:"₹100 - ₹40 = ₹___?",a:60},
{t:"count",type:"tapall",q:"Tap combinations equal to ₹10.",pool:["₹5+₹5","₹2+₹2+₹2+₹2+₹2","₹10","₹5+₹2","₹1+₹2","₹5+₹3"],correct:["₹5+₹5","₹2+₹2+₹2+₹2+₹2","₹10"]},
{t:"shop",q:"Pencil ₹3. Two pencils?",o:["₹6","₹3","₹5","₹9"],a:0},
{t:"count",type:"tf",q:"Four ₹5 coins make ₹20.",a:true},
{t:"shop",type:"enterval",q:"Buy juice ₹15 and chips ₹10. Total ₹___?",a:25}
],
[
{t:"shop",q:"You have ₹20. Spend ₹12. Left?",o:["₹8","₹10","₹12","₹20"],a:0},
{t:"count",type:"enterval",q:"₹25 + ₹25 = ₹___?",a:50},
{t:"shop",type:"tf",q:"With ₹50 you can buy a kite of ₹35 and ₹10 candy.",a:true},
{t:"count",q:"Which equals ₹50?",o:["₹20 + ₹20 + ₹10","₹20 + ₹10 + ₹5","₹10 + ₹10 + ₹10","₹50 + ₹10"],a:0},
{t:"count",type:"fillin",q:"₹100 = two notes of ₹___.",blanks:["50"]},
{t:"shop",type:"enterval",q:"Bat ₹40, ball ₹10. Pay with ₹50, change ₹___?",a:0},
{t:"count",type:"tapall",q:"Tap amounts greater than ₹20.",pool:["₹25","₹50","₹30","₹10","₹15","₹100"],correct:["₹25","₹50","₹30","₹100"]},
{t:"count",q:"₹35 + ₹5 = ?",o:["₹40","₹30","₹35","₹45"],a:0},
{t:"count",type:"tf",q:"Three ₹10 notes equal one ₹30 note.",a:false},
{t:"shop",type:"enterval",q:"Pen ₹8. You give ₹10. Change ₹___?",a:2}
],
[
{t:"shop",q:"Doll ₹45. Two ₹20 notes + one ₹5 coin = ?",o:["₹45","₹40","₹50","₹35"],a:0},
{t:"count",type:"enterval",q:"₹50 + ₹20 + ₹10 = ₹___?",a:80},
{t:"count",type:"tf",q:"₹100 = ₹50 + ₹20 + ₹20 + ₹10.",a:true},
{t:"shop",q:"Crayons ₹18. Color book ₹22. Total?",o:["₹40","₹30","₹50","₹38"],a:0},
{t:"count",type:"fillin",q:"₹100 - ₹25 = ₹___ .",blanks:["75"]},
{t:"count",type:"tapall",q:"Tap ways to make ₹20.",pool:["₹10+₹10","₹20","₹5+₹5+₹5+₹5","₹15+₹5","₹10+₹5","₹2+₹2"],correct:["₹10+₹10","₹20","₹5+₹5+₹5+₹5","₹15+₹5"]},
{t:"shop",type:"enterval",q:"Pizza slice ₹15, juice ₹15. Total ₹___?",a:30},
{t:"count",q:"Which is largest?",o:["₹100","₹50","₹20","₹10"],a:0},
{t:"shop",type:"tf",q:"With ₹30 you can buy a book of ₹40.",a:false},
{t:"shop",type:"enterval",q:"Item ₹17. Pay ₹20. Change ₹___?",a:3}
],
[
{t:"count",q:"₹5 coin + ₹2 coin + ₹1 coin = ?",o:["₹8","₹7","₹10","₹6"],a:0},
{t:"shop",type:"enterval",q:"You have ₹50. Spend ₹35. Left ₹___?",a:15},
{t:"count",type:"tf",q:"Five ₹10 notes = one ₹50 note in value.",a:true},
{t:"shop",q:"Bun ₹6, milk ₹14. Total?",o:["₹20","₹10","₹15","₹25"],a:0},
{t:"count",type:"fillin",q:"₹40 + ₹40 = ₹___ .",blanks:["80"]},
{t:"count",type:"enterval",q:"Half of ₹100 = ₹___?",a:50},
{t:"count",type:"tapall",q:"Tap that equal ₹50.",pool:["₹50 note","₹20+₹20+₹10","₹25+₹25","₹10×5","₹40","₹30+₹10"],correct:["₹50 note","₹20+₹20+₹10","₹25+₹25","₹10×5"]},
{t:"shop",q:"Cap ₹28, scarf ₹12. Total?",o:["₹40","₹30","₹50","₹38"],a:0},
{t:"shop",type:"tf",q:"You can pay ₹45 using one ₹20 + one ₹20 + one ₹5.",a:true},
{t:"shop",type:"enterval",q:"Glue ₹13. Pay ₹15. Change ₹___?",a:2}
],
[
{t:"shop",q:"Mango ₹8. Five mangoes?",o:["₹40","₹35","₹45","₹30"],a:0},
{t:"count",type:"enterval",q:"₹100 - ₹55 = ₹___?",a:45},
{t:"count",type:"tf",q:"₹2 + ₹2 + ₹2 + ₹2 + ₹2 = ₹10.",a:true},
{t:"shop",q:"You have ₹100. Buy book ₹40, pen ₹10. Left?",o:["₹50","₹40","₹60","₹30"],a:0},
{t:"count",type:"fillin",q:"₹50 + ₹25 = ₹___ .",blanks:["75"]},
{t:"count",type:"tapall",q:"Tap amounts you can pay with one ₹50 note (no change).",pool:["₹50","₹100","₹50","₹40","₹50","₹25"],correct:["₹50","₹50","₹50"]},
{t:"shop",type:"enterval",q:"Toy car ₹22, blocks ₹18. Total ₹___?",a:40},
{t:"shop",q:"Item ₹19. Pay ₹20. Change?",o:["₹1","₹2","₹0","₹19"],a:0},
{t:"count",type:"tf",q:"₹100 is more than ₹99.",a:true},
{t:"shop",type:"enterval",q:"Three pens at ₹10 each = ₹___?",a:30}
]
]
},
13: { title:'How Many?',
beginner:[
[
{t:"count",q:"How many fingers on one hand?",o:["5","4","6","10"],a:0},
{t:"count",type:"enterval",q:"Count: 1, 2, 3, 4, ___ ?",a:5},
{t:"count",type:"tf",q:"There are 7 days in a week.",a:true},
{t:"count",q:"How many wheels on a bicycle?",o:["2","3","4","1"],a:0},
{t:"count",type:"fillin",q:"Two hands have ___ fingers in total.",blanks:["10"]},
{t:"count",type:"tapall",q:"Tap numbers between 1 and 5.",pool:["2","3","4","6","7","8"],correct:["2","3","4"]},
{t:"add",type:"enterval",q:"3 + 2 = ___?",a:5},
{t:"count",q:"How many legs has a dog?",o:["4","2","6","8"],a:0},
{t:"count",type:"tf",q:"A pair means two.",a:true},
{t:"add",type:"enterval",q:"4 + 1 = ___?",a:5}
],
[
{t:"count",q:"Count the dots: . . . . . .",o:["6","5","7","4"],a:0},
{t:"add",type:"enterval",q:"5 + 3 = ___?",a:8},
{t:"count",type:"tf",q:"10 comes after 9.",a:true},
{t:"count",q:"How many eyes do you have?",o:["2","1","3","4"],a:0},
{t:"count",type:"fillin",q:"After 7 comes ___.",blanks:["8"]},
{t:"count",type:"tapall",q:"Tap numbers greater than 5.",pool:["6","7","8","2","3","4"],correct:["6","7","8"]},
{t:"add",type:"enterval",q:"6 + 4 = ___?",a:10},
{t:"count",q:"How many sides has a triangle?",o:["3","4","5","2"],a:0},
{t:"count",type:"tf",q:"12 is less than 10.",a:false},
{t:"add",type:"enterval",q:"7 + 2 = ___?",a:9}
],
[
{t:"count",q:"How many in one dozen?",o:["12","10","6","20"],a:0},
{t:"add",type:"enterval",q:"10 + 5 = ___?",a:15},
{t:"count",type:"tf",q:"15 is between 10 and 20.",a:true},
{t:"count",q:"How many days in two weeks?",o:["14","7","10","20"],a:0},
{t:"count",type:"fillin",q:"___ comes just before 11.",blanks:["10"]},
{t:"count",type:"tapall",q:"Tap even numbers.",pool:["2","4","6","3","5","7"],correct:["2","4","6"]},
{t:"add",type:"enterval",q:"8 + 7 = ___?",a:15},
{t:"count",q:"How many hours in a day?",o:["24","12","10","60"],a:0},
{t:"sub",type:"tf",q:"10 - 4 = 6.",a:true},
{t:"add",type:"enterval",q:"9 + 9 = ___?",a:18}
],
[
{t:"count",q:"Count by 2s: 2, 4, 6, ___ ?",o:["8","7","9","10"],a:0},
{t:"add",type:"enterval",q:"12 + 5 = ___?",a:17},
{t:"count",type:"tf",q:"Twenty is written as 20.",a:true},
{t:"count",q:"Which is a bigger group: 13 or 19?",o:["19","13","equal","none"],a:0},
{t:"count",type:"fillin",q:"5 + ___ = 10.",blanks:["5"]},
{t:"count",type:"tapall",q:"Tap numbers more than 15.",pool:["16","17","20","12","13","14"],correct:["16","17","20"]},
{t:"add",type:"enterval",q:"15 + 4 = ___?",a:19},
{t:"sub",q:"15 - 5 = ?",o:["10","5","15","20"],a:0},
{t:"count",type:"tf",q:"30 is more than 25.",a:true},
{t:"add",type:"enterval",q:"10 + 10 = ___?",a:20}
],
[
{t:"count",q:"Count by 5s: 5, 10, 15, ___ ?",o:["20","16","25","18"],a:0},
{t:"add",type:"enterval",q:"20 + 5 = ___?",a:25},
{t:"count",type:"tf",q:"50 has a 5 in tens place.",a:true},
{t:"count",q:"Tens in 40?",o:["4","2","5","40"],a:0},
{t:"count",type:"fillin",q:"___ + 6 = 10.",blanks:["4"]},
{t:"count",type:"tapall",q:"Tap multiples of 10.",pool:["10","20","30","15","25","35"],correct:["10","20","30"]},
{t:"add",type:"enterval",q:"25 + 5 = ___?",a:30},
{t:"sub",q:"20 - 8 = ?",o:["12","10","8","18"],a:0},
{t:"count",type:"tf",q:"100 comes after 99.",a:true},
{t:"add",type:"enterval",q:"50 + 10 = ___?",a:60}
]
],
pro:[
[
{t:"word",q:"Riya has 4 pens, Sam has 3. Total?",o:["7","6","8","5"],a:0},
{t:"miss",type:"enterval",q:"6 + ___ = 10. Find the missing.",a:4},
{t:"compare",type:"tf",q:"18 is greater than 13.",a:true},
{t:"word",q:"5 birds + 4 birds = how many?",o:["9","8","10","7"],a:0},
{t:"miss",type:"fillin",q:"___ + 7 = 12.",blanks:["5"]},
{t:"compare",type:"tapall",q:"Tap groups bigger than 10.",pool:["12","15","20","8","5","9"],correct:["12","15","20"]},
{t:"add",type:"enterval",q:"7 + 8 = ___?",a:15},
{t:"sub",q:"14 - 6 = ?",o:["8","6","10","12"],a:0},
{t:"word",type:"tf",q:"You have 6 toys, get 4 more. Now you have 10.",a:true},
{t:"add",type:"enterval",q:"9 + 6 = ___?",a:15}
],
[
{t:"word",q:"There are 10 apples, 3 are eaten. Left?",o:["7","6","8","13"],a:0},
{t:"miss",type:"enterval",q:"8 + ___ = 15.",a:7},
{t:"compare",type:"tf",q:"25 is less than 32.",a:true},
{t:"word",q:"7 cats + 5 dogs = how many animals?",o:["12","11","13","10"],a:0},
{t:"miss",type:"fillin",q:"10 + ___ = 17.",blanks:["7"]},
{t:"count",type:"tapall",q:"Tap numbers between 20 and 30.",pool:["22","25","28","18","31","19"],correct:["22","25","28"]},
{t:"add",type:"enterval",q:"15 + 6 = ___?",a:21},
{t:"sub",q:"20 - 7 = ?",o:["13","12","10","17"],a:0},
{t:"word",type:"tf",q:"5 + 5 + 5 = 15.",a:true},
{t:"sub",type:"enterval",q:"18 - 9 = ___?",a:9}
],
[
{t:"word",q:"A box has 12 candies, 4 more added. Total?",o:["16","14","18","8"],a:0},
{t:"miss",type:"enterval",q:"___ + 9 = 14.",a:5},
{t:"compare",type:"tf",q:"50 is between 40 and 60.",a:true},
{t:"word",q:"Mom buys 8 mangoes, then 7 more. How many?",o:["15","14","16","13"],a:0},
{t:"miss",type:"fillin",q:"20 - ___ = 12.",blanks:["8"]},
{t:"compare",type:"tapall",q:"Tap numbers smaller than 50.",pool:["40","45","30","60","75","80"],correct:["40","45","30"]},
{t:"add",type:"enterval",q:"22 + 8 = ___?",a:30},
{t:"sub",q:"30 - 10 = ?",o:["20","10","30","40"],a:0},
{t:"word",type:"tf",q:"3 groups of 4 marbles = 12 marbles.",a:true},
{t:"sub",type:"enterval",q:"25 - 5 = ___?",a:20}
],
[
{t:"word",q:"15 stars, 6 more drawn. Total?",o:["21","20","19","22"],a:0},
{t:"miss",type:"enterval",q:"15 + ___ = 25.",a:10},
{t:"compare",type:"tf",q:"60 is more than 70.",a:false},
{t:"word",q:"30 birds, 12 fly away. Left?",o:["18","20","22","16"],a:0},
{t:"miss",type:"fillin",q:"40 + ___ = 50.",blanks:["10"]},
{t:"compare",type:"tapall",q:"Tap numbers greater than 50.",pool:["55","60","75","45","30","20"],correct:["55","60","75"]},
{t:"add",type:"enterval",q:"35 + 15 = ___?",a:50},
{t:"sub",q:"50 - 25 = ?",o:["25","30","20","15"],a:0},
{t:"word",type:"tf",q:"Two groups of 10 = 20.",a:true},
{t:"sub",type:"enterval",q:"60 - 20 = ___?",a:40}
],
[
{t:"word",q:"4 baskets with 5 eggs each. Total eggs?",o:["20","9","16","25"],a:0},
{t:"miss",type:"enterval",q:"50 - ___ = 35.",a:15},
{t:"compare",type:"tf",q:"99 is one less than 100.",a:true},
{t:"word",q:"You collect 25 stamps, friend gives 25 more. Total?",o:["50","45","55","40"],a:0},
{t:"miss",type:"fillin",q:"___ + 20 = 60.",blanks:["40"]},
{t:"compare",type:"tapall",q:"Tap numbers less than 30.",pool:["10","20","25","45","60","80"],correct:["10","20","25"]},
{t:"add",type:"enterval",q:"45 + 15 = ___?",a:60},
{t:"sub",q:"100 - 30 = ?",o:["70","60","80","90"],a:0},
{t:"word",type:"tf",q:"5 groups of 10 = 50.",a:true},
{t:"add",type:"enterval",q:"75 + 25 = ___?",a:100}
]
]
}
},

// ═══════════════════════════════════════════════════════════════
// GRADE 3 · Chapter 1 · Where to Look From
// ═══════════════════════════════════════════════════════════════
3: { 1: { title:'Where to Look From',
beginner:[
[
{t:"Top View",q:"A round plate viewed from the TOP looks like a?",o:["Circle","Square","Triangle","Oval"],a:0},
{t:"Top View",type:"tf",q:"A square box from the TOP looks like a circle.",a:false},
{t:"Top View",q:"A book lying flat, from the TOP?",o:["Rectangle","Square","Circle","Triangle"],a:0},
{t:"Top View",type:"fillin",q:"A pencil standing upright, from TOP, looks like a small ___.",blanks:["circle"]},
{t:"Top View",q:"A cone on its flat base, from TOP?",o:["Circle","Triangle","Square","Oval"],a:0},
{t:"Top View",type:"tapall",q:"Tap all that look CIRCLE-shaped from the top.",pool:["Plate","Book","Cup","Dice","Ball","Fridge"],correct:["Plate","Cup","Ball"]},
{t:"Top View",type:"tf",q:"A dice from the top looks like a square.",a:true},
{t:"Top View",type:"enterval",q:"How many legs of a 4-legged chair are visible from directly above?",a:4},
{t:"Top View",q:"A matchbox lying flat, from TOP?",o:["Rectangle","Square","Circle","Triangle"],a:0},
{t:"Top View",type:"tf",q:"A flat coin from TOP looks like a rectangle.",a:false}
],
[
{t:"Side View",q:"A glass viewed from the SIDE?",o:["Rectangle","Circle","Square","Triangle"],a:0},
{t:"Side View",type:"tf",q:"A ball from the side looks like a circle.",a:true},
{t:"Side View",q:"A book lying flat, from SIDE?",o:["Thin rectangle","Square","Circle","Triangle"],a:0},
{t:"Side View",type:"fillin",q:"A cone from the side looks like a ___.",blanks:["triangle"]},
{t:"Side View",q:"A cylinder (can) from SIDE?",o:["Rectangle","Circle","Triangle","Oval"],a:0},
{t:"Side View",type:"tapall",q:"Tap all objects that look RECTANGULAR from the side.",pool:["Ball","Glass","Can","Book","Pyramid","Phone"],correct:["Glass","Can","Book","Phone"]},
{t:"Side View",type:"tf",q:"A bucket wider at top, from the side, is a trapezium.",a:true},
{t:"Side View",q:"A pyramid from the SIDE?",o:["Triangle","Square","Circle","Rectangle"],a:0},
{t:"Side View",type:"enterval",q:"A cube viewed from any side has how many visible edges on the outline?",a:4},
{t:"Side View",type:"tf",q:"A wheel from the side looks like a square.",a:false}
],
[
{t:"Front View",q:"A door from the FRONT looks like a?",o:["Tall rectangle","Circle","Square","Triangle"],a:0},
{t:"Front View",type:"tf",q:"A TV screen from the front looks like a circle.",a:false},
{t:"Front View",q:"A phone from the FRONT?",o:["Tall rectangle","Circle","Square","Triangle"],a:0},
{t:"Front View",type:"fillin",q:"A clock from the front looks like a ___.",blanks:["circle"]},
{t:"Front View",q:"A window from the FRONT?",o:["Rectangle","Circle","Triangle","Pentagon"],a:0},
{t:"Front View",type:"tapall",q:"Tap all things that are ROUND from the front.",pool:["Door","Clock","Coin","TV","Wheel","Window"],correct:["Clock","Coin","Wheel"]},
{t:"Front View",type:"tf",q:"A picture frame from the front is a rectangle.",a:true},
{t:"Front View",q:"A fridge from the FRONT?",o:["Tall rectangle","Circle","Square","Triangle"],a:0},
{t:"Front View",type:"enterval",q:"A football goal has how many sides on its front frame?",a:4},
{t:"Front View",type:"tf",q:"A book standing on a shelf, from front, is a rectangle.",a:true}
],
[
{t:"Mirror",q:"In a mirror, your LEFT hand appears as?",o:["Right hand","Left hand","Both","Neither"],a:0},
{t:"Mirror",type:"tf",q:"Mirror image of letter 'b' is 'd'.",a:true},
{t:"Mirror",q:"Mirror image of the letter 'p' is?",o:["q","b","d","p"],a:0},
{t:"Mirror",type:"fillin",q:"Mirror image of 'b' is ___.",blanks:["d"]},
{t:"Mirror",q:"If you raise your RIGHT hand, the mirror shows?",o:["Left hand","Right hand","Both","Neither"],a:0},
{t:"Mirror",type:"tapall",q:"Tap all letters that look the SAME in a vertical mirror.",pool:["A","B","H","M","F","P"],correct:["A","H","M"]},
{t:"Mirror",type:"tf",q:"Word 'MOM' in a vertical mirror still reads 'MOM'.",a:true},
{t:"Mirror",q:"Which digit looks the SAME in a mirror?",o:["0","2","3","5"],a:0},
{t:"Mirror",type:"enterval",q:"Out of letters A, B, H — how many look the same in a mirror?",a:2},
{t:"Mirror",type:"tf",q:"A reflection in still water is a kind of mirror image.",a:true}
],
[
{t:"Views",q:"A ball viewed from any direction is a?",o:["Circle","Sphere","Oval","Square"],a:0},
{t:"Views",type:"tf",q:"A dice looks like a square from every face.",a:true},
{t:"Views",type:"fillin",q:"Cylinder: top = circle, side = ___.",blanks:["rectangle"]},
{t:"Views",q:"Cone: top = circle, side = ?",o:["Triangle","Circle","Square","Rectangle"],a:0},
{t:"Views",type:"enterval",q:"A sphere has how many different views?",a:1},
{t:"Views",q:"Looking at a dice, at most how many faces at once?",o:["3","1","2","6"],a:0},
{t:"Views",type:"tapall",q:"Tap all objects that look the SAME from every direction.",pool:["Ball","Book","Dice","Orange","Cone","Globe"],correct:["Ball","Orange","Globe"]},
{t:"Views",type:"tf",q:"A cricket bat from the front looks like a long rectangle.",a:true},
{t:"Views",q:"From the sky, a football field looks like a?",o:["Rectangle","Circle","Square","Triangle"],a:0},
{t:"Views",q:"From above, roadways look like?",o:["Lines","Circles","Squares","Triangles"],a:0}
]
],
pro:[
[
{t:"3D Views",q:"Triangular prism — front view (end)?",o:["Triangle","Rectangle","Circle","Square"],a:0},
{t:"3D Views",type:"tf",q:"A cube looks like a square from any face.",a:true},
{t:"3D Views",q:"Pyramid — top view?",o:["Square with diagonals","Triangle","Circle","Pentagon"],a:0},
{t:"3D Views",type:"fillin",q:"A pyramid from the side looks like a ___.",blanks:["triangle"]},
{t:"3D Views",q:"Hexagonal prism — top view?",o:["Hexagon","Rectangle","Circle","Octagon"],a:0},
{t:"3D Views",type:"tapall",q:"Tap all 3D shapes whose TOP view is a circle.",pool:["Cube","Cylinder","Cone","Cuboid","Sphere","Pyramid"],correct:["Cylinder","Cone","Sphere"]},
{t:"3D Views",type:"tf",q:"A cone lying on its side shows a triangle silhouette.",a:true},
{t:"3D Views",type:"enterval",q:"2 identical cubes stacked vertically — height:width ratio?",a:2},
{t:"3D Views",q:"3 cubes stacked — front view?",o:["Tall rectangle (3:1)","Square","Circle","Triangle"],a:0},
{t:"3D Views",type:"tf",q:"An inverted cone (tip down) from the top still looks like a circle.",a:true}
],
[
{t:"Symmetry",q:"A square has how many lines of symmetry?",o:["4","1","2","3"],a:0},
{t:"Symmetry",type:"enterval",q:"A rectangle has how many lines of symmetry?",a:2},
{t:"Symmetry",type:"tf",q:"An equilateral triangle has 3 lines of symmetry.",a:true},
{t:"Symmetry",q:"Circle has how many lines of symmetry?",o:["Infinite","1","2","4"],a:0},
{t:"Symmetry",type:"fillin",q:"A regular pentagon has ___ lines of symmetry.",blanks:["5"]},
{t:"Symmetry",type:"tapall",q:"Tap all letters with at least one line of symmetry.",pool:["A","B","F","H","K","O"],correct:["A","B","H","O"]},
{t:"Symmetry",type:"tf",q:"A scalene triangle has zero lines of symmetry.",a:true},
{t:"Symmetry",type:"enterval",q:"Regular hexagon — lines of symmetry?",a:6},
{t:"Symmetry",q:"Which letter has 2 lines of symmetry?",o:["H","A","F","L"],a:0},
{t:"Symmetry",type:"tf",q:"A rhombus (non-square) has 2 lines of symmetry.",a:true}
],
[
{t:"Reflection",q:"Mirror image of your LEFT hand?",o:["Right hand","Left hand","Both","Neither"],a:0},
{t:"Reflection",type:"tf",q:"Mirror image of 'b' is 'd'.",a:true},
{t:"Reflection",type:"fillin",q:"Mirror image of 'p' is ___.",blanks:["q"]},
{t:"Reflection",q:"Letter with vertical symmetry: A or B?",o:["A","B","Both","Neither"],a:0},
{t:"Reflection",type:"tapall",q:"Tap all digits that look the SAME in a vertical mirror.",pool:["0","1","2","5","8","9"],correct:["0","1","8"]},
{t:"Reflection",type:"enterval",q:"Letter 'H' has how many lines of symmetry?",a:2},
{t:"Reflection",type:"tf",q:"A lake reflection acts like a horizontal-axis mirror.",a:true},
{t:"Reflection",q:"In a mirror, clock hands appear?",o:["Swapped","Same","Faster","Slower"],a:0},
{t:"Reflection",type:"fillin",q:"Word 'WOW' held to a vertical mirror reads ___.",blanks:["WOW"]},
{t:"Reflection",type:"tf",q:"Mirror image of 'S' still looks like a normal 'S'.",a:false}
],
[
{t:"Match View",q:"Top=circle, side=rectangle — solid?",o:["Cylinder","Cone","Cube","Sphere"],a:0},
{t:"Match View",type:"tf",q:"Top=circle and side=triangle — the solid is a cone.",a:true},
{t:"Match View",q:"Top=square, side=square — solid?",o:["Cube","Cuboid","Pyramid","Cylinder"],a:0},
{t:"Match View",type:"fillin",q:"All views of a ___ look like circles.",blanks:["sphere"]},
{t:"Match View",q:"Top=hexagon, side=rectangle — solid?",o:["Hexagonal prism","Pentagonal prism","Cube","Sphere"],a:0},
{t:"Match View",type:"tapall",q:"Tap all solids whose TOP view is a SQUARE.",pool:["Cube","Cylinder","Cuboid","Sphere","Square pyramid","Cone"],correct:["Cube","Square pyramid"]},
{t:"Match View",type:"tf",q:"A cuboid can show different rectangles on top and side.",a:true},
{t:"Match View",type:"enterval",q:"How many unique rectangle sizes a cuboid shows across views?",a:3},
{t:"Match View",q:"Top=square with diagonals — solid?",o:["Pyramid","Cube","Cuboid","Prism"],a:0},
{t:"Match View",type:"tf",q:"Cylinder standing upright shows a circle from the top.",a:true}
],
[
{t:"Directions",q:"Sun rises in which direction?",o:["East","West","North","South"],a:0},
{t:"Directions",type:"tf",q:"The sun sets in the North.",a:false},
{t:"Directions",type:"fillin",q:"North is usually shown at the ___ of a map.",blanks:["top"]},
{t:"Directions",q:"Between North and East is?",o:["North-East","North-West","South-East","South-West"],a:0},
{t:"Directions",type:"tapall",q:"Tap all four cardinal directions.",pool:["North","South","East","West","Left","Right"],correct:["North","South","East","West"]},
{t:"Directions",type:"enterval",q:"A full rotation is how many degrees?",a:360},
{t:"Directions",type:"tf",q:"Face North, turn right 90° — you now face East.",a:true},
{t:"Directions",q:"Opposite of Down is?",o:["Up","Left","Right","Below"],a:0},
{t:"Directions",type:"enterval",q:"Clockwise from 12 to 3 — how many degrees?",a:90},
{t:"Directions",type:"tf",q:"Half a full rotation is 90°.",a:false}
]
]
},
// ─── Grade 3 · Chapter 2 · Fun with Numbers ───
2: { title:'Fun with Numbers',
beginner:[
[
{t:"Place Value",q:"In 234, digit in HUNDREDS place?",o:["2","3","4","23"],a:0},
{t:"Place Value",type:"tf",q:"In 456 the TENS place digit is 5.",a:true},
{t:"Place Value",q:"In 789, digit in ONES place?",o:["9","7","8","89"],a:0},
{t:"Place Value",type:"enterval",q:"Place value of 3 in 357?",a:300},
{t:"Place Value",q:"Place value of 5 in 158?",o:["50","5","500","58"],a:0},
{t:"Place Value",type:"fillin",q:"Place value of 8 in 278 is ___.",blanks:["8"]},
{t:"Place Value",type:"tapall",q:"Tap all numbers with 5 in the HUNDREDS place.",pool:["500","150","52","576","35","509"],correct:["500","576","509"]},
{t:"Place Value",type:"enterval",q:"ONES digit of 100?",a:0},
{t:"Place Value",q:"Place value of 0 in 305?",o:["0","3","5","30"],a:0},
{t:"Place Value",type:"tf",q:"In 500, the tens digit is 0.",a:true}
],
[
{t:"Names",q:"'Two hundred thirty-four' in digits?",o:["234","243","324","423"],a:0},
{t:"Names",type:"tf",q:"'Five hundred twelve' in digits is 512.",a:true},
{t:"Names",type:"fillin",q:"'Seven hundred nine' in digits is ___.",blanks:["709"]},
{t:"Names",q:"'One hundred one' in digits?",o:["101","110","100","111"],a:0},
{t:"Names",q:"'Seven hundred ninety-nine' in digits?",o:["799","997","779","977"],a:0},
{t:"Names",type:"enterval",q:"'Six hundred' in digits?",a:600},
{t:"Names",type:"tapall",q:"Tap all numbers 500 or greater.",pool:["450","500","320","750","199","999"],correct:["500","750","999"]},
{t:"Names",q:"Number name of 407?",o:["Four hundred seven","Four hundred seventy","Four thousand seven","Forty-seven"],a:0},
{t:"Names",type:"fillin",q:"'Four hundred five' in digits is ___.",blanks:["405"]},
{t:"Names",type:"tf",q:"'Nine hundred ninety-nine' equals 999.",a:true}
],
[
{t:"Successor",type:"enterval",q:"Successor of 199?",a:200},
{t:"Successor",type:"enterval",q:"Predecessor of 500?",a:499},
{t:"Successor",type:"tf",q:"The successor of 899 is 900.",a:true},
{t:"Successor",q:"What comes before 100?",o:["99","101","100","90"],a:0},
{t:"Successor",type:"fillin",q:"1 more than 349 is ___.",blanks:["350"]},
{t:"Successor",type:"enterval",q:"1 less than 700?",a:699},
{t:"Successor",type:"tapall",q:"Tap all numbers that come AFTER 500.",pool:["499","501","450","550","500","800"],correct:["501","550","800"]},
{t:"Successor",q:"10 more than 250?",o:["260","240","250","259"],a:0},
{t:"Successor",type:"enterval",q:"100 more than 200?",a:300},
{t:"Successor",type:"tf",q:"100 less than 400 is 300.",a:true}
],
[
{t:"Compare",q:"Greater: 234 or 243?",o:["243","234","Equal","Cannot tell"],a:0},
{t:"Compare",type:"tf",q:"500 is greater than 450.",a:true},
{t:"Compare",q:"Largest: 345, 543, 453?",o:["543","453","345","All equal"],a:0},
{t:"Compare",type:"enterval",q:"Largest of 200, 102, 120?",a:200},
{t:"Compare",type:"tf",q:"600 > 599 is true.",a:true},
{t:"Compare",q:"Ascending: 100, 500, 250?",o:["100, 250, 500","500, 250, 100","250, 100, 500","All equal"],a:0},
{t:"Compare",type:"fillin",q:"The biggest 3-digit number is ___.",blanks:["999"]},
{t:"Compare",type:"tapall",q:"Tap all numbers greater than 500.",pool:["450","550","600","499","300","750"],correct:["550","600","750"]},
{t:"Compare",type:"enterval",q:"Difference between 500 and 300?",a:200},
{t:"Compare",type:"tf",q:"789 is less than 987.",a:true}
],
[
{t:"Expand",type:"enterval",q:"300 + 40 + 5 = ?",a:345},
{t:"Expand",q:"Expand 567?",o:["500 + 60 + 7","50 + 6 + 7","500 + 6 + 7","5 + 6 + 7"],a:0},
{t:"Expand",type:"enterval",q:"600 + 0 + 2 = ?",a:602},
{t:"Expand",type:"tf",q:"The expanded form of 408 is 400 + 0 + 8.",a:true},
{t:"Expand",type:"fillin",q:"700 + 30 + 1 = ___.",blanks:["731"]},
{t:"Expand",q:"Expand 999?",o:["900 + 90 + 9","99 + 9","909 + 90","9 + 9 + 9"],a:0},
{t:"Expand",type:"tapall",q:"Tap all that equal 250.",pool:["200+50+0","250","2+5+0","100+150","25+0","255"],correct:["200+50+0","250","100+150"]},
{t:"Expand",type:"enterval",q:"500 + 50 + 5 = ?",a:555},
{t:"Expand",q:"Expand 804?",o:["800 + 0 + 4","80 + 0 + 4","800 + 4 + 0","8 + 0 + 4"],a:0},
{t:"Expand",type:"tf",q:"100 + 0 + 0 = 100.",a:true}
]
],
pro:[
[
{t:"4-digit",type:"enterval",q:"How many zeros in 1,000?",a:3},
{t:"4-digit",type:"enterval",q:"1,000 = how many hundreds?",a:10},
{t:"4-digit",q:"Largest 4-digit number?",o:["9,999","1,000","9,000","9,998"],a:0},
{t:"4-digit",type:"fillin",q:"Smallest 4-digit number is ___.",blanks:["1000"]},
{t:"4-digit",type:"tf",q:"In 3,456 the digit in thousands place is 3.",a:true},
{t:"4-digit",type:"enterval",q:"5,000 + 400 + 30 + 2 = ?",a:5432},
{t:"4-digit",q:"Name of 1,234?",o:["One thousand two hundred thirty-four","Twelve hundred thirty-four","One thousand twenty-three four","One hundred twenty-three four"],a:0},
{t:"4-digit",type:"tapall",q:"Tap all 4-digit numbers.",pool:["999","1000","2500","9999","10000","500"],correct:["1000","2500","9999"]},
{t:"4-digit",type:"enterval",q:"9,999 + 1 = ?",a:10000},
{t:"4-digit",type:"tf",q:"The smallest 4-digit number using 5, 2, 7, 9 (each once) is 2,579.",a:true}
],
[
{t:"Indian",type:"enterval",q:"10 thousands = ?",a:10000},
{t:"Indian",type:"enterval",q:"1 lakh = how many thousands?",a:100},
{t:"Indian",q:"Indian-system comma placement in 12345?",o:["12,345","1,23,45","123,45","12,3,45"],a:0},
{t:"Indian",type:"fillin",q:"Number name of 25,000 is twenty-___ thousand.",blanks:["five"]},
{t:"Indian",type:"tf",q:"12,345 is greater than 9,999.",a:true},
{t:"Indian",q:"A 5-digit number's first digit is in which place?",o:["Ten-thousands","Thousands","Hundreds","Lakhs"],a:0},
{t:"Indian",type:"tapall",q:"Tap all 5-digit numbers.",pool:["99","9999","10000","50000","100000","25000"],correct:["10000","50000","25000"]},
{t:"Indian",type:"enterval",q:"How many 100s in 1,000?",a:10},
{t:"Indian",type:"enterval",q:"Smallest 5-digit number?",a:10000},
{t:"Indian",type:"tf",q:"99,999 + 1 = 1,00,000.",a:true}
],
[
{t:"Round",type:"enterval",q:"Round 234 to nearest 10?",a:230},
{t:"Round",type:"enterval",q:"Round 567 to nearest 10?",a:570},
{t:"Round",q:"Round 345 to nearest 100?",o:["300","400","350","340"],a:0},
{t:"Round",type:"fillin",q:"678 rounded to nearest 100 = ___.",blanks:["700"]},
{t:"Round",type:"tf",q:"150 rounds to 200 when rounded to the nearest 100.",a:true},
{t:"Round",type:"enterval",q:"Round 249 to nearest 10?",a:250},
{t:"Round",q:"Round 199 to nearest 10?",o:["200","190","100","210"],a:0},
{t:"Round",type:"tapall",q:"Tap all values that round to 500 (nearest 100).",pool:["450","489","451","549","499","600"],correct:["489","451","549","499"]},
{t:"Round",type:"enterval",q:"Round 49 to nearest 10?",a:50},
{t:"Round",type:"tf",q:"1,234 rounded to nearest 100 is 1,200.",a:true}
],
[
{t:"Between",type:"enterval",q:"Successor of 999?",a:1000},
{t:"Between",type:"enterval",q:"Predecessor of 1,000?",a:999},
{t:"Between",type:"fillin",q:"The number between 200 and 202 is ___.",blanks:["201"]},
{t:"Between",type:"enterval",q:"Successor of 99?",a:100},
{t:"Between",type:"tf",q:"The predecessor of 100 is 99.",a:true},
{t:"Between",q:"5 after 495?",o:["500","490","495","505"],a:0},
{t:"Between",type:"enterval",q:"10 before 310?",a:300},
{t:"Between",type:"tapall",q:"Tap all numbers strictly between 300 and 310.",pool:["300","301","305","310","309","299"],correct:["301","305","309"]},
{t:"Between",type:"enterval",q:"After 1,000 comes?",a:1001},
{t:"Between",type:"tf",q:"499 comes before 500.",a:true}
],
[
{t:"Patterns",type:"enterval",q:"5, 10, 15, 20, ?",a:25},
{t:"Patterns",type:"enterval",q:"100, 200, 300, ?",a:400},
{t:"Patterns",type:"enterval",q:"99, 98, 97, ?",a:96},
{t:"Patterns",type:"fillin",q:"Next in 2, 4, 6, 8, ___.",blanks:["10"]},
{t:"Patterns",type:"tf",q:"The next number in 10, 20, 30, 40 is 50.",a:true},
{t:"Patterns",q:"Next: 3, 6, 9, 12, ___?",o:["15","13","16","18"],a:0},
{t:"Patterns",type:"tapall",q:"Tap all multiples of 10.",pool:["5","10","15","20","25","30"],correct:["10","20","30"]},
{t:"Patterns",type:"enterval",q:"Next in 1, 3, 5, 7, ?",a:9},
{t:"Patterns",type:"enterval",q:"800, 600, 400, ?",a:200},
{t:"Patterns",type:"tf",q:"The pattern 5, 10, 20, 40 doubles each step.",a:true}
]
]
},
3: { title:'Give and Take',
beginner:[
[
{t:"add",q:"Riya has 23 marbles. Her friend gives her 14 more. How many marbles does she have now?",o:["37","36","38","27"],a:0},
{t:"sub",q:"There were 45 students in the playground. 12 went home. How many are left?",o:["33","32","34","23"],a:0},
{t:"add",q:"A shop sold 30 pens on Monday and 25 on Tuesday. Total pens sold?",o:["55","45","65","50"],a:0},
{t:"sub",type:"tf",q:"68 minus 27 equals 41.",a:true},
{t:"add",type:"tf",q:"35 plus 24 equals 60.",a:false},
{t:"add",type:"fillin",q:"42 + 16 = ___",blanks:["58"]},
{t:"sub",type:"tapall",q:"Tap all subtractions that give 20.",pool:["50-30","45-25","60-40","70-30","35-15"],correct:["50-30","45-25","60-40","35-15"]},
{t:"add",type:"enterval",q:"Ravi had 18 toffees. His mother gave him 21 more. How many in all?",a:39},
{t:"sub",type:"enterval",q:"From 56 mangoes, 24 were eaten. How many are left?",a:32},
{t:"add",q:"In a classroom there are 22 boys and 19 girls. How many children are there in total?",o:["41","40","42","31"],a:0}
],
[
{t:"sub",q:"A book costs Rs 50. Anu paid Rs 70. How much change does she get?",o:["Rs 20","Rs 10","Rs 30","Rs 25"],a:0},
{t:"add",q:"15 + 33 = ?",o:["48","47","49","45"],a:0},
{t:"sub",q:"79 - 36 = ?",o:["43","42","44","33"],a:0},
{t:"add",type:"tf",q:"26 plus 32 equals 58.",a:true},
{t:"sub",type:"tf",q:"54 minus 27 equals 28.",a:false},
{t:"add",type:"fillin",q:"38 + 25 = ___",blanks:["63"]},
{t:"add",type:"tapall",q:"Tap all sums that equal 50.",pool:["20+30","25+25","10+40","15+30","35+15"],correct:["20+30","25+25","10+40","35+15"]},
{t:"sub",type:"enterval",q:"Out of 80 chocolates, 35 were given away. How many are left?",a:45},
{t:"add",type:"enterval",q:"43 plus 26 equals?",a:69},
{t:"sub",q:"A bus had 60 seats. 24 were empty. How many were filled?",o:["36","34","38","26"],a:0}
],
[
{t:"add",q:"Meera read 28 pages on Saturday and 31 on Sunday. Total pages read?",o:["59","58","60","49"],a:0},
{t:"sub",q:"There were 75 birds on a tree. 23 flew away. How many remain?",o:["52","53","51","42"],a:0},
{t:"add",q:"17 + 44 = ?",o:["61","60","62","51"],a:0},
{t:"sub",type:"tf",q:"90 minus 45 equals 45.",a:true},
{t:"add",type:"tf",q:"19 plus 19 equals 39.",a:false},
{t:"sub",type:"fillin",q:"66 - 24 = ___",blanks:["42"]},
{t:"add",type:"tapall",q:"Tap all additions that result in 70.",pool:["30+40","25+45","60+10","20+40","35+35"],correct:["30+40","25+45","60+10","35+35"]},
{t:"add",type:"enterval",q:"Sita got 32 stickers and Geeta got 27. How many stickers in all?",a:59},
{t:"sub",type:"enterval",q:"From 88, take away 36. What is left?",a:52},
{t:"add",q:"A farmer sold 41 apples and 28 oranges. How many fruits did he sell?",o:["69","68","70","59"],a:0}
],
[
{t:"sub",q:"Ravi had Rs 95. He spent Rs 38. How much money is left?",o:["Rs 57","Rs 56","Rs 58","Rs 47"],a:0},
{t:"add",q:"22 + 37 = ?",o:["59","58","60","49"],a:0},
{t:"sub",q:"82 - 19 = ?",o:["63","62","64","53"],a:0},
{t:"add",type:"tf",q:"45 plus 33 equals 78.",a:true},
{t:"sub",type:"tf",q:"72 minus 28 equals 54.",a:false},
{t:"add",type:"fillin",q:"54 + 14 = ___",blanks:["68"]},
{t:"sub",type:"tapall",q:"Tap all subtractions equal to 30.",pool:["50-20","60-30","40-10","70-40","45-15"],correct:["50-20","60-30","40-10","70-40","45-15"]},
{t:"add",type:"enterval",q:"19 + 26 = ?",a:45},
{t:"sub",type:"enterval",q:"77 minus 29 equals?",a:48},
{t:"add",q:"A class collected 33 storybooks and 26 magazines. How many in total?",o:["59","58","60","49"],a:0}
],
[
{t:"add",q:"36 + 27 = ?",o:["63","62","64","53"],a:0},
{t:"sub",q:"58 - 24 = ?",o:["34","33","35","24"],a:0},
{t:"add",q:"Aarav has 47 stamps. He buys 22 more. Total stamps now?",o:["69","68","70","59"],a:0},
{t:"sub",type:"tf",q:"63 minus 17 equals 46.",a:true},
{t:"add",type:"tf",q:"24 plus 38 equals 60.",a:false},
{t:"sub",type:"fillin",q:"85 - 36 = ___",blanks:["49"]},
{t:"add",type:"tapall",q:"Tap all sums equal to 40.",pool:["10+30","20+20","15+25","25+15","30+5"],correct:["10+30","20+20","15+25","25+15"]},
{t:"add",type:"enterval",q:"29 + 34 = ?",a:63},
{t:"sub",type:"enterval",q:"From 64 take away 28.",a:36},
{t:"sub",q:"There were 50 ladoos. Children ate 18. How many are left?",o:["32","31","33","22"],a:0}
]
],
pro:[
[
{t:"two-step",q:"Asha had 45 marbles. She gave 12 to her brother and won 18 more. How many does she have now?",o:["51","49","53","41"],a:0},
{t:"missing",q:"___ + 24 = 60. The missing number is?",o:["36","34","38","46"],a:0},
{t:"compare",q:"Rohan has 56 candies. Sam has 39. How many more does Rohan have?",o:["17","18","16","27"],a:0},
{t:"two-step",type:"tf",q:"If you add 25 and 18, then subtract 13, the answer is 30.",a:true},
{t:"missing",type:"tf",q:"50 minus ___ equals 23. The blank is 27.",a:true},
{t:"two-step",type:"fillin",q:"32 + 14 - 16 = ___",blanks:["30"]},
{t:"compare",type:"tapall",q:"Tap all numbers greater than 45.",pool:["50","60","42","48","30"],correct:["50","60","48"]},
{t:"two-step",type:"enterval",q:"Anu had 60 stickers. She gave 15 to Riya and 10 to Sita. How many are left?",a:35},
{t:"missing",type:"enterval",q:"What number added to 27 gives 65?",a:38},
{t:"two-step",q:"A shop had 80 pencils. 25 were sold in the morning and 19 in the evening. How many are left?",o:["36","35","37","26"],a:0}
],
[
{t:"two-step",q:"In a basket there were 42 mangoes. 15 were eaten and 22 added. How many now?",o:["49","48","50","39"],a:0},
{t:"missing",q:"34 + ___ = 71",o:["37","36","38","47"],a:0},
{t:"compare",q:"Riya scored 67 marks. Anu scored 49. How many more did Riya score?",o:["18","17","19","28"],a:0},
{t:"two-step",type:"tf",q:"40 + 20 - 15 equals 45.",a:true},
{t:"missing",type:"tf",q:"___ - 18 = 30 means the missing number is 38.",a:false},
{t:"two-step",type:"fillin",q:"25 + 30 - 12 = ___",blanks:["43"]},
{t:"compare",type:"tapall",q:"Tap all numbers less than 50.",pool:["48","30","52","45","60"],correct:["48","30","45"]},
{t:"two-step",type:"enterval",q:"There were 75 children. 22 went home and 14 more came. How many are there now?",a:67},
{t:"missing",type:"enterval",q:"___ + 19 = 54. The missing number is?",a:35},
{t:"compare",q:"Two shops sold 38 and 56 books. How many more books did the second shop sell?",o:["18","17","19","28"],a:0}
],
[
{t:"two-step",q:"Vikram had Rs 90. He bought a book for Rs 35 and a pen for Rs 18. How much money is left?",o:["Rs 37","Rs 35","Rs 39","Rs 27"],a:0},
{t:"missing",q:"58 - ___ = 24",o:["34","33","35","44"],a:0},
{t:"compare",q:"Class A has 47 students and Class B has 29. How many more in Class A?",o:["18","17","19","28"],a:0},
{t:"two-step",type:"tf",q:"30 plus 15 minus 10 is 35.",a:true},
{t:"missing",type:"tf",q:"42 + ___ = 70 means the blank is 28.",a:true},
{t:"two-step",type:"fillin",q:"50 - 18 + 12 = ___",blanks:["44"]},
{t:"compare",type:"tapall",q:"Tap all sums greater than 60.",pool:["35+30","40+25","20+35","50+15","30+25"],correct:["35+30","40+25","50+15"]},
{t:"two-step",type:"enterval",q:"Amit has 28 + 15 - 9 stamps. How many?",a:34},
{t:"missing",type:"enterval",q:"83 minus ___ equals 47. The blank is?",a:36},
{t:"two-step",q:"A van had 40 boxes. 12 were unloaded and 16 added. How many boxes now?",o:["44","43","45","34"],a:0}
],
[
{t:"two-step",q:"Sunita read 18 pages on Monday, 22 on Tuesday and 15 on Wednesday. Total pages?",o:["55","54","56","45"],a:0},
{t:"missing",q:"___ + 27 = 45",o:["18","17","19","28"],a:0},
{t:"compare",q:"Manoj has 72 stickers. Kiran has 48. How many more with Manoj?",o:["24","23","25","34"],a:0},
{t:"two-step",type:"tf",q:"60 minus 25 plus 10 equals 45.",a:true},
{t:"missing",type:"tf",q:"___ - 12 = 30 means the answer is 41.",a:false},
{t:"two-step",type:"fillin",q:"40 + 27 - 18 = ___",blanks:["49"]},
{t:"compare",type:"tapall",q:"Tap all subtractions equal to 25.",pool:["50-25","60-35","40-15","70-40","30-5"],correct:["50-25","60-35","40-15","70-40","30-5"]},
{t:"two-step",type:"enterval",q:"Reena had 95 beads. She lost 28 and bought 12. How many now?",a:79},
{t:"missing",type:"enterval",q:"What plus 16 equals 53?",a:37},
{t:"compare",q:"Two trees had 64 and 39 leaves. The difference is?",o:["25","24","26","35"],a:0}
],
[
{t:"two-step",q:"Ravi has 36 toffees, Mohan has 18 more than Ravi. How many do they have together?",o:["90","88","92","80"],a:0},
{t:"missing",q:"50 + ___ = 87",o:["37","36","38","47"],a:0},
{t:"compare",q:"A shop has 81 pens and 53 pencils. How many more pens than pencils?",o:["28","27","29","38"],a:0},
{t:"two-step",type:"tf",q:"45 + 12 - 7 equals 50.",a:true},
{t:"missing",type:"tf",q:"63 - ___ = 28 means blank is 36.",a:false},
{t:"two-step",type:"fillin",q:"60 - 24 - 16 = ___",blanks:["20"]},
{t:"compare",type:"tapall",q:"Tap all sums less than 50.",pool:["20+25","30+15","40+20","18+22","35+10"],correct:["20+25","30+15","18+22","35+10"]},
{t:"two-step",type:"enterval",q:"In a tank there were 70 fish. 18 were sold and 22 added. How many now?",a:74},
{t:"missing",type:"enterval",q:"___ + 23 = 60. The missing number?",a:37},
{t:"two-step",q:"A bag has 45 red and 28 blue beads. After 15 fall out, how many remain?",o:["58","57","59","48"],a:0}
]
]
},
4: { title:'Long and Short',
beginner:[
[
{t:"unit",q:"Which unit is used to measure the length of a pencil?",o:["centimetre","kilometre","metre","litre"],a:0},
{t:"unit",q:"Which unit is best to measure the length of a classroom?",o:["metre","centimetre","gram","millimetre"],a:0},
{t:"convert",q:"How many centimetres make 1 metre?",o:["100","10","1000","50"],a:0},
{t:"unit",type:"tf",q:"A book is usually measured in centimetres.",a:true},
{t:"unit",type:"tf",q:"We use metres to measure the length of an ant.",a:false},
{t:"convert",type:"fillin",q:"1 m = ___ cm",blanks:["100"]},
{t:"unit",type:"tapall",q:"Tap all things measured in centimetres.",pool:["pencil","eraser","notebook","road","river"],correct:["pencil","eraser","notebook"]},
{t:"convert",type:"enterval",q:"How many centimetres are there in 2 metres?",a:200},
{t:"compare",type:"enterval",q:"Which is longer: 50 cm or 1 m? Enter the longer length in cm.",a:100},
{t:"unit",q:"The short form of centimetre is?",o:["cm","m","km","g"],a:0}
],
[
{t:"unit",q:"The short form of metre is?",o:["m","cm","km","mm"],a:0},
{t:"compare",q:"Which is longer?",o:["1 metre","50 cm","30 cm","99 cm"],a:0},
{t:"convert",q:"3 metres = ?",o:["300 cm","30 cm","3000 cm","100 cm"],a:0},
{t:"unit",type:"tf",q:"A blackboard's length is measured in metres.",a:true},
{t:"compare",type:"tf",q:"75 cm is longer than 1 metre.",a:false},
{t:"convert",type:"fillin",q:"5 m = ___ cm",blanks:["500"]},
{t:"unit",type:"tapall",q:"Tap all things measured in metres.",pool:["height of a door","length of a room","width of a road","tip of a finger","grain of rice"],correct:["height of a door","length of a room","width of a road"]},
{t:"add",type:"enterval",q:"A rope of 40 cm and another of 35 cm joined. Total length in cm?",a:75},
{t:"convert",type:"enterval",q:"4 m = ___ cm. Enter the number.",a:400},
{t:"compare",q:"Which one is shorter?",o:["20 cm","1 m","75 cm","50 cm"],a:0}
],
[
{t:"add",q:"A ribbon is 25 cm. Another is 30 cm. Total length?",o:["55 cm","50 cm","45 cm","60 cm"],a:0},
{t:"compare",q:"Which is longer: 1 m or 80 cm?",o:["1 m","80 cm","equal","cannot say"],a:0},
{t:"convert",q:"6 m = ___ cm",o:["600 cm","60 cm","6000 cm","106 cm"],a:0},
{t:"unit",type:"tf",q:"The height of a child is measured in metres or cm.",a:true},
{t:"convert",type:"tf",q:"200 cm equals 2 m.",a:true},
{t:"add",type:"fillin",q:"30 cm + 20 cm = ___ cm",blanks:["50"]},
{t:"unit",type:"tapall",q:"Tap units of length.",pool:["cm","m","km","kg","litre"],correct:["cm","m","km"]},
{t:"convert",type:"enterval",q:"How many cm in 7 m?",a:700},
{t:"add",type:"enterval",q:"Two sticks are 22 cm and 18 cm. Total in cm?",a:40},
{t:"compare",q:"Which is shortest?",o:["10 cm","30 cm","60 cm","1 m"],a:0}
],
[
{t:"unit",q:"Which is best to measure your hand span?",o:["centimetre","metre","kilometre","litre"],a:0},
{t:"add",q:"Add 45 cm and 30 cm.",o:["75 cm","65 cm","85 cm","70 cm"],a:0},
{t:"compare",q:"A pencil is 15 cm. A pen is 12 cm. Who is longer?",o:["pencil","pen","equal","cannot say"],a:0},
{t:"convert",type:"tf",q:"100 cm and 1 m are the same length.",a:true},
{t:"unit",type:"tf",q:"The length of a road is measured in cm.",a:false},
{t:"convert",type:"fillin",q:"___ cm = 1 m",blanks:["100"]},
{t:"compare",type:"tapall",q:"Tap all lengths shorter than 1 m.",pool:["50 cm","30 cm","99 cm","120 cm","200 cm"],correct:["50 cm","30 cm","99 cm"]},
{t:"add",type:"enterval",q:"15 cm + 35 cm = ___ cm",a:50},
{t:"convert",type:"enterval",q:"How many cm in 9 m?",a:900},
{t:"unit",q:"Which is the longest unit among these?",o:["kilometre","metre","centimetre","millimetre"],a:0}
],
[
{t:"convert",q:"How many cm in 10 m?",o:["1000","100","10","10000"],a:0},
{t:"add",q:"A wire is 60 cm. Another is 25 cm. Total?",o:["85 cm","80 cm","90 cm","75 cm"],a:0},
{t:"compare",q:"Which one is longer?",o:["1 m 20 cm","1 m","90 cm","80 cm"],a:0},
{t:"unit",type:"tf",q:"A cricket bat is about 1 metre long.",a:true},
{t:"convert",type:"tf",q:"150 cm equals 2 m.",a:false},
{t:"add",type:"fillin",q:"40 cm + 60 cm = ___ m",blanks:["1"]},
{t:"unit",type:"tapall",q:"Tap things shorter than a metre.",pool:["spoon","pen","needle","road","river"],correct:["spoon","pen","needle"]},
{t:"add",type:"enterval",q:"A rope of 55 cm and 25 cm. Total in cm?",a:80},
{t:"compare",type:"enterval",q:"Which is longer in cm: 1 m or 75 cm? Enter longer in cm.",a:100},
{t:"unit",q:"Which is the smallest length?",o:["5 cm","50 cm","1 m","1 km"],a:0}
]
],
pro:[
[
{t:"two-step",q:"A ribbon of 1 m is cut into two pieces. One piece is 40 cm. What is the other piece?",o:["60 cm","70 cm","50 cm","40 cm"],a:0},
{t:"compare",q:"A is 1 m 25 cm. B is 1 m 10 cm. Who is longer and by how much?",o:["A by 15 cm","B by 15 cm","A by 25 cm","equal"],a:0},
{t:"two-step",q:"Three sticks are 20 cm, 30 cm and 15 cm. Total length?",o:["65 cm","60 cm","70 cm","55 cm"],a:0},
{t:"convert",type:"tf",q:"3 m 50 cm equals 350 cm.",a:true},
{t:"compare",type:"tf",q:"75 cm is longer than half a metre.",a:true},
{t:"two-step",type:"fillin",q:"From 1 m, cut 35 cm. Remaining is ___ cm.",blanks:["65"]},
{t:"compare",type:"tapall",q:"Tap all lengths longer than 1 m.",pool:["120 cm","150 cm","90 cm","200 cm","75 cm"],correct:["120 cm","150 cm","200 cm"]},
{t:"two-step",type:"enterval",q:"A rope of 2 m is cut into pieces of 60 cm. How many cm are left after one cut of 60 cm? (in cm)",a:140},
{t:"convert",type:"enterval",q:"How many cm in 1 m 25 cm?",a:125},
{t:"compare",q:"Which is longest?",o:["2 m","150 cm","1 m 80 cm","99 cm"],a:0}
],
[
{t:"two-step",q:"Anu's height is 120 cm. Riya is 15 cm taller than Anu. Riya's height in cm?",o:["135","130","140","125"],a:0},
{t:"compare",q:"A pole is 3 m. Another is 250 cm. Difference in cm?",o:["50","30","60","100"],a:0},
{t:"two-step",q:"A wire was 1 m. After cutting 25 cm and 30 cm, how much remains in cm?",o:["45","50","40","55"],a:0},
{t:"convert",type:"tf",q:"4 m 5 cm = 405 cm.",a:true},
{t:"compare",type:"tf",q:"1 m 50 cm is shorter than 145 cm.",a:false},
{t:"two-step",type:"fillin",q:"30 cm + 45 cm + 25 cm = ___ cm",blanks:["100"]},
{t:"compare",type:"tapall",q:"Tap all equal to 1 m.",pool:["100 cm","99 cm","1 m","50+50 cm","60 cm"],correct:["100 cm","1 m","50+50 cm"]},
{t:"two-step",type:"enterval",q:"Two ribbons of 75 cm and 25 cm joined. Total in cm?",a:100},
{t:"convert",type:"enterval",q:"How many cm in 2 m 75 cm?",a:275},
{t:"two-step",q:"A path is 1 m. Suresh covers 35 cm and Ramesh covers 40 cm. Together in cm?",o:["75","80","65","70"],a:0}
],
[
{t:"two-step",q:"A rope was 2 m. It was cut into 80 cm and 60 cm pieces. How much rope is left in cm?",o:["60","50","70","40"],a:0},
{t:"compare",q:"Which is shorter: 1 m 25 cm or 130 cm?",o:["1 m 25 cm","130 cm","equal","cannot say"],a:0},
{t:"two-step",q:"A boy walked 50 cm forward and 20 cm back. Net distance forward in cm?",o:["30","20","40","70"],a:0},
{t:"convert",type:"tf",q:"500 cm equals 5 m.",a:true},
{t:"compare",type:"tf",q:"99 cm is longer than 1 m.",a:false},
{t:"two-step",type:"fillin",q:"From 1 m 50 cm cut 75 cm. Remaining: ___ cm.",blanks:["75"]},
{t:"compare",type:"tapall",q:"Tap items measured in metres.",pool:["height of room","length of bus","width of door","length of pin","thickness of paper"],correct:["height of room","length of bus","width of door"]},
{t:"two-step",type:"enterval",q:"A cloth piece of 90 cm and another of 60 cm joined. Total in cm?",a:150},
{t:"convert",type:"enterval",q:"How many cm in 6 m 5 cm?",a:605},
{t:"two-step",q:"Three pencils each 12 cm placed end to end. Total length?",o:["36 cm","32 cm","24 cm","30 cm"],a:0}
],
[
{t:"two-step",q:"A father is 175 cm tall. His son is 90 cm. Difference in cm?",o:["85","80","90","95"],a:0},
{t:"compare",q:"Order from shortest to longest: 1 m, 50 cm, 1 m 30 cm, 90 cm.",o:["50 cm, 90 cm, 1 m, 1 m 30 cm","1 m, 50 cm, 90 cm, 1 m 30 cm","1 m 30 cm, 1 m, 90 cm, 50 cm","50 cm, 1 m, 90 cm, 1 m 30 cm"],a:0},
{t:"two-step",q:"Asha has 1 m 20 cm of ribbon. She uses 80 cm. Left in cm?",o:["40","30","50","60"],a:0},
{t:"convert",type:"tf",q:"3 m equals 300 cm.",a:true},
{t:"compare",type:"tf",q:"A car is shorter than a pencil.",a:false},
{t:"two-step",type:"fillin",q:"Two ribbons of 35 cm and 65 cm together = ___ m.",blanks:["1"]},
{t:"compare",type:"tapall",q:"Tap all that are equal to or more than 1 m.",pool:["100 cm","150 cm","99 cm","2 m","75 cm"],correct:["100 cm","150 cm","2 m"]},
{t:"two-step",type:"enterval",q:"From a 200 cm rope, 75 cm is removed. How many cm remain?",a:125},
{t:"convert",type:"enterval",q:"How many cm in 8 m?",a:800},
{t:"two-step",q:"A snail moved 25 cm in 1 minute and 30 cm in next. Total cm?",o:["55","50","60","45"],a:0}
],
[
{t:"two-step",q:"A rope is 1 m 50 cm. Aman cuts 60 cm. How much is left?",o:["90 cm","80 cm","100 cm","70 cm"],a:0},
{t:"compare",q:"Which one shows correct order (shortest to longest): 75 cm, 1 m, 60 cm, 1 m 25 cm?",o:["60 cm, 75 cm, 1 m, 1 m 25 cm","75 cm, 60 cm, 1 m, 1 m 25 cm","1 m, 60 cm, 75 cm, 1 m 25 cm","1 m 25 cm, 1 m, 75 cm, 60 cm"],a:0},
{t:"two-step",q:"A field is 50 m long and 30 m wide. Total of length and width?",o:["80 m","60 m","100 m","70 m"],a:0},
{t:"convert",type:"tf",q:"125 cm equals 1 m 25 cm.",a:true},
{t:"compare",type:"tf",q:"3 m is longer than 250 cm.",a:true},
{t:"two-step",type:"fillin",q:"Add 45 cm + 55 cm = ___ m",blanks:["1"]},
{t:"compare",type:"tapall",q:"Tap all lengths shorter than 50 cm.",pool:["20 cm","45 cm","60 cm","30 cm","75 cm"],correct:["20 cm","45 cm","30 cm"]},
{t:"two-step",type:"enterval",q:"3 sticks of 30 cm each placed end to end. Total cm?",a:90},
{t:"convert",type:"enterval",q:"How many cm in 1 m 50 cm?",a:150},
{t:"two-step",q:"Riya has a 2 m rope. She cuts 75 cm and 50 cm. How much is left?",o:["75 cm","60 cm","80 cm","65 cm"],a:0}
]
]
},
5: { title:'Shapes and Designs',
beginner:[
[
{t:"shape",q:"How many sides does a triangle have?",o:["3","4","5","6"],a:0},
{t:"shape",q:"How many corners does a square have?",o:["4","3","5","6"],a:0},
{t:"shape",q:"A shape with 6 sides is called?",o:["hexagon","pentagon","square","triangle"],a:0},
{t:"shape",type:"tf",q:"A circle has no corners.",a:true},
{t:"shape",type:"tf",q:"A rectangle has 5 sides.",a:false},
{t:"shape",type:"fillin",q:"A pentagon has ___ sides.",blanks:["5"]},
{t:"shape",type:"tapall",q:"Tap all shapes that have 4 sides.",pool:["square","rectangle","triangle","circle","hexagon"],correct:["square","rectangle"]},
{t:"shape",type:"enterval",q:"How many sides does a hexagon have?",a:6},
{t:"shape",type:"enterval",q:"How many corners does a triangle have?",a:3},
{t:"shape",q:"Which shape has equal sides and 4 corners?",o:["square","rectangle","triangle","circle"],a:0}
],
[
{t:"shape",q:"How many sides does a pentagon have?",o:["5","6","4","3"],a:0},
{t:"shape",q:"A round shape with no corners is a?",o:["circle","square","triangle","hexagon"],a:0},
{t:"shape",q:"A rectangle has?",o:["4 sides and 4 corners","3 sides and 3 corners","5 sides","no sides"],a:0},
{t:"shape",type:"tf",q:"A hexagon has 6 corners.",a:true},
{t:"shape",type:"tf",q:"A pentagon has 4 sides.",a:false},
{t:"shape",type:"fillin",q:"A circle has ___ corners.",blanks:["0"]},
{t:"shape",type:"tapall",q:"Tap all shapes with straight sides.",pool:["square","triangle","rectangle","circle","oval"],correct:["square","triangle","rectangle"]},
{t:"shape",type:"enterval",q:"Number of sides in a square?",a:4},
{t:"shape",type:"enterval",q:"Number of corners in a pentagon?",a:5},
{t:"shape",q:"Which shape has only 3 corners?",o:["triangle","square","rectangle","pentagon"],a:0}
],
[
{t:"shape",q:"A floor tile shaped like a square fits without gaps. This is called?",o:["tiling","drawing","colouring","cutting"],a:0},
{t:"shape",q:"Which shape can tile a floor without gaps?",o:["square","circle","oval","star"],a:0},
{t:"shape",q:"A shape with all sides equal and all corners equal is?",o:["regular","irregular","round","crooked"],a:0},
{t:"shape",type:"tf",q:"All triangles have 3 sides.",a:true},
{t:"shape",type:"tf",q:"A circle can tile a floor without gaps.",a:false},
{t:"shape",type:"fillin",q:"A regular hexagon has ___ equal sides.",blanks:["6"]},
{t:"shape",type:"tapall",q:"Tap shapes that can tile a floor.",pool:["square","triangle","hexagon","circle","oval"],correct:["square","triangle","hexagon"]},
{t:"shape",type:"enterval",q:"How many sides does a rectangle have?",a:4},
{t:"shape",type:"enterval",q:"Number of corners in a hexagon?",a:6},
{t:"shape",q:"A regular shape has?",o:["all sides equal","all sides different","one side","no sides"],a:0}
],
[
{t:"shape",q:"Which shape is round?",o:["circle","square","pentagon","hexagon"],a:0},
{t:"shape",q:"How many corners does a rectangle have?",o:["4","3","5","6"],a:0},
{t:"shape",q:"A pentagon has how many corners?",o:["5","4","6","3"],a:0},
{t:"shape",type:"tf",q:"A square is also a rectangle.",a:true},
{t:"shape",type:"tf",q:"A triangle has 4 corners.",a:false},
{t:"shape",type:"fillin",q:"A triangle has ___ sides.",blanks:["3"]},
{t:"shape",type:"tapall",q:"Tap all closed shapes.",pool:["square","circle","triangle","line","hexagon"],correct:["square","circle","triangle","hexagon"]},
{t:"shape",type:"enterval",q:"Number of sides in a triangle?",a:3},
{t:"shape",type:"enterval",q:"How many corners are there in a circle?",a:0},
{t:"shape",q:"Which shape has 6 equal sides if regular?",o:["hexagon","pentagon","square","triangle"],a:0}
],
[
{t:"shape",q:"A bee's honeycomb is made of which shape?",o:["hexagon","circle","square","triangle"],a:0},
{t:"shape",q:"A football field is mostly which shape?",o:["rectangle","circle","triangle","hexagon"],a:0},
{t:"shape",q:"Wheels are usually shaped like?",o:["circle","square","triangle","rectangle"],a:0},
{t:"shape",type:"tf",q:"A regular pentagon has 5 equal sides.",a:true},
{t:"shape",type:"tf",q:"A circle has straight sides.",a:false},
{t:"shape",type:"fillin",q:"A hexagon has ___ corners.",blanks:["6"]},
{t:"shape",type:"tapall",q:"Tap shapes with more than 4 sides.",pool:["pentagon","hexagon","square","triangle","octagon"],correct:["pentagon","hexagon","octagon"]},
{t:"shape",type:"enterval",q:"How many sides does a pentagon have?",a:5},
{t:"shape",type:"enterval",q:"Sides of a square plus sides of a triangle?",a:7},
{t:"shape",q:"Which shape is NOT a polygon?",o:["circle","square","triangle","pentagon"],a:0}
]
],
pro:[
[
{t:"compare",q:"How many more sides does a hexagon have than a triangle?",o:["3","2","4","6"],a:0},
{t:"reason",q:"Why can a circle not tile a floor without gaps?",o:["it is round, leaves gaps","it is too small","it has corners","it is straight"],a:0},
{t:"compare",q:"Total corners in a square and a pentagon together?",o:["9","8","10","7"],a:0},
{t:"reason",type:"tf",q:"A regular shape has all sides and corners equal.",a:true},
{t:"compare",type:"tf",q:"A hexagon has more sides than a pentagon.",a:true},
{t:"compare",type:"fillin",q:"Sides of pentagon - sides of triangle = ___",blanks:["2"]},
{t:"reason",type:"tapall",q:"Tap shapes that are regular when all sides are equal.",pool:["square","equilateral triangle","rectangle","regular hexagon","circle"],correct:["square","equilateral triangle","regular hexagon"]},
{t:"compare",type:"enterval",q:"Total sides of one square and one triangle?",a:7},
{t:"compare",type:"enterval",q:"How many corners do 2 hexagons have together?",a:12},
{t:"reason",q:"Which set of shapes can tile a floor together?",o:["squares only","circles only","stars only","ovals only"],a:0}
],
[
{t:"compare",q:"How many sides do 3 triangles have in total?",o:["9","6","12","8"],a:0},
{t:"reason",q:"Which shape has equal opposite sides but not all sides equal?",o:["rectangle","square","triangle","hexagon"],a:0},
{t:"compare",q:"How many corners are in 2 squares and 1 triangle?",o:["11","10","12","9"],a:0},
{t:"reason",type:"tf",q:"All squares are rectangles, but not all rectangles are squares.",a:true},
{t:"compare",type:"tf",q:"A pentagon has more corners than a hexagon.",a:false},
{t:"compare",type:"fillin",q:"Sides of hexagon + sides of triangle = ___",blanks:["9"]},
{t:"reason",type:"tapall",q:"Tap all shapes that have 4 right angles.",pool:["square","rectangle","triangle","circle","pentagon"],correct:["square","rectangle"]},
{t:"compare",type:"enterval",q:"Total sides of 2 pentagons?",a:10},
{t:"compare",type:"enterval",q:"Difference in corners of hexagon and square?",a:2},
{t:"reason",q:"In honeycomb, hexagons fit because?",o:["they tile without gaps","they are round","they have 4 sides","they have curves"],a:0}
],
[
{t:"compare",q:"How many sides do 2 hexagons and 1 pentagon have together?",o:["17","16","18","15"],a:0},
{t:"reason",q:"Which is an irregular shape?",o:["scalene triangle","square","regular hexagon","circle"],a:0},
{t:"compare",q:"Total corners in pentagon, hexagon, triangle?",o:["14","13","15","12"],a:0},
{t:"reason",type:"tf",q:"A rectangle has 4 right-angled corners.",a:true},
{t:"compare",type:"tf",q:"A hexagon has 6 sides and a pentagon has 5 sides.",a:true},
{t:"compare",type:"fillin",q:"Corners of square - corners of triangle = ___",blanks:["1"]},
{t:"reason",type:"tapall",q:"Tap shapes with curved boundaries.",pool:["circle","oval","square","triangle","hexagon"],correct:["circle","oval"]},
{t:"compare",type:"enterval",q:"Total corners of 3 triangles?",a:9},
{t:"compare",type:"enterval",q:"Sides of square + sides of pentagon + sides of hexagon?",a:15},
{t:"reason",q:"Tessellation means?",o:["covering with no gaps","cutting paper","drawing curves","colouring shapes"],a:0}
],
[
{t:"compare",q:"How many more corners does a hexagon have than a square?",o:["2","3","1","4"],a:0},
{t:"reason",q:"A regular hexagon and equilateral triangles together can?",o:["tile a floor","not fit","leave gaps","make circles"],a:0},
{t:"compare",q:"Sides of 2 squares + 2 triangles?",o:["14","12","10","16"],a:0},
{t:"reason",type:"tf",q:"A regular pentagon has 5 equal sides and 5 equal corners.",a:true},
{t:"reason",type:"tf",q:"All four-sided shapes are squares.",a:false},
{t:"compare",type:"fillin",q:"Hexagon has ___ more sides than triangle.",blanks:["3"]},
{t:"reason",type:"tapall",q:"Tap regular polygons (when all sides equal).",pool:["square","equilateral triangle","regular pentagon","rectangle","oval"],correct:["square","equilateral triangle","regular pentagon"]},
{t:"compare",type:"enterval",q:"Sides of 4 triangles?",a:12},
{t:"compare",type:"enterval",q:"Corners of pentagon + corners of triangle?",a:8},
{t:"reason",q:"Which shape would NOT make a good tile for a floor?",o:["circle","square","hexagon","triangle"],a:0}
],
[
{t:"compare",q:"Total sides of 1 hexagon, 1 square and 1 pentagon?",o:["15","14","16","13"],a:0},
{t:"reason",q:"Which shape has 8 sides?",o:["octagon","pentagon","hexagon","square"],a:0},
{t:"compare",q:"How many fewer sides does a triangle have than a hexagon?",o:["3","2","4","1"],a:0},
{t:"reason",type:"tf",q:"A rangoli pattern often uses repeated shapes called tiling.",a:true},
{t:"reason",type:"tf",q:"A circle is a polygon.",a:false},
{t:"compare",type:"fillin",q:"Corners of hexagon + corners of square = ___",blanks:["10"]},
{t:"reason",type:"tapall",q:"Tap all shapes that can tile a floor on their own.",pool:["square","equilateral triangle","regular hexagon","circle","regular pentagon"],correct:["square","equilateral triangle","regular hexagon"]},
{t:"compare",type:"enterval",q:"Sides of 2 hexagons?",a:12},
{t:"compare",type:"enterval",q:"Difference in corners of pentagon and triangle?",a:2},
{t:"reason",q:"A shape with all equal sides is called?",o:["regular","irregular","curved","open"],a:0}
]
]
},
6: { title:'Fun with Give and Take',
beginner:[
[
{t:"add",q:"What is 234 + 125?",o:["359","349","369","459"],a:0},
{t:"add",q:"What is 412 + 256?",o:["668","678","658","768"],a:0},
{t:"sub",q:"What is 567 - 234?",o:["333","343","323","433"],a:0},
{t:"sub",q:"What is 489 - 125?",o:["364","354","374","464"],a:0},
{t:"add",type:"tf",q:"345 + 100 equals 445.",a:true},
{t:"sub",type:"tf",q:"500 - 200 equals 200.",a:false},
{t:"add",type:"fillin",q:"123 + 100 = ___",blanks:["223"]},
{t:"sub",type:"tapall",q:"Tap all sums equal to 300.",pool:["100+200","150+150","250+50","200+200","300+0"],correct:["100+200","150+150","250+50","300+0"]},
{t:"add",type:"enterval",q:"What is 200 + 150?",a:350},
{t:"sub",type:"enterval",q:"What is 400 - 100?",a:300}
],
[
{t:"regroup-add",q:"What is 256 + 137?",o:["393","383","403","293"],a:0},
{t:"regroup-add",q:"What is 348 + 245?",o:["593","583","603","493"],a:0},
{t:"regroup-sub",q:"What is 521 - 138?",o:["383","393","373","483"],a:0},
{t:"regroup-sub",q:"What is 634 - 247?",o:["387","397","377","487"],a:0},
{t:"regroup-add",type:"tf",q:"178 + 145 equals 323.",a:true},
{t:"regroup-sub",type:"tf",q:"452 - 175 equals 287.",a:false},
{t:"regroup-add",type:"fillin",q:"289 + 111 = ___",blanks:["400"]},
{t:"regroup-sub",type:"tapall",q:"Tap all that equal 100.",pool:["200-100","150-50","75+25","60+30","99+1"],correct:["200-100","150-50","75+25","99+1"]},
{t:"regroup-add",type:"enterval",q:"What is 367 + 158?",a:525},
{t:"regroup-sub",type:"enterval",q:"What is 410 - 165?",a:245}
],
[
{t:"word-add",q:"Riya has 145 stamps. She got 132 more. How many in all?",o:["277","267","287","377"],a:0},
{t:"word-sub",q:"Aman had 458 marbles. He gave 125 away. How many left?",o:["333","343","323","433"],a:0},
{t:"word-add",q:"A shop sold 234 pens on Monday and 156 on Tuesday. Total?",o:["390","380","400","290"],a:0},
{t:"word-sub",q:"A library has 600 books. 245 were borrowed. How many left?",o:["355","345","365","455"],a:0},
{t:"word-add",type:"tf",q:"If you add 250 + 250 you get 500.",a:true},
{t:"word-sub",type:"tf",q:"800 minus 300 equals 600.",a:false},
{t:"word-add",type:"fillin",q:"Meena read 180 pages and Sita read 220 pages. Together: ___ pages.",blanks:["400"]},
{t:"word-add",type:"tapall",q:"Tap all pairs that add to 500.",pool:["250+250","300+200","100+400","150+200","350+150"],correct:["250+250","300+200","100+400","350+150"]},
{t:"word-add",type:"enterval",q:"A box has 234 mangoes. Another box has 156. How many in total?",a:390},
{t:"word-sub",type:"enterval",q:"From 750, take away 325. What is left?",a:425}
],
[
{t:"add",q:"What is 305 + 295?",o:["600","500","700","590"],a:0},
{t:"sub",q:"What is 805 - 300?",o:["505","495","515","605"],a:0},
{t:"add",q:"What is 199 + 201?",o:["400","390","410","399"],a:0},
{t:"sub",q:"What is 702 - 198?",o:["504","494","514","604"],a:0},
{t:"add",type:"tf",q:"345 + 55 equals 400.",a:true},
{t:"sub",type:"tf",q:"600 - 199 equals 400.",a:false},
{t:"add",type:"fillin",q:"425 + 75 = ___",blanks:["500"]},
{t:"sub",type:"tapall",q:"Tap all that equal 200.",pool:["500-300","250-50","100+100","300-100","250-100"],correct:["500-300","250-50","100+100","300-100"]},
{t:"add",type:"enterval",q:"What is 256 + 144?",a:400},
{t:"sub",type:"enterval",q:"What is 900 - 350?",a:550}
],
[
{t:"add",q:"What is 467 + 233?",o:["700","690","710","600"],a:0},
{t:"sub",q:"What is 555 - 222?",o:["333","343","323","433"],a:0},
{t:"add",q:"What is 138 + 262?",o:["400","390","410","500"],a:0},
{t:"sub",q:"What is 730 - 415?",o:["315","325","305","415"],a:0},
{t:"add",type:"tf",q:"500 + 500 makes 1000.",a:true},
{t:"sub",type:"tf",q:"1000 - 500 is 600.",a:false},
{t:"add",type:"fillin",q:"650 + 250 = ___",blanks:["900"]},
{t:"add",type:"tapall",q:"Tap all sums equal to 600.",pool:["300+300","400+200","550+50","250+250","100+500"],correct:["300+300","400+200","550+50","100+500"]},
{t:"sub",type:"enterval",q:"What is 1000 - 450?",a:550},
{t:"add",type:"enterval",q:"What is 425 + 175?",a:600}
]
],
pro:[
[
{t:"two-step",q:"Anu had 250 rupees. Mom gave 150 more, then she spent 175. How much left?",o:["225","235","215","325"],a:0},
{t:"two-step",q:"A truck had 480 boxes. 145 were sold and 80 added. How many now?",o:["415","425","405","515"],a:0},
{t:"missing",q:"___ + 245 = 500",o:["255","265","245","355"],a:0},
{t:"compare",q:"Which is greater: 456 + 234 or 700 - 25?",o:["456+234=690","700-25=675","Both equal","Cannot tell"],a:0},
{t:"two-step",type:"tf",q:"If 300 + 250 - 100 = 450, that is correct.",a:true},
{t:"missing",type:"tf",q:"600 - ___ = 250 means blank is 350.",a:true},
{t:"two-step",type:"fillin",q:"From 800, take away 250 and add 100. Answer = ___",blanks:["650"]},
{t:"compare",type:"tapall",q:"Tap all sums greater than 500.",pool:["300+250","400+200","250+200","150+200","350+200"],correct:["300+250","400+200","350+200"]},
{t:"two-step",type:"enterval",q:"Ravi had 425. He gave 125 and got 250. How much now?",a:550},
{t:"missing",type:"enterval",q:"What number plus 175 makes 500?",a:325}
],
[
{t:"word-two",q:"A bakery made 350 cakes. Sold 180 in morning, 95 in evening. How many left?",o:["75","85","65","175"],a:0},
{t:"word-two",q:"Riya had 200 rupees. She got 150 from dad and spent 225. How much left?",o:["125","115","135","225"],a:0},
{t:"missing",q:"___ - 256 = 144",o:["400","390","410","500"],a:0},
{t:"word-two",q:"A school has 450 boys and 380 girls. How many more boys?",o:["70","80","60","170"],a:0},
{t:"word-two",type:"tf",q:"Total of 250 + 250 + 250 is 750.",a:true},
{t:"missing",type:"tf",q:"If 500 - x = 175, then x is 325.",a:true},
{t:"word-two",type:"fillin",q:"Mira sold 145 mangoes and 235 apples. Total fruits sold: ___",blanks:["380"]},
{t:"compare",type:"tapall",q:"Tap all results that equal 250.",pool:["500-250","100+150","300-50","200+50","150+100"],correct:["500-250","100+150","150+100"]},
{t:"word-two",type:"enterval",q:"A box has 600 sweets. 175 given to kids, 100 to elders. How many left?",a:325},
{t:"missing",type:"enterval",q:"675 - ___ = 425. What is missing?",a:250}
],
[
{t:"compare",q:"Which is bigger: 345 + 255 or 700 - 150?",o:["345+255 (=600)","700-150 (=550)","Both equal","Cannot tell"],a:0},
{t:"word-two",q:"Sara baked 320 cookies. She gave 145 to friends and 80 to family. How many left?",o:["95","105","85","195"],a:0},
{t:"missing",q:"248 + ___ = 500",o:["252","262","242","352"],a:0},
{t:"word-two",q:"A box has 500 chocolates. 235 eaten and 75 added. How many now?",o:["340","350","330","440"],a:0},
{t:"compare",type:"tf",q:"800 - 250 is greater than 250 + 250.",a:true},
{t:"word-two",type:"tf",q:"After spending 150 from 400 rupees, you have 350 left.",a:false},
{t:"missing",type:"fillin",q:"500 - ___ = 175. Missing number = ___",blanks:["325"]},
{t:"word-two",type:"tapall",q:"Tap all expressions equal to 400.",pool:["250+150","500-100","200+200","350+50","250+200"],correct:["250+150","500-100","200+200","350+50"]},
{t:"word-two",type:"enterval",q:"A farmer had 750 kg rice. Sold 425 kg, kept 100. How many remain in store?",a:225},
{t:"compare",type:"enterval",q:"By how much is 600 greater than 425?",a:175}
],
[
{t:"word-two",q:"A bus had 248 people. 65 got off, 80 boarded. How many now?",o:["263","253","273","363"],a:0},
{t:"word-two",q:"Rahul saved 175 rupees in Jan, 225 in Feb, 150 in March. Total?",o:["550","540","560","650"],a:0},
{t:"missing",q:"600 + ___ = 850",o:["250","260","240","350"],a:0},
{t:"word-two",q:"A shop had 480 items. 180 sold, 145 new added. How many now?",o:["445","435","455","545"],a:0},
{t:"word-two",type:"tf",q:"If you add 150+150+150 you get 450.",a:true},
{t:"compare",type:"tf",q:"500 - 175 is more than 250 + 100.",a:false},
{t:"word-two",type:"fillin",q:"Anil had 560 stickers. Gave 225 to brother, 80 to sister. Left: ___",blanks:["255"]},
{t:"compare",type:"tapall",q:"Tap all greater than 300.",pool:["350","250","275","420","305"],correct:["350","420","305"]},
{t:"word-two",type:"enterval",q:"A library had 800 books. 250 borrowed, 75 returned. How many on shelf now?",a:625},
{t:"missing",type:"enterval",q:"What plus 248 equals 500?",a:252}
],
[
{t:"word-two",q:"A factory made 425 toys Monday and 375 Tuesday. Sold 250 in total. How many left?",o:["550","540","560","650"],a:0},
{t:"missing",q:"___ - 125 = 275",o:["400","390","410","500"],a:0},
{t:"word-two",q:"Priya had 650 rupees. She bought a book for 175 and a pen for 25. How much left?",o:["450","440","460","550"],a:0},
{t:"compare",q:"Which is smaller: 700 - 245 or 200 + 250?",o:["200+250=450","700-245=455","equal","none"],a:0},
{t:"word-two",type:"tf",q:"From 1000, removing 250 and 250 leaves 500.",a:true},
{t:"missing",type:"tf",q:"If x + 175 = 425, then x = 350.",a:false},
{t:"word-two",type:"fillin",q:"Sum of 250, 175, and 75 is ___",blanks:["500"]},
{t:"word-two",type:"tapall",q:"Tap all amounts that round to 600.",pool:["595","580","610","450","605"],correct:["595","580","610","605"]},
{t:"word-two",type:"enterval",q:"A van has 850 kg load. Drops 325 kg, picks 125 kg. New load?",a:650},
{t:"compare",type:"enterval",q:"How much greater is 750 than 425?",a:325}
]
]
},
7: { title:'Time Goes On',
beginner:[
[
{t:"clock",q:"How many hours are in one day?",o:["24","12","48","60"],a:0},
{t:"clock",q:"How many minutes are in one hour?",o:["60","30","100","24"],a:0},
{t:"clock",q:"The hour hand is on 3, minute hand on 12. What time is it?",o:["3 o'clock","2 o'clock","4 o'clock","12 o'clock"],a:0},
{t:"clock",q:"Minute hand on 6, hour hand between 4 and 5. Time?",o:["4:30","5:30","4:00","5:00"],a:0},
{t:"clock",type:"tf",q:"Half past 7 is the same as 7:30.",a:true},
{t:"clock",type:"tf",q:"There are 100 minutes in an hour.",a:false},
{t:"clock",type:"fillin",q:"Half past 9 is also written as 9:___",blanks:["30"]},
{t:"clock",type:"tapall",q:"Tap all valid o'clock times.",pool:["6:00","7:00","8:30","9:00","10:45"],correct:["6:00","7:00","9:00"]},
{t:"clock",type:"enterval",q:"How many half-hours are in 2 hours?",a:4},
{t:"clock",type:"enterval",q:"How many minutes is half an hour?",a:30}
],
[
{t:"days",q:"How many days are in one week?",o:["7","6","5","8"],a:0},
{t:"days",q:"What day comes after Tuesday?",o:["Wednesday","Monday","Thursday","Friday"],a:0},
{t:"days",q:"What day comes before Sunday?",o:["Saturday","Monday","Friday","Tuesday"],a:0},
{t:"days",q:"Which day comes between Wednesday and Friday?",o:["Thursday","Tuesday","Saturday","Sunday"],a:0},
{t:"days",type:"tf",q:"Saturday and Sunday are the weekend.",a:true},
{t:"days",type:"tf",q:"Friday comes before Wednesday.",a:false},
{t:"days",type:"fillin",q:"The day after Monday is ___",blanks:["Tuesday"]},
{t:"days",type:"tapall",q:"Tap all weekdays (Mon-Fri).",pool:["Monday","Saturday","Wednesday","Sunday","Friday"],correct:["Monday","Wednesday","Friday"]},
{t:"days",type:"enterval",q:"How many days in 2 weeks?",a:14},
{t:"days",type:"enterval",q:"How many days in 3 weeks?",a:21}
],
[
{t:"months",q:"How many months are in a year?",o:["12","10","11","13"],a:0},
{t:"months",q:"Which month comes after March?",o:["April","February","May","June"],a:0},
{t:"months",q:"Which is the first month of the year?",o:["January","February","March","December"],a:0},
{t:"months",q:"Which is the last month of the year?",o:["December","November","January","October"],a:0},
{t:"months",type:"tf",q:"July comes before August.",a:true},
{t:"months",type:"tf",q:"February has 50 days.",a:false},
{t:"months",type:"fillin",q:"The month after May is ___",blanks:["June"]},
{t:"months",type:"tapall",q:"Tap all months of the year.",pool:["April","Sunday","October","February","Tuesday"],correct:["April","October","February"]},
{t:"months",type:"enterval",q:"How many months from January to June (counting both)?",a:6},
{t:"months",type:"enterval",q:"How many days in the month of April?",a:30}
],
[
{t:"calendar",q:"If today is Monday, what will be the day after tomorrow?",o:["Wednesday","Tuesday","Thursday","Sunday"],a:0},
{t:"calendar",q:"If today is 5th May, what date was yesterday?",o:["4th May","6th May","3rd May","5th April"],a:0},
{t:"calendar",q:"Which month has only 28 or 29 days?",o:["February","April","July","November"],a:0},
{t:"calendar",q:"How many days are in the month of June?",o:["30","31","29","28"],a:0},
{t:"calendar",type:"tf",q:"December has 31 days.",a:true},
{t:"calendar",type:"tf",q:"All months have 30 days.",a:false},
{t:"calendar",type:"fillin",q:"If today is 10th, tomorrow will be the ___",blanks:["11th"]},
{t:"calendar",type:"tapall",q:"Tap all months with 31 days.",pool:["January","April","July","June","October"],correct:["January","July","October"]},
{t:"calendar",type:"enterval",q:"How many days in May?",a:31},
{t:"calendar",type:"enterval",q:"What date comes after the 14th?",a:15}
],
[
{t:"ampm",q:"Which time is in the morning?",o:["7 AM","7 PM","11 PM","10 PM"],a:0},
{t:"ampm",q:"Which time is in the evening?",o:["7 PM","7 AM","6 AM","9 AM"],a:0},
{t:"ampm",q:"School usually starts at 8 ___",o:["AM","PM","midnight","night"],a:0},
{t:"ampm",q:"Which time means midnight?",o:["12 AM","12 PM","1 AM","6 AM"],a:0},
{t:"ampm",type:"tf",q:"AM is used for morning hours.",a:true},
{t:"ampm",type:"tf",q:"3 PM is in the early morning.",a:false},
{t:"ampm",type:"fillin",q:"At dinner time, around 8 o'clock at night, we say 8 ___",blanks:["PM"]},
{t:"ampm",type:"tapall",q:"Tap all PM times (afternoon/evening).",pool:["3 PM","8 AM","9 PM","6 AM","5 PM"],correct:["3 PM","9 PM","5 PM"]},
{t:"ampm",type:"enterval",q:"From 10 AM to 12 PM, how many hours?",a:2},
{t:"clock",type:"enterval",q:"How many hours from 6 AM to 9 AM?",a:3}
]
],
pro:[
[
{t:"clock-word",q:"School starts at 8:00 and ends at 1:30. How many hours and half-hours is that?",o:["5 and a half hours","5 hours","6 hours","4 and a half hours"],a:0},
{t:"calendar-word",q:"If today is 25th April, what date will be 1 week later?",o:["2nd May","1st May","3rd May","30th April"],a:0},
{t:"clock-word",q:"A movie starts at 4:00 and ends at 6:30. How long?",o:["2 hours 30 min","2 hours","3 hours","1 hour 30 min"],a:0},
{t:"days-word",q:"If today is Wednesday, what day will it be in 4 days?",o:["Sunday","Saturday","Monday","Friday"],a:0},
{t:"clock-word",type:"tf",q:"From 9:00 to 10:30 is one and a half hours.",a:true},
{t:"calendar-word",type:"tf",q:"7 days after the 12th is the 19th.",a:true},
{t:"clock-word",type:"fillin",q:"From 3:00 PM to 5:30 PM is ___ hours and 30 minutes.",blanks:["2"]},
{t:"calendar-word",type:"tapall",q:"Tap all months with exactly 30 days.",pool:["April","June","September","July","November"],correct:["April","June","September","November"]},
{t:"clock-word",type:"enterval",q:"How many minutes from 7:00 to 7:30?",a:30},
{t:"clock-word",type:"enterval",q:"From 10:00 AM to 1:00 PM, how many hours?",a:3}
],
[
{t:"clock-word",q:"Class begins at 9:00 and lunch is at 12:30. How long until lunch?",o:["3 hours 30 min","3 hours","4 hours","2 hours 30 min"],a:0},
{t:"calendar-word",q:"If your birthday is on 15th and today is 8th, how many days till birthday?",o:["7","8","6","9"],a:0},
{t:"days-word",q:"If today is Friday, what was the day 3 days ago?",o:["Tuesday","Monday","Wednesday","Thursday"],a:0},
{t:"clock-word",q:"A train leaves at 6:30 AM and arrives at 11:00 AM. Travel time?",o:["4 hours 30 min","4 hours","5 hours","3 hours 30 min"],a:0},
{t:"clock-word",type:"tf",q:"From 8:30 to 9:00 is half an hour.",a:true},
{t:"days-word",type:"tf",q:"If today is Tuesday, day after tomorrow is Friday.",a:false},
{t:"clock-word",type:"fillin",q:"Half past 6 is written as 6:___",blanks:["30"]},
{t:"calendar-word",type:"tapall",q:"Tap all dates in the month of January.",pool:["1st","15th","32nd","31st","40th"],correct:["1st","15th","31st"]},
{t:"clock-word",type:"enterval",q:"How many minutes from 4:30 to 5:00?",a:30},
{t:"calendar-word",type:"enterval",q:"How many days in February in a normal year?",a:28}
],
[
{t:"clock-word",q:"If a class is from 10:00 to 11:30, how many half-hours long?",o:["3","2","4","1"],a:0},
{t:"calendar-word",q:"If 12th is Monday, what day is 19th?",o:["Monday","Tuesday","Sunday","Saturday"],a:0},
{t:"ampm-word",q:"Bedtime is at 9:30 ___ for most kids.",o:["PM","AM","noon","midnight"],a:0},
{t:"clock-word",q:"School starts 8:30 AM, ends 2:00 PM. How long?",o:["5 hours 30 min","5 hours","6 hours","4 hours 30 min"],a:0},
{t:"calendar-word",type:"tf",q:"There are 4 weeks in most months.",a:true},
{t:"clock-word",type:"tf",q:"From 11 AM to 1 PM is 3 hours.",a:false},
{t:"days-word",type:"fillin",q:"Two days after Sunday is ___",blanks:["Tuesday"]},
{t:"clock-word",type:"tapall",q:"Tap all times that are half past.",pool:["3:30","4:30","5:00","6:30","7:00"],correct:["3:30","4:30","6:30"]},
{t:"clock-word",type:"enterval",q:"From 2:30 to 4:30, how many hours?",a:2},
{t:"calendar-word",type:"enterval",q:"How many weeks in 21 days?",a:3}
],
[
{t:"clock-word",q:"Lunch break is from 12:30 to 1:00. How long?",o:["30 min","1 hour","45 min","15 min"],a:0},
{t:"calendar-word",q:"If today is 28th February (normal year), what is tomorrow?",o:["1st March","29th February","1st April","31st February"],a:0},
{t:"days-word",q:"If today is Saturday, what day will be after 7 days?",o:["Saturday","Sunday","Friday","Monday"],a:0},
{t:"clock-word",q:"Movie starts 5:30 PM, ends 7:00 PM. Length?",o:["1 hour 30 min","2 hours","1 hour","45 min"],a:0},
{t:"clock-word",type:"tf",q:"There are two half-hours in one hour.",a:true},
{t:"calendar-word",type:"tf",q:"30 days have September, April, June, and November.",a:true},
{t:"clock-word",type:"fillin",q:"From 6:00 to 7:30 is one hour and ___ minutes.",blanks:["30"]},
{t:"months-word",type:"tapall",q:"Tap all summer months in India.",pool:["April","May","June","December","January"],correct:["April","May","June"]},
{t:"clock-word",type:"enterval",q:"How many half-hours in 3 hours?",a:6},
{t:"calendar-word",type:"enterval",q:"How many days from 5th to 12th of same month?",a:7}
],
[
{t:"clock-word",q:"Train departs at 7:00 AM and journey is 3 hours 30 min. When does it arrive?",o:["10:30 AM","11:00 AM","10:00 AM","9:30 AM"],a:0},
{t:"calendar-word",q:"If 1st June is Monday, what day is 8th June?",o:["Monday","Sunday","Tuesday","Wednesday"],a:0},
{t:"clock-word",q:"You sleep at 9:30 PM and wake at 6:30 AM. How many hours of sleep?",o:["9","8","10","11"],a:0},
{t:"ampm-word",q:"4:00 in the afternoon is written as 4:00 ___",o:["PM","AM","noon","mid"],a:0},
{t:"calendar-word",type:"tf",q:"There are 12 months in a year and each has at least 28 days.",a:true},
{t:"clock-word",type:"tf",q:"From 7:30 to 8:00 is 1 hour.",a:false},
{t:"clock-word",type:"fillin",q:"Quarter to 5 in old style is the same as 4:45. Half past 4 = 4:___",blanks:["30"]},
{t:"calendar-word",type:"tapall",q:"Tap all months that begin with the letter J.",pool:["January","June","July","May","April"],correct:["January","June","July"]},
{t:"clock-word",type:"enterval",q:"From 9:30 AM to 11:30 AM, how many hours?",a:2},
{t:"calendar-word",type:"enterval",q:"How many days are in 4 weeks?",a:28}
]
]
},
8: { title:'Who is Heavier?',
beginner:[
[
{t:"units",q:"Which unit is used to weigh a small spoon of sugar?",o:["grams","kilograms","liters","meters"],a:0},
{t:"units",q:"Which unit is used to weigh a sack of rice?",o:["kilograms","grams","liters","centimeters"],a:0},
{t:"units",q:"What does 'kg' stand for?",o:["kilogram","kilometer","kiloliter","gram"],a:0},
{t:"units",q:"What does 'g' stand for in weight?",o:["gram","gallon","glass","grain"],a:0},
{t:"units",type:"tf",q:"A pencil is heavier than a book.",a:false},
{t:"units",type:"tf",q:"We weigh apples in kilograms in the market.",a:true},
{t:"units",type:"fillin",q:"1 kilogram = ___ grams.",blanks:["1000"]},
{t:"units",type:"tapall",q:"Tap all things usually weighed in kilograms.",pool:["watermelon","feather","sack of flour","one pin","big pumpkin"],correct:["watermelon","sack of flour","big pumpkin"]},
{t:"units",type:"enterval",q:"How many grams are in 1 kilogram?",a:1000},
{t:"units",type:"enterval",q:"How many grams are in 2 kilograms?",a:2000}
],
[
{t:"convert",q:"How many grams in 3 kg?",o:["3000","300","30","3"],a:0},
{t:"convert",q:"How many grams in 5 kg?",o:["5000","500","50","5"],a:0},
{t:"convert",q:"2000 grams equals how many kg?",o:["2","20","200","1"],a:0},
{t:"convert",q:"500 g + 500 g equals?",o:["1 kg","2 kg","500 g","100 g"],a:0},
{t:"convert",type:"tf",q:"4 kg is the same as 4000 grams.",a:true},
{t:"convert",type:"tf",q:"100 g is heavier than 1 kg.",a:false},
{t:"convert",type:"fillin",q:"6 kg = ___ g.",blanks:["6000"]},
{t:"convert",type:"tapall",q:"Tap all weights equal to 1 kg.",pool:["1000 g","500 g + 500 g","250 g + 750 g","800 g","200 g + 800 g"],correct:["1000 g","500 g + 500 g","250 g + 750 g","200 g + 800 g"]},
{t:"convert",type:"enterval",q:"How many grams in 4 kg?",a:4000},
{t:"convert",type:"enterval",q:"3000 g = ___ kg",a:3}
],
[
{t:"compare",q:"Which is heavier: 1 kg of cotton or 1 kg of iron?",o:["both equal","cotton","iron","cannot say"],a:0},
{t:"compare",q:"Which is heavier: 2 kg or 1500 g?",o:["2 kg","1500 g","equal","none"],a:0},
{t:"compare",q:"Which is lighter: 500 g or 1 kg?",o:["500 g","1 kg","equal","both same"],a:0},
{t:"compare",q:"Mom bought 2 kg potatoes and 1500 g onions. Which is heavier?",o:["potatoes","onions","equal","neither"],a:0},
{t:"compare",type:"tf",q:"3 kg is heavier than 2500 g.",a:true},
{t:"compare",type:"tf",q:"800 g is heavier than 1 kg.",a:false},
{t:"compare",type:"fillin",q:"Between 750 g and 1 kg, the heavier is ___",blanks:["1 kg"]},
{t:"compare",type:"tapall",q:"Tap all weights heavier than 1 kg.",pool:["1500 g","2 kg","800 g","3 kg","500 g"],correct:["1500 g","2 kg","3 kg"]},
{t:"compare",type:"enterval",q:"How many grams more is 1 kg than 750 g?",a:250},
{t:"compare",type:"enterval",q:"How many grams more is 2 kg than 1 kg?",a:1000}
],
[
{t:"word-add",q:"Mom bought 2 kg rice and 3 kg flour. Total weight?",o:["5 kg","6 kg","4 kg","7 kg"],a:0},
{t:"word-sub",q:"From 5 kg of sugar, 2 kg used. How much left?",o:["3 kg","2 kg","4 kg","1 kg"],a:0},
{t:"word-add",q:"500 g of dal and 500 g of rice make how much?",o:["1 kg","500 g","1500 g","2 kg"],a:0},
{t:"word-add",q:"Bag has 3 kg apples + 2 kg oranges. Total?",o:["5 kg","4 kg","6 kg","3 kg"],a:0},
{t:"word-add",type:"tf",q:"Adding 250 g + 750 g gives 1 kg.",a:true},
{t:"word-sub",type:"tf",q:"From 4 kg flour, taking out 1 kg leaves 5 kg.",a:false},
{t:"word-add",type:"fillin",q:"2 kg + 3 kg = ___ kg",blanks:["5"]},
{t:"word-add",type:"tapall",q:"Tap pairs that add to 1 kg.",pool:["500 g + 500 g","400 g + 600 g","300 g + 700 g","200 g + 200 g","100 g + 900 g"],correct:["500 g + 500 g","400 g + 600 g","300 g + 700 g","100 g + 900 g"]},
{t:"word-add",type:"enterval",q:"3 kg + 2 kg = ___ kg",a:5},
{t:"word-sub",type:"enterval",q:"From 10 kg, take 4 kg. Left = ___ kg",a:6}
],
[
{t:"items",q:"Which is the heaviest?",o:["watermelon","apple","grape","strawberry"],a:0},
{t:"items",q:"Which is the lightest?",o:["feather","brick","stone","pumpkin"],a:0},
{t:"items",q:"A small biscuit packet is about?",o:["50 g","50 kg","5 kg","500 kg"],a:0},
{t:"items",q:"A bag of cement weighs about?",o:["50 kg","50 g","5 g","500 g"],a:0},
{t:"items",type:"tf",q:"A bicycle is heavier than a feather.",a:true},
{t:"items",type:"tf",q:"A book weighs more than a refrigerator.",a:false},
{t:"items",type:"fillin",q:"A grocery rice bag is usually weighed in ___",blanks:["kg"]},
{t:"items",type:"tapall",q:"Tap all heavy items (more than 1 kg).",pool:["bag of rice 5 kg","one biscuit","watermelon 3 kg","one pin","sack of potatoes 10 kg"],correct:["bag of rice 5 kg","watermelon 3 kg","sack of potatoes 10 kg"]},
{t:"items",type:"enterval",q:"How many grams in 7 kg?",a:7000},
{t:"items",type:"enterval",q:"4000 g = ___ kg",a:4}
]
],
pro:[
[
{t:"word-two",q:"A bag had 5 kg rice. 2 kg used Monday, 1 kg Tuesday. How much left?",o:["2 kg","3 kg","1 kg","4 kg"],a:0},
{t:"word-two",q:"Mom bought 3 kg potatoes and 2 kg onions. She used 1 kg of each. How much left in total?",o:["3 kg","2 kg","4 kg","5 kg"],a:0},
{t:"compare",q:"Which is more: 1 kg 500 g or 1500 g?",o:["equal","1 kg 500 g","1500 g","cannot say"],a:0},
{t:"missing",q:"___ + 500 g = 1 kg",o:["500 g","250 g","750 g","100 g"],a:0},
{t:"word-two",type:"tf",q:"Adding 750 g and 250 g gives exactly 1 kg.",a:true},
{t:"compare",type:"tf",q:"2 kg 500 g is the same as 2500 g.",a:true},
{t:"word-two",type:"fillin",q:"500 g + 500 g + 500 g = ___ kg 500 g",blanks:["1"]},
{t:"compare",type:"tapall",q:"Tap weights heavier than 2 kg.",pool:["2500 g","3 kg","1500 g","2 kg 100 g","800 g"],correct:["2500 g","3 kg","2 kg 100 g"]},
{t:"word-two",type:"enterval",q:"Mom bought 4 kg apples. She gave 1 kg to neighbor and used 2 kg. How many kg left?",a:1},
{t:"convert",type:"enterval",q:"5 kg = ___ g",a:5000}
],
[
{t:"word-two",q:"Shopkeeper had 10 kg sugar. Sold 3 kg morning, 4 kg evening. How much left?",o:["3 kg","2 kg","4 kg","5 kg"],a:0},
{t:"word-two",q:"A truck carries 50 kg rice and 25 kg dal. Total weight?",o:["75 kg","65 kg","85 kg","50 kg"],a:0},
{t:"compare",q:"Which is lighter: 800 g or 1 kg 200 g?",o:["800 g","1 kg 200 g","equal","none"],a:0},
{t:"missing",q:"3 kg = 2 kg + ___ g",o:["1000","100","500","2000"],a:0},
{t:"word-two",type:"tf",q:"4 kg minus 1500 g equals 2500 g.",a:true},
{t:"compare",type:"tf",q:"500 g of sugar is heavier than 1 kg of cotton.",a:false},
{t:"word-two",type:"fillin",q:"From 5 kg flour, mom used 2 kg 500 g. Left = ___ kg 500 g",blanks:["2"]},
{t:"word-two",type:"tapall",q:"Tap pairs that total 2 kg.",pool:["1 kg + 1 kg","500 g + 1500 g","750 g + 1250 g","800 g + 800 g","1 kg + 500 g"],correct:["1 kg + 1 kg","500 g + 1500 g","750 g + 1250 g"]},
{t:"convert",type:"enterval",q:"How many g in 8 kg?",a:8000},
{t:"word-two",type:"enterval",q:"From 12 kg rice, used 5 kg, then 3 kg. Left = ___ kg",a:4}
],
[
{t:"word-two",q:"Anu's school bag weighs 3 kg with books, 1 kg without. How much do books weigh?",o:["2 kg","3 kg","4 kg","1 kg"],a:0},
{t:"compare",q:"Box A: 2 kg 500 g; Box B: 2750 g. Which is heavier?",o:["Box B","Box A","equal","cannot say"],a:0},
{t:"missing",q:"___ g + 750 g = 2 kg",o:["1250","1500","1000","2000"],a:0},
{t:"word-two",q:"Shop sold 5 kg + 7 kg + 3 kg of mangoes. Total sold?",o:["15 kg","14 kg","16 kg","12 kg"],a:0},
{t:"word-two",type:"tf",q:"Adding 1 kg + 500 g + 500 g gives 2 kg.",a:true},
{t:"missing",type:"tf",q:"If x + 250 g = 1 kg, then x = 750 g.",a:true},
{t:"word-two",type:"fillin",q:"From a 10 kg bag, removing 4 kg leaves ___ kg.",blanks:["6"]},
{t:"compare",type:"tapall",q:"Tap all weights equal to 2 kg.",pool:["2000 g","1000 g + 1000 g","500 g + 1500 g","2 kg","800 g"],correct:["2000 g","1000 g + 1000 g","500 g + 1500 g","2 kg"]},
{t:"missing",type:"enterval",q:"What weight in g must be added to 600 g to make 1 kg?",a:400},
{t:"word-two",type:"enterval",q:"3 kg apples + 2 kg oranges + 1 kg grapes = ___ kg",a:6}
],
[
{t:"word-two",q:"A grocer had 25 kg rice. He sold 10 kg in the morning and 8 kg in the evening. How much left?",o:["7 kg","8 kg","6 kg","9 kg"],a:0},
{t:"compare",q:"Which is the heaviest: 1500 g, 1 kg 800 g, or 2 kg?",o:["2 kg","1 kg 800 g","1500 g","equal"],a:0},
{t:"missing",q:"___ kg = 3500 g",o:["3 kg 500 g","3 kg","4 kg","2 kg 500 g"],a:0},
{t:"word-two",q:"Two boxes weigh 4 kg each. What is the total?",o:["8 kg","6 kg","4 kg","10 kg"],a:0},
{t:"word-two",type:"tf",q:"Doubling 750 g gives 1 kg 500 g.",a:true},
{t:"compare",type:"tf",q:"3500 g is less than 3 kg.",a:false},
{t:"word-two",type:"fillin",q:"5 kg + 3 kg - 2 kg = ___ kg",blanks:["6"]},
{t:"items",type:"tapall",q:"Tap all items lighter than 1 kg.",pool:["pencil","one apple","watermelon","sack of potatoes","one biscuit"],correct:["pencil","one apple","one biscuit"]},
{t:"convert",type:"enterval",q:"6500 g = 6 kg ___ g",a:500},
{t:"word-two",type:"enterval",q:"A bag had 9 kg sugar. After using 3 kg and 2 kg, left = ___ kg",a:4}
],
[
{t:"word-two",q:"Mom bought 2 kg 500 g potato and 1 kg 500 g tomato. Total weight?",o:["4 kg","3 kg","5 kg","4 kg 500 g"],a:0},
{t:"word-two",q:"From 8 kg flour, baker used 3 kg 500 g. How much left?",o:["4 kg 500 g","5 kg","4 kg","3 kg 500 g"],a:0},
{t:"compare",q:"Which is heavier: 2 kg 250 g or 2300 g?",o:["2300 g","2 kg 250 g","equal","cannot say"],a:0},
{t:"missing",q:"4 kg = ___ g",o:["4000","400","40","4"],a:0},
{t:"word-two",type:"tf",q:"1 kg + 1 kg + 1 kg + 1 kg = 4 kg.",a:true},
{t:"compare",type:"tf",q:"5 kg is lighter than 4500 g.",a:false},
{t:"word-two",type:"fillin",q:"A truck has 100 kg. After unloading 40 kg, it has ___ kg.",blanks:["60"]},
{t:"compare",type:"tapall",q:"Tap all weights heavier than 1 kg 500 g.",pool:["2 kg","1800 g","1 kg","1600 g","3 kg"],correct:["2 kg","1800 g","1600 g","3 kg"]},
{t:"word-two",type:"enterval",q:"Total of 2 kg, 3 kg, and 5 kg = ___ kg",a:10},
{t:"convert",type:"enterval",q:"7000 g = ___ kg",a:7}
]
]
},
9: { title:'How Many Times?',
beginner:[
[
{t:"tables",q:"What is 2 x 3?",o:["6","5","8","9"],a:0},
{t:"tables",q:"What is 5 x 4?",o:["20","15","25","18"],a:0},
{t:"repeated add",q:"3 + 3 + 3 + 3 equals which product?",o:["4 x 3","3 x 3","5 x 3","2 x 3"],a:0},
{t:"equal groups",q:"There are 4 baskets with 5 mangoes each. Total mangoes?",o:["20","15","25","9"],a:0},
{t:"tables",type:"tf",q:"6 x 2 = 12.",a:true},
{t:"tables",type:"tf",q:"7 x 3 = 20.",a:false},
{t:"tables",type:"fillin",q:"4 x 6 = ___",blanks:["24"]},
{t:"tables",type:"tapall",q:"Tap all products of 10.",pool:["10","20","30","21","35","50"],correct:["10","20","30","50"]},
{t:"tables",type:"enterval",q:"What is 8 x 5?",a:40},
{t:"tables",type:"enterval",q:"What is 9 x 2?",a:18}
],
[
{t:"tables",q:"What is 3 x 7?",o:["21","18","24","27"],a:0},
{t:"tables",q:"What is 6 x 5?",o:["30","25","35","20"],a:0},
{t:"tables",q:"What is 4 x 8?",o:["32","28","36","30"],a:0},
{t:"equal groups",q:"5 boxes of 6 pencils. How many pencils?",o:["30","25","35","11"],a:0},
{t:"tables",type:"tf",q:"9 x 3 = 27.",a:true},
{t:"tables",type:"tf",q:"5 x 5 = 20.",a:false},
{t:"tables",type:"fillin",q:"7 x 2 = ___",blanks:["14"]},
{t:"tables",type:"tapall",q:"Tap all products of 5.",pool:["5","10","12","15","18","25"],correct:["5","10","15","25"]},
{t:"tables",type:"enterval",q:"What is 6 x 6?",a:36},
{t:"tables",type:"enterval",q:"What is 4 x 9?",a:36}
],
[
{t:"tables",q:"What is 8 x 4?",o:["32","28","36","24"],a:0},
{t:"tables",q:"What is 7 x 5?",o:["35","30","40","28"],a:0},
{t:"tables",q:"What is 9 x 4?",o:["36","32","40","27"],a:0},
{t:"word",q:"Riya buys 3 packets of 8 biscuits. Total biscuits?",o:["24","21","27","11"],a:0},
{t:"tables",type:"tf",q:"10 x 7 = 70.",a:true},
{t:"tables",type:"tf",q:"6 x 4 = 20.",a:false},
{t:"tables",type:"fillin",q:"3 x 9 = ___",blanks:["27"]},
{t:"tables",type:"tapall",q:"Tap all multiples of 4 below 25.",pool:["4","8","10","12","16","20"],correct:["4","8","12","16","20"]},
{t:"tables",type:"enterval",q:"What is 5 x 7?",a:35},
{t:"tables",type:"enterval",q:"What is 8 x 3?",a:24}
],
[
{t:"tables",q:"What is 2 x 9?",o:["18","16","20","19"],a:0},
{t:"tables",q:"What is 10 x 6?",o:["60","50","70","16"],a:0},
{t:"tables",q:"What is 3 x 8?",o:["24","21","27","20"],a:0},
{t:"equal groups",q:"7 students get 2 toffees each. Total toffees?",o:["14","12","16","9"],a:0},
{t:"tables",type:"tf",q:"4 x 4 = 16.",a:true},
{t:"tables",type:"tf",q:"7 x 7 = 42.",a:false},
{t:"tables",type:"fillin",q:"6 x 7 = ___",blanks:["42"]},
{t:"tables",type:"tapall",q:"Tap all multiples of 3 below 20.",pool:["3","6","9","11","15","18"],correct:["3","6","9","15","18"]},
{t:"tables",type:"enterval",q:"What is 9 x 5?",a:45},
{t:"tables",type:"enterval",q:"What is 2 x 10?",a:20}
],
[
{t:"tables",q:"What is 5 x 9?",o:["45","40","50","35"],a:0},
{t:"tables",q:"What is 8 x 8?",o:["64","56","72","48"],a:0},
{t:"tables",q:"What is 7 x 4?",o:["28","24","32","21"],a:0},
{t:"word",q:"6 plates of 7 ladoos. Total ladoos?",o:["42","36","48","13"],a:0},
{t:"tables",type:"tf",q:"3 x 5 = 15.",a:true},
{t:"tables",type:"tf",q:"9 x 6 = 50.",a:false},
{t:"tables",type:"fillin",q:"8 x 7 = ___",blanks:["56"]},
{t:"tables",type:"tapall",q:"Tap all multiples of 10.",pool:["10","20","25","30","45","50"],correct:["10","20","30","50"]},
{t:"tables",type:"enterval",q:"What is 7 x 6?",a:42},
{t:"tables",type:"enterval",q:"What is 9 x 9?",a:81}
]
],
pro:[
[
{t:"word",q:"A bus has 9 rows of 4 seats. How many seats?",o:["36","32","40","13"],a:0},
{t:"word",q:"Aman reads 6 pages daily. In 8 days he reads?",o:["48","42","54","14"],a:0},
{t:"missing",q:"___ x 7 = 49",o:["7","6","8","9"],a:0},
{t:"compare",q:"Which is greater: 6 x 8 or 5 x 9?",o:["6 x 8","5 x 9","equal","cannot say"],a:0},
{t:"two-step",type:"tf",q:"4 boxes of 5 pens plus 3 pens equals 23.",a:true},
{t:"word",type:"tf",q:"7 bags of 6 apples is 40 apples.",a:false},
{t:"missing",type:"fillin",q:"8 x ___ = 56",blanks:["7"]},
{t:"tables",type:"tapall",q:"Tap products that equal 24.",pool:["4 x 6","3 x 8","2 x 12","5 x 5","7 x 4","6 x 4"],correct:["4 x 6","3 x 8","2 x 12","6 x 4"]},
{t:"word",type:"enterval",q:"5 cartons hold 9 eggs each. How many eggs in total?",a:45},
{t:"two-step",type:"enterval",q:"3 packets of 7 sweets, then 4 more sweets. Total?",a:25}
],
[
{t:"word",q:"A florist has 7 vases with 8 roses each. Total roses?",o:["56","48","64","15"],a:0},
{t:"word",q:"Meera saves Rs 6 daily. In 9 days she saves?",o:["Rs 54","Rs 48","Rs 60","Rs 15"],a:0},
{t:"missing",q:"6 x ___ = 42",o:["7","6","8","5"],a:0},
{t:"compare",q:"Which is greater: 4 x 9 or 6 x 6?",o:["equal","4 x 9","6 x 6","cannot say"],a:0},
{t:"two-step",type:"tf",q:"5 rows of 4 chairs plus 2 more chairs equals 22.",a:true},
{t:"word",type:"tf",q:"8 boxes of 3 mangoes is 30 mangoes.",a:false},
{t:"missing",type:"fillin",q:"___ x 9 = 36",blanks:["4"]},
{t:"tables",type:"tapall",q:"Tap products equal to 36.",pool:["4 x 9","6 x 6","3 x 12","5 x 7","2 x 18","8 x 5"],correct:["4 x 9","6 x 6","3 x 12","2 x 18"]},
{t:"word",type:"enterval",q:"7 boys carry 5 books each. Total books?",a:35},
{t:"two-step",type:"enterval",q:"4 packs of 6 pens, then 3 lost. How many left?",a:21}
],
[
{t:"word",q:"A class has 8 benches with 5 students each. Students total?",o:["40","35","45","13"],a:0},
{t:"word",q:"Raju buys 9 chocolates for Rs 4 each. Total cost?",o:["Rs 36","Rs 32","Rs 40","Rs 13"],a:0},
{t:"missing",q:"___ x 8 = 64",o:["8","7","9","6"],a:0},
{t:"compare",q:"Which is smaller: 7 x 5 or 4 x 8?",o:["4 x 8","7 x 5","equal","cannot say"],a:0},
{t:"two-step",type:"tf",q:"6 trays of 3 cups plus 5 cups equals 23.",a:true},
{t:"word",type:"tf",q:"9 x 8 is greater than 70.",a:true},
{t:"missing",type:"fillin",q:"7 x ___ = 63",blanks:["9"]},
{t:"tables",type:"tapall",q:"Tap products equal to 48.",pool:["6 x 8","4 x 12","8 x 6","3 x 16","5 x 9","7 x 7"],correct:["6 x 8","4 x 12","8 x 6","3 x 16"]},
{t:"word",type:"enterval",q:"6 jars hold 9 marbles each. Total marbles?",a:54},
{t:"two-step",type:"enterval",q:"5 boxes of 8 pens, then 6 added. Total pens?",a:46}
],
[
{t:"word",q:"A truck carries 7 crates of 9 mangoes. Total mangoes?",o:["63","54","72","16"],a:0},
{t:"word",q:"Sara walks 5 km daily for 6 days. Distance covered?",o:["30 km","25 km","36 km","11 km"],a:0},
{t:"missing",q:"9 x ___ = 81",o:["9","8","7","10"],a:0},
{t:"compare",q:"Which equals 8 x 6?",o:["4 x 12","6 x 7","9 x 5","3 x 14"],a:0},
{t:"two-step",type:"tf",q:"3 boxes of 9 toys minus 2 toys equals 25.",a:true},
{t:"word",type:"tf",q:"6 x 7 is less than 50.",a:true},
{t:"missing",type:"fillin",q:"___ x 6 = 54",blanks:["9"]},
{t:"tables",type:"tapall",q:"Tap products equal to 60.",pool:["6 x 10","5 x 12","10 x 6","4 x 15","7 x 8","9 x 6"],correct:["6 x 10","5 x 12","10 x 6","4 x 15"]},
{t:"word",type:"enterval",q:"8 boxes of 7 cookies. Total cookies?",a:56},
{t:"two-step",type:"enterval",q:"4 rows of 9 chairs, then 5 removed. Chairs left?",a:31}
],
[
{t:"word",q:"A garden has 6 rows of 8 plants. Total plants?",o:["48","42","54","14"],a:0},
{t:"word",q:"Each ticket costs Rs 7. 9 tickets cost?",o:["Rs 63","Rs 54","Rs 72","Rs 16"],a:0},
{t:"missing",q:"___ x 4 = 32",o:["8","7","9","6"],a:0},
{t:"compare",q:"Which is greater: 9 x 7 or 8 x 8?",o:["8 x 8","9 x 7","equal","cannot say"],a:0},
{t:"two-step",type:"tf",q:"5 trays of 6 buns plus 4 buns equals 34.",a:true},
{t:"word",type:"tf",q:"7 x 8 is exactly 56.",a:true},
{t:"missing",type:"fillin",q:"___ x 7 = 56",blanks:["8"]},
{t:"tables",type:"tapall",q:"Tap products equal to 72.",pool:["8 x 9","9 x 8","6 x 12","4 x 18","5 x 11","7 x 9"],correct:["8 x 9","9 x 8","6 x 12","4 x 18"]},
{t:"word",type:"enterval",q:"9 baskets of 6 oranges. Total oranges?",a:54},
{t:"two-step",type:"enterval",q:"6 packs of 5 stickers, then 8 added. Total stickers?",a:38}
]
]
},
10: { title:'Play with Patterns',
beginner:[
[
{t:"sequence",q:"What comes next: 2, 4, 6, 8, ___?",o:["10","9","12","11"],a:0},
{t:"sequence",q:"What comes next: 5, 10, 15, 20, ___?",o:["25","22","30","21"],a:0},
{t:"sequence",q:"What comes next: 10, 20, 30, ___?",o:["40","35","50","31"],a:0},
{t:"shape",q:"A square turned 90 degrees still looks like a?",o:["square","triangle","circle","star"],a:0},
{t:"sequence",type:"tf",q:"In pattern +5: 5, 10, 15, 20.",a:true},
{t:"sequence",type:"tf",q:"In pattern x2: 1, 2, 3, 4.",a:false},
{t:"sequence",type:"fillin",q:"3, 6, 9, 12, ___",blanks:["15"]},
{t:"sequence",type:"tapall",q:"Tap numbers in the pattern +10 starting at 5.",pool:["5","15","20","25","35","40"],correct:["5","15","25","35"]},
{t:"sequence",type:"enterval",q:"Next in 4, 8, 12, 16, ___?",a:20},
{t:"sequence",type:"enterval",q:"Next in 1, 2, 4, 8, ___?",a:16}
],
[
{t:"sequence",q:"What comes next: 7, 12, 17, 22, ___?",o:["27","24","30","23"],a:0},
{t:"sequence",q:"What comes next: 3, 6, 12, 24, ___?",o:["48","36","30","25"],a:0},
{t:"sequence",q:"What comes next: 20, 30, 40, 50, ___?",o:["60","55","70","51"],a:0},
{t:"shape",q:"What pattern is ABABAB?",o:["alternating","growing","shrinking","random"],a:0},
{t:"sequence",type:"tf",q:"Pattern +10: 10, 20, 30, 40.",a:true},
{t:"sequence",type:"tf",q:"Pattern x2: 3, 5, 7, 9.",a:false},
{t:"sequence",type:"fillin",q:"5, 10, 20, 40, ___",blanks:["80"]},
{t:"sequence",type:"tapall",q:"Tap numbers from x2 starting at 2.",pool:["2","4","8","10","16","18"],correct:["2","4","8","16"]},
{t:"sequence",type:"enterval",q:"Next in 6, 11, 16, 21, ___?",a:26},
{t:"sequence",type:"enterval",q:"Next in 2, 4, 8, 16, ___?",a:32}
],
[
{t:"sequence",q:"What comes next: 15, 20, 25, 30, ___?",o:["35","32","40","31"],a:0},
{t:"sequence",q:"What comes next: 9, 18, 27, 36, ___?",o:["45","42","50","37"],a:0},
{t:"sequence",q:"Pattern: 100, 90, 80, ___?",o:["70","75","60","81"],a:0},
{t:"shape",q:"How many sides does a triangle have after rotating?",o:["3","4","5","6"],a:0},
{t:"sequence",type:"tf",q:"Pattern +5: 8, 13, 18, 23.",a:true},
{t:"sequence",type:"tf",q:"Pattern x2: 5, 7, 9, 11.",a:false},
{t:"sequence",type:"fillin",q:"7, 14, 21, 28, ___",blanks:["35"]},
{t:"sequence",type:"tapall",q:"Tap multiples of 10.",pool:["10","15","20","25","30","45"],correct:["10","20","30"]},
{t:"sequence",type:"enterval",q:"Next in 11, 16, 21, 26, ___?",a:31},
{t:"sequence",type:"enterval",q:"Next in 50, 60, 70, 80, ___?",a:90}
],
[
{t:"magic",q:"In a magic square, each row sums to the same number. True or false answer 'yes'?",o:["yes","no","sometimes","never"],a:0},
{t:"sequence",q:"Pattern: 1, 3, 5, 7, ___?",o:["9","8","11","6"],a:0},
{t:"sequence",q:"Pattern: 4, 8, 16, 32, ___?",o:["64","48","40","36"],a:0},
{t:"shape",q:"A circle rotated by 45 degrees looks?",o:["the same","like a square","like a triangle","different"],a:0},
{t:"sequence",type:"tf",q:"Pattern +5: 0, 5, 10, 15.",a:true},
{t:"sequence",type:"tf",q:"Pattern +10: 5, 10, 15, 20.",a:false},
{t:"sequence",type:"fillin",q:"12, 22, 32, 42, ___",blanks:["52"]},
{t:"sequence",type:"tapall",q:"Tap odd numbers.",pool:["1","2","3","4","5","6"],correct:["1","3","5"]},
{t:"sequence",type:"enterval",q:"Next in 0, 10, 20, 30, ___?",a:40},
{t:"sequence",type:"enterval",q:"Next in 3, 6, 12, 24, ___?",a:48}
],
[
{t:"sequence",q:"Pattern: 8, 16, 24, 32, ___?",o:["40","36","48","33"],a:0},
{t:"sequence",q:"Pattern: 25, 30, 35, 40, ___?",o:["45","42","50","41"],a:0},
{t:"sequence",q:"Pattern: 200, 190, 180, ___?",o:["170","175","160","181"],a:0},
{t:"shape",q:"A rectangle rotated 180 degrees looks?",o:["the same","like a triangle","like a circle","different"],a:0},
{t:"sequence",type:"tf",q:"Pattern x2: 4, 8, 16, 32.",a:true},
{t:"sequence",type:"tf",q:"Pattern +5: 2, 5, 8, 11.",a:false},
{t:"sequence",type:"fillin",q:"55, 65, 75, 85, ___",blanks:["95"]},
{t:"sequence",type:"tapall",q:"Tap even numbers.",pool:["2","3","4","5","6","7"],correct:["2","4","6"]},
{t:"sequence",type:"enterval",q:"Next in 9, 14, 19, 24, ___?",a:29},
{t:"sequence",type:"enterval",q:"Next in 5, 10, 20, 40, ___?",a:80}
]
],
pro:[
[
{t:"sequence",q:"Find missing: 4, 9, ___, 19, 24",o:["14","13","15","12"],a:0},
{t:"sequence",q:"What is the rule: 3, 6, 12, 24?",o:["x2","+3","+6","+5"],a:0},
{t:"missing",q:"Pattern +10: 14, 24, ___, 44, 54",o:["34","30","40","36"],a:0},
{t:"compare",q:"Which grows faster: +5 or x2 starting at 2?",o:["x2","+5","equal","cannot say"],a:0},
{t:"sequence",type:"tf",q:"In x2 from 3: 3, 6, 12, 24, 48.",a:true},
{t:"sequence",type:"tf",q:"In +5 from 7: 7, 12, 17, 21.",a:false},
{t:"missing",type:"fillin",q:"Find: 8, 16, ___, 64",blanks:["32"]},
{t:"sequence",type:"tapall",q:"Tap numbers in +5 from 5 (up to 30).",pool:["5","10","15","18","25","30"],correct:["5","10","15","25","30"]},
{t:"missing",type:"enterval",q:"Find: 17, 27, ___, 47",a:37},
{t:"two-step",type:"enterval",q:"In x2 starting at 2, what is the 5th term?",a:32}
],
[
{t:"sequence",q:"Find missing: 6, 12, ___, 24, 30",o:["18","16","20","19"],a:0},
{t:"sequence",q:"Rule for 50, 60, 70, 80?",o:["+10","+5","x2","+20"],a:0},
{t:"missing",q:"Pattern +5: 13, ___, 23, 28",o:["18","17","19","20"],a:0},
{t:"compare",q:"After 4 steps of +5 from 0, value is?",o:["20","15","25","10"],a:0},
{t:"sequence",type:"tf",q:"x2 from 5: 5, 10, 20, 40, 80.",a:true},
{t:"sequence",type:"tf",q:"+10 from 3: 3, 12, 22, 32.",a:false},
{t:"missing",type:"fillin",q:"5, 10, 20, ___, 80",blanks:["40"]},
{t:"sequence",type:"tapall",q:"Tap multiples of 5 below 30.",pool:["5","10","12","15","20","25"],correct:["5","10","15","20","25"]},
{t:"missing",type:"enterval",q:"Find: 22, 32, ___, 52",a:42},
{t:"two-step",type:"enterval",q:"In +5 starting at 10, what is the 5th term?",a:30}
],
[
{t:"sequence",q:"Find missing: 11, 16, ___, 26, 31",o:["21","19","23","20"],a:0},
{t:"sequence",q:"Rule for 4, 8, 16, 32?",o:["x2","+4","+6","+8"],a:0},
{t:"missing",q:"Pattern +10: 27, 37, ___, 57",o:["47","45","50","48"],a:0},
{t:"compare",q:"After 3 steps of x2 from 1, value is?",o:["8","6","16","4"],a:0},
{t:"sequence",type:"tf",q:"x2 from 4: 4, 8, 16, 32, 64.",a:true},
{t:"sequence",type:"tf",q:"+5 from 2: 2, 8, 13, 18.",a:false},
{t:"missing",type:"fillin",q:"3, 6, 12, ___, 48",blanks:["24"]},
{t:"sequence",type:"tapall",q:"Tap powers from x2 starting at 1.",pool:["1","2","4","6","8","10"],correct:["1","2","4","8"]},
{t:"missing",type:"enterval",q:"Find: 35, 45, ___, 65",a:55},
{t:"two-step",type:"enterval",q:"In +10 starting at 5, what is the 5th term?",a:45}
],
[
{t:"sequence",q:"Find missing: 9, 19, ___, 39, 49",o:["29","27","31","25"],a:0},
{t:"sequence",q:"Rule for 7, 14, 28, 56?",o:["x2","+7","+8","+14"],a:0},
{t:"missing",q:"Pattern +5: 18, 23, ___, 33",o:["28","27","29","30"],a:0},
{t:"compare",q:"Which is bigger after 4 steps from 1: x2 or +5?",o:["+5","x2","equal","cannot say"],a:0},
{t:"sequence",type:"tf",q:"x2 from 6: 6, 12, 24, 48, 96.",a:true},
{t:"sequence",type:"tf",q:"+10 from 4: 4, 13, 22, 31.",a:false},
{t:"missing",type:"fillin",q:"45, 50, 55, ___, 65",blanks:["60"]},
{t:"sequence",type:"tapall",q:"Tap numbers in +10 from 10 (up to 60).",pool:["10","20","25","30","40","50"],correct:["10","20","30","40","50"]},
{t:"missing",type:"enterval",q:"Find: 14, 19, ___, 29",a:24},
{t:"two-step",type:"enterval",q:"In x2 starting at 3, what is the 4th term?",a:24}
],
[
{t:"sequence",q:"Find missing: 25, 30, ___, 40, 45",o:["35","32","38","34"],a:0},
{t:"sequence",q:"Rule for 2, 12, 22, 32?",o:["+10","+5","x2","+12"],a:0},
{t:"missing",q:"Pattern x2: 5, 10, ___, 40",o:["20","15","25","30"],a:0},
{t:"magic",q:"In a 3x3 magic square with sum 15, the center is?",o:["5","3","7","9"],a:0},
{t:"sequence",type:"tf",q:"x2 from 7: 7, 14, 28, 56.",a:true},
{t:"sequence",type:"tf",q:"+5 from 1: 1, 7, 12, 17.",a:false},
{t:"missing",type:"fillin",q:"8, 13, 18, ___, 28",blanks:["23"]},
{t:"sequence",type:"tapall",q:"Tap numbers in +5 from 0 (up to 25).",pool:["0","5","10","12","15","20"],correct:["0","5","10","15","20"]},
{t:"missing",type:"enterval",q:"Find: 60, 70, ___, 90",a:80},
{t:"two-step",type:"enterval",q:"In +5 starting at 3, what is the 6th term?",a:28}
]
]
},
11: { title:'Jugs and Mugs',
beginner:[
[
{t:"unit",q:"Which is used to measure capacity?",o:["litre","metre","gram","second"],a:0},
{t:"convert",q:"How many ml in 1 litre?",o:["1000","100","10","500"],a:0},
{t:"compare",q:"Which holds more: 1 litre or 500 ml?",o:["1 litre","500 ml","equal","cannot say"],a:0},
{t:"unit",q:"A water bottle usually holds about?",o:["1 litre","1 ml","100 litres","1 gram"],a:0},
{t:"convert",type:"tf",q:"1000 ml = 1 litre.",a:true},
{t:"compare",type:"tf",q:"500 ml is more than 1 litre.",a:false},
{t:"convert",type:"fillin",q:"2 litres = ___ ml",blanks:["2000"]},
{t:"unit",type:"tapall",q:"Tap items measured in litres or ml.",pool:["milk","water","oil","stone","brick","juice"],correct:["milk","water","oil","juice"]},
{t:"convert",type:"enterval",q:"How many ml are in 3 litres?",a:3000},
{t:"convert",type:"enterval",q:"How many ml are in half a litre?",a:500}
],
[
{t:"convert",q:"5 litres equals how many ml?",o:["5000","500","50","5"],a:0},
{t:"compare",q:"Which is more: 750 ml or 1 litre?",o:["1 litre","750 ml","equal","cannot say"],a:0},
{t:"word",q:"A jug holds 2 litres. How many ml?",o:["2000","200","20","20000"],a:0},
{t:"unit",q:"A teaspoon holds about?",o:["5 ml","5 litres","500 ml","50 litres"],a:0},
{t:"convert",type:"tf",q:"4 litres = 4000 ml.",a:true},
{t:"compare",type:"tf",q:"1 litre = 100 ml.",a:false},
{t:"convert",type:"fillin",q:"1 litre = ___ ml",blanks:["1000"]},
{t:"unit",type:"tapall",q:"Tap units of capacity.",pool:["litre","ml","kg","metre","gram","cm"],correct:["litre","ml"]},
{t:"convert",type:"enterval",q:"How many ml in 6 litres?",a:6000},
{t:"compare",type:"enterval",q:"How many ml more is 1 litre than 250 ml?",a:750}
],
[
{t:"compare",q:"Which holds more: a mug or a bucket?",o:["bucket","mug","equal","cannot say"],a:0},
{t:"convert",q:"How many ml is half a litre?",o:["500","250","100","1000"],a:0},
{t:"word",q:"A bottle has 1 litre milk. After using 300 ml, how much is left?",o:["700 ml","600 ml","800 ml","400 ml"],a:0},
{t:"unit",q:"A small medicine cup holds about?",o:["10 ml","10 litres","1 litre","100 litres"],a:0},
{t:"compare",type:"tf",q:"A bucket holds more than a cup.",a:true},
{t:"convert",type:"tf",q:"3 litres = 300 ml.",a:false},
{t:"convert",type:"fillin",q:"5000 ml = ___ litres",blanks:["5"]},
{t:"unit",type:"tapall",q:"Tap items measured in ml.",pool:["medicine","perfume","brick","ink","wood","syrup"],correct:["medicine","perfume","ink","syrup"]},
{t:"convert",type:"enterval",q:"How many ml in 4 litres?",a:4000},
{t:"word",type:"enterval",q:"A jug has 2 litres of juice. How many ml?",a:2000}
],
[
{t:"compare",q:"Which holds less: 250 ml or 500 ml?",o:["250 ml","500 ml","equal","cannot say"],a:0},
{t:"convert",q:"How many ml in 7 litres?",o:["7000","700","70","7"],a:0},
{t:"word",q:"3 glasses each hold 200 ml. Total ml?",o:["600","500","700","203"],a:0},
{t:"unit",q:"A water tank usually stores how much?",o:["many litres","many ml","few ml","few cm"],a:0},
{t:"compare",type:"tf",q:"A spoon holds less than a glass.",a:true},
{t:"convert",type:"tf",q:"2 litres = 200 ml.",a:false},
{t:"convert",type:"fillin",q:"3000 ml = ___ litres",blanks:["3"]},
{t:"unit",type:"tapall",q:"Tap things sold by litre.",pool:["milk","oil","petrol","stone","cloth","water"],correct:["milk","oil","petrol","water"]},
{t:"convert",type:"enterval",q:"How many ml in 8 litres?",a:8000},
{t:"word",type:"enterval",q:"4 cups of 250 ml each. Total ml?",a:1000}
],
[
{t:"compare",q:"Which is greatest?",o:["2 litres","1500 ml","1 litre","500 ml"],a:0},
{t:"convert",q:"6000 ml = how many litres?",o:["6","60","600","16"],a:0},
{t:"word",q:"A bucket has 10 litres. How many ml?",o:["10000","1000","100","10100"],a:0},
{t:"unit",q:"Best unit to measure water in a swimming pool?",o:["litres","ml","grams","metres"],a:0},
{t:"compare",type:"tf",q:"1 litre = 1000 ml.",a:true},
{t:"convert",type:"tf",q:"1500 ml is less than 1 litre.",a:false},
{t:"convert",type:"fillin",q:"4000 ml = ___ litres",blanks:["4"]},
{t:"unit",type:"tapall",q:"Tap correct capacity values.",pool:["1 litre","500 ml","2 litres","10 metres","5 grams","250 ml"],correct:["1 litre","500 ml","2 litres","250 ml"]},
{t:"convert",type:"enterval",q:"How many ml in 9 litres?",a:9000},
{t:"convert",type:"enterval",q:"How many litres is 7000 ml?",a:7}
]
],
pro:[
[
{t:"word",q:"A jug has 2 litres juice. 750 ml is poured out. How much is left?",o:["1250 ml","1500 ml","1000 ml","1750 ml"],a:0},
{t:"word",q:"3 bottles of 1500 ml each. Total in litres?",o:["4.5 litres","3 litres","5 litres","4 litres"],a:0},
{t:"compare",q:"Which is more: 1 litre 500 ml or 1750 ml?",o:["1750 ml","1 litre 500 ml","equal","cannot say"],a:0},
{t:"missing",q:"Mug A has 250 ml, Mug B has 350 ml. Total?",o:["600 ml","500 ml","700 ml","550 ml"],a:0},
{t:"word",type:"tf",q:"Filling 4 jugs of 500 ml gives 2 litres total.",a:true},
{t:"compare",type:"tf",q:"3 litres equals 30000 ml.",a:false},
{t:"convert",type:"fillin",q:"2 litres 500 ml = ___ ml",blanks:["2500"]},
{t:"unit",type:"tapall",q:"Tap totals greater than 1 litre.",pool:["1500 ml","800 ml","2 litres","500 ml","3000 ml","250 ml"],correct:["1500 ml","2 litres","3000 ml"]},
{t:"word",type:"enterval",q:"5 bottles of 600 ml each. Total ml?",a:3000},
{t:"two-step",type:"enterval",q:"From 2 litres of milk, 800 ml used. Ml left?",a:1200}
],
[
{t:"word",q:"A tank holds 50 litres. 30 litres used. How many litres left?",o:["20","10","25","15"],a:0},
{t:"word",q:"A jug fills 4 cups of 250 ml. Total in litres?",o:["1 litre","2 litres","500 ml","1.5 litres"],a:0},
{t:"compare",q:"Which is greatest: 2 litres, 1800 ml, or 1500 ml?",o:["2 litres","1800 ml","1500 ml","equal"],a:0},
{t:"missing",q:"3 jars of 600 ml each. Total ml?",o:["1800","1500","2100","1200"],a:0},
{t:"word",type:"tf",q:"6 glasses of 200 ml fill 1 litre 200 ml.",a:true},
{t:"compare",type:"tf",q:"500 ml + 600 ml is more than 1 litre.",a:true},
{t:"convert",type:"fillin",q:"3 litres 250 ml = ___ ml",blanks:["3250"]},
{t:"unit",type:"tapall",q:"Tap totals less than 1 litre.",pool:["500 ml","250 ml","800 ml","1500 ml","2 litres","100 ml"],correct:["500 ml","250 ml","800 ml","100 ml"]},
{t:"word",type:"enterval",q:"4 bottles of 750 ml each. Total ml?",a:3000},
{t:"two-step",type:"enterval",q:"From 5 litres, 2300 ml used. Ml left?",a:2700}
],
[
{t:"word",q:"A bucket has 8 litres water. After 3 litres 500 ml used, how much is left?",o:["4 litres 500 ml","5 litres","4 litres","3 litres 500 ml"],a:0},
{t:"word",q:"A water bottle holds 500 ml. How many bottles fill a 3 litre jug?",o:["6","5","7","4"],a:0},
{t:"compare",q:"Which is least: 750 ml, 1 litre, or 500 ml?",o:["500 ml","750 ml","1 litre","equal"],a:0},
{t:"missing",q:"5 cups of 200 ml each. Total ml?",o:["1000","800","1200","900"],a:0},
{t:"word",type:"tf",q:"2 jugs of 1500 ml each total 3 litres.",a:true},
{t:"compare",type:"tf",q:"1 litre 200 ml is more than 1500 ml.",a:false},
{t:"convert",type:"fillin",q:"4500 ml = ___ litres ___ ml (combined)",blanks:["4 500"]},
{t:"unit",type:"tapall",q:"Tap volumes equal to or more than 2 litres.",pool:["2000 ml","2500 ml","3 litres","1500 ml","1 litre","2 litres"],correct:["2000 ml","2500 ml","3 litres","2 litres"]},
{t:"word",type:"enterval",q:"3 jugs of 1200 ml each. Total ml?",a:3600},
{t:"two-step",type:"enterval",q:"From 4 litres, 1500 ml used. Ml left?",a:2500}
],
[
{t:"word",q:"A kettle holds 1500 ml. Half is used. How much is left in ml?",o:["750","500","1000","250"],a:0},
{t:"word",q:"A drum has 25 litres oil. 8 litres are used. Litres left?",o:["17","15","18","10"],a:0},
{t:"compare",q:"Which is greatest?",o:["3 litres 500 ml","3000 ml","2500 ml","2 litres"],a:0},
{t:"missing",q:"2 bottles of 750 ml plus 500 ml jug. Total ml?",o:["2000","1750","2250","1500"],a:0},
{t:"word",type:"tf",q:"1 litre + 500 ml = 1500 ml.",a:true},
{t:"compare",type:"tf",q:"5 litres equals 50000 ml.",a:false},
{t:"convert",type:"fillin",q:"6 litres 200 ml = ___ ml",blanks:["6200"]},
{t:"unit",type:"tapall",q:"Tap volumes equal to 1 litre.",pool:["1000 ml","1 litre","500 ml + 500 ml","2 litres","250 ml","100 ml"],correct:["1000 ml","1 litre","500 ml + 500 ml"]},
{t:"word",type:"enterval",q:"A jug has 3 litres juice. Half is poured. Ml poured?",a:1500},
{t:"two-step",type:"enterval",q:"6 cups of 300 ml. Total ml?",a:1800}
],
[
{t:"word",q:"A tank has 100 litres. 45 litres used in morning, 25 in evening. Litres left?",o:["30","40","20","35"],a:0},
{t:"word",q:"Each glass holds 250 ml. How many glasses fill 2 litres?",o:["8","6","10","5"],a:0},
{t:"compare",q:"Which is least?",o:["750 ml","1 litre","1500 ml","2 litres"],a:0},
{t:"missing",q:"A jar has 1500 ml. Add 750 ml more. Total ml?",o:["2250","2000","2500","1750"],a:0},
{t:"word",type:"tf",q:"4 mugs of 500 ml each fill 2 litres.",a:true},
{t:"compare",type:"tf",q:"2 litres 250 ml is less than 2000 ml.",a:false},
{t:"convert",type:"fillin",q:"7 litres 500 ml = ___ ml",blanks:["7500"]},
{t:"unit",type:"tapall",q:"Tap totals exactly 2 litres.",pool:["2000 ml","1 litre + 1 litre","500 ml x 4","1500 ml","2 litres","250 ml x 8"],correct:["2000 ml","1 litre + 1 litre","500 ml x 4","2 litres","250 ml x 8"]},
{t:"word",type:"enterval",q:"5 bottles of 800 ml. Total ml?",a:4000},
{t:"two-step",type:"enterval",q:"From 10 litres, 3500 ml used. Ml left?",a:6500}
]
]
},
12: { title:'Can We Share?',
beginner:[
[
{t:"share-equal",q:"6 sweets shared equally between 2 friends. Each gets?",o:["3","2","4","6"],a:0},
{t:"share-equal",q:"10 toys shared equally among 5 kids. Each kid gets?",o:["2","3","5","1"],a:0},
{t:"share-equal",q:"8 mangoes for 4 children. Each gets?",o:["2","4","8","1"],a:0},
{t:"share-equal",type:"tf",q:"If 12 chocolates are shared between 3 friends, each gets 4.",a:true},
{t:"share-equal",type:"tf",q:"15 pencils shared equally among 5 kids gives each 4.",a:false},
{t:"share-equal",type:"fillin",q:"9 laddoos shared equally among 3 friends. Each gets ___ laddoos.",blanks:["3"]},
{t:"share-equal",type:"tapall",q:"Tap numbers that share equally among 2 with no leftover.",pool:["4","5","6","7","8"],correct:["4","6","8"]},
{t:"share-equal",type:"enterval",q:"20 balls shared equally among 4 boys. Each boy gets how many?",a:5},
{t:"share-equal",type:"enterval",q:"14 apples for 2 baskets. Each basket has?",a:7},
{t:"share-equal",q:"Sharing 16 marbles equally among 4 kids. Each gets?",o:["4","3","5","2"],a:0}
],
[
{t:"divide",q:"18 divided by 2 equals?",o:["9","8","7","10"],a:0},
{t:"divide",q:"25 divided by 5 equals?",o:["5","4","6","3"],a:0},
{t:"divide",q:"30 divided by 3 equals?",o:["10","9","12","6"],a:0},
{t:"divide",type:"tf",q:"24 divided by 4 is 6.",a:true},
{t:"divide",type:"tf",q:"21 divided by 3 is 8.",a:false},
{t:"divide",type:"fillin",q:"36 divided by 6 is ___.",blanks:["6"]},
{t:"divide",type:"tapall",q:"Tap the answers equal to 4.",pool:["8/2","12/3","16/4","9/3","20/5"],correct:["8/2","12/3","16/4","20/5"]},
{t:"divide",type:"enterval",q:"40 divided by 5 equals?",a:8},
{t:"divide",type:"enterval",q:"27 divided by 3 equals?",a:9},
{t:"divide",q:"32 divided by 4 equals?",o:["8","6","9","7"],a:0}
],
[
{t:"groups",q:"How many groups of 5 in 20?",o:["4","5","3","6"],a:0},
{t:"groups",q:"How many groups of 2 in 14?",o:["7","6","8","5"],a:0},
{t:"groups",q:"How many groups of 3 in 18?",o:["6","5","7","4"],a:0},
{t:"groups",type:"tf",q:"There are 5 groups of 4 in 20.",a:true},
{t:"groups",type:"tf",q:"There are 4 groups of 6 in 30.",a:false},
{t:"groups",type:"fillin",q:"In 28, there are ___ groups of 4.",blanks:["7"]},
{t:"groups",type:"tapall",q:"Tap numbers that make exact groups of 5.",pool:["10","12","15","18","20"],correct:["10","15","20"]},
{t:"groups",type:"enterval",q:"How many groups of 6 are in 24?",a:4},
{t:"groups",type:"enterval",q:"How many groups of 7 are in 21?",a:3},
{t:"groups",q:"How many groups of 10 in 50?",o:["5","4","6","3"],a:0}
],
[
{t:"word",q:"Riya has 12 candies for 4 friends. Each friend gets?",o:["3","4","2","5"],a:0},
{t:"word",q:"15 books shared by 3 students. Each gets?",o:["5","4","6","3"],a:0},
{t:"word",q:"6 cookies in each plate. 18 cookies need how many plates?",o:["3","4","2","5"],a:0},
{t:"word",type:"tf",q:"A dozen bananas shared among 4 kids gives each 3.",a:true},
{t:"word",type:"tf",q:"24 chairs in 4 rows means 8 chairs per row.",a:false},
{t:"word",type:"fillin",q:"Mom gives 16 grapes to 4 children equally. Each gets ___ grapes.",blanks:["4"]},
{t:"word",type:"tapall",q:"Tap problems with answer 5.",pool:["10/2","15/3","20/4","25/5","30/3"],correct:["15/3","25/5"]},
{t:"word",type:"enterval",q:"35 stickers shared among 5 friends. Each gets?",a:7},
{t:"word",type:"enterval",q:"45 toffees in packs of 9. How many packs?",a:5},
{t:"word",q:"Papa shares 20 rupees among 5 kids. Each gets?",o:["4","3","5","2"],a:0}
],
[
{t:"halves",q:"Half of 10 is?",o:["5","4","6","3"],a:0},
{t:"halves",q:"Half of 16 is?",o:["8","7","9","6"],a:0},
{t:"halves",q:"Quarter of 12 is?",o:["3","4","2","6"],a:0},
{t:"halves",type:"tf",q:"Half of 20 is 10.",a:true},
{t:"halves",type:"tf",q:"Half of 14 is 8.",a:false},
{t:"halves",type:"fillin",q:"Half of 18 is ___.",blanks:["9"]},
{t:"halves",type:"tapall",q:"Tap halves correctly: half of...",pool:["8 is 4","10 is 5","12 is 7","6 is 3","14 is 6"],correct:["8 is 4","10 is 5","6 is 3"]},
{t:"halves",type:"enterval",q:"Half of 22 is?",a:11},
{t:"halves",type:"enterval",q:"Quarter of 20 is?",a:5},
{t:"halves",q:"Half of 8 is?",o:["4","3","5","2"],a:0}
]
],
pro:[
[
{t:"remainder",q:"13 sweets shared among 4 friends. Each gets 3, how many left?",o:["1","2","3","0"],a:0},
{t:"remainder",q:"17 candies for 5 kids. Each gets 3, leftover?",o:["2","1","3","0"],a:0},
{t:"remainder",q:"22 apples in baskets of 4. Apples left over?",o:["2","1","3","0"],a:0},
{t:"remainder",type:"tf",q:"19 pencils shared among 4: each gets 4 with 3 left.",a:true},
{t:"remainder",type:"tf",q:"25 toys in groups of 6: 3 left over.",a:false},
{t:"remainder",type:"fillin",q:"15 mangoes in packs of 4. ___ mangoes left over.",blanks:["3"]},
{t:"remainder",type:"tapall",q:"Tap divisions with no remainder.",pool:["12/3","13/4","20/5","17/3","18/6"],correct:["12/3","20/5","18/6"]},
{t:"remainder",type:"enterval",q:"23 chocolates among 4 friends. Leftover after equal share?",a:3},
{t:"remainder",type:"enterval",q:"31 marbles in bags of 5. Marbles left?",a:1},
{t:"remainder",q:"29 books on shelves of 6. Books left over?",o:["5","4","3","2"],a:0}
],
[
{t:"two-step",q:"Anu had 24 sweets. She gave half to Riya, then shared rest with 3 friends. Each friend gets?",o:["4","3","6","2"],a:0},
{t:"two-step",q:"30 toffees in 2 boxes equally; each box shared among 3 kids. Each kid gets?",o:["5","6","4","3"],a:0},
{t:"two-step",q:"Mom bought 18 mangoes, ate 2, shared rest among 4. Each gets?",o:["4","3","5","2"],a:0},
{t:"two-step",type:"tf",q:"36 pencils in 2 boxes; each box for 6 kids: each kid gets 3.",a:true},
{t:"two-step",type:"tf",q:"40 candies, 8 eaten, rest for 4 friends: each gets 7.",a:false},
{t:"two-step",type:"fillin",q:"Riya had 20 stickers, used 4, gave rest equally to 4 friends. Each gets ___.",blanks:["4"]},
{t:"two-step",type:"tapall",q:"Tap sharings that give exactly 5 each: pool of (total, kids).",pool:["10,2","15,3","20,4","25,5","18,3"],correct:["10,2","15,3","20,4","25,5"]},
{t:"two-step",type:"enterval",q:"45 sweets, 5 eaten, rest among 8 kids. Each gets?",a:5},
{t:"two-step",type:"enterval",q:"24 cookies in 2 jars; one jar shared by 4 kids. Each kid gets?",a:3},
{t:"two-step",q:"50 stickers; 10 lost; rest for 4 kids. Each gets?",o:["10","8","12","9"],a:0}
],
[
{t:"compare",q:"Which gives more per person: 20 among 4 or 24 among 6?",o:["20 among 4","24 among 6","Same","Cannot say"],a:0},
{t:"compare",q:"Which gives more each: 18/3 or 16/4?",o:["18/3","16/4","Same","Cannot say"],a:0},
{t:"compare",q:"Greater share per child: 36/6 or 30/5?",o:["Same","36/6","30/5","Neither"],a:0},
{t:"compare",type:"tf",q:"Sharing 24 among 4 gives more each than 24 among 6.",a:true},
{t:"compare",type:"tf",q:"30 shared by 5 is less than 30 shared by 6 each.",a:false},
{t:"compare",type:"fillin",q:"Of 20/5 and 20/4, the bigger share each is from 20/___.",blanks:["4"]},
{t:"compare",type:"tapall",q:"Tap pairs giving 6 per person.",pool:["12,2","18,3","24,4","30,5","20,4"],correct:["12,2","18,3","24,4","30,5"]},
{t:"compare",type:"enterval",q:"How much more does each get sharing 24 among 4 than among 6?",a:2},
{t:"compare",type:"enterval",q:"40/5 minus 40/8 equals?",a:3},
{t:"compare",q:"Bigger share each: 28/4 or 28/7?",o:["28/4","28/7","Same","Neither"],a:0}
],
[
{t:"missing",q:"___ shared among 4 gives 6 each. Total is?",o:["24","20","28","16"],a:0},
{t:"missing",q:"30 shared equally gives each 6. Number of kids?",o:["5","6","4","3"],a:0},
{t:"missing",q:"___ divided by 7 equals 4.",o:["28","21","35","24"],a:0},
{t:"missing",type:"tf",q:"If 5 kids each get 6, total candies = 30.",a:true},
{t:"missing",type:"tf",q:"If 4 kids each get 8, total = 28.",a:false},
{t:"missing",type:"fillin",q:"___ rupees shared among 9 kids = 4 each.",blanks:["36"]},
{t:"missing",type:"tapall",q:"Tap totals that share by 5 to give 6 each.",pool:["30","25","35","20","15"],correct:["30"]},
{t:"missing",type:"enterval",q:"If 8 kids each get 5 sweets, total sweets?",a:40},
{t:"missing",type:"enterval",q:"42 shared equally gives each 6. How many kids?",a:7},
{t:"missing",q:"___ divided by 6 equals 8.",o:["48","42","54","36"],a:0}
],
[
{t:"word-pro",q:"A bag holds 6 balls. 50 balls fill how many bags fully and how many leftover? Bags fully filled=?",o:["8","7","9","6"],a:0},
{t:"word-pro",q:"Class has 35 kids; 4 kids per bench. Benches needed?",o:["9","8","10","7"],a:0},
{t:"word-pro",q:"Mom packed 27 cookies in boxes of 5. Cookies left without box?",o:["2","3","1","4"],a:0},
{t:"word-pro",type:"tf",q:"To seat 23 kids 4 per bench, 6 benches are enough.",a:true},
{t:"word-pro",type:"tf",q:"50 sweets shared among 7 friends gives 8 each with no leftover.",a:false},
{t:"word-pro",type:"fillin",q:"60 stickers in 5 packets equally; each packet has ___ stickers.",blanks:["12"]},
{t:"word-pro",type:"tapall",q:"Tap problems where each child gets exactly 4.",pool:["20 among 5","24 among 6","16 among 4","32 among 8","18 among 6"],correct:["20 among 5","24 among 6","16 among 4","32 among 8"]},
{t:"word-pro",type:"enterval",q:"33 mangoes shared by 4 children. Mangoes left after equal share?",a:1},
{t:"word-pro",type:"enterval",q:"Pencils packed 6 per box. 48 pencils need how many boxes?",a:8},
{t:"word-pro",q:"Anu has 100 marbles in bags of 9. Bags fully filled?",o:["11","10","12","9"],a:0}
]
]
},
13: { title:'Smart Charts',
beginner:[
[
{t:"tally",q:"Tally |||| represents which number?",o:["4","5","3","6"],a:0},
{t:"tally",q:"Tally |||| | represents?",o:["6","5","7","4"],a:0},
{t:"tally",q:"How is 5 shown in tally?",o:["|||| crossed (4 + slash)","|||||","||||","||"],a:0},
{t:"tally",type:"tf",q:"Tally marks group in fives.",a:true},
{t:"tally",type:"tf",q:"|||| stands for 6.",a:false},
{t:"tally",type:"fillin",q:"Tally |||| || means ___.",blanks:["7"]},
{t:"tally",type:"tapall",q:"Tap valid tally counts (groups of 5 + extras).",pool:["||||","|||","||||| extra","||","|"],correct:["||||","|||","||","|"]},
{t:"tally",type:"enterval",q:"How many marks in two full groups of 5?",a:10},
{t:"tally",type:"enterval",q:"|||| ||| equals which number?",a:8},
{t:"tally",q:"Tally |||| |||| represents?",o:["10","9","8","11"],a:0}
],
[
{t:"pictograph",q:"If 1 picture = 2 apples and there are 4 pictures, total apples?",o:["8","6","4","10"],a:0},
{t:"pictograph",q:"1 star = 5 books. 3 stars means?",o:["15","10","20","8"],a:0},
{t:"pictograph",q:"1 ball = 1 child. 7 balls show how many kids?",o:["7","6","8","5"],a:0},
{t:"pictograph",type:"tf",q:"In a pictograph each picture stands for a fixed value.",a:true},
{t:"pictograph",type:"tf",q:"If 1 face = 4 kids, 5 faces = 25 kids.",a:false},
{t:"pictograph",type:"fillin",q:"1 flower = 3 plants. 6 flowers show ___ plants.",blanks:["18"]},
{t:"pictograph",type:"tapall",q:"If 1 image=2 items, tap correct totals.",pool:["3 images=6","4 images=8","5 images=12","2 images=4","6 images=10"],correct:["3 images=6","4 images=8","2 images=4"]},
{t:"pictograph",type:"enterval",q:"1 cup = 5 ml. 6 cups = how many ml?",a:30},
{t:"pictograph",type:"enterval",q:"1 face = 10 kids. 4 faces = how many kids?",a:40},
{t:"pictograph",q:"1 box = 4 sweets. 5 boxes = ?",o:["20","16","24","12"],a:0}
],
[
{t:"bar",q:"In a bar chart, the longest bar shows?",o:["Most","Least","Equal","None"],a:0},
{t:"bar",q:"Bars show: A=8, B=5, C=10. Which is most?",o:["C","A","B","Same"],a:0},
{t:"bar",q:"Bars: red=3, blue=7. How many more blue than red?",o:["4","3","5","2"],a:0},
{t:"bar",type:"tf",q:"The shortest bar shows the least.",a:true},
{t:"bar",type:"tf",q:"Bar charts can only use vertical bars.",a:false},
{t:"bar",type:"fillin",q:"If A=4 and B=9, B is ___ more than A.",blanks:["5"]},
{t:"bar",type:"tapall",q:"From bars dog=6, cat=4, cow=2, bird=8 — tap totals greater than 4.",pool:["dog=6","cat=4","cow=2","bird=8"],correct:["dog=6","bird=8"]},
{t:"bar",type:"enterval",q:"Class likes: ice=10, cake=6. How many more like ice?",a:4},
{t:"bar",type:"enterval",q:"Bars: A=12, B=7. Difference?",a:5},
{t:"bar",q:"Bars: red=5, blue=5, green=8. Most votes?",o:["green","red","blue","none"],a:0}
],
[
{t:"most-least",q:"Fruit count: mango=8, apple=4, orange=10. Least is?",o:["apple","mango","orange","equal"],a:0},
{t:"most-least",q:"Pets: dog=5, cat=7, fish=3. Most pets?",o:["cat","dog","fish","none"],a:0},
{t:"most-least",q:"Sports: cricket=12, kabaddi=6, hockey=4. Most popular?",o:["cricket","kabaddi","hockey","equal"],a:0},
{t:"most-least",type:"tf",q:"If A=6 and B=6, both are equal.",a:true},
{t:"most-least",type:"tf",q:"Least means highest count.",a:false},
{t:"most-least",type:"fillin",q:"Among 5, 9, 3, 7, the least number is ___.",blanks:["3"]},
{t:"most-least",type:"tapall",q:"Tap categories with at least 5 votes.",pool:["A=4","B=5","C=6","D=2","E=7"],correct:["B=5","C=6","E=7"]},
{t:"most-least",type:"enterval",q:"Counts 9, 4, 7, 2. Difference between most and least?",a:7},
{t:"most-least",type:"enterval",q:"Most: cricket=15, football=9. How many more cricket fans?",a:6},
{t:"most-least",q:"Colors: red=2, blue=8, green=5. Least is?",o:["red","blue","green","equal"],a:0}
],
[
{t:"reading",q:"Tally |||| || for apples means?",o:["7","6","8","5"],a:0},
{t:"reading",q:"1 picture = 5. 4 pictures total?",o:["20","15","25","10"],a:0},
{t:"reading",q:"Bar chart shows class size 30. If boys=18, girls=?",o:["12","13","14","10"],a:0},
{t:"reading",type:"tf",q:"A pictograph uses pictures to show data.",a:true},
{t:"reading",type:"tf",q:"Tally is used only for big numbers above 100.",a:false},
{t:"reading",type:"fillin",q:"If 1 face=2 kids and there are 9 faces, total kids ___.",blanks:["18"]},
{t:"reading",type:"tapall",q:"Tap chart types used for data.",pool:["bar","tally","pictograph","square","triangle"],correct:["bar","tally","pictograph"]},
{t:"reading",type:"enterval",q:"1 ball=4 goals. 5 balls show?",a:20},
{t:"reading",type:"enterval",q:"Tally |||| |||| ||| equals?",a:13},
{t:"reading",q:"Class: 10 girls, 8 boys. Total kids?",o:["18","16","20","17"],a:0}
]
],
pro:[
[
{t:"compare-data",q:"Pictograph: 1 mango=3. Anu has 4 mangoes drawn, Riya has 6. Riya has how many more mangoes?",o:["6","9","4","12"],a:0},
{t:"compare-data",q:"Bars: A=14, B=9, C=11. Order from least to most?",o:["B,C,A","A,B,C","C,B,A","A,C,B"],a:0},
{t:"compare-data",q:"Tally for boys |||| |||| ||, girls |||| |||| ||||. Difference?",o:["3","2","4","5"],a:0},
{t:"compare-data",type:"tf",q:"If 1 sym=5 and Anu has 6 sym, she has 30 items.",a:true},
{t:"compare-data",type:"tf",q:"Pictograph value depends on the key chosen.",a:true},
{t:"compare-data",type:"fillin",q:"1 face=4 kids. 7 faces=___ kids.",blanks:["28"]},
{t:"compare-data",type:"tapall",q:"From counts 12, 8, 15, 6, 10 — tap those above 9.",pool:["12","8","15","6","10"],correct:["12","15","10"]},
{t:"compare-data",type:"enterval",q:"1 image=6. 9 images=?",a:54},
{t:"compare-data",type:"enterval",q:"A=20, B=13. How many more in A?",a:7},
{t:"compare-data",q:"1 star=10. Anu drew 4 stars, Riya 7. Difference in books?",o:["30","20","40","10"],a:0}
],
[
{t:"two-step",q:"1 face=5 kids. Class A has 6 faces, Class B has 4. Total kids?",o:["50","40","45","55"],a:0},
{t:"two-step",q:"Bars: blue=12, red=8, green=5. Total of all?",o:["25","20","27","23"],a:0},
{t:"two-step",q:"Tallies: Mon=|||| |||, Tue=|||| ||. Combined sales?",o:["15","14","16","13"],a:0},
{t:"two-step",type:"tf",q:"If A=10, B=8, C=6, total = 24.",a:true},
{t:"two-step",type:"tf",q:"If 1 sym=5 and total syms=6, items = 25.",a:false},
{t:"two-step",type:"fillin",q:"1 cup=4 ml. Mon 3 cups, Tue 5 cups; total ___ ml.",blanks:["32"]},
{t:"two-step",type:"tapall",q:"Tap totals matching: 1 sym=3, syms shown.",pool:["4 syms=12","5 syms=15","6 syms=20","2 syms=6","7 syms=21"],correct:["4 syms=12","5 syms=15","2 syms=6","7 syms=21"]},
{t:"two-step",type:"enterval",q:"Bars A=15, B=12, C=8. Total?",a:35},
{t:"two-step",type:"enterval",q:"1 face=5. 4 faces + 3 faces = how many kids?",a:35},
{t:"two-step",q:"Mon=10 books, Tue=14, Wed=6. Total books sold?",o:["30","28","32","26"],a:0}
],
[
{t:"missing",q:"Pictograph total kids=40, 1 face=5. Faces shown?",o:["8","7","9","10"],a:0},
{t:"missing",q:"Bars: A=12, B=?, total=30. B=?",o:["18","16","20","14"],a:0},
{t:"missing",q:"Tally total 17. ||||  ||||  shows 10. How many more marks needed?",o:["7","6","8","5"],a:0},
{t:"missing",type:"tf",q:"If 1 sym=4 and 6 syms shown, items=24.",a:true},
{t:"missing",type:"tf",q:"If A+B=20 and A=8, B=14.",a:false},
{t:"missing",type:"fillin",q:"1 face=10 kids. To show 50 kids you need ___ faces.",blanks:["5"]},
{t:"missing",type:"tapall",q:"Tap pairs (key, syms) giving total 24.",pool:["3,8","4,6","2,12","6,4","5,5"],correct:["3,8","4,6","2,12","6,4"]},
{t:"missing",type:"enterval",q:"Class total 35; 20 boys. Girls?",a:15},
{t:"missing",type:"enterval",q:"Total bars sum=50. A=18, B=12. C=?",a:20},
{t:"missing",q:"1 star=6. Total kids 36. Stars drawn?",o:["6","5","7","8"],a:0}
],
[
{t:"interpret",q:"Most liked fruit: mango 18, apple 10, banana 12. Difference between most and least?",o:["8","6","10","4"],a:0},
{t:"interpret",q:"Books read: Mon 5, Tue 7, Wed 3, Thu 9. Total?",o:["24","22","26","20"],a:0},
{t:"interpret",q:"1 face=3 students. Faces: A=6, B=4. Total students in A and B?",o:["30","24","18","36"],a:0},
{t:"interpret",type:"tf",q:"If A has 25 votes and B has 15, A leads by 10.",a:true},
{t:"interpret",type:"tf",q:"Average = sum divided by groups.",a:true},
{t:"interpret",type:"fillin",q:"Counts 10,12,8,5. Sum is ___.",blanks:["35"]},
{t:"interpret",type:"tapall",q:"From scores 4,7,3,9,6,2 — tap scores above 5.",pool:["4","7","3","9","6","2"],correct:["7","9","6"]},
{t:"interpret",type:"enterval",q:"1 cup=5 ml. Drinks shown: 4 cups + 6 cups. Total ml?",a:50},
{t:"interpret",type:"enterval",q:"Mon=12 sweets, Tue=8, Wed=15. Total?",a:35},
{t:"interpret",q:"Most votes 30, least 12. Difference?",o:["18","20","16","12"],a:0}
],
[
{t:"mixed",q:"1 sym=4. 7 syms = items?",o:["28","24","32","21"],a:0},
{t:"mixed",q:"Tally |||| |||| |||| represents?",o:["15","12","18","10"],a:0},
{t:"mixed",q:"Bars: A=16, B=9, C=12. Total?",o:["37","35","40","32"],a:0},
{t:"mixed",type:"tf",q:"In tally, slash across 4 marks makes 5.",a:true},
{t:"mixed",type:"tf",q:"Pictograph cannot show fractions of a picture.",a:false},
{t:"mixed",type:"fillin",q:"1 face=6 kids. 4 faces=___ kids.",blanks:["24"]},
{t:"mixed",type:"tapall",q:"Tap correct readings: 1 face=5.",pool:["3 faces=15","4 faces=20","2 faces=12","5 faces=25","6 faces=30"],correct:["3 faces=15","4 faces=20","5 faces=25","6 faces=30"]},
{t:"mixed",type:"enterval",q:"Tally |||| |||| |||| ||| equals?",a:18},
{t:"mixed",type:"enterval",q:"Class 50 students; 28 girls. Boys?",a:22},
{t:"mixed",q:"Most fans cricket=22, hockey=8. Difference?",o:["14","12","16","10"],a:0}
]
]
},
14: { title:'Rupees and Paise',
beginner:[
[
{t:"basics",q:"How many paise make 1 rupee?",o:["100","50","10","1000"],a:0},
{t:"basics",q:"Symbol for rupee?",o:["Rs.","$","P","Rp"],a:0},
{t:"basics",q:"50 paise + 50 paise = ?",o:["1 rupee","2 rupees","50 paise","100 rupees"],a:0},
{t:"basics",type:"tf",q:"1 rupee = 100 paise.",a:true},
{t:"basics",type:"tf",q:"50 paise is more than 1 rupee.",a:false},
{t:"basics",type:"fillin",q:"___ paise make one rupee.",blanks:["100"]},
{t:"basics",type:"tapall",q:"Tap Indian coin/note values.",pool:["1","2","5","10","20"],correct:["1","2","5","10","20"]},
{t:"basics",type:"enterval",q:"How many 50-paise coins make 1 rupee?",a:2},
{t:"basics",type:"enterval",q:"How many 25-paise coins make 1 rupee?",a:4},
{t:"basics",q:"Which is more: 99 paise or 1 rupee?",o:["1 rupee","99 paise","Same","Cannot say"],a:0}
],
[
{t:"add",q:"₹5 + ₹3 = ?",o:["₹8","₹7","₹9","₹6"],a:0},
{t:"add",q:"₹20 + ₹10 = ?",o:["₹30","₹25","₹40","₹15"],a:0},
{t:"add",q:"₹50 + ₹50 = ?",o:["₹100","₹150","₹200","₹50"],a:0},
{t:"add",type:"tf",q:"₹25 + ₹25 = ₹50.",a:true},
{t:"add",type:"tf",q:"₹10 + ₹15 = ₹30.",a:false},
{t:"add",type:"fillin",q:"₹40 + ₹35 = ₹___.",blanks:["75"]},
{t:"add",type:"tapall",q:"Tap pairs that sum to ₹100.",pool:["50+50","60+40","70+20","80+20","30+70"],correct:["50+50","60+40","80+20","30+70"]},
{t:"add",type:"enterval",q:"₹120 + ₹80 = ₹?",a:200},
{t:"add",type:"enterval",q:"₹65 + ₹35 = ₹?",a:100},
{t:"add",q:"₹100 + ₹150 = ?",o:["₹250","₹200","₹300","₹150"],a:0}
],
[
{t:"subtract",q:"₹10 - ₹4 = ?",o:["₹6","₹5","₹7","₹4"],a:0},
{t:"subtract",q:"₹50 - ₹20 = ?",o:["₹30","₹25","₹35","₹20"],a:0},
{t:"subtract",q:"₹100 - ₹40 = ?",o:["₹60","₹50","₹70","₹40"],a:0},
{t:"subtract",type:"tf",q:"₹80 - ₹30 = ₹50.",a:true},
{t:"subtract",type:"tf",q:"₹70 - ₹25 = ₹50.",a:false},
{t:"subtract",type:"fillin",q:"₹90 - ₹45 = ₹___.",blanks:["45"]},
{t:"subtract",type:"tapall",q:"Tap subtractions that equal ₹20.",pool:["50-30","40-20","60-40","30-15","100-80"],correct:["50-30","40-20","60-40","100-80"]},
{t:"subtract",type:"enterval",q:"₹200 - ₹85 = ₹?",a:115},
{t:"subtract",type:"enterval",q:"₹150 - ₹75 = ₹?",a:75},
{t:"subtract",q:"₹500 - ₹100 = ?",o:["₹400","₹300","₹450","₹350"],a:0}
],
[
{t:"shop",q:"Pencil ₹5, eraser ₹3. Total?",o:["₹8","₹7","₹9","₹6"],a:0},
{t:"shop",q:"Notebook ₹25, pen ₹15. Total?",o:["₹40","₹35","₹45","₹30"],a:0},
{t:"shop",q:"Toy ₹60, book ₹30. Total?",o:["₹90","₹80","₹100","₹70"],a:0},
{t:"shop",type:"tf",q:"If a chocolate costs ₹10 and you give ₹50, change is ₹40.",a:true},
{t:"shop",type:"tf",q:"Bag ₹120 + bottle ₹40 = ₹150.",a:false},
{t:"shop",type:"fillin",q:"Pen ₹15 and book ₹35 cost ₹___ together.",blanks:["50"]},
{t:"shop",type:"tapall",q:"Tap items totaling ₹100 with chocolate (₹40) — pool of partners.",pool:["pen ₹60","candy ₹50","book ₹70","cake ₹60","toy ₹80"],correct:["pen ₹60","cake ₹60"]},
{t:"shop",type:"enterval",q:"Bat ₹150 + ball ₹50 = ₹?",a:200},
{t:"shop",type:"enterval",q:"Lunch ₹80 + juice ₹20 = ₹?",a:100},
{t:"shop",q:"Apple ₹10 each. 5 apples cost?",o:["₹50","₹40","₹60","₹45"],a:0}
],
[
{t:"change",q:"Buy ₹15 item with ₹20. Change?",o:["₹5","₹10","₹15","₹4"],a:0},
{t:"change",q:"Buy ₹40 item with ₹50. Change?",o:["₹10","₹15","₹20","₹5"],a:0},
{t:"change",q:"Buy ₹70 item with ₹100. Change?",o:["₹30","₹20","₹40","₹35"],a:0},
{t:"change",type:"tf",q:"Pay ₹50 for ₹35 item. Change is ₹15.",a:true},
{t:"change",type:"tf",q:"Pay ₹100 for ₹85 item. Change is ₹25.",a:false},
{t:"change",type:"fillin",q:"Pay ₹200 for ₹175 item. Change is ₹___.",blanks:["25"]},
{t:"change",type:"tapall",q:"Tap correct changes given pay-cost pairs.",pool:["50-30=20","100-60=40","20-15=5","30-25=5","100-90=15"],correct:["50-30=20","100-60=40","20-15=5","30-25=5"]},
{t:"change",type:"enterval",q:"Pay ₹500 for ₹460 item. Change ₹?",a:40},
{t:"change",type:"enterval",q:"Pay ₹100 for ₹55 item. Change ₹?",a:45},
{t:"change",q:"Pay ₹50 for ₹47 item. Change?",o:["₹3","₹5","₹2","₹4"],a:0}
]
],
pro:[
[
{t:"two-step-shop",q:"Pencil ₹8, eraser ₹4. Pay ₹20. Change?",o:["₹8","₹6","₹10","₹4"],a:0},
{t:"two-step-shop",q:"2 toffees ₹5 each + chips ₹15. Total?",o:["₹25","₹20","₹30","₹35"],a:0},
{t:"two-step-shop",q:"Buy 3 pens at ₹12 each. Pay ₹50. Change?",o:["₹14","₹16","₹12","₹10"],a:0},
{t:"two-step-shop",type:"tf",q:"4 chocolates at ₹10 each cost ₹40.",a:true},
{t:"two-step-shop",type:"tf",q:"5 candies at ₹6 cost ₹35.",a:false},
{t:"two-step-shop",type:"fillin",q:"3 books at ₹40 each cost ₹___.",blanks:["120"]},
{t:"two-step-shop",type:"tapall",q:"Tap totals if each item is ₹20.",pool:["3 items=60","4 items=80","5 items=100","2 items=40","6 items=110"],correct:["3 items=60","4 items=80","5 items=100","2 items=40"]},
{t:"two-step-shop",type:"enterval",q:"4 mangoes at ₹15 each = ₹?",a:60},
{t:"two-step-shop",type:"enterval",q:"Pay ₹200 for 6 items at ₹25 each. Change ₹?",a:50},
{t:"two-step-shop",q:"5 ice creams at ₹20 each. Pay ₹150. Change?",o:["₹50","₹40","₹60","₹30"],a:0}
],
[
{t:"missing",q:"Pen costs ₹? . 4 pens cost ₹40. Each pen?",o:["₹10","₹8","₹12","₹15"],a:0},
{t:"missing",q:"You paid ₹100 and got back ₹35. Item cost?",o:["₹65","₹70","₹75","₹60"],a:0},
{t:"missing",q:"3 sweets cost ₹45. One sweet?",o:["₹15","₹12","₹18","₹10"],a:0},
{t:"missing",type:"tf",q:"If 5 toffees cost ₹25, each costs ₹5.",a:true},
{t:"missing",type:"tf",q:"If 4 books cost ₹100, one book costs ₹30.",a:false},
{t:"missing",type:"fillin",q:"6 candies cost ₹60. Each costs ₹___.",blanks:["10"]},
{t:"missing",type:"tapall",q:"Tap correct unit prices (n items, total).",pool:["3 for ₹15 = ₹5","4 for ₹40 = ₹10","2 for ₹14 = ₹7","5 for ₹40 = ₹9","6 for ₹30 = ₹5"],correct:["3 for ₹15 = ₹5","4 for ₹40 = ₹10","2 for ₹14 = ₹7","6 for ₹30 = ₹5"]},
{t:"missing",type:"enterval",q:"7 pens cost ₹140. One pen ₹?",a:20},
{t:"missing",type:"enterval",q:"Pay ₹500, change ₹120. Item ₹?",a:380},
{t:"missing",q:"5 oranges cost ₹75. One orange?",o:["₹15","₹12","₹20","₹10"],a:0}
],
[
{t:"compare",q:"₹120 or ₹95 — which is more?",o:["₹120","₹95","Same","Cannot say"],a:0},
{t:"compare",q:"50 paise vs 1 rupee, more?",o:["1 rupee","50 paise","Same","Both are different"],a:0},
{t:"compare",q:"₹3 + ₹2 vs ₹4. Bigger?",o:["₹3 + ₹2","₹4","Same","Cannot say"],a:0},
{t:"compare",type:"tf",q:"₹125 is more than ₹98.",a:true},
{t:"compare",type:"tf",q:"₹0.50 (50 paise) equals ₹5.",a:false},
{t:"compare",type:"fillin",q:"Of ₹150 and ₹105, the bigger is ₹___.",blanks:["150"]},
{t:"compare",type:"tapall",q:"Tap amounts greater than ₹50.",pool:["₹45","₹60","₹100","₹35","₹55"],correct:["₹60","₹100","₹55"]},
{t:"compare",type:"enterval",q:"Riya ₹85, Anu ₹120. Anu has ₹? more.",a:35},
{t:"compare",type:"enterval",q:"Toy ₹220 vs Toy ₹175. Difference ₹?",a:45},
{t:"compare",q:"Bigger amount: ₹250 or ₹205?",o:["₹250","₹205","Same","Cannot say"],a:0}
],
[
{t:"word-pro",q:"Anu has ₹100. Buys book ₹45 and pen ₹15. Money left?",o:["₹40","₹30","₹50","₹35"],a:0},
{t:"word-pro",q:"Mom buys 2 kg apples at ₹80/kg + 1 kg orange ₹60. Total?",o:["₹220","₹200","₹240","₹180"],a:0},
{t:"word-pro",q:"Riya saved ₹20 each week for 5 weeks. Total saving?",o:["₹100","₹90","₹110","₹80"],a:0},
{t:"word-pro",type:"tf",q:"Buying 3 chocolates at ₹15 and pay ₹50: change ₹5.",a:true},
{t:"word-pro",type:"tf",q:"3 ice creams at ₹25 cost ₹85.",a:false},
{t:"word-pro",type:"fillin",q:"Bag ₹150 + bottle ₹70 + tiffin ₹80 = ₹___ total.",blanks:["300"]},
{t:"word-pro",type:"tapall",q:"Tap items affordable with ₹50.",pool:["pen ₹20","book ₹60","candy ₹15","toy ₹45","cake ₹80"],correct:["pen ₹20","candy ₹15","toy ₹45"]},
{t:"word-pro",type:"enterval",q:"4 erasers at ₹6 + 2 pens at ₹13. Total ₹?",a:50},
{t:"word-pro",type:"enterval",q:"Pay ₹500 for groceries ₹385. Change ₹?",a:115},
{t:"word-pro",q:"Daily pocket money ₹15. Saved 7 days. Total?",o:["₹105","₹100","₹110","₹95"],a:0}
],
[
{t:"mixed",q:"₹250 + ₹150 - ₹100 = ?",o:["₹300","₹250","₹350","₹200"],a:0},
{t:"mixed",q:"5 toffees ₹4 each + 3 toffees ₹5 each. Total?",o:["₹35","₹30","₹40","₹25"],a:0},
{t:"mixed",q:"Half of ₹200 + ₹50 = ?",o:["₹150","₹125","₹175","₹100"],a:0},
{t:"mixed",type:"tf",q:"Half of ₹100 = ₹50.",a:true},
{t:"mixed",type:"tf",q:"₹450 - ₹275 = ₹185.",a:false},
{t:"mixed",type:"fillin",q:"₹300 - ₹125 = ₹___.",blanks:["175"]},
{t:"mixed",type:"tapall",q:"Tap totals exactly ₹100.",pool:["₹40+₹60","₹70+₹30","₹50+₹40","₹80+₹20","₹25+₹65"],correct:["₹40+₹60","₹70+₹30","₹80+₹20"]},
{t:"mixed",type:"enterval",q:"₹125 + ₹275 = ₹?",a:400},
{t:"mixed",type:"enterval",q:"Pay ₹500 for items ₹185 + ₹165. Change ₹?",a:150},
{t:"mixed",q:"Buy 4 books at ₹35 each. Total?",o:["₹140","₹130","₹150","₹120"],a:0}
]
]
}
},

// ═══════════════════════════════════════════════════════════════
// GRADE 4 · Chapter 1 · Building with Bricks
// ═══════════════════════════════════════════════════════════════
4: { 1: { title:'Building with Bricks',
beginner:[
[
{t:"Brick Shape",q:"A standard brick is shaped like a?",o:["Cuboid","Cube","Cylinder","Sphere"],a:0},
{t:"Brick Shape",type:"enterval",q:"How many faces does a brick have?",a:6},
{t:"Brick Shape",type:"enterval",q:"How many edges does a brick have?",a:12},
{t:"Brick Shape",type:"enterval",q:"How many corners on a brick?",a:8},
{t:"Brick Shape",type:"fillin",q:"A brick has ___ pairs of equal faces.",blanks:["3"]},
{t:"Brick Shape",type:"tf",q:"All faces of a brick are rectangles.",a:true},
{t:"Brick Shape",type:"tapall",q:"Tap all shapes a brick-stack could look like.",pool:["Cuboid","Sphere","Cube","Cone","Tall cuboid","Cylinder"],correct:["Cuboid","Cube","Tall cuboid"]},
{t:"Brick Shape",q:"Opposite faces of a brick are?",o:["Equal","Different","Curved","Slanted"],a:0},
{t:"Brick Shape",type:"tf",q:"A brick's top face is a rectangle.",a:true},
{t:"Brick Shape",type:"tf",q:"A brick has curved surfaces.",a:false}
],
[
{t:"Faces",type:"tf",q:"Top and bottom faces of a brick are equal in size.",a:true},
{t:"Faces",type:"enterval",q:"A brick has 3 pairs of faces. Total faces?",a:6},
{t:"Faces",type:"enterval",q:"Faces meeting at a corner of a brick?",a:3},
{t:"Faces",type:"enterval",q:"Edges meeting at a corner of a brick?",a:3},
{t:"Faces",q:"Largest face area of a 10×5×3 brick?",o:["50","30","15","100"],a:0},
{t:"Faces",type:"fillin",q:"Smallest face area of a 10×5×3 brick is ___ cm².",blanks:["15"]},
{t:"Faces",type:"tapall",q:"Tap all true facts about a (non-cube) brick.",pool:["6 faces","4 faces","12 edges","8 edges","3 pairs of faces","All faces triangular"],correct:["6 faces","12 edges","3 pairs of faces"]},
{t:"Faces",type:"tf",q:"Two bricks placed side by side share exactly 1 face.",a:true},
{t:"Faces",q:"A cube brick's faces are all?",o:["Squares","Rectangles","Circles","Triangles"],a:0},
{t:"Faces",type:"enterval",q:"Rectangular faces in a cuboid brick?",a:6}
],
[
{t:"Walls",q:"In a strong wall, adjacent rows are?",o:["Shifted","Exactly aligned","Upside down","Random"],a:0},
{t:"Walls",type:"tf",q:"A wall is usually built in rows.",a:true},
{t:"Walls",type:"enterval",q:"10 bricks/row × 5 rows — total bricks?",a:50},
{t:"Walls",type:"enterval",q:"3 bricks stacked, each 7 cm — total height (cm)?",a:21},
{t:"Walls",type:"fillin",q:"2 bricks end-to-end (each 20 cm) — total ___ cm.",blanks:["40"]},
{t:"Walls",type:"enterval",q:"A 4-row wall with 6 bricks/row — total bricks?",a:24},
{t:"Walls",type:"enterval",q:"A 3 × 4 grid of bricks — total?",a:12},
{t:"Walls",type:"tapall",q:"Tap all facts that make a brick wall stronger.",pool:["Staggered rows","Perfect alignment","Repeating pattern","Mixed brick sizes","Mortar between","Randomness"],correct:["Staggered rows","Repeating pattern","Mortar between"]},
{t:"Walls",type:"tf",q:"Pattern of repeating rows is just called a repeating pattern.",a:true},
{t:"Walls",type:"enterval",q:"5 rows × 8 bricks each = ?",a:40}
],
[
{t:"Counting",type:"enterval",q:"Each brick is 25 cm long; how many in 1 metre?",a:4},
{t:"Counting",type:"enterval",q:"100 bricks needed, 35 used. Left?",a:65},
{t:"Counting",type:"enterval",q:"A 4×4 square wall uses how many bricks?",a:16},
{t:"Counting",type:"fillin",q:"120 bricks, used 85 — ___ remain.",blanks:["35"]},
{t:"Counting",type:"enterval",q:"200 bricks in 10 rows — per row?",a:20},
{t:"Counting",type:"tf",q:"5 rows × 8 bricks = 40 bricks total.",a:true},
{t:"Counting",type:"enterval",q:"12 bricks per row, 7 rows — total?",a:84},
{t:"Counting",type:"tapall",q:"Tap all cases where you have EXTRA bricks.",pool:["Need 80, have 100","Need 120, have 100","Need 50, have 50","Need 200, have 220","Need 60, have 40"],correct:["Need 80, have 100","Need 200, have 220"]},
{t:"Counting",type:"enterval",q:"Wall needs 80, have 60. Short by?",a:20},
{t:"Counting",type:"tf",q:"If you need 50 and have exactly 50, extras = 0.",a:true}
],
[
{t:"Sizes",type:"enterval",q:"5 bricks of 20 cm side-by-side — total cm?",a:100},
{t:"Sizes",type:"enterval",q:"Brick 30×10×5 cm — largest face area (cm²)?",a:300},
{t:"Sizes",type:"enterval",q:"Brick 25×10×5 — top face area (cm²)?",a:250},
{t:"Sizes",type:"fillin",q:"Brick 10×5×3 — smallest face area is ___ cm².",blanks:["15"]},
{t:"Sizes",type:"tf",q:"Brick 20×10×5 — middle-size face area is 100 cm².",a:true},
{t:"Sizes",type:"enterval",q:"Each brick 0.25 m; 4 end-to-end = ? m",a:1},
{t:"Sizes",type:"enterval",q:"4 bricks stacked, each 7 cm — total cm?",a:28},
{t:"Sizes",type:"enterval",q:"3 bricks end-to-end, each 22 cm — total cm?",a:66},
{t:"Sizes",type:"tapall",q:"Tap all calculations that equal 100.",pool:["25 × 4","10 × 10","50 × 2","5 × 25","200 ÷ 2","12 × 9"],correct:["25 × 4","10 × 10","50 × 2","5 × 25","200 ÷ 2"]},
{t:"Sizes",type:"enterval",q:"₹5/brick × 100 bricks = ₹?",a:500}
]
],
pro:[
[
{t:"Volume",type:"enterval",q:"Volume of a 20×10×5 brick (cm³)?",a:1000},
{t:"Volume",type:"enterval",q:"Volume of a 10×10×10 cube (cm³)?",a:1000},
{t:"Volume",type:"enterval",q:"Volume of 30×20×10 cuboid (cm³)?",a:6000},
{t:"Volume",type:"fillin",q:"Volume formula: l × b × ___.",blanks:["h"]},
{t:"Volume",type:"enterval",q:"Volume of 5×5×5 cube?",a:125},
{t:"Volume",type:"enterval",q:"Volume of 15×10×4 cuboid?",a:600},
{t:"Volume",type:"tf",q:"Volume of an 8×8×1 slab is 64.",a:true},
{t:"Volume",type:"enterval",q:"Volume of 2×3×4 block?",a:24},
{t:"Volume",type:"tapall",q:"Tap all cuboid dimensions whose volume is 1000.",pool:["10×10×10","5×5×40","20×10×5","8×5×25","4×4×4","2×5×100"],correct:["10×10×10","5×5×40","20×10×5","8×5×25","2×5×100"]},
{t:"Volume",type:"enterval",q:"1 litre = how many cm³?",a:1000}
],
[
{t:"Surface",type:"enterval",q:"Surface area of a 2×2×2 cube?",a:24},
{t:"Surface",type:"enterval",q:"Surface of a 3×3×3 cube?",a:54},
{t:"Surface",type:"enterval",q:"Surface of a 1×1×1 cube?",a:6},
{t:"Surface",type:"enterval",q:"Surface of 2×3×4 cuboid?",a:52},
{t:"Surface",q:"Surface area formula for a cuboid?",o:["2(lb+bh+hl)","l·b·h","l+b+h","4(l+b+h)"],a:0},
{t:"Surface",type:"enterval",q:"Surface of 5×5×5 cube?",a:150},
{t:"Surface",type:"tf",q:"A cube's surface area is the sum of all 6 face areas.",a:true},
{t:"Surface",type:"fillin",q:"If brick top = 10×5 = 50, bottom face area is also ___.",blanks:["50"]},
{t:"Surface",type:"tapall",q:"Tap all cubes with surface area ≥ 100.",pool:["2×2×2 (24)","5×5×5 (150)","4×4×4 (96)","10×10×10 (600)","3×3×3 (54)","1×1×1 (6)"],correct:["5×5×5 (150)","10×10×10 (600)"]},
{t:"Surface",type:"enterval",q:"Number of faces on a cube?",a:6}
],
[
{t:"Edges",type:"enterval",q:"Cube has 12 edges × 5 cm each — total cm?",a:60},
{t:"Edges",type:"enterval",q:"Cuboid 3×2×1 — total edge length?",a:24},
{t:"Edges",type:"fillin",q:"Cube total edge length = 36. Each edge = ___.",blanks:["3"]},
{t:"Edges",type:"enterval",q:"Edges meeting at a corner of a cube?",a:3},
{t:"Edges",type:"enterval",q:"Cuboid 10×5×2 — total edge length?",a:68},
{t:"Edges",type:"tf",q:"A cuboid has 12 edges.",a:true},
{t:"Edges",type:"enterval",q:"Total edge length of 2×2×2 cube?",a:24},
{t:"Edges",type:"enterval",q:"How many 'long' edges in a rectangular box?",a:4},
{t:"Edges",type:"tapall",q:"Tap all true facts about a cube.",pool:["12 edges","8 edges","6 faces","4 vertices","8 vertices","All edges equal"],correct:["12 edges","6 faces","8 vertices","All edges equal"]},
{t:"Edges",type:"enterval",q:"Cube with edge 1 — total edge length?",a:12}
],
[
{t:"BricksArea",type:"enterval",q:"Brick top 20×10 (200 cm²). Bricks for 1 m² (10000 cm²)?",a:50},
{t:"BricksArea",type:"enterval",q:"Brick top 25×10 = 250 cm². Bricks per m²?",a:40},
{t:"BricksArea",type:"enterval",q:"Brick top 10×5 = 50 cm². Bricks per 1000 cm²?",a:20},
{t:"BricksArea",type:"enterval",q:"Wall 2 m wide; each brick 25 cm. Bricks per row?",a:8},
{t:"BricksArea",type:"fillin",q:"Wall 2 m tall; brick 10 cm tall → ___ rows.",blanks:["20"]},
{t:"BricksArea",type:"tf",q:"Wall area 100 cm² ÷ brick face 20 cm² = 5 bricks.",a:true},
{t:"BricksArea",type:"enterval",q:"Bricks per row × rows = total. 10 × 5 = ?",a:50},
{t:"BricksArea",q:"If you double wall length, bricks needed?",o:["Doubles","Halves","Same","Quadruples"],a:0},
{t:"BricksArea",type:"enterval",q:"40 bricks across × 25 tall = total?",a:1000},
{t:"BricksArea",type:"tapall",q:"Tap all wall sizes requiring MORE than 50 bricks (using 20×10 bricks).",pool:["1 m²","2 m²","0.5 m²","3 m²","1.5 m²","0.25 m²"],correct:["2 m²","3 m²","1.5 m²"]}
],
[
{t:"WallBuild",type:"enterval",q:"24 bricks; rectangles a×b (a≤b): 1×24, 2×12, 3×8, 4×6. Count?",a:4},
{t:"WallBuild",type:"enterval",q:"8 bricks/row × 6 rows — total?",a:48},
{t:"WallBuild",type:"fillin",q:"From 120 bricks, 3 walls × 35 each used — ___ left.",blanks:["15"]},
{t:"WallBuild",type:"tf",q:"Pattern 7, 6, 7, 6... row 4 has 6 bricks.",a:true},
{t:"WallBuild",type:"enterval",q:"Wall 2 × 3 bricks — total?",a:6},
{t:"WallBuild",type:"enterval",q:"Need 250; have 300 — spare?",a:50},
{t:"WallBuild",type:"enterval",q:"12 bricks/row × 10 rows — total?",a:120},
{t:"WallBuild",type:"tapall",q:"Tap all situations that need MORE than 100 bricks.",pool:["Wall 10×10","Wall 5×5","Wall 12×12","Wall 7×7","Wall 20×6","Wall 8×8"],correct:["Wall 12×12","Wall 20×6"]},
{t:"WallBuild",type:"enterval",q:"₹4/brick × 200 bricks = ₹?",a:800},
{t:"WallBuild",type:"enterval",q:"20 bricks × 5 cm each — wall height (cm)?",a:100}
]
]
},
// ─── Grade 4 · Chapter 2 · Long and Short (Length) ───
2: { title:'Long and Short',
beginner:[
[
{t:"Units",q:"Smallest unit of length?",o:["mm (millimetre)","cm","m","km"],a:0},
{t:"Units",type:"tf",q:"100 cm equals 1 metre.",a:true},
{t:"Units",type:"enterval",q:"1,000 m = how many km?",a:1},
{t:"Units",type:"enterval",q:"1 m = ? cm",a:100},
{t:"Units",type:"enterval",q:"1 km = ? m",a:1000},
{t:"Units",type:"fillin",q:"1 cm = ___ mm.",blanks:["10"]},
{t:"Units",q:"Unit for a football field length?",o:["m (metres)","mm","cm","km"],a:0},
{t:"Units",type:"tapall",q:"Tap all units of LENGTH.",pool:["mm","cm","m","km","kg","ml"],correct:["mm","cm","m","km"]},
{t:"Units",q:"Unit for pencil length?",o:["cm","km","m","mm"],a:0},
{t:"Units",type:"tf",q:"An ant is best measured in mm.",a:true}
],
[
{t:"Convert",type:"enterval",q:"200 cm = ? m",a:2},
{t:"Convert",type:"enterval",q:"3 m = ? cm",a:300},
{t:"Convert",type:"enterval",q:"5 km = ? m",a:5000},
{t:"Convert",type:"enterval",q:"10 mm = ? cm",a:1},
{t:"Convert",type:"fillin",q:"50 mm = ___ cm.",blanks:["5"]},
{t:"Convert",type:"enterval",q:"4 m = ? cm",a:400},
{t:"Convert",type:"tf",q:"1,000 m = 1 km.",a:true},
{t:"Convert",type:"enterval",q:"2,000 m = ? km",a:2},
{t:"Convert",type:"tapall",q:"Tap all pairs that are EQUAL.",pool:["1 km = 1000 m","100 cm = 1 m","10 mm = 1 cm","1 m = 10 cm","500 m = 0.5 km","1 cm = 100 mm"],correct:["1 km = 1000 m","100 cm = 1 m","10 mm = 1 cm","500 m = 0.5 km"]},
{t:"Convert",type:"enterval",q:"6 cm = ? mm",a:60}
],
[
{t:"Tools",q:"Tool to measure cloth?",o:["Measuring tape","Thermometer","Scale (weight)","Stopwatch"],a:0},
{t:"Tools",type:"tf",q:"A ruler is a good tool for measuring your notebook.",a:true},
{t:"Tools",type:"fillin",q:"Smallest division on a ruler is usually ___.",blanks:["mm"]},
{t:"Tools",q:"School ruler is usually how long?",o:["15 or 30 cm","1 m","1 mm","1 km"],a:0},
{t:"Tools",type:"tapall",q:"Tap all LENGTH-measuring tools.",pool:["Ruler","Measuring tape","Thermometer","Weighing scale","Odometer","Stopwatch"],correct:["Ruler","Measuring tape","Odometer"]},
{t:"Tools",type:"tf",q:"1 cm is longer than 1 m.",a:false},
{t:"Tools",type:"tf",q:"1 m equals 100 cm.",a:true},
{t:"Tools",type:"tf",q:"1 km = 1,000 m.",a:true},
{t:"Tools",q:"Tool to measure road distance in a vehicle?",o:["Odometer","Clock","Ruler","Tape"],a:0},
{t:"Tools",q:"Tool for map distance?",o:["Ruler with scale","Clock","Weighing scale","Protractor"],a:0}
],
[
{t:"Compare",type:"tf",q:"5 m equals 500 cm.",a:true},
{t:"Compare",q:"Longer: 2 km or 1,500 m?",o:["2 km","1,500 m","Equal","Cannot tell"],a:0},
{t:"Compare",type:"tf",q:"30 cm is shorter than 2 m.",a:true},
{t:"Compare",q:"Longer: 100 mm or 1 cm?",o:["100 mm","1 cm","Equal","Cannot tell"],a:0},
{t:"Compare",type:"tf",q:"5 km and 5,000 m are equal.",a:true},
{t:"Compare",type:"fillin",q:"1 m is ___ than 90 cm (longer/shorter).",blanks:["longer"]},
{t:"Compare",type:"tf",q:"3 m > 280 cm.",a:true},
{t:"Compare",type:"tf",q:"250 mm < 30 cm.",a:true},
{t:"Compare",type:"tapall",q:"Tap all lengths equal to or bigger than 1 m.",pool:["50 cm","100 cm","150 cm","1 m","0.5 m","2 m"],correct:["100 cm","150 cm","1 m","2 m"]},
{t:"Compare",q:"Longer: 1.5 m or 100 cm?",o:["1.5 m","100 cm","Equal","Cannot tell"],a:0}
],
[
{t:"Real",q:"Approx length of an adult finger?",o:["~7 cm","~7 mm","~7 m","~7 km"],a:0},
{t:"Real",type:"tf",q:"A pencil is usually about 15 cm long.",a:true},
{t:"Real",q:"Approx height of a door?",o:["~2 m","~2 cm","~2 mm","~2 km"],a:0},
{t:"Real",type:"fillin",q:"A school bus is about 10 ___ long.",blanks:["m"]},
{t:"Real",q:"Approx height of an adult?",o:["~1.7 m","~1.7 cm","~17 m","~170 km"],a:0},
{t:"Real",type:"tf",q:"An ant is about 5 mm long.",a:true},
{t:"Real",q:"Approx 1 lap of a sports track?",o:["~400 m","~400 cm","~400 mm","~400 km"],a:0},
{t:"Real",type:"tapall",q:"Tap all objects best measured in CENTIMETRES.",pool:["Pencil","Car","Ant","Phone","Road","Finger"],correct:["Pencil","Phone","Finger"]},
{t:"Real",type:"tf",q:"A book's thickness is usually about 2 m.",a:false},
{t:"Real",q:"Approx height of a chair?",o:["~90 cm","~9 cm","~9 m","~9 mm"],a:0}
]
],
pro:[
[
{t:"Convert+",type:"enterval",q:"3.5 m = ? cm",a:350},
{t:"Convert+",q:"1,500 m in km and m?",o:["1 km 500 m","15 km","150 m","1,500 km"],a:0},
{t:"Convert+",q:"250 cm in m and cm?",o:["2 m 50 cm","25 m","2 m 5 cm","250 mm"],a:0},
{t:"Convert+",type:"enterval",q:"2 km 500 m = ? m",a:2500},
{t:"Convert+",type:"enterval",q:"3 m 40 cm = ? cm",a:340},
{t:"Convert+",type:"enterval",q:"7 km = ? m",a:7000},
{t:"Convert+",type:"fillin",q:"75 cm = ___ mm.",blanks:["750"]},
{t:"Convert+",type:"enterval",q:"250 mm = ? cm",a:25},
{t:"Convert+",type:"tf",q:"1,200 m = 1 km 200 m.",a:true},
{t:"Convert+",type:"enterval",q:"8 m 25 cm = ? cm",a:825}
],
[
{t:"Word",type:"enterval",q:"2 pencils × 15 cm each — total cm?",a:30},
{t:"Word",q:"Ribbon 2 m − 50 cm leaves?",o:["1 m 50 cm","2 m 50 cm","50 cm","150 cm only"],a:0},
{t:"Word",type:"enterval",q:"Walk 2 km + 3 km — total km?",a:5},
{t:"Word",type:"fillin",q:"5 students in a line at 50 cm each = ___ m.",blanks:["2.5"]},
{t:"Word",type:"enterval",q:"Rope 10 m − 3 m = ? m",a:7},
{t:"Word",type:"enterval",q:"Square fence 100 m × 4 sides — total m?",a:400},
{t:"Word",type:"enterval",q:"Ravi walks 500 m + 300 m = ? m",a:800},
{t:"Word",type:"enterval",q:"1 step = 50 cm. 20 steps = ? m",a:10},
{t:"Word",type:"enterval",q:"Marathon 42 km − 10 km ran. Left (km)?",a:32},
{t:"Word",type:"tf",q:"Growing from 1 m 20 cm to 1 m 35 cm is 15 cm of growth.",a:true}
],
[
{t:"Estimate",q:"Approx length of a classroom?",o:["~8-10 m","~80 m","~1 m","~1 km"],a:0},
{t:"Estimate",type:"tf",q:"An adult giraffe is roughly 5 m tall.",a:true},
{t:"Estimate",type:"enterval",q:"Estimate 99 cm + 101 cm ≈ ? cm",a:200},
{t:"Estimate",type:"fillin",q:"A rupee coin is about 2 ___ thick.",blanks:["mm"]},
{t:"Estimate",type:"enterval",q:"Home 2 km from school — daily to-and-fro (km)?",a:4},
{t:"Estimate",type:"enterval",q:"Round 249 cm to nearest m?",a:2},
{t:"Estimate",type:"enterval",q:"Round 1,450 m to nearest km?",a:1},
{t:"Estimate",type:"tapall",q:"Tap all things best measured in METRES.",pool:["Classroom","Ant","Elephant trunk","Room height","School bench","Finger"],correct:["Classroom","Elephant trunk","Room height","School bench"]},
{t:"Estimate",q:"Approx length of a school bench?",o:["~1 m","~1 km","~10 m","~10 cm"],a:0},
{t:"Estimate",type:"tf",q:"100 A4 papers stacked are about 1 cm thick.",a:true}
],
[
{t:"AddSub",q:"1 m 20 cm + 2 m 30 cm = ?",o:["3 m 50 cm","3 m 5 cm","5 m","50 cm"],a:0},
{t:"AddSub",type:"tf",q:"3 m − 1 m 50 cm = 1 m 50 cm.",a:true},
{t:"AddSub",q:"2 km + 3 km 500 m = ?",o:["5 km 500 m","5 km","23 km 500 m","6 km"],a:0},
{t:"AddSub",type:"fillin",q:"4 m 25 cm + 2 m 75 cm = ___ m.",blanks:["7"]},
{t:"AddSub",type:"enterval",q:"5 m − 1 m 80 cm = ? cm",a:320},
{t:"AddSub",type:"enterval",q:"1 km 300 m + 2 km 700 m = ? km",a:4},
{t:"AddSub",type:"enterval",q:"3 m 50 cm × 2 = ? m",a:7},
{t:"AddSub",type:"enterval",q:"8 m ÷ 4 = ? m",a:2},
{t:"AddSub",type:"tapall",q:"Tap all results greater than 5 m.",pool:["3 m + 3 m","2 m 50 cm + 2 m","5 m + 10 cm","1 km + 0 m","10 m − 6 m","4 m 50 cm + 2 m"],correct:["3 m + 3 m","5 m + 10 cm","1 km + 0 m","4 m 50 cm + 2 m"]},
{t:"AddSub",q:"6 km − 3 km 250 m = ?",o:["2 km 750 m","3 km 250 m","2 km 250 m","9 km 250 m"],a:0}
],
[
{t:"Apply",type:"enterval",q:"10 paper clips × 3 cm each — total cm?",a:30},
{t:"Apply",type:"enterval",q:"Ribbon 150 cm cut into 3 equal pieces — each cm?",a:50},
{t:"Apply",type:"enterval",q:"Rectangle 5 m × 3 m — perimeter (m)?",a:16},
{t:"Apply",type:"enterval",q:"Square side 2 m — perimeter (m)?",a:8},
{t:"Apply",type:"enterval",q:"Triangle sides 3, 4, 5 m — perimeter (m)?",a:12},
{t:"Apply",type:"fillin",q:"Skipping rope 2 m 50 cm folded in half = ___ cm.",blanks:["125"]},
{t:"Apply",q:"Track 400 m. 3 laps = ?",o:["1 km 200 m","1,000 m","1 km","12 km"],a:0},
{t:"Apply",type:"enterval",q:"Garden 20 m × 10 m — perimeter (m)?",a:60},
{t:"Apply",type:"tapall",q:"Tap all rectangles with perimeter 20 m.",pool:["5 × 5","4 × 6","3 × 7","2 × 8","1 × 9","10 × 0"],correct:["5 × 5","4 × 6","3 × 7","2 × 8","1 × 9"]},
{t:"Apply",type:"tf",q:"In a 5 m × 4 m room, the longer wall is 5 m.",a:true}
]
]
},
3: { title:'A Trip to Bhopal',
beginner:[
[
{t:"Place value",q:"What is the place value of 4 in 4523?",o:["4000","400","40","4"],a:0},
{t:"Read 4-digit",q:"Which is three thousand two hundred ten?",o:["3210","3120","2310","3201"],a:0},
{t:"Compare",q:"Which number is greater: 5678 or 5687?",o:["5687","5678","Both are equal","Cannot tell"],a:0},
{t:"Addition",q:"1234 + 1000 = ?",type:"enterval",a:2234},
{t:"Subtraction",q:"5000 - 1000 = ?",type:"enterval",a:4000},
{t:"True/False",type:"tf",q:"9999 is the largest 4-digit number.",a:true},
{t:"True/False",type:"tf",q:"1000 is a 3-digit number.",a:false},
{t:"Fill in",type:"fillin",q:"The smallest 4-digit number is ___.",blanks:["1000"]},
{t:"Tap all",type:"tapall",q:"Tap all 4-digit numbers.",pool:["234","1500","9000","87","4321","12"],correct:["1500","9000","4321"]},
{t:"Bus tickets",q:"A bus has 2000 seats sold. 500 more are sold. Total?",o:["2500","2050","1500","3000"],a:0}
],
[
{t:"Place value",q:"In 6789, the digit in hundreds place is?",o:["7","6","8","9"],a:0},
{t:"Expanded form",q:"3000 + 400 + 20 + 5 equals?",o:["3425","3452","3245","3524"],a:0},
{t:"Compare",q:"Which is the smallest?",o:["1234","2134","3214","4123"],a:0},
{t:"Train trip",q:"Train travels 1500 km then 200 km. Total km?",type:"enterval",a:1700},
{t:"Subtraction",q:"7500 - 500 = ?",type:"enterval",a:7000},
{t:"True/False",type:"tf",q:"In 4567, the digit 5 is in the tens place.",a:false},
{t:"True/False",type:"tf",q:"3000 + 200 = 3200.",a:true},
{t:"Fill in",type:"fillin",q:"The largest 4-digit number is ___.",blanks:["9999"]},
{t:"Tap all",type:"tapall",q:"Tap numbers between 2000 and 3000.",pool:["1500","2300","2999","3500","2100","1000"],correct:["2300","2999","2100"]},
{t:"Ticket cost",q:"Ticket is rupees 1200. Two tickets cost?",o:["2400","2200","1400","2000"],a:0}
],
[
{t:"Number names",q:"Five thousand six hundred is?",o:["5600","6500","5060","5006"],a:0},
{t:"Place value",q:"The thousands digit in 8421 is?",o:["8","4","2","1"],a:0},
{t:"Compare",q:"Choose the larger number.",o:["6543","6534","wait","again"],a:0},
{t:"Addition",q:"2500 + 300 = ?",type:"enterval",a:2800},
{t:"Subtraction",q:"6000 - 100 = ?",type:"enterval",a:5900},
{t:"True/False",type:"tf",q:"4321 comes before 4322.",a:true},
{t:"True/False",type:"tf",q:"7890 has 9 in the tens place.",a:true},
{t:"Fill in",type:"fillin",q:"The number after 4999 is ___.",blanks:["5000"]},
{t:"Tap all",type:"tapall",q:"Tap odd 4-digit numbers.",pool:["2222","3331","4445","6660","7777","1234"],correct:["3331","4445","7777"]},
{t:"Bhopal trip",q:"From Indore to Bhopal is 200 km. Round trip is?",o:["400","200","100","600"],a:0}
],
[
{t:"Read number",q:"Which is six thousand four hundred fifty?",o:["6450","6045","6540","4650"],a:0},
{t:"Expanded",q:"5000 + 700 + 80 + 1 = ?",o:["5781","5871","5187","5178"],a:0},
{t:"Compare",q:"Smallest 4-digit number with all different digits is?",o:["1023","1234","1000","1100"],a:0},
{t:"Addition",q:"3400 + 600 = ?",type:"enterval",a:4000},
{t:"Subtraction",q:"8500 - 500 = ?",type:"enterval",a:8000},
{t:"True/False",type:"tf",q:"3000 is greater than 2999.",a:true},
{t:"True/False",type:"tf",q:"2222 has the digit 2 four times.",a:true},
{t:"Fill in",type:"fillin",q:"100 less than 5000 is ___.",blanks:["4900"]},
{t:"Tap all",type:"tapall",q:"Tap numbers less than 3000.",pool:["1500","2999","3001","4500","2500","5000"],correct:["1500","2999","2500"]},
{t:"Stations",q:"A train stops at 5 stations going and 5 returning. Total stops?",o:["10","5","15","20"],a:0}
],
[
{t:"Place value",q:"In 9876, the place value of 8 is?",o:["800","80","8","8000"],a:0},
{t:"Compare",q:"Choose the largest.",o:["7654","6754","5764","4765"],a:0},
{t:"Order",q:"Which comes just before 6000?",o:["5999","6001","5990","5900"],a:0},
{t:"Addition",q:"1000 + 1000 + 1000 = ?",type:"enterval",a:3000},
{t:"Subtraction",q:"4500 - 500 = ?",type:"enterval",a:4000},
{t:"True/False",type:"tf",q:"5050 reads as five thousand fifty.",a:true},
{t:"True/False",type:"tf",q:"The number 1001 is even.",a:false},
{t:"Fill in",type:"fillin",q:"In 7234, the hundreds digit is ___.",blanks:["2"]},
{t:"Tap all",type:"tapall",q:"Tap numbers ending in zero.",pool:["1230","4567","2000","3458","5670","1111"],correct:["1230","2000","5670"]},
{t:"Travel money",q:"Ravi has rupees 5000. He spends rupees 2000 on tickets. Left?",o:["3000","2000","7000","1000"],a:0}
]
],
pro:[
[
{t:"Word problem",q:"A bus has 1200 passengers in the morning and 1800 in the evening. Total passengers?",o:["3000","2800","3200","2000"],a:0},
{t:"Word problem",q:"Train fare is rupees 1450. Two passengers pay?",o:["2900","2450","1900","2890"],a:0},
{t:"Compare distance",q:"Bhopal is 700 km, Indore is 600 km. Difference?",o:["100","1300","1000","13"],a:0},
{t:"Two-step",q:"Buy 3 tickets at rupees 1000 each, then pay rupees 200 tax. Total spent?",type:"enterval",a:3200},
{t:"Find missing",q:"____ + 2500 = 5000. Find missing number.",type:"enterval",a:2500},
{t:"True/False",type:"tf",q:"If 2 tickets cost rupees 2400, then 1 ticket costs rupees 1200.",a:true},
{t:"True/False",type:"tf",q:"4500 is 500 more than 5000.",a:false},
{t:"Fill in",type:"fillin",q:"The number 1000 less than 6543 is ___.",blanks:["5543"]},
{t:"Tap all",type:"tapall",q:"Tap distances greater than 500 km.",pool:["200","650","800","450","999","100"],correct:["650","800","999"]},
{t:"Trip cost",q:"Train rupees 1200 plus food rupees 300 plus auto rupees 100. Total?",o:["1600","1500","1400","1700"],a:0}
],
[
{t:"Word problem",q:"Stadium has 5500 seats. 3200 are filled. Empty seats?",o:["2300","2200","8700","2400"],a:0},
{t:"Two-step",q:"Anita has rupees 2500. She earns rupees 1500 more then spends rupees 1000. She has?",o:["3000","4000","2000","5000"],a:0},
{t:"Compare",q:"Bhopal lake is 9 km long, river is 1500 m. Which is longer?",o:["lake","river","both same","cannot tell"],a:0},
{t:"Find missing",q:"6000 - ___ = 4500. Find missing.",type:"enterval",a:1500},
{t:"Two-step add",q:"Add 2300, 1400, and 800 together.",type:"enterval",a:4500},
{t:"True/False",type:"tf",q:"5000 minus 2500 equals 2500.",a:true},
{t:"True/False",type:"tf",q:"The largest number using digits 3,1,8,2 is 8321.",a:true},
{t:"Fill in",type:"fillin",q:"Smallest 4-digit number using 5,0,2,1 is ___.",blanks:["1025"]},
{t:"Tap all",type:"tapall",q:"Tap numbers that round to 4000 (nearest 1000).",pool:["3500","4400","3999","4501","3700","4499"],correct:["3500","4400","3999","3700","4499"]},
{t:"Books",q:"A library has 3500 books. 1200 are borrowed. Remaining?",o:["2300","2200","4700","2500"],a:0}
],
[
{t:"Tickets",q:"Bus has 50 seats. 6 buses go. Total seats?",o:["300","250","350","56"],a:0},
{t:"Two-step",q:"Family of 5 each pay rupees 600 for entry. They tip rupees 100. Total spent?",o:["3100","3000","2900","3500"],a:0},
{t:"Distance",q:"Bhopal to Sanchi is 46 km. There and back?",o:["92","46","23","100"],a:0},
{t:"Find missing",q:"3500 + ___ = 7000.",type:"enterval",a:3500},
{t:"Add",q:"Add 1234 + 1234 + 1234.",type:"enterval",a:3702},
{t:"True/False",type:"tf",q:"If a journey costs rupees 2750, two journeys cost rupees 5500.",a:true},
{t:"True/False",type:"tf",q:"6789 - 1789 = 4000.",a:false},
{t:"Fill in",type:"fillin",q:"Number that is 100 more than 3456 is ___.",blanks:["3556"]},
{t:"Tap all",type:"tapall",q:"Tap numbers between 5000 and 6000.",pool:["4999","5500","5999","6001","5050","6500"],correct:["5500","5999","5050"]},
{t:"Snacks",q:"Snacks cost rupees 75. Three friends share equally. Each pays?",o:["25","75","225","30"],a:0}
],
[
{t:"Word problem",q:"School trip has 124 students. 6 teachers go. Total people?",o:["130","124","118","136"],a:0},
{t:"Two-step",q:"Hotel costs rupees 2500 per night. Stay for 3 nights, get rupees 500 discount. Pay?",o:["7000","7500","6500","2500"],a:0},
{t:"Compare distance",q:"Place A is 4567 km. Place B is 4576 km. Which is farther?",o:["B","A","same","cannot say"],a:0},
{t:"Find missing",q:"___ - 1500 = 2500.",type:"enterval",a:4000},
{t:"Add",q:"What is 2222 + 3333?",type:"enterval",a:5555},
{t:"True/False",type:"tf",q:"5000 + 5000 equals ten thousand.",a:true},
{t:"True/False",type:"tf",q:"In 3478 the place value of 4 is 40.",a:false},
{t:"Fill in",type:"fillin",q:"Sum of 1500 and 2500 is ___.",blanks:["4000"]},
{t:"Tap all",type:"tapall",q:"Tap differences equal to 1000.",pool:["3000-2000","5000-4000","8000-7500","9000-8000","6000-5500","4000-2500"],correct:["3000-2000","5000-4000","9000-8000"]},
{t:"Auto fare",q:"Auto charges rupees 25 per km. Trip is 8 km. Pay?",o:["200","175","225","250"],a:0}
],
[
{t:"Visitors",q:"Museum had 1234 visitors Monday and 1567 Tuesday. Total?",o:["2801","2701","2901","2811"],a:0},
{t:"Two-step",q:"Buy 4 books at rupees 250 each plus a bag for rupees 300. Total cost?",o:["1300","1000","1200","1400"],a:0},
{t:"Compare",q:"5678 is how much greater than 5078?",o:["600","6","60","6000"],a:0},
{t:"Find missing",q:"2000 + 2000 + ___ = 6500.",type:"enterval",a:2500},
{t:"Subtract",q:"7000 - 3500 = ?",type:"enterval",a:3500},
{t:"True/False",type:"tf",q:"A 4-digit number always has 4 digits.",a:true},
{t:"True/False",type:"tf",q:"3456 + 0 = 3456.",a:true},
{t:"Fill in",type:"fillin",q:"In 4567, swap thousands and ones digits to get ___.",blanks:["7564"]},
{t:"Tap all",type:"tapall",q:"Tap valid 4-digit numbers using each digit once.",pool:["1234","1123","4567","2222","3210","5500"],correct:["1234","4567","3210"]},
{t:"Trip plan",q:"Plan: bus rupees 800, food rupees 400, hotel rupees 1800. Total?",o:["3000","2800","3200","2900"],a:0}
]
]
},
4: { title:'Tick-Tick-Tick',
beginner:[
[
{t:"Read clock",q:"How many minutes in 1 hour?",o:["60","30","100","24"],a:0},
{t:"Read clock",q:"The minute hand at 3 means how many minutes?",o:["15","3","30","45"],a:0},
{t:"AM PM",q:"7 in the morning is written as?",o:["7 AM","7 PM","19:00","7 noon"],a:0},
{t:"Hours",q:"How many hours in a day?",o:["24","12","60","30"],a:0},
{t:"True/False",type:"tf",q:"Noon is 12 PM.",a:true},
{t:"True/False",type:"tf",q:"Midnight is 12 PM.",a:false},
{t:"Fill in",type:"fillin",q:"Half past 4 means ___ minutes after 4.",blanks:["30"]},
{t:"Tap all",type:"tapall",q:"Tap morning (AM) times.",pool:["8 AM","2 PM","6 AM","9 PM","10 AM","11 PM"],correct:["8 AM","6 AM","10 AM"]},
{t:"Enter",q:"How many minutes in half an hour?",type:"enterval",a:30},
{t:"24-hour",q:"6 PM in 24-hour clock is?",o:["18:00","6:00","16:00","20:00"],a:0}
],
[
{t:"Read clock",q:"Quarter past 5 means?",o:["5:15","5:45","4:45","5:30"],a:0},
{t:"Read clock",q:"Quarter to 7 means?",o:["6:45","7:15","7:45","6:15"],a:0},
{t:"AM PM",q:"School starts at 8 in the morning. Write the time.",o:["8 AM","8 PM","20:00","12 AM"],a:0},
{t:"Elapsed",q:"From 3 PM to 5 PM is how many hours?",o:["2","3","5","8"],a:0},
{t:"True/False",type:"tf",q:"There are 7 days in a week.",a:true},
{t:"True/False",type:"tf",q:"1 hour equals 100 minutes.",a:false},
{t:"Fill in",type:"fillin",q:"15 minutes is ___ quarter of an hour.",blanks:["1"]},
{t:"Tap all",type:"tapall",q:"Tap evening/night (PM) times.",pool:["7 PM","9 AM","11 PM","6 AM","8 PM","5 AM"],correct:["7 PM","11 PM","8 PM"]},
{t:"Enter",q:"How many minutes in 2 hours?",type:"enterval",a:120},
{t:"24-hour",q:"3 PM in 24-hour clock is?",o:["15:00","3:00","13:00","23:00"],a:0}
],
[
{t:"Read clock",q:"Hour hand between 4 and 5, minute on 6. Time?",o:["4:30","5:30","6:30","4:06"],a:0},
{t:"5-min",q:"Minute hand on 2 means how many minutes?",o:["10","2","20","12"],a:0},
{t:"AM PM",q:"Lunch at 1 PM means?",o:["1 in afternoon","1 at night","13 in morning","1 AM"],a:0},
{t:"Hours",q:"Which is morning?",o:["6 AM","6 PM","11 PM","9 PM"],a:0},
{t:"True/False",type:"tf",q:"60 minutes equal 1 hour.",a:true},
{t:"True/False",type:"tf",q:"5:45 is the same as quarter to 6.",a:true},
{t:"Fill in",type:"fillin",q:"Minute hand goes around the clock in ___ minutes.",blanks:["60"]},
{t:"Tap all",type:"tapall",q:"Tap times that are exact hour.",pool:["6:00","6:15","7:00","8:30","9:00","10:45"],correct:["6:00","7:00","9:00"]},
{t:"Enter",q:"How many half-hours in 2 hours?",type:"enterval",a:4},
{t:"24-hour",q:"Midnight in 24-hour clock is?",o:["00:00","12:00","24:00","12:30"],a:0}
],
[
{t:"Daily schedule",q:"You wake at 7 AM and leave at 8 AM. Time at home?",o:["1 hour","2 hours","30 min","45 min"],a:0},
{t:"Read clock",q:"Minute hand on 9 means how many minutes?",o:["45","9","15","30"],a:0},
{t:"Elapsed",q:"From 9 AM to 12 noon is?",o:["3 hours","2 hours","4 hours","1 hour"],a:0},
{t:"AM PM",q:"Sunset at 6 in the evening is?",o:["6 PM","6 AM","18 AM","12 PM"],a:0},
{t:"True/False",type:"tf",q:"30 minutes is half an hour.",a:true},
{t:"True/False",type:"tf",q:"4:30 is half past 4.",a:true},
{t:"Fill in",type:"fillin",q:"The clock has ___ numbers from 1 to 12.",blanks:["12"]},
{t:"Tap all",type:"tapall",q:"Tap times in afternoon.",pool:["1 PM","8 AM","3 PM","5 AM","4 PM","11 PM"],correct:["1 PM","3 PM","4 PM"]},
{t:"Enter",q:"Minutes from 4:00 to 4:45?",type:"enterval",a:45},
{t:"24-hour",q:"9 AM in 24-hour clock is?",o:["09:00","21:00","19:00","9 PM"],a:0}
],
[
{t:"Read clock",q:"Quarter past means how many minutes after the hour?",o:["15","30","45","5"],a:0},
{t:"Read clock",q:"Half past 8 is the same as?",o:["8:30","8:15","9:30","7:30"],a:0},
{t:"Elapsed",q:"School from 9 AM to 3 PM lasts how many hours?",o:["6","5","4","3"],a:0},
{t:"AM PM",q:"Breakfast at 7:30 in the morning is?",o:["7:30 AM","7:30 PM","19:30","12 PM"],a:0},
{t:"True/False",type:"tf",q:"There are 2 hands on a clock face.",a:false},
{t:"True/False",type:"tf",q:"15 + 15 + 15 + 15 minutes equals 1 hour.",a:true},
{t:"Fill in",type:"fillin",q:"From 5:00 to 5:30 is ___ minutes.",blanks:["30"]},
{t:"Tap all",type:"tapall",q:"Tap quarter-hour positions for minute hand.",pool:["12","3","5","6","9","11"],correct:["12","3","6","9"]},
{t:"Enter",q:"Hours from 10 AM to 4 PM?",type:"enterval",a:6},
{t:"24-hour",q:"10 PM in 24-hour clock is?",o:["22:00","10:00","20:00","12:00"],a:0}
]
],
pro:[
[
{t:"Elapsed",q:"Riya starts study at 4:15 PM, ends at 5:45 PM. How long?",o:["1 hour 30 min","1 hour","2 hours","45 min"],a:0},
{t:"Two-step",q:"Train leaves 7:30 AM, journey 3 hours. Arrival?",o:["10:30 AM","9:30 AM","11:30 AM","10 PM"],a:0},
{t:"24-hour",q:"15:45 in regular time is?",o:["3:45 PM","5:45 AM","1:45 PM","3:45 AM"],a:0},
{t:"Find missing",q:"School lasts 6 hours, ends at 2 PM. Started at? (hour only, e.g. 8)",type:"enterval",a:8},
{t:"Daily total",q:"Sleep 9 hr, school 6 hr, play 2 hr. Total?",type:"enterval",a:17},
{t:"True/False",type:"tf",q:"From 11 AM to 1 PM is 2 hours.",a:true},
{t:"True/False",type:"tf",q:"6:50 PM is the same as 18:50.",a:true},
{t:"Fill in",type:"fillin",q:"From 3:20 to 4:05 is ___ minutes.",blanks:["45"]},
{t:"Tap all",type:"tapall",q:"Tap times equal to 18:00 in 12-hour.",pool:["6 PM","6 AM","18:00 hours","Six PM","Sunrise","Noon"],correct:["6 PM","18:00 hours","Six PM"]},
{t:"Bus arrival",q:"Bus due at 10:25 AM but late by 20 min. Arrives at?",o:["10:45 AM","10:05 AM","10:25 AM","11:25 AM"],a:0}
],
[
{t:"Schedule",q:"Movie starts 6:30 PM, runs 2 hr 15 min. Ends at?",o:["8:45 PM","8:30 PM","9:00 PM","8:15 PM"],a:0},
{t:"Two-step",q:"Cricket match starts 9 AM and lasts 7 hours. Ends at?",o:["4 PM","2 PM","5 PM","16 AM"],a:0},
{t:"24-hour",q:"21:00 in 12-hour is?",o:["9 PM","9 AM","11 PM","12 AM"],a:0},
{t:"Find missing",q:"From 8:30 to ____ is 2 hours. Hour part?",type:"enterval",a:10},
{t:"Total min",q:"3 classes of 40 minutes each. Total minutes?",type:"enterval",a:120},
{t:"True/False",type:"tf",q:"There are 1440 minutes in a day.",a:true},
{t:"True/False",type:"tf",q:"4:50 is closer to 5:00 than to 4:00.",a:true},
{t:"Fill in",type:"fillin",q:"Half of 60 minutes is ___ minutes.",blanks:["30"]},
{t:"Tap all",type:"tapall",q:"Tap durations longer than 1 hour.",pool:["75 min","30 min","2 hr","45 min","90 min","20 min"],correct:["75 min","2 hr","90 min"]},
{t:"Daily plan",q:"Wake 6 AM, breakfast at 7 AM. Time gap?",o:["1 hour","30 min","2 hours","15 min"],a:0}
],
[
{t:"Elapsed",q:"Bus at 7:50 AM, school at 8:20 AM. Travel time?",o:["30 min","20 min","1 hour","50 min"],a:0},
{t:"Two-step",q:"Birthday 4 PM, ends 7 PM. Cake at 5 PM. Time after cake to end?",o:["2 hr","1 hr","3 hr","30 min"],a:0},
{t:"24-hour",q:"Noon in 24-hour is?",o:["12:00","00:00","24:00","11:00"],a:0},
{t:"Find missing",q:"Class lasts 45 minutes, started 10:30. Ends at minute?",type:"enterval",a:15},
{t:"Total",q:"5 lessons of 30 minutes each total minutes?",type:"enterval",a:150},
{t:"True/False",type:"tf",q:"3:15 is quarter past 3.",a:true},
{t:"True/False",type:"tf",q:"At 12:00 noon both hands point to 12.",a:true},
{t:"Fill in",type:"fillin",q:"From 11 AM to 2 PM is ___ hours.",blanks:["3"]},
{t:"Tap all",type:"tapall",q:"Tap times before 12 noon.",pool:["10 AM","2 PM","6 AM","11 AM","5 PM","8 AM"],correct:["10 AM","6 AM","11 AM","8 AM"]},
{t:"TV show",q:"TV show 7 PM to 8:30 PM. Length?",o:["1 hr 30 min","2 hr","1 hr","30 min"],a:0}
],
[
{t:"Elapsed",q:"Started homework at 5:10 PM, finished 6:00 PM. Time taken?",o:["50 min","60 min","40 min","30 min"],a:0},
{t:"Two-step",q:"Game lasts 90 min. Starts 4:30 PM. Ends at?",o:["6:00 PM","5:30 PM","6:30 PM","5:00 PM"],a:0},
{t:"24-hour",q:"19:30 in 12-hour is?",o:["7:30 PM","9:30 PM","7:30 AM","11:30 PM"],a:0},
{t:"Find missing",q:"Sleep from 9 PM to 6 AM. Hours?",type:"enterval",a:9},
{t:"Find missing",q:"Lunch 1:00, dinner 8:00. Hours between?",type:"enterval",a:7},
{t:"True/False",type:"tf",q:"After 11 PM comes 12 AM (midnight).",a:true},
{t:"True/False",type:"tf",q:"Quarter to 9 means 9:15.",a:false},
{t:"Fill in",type:"fillin",q:"Half past 7 PM in 24-hour clock is ___.",blanks:["19:30"]},
{t:"Tap all",type:"tapall",q:"Tap correct conversions to PM time.",pool:["13:00 = 1 PM","20:00 = 8 PM","15:00 = 5 PM","14:00 = 2 PM","18:00 = 6 PM","17:00 = 9 PM"],correct:["13:00 = 1 PM","20:00 = 8 PM","14:00 = 2 PM","18:00 = 6 PM"]},
{t:"Schedule",q:"Yoga 6 AM-7 AM, breakfast 7-7:30, school 8 AM. Free time before school?",o:["30 min","1 hour","15 min","45 min"],a:0}
],
[
{t:"Elapsed",q:"Bus journey 1 hour 45 min. Started 2:15 PM. Reach at?",o:["4:00 PM","3:00 PM","4:15 PM","3:45 PM"],a:0},
{t:"Two-step",q:"Train at 14:30. You reach at 14:50. Late by?",o:["20 min","30 min","50 min","10 min"],a:0},
{t:"24-hour",q:"22:15 in 12-hour is?",o:["10:15 PM","10:15 AM","12:15 PM","2:15 PM"],a:0},
{t:"Find missing",q:"Movie ends 9 PM after 2 hours. Started at? (hour only)",type:"enterval",a:7},
{t:"Daily",q:"Total minutes from 3:00 PM to 4:30 PM?",type:"enterval",a:90},
{t:"True/False",type:"tf",q:"From 8 AM to 8 PM is 12 hours.",a:true},
{t:"True/False",type:"tf",q:"Hour hand moves faster than minute hand.",a:false},
{t:"Fill in",type:"fillin",q:"24-hour form of 5:00 PM is ___.",blanks:["17:00"]},
{t:"Tap all",type:"tapall",q:"Tap durations equal to 1 hour.",pool:["60 min","30 min","quarter hour","sixty minutes","half hour","one hour"],correct:["60 min","sixty minutes","one hour"]},
{t:"Class plan",q:"Math 9-10 AM, English 10-11 AM, lunch 12-1 PM. Free time 11 AM to noon?",o:["1 hour","30 min","2 hours","15 min"],a:0}
]
]
},
5: { title:'The Way The World Looks',
beginner:[
[
{t:"Views",q:"What do we call the view from above?",o:["Top view","Side view","Front view","Back view"],a:0},
{t:"Views",q:"View when you look directly at object from front?",o:["Front view","Top view","Side view","Bottom view"],a:0},
{t:"Directions",q:"Sun rises in which direction?",o:["East","West","North","South"],a:0},
{t:"Directions",q:"Sun sets in?",o:["West","East","North","South"],a:0},
{t:"True/False",type:"tf",q:"There are 4 main directions.",a:true},
{t:"True/False",type:"tf",q:"North is opposite to West.",a:false},
{t:"Fill in",type:"fillin",q:"Opposite direction of North is ___.",blanks:["South"]},
{t:"Tap all",type:"tapall",q:"Tap the four main directions.",pool:["North","Up","South","East","Down","West"],correct:["North","South","East","West"]},
{t:"Enter",q:"How many main directions are there?",type:"enterval",a:4},
{t:"Mirror",q:"Your mirror image of right hand looks like?",o:["Left hand","Right hand","Foot","Head"],a:0}
],
[
{t:"Views",q:"A coin from top looks like?",o:["Circle","Square","Triangle","Star"],a:0},
{t:"Views",q:"A book from front looks like?",o:["Rectangle","Circle","Triangle","Cone"],a:0},
{t:"Directions",q:"Opposite of East is?",o:["West","North","South","Up"],a:0},
{t:"Maps",q:"Symbol for railway station on a map is usually?",o:["A train","A car","A house","A tree"],a:0},
{t:"True/False",type:"tf",q:"A map shows places from above.",a:true},
{t:"True/False",type:"tf",q:"East is to the right when you face North.",a:true},
{t:"Fill in",type:"fillin",q:"On a map, top usually means ___ direction.",blanks:["North"]},
{t:"Tap all",type:"tapall",q:"Tap things that look round from top.",pool:["Plate","Book","Coin","Pencil","Wheel","Brick"],correct:["Plate","Coin","Wheel"]},
{t:"Enter",q:"How many letters do North, South, East, West have together?",type:"enterval",a:18},
{t:"Mirror",q:"Letter A in a mirror still looks like?",o:["A","B","E","Z"],a:0}
],
[
{t:"Views",q:"View from one side of a box?",o:["Side view","Top view","Front view","Map view"],a:0},
{t:"Views",q:"A ball from any side looks like?",o:["Circle","Square","Triangle","Line"],a:0},
{t:"Directions",q:"You face North. South is behind. What is to your left?",o:["West","East","North","South"],a:0},
{t:"Maps",q:"On Indian maps, top of the page usually shows?",o:["North","South","East","West"],a:0},
{t:"True/False",type:"tf",q:"A mirror image flips left and right.",a:true},
{t:"True/False",type:"tf",q:"From top view a cube looks like a triangle.",a:false},
{t:"Fill in",type:"fillin",q:"A round table from above looks like a ___.",blanks:["circle"]},
{t:"Tap all",type:"tapall",q:"Tap things on a typical school map.",pool:["Classroom","Field","Library","Cloud","Office","Star"],correct:["Classroom","Field","Library","Office"]},
{t:"Enter",q:"How many sides does a square map of a field have?",type:"enterval",a:4},
{t:"Mirror",q:"Mirror image of letter B is?",o:["Reversed B","Same B","D","P"],a:0}
],
[
{t:"Views",q:"A pyramid from front looks like?",o:["Triangle","Circle","Square","Rectangle"],a:0},
{t:"Views",q:"A pencil from side looks like?",o:["Long thin shape","Circle","Square","Star"],a:0},
{t:"Directions",q:"Face East. North is to your?",o:["Left","Right","Back","Front"],a:0},
{t:"Maps",q:"Place where you find books on a school map?",o:["Library","Kitchen","Field","Toilet"],a:0},
{t:"True/False",type:"tf",q:"A map is smaller than the real area.",a:true},
{t:"True/False",type:"tf",q:"All maps must be drawn in colour.",a:false},
{t:"Fill in",type:"fillin",q:"A circle from the top, side and front always looks like a ___.",blanks:["circle"]},
{t:"Tap all",type:"tapall",q:"Tap directions on a compass.",pool:["NE","Up","NW","SW","Side","SE"],correct:["NE","NW","SW","SE"]},
{t:"Enter",q:"A cube has how many faces (sides)?",type:"enterval",a:6},
{t:"Mirror",q:"In mirror, the word OK looks?",o:["Reversed","Same","Upside down","Bigger"],a:0}
],
[
{t:"Views",q:"A bottle from the top often looks like?",o:["Circle","Triangle","Square","Star"],a:0},
{t:"Views",q:"A house from front shows?",o:["Door and windows","Roof from above","Empty floor","Sky"],a:0},
{t:"Directions",q:"Face South. East is to your?",o:["Left","Right","Behind","Front"],a:0},
{t:"Maps",q:"Symbol for tree on a map is usually?",o:["A small tree","A car","A house","A ladder"],a:0},
{t:"True/False",type:"tf",q:"On most maps, right side is East.",a:true},
{t:"True/False",type:"tf",q:"You can see top, front, and side views of one object.",a:true},
{t:"Fill in",type:"fillin",q:"A ___ tells you direction.",blanks:["compass"]},
{t:"Tap all",type:"tapall",q:"Tap shapes you might see from top of a building.",pool:["Square","Rectangle","Circle","Pyramid","L-shape","Triangle"],correct:["Square","Rectangle","Circle","L-shape","Triangle"]},
{t:"Enter",q:"How many directions are there in NE, NW, SE, SW combined?",type:"enterval",a:4},
{t:"Mirror",q:"Mirror image of digit 8 is?",o:["8","3","E","B"],a:0}
]
],
pro:[
[
{t:"Views compare",q:"Which 3D shape looks like a circle from top and rectangle from side?",o:["Cylinder","Cube","Cone","Sphere"],a:0},
{t:"Views",q:"From top a cone looks like a circle. From side it looks like?",o:["Triangle","Square","Star","Rectangle"],a:0},
{t:"Directions two-step",q:"Walk North then turn right. Now you face?",o:["East","West","South","North"],a:0},
{t:"Map reading",q:"School is North of home. To go school from home you walk?",o:["North","South","East","West"],a:0},
{t:"True/False",type:"tf",q:"Top view of a cylinder is a circle.",a:true},
{t:"True/False",type:"tf",q:"If you face West, North is on your right.",a:true},
{t:"Fill in",type:"fillin",q:"Between North and East lies the direction ___.",blanks:["NE"]},
{t:"Tap all",type:"tapall",q:"Tap shapes that look the same from all sides.",pool:["Sphere","Cube","Cone","Ball","Pyramid","Marble"],correct:["Sphere","Ball","Marble"]},
{t:"Enter",q:"A cube viewed from top is a square. How many edges does that square have?",type:"enterval",a:4},
{t:"Mirror",q:"In a mirror, a clock showing 3:00 will appear as?",o:["9:00","3:00","6:00","12:00"],a:0}
],
[
{t:"Views compare",q:"A glass viewed from above is a circle. From front it is a?",o:["Rectangle","Triangle","Star","Square"],a:0},
{t:"Direction two-step",q:"Face North, turn right twice. Now facing?",o:["South","East","West","North"],a:0},
{t:"Map",q:"Park is 2 km East of school. Walking from park to school you go?",o:["West","East","North","South"],a:0},
{t:"Find direction",q:"You walk North 3 km then East 4 km. To return home directly you go South-?",o:["West","East","North","Up"],a:0},
{t:"True/False",type:"tf",q:"A map needs a key to explain its symbols.",a:true},
{t:"True/False",type:"tf",q:"Mirror flips top to bottom always.",a:false},
{t:"Fill in",type:"fillin",q:"Direction between South and West is ___.",blanks:["SW"]},
{t:"Tap all",type:"tapall",q:"Tap correct facts about maps.",pool:["Top is North","Has scale","Shows real size","Has key","Shows colours always","Smaller than place"],correct:["Top is North","Has scale","Has key","Smaller than place"]},
{t:"Enter",q:"How many right turns to face same direction again?",type:"enterval",a:4},
{t:"Mirror",q:"Letter that looks the same in a mirror?",o:["A","B","R","G"],a:0}
],
[
{t:"Views",q:"You see a triangle from front and square from top. The shape is?",o:["Pyramid","Cube","Sphere","Cylinder"],a:0},
{t:"Views",q:"Looking at your house from top, the roof is visible. This is a?",o:["Top view","Front view","Side view","Mirror view"],a:0},
{t:"Direction",q:"School East of home. Park West of home. From school to park you cross?",o:["Home","River","Field","Sky"],a:0},
{t:"Two-step",q:"Walk South 5 m then West 5 m. Total distance?",o:["10 m","5 m","25 m","15 m"],a:0},
{t:"True/False",type:"tf",q:"Front view and back view of a cube look the same (a square).",a:true},
{t:"True/False",type:"tf",q:"NE means North-East.",a:true},
{t:"Fill in",type:"fillin",q:"On a map, scale 1 cm = 1 km. 5 cm means ___ km.",blanks:["5"]},
{t:"Tap all",type:"tapall",q:"Tap views that exist for any 3D object.",pool:["Top","Front","Side","Inside","Back","Smell"],correct:["Top","Front","Side","Back"]},
{t:"Enter",q:"How many faces of a cube can you see at one time at most?",type:"enterval",a:3},
{t:"Mirror",q:"Mirror of word DAD reads?",o:["DAD","DUD","BAB","QAQ"],a:0}
],
[
{t:"Views",q:"Side view of a book on table is a thin?",o:["Rectangle","Circle","Square","Triangle"],a:0},
{t:"Views",q:"A football from any view looks like?",o:["Circle","Square","Triangle","Star"],a:0},
{t:"Direction",q:"Face West, turn left. You now face?",o:["South","North","East","West"],a:0},
{t:"Find missing",q:"Class faces East. The blackboard is on the front wall. Which direction is the board?",o:["East","West","North","South"],a:0},
{t:"True/False",type:"tf",q:"A cylinder has two circular ends.",a:true},
{t:"True/False",type:"tf",q:"From a high tower, cars look smaller than they really are.",a:true},
{t:"Fill in",type:"fillin",q:"A drawn picture of a place from above is called a ___.",blanks:["map"]},
{t:"Tap all",type:"tapall",q:"Tap items that look square from top.",pool:["Carrom board","Plate","Chess board","Coin","Tile","Ring"],correct:["Carrom board","Chess board","Tile"]},
{t:"Enter",q:"How many directions: N, S, E, W, NE, NW, SE, SW total?",type:"enterval",a:8},
{t:"Mirror",q:"In mirror, your written name appears?",o:["Reversed","Same","Upside down","Smaller"],a:0}
],
[
{t:"Views",q:"From top, a pencil sharpener box looks like a?",o:["Rectangle","Circle","Triangle","Star"],a:0},
{t:"Views",q:"Side view of a tall tree?",o:["Tall thin","Short wide","Round","Square"],a:0},
{t:"Direction two-step",q:"Walk East 2 km, then South 2 km. To return walk North 2 km then?",o:["West","East","South","Up"],a:0},
{t:"Map reading",q:"On a map of Bhopal, the lake is shown by a blue shape. Blue likely shows?",o:["Water","Road","Building","Tree"],a:0},
{t:"True/False",type:"tf",q:"You can see the top, side and front of one object at the same time.",a:true},
{t:"True/False",type:"tf",q:"Front view of a sphere looks like a triangle.",a:false},
{t:"Fill in",type:"fillin",q:"If you face North, your back is towards ___.",blanks:["South"]},
{t:"Tap all",type:"tapall",q:"Tap things found on a typical city map.",pool:["Roads","Houses","Stars","Lakes","Clouds","Schools"],correct:["Roads","Houses","Lakes","Schools"]},
{t:"Enter",q:"How many sides does the front view of a brick (rectangle) have?",type:"enterval",a:4},
{t:"Mirror",q:"In a mirror image of letter M, it looks like?",o:["M","W","N","Z"],a:0}
]
]
},
6: { title:'The Junk Seller',
beginner:[
[
{t:"money",q:"How many paise make 1 rupee?",o:["100","10","50","1000"],a:0},
{t:"money",type:"tf",q:"₹1 = 100 paise.",a:true},
{t:"money",q:"Which is more: ₹5 or 500 paise?",o:["They are equal","₹5 is more","500 paise is more","Cannot say"],a:0},
{t:"money",type:"fillin",q:"50 paise + 50 paise = ₹ ___",blanks:["1"]},
{t:"money",type:"enterval",q:"How many ₹10 notes make ₹50?",a:5},
{t:"money",q:"Raju sold a bottle for ₹8. He paid ₹3 to buy it. His profit is?",o:["₹5","₹11","₹3","₹8"],a:0},
{t:"money",type:"tf",q:"If you sell something for less than you paid, it is a loss.",a:true},
{t:"money",q:"Per kg price of newspapers is ₹5. Cost of 2 kg?",o:["₹10","₹7","₹5","₹15"],a:0},
{t:"money",type:"tapall",q:"Tap all coins used in India.",pool:["₹1","₹2","₹5","₹10","₹50","₹500"],correct:["₹1","₹2","₹5","₹10"]},
{t:"money",q:"₹20 + ₹30 = ?",o:["₹50","₹40","₹60","₹25"],a:0}
],
[
{t:"money",q:"A junk seller sold scrap for ₹15 and bought it for ₹10. Profit?",o:["₹5","₹25","₹10","₹15"],a:0},
{t:"money",type:"enterval",q:"How many 50 paise coins make ₹2?",a:4},
{t:"money",q:"Cost of 1 kg paper = ₹4. Cost of 3 kg?",o:["₹12","₹7","₹10","₹8"],a:0},
{t:"money",type:"tf",q:"₹100 = 1000 paise.",a:false},
{t:"money",type:"fillin",q:"₹25 + ₹25 = ₹ ___",blanks:["50"]},
{t:"money",q:"A bottle costs ₹2. How many bottles for ₹10?",o:["5","2","10","20"],a:0},
{t:"money",q:"Salma sold 1 kg plastic for ₹8. She had 2 kg. She got?",o:["₹16","₹10","₹8","₹4"],a:0},
{t:"money",type:"tapall",q:"Tap notes in Indian currency.",pool:["₹10","₹20","₹50","₹100","₹3","₹7"],correct:["₹10","₹20","₹50","₹100"]},
{t:"money",q:"₹100 - ₹40 = ?",o:["₹60","₹40","₹140","₹50"],a:0},
{t:"money",type:"tf",q:"Profit = Selling price - Cost price.",a:true}
],
[
{t:"money",type:"enterval",q:"How many ₹5 coins make ₹25?",a:5},
{t:"money",q:"Junk dealer pays ₹6 per kg of newspaper. For 4 kg he pays?",o:["₹24","₹10","₹20","₹12"],a:0},
{t:"money",type:"fillin",q:"Two ₹5 coins = ₹ ___",blanks:["10"]},
{t:"money",q:"A bill shows: 1 kg iron ₹20, 1 kg copper ₹50. Total?",o:["₹70","₹30","₹100","₹50"],a:0},
{t:"money",type:"tf",q:"500 paise = ₹5.",a:true},
{t:"money",q:"Pinky sold a tin for ₹12. She bought it for ₹15. She had?",o:["Loss of ₹3","Profit of ₹3","Profit of ₹12","No profit"],a:0},
{t:"money",q:"₹50 + ₹50 + ₹50 = ?",o:["₹150","₹100","₹200","₹50"],a:0},
{t:"money",type:"tapall",q:"Tap all amounts equal to ₹10.",pool:["10 ₹1 coins","2 ₹5 coins","1 ₹10 note","₹5 coin","20 paise"],correct:["10 ₹1 coins","2 ₹5 coins","1 ₹10 note"]},
{t:"money",type:"enterval",q:"Cost of 1 kg = ₹7. Cost of 5 kg in ₹?",a:35},
{t:"money",q:"Change for ₹100 if you spent ₹85?",o:["₹15","₹25","₹10","₹5"],a:0}
],
[
{t:"money",q:"A junk shop bought 10 kg paper at ₹3 per kg. Total paid?",o:["₹30","₹13","₹20","₹100"],a:0},
{t:"money",type:"fillin",q:"₹1 = ___ paise",blanks:["100"]},
{t:"money",q:"Sold for ₹40, bought for ₹25. Profit?",o:["₹15","₹65","₹25","₹40"],a:0},
{t:"money",type:"tf",q:"10 paise + 90 paise = ₹1.",a:true},
{t:"money",q:"How many ₹2 coins to make ₹20?",o:["10","20","2","5"],a:0},
{t:"money",type:"enterval",q:"Number of ₹100 notes in ₹500?",a:5},
{t:"money",q:"Bill: 2 kg iron ₹50. Per kg?",o:["₹25","₹50","₹100","₹2"],a:0},
{t:"money",type:"tapall",q:"Tap all that show profit.",pool:["Buy ₹10 sell ₹15","Buy ₹20 sell ₹25","Buy ₹30 sell ₹20","Buy ₹5 sell ₹3"],correct:["Buy ₹10 sell ₹15","Buy ₹20 sell ₹25"]},
{t:"money",q:"₹70 - ₹35 = ?",o:["₹35","₹105","₹45","₹30"],a:0},
{t:"money",type:"tf",q:"Loss happens when selling price is less than cost price.",a:true}
],
[
{t:"money",type:"enterval",q:"How many 25 paise coins make ₹1?",a:4},
{t:"money",q:"A dealer pays ₹9 per kg. For 2 kg paper?",o:["₹18","₹11","₹9","₹20"],a:0},
{t:"money",type:"fillin",q:"5 ten-rupee notes = ₹ ___",blanks:["50"]},
{t:"money",q:"Bottle ₹3 each. Cost of 5 bottles?",o:["₹15","₹8","₹10","₹3"],a:0},
{t:"money",type:"tf",q:"A bill shows what you bought and total cost.",a:true},
{t:"money",q:"Junk seller sold paper for ₹50 and bought for ₹30. Profit?",o:["₹20","₹80","₹30","₹50"],a:0},
{t:"money",q:"₹25 + ₹50 = ?",o:["₹75","₹25","₹100","₹50"],a:0},
{t:"money",type:"tapall",q:"Tap all equal to ₹2.",pool:["200 paise","2 ₹1 coins","1 ₹2 coin","₹3","50 paise"],correct:["200 paise","2 ₹1 coins","1 ₹2 coin"]},
{t:"money",type:"enterval",q:"Sold ₹60, bought ₹45. Profit in ₹?",a:15},
{t:"money",q:"Change from ₹50 if you spent ₹38?",o:["₹12","₹22","₹8","₹18"],a:0}
]
],
pro:[
[
{t:"money",q:"Pinky bought 5 kg paper at ₹3 per kg and sold it all at ₹5 per kg. Profit?",o:["₹10","₹5","₹15","₹25"],a:0},
{t:"money",q:"A junk seller has 4 kg iron at ₹20 per kg and 2 kg copper at ₹50 per kg. Total?",o:["₹180","₹70","₹140","₹100"],a:0},
{t:"money",type:"enterval",q:"Bought 10 kg at ₹4. Sold all at ₹7 per kg. Profit in ₹?",a:30},
{t:"money",q:"Salma sold scrap for ₹120 and made ₹40 profit. Cost price?",o:["₹80","₹160","₹40","₹120"],a:0},
{t:"money",type:"fillin",q:"3 kg paper at ₹6 per kg + ₹2 bag = ₹ ___",blanks:["20"]},
{t:"money",type:"tf",q:"If cost is ₹50 and sold at ₹45, there is a loss of ₹5.",a:true},
{t:"money",q:"Bill: 2 bottles ₹4 each + 1 kg paper ₹5. Total?",o:["₹13","₹9","₹14","₹11"],a:0},
{t:"money",type:"tapall",q:"Tap all combinations that make ₹20.",pool:["2 ₹10 notes","4 ₹5 coins","1 ₹10 + 2 ₹5","20 ₹1 coins","3 ₹5 coins"],correct:["2 ₹10 notes","4 ₹5 coins","1 ₹10 + 2 ₹5","20 ₹1 coins"]},
{t:"money",q:"Raju collected 8 kg scrap. Sold at ₹6 per kg. He earned?",o:["₹48","₹14","₹40","₹56"],a:0},
{t:"money",type:"enterval",q:"Cost ₹85, sold ₹100. Profit in ₹?",a:15}
],
[
{t:"money",q:"Junk dealer paid ₹150 for 5 kg iron. Per kg?",o:["₹30","₹150","₹5","₹50"],a:0},
{t:"money",q:"Naveen sold 3 kg plastic at ₹8 per kg and 2 kg paper at ₹5 per kg. Total?",o:["₹34","₹24","₹40","₹13"],a:0},
{t:"money",type:"enterval",q:"Bought ₹240, sold ₹300. Profit in ₹?",a:60},
{t:"money",q:"A bill: 4 kg @ ₹7 per kg. Total amount?",o:["₹28","₹11","₹47","₹21"],a:0},
{t:"money",type:"tf",q:"Cost ₹100 sold ₹90 means a loss of ₹10.",a:true},
{t:"money",type:"fillin",q:"5 kg @ ₹12 per kg = ₹ ___",blanks:["60"]},
{t:"money",q:"Pinky paid with ₹100. Bill ₹73. Change?",o:["₹27","₹37","₹13","₹17"],a:0},
{t:"money",type:"tapall",q:"Tap all that show loss.",pool:["Cost ₹50, sold ₹45","Cost ₹30, sold ₹25","Cost ₹20, sold ₹25","Cost ₹10, sold ₹15"],correct:["Cost ₹50, sold ₹45","Cost ₹30, sold ₹25"]},
{t:"money",q:"6 bottles cost ₹30. Each bottle costs?",o:["₹5","₹6","₹30","₹3"],a:0},
{t:"money",type:"enterval",q:"Sold 5 kg @ ₹9. Total earned in ₹?",a:45}
],
[
{t:"money",q:"Bought scrap for ₹200. Sold half at ₹150 and remaining at ₹100. Profit?",o:["₹50","₹250","₹100","₹150"],a:0},
{t:"money",q:"3 kg iron at ₹25 per kg. Total?",o:["₹75","₹28","₹50","₹100"],a:0},
{t:"money",type:"enterval",q:"7 kg @ ₹4 per kg = ₹?",a:28},
{t:"money",q:"Salma made ₹50 profit selling at ₹200. Cost price?",o:["₹150","₹250","₹100","₹50"],a:0},
{t:"money",type:"fillin",q:"Bought ₹120, sold ₹100. Loss = ₹ ___",blanks:["20"]},
{t:"money",type:"tf",q:"If you sell each at ₹6 and bought each at ₹4, you profit ₹2 per item.",a:true},
{t:"money",q:"Bill: 2 kg @ ₹15, 1 kg @ ₹20. Total?",o:["₹50","₹35","₹40","₹55"],a:0},
{t:"money",type:"tapall",q:"Tap all amounts equal to ₹50.",pool:["5 ₹10 notes","10 ₹5 coins","2 ₹20 + ₹10","₹100","₹25"],correct:["5 ₹10 notes","10 ₹5 coins","2 ₹20 + ₹10"]},
{t:"money",q:"Junk seller bought 12 kg paper at ₹3. Total cost?",o:["₹36","₹15","₹4","₹30"],a:0},
{t:"money",type:"enterval",q:"Sold ₹500, bought ₹350. Profit in ₹?",a:150}
],
[
{t:"money",q:"Per kg price of paper rose from ₹4 to ₹6. For 5 kg, extra earned?",o:["₹10","₹2","₹20","₹30"],a:0},
{t:"money",q:"Raju paid ₹300 for scrap. He sold it for ₹420. Profit?",o:["₹120","₹720","₹100","₹220"],a:0},
{t:"money",type:"enterval",q:"4 kg @ ₹15 per kg = ₹?",a:60},
{t:"money",q:"Bill ₹85. Pinky gave ₹100. Change?",o:["₹15","₹25","₹10","₹20"],a:0},
{t:"money",type:"fillin",q:"Cost ₹60, sold ₹75. Profit = ₹ ___",blanks:["15"]},
{t:"money",type:"tf",q:"3 kg at ₹10 per kg costs ₹30.",a:true},
{t:"money",q:"Salma sold scrap for ₹250 and lost ₹50. Cost price?",o:["₹300","₹200","₹250","₹50"],a:0},
{t:"money",type:"tapall",q:"Tap items priced over ₹20.",pool:["Iron 1 kg ₹25","Paper 1 kg ₹5","Copper 1 kg ₹50","Bottles 1 ₹2"],correct:["Iron 1 kg ₹25","Copper 1 kg ₹50"]},
{t:"money",q:"5 bottles at ₹4 each + ₹10 bag = ?",o:["₹30","₹20","₹14","₹50"],a:0},
{t:"money",type:"enterval",q:"6 kg at ₹8 = ₹?",a:48}
],
[
{t:"money",q:"Pinky bought 10 kg at ₹3 and sold 6 kg at ₹5. She still has 4 kg. Earned so far?",o:["₹30","₹50","₹15","₹20"],a:0},
{t:"money",q:"A junk dealer pays ₹7 per kg paper and ₹25 per kg iron. For 2 kg paper + 1 kg iron, he pays?",o:["₹39","₹32","₹40","₹35"],a:0},
{t:"money",type:"enterval",q:"Bought ₹450, sold ₹600. Profit in ₹?",a:150},
{t:"money",q:"Salma made profit of ₹20 per kg on 5 kg. Total profit?",o:["₹100","₹25","₹50","₹20"],a:0},
{t:"money",type:"fillin",q:"₹1000 - ₹745 = ₹ ___",blanks:["255"]},
{t:"money",type:"tf",q:"Selling 8 kg paper at ₹5 per kg gives ₹40.",a:true},
{t:"money",q:"Naveen sold scrap for ₹180. He earned ₹30 profit. Cost?",o:["₹150","₹210","₹180","₹30"],a:0},
{t:"money",type:"tapall",q:"Tap all that give ₹100 in change from ₹500.",pool:["Spent ₹400","Spent ₹300","Spent ₹200","Spent ₹450"],correct:["Spent ₹400"]},
{t:"money",q:"Bill: 3 bottles ₹8 each + 2 kg paper ₹6 each. Total?",o:["₹36","₹24","₹14","₹30"],a:0},
{t:"money",type:"enterval",q:"Sold 9 kg at ₹4 per kg. Earned in ₹?",a:36}
]
]
},
7: { title:'Jugs and Mugs',
beginner:[
[
{t:"capacity",q:"1 litre = ___ ml",o:["1000 ml","100 ml","10 ml","500 ml"],a:0},
{t:"capacity",type:"tf",q:"A jug usually holds more than a mug.",a:true},
{t:"capacity",q:"Which holds more juice?",o:["1 litre bottle","500 ml glass","200 ml cup","100 ml cup"],a:0},
{t:"capacity",type:"fillin",q:"Half a litre = ___ ml",blanks:["500"]},
{t:"capacity",type:"enterval",q:"How many ml in 2 litres?",a:2000},
{t:"capacity",q:"A water bottle has 500 ml. Two bottles = ?",o:["1000 ml","500 ml","250 ml","1500 ml"],a:0},
{t:"capacity",type:"tf",q:"1 litre is less than 500 ml.",a:false},
{t:"capacity",q:"A milk packet has 1 litre. How many ml?",o:["1000","100","10","500"],a:0},
{t:"capacity",type:"tapall",q:"Tap items measured in litres or ml.",pool:["Juice","Water","Milk","Stone","Brick"],correct:["Juice","Water","Milk"]},
{t:"capacity",q:"A spoon holds about?",o:["5 ml","5 litres","500 ml","100 ml"],a:0}
],
[
{t:"capacity",q:"3 litres = ___ ml",o:["3000","300","30","3"],a:0},
{t:"capacity",type:"enterval",q:"How many ml in half a litre?",a:500},
{t:"capacity",q:"A mug holds 250 ml. 4 mugs = ?",o:["1000 ml","500 ml","250 ml","1500 ml"],a:0},
{t:"capacity",type:"tf",q:"A bucket usually holds more than a cup.",a:true},
{t:"capacity",type:"fillin",q:"2 litres = ___ ml",blanks:["2000"]},
{t:"capacity",q:"Which is the smallest?",o:["100 ml","500 ml","1 litre","2 litres"],a:0},
{t:"capacity",q:"A juice bottle has 1 litre. How many 250 ml glasses fill from it?",o:["4","2","5","10"],a:0},
{t:"capacity",type:"tapall",q:"Tap all containers that hold liquids.",pool:["Bottle","Jug","Mug","Pencil","Book"],correct:["Bottle","Jug","Mug"]},
{t:"capacity",q:"A small water bottle = ?",o:["500 ml","5 ml","5 litres","50 ml"],a:0},
{t:"capacity",type:"tf",q:"Milk is sold in litres and ml.",a:true}
],
[
{t:"capacity",type:"enterval",q:"How many ml in 5 litres?",a:5000},
{t:"capacity",q:"A jug has 2 litres. Pour 500 ml. How much left?",o:["1500 ml","2500 ml","500 ml","1000 ml"],a:0},
{t:"capacity",type:"fillin",q:"1 litre + 1 litre = ___ litres",blanks:["2"]},
{t:"capacity",q:"A glass of water = ?",o:["200 ml","2 litres","20 litres","2 ml"],a:0},
{t:"capacity",type:"tf",q:"100 ml is more than 1 litre.",a:false},
{t:"capacity",q:"A bottle of juice has 500 ml. 6 bottles = ?",o:["3000 ml","2500 ml","1000 ml","500 ml"],a:0},
{t:"capacity",q:"A bucket holds 10 litres. In ml?",o:["10000 ml","100 ml","1000 ml","10 ml"],a:0},
{t:"capacity",type:"tapall",q:"Tap units of capacity.",pool:["litre","ml","kg","cm","m"],correct:["litre","ml"]},
{t:"capacity",type:"enterval",q:"Quarter litre = ___ ml (250)",a:250},
{t:"capacity",q:"A tea cup holds about?",o:["150 ml","15 litres","1 litre","1500 ml"],a:0}
],
[
{t:"capacity",q:"Mummy buys 2 litres of milk. How many ml?",o:["2000","200","20","2"],a:0},
{t:"capacity",type:"fillin",q:"1500 ml = 1 litre ___ ml",blanks:["500"]},
{t:"capacity",q:"Which is bigger: 750 ml or 1 litre?",o:["1 litre","750 ml","Equal","Cannot say"],a:0},
{t:"capacity",type:"tf",q:"A swimming pool holds many litres of water.",a:true},
{t:"capacity",q:"A juice carton has 200 ml. 5 cartons = ?",o:["1000 ml","500 ml","250 ml","1500 ml"],a:0},
{t:"capacity",type:"enterval",q:"How many ml in 4 litres?",a:4000},
{t:"capacity",q:"A spoon = 5 ml. 4 spoons = ?",o:["20 ml","9 ml","45 ml","100 ml"],a:0},
{t:"capacity",type:"tapall",q:"Tap things you measure in litres.",pool:["Petrol","Milk","Juice","Stone","Pencil"],correct:["Petrol","Milk","Juice"]},
{t:"capacity",q:"6 litres = ?",o:["6000 ml","600 ml","60 ml","6 ml"],a:0},
{t:"capacity",type:"tf",q:"A medicine spoon is usually 5 ml.",a:true}
],
[
{t:"capacity",type:"enterval",q:"How many ml in 7 litres?",a:7000},
{t:"capacity",q:"Pour 250 ml from 1 litre jug. Left?",o:["750 ml","250 ml","500 ml","1000 ml"],a:0},
{t:"capacity",type:"fillin",q:"Three half-litres = ___ ml",blanks:["1500"]},
{t:"capacity",q:"A milk packet of 500 ml. 4 packets = ?",o:["2000 ml","1000 ml","500 ml","2500 ml"],a:0},
{t:"capacity",type:"tf",q:"1000 ml = 1 litre.",a:true},
{t:"capacity",q:"A small bucket holds 5 litres. In ml?",o:["5000 ml","500 ml","50 ml","5 ml"],a:0},
{t:"capacity",q:"Naveen drank 2 glasses of 200 ml each. Total?",o:["400 ml","200 ml","2 litres","20 ml"],a:0},
{t:"capacity",type:"tapall",q:"Tap containers that hold less than 1 litre.",pool:["Tea cup","Juice glass","Bath tub","Big bucket"],correct:["Tea cup","Juice glass"]},
{t:"capacity",type:"enterval",q:"500 ml + 500 ml = ___ litre(s)",a:1},
{t:"capacity",q:"A water tank holds 1000 litres. Many or few?",o:["Many","Few","Equal","None"],a:0}
]
],
pro:[
[
{t:"capacity",q:"Mom buys 3 litres of milk. We use 1 litre 500 ml. How much is left?",o:["1 litre 500 ml","2 litres","1 litre","2 litres 500 ml"],a:0},
{t:"capacity",q:"A jug holds 2 litres. We pour 750 ml in a glass. Water left?",o:["1 litre 250 ml","1 litre","2 litres","250 ml"],a:0},
{t:"capacity",type:"enterval",q:"3 litres + 2000 ml = ___ litres",a:5},
{t:"capacity",q:"5 bottles each 200 ml. Total in litres?",o:["1 litre","2 litres","500 ml","5 litres"],a:0},
{t:"capacity",type:"fillin",q:"2 litres - 500 ml = ___ ml",blanks:["1500"]},
{t:"capacity",type:"tf",q:"Half of 2 litres is 1000 ml.",a:true},
{t:"capacity",q:"A jug has 1 litre 500 ml. We add 750 ml. Total?",o:["2 litres 250 ml","1 litre 750 ml","2 litres","2 litres 500 ml"],a:0},
{t:"capacity",type:"tapall",q:"Tap totals equal to 1 litre.",pool:["1000 ml","2 of 500 ml","4 of 250 ml","800 ml","500 ml"],correct:["1000 ml","2 of 500 ml","4 of 250 ml"]},
{t:"capacity",q:"Daily water need 2 litres. For 5 days?",o:["10 litres","7 litres","5 litres","2 litres"],a:0},
{t:"capacity",type:"enterval",q:"A 5 litre tank is filled with 3500 ml. ml needed to fill?",a:1500}
],
[
{t:"capacity",q:"A water cooler has 20 litres. After 5 litres used, left?",o:["15 litres","25 litres","20 litres","5 litres"],a:0},
{t:"capacity",q:"Salma's bottle is 500 ml. She drank 2 bottles. Total in litres?",o:["1 litre","500 ml","2 litres","250 ml"],a:0},
{t:"capacity",type:"enterval",q:"How many 500 ml bottles fill 4 litres?",a:8},
{t:"capacity",q:"A jug holds 3 litres. 2 jugs = ?",o:["6000 ml","3000 ml","5000 ml","6 ml"],a:0},
{t:"capacity",type:"tf",q:"5 litres > 4500 ml.",a:true},
{t:"capacity",type:"fillin",q:"Half of 1 litre = ___ ml",blanks:["500"]},
{t:"capacity",q:"From a 2 litre bottle, 4 glasses of 250 ml each are poured. Left?",o:["1 litre","500 ml","1 litre 500 ml","2 litres"],a:0},
{t:"capacity",type:"tapall",q:"Tap measurements equal to 2 litres.",pool:["2000 ml","4 of 500 ml","8 of 250 ml","1500 ml","1 litre"],correct:["2000 ml","4 of 500 ml","8 of 250 ml"]},
{t:"capacity",q:"3 jugs of 1 litre 500 ml each. Total?",o:["4 litres 500 ml","3 litres","4 litres","5 litres"],a:0},
{t:"capacity",type:"enterval",q:"1 litre 250 ml = ___ ml",a:1250}
],
[
{t:"capacity",q:"A milk dairy sells 250 ml packets. How many to make 2 litres?",o:["8","4","6","10"],a:0},
{t:"capacity",q:"Tank has 50 litres. 25 litres used. Then 10 litres added. Now?",o:["35 litres","15 litres","85 litres","75 litres"],a:0},
{t:"capacity",type:"enterval",q:"Total ml in 6 of 500 ml bottles?",a:3000},
{t:"capacity",q:"A bucket of 8 litres + a jug of 2 litres. Total?",o:["10 litres","6 litres","16 litres","8 litres"],a:0},
{t:"capacity",type:"fillin",q:"A 5 litre jug is half-full. It has ___ ml",blanks:["2500"]},
{t:"capacity",type:"tf",q:"3 of 250 ml glasses = 750 ml.",a:true},
{t:"capacity",q:"Naveen drinks 3 glasses of 200 ml each daily. In a week?",o:["4200 ml","600 ml","2100 ml","1400 ml"],a:0},
{t:"capacity",type:"tapall",q:"Tap things larger than a mug.",pool:["Bath tub","Bucket","Water tank","Spoon","Eye-dropper"],correct:["Bath tub","Bucket","Water tank"]},
{t:"capacity",q:"Mum cooks with 750 ml + 250 ml water. Total?",o:["1 litre","500 ml","1 litre 500 ml","250 ml"],a:0},
{t:"capacity",type:"enterval",q:"3 litres - 1500 ml = ___ ml",a:1500}
],
[
{t:"capacity",q:"A juice jug has 1 litre. We pour into 5 cups equally. Each cup?",o:["200 ml","100 ml","500 ml","250 ml"],a:0},
{t:"capacity",q:"Pinky buys 4 packets of 250 ml juice. Total?",o:["1 litre","500 ml","2 litres","1 litre 500 ml"],a:0},
{t:"capacity",type:"enterval",q:"How many 100 ml cups can fill 1 litre?",a:10},
{t:"capacity",q:"A container has 5 litres. 1500 ml is poured out. Left?",o:["3500 ml","6500 ml","3 litres","5500 ml"],a:0},
{t:"capacity",type:"fillin",q:"4 jugs of 500 ml = ___ litres",blanks:["2"]},
{t:"capacity",type:"tf",q:"A small spoon (5 ml) x 200 = 1 litre.",a:true},
{t:"capacity",q:"From 6 litres, fill 2 buckets of 2 litres each. Left?",o:["2 litres","4 litres","6 litres","1 litre"],a:0},
{t:"capacity",type:"tapall",q:"Tap totals more than 2 litres.",pool:["3000 ml","2500 ml","5 of 500 ml","1 litre","1500 ml"],correct:["3000 ml","2500 ml","5 of 500 ml"]},
{t:"capacity",q:"A water bottle of 1 litre, used 350 ml. Left?",o:["650 ml","1350 ml","350 ml","500 ml"],a:0},
{t:"capacity",type:"enterval",q:"2 litres + 1500 ml = ___ ml",a:3500}
],
[
{t:"capacity",q:"Family drinks 8 litres of water daily. In 5 days?",o:["40 litres","13 litres","16 litres","80 litres"],a:0},
{t:"capacity",q:"A milk jug has 1 litre 500 ml. Mum used 750 ml. Left?",o:["750 ml","500 ml","1 litre","250 ml"],a:0},
{t:"capacity",type:"enterval",q:"5 of 200 ml glasses = ___ ml",a:1000},
{t:"capacity",q:"A bucket of 12 litres is half-full. Water in it?",o:["6 litres","12 litres","3 litres","24 litres"],a:0},
{t:"capacity",type:"fillin",q:"2 litres 250 ml = ___ ml",blanks:["2250"]},
{t:"capacity",type:"tf",q:"A jug of 1 litre is bigger than 4 glasses of 200 ml.",a:true},
{t:"capacity",q:"Three children drink 250 ml each. Total?",o:["750 ml","500 ml","1 litre","250 ml"],a:0},
{t:"capacity",type:"tapall",q:"Tap correct equalities.",pool:["1 litre = 1000 ml","2 litre = 2000 ml","Half litre = 500 ml","1 litre = 100 ml","1 litre = 10 ml"],correct:["1 litre = 1000 ml","2 litre = 2000 ml","Half litre = 500 ml"]},
{t:"capacity",q:"Petrol tank holds 35 litres. Filled 20 litres. To fill?",o:["15 litres","55 litres","20 litres","5 litres"],a:0},
{t:"capacity",type:"enterval",q:"How many 250 ml cups in 3 litres?",a:12}
]
]
},
8: { title:'Carts and Wheels',
beginner:[
[
{t:"circles",q:"What is the centre of a circle?",o:["The middle point","A corner","The edge","The line"],a:0},
{t:"circles",type:"tf",q:"A circle has corners.",a:false},
{t:"circles",q:"Distance from centre to edge is called?",o:["Radius","Diameter","Side","Corner"],a:0},
{t:"circles",type:"fillin",q:"Diameter = 2 × ___",blanks:["radius"]},
{t:"circles",type:"enterval",q:"Diameter when radius = 3 cm?",a:6},
{t:"circles",q:"A wheel has the shape of a?",o:["Circle","Square","Triangle","Star"],a:0},
{t:"circles",type:"tf",q:"All points on a circle are the same distance from the centre.",a:true},
{t:"circles",q:"Diameter passes through?",o:["Centre","Outside","Corner","Side"],a:0},
{t:"circles",type:"tapall",q:"Tap things shaped like a circle.",pool:["Wheel","Coin","Plate","Book","Pencil"],correct:["Wheel","Coin","Plate"]},
{t:"circles",q:"Half of diameter is?",o:["Radius","Centre","Edge","Square"],a:0}
],
[
{t:"circles",type:"enterval",q:"Diameter when radius = 5 cm?",a:10},
{t:"circles",q:"If diameter is 8 cm, radius is?",o:["4 cm","16 cm","8 cm","2 cm"],a:0},
{t:"circles",type:"fillin",q:"A line that divides a shape into two equal halves is line of ___",blanks:["symmetry"]},
{t:"circles",q:"Which shape has many lines of symmetry?",o:["Circle","Triangle","Letter R","Pencil"],a:0},
{t:"circles",type:"tf",q:"A square has 4 lines of symmetry.",a:true},
{t:"circles",q:"Wheels are round so that they?",o:["Roll easily","Stop quickly","Look pretty","Are heavy"],a:0},
{t:"circles",q:"Radius when diameter = 12 cm?",o:["6 cm","24 cm","12 cm","3 cm"],a:0},
{t:"circles",type:"tapall",q:"Tap shapes with at least one line of symmetry.",pool:["Square","Circle","Rectangle","Letter F"],correct:["Square","Circle","Rectangle"]},
{t:"circles",type:"enterval",q:"Radius when diameter = 20 cm?",a:10},
{t:"circles",q:"A circle drawn around a point keeps same distance. That point is?",o:["Centre","Edge","Outside","Corner"],a:0}
],
[
{t:"circles",q:"How many radii does a circle have?",o:["Many","One","Two","None"],a:0},
{t:"circles",type:"tf",q:"Radius is half the diameter.",a:true},
{t:"circles",type:"enterval",q:"Diameter when radius = 7 cm?",a:14},
{t:"circles",q:"Which is longer?",o:["Diameter","Radius","Equal","Centre"],a:0},
{t:"circles",type:"fillin",q:"A wheel of bullock cart is shaped like a ___",blanks:["circle"]},
{t:"circles",q:"To draw a circle, we use?",o:["Compass","Ruler","Eraser","Pen only"],a:0},
{t:"circles",type:"tf",q:"A circle is a flat shape with no straight sides.",a:true},
{t:"circles",q:"Diameter when radius = 9 cm?",o:["18 cm","9 cm","4 cm","12 cm"],a:0},
{t:"circles",type:"tapall",q:"Tap parts of a circle.",pool:["Centre","Radius","Diameter","Side","Corner"],correct:["Centre","Radius","Diameter"]},
{t:"circles",q:"A line of symmetry divides shape into?",o:["2 equal halves","3 parts","Many parts","No parts"],a:0}
],
[
{t:"circles",q:"Radius when diameter = 16 cm?",o:["8 cm","32 cm","16 cm","4 cm"],a:0},
{t:"circles",type:"fillin",q:"All wheels of a cart are usually the same ___",blanks:["size"]},
{t:"circles",type:"enterval",q:"Diameter when radius = 4 cm?",a:8},
{t:"circles",q:"The circle is symmetric about?",o:["Any line through centre","Only one line","No line","Corner"],a:0},
{t:"circles",type:"tf",q:"A wheel that is square will roll smoothly.",a:false},
{t:"circles",q:"How many lines of symmetry does a circle have?",o:["Many","1","2","4"],a:0},
{t:"circles",q:"Diameter when radius = 6 cm?",o:["12 cm","6 cm","3 cm","18 cm"],a:0},
{t:"circles",type:"tapall",q:"Tap round things you see daily.",pool:["Coin","Wheel","Bangle","Pencil","Book"],correct:["Coin","Wheel","Bangle"]},
{t:"circles",type:"enterval",q:"Radius when diameter = 18 cm?",a:9},
{t:"circles",type:"tf",q:"All radii of a circle are equal.",a:true}
],
[
{t:"circles",q:"What does a compass do?",o:["Draws circles","Cuts paper","Erases marks","Measures weight"],a:0},
{t:"circles",type:"enterval",q:"Diameter when radius = 8 cm?",a:16},
{t:"circles",type:"fillin",q:"Distance across a circle through centre is called ___",blanks:["diameter"]},
{t:"circles",q:"Letter that looks same on left and right?",o:["A","F","R","G"],a:0},
{t:"circles",type:"tf",q:"A bullock cart has two wheels usually.",a:true},
{t:"circles",q:"Radius is from?",o:["Centre to edge","Edge to edge","Outside to centre","Top to bottom"],a:0},
{t:"circles",type:"tapall",q:"Tap shapes with line of symmetry.",pool:["Heart","Butterfly","Circle","Letter P"],correct:["Heart","Butterfly","Circle"]},
{t:"circles",q:"A circle has?",o:["No corners","4 corners","3 corners","2 corners"],a:0},
{t:"circles",type:"enterval",q:"Radius when diameter = 24 cm?",a:12},
{t:"circles",q:"A wheel rolls because it is?",o:["Round","Square","Heavy","Big"],a:0}
]
],
pro:[
[
{t:"circles",q:"A wheel has radius 15 cm. What is its diameter?",o:["30 cm","15 cm","45 cm","7 cm"],a:0},
{t:"circles",q:"Two circles: one with radius 4 cm, other with diameter 6 cm. Which is bigger?",o:["Radius 4 cm","Diameter 6 cm","Equal","Cannot say"],a:0},
{t:"circles",type:"enterval",q:"Diameter when radius = 25 cm?",a:50},
{t:"circles",q:"A cart has 4 wheels, each with diameter 40 cm. Radius of each?",o:["20 cm","80 cm","40 cm","10 cm"],a:0},
{t:"circles",type:"fillin",q:"If diameter is 30 cm, radius is ___ cm",blanks:["15"]},
{t:"circles",type:"tf",q:"A line of symmetry of a square passes through opposite corners.",a:true},
{t:"circles",q:"A bicycle wheel has radius 35 cm. Diameter?",o:["70 cm","35 cm","105 cm","17 cm"],a:0},
{t:"circles",type:"tapall",q:"Tap pairs where diameter = 2 × radius.",pool:["r=3, d=6","r=5, d=10","r=4, d=8","r=2, d=5","r=7, d=10"],correct:["r=3, d=6","r=5, d=10","r=4, d=8"]},
{t:"circles",q:"How many lines of symmetry does a rectangle (not square) have?",o:["2","4","1","8"],a:0},
{t:"circles",type:"enterval",q:"Radius when diameter = 60 cm?",a:30}
],
[
{t:"circles",q:"Sum of two radii of same circle of radius 9 cm is?",o:["18 cm","9 cm","Diameter only","27 cm"],a:0},
{t:"circles",q:"A wheel makes 1 round on the ground. The distance equals?",o:["Around the wheel","Diameter","Radius","Twice diameter"],a:0},
{t:"circles",type:"enterval",q:"Diameter when radius = 11 cm?",a:22},
{t:"circles",q:"A round table has diameter 100 cm. Radius?",o:["50 cm","200 cm","100 cm","25 cm"],a:0},
{t:"circles",type:"fillin",q:"Sum of radius + radius = ___",blanks:["diameter"]},
{t:"circles",type:"tf",q:"A wheel and a coin both are circles.",a:true},
{t:"circles",q:"Letter B has line of symmetry that is?",o:["Horizontal","Vertical","None","Both"],a:0},
{t:"circles",type:"tapall",q:"Tap things that roll.",pool:["Ball","Wheel","Pipe","Box","Pencil-flat"],correct:["Ball","Wheel","Pipe"]},
{t:"circles",q:"If wheel diameter = 50 cm, two wheels together cover diameter total?",o:["100 cm","50 cm","25 cm","200 cm"],a:0},
{t:"circles",type:"enterval",q:"Diameter when radius = 13 cm?",a:26}
],
[
{t:"circles",q:"A cycle wheel has radius 30 cm. Half-diameter is also?",o:["30 cm","60 cm","15 cm","Cannot say"],a:0},
{t:"circles",q:"Cart 1 wheel: radius 20 cm. Cart 2 wheel: diameter 50 cm. Which wheel is bigger?",o:["Cart 2","Cart 1","Equal","Cannot say"],a:0},
{t:"circles",type:"enterval",q:"Radius when diameter = 100 cm?",a:50},
{t:"circles",q:"A clock face is a circle. Its centre is where?",o:["Where hands meet","On the 12","On the 6","Outside"],a:0},
{t:"circles",type:"fillin",q:"A circle has ___ corners",blanks:["0"]},
{t:"circles",type:"tf",q:"Diameter is the longest line you can draw inside a circle.",a:true},
{t:"circles",q:"A round plate has radius 12 cm. Diameter?",o:["24 cm","12 cm","6 cm","36 cm"],a:0},
{t:"circles",type:"tapall",q:"Tap statements about circle that are true.",pool:["Has a centre","Has many radii","Diameter is twice radius","Has 4 sides","Has corners"],correct:["Has a centre","Has many radii","Diameter is twice radius"]},
{t:"circles",q:"How many lines of symmetry does an equilateral triangle have?",o:["3","1","2","4"],a:0},
{t:"circles",type:"enterval",q:"Diameter when radius = 17 cm?",a:34}
],
[
{t:"circles",q:"A bullock cart wheel of diameter 80 cm. Radius?",o:["40 cm","160 cm","80 cm","20 cm"],a:0},
{t:"circles",q:"3 circles each radius 5 cm. Total of all 3 diameters?",o:["30 cm","15 cm","10 cm","5 cm"],a:0},
{t:"circles",type:"enterval",q:"Diameter when radius = 21 cm?",a:42},
{t:"circles",q:"A wheel and an axle. Axle passes through?",o:["Centre","Edge","Outside","Top only"],a:0},
{t:"circles",type:"fillin",q:"A square has ___ lines of symmetry",blanks:["4"]},
{t:"circles",type:"tf",q:"A small circle inside a big circle can share the same centre.",a:true},
{t:"circles",q:"If radius doubles, diameter?",o:["Doubles","Stays same","Halves","Triples"],a:0},
{t:"circles",type:"tapall",q:"Tap shapes with no line of symmetry.",pool:["Letter R","Letter F","Letter G","Letter A","Letter H"],correct:["Letter R","Letter F","Letter G"]},
{t:"circles",q:"Diameter of a coin is 2 cm. Radius?",o:["1 cm","4 cm","2 cm","0.5 cm"],a:0},
{t:"circles",type:"enterval",q:"Radius when diameter = 44 cm?",a:22}
],
[
{t:"circles",q:"Pinky's bicycle has wheels of radius 25 cm. Diameter?",o:["50 cm","25 cm","75 cm","12 cm"],a:0},
{t:"circles",q:"A tractor wheel diameter 90 cm. Radius?",o:["45 cm","180 cm","90 cm","30 cm"],a:0},
{t:"circles",type:"enterval",q:"Diameter when radius = 19 cm?",a:38},
{t:"circles",q:"From centre, draw 5 radii. Each measures same. So they are all?",o:["Equal","Different","Some equal","Lines outside"],a:0},
{t:"circles",type:"fillin",q:"If radius = 14 cm, diameter = ___ cm",blanks:["28"]},
{t:"circles",type:"tf",q:"A wheel is helpful because it rolls smoothly being round.",a:true},
{t:"circles",q:"Circle drawn with compass: needle is at?",o:["Centre","Edge","Outside","Top"],a:0},
{t:"circles",type:"tapall",q:"Tap correct radius-diameter pairs.",pool:["r=10, d=20","r=6, d=12","r=8, d=16","r=4, d=10"],correct:["r=10, d=20","r=6, d=12","r=8, d=16"]},
{t:"circles",q:"How many lines of symmetry has a regular hexagon?",o:["6","3","4","1"],a:0},
{t:"circles",type:"enterval",q:"Radius when diameter = 36 cm?",a:18}
]
]
},
9: { title:'Halves and Quarters',
beginner:[
[
{t:"half",q:"What is half of 10?",o:["5","6","4","8"],a:0},
{t:"quarter",q:"What is one quarter of 8?",o:["2","3","4","1"],a:0},
{t:"third",q:"What is one third of 9?",o:["3","2","4","6"],a:0},
{t:"fifth",q:"What is one fifth of 10?",o:["2","3","5","1"],a:0},
{t:"eighth",q:"What is one eighth of 16?",o:["2","3","4","8"],a:0},
{t:"half",type:"tf",q:"Half of a chapati cut into 2 equal parts is 1/2.",a:true},
{t:"quarter",type:"tf",q:"A pizza cut into 4 equal pieces, one piece is 1/3.",a:false},
{t:"fillin",type:"fillin",q:"Half of 20 oranges is ___ oranges.",blanks:["10"]},
{t:"tapall",type:"tapall",q:"Tap all fractions equal to one half.",pool:["1/2","2/4","3/6","1/3","2/5","1/4"],correct:["1/2","2/4","3/6"]},
{t:"enterval",type:"enterval",q:"How many quarters make a whole?",a:4}
],
[
{t:"half",q:"Half of 12 mangoes is?",o:["6","5","4","8"],a:0},
{t:"quarter",q:"One quarter of 12 is?",o:["3","4","2","6"],a:0},
{t:"fifth",q:"One fifth of 15 is?",o:["3","2","5","4"],a:0},
{t:"eighth",q:"One eighth of 24 is?",o:["3","4","2","6"],a:0},
{t:"third",q:"One third of 12 is?",o:["4","3","6","2"],a:0},
{t:"half",type:"tf",q:"1/2 is bigger than 1/4.",a:true},
{t:"quarter",type:"tf",q:"1/4 of a rupee is 25 paise.",a:true},
{t:"fillin",type:"fillin",q:"Two quarters make ___ (write as fraction).",blanks:["1/2"]},
{t:"tapall",type:"tapall",q:"Tap all fractions less than 1/2.",pool:["1/3","1/4","1/5","2/3","3/4","1/8"],correct:["1/3","1/4","1/5","1/8"]},
{t:"enterval",type:"enterval",q:"How many halves make a whole?",a:2}
],
[
{t:"half",q:"Half of 18 ladoos shared with sister is?",o:["9","8","10","7"],a:0},
{t:"quarter",q:"One quarter of 16 marbles is?",o:["4","3","5","8"],a:0},
{t:"third",q:"One third of 18 is?",o:["6","5","9","3"],a:0},
{t:"fifth",q:"One fifth of 20 is?",o:["4","3","5","2"],a:0},
{t:"eighth",q:"One eighth of 32 is?",o:["4","3","6","8"],a:0},
{t:"compare",type:"tf",q:"1/3 is smaller than 1/2.",a:true},
{t:"equiv",type:"tf",q:"1/2 equals 3/6.",a:true},
{t:"fillin",type:"fillin",q:"Half of half is one ___ (word).",blanks:["quarter"]},
{t:"tapall",type:"tapall",q:"Tap all fractions equal to one quarter.",pool:["1/4","2/8","3/12","1/3","1/2","2/5"],correct:["1/4","2/8","3/12"]},
{t:"enterval",type:"enterval",q:"How many one-thirds make a whole?",a:3}
],
[
{t:"half",q:"Half of 14 is?",o:["7","6","8","5"],a:0},
{t:"quarter",q:"One quarter of 20 is?",o:["5","4","6","8"],a:0},
{t:"fifth",q:"One fifth of 25 is?",o:["5","4","6","3"],a:0},
{t:"eighth",q:"One eighth of 40 is?",o:["5","4","6","8"],a:0},
{t:"third",q:"One third of 15 is?",o:["5","4","6","3"],a:0},
{t:"half",type:"tf",q:"Half a kilo is 500 grams.",a:true},
{t:"compare",type:"tf",q:"1/8 is bigger than 1/4.",a:false},
{t:"fillin",type:"fillin",q:"Three quarters of a rupee is ___ paise.",blanks:["75"]},
{t:"tapall",type:"tapall",q:"Tap all fractions bigger than 1/4.",pool:["1/2","1/3","2/4","1/5","1/8","3/4"],correct:["1/2","1/3","2/4","3/4"]},
{t:"enterval",type:"enterval",q:"How many one-fifths make a whole?",a:5}
],
[
{t:"half",q:"Half of 30 chocolates is?",o:["15","14","16","20"],a:0},
{t:"quarter",q:"One quarter of 24 toffees is?",o:["6","5","4","8"],a:0},
{t:"third",q:"One third of 21 is?",o:["7","6","5","3"],a:0},
{t:"fifth",q:"One fifth of 30 is?",o:["6","5","7","4"],a:0},
{t:"eighth",q:"One eighth of 48 is?",o:["6","5","8","4"],a:0},
{t:"compare",type:"tf",q:"1/5 is smaller than 1/3.",a:true},
{t:"equiv",type:"tf",q:"2/4 is the same as 1/2.",a:true},
{t:"fillin",type:"fillin",q:"Half of 50 is ___.",blanks:["25"]},
{t:"tapall",type:"tapall",q:"Tap all fractions equal to one half.",pool:["1/2","2/4","4/8","5/10","1/3","2/5"],correct:["1/2","2/4","4/8","5/10"]},
{t:"enterval",type:"enterval",q:"How many one-eighths make a whole?",a:8}
]
],
pro:[
[
{t:"word",q:"Riya cut a cake into 8 equal pieces and ate 2. What fraction did she eat?",o:["1/4","1/8","2/8","1/2"],a:0},
{t:"word",q:"Out of 20 mangoes, Aman gave half to his friend. How many are left?",o:["10","5","15","8"],a:0},
{t:"compare",q:"Which is the largest? 1/2, 1/3, 1/4, 1/8",o:["1/2","1/3","1/4","1/8"],a:0},
{t:"word",q:"A pizza is cut into 4 parts. Three are eaten. What fraction is left?",o:["1/4","3/4","1/2","2/4"],a:0},
{t:"word",q:"In 15 students, one third are girls. How many boys?",o:["10","5","12","8"],a:0},
{t:"compare",type:"tf",q:"1/3 + 1/3 + 1/3 equals 1 whole.",a:true},
{t:"word",type:"tf",q:"Half of half of 16 is 4.",a:true},
{t:"fillin",type:"fillin",q:"If 1/4 of 40 is taken, then ___ is left.",blanks:["30"]},
{t:"tapall",type:"tapall",q:"Tap fractions that show more than half.",pool:["3/4","5/8","2/3","1/4","1/5","1/8"],correct:["3/4","5/8","2/3"]},
{t:"enterval",type:"enterval",q:"What is half of 64?",a:32}
],
[
{t:"word",q:"A ribbon is 24 cm. Cut into quarters, each piece is?",o:["6 cm","4 cm","8 cm","12 cm"],a:0},
{t:"word",q:"Of 30 children, one fifth wear glasses. How many wear glasses?",o:["6","5","10","15"],a:0},
{t:"word",q:"Mum bakes 16 biscuits. Dad eats 1/4. How many remain?",o:["12","4","8","14"],a:0},
{t:"compare",q:"Which is smallest? 1/2, 1/5, 1/3, 1/4",o:["1/5","1/4","1/3","1/2"],a:0},
{t:"word",q:"A jug holds 20 glasses of water. After half is poured, how many glasses remain?",o:["10","5","15","8"],a:0},
{t:"word",type:"tf",q:"3/4 of 20 is 15.",a:true},
{t:"compare",type:"tf",q:"2/3 is greater than 1/2.",a:true},
{t:"fillin",type:"fillin",q:"Half of 36 is ___.",blanks:["18"]},
{t:"tapall",type:"tapall",q:"Tap fractions less than 1/2.",pool:["1/3","2/5","1/8","2/3","3/4","1/4"],correct:["1/3","2/5","1/8","1/4"]},
{t:"enterval",type:"enterval",q:"One quarter of 100 rupees is how many rupees?",a:25}
],
[
{t:"word",q:"Ravi's mother gave 18 sweets to 3 children equally. Each gets?",o:["6","5","9","4"],a:0},
{t:"word",q:"From 40 marbles, Sara took 1/8. How many did she take?",o:["5","4","8","10"],a:0},
{t:"word",q:"Of 24 chairs, half are red, quarter are blue. How many blue?",o:["6","12","8","4"],a:0},
{t:"compare",q:"Which fraction equals 1/2?",o:["3/6","1/3","2/5","3/8"],a:0},
{t:"word",q:"A field is divided into 5 equal plots; 2 are planted. What fraction is planted?",o:["2/5","1/5","3/5","2/3"],a:0},
{t:"word",type:"tf",q:"If you eat 4/8 of a pie, you have eaten half.",a:true},
{t:"compare",type:"tf",q:"1/4 is greater than 1/3.",a:false},
{t:"fillin",type:"fillin",q:"One quarter of 80 is ___.",blanks:["20"]},
{t:"tapall",type:"tapall",q:"Tap pairs equal to one half (unit fraction halves).",pool:["1/2","2/4","3/6","4/8","1/4","2/5"],correct:["1/2","2/4","3/6","4/8"]},
{t:"enterval",type:"enterval",q:"Three quarters of 40 is?",a:30}
],
[
{t:"word",q:"Out of 32 pages, Rohan read 1/4. How many pages are left?",o:["24","8","16","20"],a:0},
{t:"word",q:"A rope of 30 m is cut into 5 equal parts. Each part is?",o:["6 m","5 m","10 m","3 m"],a:0},
{t:"word",q:"From 20 laddoos, Geeta gave half to neighbours, then ate 2. How many are left?",o:["8","10","12","4"],a:0},
{t:"compare",q:"Which is bigger: 3/4 or 1/2?",o:["3/4","1/2","both equal","cannot say"],a:0},
{t:"word",q:"A class of 36 has one third absent. How many are present?",o:["24","12","18","30"],a:0},
{t:"word",type:"tf",q:"Half of 100 plus quarter of 100 equals 75.",a:true},
{t:"compare",type:"tf",q:"1/2 of 50 is 25.",a:true},
{t:"fillin",type:"fillin",q:"If half a cake is 250 g, the whole cake is ___ g.",blanks:["500"]},
{t:"tapall",type:"tapall",q:"Tap fractions equal to one quarter.",pool:["1/4","2/8","3/12","4/16","1/2","2/5"],correct:["1/4","2/8","3/12","4/16"]},
{t:"enterval",type:"enterval",q:"One fifth of 45 is?",a:9}
],
[
{t:"word",q:"A pizza has 8 slices. Anu eats 2, Bina eats 3. What fraction is left?",o:["3/8","5/8","2/8","4/8"],a:0},
{t:"word",q:"Half of 50 plus quarter of 20 equals?",o:["30","25","35","20"],a:0},
{t:"word",q:"Mum cuts 1 watermelon into 8 parts. Family eats 6. Left fraction?",o:["2/8","6/8","1/4","3/8"],a:0},
{t:"compare",q:"Which is smallest? 2/4, 1/3, 1/8, 1/2",o:["1/8","1/3","2/4","1/2"],a:0},
{t:"word",q:"Of 60 students, 1/3 went on a trip. How many stayed back?",o:["40","20","30","45"],a:0},
{t:"word",type:"tf",q:"Quarter of 60 is the same as half of 30.",a:true},
{t:"compare",type:"tf",q:"5/8 is more than half.",a:true},
{t:"fillin",type:"fillin",q:"If 1/5 of 100 is taken, ___ is left.",blanks:["80"]},
{t:"tapall",type:"tapall",q:"Tap fractions greater than half.",pool:["3/4","5/8","2/3","7/8","1/4","1/3"],correct:["3/4","5/8","2/3","7/8"]},
{t:"enterval",type:"enterval",q:"Half of 200 minus quarter of 100 is?",a:75}
]
]
},
10: { title:'Play with Patterns',
beginner:[
[
{t:"x3",q:"Continue: 3, 6, 9, 12, ___",o:["15","14","16","18"],a:0},
{t:"x3",q:"Continue: 6, 9, 12, 15, ___",o:["18","17","20","21"],a:0},
{t:"square",q:"What is 2 squared (2x2)?",o:["4","2","6","8"],a:0},
{t:"square",q:"What is 3 squared (3x3)?",o:["9","6","12","8"],a:0},
{t:"x5",q:"Continue: 5, 10, 15, 20, ___",o:["25","22","30","24"],a:0},
{t:"pattern",type:"tf",q:"In the pattern 2,4,6,8 the next is 10.",a:true},
{t:"square",type:"tf",q:"4 squared is 16.",a:true},
{t:"fillin",type:"fillin",q:"5 squared is ___.",blanks:["25"]},
{t:"tapall",type:"tapall",q:"Tap all square numbers.",pool:["1","4","9","16","6","8"],correct:["1","4","9","16"]},
{t:"enterval",type:"enterval",q:"Next number in 3, 6, 9, 12, 15, ___",a:18}
],
[
{t:"x3",q:"Continue: 9, 12, 15, ___",o:["18","16","20","21"],a:0},
{t:"square",q:"6 squared is?",o:["36","12","30","16"],a:0},
{t:"x4",q:"Continue: 4, 8, 12, 16, ___",o:["20","18","24","22"],a:0},
{t:"x3",q:"What comes next: 12, 15, 18, ___",o:["21","20","24","19"],a:0},
{t:"square",q:"7 squared is?",o:["49","14","42","56"],a:0},
{t:"magic",type:"tf",q:"In a 3x3 magic square, every row sums to the same number.",a:true},
{t:"pattern",type:"tf",q:"Pattern 1, 3, 5, 7, 9 is odd numbers.",a:true},
{t:"fillin",type:"fillin",q:"Square of 8 is ___.",blanks:["64"]},
{t:"tapall",type:"tapall",q:"Tap multiples of 3.",pool:["3","6","9","12","7","10"],correct:["3","6","9","12"]},
{t:"enterval",type:"enterval",q:"Next in 4, 8, 12, 16, ___",a:20}
],
[
{t:"x3",q:"Continue: 15, 18, 21, ___",o:["24","22","25","27"],a:0},
{t:"square",q:"9 squared is?",o:["81","18","72","99"],a:0},
{t:"x6",q:"Continue: 6, 12, 18, ___",o:["24","20","30","22"],a:0},
{t:"square",q:"10 squared is?",o:["100","20","50","110"],a:0},
{t:"pattern",q:"Continue: 1, 4, 7, 10, ___",o:["13","12","14","11"],a:0},
{t:"magic",type:"tf",q:"A magic square has the same sum across rows, columns and diagonals.",a:true},
{t:"square",type:"tf",q:"Square of 1 is 1.",a:true},
{t:"fillin",type:"fillin",q:"Next in 5, 10, 15, 20, ___.",blanks:["25"]},
{t:"tapall",type:"tapall",q:"Tap all multiples of 5.",pool:["5","10","15","20","12","18"],correct:["5","10","15","20"]},
{t:"enterval",type:"enterval",q:"6 squared is?",a:36}
],
[
{t:"x3",q:"Continue: 21, 24, 27, ___",o:["30","28","32","29"],a:0},
{t:"square",q:"What is 4 x 4?",o:["16","12","20","8"],a:0},
{t:"x7",q:"Continue: 7, 14, 21, ___",o:["28","27","35","20"],a:0},
{t:"pattern",q:"Continue: 2, 5, 8, 11, ___",o:["14","13","15","12"],a:0},
{t:"square",q:"What is 5 x 5?",o:["25","20","30","15"],a:0},
{t:"pattern",type:"tf",q:"In 10, 20, 30, 40 each step adds 10.",a:true},
{t:"magic",type:"tf",q:"In a 3x3 magic square using 1-9, each line sums to 15.",a:true},
{t:"fillin",type:"fillin",q:"Square of 7 is ___.",blanks:["49"]},
{t:"tapall",type:"tapall",q:"Tap multiples of 4.",pool:["4","8","12","16","9","11"],correct:["4","8","12","16"]},
{t:"enterval",type:"enterval",q:"Next in 7, 14, 21, 28, ___",a:35}
],
[
{t:"x3",q:"Continue: 30, 33, 36, ___",o:["39","38","42","40"],a:0},
{t:"square",q:"Square of 11 is?",o:["121","22","110","99"],a:0},
{t:"x8",q:"Continue: 8, 16, 24, ___",o:["32","30","36","40"],a:0},
{t:"pattern",q:"Continue: 5, 8, 11, 14, ___",o:["17","16","18","15"],a:0},
{t:"square",q:"Square of 12 is?",o:["144","24","120","132"],a:0},
{t:"pattern",type:"tf",q:"In a tile pattern, shapes repeat regularly.",a:true},
{t:"magic",type:"tf",q:"In a magic square, all numbers must be the same.",a:false},
{t:"fillin",type:"fillin",q:"Next in 3, 6, 9, ___.",blanks:["12"]},
{t:"tapall",type:"tapall",q:"Tap multiples of 6.",pool:["6","12","18","24","15","20"],correct:["6","12","18","24"]},
{t:"enterval",type:"enterval",q:"Next in 9, 12, 15, 18, ___",a:21}
]
],
pro:[
[
{t:"x3",q:"Find the missing: 6, 9, ___, 15, 18",o:["12","11","13","14"],a:0},
{t:"x3",q:"In 3, 6, 9, ___, 15 the missing number is?",o:["12","13","11","10"],a:0},
{t:"magic",q:"In a 3x3 magic square with sum 15, the centre number is?",o:["5","3","7","1"],a:0},
{t:"square",q:"Sum of first two square numbers (1 and 4) is?",o:["5","4","6","9"],a:0},
{t:"pattern",q:"What is the rule? 4, 7, 10, 13, 16",o:["add 3","add 4","x 2","add 2"],a:0},
{t:"pattern",type:"tf",q:"Pattern 1, 2, 4, 8, 16 doubles every step.",a:true},
{t:"square",type:"tf",q:"Square of a number is the number multiplied by itself.",a:true},
{t:"fillin",type:"fillin",q:"Missing: 4, 8, ___, 16. Answer is.",blanks:["12"]},
{t:"tapall",type:"tapall",q:"Tap all multiples of 3 below 20.",pool:["3","6","9","12","15","18"],correct:["3","6","9","12","15","18"]},
{t:"enterval",type:"enterval",q:"Sum of 3 + 6 + 9 is?",a:18}
],
[
{t:"x3",q:"Find missing: 12, 15, ___, 21, 24",o:["18","17","19","20"],a:0},
{t:"square",q:"Difference between 9-squared and 8-squared?",o:["17","18","16","9"],a:0},
{t:"magic",q:"Row sum of 3x3 magic square with 1 to 9 is?",o:["15","12","18","20"],a:0},
{t:"pattern",q:"Continue: 2, 4, 8, 16, ___",o:["32","20","24","18"],a:0},
{t:"x3",q:"Two steps forward in pattern 6, 9, 12, ___ , ___ is?",o:["15 and 18","14 and 16","13 and 15","18 and 21"],a:0},
{t:"pattern",type:"tf",q:"In tile patterns, repeating units form a design.",a:true},
{t:"x3",type:"tf",q:"Skip counting by 3 from 0 reaches 30 in 10 steps.",a:true},
{t:"fillin",type:"fillin",q:"Square of 10 is ___.",blanks:["100"]},
{t:"tapall",type:"tapall",q:"Tap square numbers below 30.",pool:["1","4","9","16","25","20"],correct:["1","4","9","16","25"]},
{t:"enterval",type:"enterval",q:"5 squared plus 1 equals?",a:26}
],
[
{t:"x3",q:"Missing in 18, 21, ___, 27, 30",o:["24","23","25","26"],a:0},
{t:"square",q:"How much is 6-squared minus 5-squared?",o:["11","10","12","9"],a:0},
{t:"pattern",q:"Pattern: 1, 3, 6, 10, ___",o:["15","13","12","14"],a:0},
{t:"magic",q:"Magic square 4x4 sum 34. The middle pair must add to?",o:["17","15","20","18"],a:0},
{t:"x3",q:"Sum of 3 + 6 + 9 + 12 is?",o:["30","27","24","36"],a:0},
{t:"x3",type:"tf",q:"Multiples of 3: 3, 6, 9, 12, 15, 18 are 6 numbers in a row.",a:true},
{t:"square",type:"tf",q:"6 squared minus 4 squared equals 20.",a:true},
{t:"fillin",type:"fillin",q:"In pattern 5, 10, 15, ___, 25 the missing is.",blanks:["20"]},
{t:"tapall",type:"tapall",q:"Tap multiples of 3 between 10 and 30.",pool:["12","15","18","21","24","27"],correct:["12","15","18","21","24","27"]},
{t:"enterval",type:"enterval",q:"Square of 9 is?",a:81}
],
[
{t:"x3",q:"Missing in 24, 27, ___, 33, 36",o:["30","29","31","28"],a:0},
{t:"pattern",q:"Continue: 100, 90, 80, 70, ___",o:["60","50","65","55"],a:0},
{t:"square",q:"What is 7-squared plus 1?",o:["50","49","48","51"],a:0},
{t:"magic",q:"In magic square 1-9, opposite corners sum to?",o:["10","9","12","8"],a:0},
{t:"pattern",q:"Continue: 1, 4, 9, 16, ___",o:["25","20","24","36"],a:0},
{t:"pattern",type:"tf",q:"Square numbers grow faster than counting numbers.",a:true},
{t:"x3",type:"tf",q:"30 is in the times-3 pattern.",a:true},
{t:"fillin",type:"fillin",q:"Square of 4 plus square of 3 is ___.",blanks:["25"]},
{t:"tapall",type:"tapall",q:"Tap numbers in the times-3 pattern.",pool:["3","6","9","12","11","14"],correct:["3","6","9","12"]},
{t:"enterval",type:"enterval",q:"Sum of all multiples of 3 from 3 to 15.",a:45}
],
[
{t:"x3",q:"Missing in 33, 36, ___, 42, 45",o:["39","38","40","41"],a:0},
{t:"pattern",q:"Continue: 50, 45, 40, 35, ___",o:["30","32","28","25"],a:0},
{t:"square",q:"Square of 11 minus square of 10?",o:["21","20","22","11"],a:0},
{t:"magic",q:"In a 3x3 magic square with sum 21, what is the centre?",o:["7","5","9","6"],a:0},
{t:"pattern",q:"Pattern: 2, 4, 7, 11, ___",o:["16","14","15","18"],a:0},
{t:"square",type:"tf",q:"12 squared is 144.",a:true},
{t:"pattern",type:"tf",q:"Tile patterns can be made using triangles and squares.",a:true},
{t:"fillin",type:"fillin",q:"Missing: 9, 12, ___, 18.",blanks:["15"]},
{t:"tapall",type:"tapall",q:"Tap all square numbers from this list.",pool:["1","4","9","16","25","20"],correct:["1","4","9","16","25"]},
{t:"enterval",type:"enterval",q:"Square of 6 plus square of 8 is?",a:100}
]
]
},
11: { title:'Tables and Shares',
beginner:[
[
{t:"mult",q:"12 x 3 = ?",o:["36","32","30","42"],a:0},
{t:"mult",q:"15 x 4 = ?",o:["60","45","50","55"],a:0},
{t:"mult",q:"20 x 5 = ?",o:["100","90","80","110"],a:0},
{t:"div",q:"24 / 6 = ?",o:["4","3","5","6"],a:0},
{t:"div",q:"30 / 5 = ?",o:["6","5","7","4"],a:0},
{t:"mult",type:"tf",q:"11 x 6 equals 66.",a:true},
{t:"div",type:"tf",q:"45 divided by 9 equals 5.",a:true},
{t:"fillin",type:"fillin",q:"14 x 2 equals ___.",blanks:["28"]},
{t:"tapall",type:"tapall",q:"Tap all products equal to 24.",pool:["6 x 4","3 x 8","2 x 12","5 x 5","7 x 4","9 x 3"],correct:["6 x 4","3 x 8","2 x 12"]},
{t:"enterval",type:"enterval",q:"What is 13 x 3?",a:39}
],
[
{t:"mult",q:"16 x 5 = ?",o:["80","75","85","70"],a:0},
{t:"mult",q:"18 x 4 = ?",o:["72","68","76","64"],a:0},
{t:"mult",q:"25 x 3 = ?",o:["75","70","80","65"],a:0},
{t:"div",q:"36 / 4 = ?",o:["9","8","6","7"],a:0},
{t:"div",q:"48 / 6 = ?",o:["8","7","9","6"],a:0},
{t:"mult",type:"tf",q:"19 x 2 is 38.",a:true},
{t:"div",type:"tf",q:"63 / 9 = 8.",a:false},
{t:"fillin",type:"fillin",q:"22 x 3 equals ___.",blanks:["66"]},
{t:"tapall",type:"tapall",q:"Tap pairs whose product is 36.",pool:["6 x 6","9 x 4","12 x 3","5 x 7","8 x 5","2 x 17"],correct:["6 x 6","9 x 4","12 x 3"]},
{t:"enterval",type:"enterval",q:"15 x 6 = ?",a:90}
],
[
{t:"mult",q:"21 x 4 = ?",o:["84","80","88","76"],a:0},
{t:"mult",q:"24 x 3 = ?",o:["72","68","76","70"],a:0},
{t:"mult",q:"30 x 4 = ?",o:["120","100","110","130"],a:0},
{t:"div",q:"56 / 7 = ?",o:["8","7","9","6"],a:0},
{t:"div",q:"72 / 8 = ?",o:["9","8","7","10"],a:0},
{t:"mult",type:"tf",q:"25 x 4 = 100.",a:true},
{t:"div",type:"tf",q:"81 / 9 = 9.",a:true},
{t:"fillin",type:"fillin",q:"17 x 5 = ___.",blanks:["85"]},
{t:"tapall",type:"tapall",q:"Tap divisions giving answer 6.",pool:["12 / 2","18 / 3","24 / 4","30 / 6","20 / 4","15 / 3"],correct:["12 / 2","18 / 3","24 / 4"]},
{t:"enterval",type:"enterval",q:"19 x 4 = ?",a:76}
],
[
{t:"mult",q:"35 x 2 = ?",o:["70","60","65","75"],a:0},
{t:"mult",q:"40 x 3 = ?",o:["120","100","110","130"],a:0},
{t:"mult",q:"45 x 2 = ?",o:["90","80","85","95"],a:0},
{t:"div",q:"84 / 4 = ?",o:["21","20","22","18"],a:0},
{t:"div",q:"96 / 8 = ?",o:["12","10","11","13"],a:0},
{t:"mult",type:"tf",q:"50 x 2 = 100.",a:true},
{t:"div",type:"tf",q:"144 / 12 = 11.",a:false},
{t:"fillin",type:"fillin",q:"28 x 3 = ___.",blanks:["84"]},
{t:"tapall",type:"tapall",q:"Tap divisions giving answer 7.",pool:["14 / 2","21 / 3","28 / 4","35 / 5","40 / 5","30 / 6"],correct:["14 / 2","21 / 3","28 / 4","35 / 5"]},
{t:"enterval",type:"enterval",q:"32 x 3 = ?",a:96}
],
[
{t:"mult",q:"50 x 4 = ?",o:["200","180","220","150"],a:0},
{t:"mult",q:"60 x 3 = ?",o:["180","160","200","150"],a:0},
{t:"mult",q:"75 x 2 = ?",o:["150","140","160","145"],a:0},
{t:"div",q:"99 / 9 = ?",o:["11","10","12","9"],a:0},
{t:"div",q:"100 / 5 = ?",o:["20","18","22","15"],a:0},
{t:"mult",type:"tf",q:"25 x 5 = 125.",a:true},
{t:"div",type:"tf",q:"108 / 9 = 12.",a:true},
{t:"fillin",type:"fillin",q:"33 x 3 = ___.",blanks:["99"]},
{t:"tapall",type:"tapall",q:"Tap multiplications giving answer 60.",pool:["15 x 4","20 x 3","12 x 5","30 x 2","25 x 3","10 x 5"],correct:["15 x 4","20 x 3","12 x 5","30 x 2"]},
{t:"enterval",type:"enterval",q:"24 x 4 = ?",a:96}
]
],
pro:[
[
{t:"word",q:"Each box has 14 mangoes. How many in 5 boxes?",o:["70","65","75","60"],a:0},
{t:"word",q:"96 candies shared among 8 children. Each gets?",o:["12","10","11","13"],a:0},
{t:"word",q:"A bus has 36 seats. Three buses carry how many people max?",o:["108","100","96","112"],a:0},
{t:"missing",q:"___ x 6 = 84",o:["14","12","13","15"],a:0},
{t:"word",q:"Buy 4 pens at Rs 18 each. Total cost?",o:["72","64","68","76"],a:0},
{t:"div",type:"tf",q:"144 books in 12 shelves means 12 per shelf.",a:true},
{t:"mult",type:"tf",q:"23 x 4 = 92.",a:true},
{t:"fillin",type:"fillin",q:"56 / 4 = ___.",blanks:["14"]},
{t:"tapall",type:"tapall",q:"Tap products that equal 48.",pool:["12 x 4","6 x 8","16 x 3","24 x 2","9 x 5","7 x 6"],correct:["12 x 4","6 x 8","16 x 3","24 x 2"]},
{t:"enterval",type:"enterval",q:"Total: 17 x 5 + 5",a:90}
],
[
{t:"word",q:"School ordered 25 packs of pencils with 8 each. Total pencils?",o:["200","180","220","160"],a:0},
{t:"word",q:"126 sweets in 9 equal packets. Each packet has?",o:["14","13","12","15"],a:0},
{t:"missing",q:"45 x ___ = 90",o:["2","3","4","5"],a:0},
{t:"word",q:"A taxi charges Rs 12 per km. Cost for 15 km?",o:["180","160","200","150"],a:0},
{t:"word",q:"36 stickers shared among 4 friends. Each friend gets?",o:["9","8","10","7"],a:0},
{t:"mult",type:"tf",q:"19 x 5 = 95.",a:true},
{t:"div",type:"tf",q:"75 / 5 = 14.",a:false},
{t:"fillin",type:"fillin",q:"100 / 4 equals ___.",blanks:["25"]},
{t:"tapall",type:"tapall",q:"Tap divisions giving answer 8.",pool:["48 / 6","56 / 7","64 / 8","72 / 9","80 / 9","45 / 5"],correct:["48 / 6","56 / 7","64 / 8","72 / 9"]},
{t:"enterval",type:"enterval",q:"22 x 4 + 12 = ?",a:100}
],
[
{t:"word",q:"A factory makes 250 toys per day. In 4 days?",o:["1000","800","1200","900"],a:0},
{t:"word",q:"168 mangoes packed equally in 8 boxes. Each box has?",o:["21","20","22","19"],a:0},
{t:"word",q:"Buy 3 books at Rs 45 each and 2 pencils at Rs 5 each. Total?",o:["145","135","150","125"],a:0},
{t:"missing",q:"___ / 7 = 12",o:["84","82","91","78"],a:0},
{t:"word",q:"There are 85 chairs in 5 equal rows. Each row has?",o:["17","15","16","18"],a:0},
{t:"div",type:"tf",q:"132 / 11 = 12.",a:true},
{t:"mult",type:"tf",q:"15 x 12 = 180.",a:true},
{t:"fillin",type:"fillin",q:"96 / 8 = ___.",blanks:["12"]},
{t:"tapall",type:"tapall",q:"Tap multiplications giving 72.",pool:["8 x 9","6 x 12","18 x 4","24 x 3","9 x 7","11 x 6"],correct:["8 x 9","6 x 12","18 x 4","24 x 3"]},
{t:"enterval",type:"enterval",q:"19 x 6 - 14 = ?",a:100}
],
[
{t:"word",q:"A train has 14 coaches with 60 seats each. Total seats?",o:["840","800","880","780"],a:0},
{t:"word",q:"234 chocolates shared among 6 kids equally. Each gets?",o:["39","38","40","36"],a:0},
{t:"word",q:"Mum spends Rs 23 daily on milk. In 7 days?",o:["161","150","170","140"],a:0},
{t:"missing",q:"32 x ___ = 96",o:["3","4","2","5"],a:0},
{t:"word",q:"A shopkeeper sells 18 kg rice each day. Sale in 5 days?",o:["90","85","95","80"],a:0},
{t:"div",type:"tf",q:"180 / 9 = 20.",a:true},
{t:"mult",type:"tf",q:"24 x 7 = 168.",a:true},
{t:"fillin",type:"fillin",q:"125 / 5 = ___.",blanks:["25"]},
{t:"tapall",type:"tapall",q:"Tap divisions equal to 9.",pool:["54 / 6","63 / 7","72 / 8","81 / 9","45 / 9","60 / 6"],correct:["54 / 6","63 / 7","72 / 8","81 / 9"]},
{t:"enterval",type:"enterval",q:"If 28 x 5 = ?, find product.",a:140}
],
[
{t:"word",q:"45 stickers per book in 12 books. Total?",o:["540","480","520","560"],a:0},
{t:"word",q:"Sweets 144 are shared with 12 students. Each gets?",o:["12","10","14","11"],a:0},
{t:"word",q:"Aman saves Rs 35 each week. After 6 weeks he saved?",o:["210","200","220","180"],a:0},
{t:"missing",q:"___ x 9 = 108",o:["12","11","13","14"],a:0},
{t:"word",q:"There are 96 books on 6 equal shelves. How many per shelf?",o:["16","15","17","14"],a:0},
{t:"mult",type:"tf",q:"35 x 4 = 140.",a:true},
{t:"div",type:"tf",q:"154 / 7 = 22.",a:true},
{t:"fillin",type:"fillin",q:"17 x 6 = ___.",blanks:["102"]},
{t:"tapall",type:"tapall",q:"Tap products that equal 60.",pool:["10 x 6","12 x 5","15 x 4","20 x 3","25 x 3","9 x 7"],correct:["10 x 6","12 x 5","15 x 4","20 x 3"]},
{t:"enterval",type:"enterval",q:"36 x 3 - 8 = ?",a:100}
]
]
},
12: { title:'How Heavy? How Light?',
beginner:[
[
{t:"unit",q:"Which unit is used to weigh an apple?",o:["grams","kilometres","litres","metres"],a:0},
{t:"unit",q:"Which unit is used to weigh a sack of rice?",o:["kilograms","grams","millilitres","centimetres"],a:0},
{t:"convert",q:"How many grams make 1 kilogram?",o:["1000","100","10","500"],a:0},
{t:"compare",q:"Which is heavier?",o:["1 kg of stones","500 g of stones","200 g of stones","100 g of stones"],a:0},
{t:"tool",type:"tf",q:"A weighing balance is used to measure weight.",a:true},
{t:"unit",type:"tf",q:"We weigh a pencil in kilograms.",a:false},
{t:"convert",type:"fillin",q:"2 kg = ___ g",blanks:["2000"]},
{t:"tapall",type:"tapall",q:"Tap all items usually weighed in kilograms.",pool:["rice bag","watermelon","feather","paperclip","sugar sack"],correct:["rice bag","watermelon","sugar sack"]},
{t:"enterval",type:"enterval",q:"How many grams are in 3 kilograms?",a:3000},
{t:"enterval",type:"enterval",q:"How many grams are in half a kilogram?",a:500}
],
[
{t:"unit",q:"What unit weighs a small biscuit?",o:["grams","kilograms","litres","metres"],a:0},
{t:"convert",q:"5 kg = how many grams?",o:["5000 g","500 g","50 g","50000 g"],a:0},
{t:"compare",q:"Which is the lightest?",o:["10 g","100 g","500 g","1 kg"],a:0},
{t:"add",q:"Ravi's bag has 2 kg books and 1 kg lunch. Total weight?",o:["3 kg","2 kg","1 kg","4 kg"],a:0},
{t:"unit",type:"tf",q:"A truck is weighed in kilograms.",a:true},
{t:"compare",type:"tf",q:"500 g is heavier than 1 kg.",a:false},
{t:"convert",type:"fillin",q:"1 kg = ___ g",blanks:["1000"]},
{t:"tapall",type:"tapall",q:"Tap items usually weighed in grams.",pool:["chilli","biscuit","cement bag","needle","bricks"],correct:["chilli","biscuit","needle"]},
{t:"enterval",type:"enterval",q:"How many grams in 4 kg?",a:4000},
{t:"enterval",type:"enterval",q:"A book is 250 g. Two such books weigh how many grams?",a:500}
],
[
{t:"compare",q:"Which is the heaviest?",o:["2 kg","200 g","20 g","500 g"],a:0},
{t:"convert",q:"3000 g = how many kg?",o:["3 kg","30 kg","300 kg","0.3 kg"],a:0},
{t:"unit",q:"Best unit to weigh an elephant?",o:["kilograms","grams","millilitres","metres"],a:0},
{t:"sub",q:"A bag holds 5 kg sugar. 2 kg used. How much left?",o:["3 kg","2 kg","7 kg","1 kg"],a:0},
{t:"compare",type:"tf",q:"1 kg = 1000 g.",a:true},
{t:"unit",type:"tf",q:"Feather is heavier than a brick.",a:false},
{t:"convert",type:"fillin",q:"4 kg = ___ g",blanks:["4000"]},
{t:"tapall",type:"tapall",q:"Tap things lighter than 1 kg usually.",pool:["pencil","eraser","cement bag","watermelon","sticker"],correct:["pencil","eraser","sticker"]},
{t:"enterval",type:"enterval",q:"How many grams in 2 kg?",a:2000},
{t:"enterval",type:"enterval",q:"How many 500 g packets make 1 kg?",a:2}
],
[
{t:"unit",q:"Best unit to weigh a small chocolate?",o:["grams","kilograms","litres","metres"],a:0},
{t:"convert",q:"1 kg 500 g = how many grams?",o:["1500 g","150 g","15000 g","105 g"],a:0},
{t:"compare",q:"Which weighs more?",o:["750 g","500 g","250 g","100 g"],a:0},
{t:"add",q:"Mum bought 2 kg potato and 1 kg onion. Total?",o:["3 kg","1 kg","2 kg","4 kg"],a:0},
{t:"unit",type:"tf",q:"A car is heavier than a chair.",a:true},
{t:"compare",type:"tf",q:"100 g is more than 1 kg.",a:false},
{t:"convert",type:"fillin",q:"6 kg = ___ g",blanks:["6000"]},
{t:"tapall",type:"tapall",q:"Tap items measured in kilograms.",pool:["rice","wheat","sugar bag","needle","stamp"],correct:["rice","wheat","sugar bag"]},
{t:"enterval",type:"enterval",q:"How many grams in 5 kg?",a:5000},
{t:"enterval",type:"enterval",q:"4 packets of 250 g sugar weigh how many grams?",a:1000}
],
[
{t:"unit",q:"Which is the smallest unit?",o:["grams","kilograms","tonnes","quintals"],a:0},
{t:"convert",q:"7 kg = ?",o:["7000 g","700 g","70 g","70000 g"],a:0},
{t:"compare",q:"Which is the heaviest?",o:["1 kg","999 g","500 g","250 g"],a:0},
{t:"sub",q:"From 10 kg flour, 4 kg used. Left?",o:["6 kg","14 kg","4 kg","5 kg"],a:0},
{t:"compare",type:"tf",q:"2 kg is heavier than 1500 g.",a:true},
{t:"unit",type:"tf",q:"Tomato is weighed in litres.",a:false},
{t:"convert",type:"fillin",q:"3 kg = ___ g",blanks:["3000"]},
{t:"tapall",type:"tapall",q:"Tap items usually weighed in grams.",pool:["spices","tea leaves","sugar sack","stone","chalk"],correct:["spices","tea leaves","chalk"]},
{t:"enterval",type:"enterval",q:"How many grams in 8 kg?",a:8000},
{t:"enterval",type:"enterval",q:"5 packets of 200 g make how many grams?",a:1000}
]
],
pro:[
[
{t:"add",q:"A bag has 2 kg rice and 500 g dal. Total in g?",o:["2500 g","2050 g","2005 g","2500 kg"],a:0},
{t:"sub",q:"A box weighs 5 kg. After taking 1500 g out, weight?",o:["3500 g","4500 g","6500 g","2500 g"],a:0},
{t:"missing",q:"___ + 500 g = 2 kg",o:["1500 g","1000 g","2500 g","500 g"],a:0},
{t:"word",q:"Riya bought 3 packets of 250 g biscuits. Total?",o:["750 g","500 g","1000 g","250 g"],a:0},
{t:"compare",type:"tf",q:"3 kg = 2 kg 1000 g.",a:true},
{t:"convert",type:"tf",q:"5500 g is the same as 5 kg 500 g.",a:true},
{t:"convert",type:"fillin",q:"2 kg 250 g = ___ g",blanks:["2250"]},
{t:"tapall",type:"tapall",q:"Tap weights equal to 2 kg.",pool:["2000 g","1500 g","2 kg","500 g","1 kg 1000 g"],correct:["2000 g","2 kg","1 kg 1000 g"]},
{t:"enterval",type:"enterval",q:"How many grams in 2 kg 500 g?",a:2500},
{t:"enterval",type:"enterval",q:"From 5 kg, take away 2500 g. Grams left?",a:2500}
],
[
{t:"word",q:"Mum buys 1 kg 500 g apples and 2 kg oranges. Total weight?",o:["3 kg 500 g","3 kg","2 kg 500 g","4 kg"],a:0},
{t:"sub",q:"A bag of 4 kg loses 750 g. Left?",o:["3 kg 250 g","3 kg 750 g","4 kg 750 g","3 kg"],a:0},
{t:"missing",q:"3 kg = 2 kg + ___ g",o:["1000","100","500","1500"],a:0},
{t:"word",q:"4 packets of 500 g sugar weigh?",o:["2 kg","1 kg","4 kg","500 g"],a:0},
{t:"compare",type:"tf",q:"2500 g is heavier than 2 kg.",a:true},
{t:"compare",type:"tf",q:"1 kg of feathers is lighter than 1 kg of iron.",a:false},
{t:"convert",type:"fillin",q:"3500 g = 3 kg ___ g",blanks:["500"]},
{t:"tapall",type:"tapall",q:"Tap weights heavier than 1 kg.",pool:["1500 g","2 kg","800 g","999 g","3000 g"],correct:["1500 g","2 kg","3000 g"]},
{t:"enterval",type:"enterval",q:"3 kg 250 g equals how many grams?",a:3250},
{t:"enterval",type:"enterval",q:"6 packets of 500 g rice weigh how many grams?",a:3000}
],
[
{t:"word",q:"Box A is 2 kg, Box B is 3 kg 500 g. Together?",o:["5 kg 500 g","5 kg","6 kg","4 kg 500 g"],a:0},
{t:"sub",q:"A 10 kg bag uses 2 kg 500 g. Left?",o:["7 kg 500 g","8 kg 500 g","7 kg","12 kg 500 g"],a:0},
{t:"missing",q:"___ g + 750 g = 2 kg",o:["1250","250","1500","500"],a:0},
{t:"word",q:"5 mangoes weigh 1 kg. Each mango weighs about?",o:["200 g","100 g","500 g","1 kg"],a:0},
{t:"compare",type:"tf",q:"1 kg 200 g is more than 1500 g.",a:false},
{t:"convert",type:"tf",q:"4 kg = 4000 g.",a:true},
{t:"convert",type:"fillin",q:"5 kg 750 g = ___ g",blanks:["5750"]},
{t:"tapall",type:"tapall",q:"Tap weights equal to 1 kg 500 g.",pool:["1500 g","1 kg 500 g","1 kg","500 g","1500 grams"],correct:["1500 g","1 kg 500 g","1500 grams"]},
{t:"enterval",type:"enterval",q:"4 kg 500 g equals how many grams?",a:4500},
{t:"enterval",type:"enterval",q:"From 8 kg, take 2 kg. Grams left?",a:6000}
],
[
{t:"word",q:"3 boxes of 2 kg each weigh?",o:["6 kg","5 kg","9 kg","3 kg"],a:0},
{t:"sub",q:"A 7 kg bag has 3 kg 500 g taken out. Left?",o:["3 kg 500 g","4 kg","10 kg 500 g","3 kg"],a:0},
{t:"missing",q:"2 kg + ___ = 5 kg",o:["3 kg","2 kg","1 kg","500 g"],a:0},
{t:"word",q:"A baby weighs 4 kg, gains 500 g. New weight?",o:["4 kg 500 g","3 kg 500 g","5 kg","4 kg"],a:0},
{t:"compare",type:"tf",q:"6500 g equals 6 kg 500 g.",a:true},
{t:"compare",type:"tf",q:"500 g + 500 g = 1 kg.",a:true},
{t:"convert",type:"fillin",q:"7 kg 100 g = ___ g",blanks:["7100"]},
{t:"tapall",type:"tapall",q:"Tap weights more than 2 kg.",pool:["2500 g","3 kg","1500 g","2 kg 500 g","800 g"],correct:["2500 g","3 kg","2 kg 500 g"]},
{t:"enterval",type:"enterval",q:"4 packets of 750 g sugar weigh how many grams?",a:3000},
{t:"enterval",type:"enterval",q:"How many grams in 9 kg?",a:9000}
],
[
{t:"word",q:"A shopper buys 2 kg apples, 1 kg 500 g grapes. Total?",o:["3 kg 500 g","3 kg","2 kg 500 g","4 kg"],a:0},
{t:"sub",q:"Bag of 6 kg, gives away 2 kg 250 g. Left?",o:["3 kg 750 g","4 kg","8 kg 250 g","3 kg"],a:0},
{t:"missing",q:"5 kg = 3 kg + ___ kg",o:["2","1","3","4"],a:0},
{t:"word",q:"Each watermelon is 3 kg. Two weigh?",o:["6 kg","5 kg","3 kg","9 kg"],a:0},
{t:"compare",type:"tf",q:"1 kg 1 g is lighter than 1500 g.",a:true},
{t:"compare",type:"tf",q:"7 kg is lighter than 7000 g.",a:false},
{t:"convert",type:"fillin",q:"8 kg 50 g = ___ g",blanks:["8050"]},
{t:"tapall",type:"tapall",q:"Tap weights lighter than 1 kg.",pool:["500 g","250 g","999 g","1500 g","2 kg"],correct:["500 g","250 g","999 g"]},
{t:"enterval",type:"enterval",q:"5 kg 500 g equals how many grams?",a:5500},
{t:"enterval",type:"enterval",q:"3 packets of 800 g flour weigh how many grams?",a:2400}
]
]
},
13: { title:'Fields and Fences',
beginner:[
[
{t:"area",q:"Area is measured by counting?",o:["unit squares","sides","corners","lines"],a:0},
{t:"perimeter",q:"Perimeter means?",o:["distance around the shape","inside the shape","top of shape","one side"],a:0},
{t:"rect",q:"A rectangle has 4 sides of 5, 3, 5, 3. Perimeter?",o:["16","8","15","18"],a:0},
{t:"square",q:"A square has each side 4 cm. Perimeter?",o:["16 cm","8 cm","12 cm","20 cm"],a:0},
{t:"area",type:"tf",q:"Area tells the space inside a shape.",a:true},
{t:"perimeter",type:"tf",q:"Perimeter is the number of unit squares inside.",a:false},
{t:"area",type:"fillin",q:"A rectangle of 4 unit squares by 2 has area ___ unit squares.",blanks:["8"]},
{t:"tapall",type:"tapall",q:"Tap shapes that have 4 equal sides.",pool:["square","rectangle","triangle","circle","oval"],correct:["square"]},
{t:"enterval",type:"enterval",q:"Square side 6 cm. Perimeter in cm?",a:24},
{t:"enterval",type:"enterval",q:"Rectangle 5 by 2 unit squares. Area?",a:10}
],
[
{t:"area",q:"A 3 by 3 square has area?",o:["9 unit squares","6 unit squares","12 unit squares","3 unit squares"],a:0},
{t:"perimeter",q:"A square of side 5 cm has perimeter?",o:["20 cm","10 cm","25 cm","15 cm"],a:0},
{t:"rect",q:"Rectangle 6 cm by 2 cm. Perimeter?",o:["16 cm","12 cm","8 cm","10 cm"],a:0},
{t:"area",q:"Rectangle 4 by 3 squares. Area?",o:["12","7","10","9"],a:0},
{t:"area",type:"tf",q:"A 2 by 2 square has 4 unit squares.",a:true},
{t:"perimeter",type:"tf",q:"Perimeter of square = 3 times side.",a:false},
{t:"perimeter",type:"fillin",q:"Square side 7 cm. Perimeter = ___ cm.",blanks:["28"]},
{t:"tapall",type:"tapall",q:"Tap formulas for square perimeter.",pool:["4 x side","side + side + side + side","2 x side","3 x side","side x side"],correct:["4 x side","side + side + side + side"]},
{t:"enterval",type:"enterval",q:"Rectangle 7 by 3 unit squares. Area?",a:21},
{t:"enterval",type:"enterval",q:"Rectangle 5 cm by 4 cm. Perimeter cm?",a:18}
],
[
{t:"area",q:"A 5 by 5 square area?",o:["25","10","20","15"],a:0},
{t:"perimeter",q:"Rectangle 8 cm by 3 cm. Perimeter?",o:["22 cm","11 cm","24 cm","16 cm"],a:0},
{t:"square",q:"Square side 9 cm. Perimeter?",o:["36 cm","18 cm","27 cm","81 cm"],a:0},
{t:"area",q:"Rectangle 6 by 4 squares. Area?",o:["24","10","20","18"],a:0},
{t:"area",type:"tf",q:"Bigger rectangles always have bigger area.",a:false},
{t:"perimeter",type:"tf",q:"To fence a field we need its perimeter.",a:true},
{t:"area",type:"fillin",q:"A square of side 4 has area ___ unit squares.",blanks:["16"]},
{t:"tapall",type:"tapall",q:"Tap shapes whose area we can find by counting unit squares.",pool:["square","rectangle","circle","triangle","oval"],correct:["square","rectangle"]},
{t:"enterval",type:"enterval",q:"Square side 10 cm. Perimeter cm?",a:40},
{t:"enterval",type:"enterval",q:"Rectangle 9 by 2 squares. Area?",a:18}
],
[
{t:"perimeter",q:"Rectangle 10 cm by 5 cm. Perimeter?",o:["30 cm","15 cm","50 cm","25 cm"],a:0},
{t:"area",q:"Rectangle 7 by 4. Area in unit squares?",o:["28","11","21","32"],a:0},
{t:"square",q:"Square side 12 cm. Perimeter?",o:["48 cm","24 cm","144 cm","36 cm"],a:0},
{t:"area",q:"Square side 6. Area?",o:["36","12","24","18"],a:0},
{t:"area",type:"tf",q:"Area is measured in square units.",a:true},
{t:"perimeter",type:"tf",q:"A square has 5 sides.",a:false},
{t:"perimeter",type:"fillin",q:"Square side 8 cm. Perimeter = ___ cm.",blanks:["32"]},
{t:"tapall",type:"tapall",q:"Tap items measured by perimeter.",pool:["fence around field","border of garden","inside floor area","ribbon around photo","painted wall area"],correct:["fence around field","border of garden","ribbon around photo"]},
{t:"enterval",type:"enterval",q:"Square side 5 cm. Perimeter cm?",a:20},
{t:"enterval",type:"enterval",q:"Rectangle 6 by 3 unit squares. Area?",a:18}
],
[
{t:"area",q:"A 4 by 4 square has area?",o:["16","8","12","20"],a:0},
{t:"perimeter",q:"Rectangle 9 cm by 2 cm. Perimeter?",o:["22 cm","11 cm","18 cm","20 cm"],a:0},
{t:"square",q:"Square side 3 m. Perimeter?",o:["12 m","6 m","9 m","15 m"],a:0},
{t:"area",q:"Rectangle 8 by 2 squares. Area?",o:["16","10","12","18"],a:0},
{t:"area",type:"tf",q:"Two rectangles can have same area but different shape.",a:true},
{t:"perimeter",type:"tf",q:"Perimeter of 2 by 3 rectangle is 10.",a:true},
{t:"perimeter",type:"fillin",q:"Rectangle 6 cm by 4 cm has perimeter ___ cm.",blanks:["20"]},
{t:"tapall",type:"tapall",q:"Tap rectangles with area 12 unit squares.",pool:["3 by 4","2 by 6","1 by 12","2 by 5","3 by 3"],correct:["3 by 4","2 by 6","1 by 12"]},
{t:"enterval",type:"enterval",q:"Square side 11 cm. Perimeter cm?",a:44},
{t:"enterval",type:"enterval",q:"Rectangle 10 by 3 unit squares. Area?",a:30}
]
],
pro:[
[
{t:"word",q:"A field is 20 m by 10 m. How much wire to fence?",o:["60 m","30 m","200 m","40 m"],a:0},
{t:"word",q:"A square garden has side 15 m. Total fencing?",o:["60 m","45 m","75 m","225 m"],a:0},
{t:"missing",q:"A rectangle has perimeter 20 cm and length 6 cm. Width?",o:["4 cm","5 cm","6 cm","8 cm"],a:0},
{t:"compare",q:"Which has more area: A=4x6 or B=5x5?",o:["B","A","equal","cannot say"],a:0},
{t:"area",type:"tf",q:"A 5 by 4 rectangle has 20 unit squares.",a:true},
{t:"perimeter",type:"tf",q:"If side of square doubles, perimeter doubles.",a:true},
{t:"area",type:"fillin",q:"A 6 by 5 rectangle has area ___ unit squares.",blanks:["30"]},
{t:"tapall",type:"tapall",q:"Tap rectangles with area 24 squares.",pool:["4 by 6","3 by 8","2 by 12","5 by 5","1 by 24"],correct:["4 by 6","3 by 8","2 by 12","1 by 24"]},
{t:"enterval",type:"enterval",q:"A 12 m by 8 m field needs how many m of fence?",a:40},
{t:"enterval",type:"enterval",q:"Square room of side 7 m. Floor area in sq m?",a:49}
],
[
{t:"word",q:"A square plot of side 25 m needs fence. Total m?",o:["100","50","625","75"],a:0},
{t:"word",q:"Garden 30 m by 20 m. Perimeter?",o:["100 m","50 m","600 m","60 m"],a:0},
{t:"missing",q:"Perimeter of rectangle = 30 cm, width = 5 cm. Length?",o:["10 cm","20 cm","15 cm","25 cm"],a:0},
{t:"compare",q:"Which has bigger area: 6x4 or 7x3?",o:["6x4","7x3","equal","none"],a:0},
{t:"perimeter",type:"tf",q:"Two rectangles can share area but differ in perimeter.",a:true},
{t:"area",type:"tf",q:"Area uses sides; perimeter uses corners.",a:false},
{t:"perimeter",type:"fillin",q:"Square of side 13 cm. Perimeter = ___ cm.",blanks:["52"]},
{t:"tapall",type:"tapall",q:"Tap rectangles with perimeter 12.",pool:["1 by 5","2 by 4","3 by 3","6 by 6","2 by 5"],correct:["1 by 5","2 by 4","3 by 3"]},
{t:"enterval",type:"enterval",q:"Field 50 m by 30 m. Fence length m?",a:160},
{t:"enterval",type:"enterval",q:"Tile floor 8 m by 6 m. Area sq m?",a:48}
],
[
{t:"word",q:"Mat 2 m by 3 m. Area in sq m?",o:["6","5","8","4"],a:0},
{t:"word",q:"Square photo side 10 cm. Ribbon around it?",o:["40 cm","20 cm","100 cm","30 cm"],a:0},
{t:"missing",q:"Rectangle area 24 sq cm, length 6 cm. Width?",o:["4 cm","6 cm","3 cm","5 cm"],a:0},
{t:"compare",q:"Which needs more fence: 8x2 or 5x5?",o:["both equal","8x2","5x5","cannot say"],a:0},
{t:"area",type:"tf",q:"A 1 by 10 rectangle has same area as a 2 by 5 rectangle.",a:true},
{t:"perimeter",type:"tf",q:"Square of side 4 has perimeter 16.",a:true},
{t:"area",type:"fillin",q:"Rectangle 9 cm by 4 cm has area ___ sq cm.",blanks:["36"]},
{t:"tapall",type:"tapall",q:"Tap rectangles with area 16 squares.",pool:["1 by 16","2 by 8","4 by 4","3 by 6","8 by 2"],correct:["1 by 16","2 by 8","4 by 4","8 by 2"]},
{t:"enterval",type:"enterval",q:"Square side 14 m. Perimeter m?",a:56},
{t:"enterval",type:"enterval",q:"Rectangle 11 by 5 unit squares. Area?",a:55}
],
[
{t:"word",q:"Field 15 m by 9 m. Perimeter?",o:["48 m","24 m","135 m","45 m"],a:0},
{t:"word",q:"Square table side 80 cm. Border ribbon?",o:["320 cm","160 cm","6400 cm","240 cm"],a:0},
{t:"missing",q:"Perimeter 24 cm, square. Side?",o:["6 cm","4 cm","8 cm","12 cm"],a:0},
{t:"compare",q:"Larger area: 7x6 or 8x5?",o:["7x6","8x5","equal","cannot say"],a:0},
{t:"area",type:"tf",q:"A square of side 5 has area 25 sq cm.",a:true},
{t:"perimeter",type:"tf",q:"Doubling all sides doubles area.",a:false},
{t:"perimeter",type:"fillin",q:"Rectangle 12 cm by 5 cm has perimeter ___ cm.",blanks:["34"]},
{t:"tapall",type:"tapall",q:"Tap shapes with perimeter 20 cm.",pool:["square side 5 cm","rectangle 6 by 4","rectangle 7 by 3","square side 4 cm","rectangle 8 by 2"],correct:["square side 5 cm","rectangle 6 by 4","rectangle 7 by 3","rectangle 8 by 2"]},
{t:"enterval",type:"enterval",q:"Rectangle 9 m by 4 m. Perimeter m?",a:26},
{t:"enterval",type:"enterval",q:"Square side 9 cm. Area sq cm?",a:81}
],
[
{t:"word",q:"A square park has side 40 m. Walk around once?",o:["160 m","80 m","1600 m","120 m"],a:0},
{t:"word",q:"Floor 12 m by 5 m. Area in sq m?",o:["60","17","34","25"],a:0},
{t:"missing",q:"Rectangle area 35 sq cm, width 5 cm. Length?",o:["7 cm","6 cm","5 cm","8 cm"],a:0},
{t:"compare",q:"Bigger perimeter: 10x2 or 5x5?",o:["10x2","5x5","equal","cannot say"],a:0},
{t:"area",type:"tf",q:"Area of rectangle = length x width.",a:true},
{t:"perimeter",type:"tf",q:"Perimeter of rectangle = 2 x (length + width).",a:true},
{t:"area",type:"fillin",q:"Square of side 12 cm has area ___ sq cm.",blanks:["144"]},
{t:"tapall",type:"tapall",q:"Tap real-life uses of perimeter.",pool:["wire fencing","photo frame border","painting a wall","tiling a floor","running track length"],correct:["wire fencing","photo frame border","running track length"]},
{t:"enterval",type:"enterval",q:"Field 25 m by 15 m. Fence length m?",a:80},
{t:"enterval",type:"enterval",q:"Rectangle 13 cm by 4 cm. Area sq cm?",a:52}
]
]
},
14: { title:'Smart Charts',
beginner:[
[
{t:"chart",q:"A bar graph uses?",o:["bars","circles","arrows","lines only"],a:0},
{t:"chart",q:"A pictograph uses?",o:["pictures","words","equations","numbers"],a:0},
{t:"table",q:"A table has rows and?",o:["columns","circles","stars","triangles"],a:0},
{t:"read",q:"In a fruit chart, mango=5, apple=3. Which has more?",o:["mango","apple","equal","none"],a:0},
{t:"chart",type:"tf",q:"A bar graph helps us compare values quickly.",a:true},
{t:"chart",type:"tf",q:"Pictographs only use letters.",a:false},
{t:"read",type:"fillin",q:"If 1 picture = 2 cars and there are 4 pictures, total cars = ___",blanks:["8"]},
{t:"tapall",type:"tapall",q:"Tap chart types you study.",pool:["bar graph","pictograph","table","speech","poem"],correct:["bar graph","pictograph","table"]},
{t:"enterval",type:"enterval",q:"In a class, 6 like apples, 4 like bananas. Total students?",a:10},
{t:"enterval",type:"enterval",q:"Pictograph: 1 star = 5 books. 3 stars = how many books?",a:15}
],
[
{t:"read",q:"Bar graph: cricket=10, football=6. Difference?",o:["4","2","16","6"],a:0},
{t:"chart",q:"Which chart uses pictures to show data?",o:["pictograph","bar graph","table","map"],a:0},
{t:"compare",q:"In a bar chart, longer bar means?",o:["more","less","equal","unknown"],a:0},
{t:"read",q:"Sweets sold: ladoo=8, jalebi=5. Total?",o:["13","3","40","18"],a:0},
{t:"chart",type:"tf",q:"Tables show data in rows and columns.",a:true},
{t:"compare",type:"tf",q:"In a pictograph, fewer pictures means more.",a:false},
{t:"read",type:"fillin",q:"If 1 symbol = 10 students and there are 5 symbols, total = ___",blanks:["50"]},
{t:"tapall",type:"tapall",q:"Tap things we can show in a bar graph.",pool:["favorite fruit","weather days","class scores","wind speed feel","colors of dress"],correct:["favorite fruit","weather days","class scores","colors of dress"]},
{t:"enterval",type:"enterval",q:"Class scores: 5+8+7. Total?",a:20},
{t:"enterval",type:"enterval",q:"4 pictures, each = 6 toys. Total toys?",a:24}
],
[
{t:"read",q:"Pets: dog=7, cat=4, fish=2. Most popular?",o:["dog","cat","fish","none"],a:0},
{t:"compare",q:"Bar A=12, Bar B=8. Difference?",o:["4","20","2","8"],a:0},
{t:"read",q:"Days sunny=5, rainy=3, cloudy=2. Total days?",o:["10","8","12","15"],a:0},
{t:"chart",q:"On a bar graph, the height shows?",o:["amount or number","color","name","date"],a:0},
{t:"chart",type:"tf",q:"A pictograph key tells what each picture stands for.",a:true},
{t:"compare",type:"tf",q:"Equal bars mean equal values.",a:true},
{t:"read",type:"fillin",q:"If 1 symbol = 4 chairs and there are 6 symbols, total = ___",blanks:["24"]},
{t:"tapall",type:"tapall",q:"Tap parts of a bar graph.",pool:["bars","title","axes","wheels","numbers"],correct:["bars","title","axes","numbers"]},
{t:"enterval",type:"enterval",q:"Toys: 6+9+5. Total?",a:20},
{t:"enterval",type:"enterval",q:"5 pictures, each = 3 stars. Total stars?",a:15}
],
[
{t:"read",q:"Books read: Mon=3, Tue=2, Wed=4. Total?",o:["9","7","12","8"],a:0},
{t:"compare",q:"Apples=10, oranges=6. Apples more by?",o:["4","16","6","2"],a:0},
{t:"chart",q:"Which is best for showing daily temperature?",o:["bar graph","pictograph","table","photo"],a:0},
{t:"read",q:"Children: boys=12, girls=8. Total?",o:["20","4","16","12"],a:0},
{t:"chart",type:"tf",q:"Charts make data easier to understand.",a:true},
{t:"chart",type:"tf",q:"A table cannot show numbers.",a:false},
{t:"read",type:"fillin",q:"Bar graph: cars=15, bikes=10. Total = ___",blanks:["25"]},
{t:"tapall",type:"tapall",q:"Tap things best shown by a chart.",pool:["class marks","favorite color","monthly rain","weight loss","feelings during dance"],correct:["class marks","favorite color","monthly rain","weight loss"]},
{t:"enterval",type:"enterval",q:"Pictograph: 1 face = 5 kids. 4 faces = how many kids?",a:20},
{t:"enterval",type:"enterval",q:"Sweets sold M-T: 6, 7, 5. Total?",a:18}
],
[
{t:"read",q:"Vegetables sold: potato=20, tomato=15. More by?",o:["5","35","10","15"],a:0},
{t:"chart",q:"In a pictograph, more symbols means?",o:["more","less","equal","none"],a:0},
{t:"compare",q:"Sales: shop A=30, B=25. Higher?",o:["A","B","equal","none"],a:0},
{t:"read",q:"Children's marks: 8, 9, 10. Total?",o:["27","17","19","20"],a:0},
{t:"chart",type:"tf",q:"Bar graphs need a scale.",a:true},
{t:"compare",type:"tf",q:"A taller bar means a smaller value.",a:false},
{t:"read",type:"fillin",q:"Pictograph: 1 picture = 2 birds. 7 pictures = ___ birds.",blanks:["14"]},
{t:"tapall",type:"tapall",q:"Tap charts that compare quantities.",pool:["bar graph","pictograph","table","story","photograph"],correct:["bar graph","pictograph","table"]},
{t:"enterval",type:"enterval",q:"Animals in zoo: lions 5, tigers 4, bears 3. Total?",a:12},
{t:"enterval",type:"enterval",q:"6 symbols, each = 5 stickers. Total stickers?",a:30}
]
],
pro:[
[
{t:"word",q:"Pictograph: 1 ball = 4 children. Class A has 5 balls, Class B has 3 balls. Total kids?",o:["32","20","12","16"],a:0},
{t:"compare",q:"Bar chart cricket=25, football=15, hockey=10. Most liked?",o:["cricket","football","hockey","none"],a:0},
{t:"missing",q:"Bar A=18, Bar B=?. Total=30. B=?",o:["12","48","13","18"],a:0},
{t:"word",q:"Pictograph: 1 star = 10 votes. Ravi got 4 stars. Votes?",o:["40","14","4","10"],a:0},
{t:"chart",type:"tf",q:"In a pictograph, half a picture means half the value.",a:true},
{t:"compare",type:"tf",q:"If A=20 and B=15, then A is greater than B by 5.",a:true},
{t:"read",type:"fillin",q:"Bar graph: dogs 12, cats 8, birds 5. Total animals = ___",blanks:["25"]},
{t:"tapall",type:"tapall",q:"Tap data shown well by a bar graph.",pool:["class strength","monthly rain","favorite sport","heartbeat sound","cake flavors"],correct:["class strength","monthly rain","favorite sport","cake flavors"]},
{t:"enterval",type:"enterval",q:"Pictograph: 1 symbol = 6 toys. 7 symbols = how many toys?",a:42},
{t:"enterval",type:"enterval",q:"Books: M=4, T=6, W=5, Th=7. Total?",a:22}
],
[
{t:"word",q:"Pictograph: 1 leaf = 5 trees. Park has 8 leaves shown. Trees?",o:["40","13","8","48"],a:0},
{t:"compare",q:"Bar: A=22, B=18, C=30. Largest minus smallest?",o:["12","48","8","30"],a:0},
{t:"missing",q:"Total bar values = 50. A=20, B=15, C=?",o:["15","20","30","10"],a:0},
{t:"word",q:"Each picture shows 3 oranges. Aman ate as many oranges as 4 pictures. How many?",o:["12","7","3","4"],a:0},
{t:"chart",type:"tf",q:"A scale of 1 unit = 5 means each grid line is worth 5.",a:true},
{t:"chart",type:"tf",q:"A pictograph cannot have a key.",a:false},
{t:"read",type:"fillin",q:"Bar graph: math=9, hindi=7, EVS=8. Total marks = ___",blanks:["24"]},
{t:"tapall",type:"tapall",q:"Tap good titles for a chart on weather.",pool:["Weather in May","Daily Rainfall","Sunny vs Cloudy Days","Best Cake Recipe","Animal Heights"],correct:["Weather in May","Daily Rainfall","Sunny vs Cloudy Days"]},
{t:"enterval",type:"enterval",q:"Bar A=16, B=24. Difference?",a:8},
{t:"enterval",type:"enterval",q:"Pictograph: 1 car = 10 cars. 9 cars shown. Total cars?",a:90}
],
[
{t:"word",q:"Class likes: cricket 18, football 12, kabbadi 6. Total kids?",o:["36","30","24","18"],a:0},
{t:"compare",q:"Pictograph A=5 symbols, B=8 symbols, each=10. B more by?",o:["30","3","13","80"],a:0},
{t:"missing",q:"3 bars total 60. A=25, B=20, C=?",o:["15","20","10","25"],a:0},
{t:"word",q:"Veggies sold (kg): Mon=20, Tue=15, Wed=25. Total?",o:["60","40","50","70"],a:0},
{t:"chart",type:"tf",q:"Charts help compare data fast.",a:true},
{t:"chart",type:"tf",q:"In a table, columns go left to right.",a:false},
{t:"read",type:"fillin",q:"Pictograph: 1 cup = 4 teas. 9 cups = ___ teas.",blanks:["36"]},
{t:"tapall",type:"tapall",q:"Tap ways to collect data.",pool:["asking class","counting items","observing weather","making up answers","reading thermometer"],correct:["asking class","counting items","observing weather","reading thermometer"]},
{t:"enterval",type:"enterval",q:"Days played: M=2, T=3, W=4, Th=1. Total days?",a:10},
{t:"enterval",type:"enterval",q:"Bar A=35, B=15. Difference?",a:20}
],
[
{t:"word",q:"Pictograph: 1 face = 8 voters. Mira got 6 faces, Karan got 4. Mira more by?",o:["16","2","48","32"],a:0},
{t:"compare",q:"Bar values 14, 28, 21, 7. Total?",o:["70","49","56","42"],a:0},
{t:"missing",q:"3 bars total 75. A=20, C=30. B=?",o:["25","20","30","45"],a:0},
{t:"word",q:"In a class survey 12 like tea, 18 like coffee, 6 like milk. Most liked?",o:["coffee","tea","milk","none"],a:0},
{t:"chart",type:"tf",q:"A scale lets us show big values in small charts.",a:true},
{t:"chart",type:"tf",q:"A pictograph with 1 picture = 5 cannot show 7.",a:false},
{t:"read",type:"fillin",q:"Bar graph: ladoo=14, jalebi=11. Difference = ___",blanks:["3"]},
{t:"tapall",type:"tapall",q:"Tap good chart features.",pool:["title","scale","clear labels","missing axis","random colors only"],correct:["title","scale","clear labels"]},
{t:"enterval",type:"enterval",q:"Books read by 4 kids: 6, 8, 5, 7. Total?",a:26},
{t:"enterval",type:"enterval",q:"Pictograph: 1 symbol = 12 mangoes. 5 symbols = how many mangoes?",a:60}
],
[
{t:"word",q:"Bar graph: Class 4A=35 books, 4B=42, 4C=28. Total books?",o:["105","100","75","98"],a:0},
{t:"compare",q:"Pictograph each 1 = 6 pencils. A=4, B=7. B more by?",o:["18","3","42","24"],a:0},
{t:"missing",q:"Sum of bars = 100. A=40, B=25. C=?",o:["35","45","65","60"],a:0},
{t:"word",q:"Sweets: ladoo 24, jalebi 16, barfi 20. Difference between most and least?",o:["8","60","16","4"],a:0},
{t:"chart",type:"tf",q:"A bar graph and pictograph can show the same data.",a:true},
{t:"compare",type:"tf",q:"In bar graphs, equal heights mean unequal values.",a:false},
{t:"read",type:"fillin",q:"Pictograph 1 cup = 5 milks. 8 cups = ___ milks.",blanks:["40"]},
{t:"tapall",type:"tapall",q:"Tap things shown in a school marks table.",pool:["subjects","total marks","student names","weather","car brands"],correct:["subjects","total marks","student names"]},
{t:"enterval",type:"enterval",q:"Goals scored M-Th: 3, 5, 4, 6. Total?",a:18},
{t:"enterval",type:"enterval",q:"Bar A=50, B=30, C=20. Total?",a:100}
]
]
}
},

// ═══════════════════════════════════════════════════════════════
// GRADE 5 · Chapter 1 · The Fish Tale (Large Numbers)
// ═══════════════════════════════════════════════════════════════
5: { 1: { title:'The Fish Tale',
beginner:[
[
{t:"Place Value",q:"1 lakh = ?",o:["1,00,000","10,000","1,000","10,00,000"],a:0},
{t:"Place Value",type:"enterval",q:"Zeros in 1 lakh?",a:5},
{t:"Place Value",type:"enterval",q:"Place value of 5 in 5,27,340?",a:500000},
{t:"Place Value",type:"fillin",q:"Place value of 4 in 45,123 is ___.",blanks:["40000"]},
{t:"Place Value",type:"tf",q:"10 ten-thousands = 1 lakh.",a:true},
{t:"Place Value",q:"In 3,45,678, thousands place digit?",o:["5","3","4","6"],a:0},
{t:"Place Value",type:"enterval",q:"10,000 + 5,000 + 300 + 20 + 1 = ?",a:15321},
{t:"Place Value",type:"tf",q:"1,00,000 is greater than 99,999.",a:true},
{t:"Place Value",type:"enterval",q:"Hundreds in 1 thousand?",a:10},
{t:"Place Value",type:"tapall",q:"Tap all numbers that have a '0' in the TENS place.",pool:["40,230","56,004","12,340","30,509","2,050","45,103"],correct:["40,230","56,004","30,509","45,103"]}
],
[
{t:"Names",q:"Name for 25,000?",o:["Twenty-five thousand","Two lakh five","Twenty-five lakh","Two thousand five"],a:0},
{t:"Names",type:"tf",q:"1,00,000 is called 'one lakh'.",a:true},
{t:"Names",type:"enterval",q:"'Twenty-five thousand' in digits?",a:25000},
{t:"Names",q:"'Three lakh twenty thousand' in digits?",o:["3,20,000","32,000","3,00,020","30,20,000"],a:0},
{t:"Names",type:"fillin",q:"Name for 5,00,000 is ___ lakh.",blanks:["five"]},
{t:"Names",type:"tapall",q:"Tap all numbers that equal 1 lakh.",pool:["1,00,000","10,000","100,000","1,00,00,000","1 lakh","10 lakh"],correct:["1,00,000","100,000","1 lakh"]},
{t:"Names",type:"tf",q:"10,000 is called 'ten thousand'.",a:true},
{t:"Names",type:"enterval",q:"'Fifty thousand' in digits?",a:50000},
{t:"Names",type:"tf",q:"2,00,000 is called 'two lakh'.",a:true},
{t:"Names",type:"enterval",q:"'Ten lakh' in digits?",a:1000000}
],
[
{t:"Reading",type:"enterval",q:"Largest of 34,567, 45,678, 56,789?",a:56789},
{t:"Reading",type:"enterval",q:"Smallest 5-digit number?",a:10000},
{t:"Reading",type:"enterval",q:"Largest 5-digit number?",a:99999},
{t:"Reading",type:"enterval",q:"Smallest 6-digit number?",a:100000},
{t:"Reading",type:"enterval",q:"Largest 6-digit number?",a:999999},
{t:"Reading",type:"tf",q:"The predecessor of 1,00,000 is 99,999.",a:true},
{t:"Reading",type:"enterval",q:"Successor of 99,999?",a:100000},
{t:"Reading",type:"fillin",q:"In 3,45,678 the tens digit is ___.",blanks:["7"]},
{t:"Reading",type:"tapall",q:"Tap all digits that appear in 3,45,678.",pool:["3","4","5","6","7","8","2","9"],correct:["3","4","5","6","7","8"]},
{t:"Reading",type:"enterval",q:"In 3,45,678 ones digit?",a:8}
],
[
{t:"Multiply",type:"enterval",q:"50 fish × 7 days?",a:350},
{t:"Multiply",type:"enterval",q:"100 × 25?",a:2500},
{t:"Multiply",type:"enterval",q:"8 × 250?",a:2000},
{t:"Multiply",type:"enterval",q:"150 × 10?",a:1500},
{t:"Multiply",type:"enterval",q:"1,000 × 20?",a:20000},
{t:"Multiply",type:"fillin",q:"25 × 40 = ___.",blanks:["1000"]},
{t:"Multiply",type:"enterval",q:"120 × 5?",a:600},
{t:"Multiply",type:"tf",q:"200 × 5 = 1,000.",a:true},
{t:"Multiply",type:"tapall",q:"Tap all products equal to 1,000.",pool:["10×100","25×40","20×50","250×4","5×200","100×100"],correct:["10×100","25×40","20×50","250×4","5×200"]},
{t:"Multiply",type:"enterval",q:"1,000 × 100?",a:100000}
],
[
{t:"Divide",type:"enterval",q:"500 ÷ 5?",a:100},
{t:"Divide",type:"enterval",q:"1,200 ÷ 4?",a:300},
{t:"Divide",type:"enterval",q:"600 ÷ 30?",a:20},
{t:"Divide",type:"enterval",q:"9,000 ÷ 60?",a:150},
{t:"Divide",type:"enterval",q:"5,60,000 ÷ 70?",a:8000},
{t:"Divide",type:"enterval",q:"10,000 ÷ 100?",a:100},
{t:"Divide",type:"fillin",q:"2,500 ÷ 5 = ___.",blanks:["500"]},
{t:"Divide",type:"enterval",q:"800 ÷ 40?",a:20},
{t:"Divide",type:"tf",q:"1,000 ÷ 10 = 100.",a:true},
{t:"Divide",type:"tapall",q:"Tap all divisions that equal 100.",pool:["1000÷10","10000÷100","200÷2","500÷5","100÷1","50÷2"],correct:["1000÷10","10000÷100","500÷5","100÷1"]}
]
],
pro:[
[
{t:"Word",type:"enterval",q:"Caught 3,250 Mon + 4,180 Tue = total?",a:7430},
{t:"Word",type:"enterval",q:"75 kg × ₹60 = total ₹?",a:4500},
{t:"Word",type:"enterval",q:"Truck had 2,500 kg, unloaded 1,870 kg. Left (kg)?",a:630},
{t:"Word",type:"enterval",q:"48 boats × 125 fish = total?",a:6000},
{t:"Word",type:"enterval",q:"Town 12,345 people; 4,567 are kids. Adults?",a:7778},
{t:"Word",type:"fillin",q:"Each fish 1/4 kg. 1,000 fish weigh ___ kg.",blanks:["250"]},
{t:"Word",type:"enterval",q:"₹5,60,000 ÷ 70 workers = each gets ₹?",a:8000},
{t:"Word",type:"tf",q:"1 crate = 48 fish; 125 crates have 6,000 fish.",a:true},
{t:"Word",type:"tapall",q:"Tap all correctly computed totals.",pool:["75 × 60 = 4500","30 × 500 = 15000","48 × 125 = 6000","12345 − 4567 = 7778","100 × 100 = 1000","200 × 25 = 5000"],correct:["75 × 60 = 4500","30 × 500 = 15000","48 × 125 = 6000","12345 − 4567 = 7778","200 × 25 = 5000"]},
{t:"Word",type:"enterval",q:"Daily income ₹500 × 30 days = ₹?",a:15000}
],
[
{t:"Estimate",type:"enterval",q:"Round 48,672 to nearest thousand?",a:49000},
{t:"Estimate",type:"enterval",q:"Round 3,21,456 to nearest lakh?",a:300000},
{t:"Estimate",q:"Estimate 298 × 52 ≈ ?",o:["15,000","10,000","20,000","1,500"],a:0},
{t:"Estimate",type:"enterval",q:"Round 87,432 to nearest hundred?",a:87400},
{t:"Estimate",type:"enterval",q:"Round 34,567 to nearest ten thousand?",a:30000},
{t:"Estimate",type:"enterval",q:"Estimate 405 + 287 ≈ ?",a:700,tol:100},
{t:"Estimate",type:"enterval",q:"Estimate 612 − 289 ≈ ?",a:300,tol:50},
{t:"Estimate",type:"tf",q:"49 × 21 is approximately 1,000.",a:true},
{t:"Estimate",type:"fillin",q:"985 ÷ 49 ≈ ___.",blanks:["20"]},
{t:"Estimate",type:"tapall",q:"Tap all rounding results correct for 4,98,765.",pool:["4,99,000 (nearest 1000)","5,00,000 (nearest lakh)","4,98,000 (nearest 100)","5,00,000 (nearest ten thousand)","5,00,000 (nearest crore)"],correct:["4,99,000 (nearest 1000)","5,00,000 (nearest lakh)","5,00,000 (nearest ten thousand)"]}
],
[
{t:"Rounding",type:"enterval",q:"12,450 to nearest hundred?",a:12500},
{t:"Rounding",type:"enterval",q:"89,300 to nearest thousand?",a:89000},
{t:"Rounding",type:"enterval",q:"5,67,432 to nearest lakh?",a:600000},
{t:"Rounding",type:"enterval",q:"999 to nearest hundred?",a:1000},
{t:"Rounding",type:"enterval",q:"4,321 to nearest ten?",a:4320},
{t:"Rounding",type:"enterval",q:"15,678 to nearest thousand?",a:16000},
{t:"Rounding",type:"fillin",q:"2,34,567 to nearest ten-thousand = ___.",blanks:["230000"]},
{t:"Rounding",type:"tf",q:"56,789 to nearest hundred is 56,800.",a:true},
{t:"Rounding",type:"tapall",q:"Tap all roundings of 1,23,456 that are correct.",pool:["1,23,500 (hundred)","1,23,460 (ten)","1,00,000 (lakh)","1,20,000 (ten thousand)","1,25,000 (lakh)","2,00,000 (lakh)"],correct:["1,23,500 (hundred)","1,23,460 (ten)","1,00,000 (lakh)","1,20,000 (ten thousand)"]},
{t:"Rounding",type:"enterval",q:"87,654 to nearest ten?",a:87650}
],
[
{t:"Compare",q:"Smaller: 45,200 or 45,020?",o:["45,020","45,200","Equal","Cannot tell"],a:0},
{t:"Compare",type:"tf",q:"2,34,567 is greater than 2,30,000.",a:true},
{t:"Compare",q:"Biggest: 99,999 / 1,00,000 / 99,900?",o:["1,00,000","99,999","99,900","Equal"],a:0},
{t:"Compare",type:"enterval",q:"Smallest of 56,789, 55,678, 57,000?",a:55678},
{t:"Compare",type:"tf",q:"8 lakh is greater than 80,000.",a:true},
{t:"Compare",type:"tf",q:"1 lakh is greater than 10,000.",a:true},
{t:"Compare",type:"enterval",q:"1,00,000 − 99,999 = ?",a:1},
{t:"Compare",type:"enterval",q:"2,50,000 − 1,50,000 = ?",a:100000},
{t:"Compare",type:"fillin",q:"1 lakh contains ___ thousands.",blanks:["100"]},
{t:"Compare",type:"tapall",q:"Tap all values equal to 5 lakh.",pool:["5,00,000","500000","50,00,000","5 lakh","50000","0.5 lakh"],correct:["5,00,000","500000","5 lakh"]}
],
[
{t:"MultiStep",type:"enterval",q:"Fisher ₹500/day × 30 days = ₹?",a:15000},
{t:"MultiStep",type:"enterval",q:"200 fish/day × 25 days = ?",a:5000},
{t:"MultiStep",type:"enterval",q:"₹20/kg × 150 kg = ₹?",a:3000},
{t:"MultiStep",type:"enterval",q:"Fuel ₹100 × 7 days = ₹?",a:700},
{t:"MultiStep",type:"enterval",q:"100 boats × 200 fish × ₹30 each = ₹?",a:600000},
{t:"MultiStep",type:"fillin",q:"1 truck 5,000 kg × 20 trucks = ___ kg.",blanks:["100000"]},
{t:"MultiStep",type:"enterval",q:"25 schools × 300 fish each?",a:7500},
{t:"MultiStep",type:"tf",q:"20 villages × 500 people each = 10,000 people.",a:true},
{t:"MultiStep",q:"Light 3 lakh km/sec × 10 s = ?",o:["30 lakh km","3 lakh km","30,000 km","3 crore km"],a:0},
{t:"MultiStep",type:"tapall",q:"Tap all correct multi-step totals.",pool:["₹500×30 = ₹15000","200×25 = 5000","₹20×150 = ₹3000","₹100×7 = ₹707","100×200 = 20000","25×300 = 7500"],correct:["₹500×30 = ₹15000","200×25 = 5000","₹20×150 = ₹3000","25×300 = 7500"]}
]
]
},
// ─── Grade 5 · Chapter 2 · Shapes and Angles ───
2: { title:'Shapes and Angles',
beginner:[
[
{t:"Angle Types",type:"enterval",q:"Right angle = ? degrees",a:90},
{t:"Angle Types",type:"enterval",q:"Full turn = ? degrees",a:360},
{t:"Angle Types",type:"enterval",q:"Half turn = ? degrees",a:180},
{t:"Angle Types",type:"enterval",q:"Quarter turn = ? degrees",a:90},
{t:"Angle Types",q:"Angle less than 90° is?",o:["Acute","Obtuse","Right","Straight"],a:0},
{t:"Angle Types",type:"fillin",q:"Angle between 90° and 180° is ___.",blanks:["obtuse"]},
{t:"Angle Types",type:"tf",q:"An angle of exactly 90° is a right angle.",a:true},
{t:"Angle Types",type:"tf",q:"A straight angle is 180°.",a:true},
{t:"Angle Types",type:"tapall",q:"Tap all ACUTE angles.",pool:["30°","45°","90°","120°","60°","170°"],correct:["30°","45°","60°"]},
{t:"Angle Types",type:"enterval",q:"A straight line forms what angle at its midpoint (degrees)?",a:180}
],
[
{t:"Classify",q:"45° is?",o:["Acute","Obtuse","Right","Straight"],a:0},
{t:"Classify",type:"tf",q:"120° is an obtuse angle.",a:true},
{t:"Classify",type:"tf",q:"90° is a right angle.",a:true},
{t:"Classify",type:"fillin",q:"180° is called a ___ angle.",blanks:["straight"]},
{t:"Classify",q:"30° is?",o:["Acute","Obtuse","Right","Reflex"],a:0},
{t:"Classify",type:"tapall",q:"Tap all OBTUSE angles.",pool:["30°","120°","170°","90°","135°","45°"],correct:["120°","170°","135°"]},
{t:"Classify",type:"tf",q:"135° is obtuse.",a:true},
{t:"Classify",q:"60° is?",o:["Acute","Right","Obtuse","Straight"],a:0},
{t:"Classify",type:"tf",q:"110° is acute.",a:false},
{t:"Classify",type:"tf",q:"89° is an acute angle.",a:true}
],
[
{t:"Name Angle",type:"enterval",q:"Angle at corner of a square (degrees)?",a:90},
{t:"Name Angle",type:"enterval",q:"Clock hand angle at 3:00?",a:90},
{t:"Name Angle",type:"enterval",q:"Clock hand angle at 6:00?",a:180},
{t:"Name Angle",type:"enterval",q:"Each angle of an equilateral triangle?",a:60},
{t:"Name Angle",type:"fillin",q:"Each corner of a rectangle is a ___° angle.",blanks:["90"]},
{t:"Name Angle",type:"enterval",q:"Pizza cut in 4 equal slices — each angle?",a:90},
{t:"Name Angle",type:"enterval",q:"Pizza cut in 8 equal slices — each angle?",a:45},
{t:"Name Angle",type:"tf",q:"A U-turn equals 180°.",a:true},
{t:"Name Angle",type:"tapall",q:"Tap all angles equal to 90°.",pool:["Quarter turn","Half turn","Square corner","Clock 3:00","Straight line","Full turn"],correct:["Quarter turn","Square corner","Clock 3:00"]},
{t:"Name Angle",type:"enterval",q:"Angles in a straight line sum to?",a:180}
],
[
{t:"Count",type:"enterval",q:"Triangle has how many angles?",a:3},
{t:"Count",type:"enterval",q:"Square has how many angles?",a:4},
{t:"Count",type:"enterval",q:"Pentagon has how many angles?",a:5},
{t:"Count",type:"tf",q:"A rectangle has 4 angles.",a:true},
{t:"Count",type:"enterval",q:"Hexagon has how many angles?",a:6},
{t:"Count",type:"tf",q:"A circle has angles at its vertices.",a:false},
{t:"Count",type:"enterval",q:"Octagon has how many angles?",a:8},
{t:"Count",type:"fillin",q:"A straight line has ___ corner angles.",blanks:["0"]},
{t:"Count",type:"tapall",q:"Tap all shapes with exactly 4 angles.",pool:["Triangle","Square","Rectangle","Pentagon","Quadrilateral","Hexagon"],correct:["Square","Rectangle","Quadrilateral"]},
{t:"Count",type:"enterval",q:"Quadrilateral has how many angles?",a:4}
],
[
{t:"Clock",type:"enterval",q:"Clock angle at 12:00 (degrees)?",a:0},
{t:"Clock",type:"enterval",q:"Clock angle at 3:00?",a:90},
{t:"Clock",type:"enterval",q:"Clock angle at 6:00?",a:180},
{t:"Clock",type:"enterval",q:"Clock angle at 9:00?",a:90},
{t:"Clock",type:"fillin",q:"Minute hand from 12 to 3 sweeps ___°.",blanks:["90"]},
{t:"Clock",type:"tf",q:"Minute hand from 12 to 6 sweeps 180°.",a:true},
{t:"Clock",type:"enterval",q:"One full rotation of minute hand (degrees)?",a:360},
{t:"Clock",type:"tapall",q:"Tap all minute-hand sweeps that equal 180°.",pool:["15 min","30 min","45 min","60 min","half hour","full hour"],correct:["30 min","half hour"]},
{t:"Clock",type:"enterval",q:"30 minutes — minute hand sweeps ___°?",a:180},
{t:"Clock",q:"Clock hands overlap at?",o:["12:00","3:00","6:00","9:00"],a:0}
]
],
pro:[
[
{t:"Sum",type:"enterval",q:"Sum of angles in a triangle (degrees)?",a:180},
{t:"Sum",type:"enterval",q:"Sum of angles in a quadrilateral?",a:360},
{t:"Sum",type:"enterval",q:"Triangle has 50° and 60°. Third angle?",a:70},
{t:"Sum",type:"enterval",q:"Right triangle with 90° and 30°. Third angle?",a:60},
{t:"Sum",type:"fillin",q:"Each angle of an equilateral triangle is ___°.",blanks:["60"]},
{t:"Sum",type:"tf",q:"Each angle of a square is 90°.",a:true},
{t:"Sum",type:"enterval",q:"Sum of interior angles of a pentagon?",a:540},
{t:"Sum",type:"enterval",q:"Each interior angle of a regular pentagon?",a:108},
{t:"Sum",type:"tapall",q:"Tap all regular-polygon angle facts.",pool:["Triangle 60° each","Square 90° each","Pentagon 108° each","Hexagon 120° each","Hexagon 90° each","Octagon 135° each"],correct:["Triangle 60° each","Square 90° each","Pentagon 108° each","Hexagon 120° each","Octagon 135° each"]},
{t:"Sum",type:"enterval",q:"Each angle of a regular hexagon?",a:120}
],
[
{t:"Comp/Supp",type:"enterval",q:"Complement of 30°?",a:60},
{t:"Comp/Supp",type:"enterval",q:"Supplement of 120°?",a:60},
{t:"Comp/Supp",type:"enterval",q:"Complementary angles sum to?",a:90},
{t:"Comp/Supp",type:"enterval",q:"Supplementary angles sum to?",a:180},
{t:"Comp/Supp",type:"tf",q:"Complement of 45° is 45°.",a:true},
{t:"Comp/Supp",type:"enterval",q:"Supplement of 90°?",a:90},
{t:"Comp/Supp",type:"fillin",q:"Complement of 60° is ___°.",blanks:["30"]},
{t:"Comp/Supp",type:"enterval",q:"Supplement of 150°?",a:30},
{t:"Comp/Supp",type:"tf",q:"55° + 35° = 90° so they are complementary.",a:true},
{t:"Comp/Supp",type:"tapall",q:"Tap all supplementary pairs.",pool:["100° + 80°","45° + 45°","120° + 60°","30° + 150°","90° + 90°","60° + 40°"],correct:["100° + 80°","120° + 60°","30° + 150°","90° + 90°"]}
],
[
{t:"Draw",q:"Tool to draw 90°?",o:["Protractor / Set square","Stopwatch","Ruler only","Compass only"],a:0},
{t:"Draw",type:"enterval",q:"Half of 180° = ?",a:90},
{t:"Draw",type:"enterval",q:"One-third of 180° = ?",a:60},
{t:"Draw",type:"enterval",q:"One-fourth of 360° = ?",a:90},
{t:"Draw",type:"enterval",q:"One-sixth of 360° = ?",a:60},
{t:"Draw",type:"fillin",q:"Half of 90° is ___°.",blanks:["45"]},
{t:"Draw",type:"tf",q:"Twice of 30° = 60°.",a:true},
{t:"Draw",type:"enterval",q:"3 × 30° = ? degrees",a:90},
{t:"Draw",type:"tapall",q:"Tap all angle calculations that equal 90°.",pool:["45°+45°","30°×3","60°+30°","50°+40°","80°+20°","2×50°"],correct:["45°+45°","30°×3","60°+30°","50°+40°","80°+20°"]},
{t:"Draw",type:"enterval",q:"4 × 90° = ? degrees",a:360}
],
[
{t:"Clock+",type:"enterval",q:"Angle between clock hands at 4:00?",a:120},
{t:"Clock+",type:"enterval",q:"Angle at 2:00?",a:60},
{t:"Clock+",type:"enterval",q:"Angle at 5:00?",a:150},
{t:"Clock+",type:"enterval",q:"Angle at 1:00?",a:30},
{t:"Clock+",type:"fillin",q:"In one hour the hour hand moves ___°.",blanks:["30"]},
{t:"Clock+",type:"enterval",q:"Hour hand moves how many degrees in 12 hours?",a:360},
{t:"Clock+",type:"tf",q:"30 minutes on the minute hand = 180°.",a:true},
{t:"Clock+",type:"enterval",q:"Angle at 10:00?",a:60},
{t:"Clock+",type:"tapall",q:"Tap all times with a 90° angle between clock hands.",pool:["3:00","6:00","9:00","4:00","12:00"],correct:["3:00","9:00"]},
{t:"Clock+",type:"enterval",q:"Minute hand moves how many degrees per minute?",a:6}
],
[
{t:"Word",type:"enterval",q:"Door opens to 90°, then 45° more. Total?",a:135},
{t:"Word",type:"enterval",q:"Turn right twice (each 90°) = ?",a:180},
{t:"Word",q:"Face north, turn 90° right. Face?",o:["East","West","South","North"],a:0},
{t:"Word",type:"tf",q:"Face east, turn 180°, you face west.",a:true},
{t:"Word",type:"enterval",q:"Compass's 4 main directions — degrees apart?",a:90},
{t:"Word",type:"enterval",q:"Pie chart with 4 equal slices — each slice?",a:90},
{t:"Word",type:"enterval",q:"Pie chart with 8 equal slices — each slice?",a:45},
{t:"Word",type:"fillin",q:"A 30° escalator rise is a(n) ___ angle.",blanks:["acute"]},
{t:"Word",type:"tapall",q:"Tap all angles that are acute.",pool:["4°","30°","90°","100°","60°","170°"],correct:["4°","30°","60°"]},
{t:"Word",type:"tf",q:"A clock's second hand moves 6° per second.",a:true}
]
]
},
3: { title:'How Many Squares?',
beginner:[
[
{t:"area",q:"What unit is used to measure area?",o:["square units","units","meters","liters"],a:0},
{t:"area",q:"A shape covers 6 unit squares. What is its area?",o:["6 sq units","6 units","12 sq units","3 sq units"],a:0},
{t:"area",type:"tf",q:"Area of a square of side 1 cm is 1 cm².",a:true},
{t:"area",q:"What is the area of a rectangle 4 cm by 2 cm?",o:["8 cm²","6 cm²","10 cm²","4 cm²"],a:0},
{t:"area",type:"fillin",q:"A square of side 5 cm has area ___ cm².",blanks:["25"]},
{t:"area",type:"enterval",q:"How many unit squares are in a 3 by 3 square?",a:9},
{t:"area",q:"Which has bigger area?",o:["10 cm²","8 cm²","5 cm²","2 cm²"],a:0},
{t:"area",type:"tf",q:"A square meter is bigger than a square centimeter.",a:true},
{t:"area",type:"tapall",q:"Tap units of area.",pool:["cm²","m²","kg","liter"],correct:["cm²","m²"]},
{t:"area",q:"Area of a 2 cm by 2 cm square?",o:["4 cm²","2 cm²","8 cm²","6 cm²"],a:0}
],
[
{t:"counting",q:"A shape on grid covers 12 full squares. Area?",o:["12 sq units","6 sq units","24 sq units","10 sq units"],a:0},
{t:"counting",type:"enterval",q:"How many unit squares in a 5 by 4 rectangle?",a:20},
{t:"counting",type:"tf",q:"Two half squares make one full square.",a:true},
{t:"counting",q:"Rectangle 6 cm by 3 cm has area?",o:["18 cm²","9 cm²","12 cm²","21 cm²"],a:0},
{t:"counting",type:"fillin",q:"A 7 by 2 rectangle covers ___ unit squares.",blanks:["14"]},
{t:"counting",q:"Which has area 16 sq units?",o:["4 by 4 square","3 by 3 square","2 by 8 with hole","5 by 3 rectangle"],a:0},
{t:"counting",type:"tapall",q:"Tap shapes with area 6 sq units.",pool:["1 by 6","2 by 3","3 by 3","4 by 2"],correct:["1 by 6","2 by 3"]},
{t:"counting",type:"enterval",q:"A square has 9 unit squares. What is its side length?",a:3},
{t:"counting",q:"What is the area of a 10 cm by 1 cm strip?",o:["10 cm²","1 cm²","11 cm²","20 cm²"],a:0},
{t:"counting",type:"tf",q:"A 4 by 5 rectangle has more area than a 3 by 6 rectangle.",a:true}
],
[
{t:"units",q:"Which unit is best for area of a notebook?",o:["cm²","m²","km²","liter"],a:0},
{t:"units",q:"Which unit is best for area of a room?",o:["m²","cm²","mm²","ml"],a:0},
{t:"units",type:"tf",q:"1 m² is much bigger than 1 cm².",a:true},
{t:"units",type:"fillin",q:"Area of a stamp is measured in ___.",blanks:["cm²"]},
{t:"units",q:"A floor is 4 m by 3 m. Area?",o:["12 m²","7 m²","12 cm²","15 m²"],a:0},
{t:"units",type:"enterval",q:"A square room of side 5 m has area how many m²?",a:25},
{t:"units",type:"tapall",q:"Tap areas measured in m².",pool:["a hall","a playground","a postage stamp","a coin"],correct:["a hall","a playground"]},
{t:"units",q:"Which is bigger?",o:["1 m²","100 cm²","50 cm²","1 cm²"],a:0},
{t:"units",type:"tf",q:"Area of a coin is best in m².",a:false},
{t:"units",q:"A garden 6 m by 4 m has area?",o:["24 m²","10 m²","20 m²","12 m²"],a:0}
],
[
{t:"compare",q:"Shape A: 8 squares. Shape B: 5 squares. Which is larger?",o:["A","B","equal","cannot tell"],a:0},
{t:"compare",type:"tf",q:"Two shapes can have the same area but different shapes.",a:true},
{t:"compare",q:"Square 4 by 4 vs rectangle 8 by 2. Which has bigger area?",o:["equal","square","rectangle","cannot tell"],a:0},
{t:"compare",type:"fillin",q:"A 3 by 4 rectangle has area ___ sq units.",blanks:["12"]},
{t:"compare",type:"enterval",q:"How many more unit squares in a 5 by 5 square than a 4 by 4?",a:9},
{t:"compare",q:"Which has the smallest area?",o:["2 by 2","3 by 3","4 by 4","5 by 5"],a:0},
{t:"compare",type:"tapall",q:"Tap rectangles with area 12.",pool:["3 by 4","2 by 6","4 by 4","2 by 5"],correct:["3 by 4","2 by 6"]},
{t:"compare",q:"A shape has 7 full squares and 4 half squares. Total area?",o:["9 sq units","11 sq units","7 sq units","8 sq units"],a:0},
{t:"compare",type:"tf",q:"A bigger perimeter always means a bigger area.",a:false},
{t:"compare",q:"Rita's tile is 10 cm². Mira's is 8 cm². Difference?",o:["2 cm²","18 cm²","1 cm²","10 cm²"],a:0}
],
[
{t:"mixed",q:"Area of a 6 m by 5 m field?",o:["30 m²","11 m²","25 m²","20 m²"],a:0},
{t:"mixed",type:"enterval",q:"A square of side 6 cm has area how many cm²?",a:36},
{t:"mixed",type:"tf",q:"Area is the space inside a closed shape.",a:true},
{t:"mixed",q:"Which covers more space, a 5 by 5 square or a 4 by 6 rectangle?",o:["square","rectangle","equal","cannot tell"],a:0},
{t:"mixed",type:"fillin",q:"A rectangle 8 cm by 3 cm has area ___ cm².",blanks:["24"]},
{t:"mixed",q:"A rangoli covers 20 unit squares. Area?",o:["20 sq units","10 sq units","40 sq units","5 sq units"],a:0},
{t:"mixed",type:"tapall",q:"Tap shapes with area 9 sq units.",pool:["3 by 3","1 by 9","2 by 4","4 by 4"],correct:["3 by 3","1 by 9"]},
{t:"mixed",q:"Saree pattern is 2 m by 1 m. Area?",o:["2 m²","3 m²","1 m²","4 m²"],a:0},
{t:"mixed",type:"tf",q:"A 1 m² floor needs 100 tiles of 10 cm by 10 cm.",a:true},
{t:"mixed",q:"A square has area 49 cm². Side?",o:["7 cm","6 cm","8 cm","49 cm"],a:0}
]
],
pro:[
[
{t:"word",q:"A garden is 12 m by 8 m. A 2 m by 2 m pond is removed. Garden area left?",o:["92 m²","96 m²","100 m²","88 m²"],a:0},
{t:"word",type:"enterval",q:"A floor 5 m by 4 m needs tiles of 1 m². How many tiles?",a:20},
{t:"word",type:"tf",q:"Two rectangles with same perimeter must have same area.",a:false},
{t:"word",q:"A rectangle has area 24 cm² and length 6 cm. Width?",o:["4 cm","3 cm","8 cm","6 cm"],a:0},
{t:"word",type:"fillin",q:"A 9 m by 9 m square has area ___ m².",blanks:["81"]},
{t:"word",q:"A page is 20 cm by 15 cm. Area?",o:["300 cm²","35 cm²","200 cm²","150 cm²"],a:0},
{t:"word",type:"tapall",q:"Tap rectangles with area 36 sq units.",pool:["6 by 6","4 by 9","3 by 12","5 by 7"],correct:["6 by 6","4 by 9","3 by 12"]},
{t:"word",type:"enterval",q:"Hall 10 m by 7 m. How many m² of carpet needed?",a:70},
{t:"word",q:"A poster covers 18 squares + 6 half squares. Area?",o:["21 sq units","24 sq units","18 sq units","27 sq units"],a:0},
{t:"word",type:"tf",q:"A 4 cm by 9 cm rectangle has the same area as a 6 cm by 6 cm square.",a:true}
],
[
{t:"missing",q:"Area = 36 cm², width = 4 cm. Length?",o:["9 cm","8 cm","6 cm","12 cm"],a:0},
{t:"missing",type:"enterval",q:"A field has area 60 m². If width is 6 m, length in m?",a:10},
{t:"missing",type:"fillin",q:"A square has area 64 cm². Side is ___ cm.",blanks:["8"]},
{t:"missing",q:"Rectangle area 45 sq units, length 9. Width?",o:["5","6","7","9"],a:0},
{t:"missing",type:"tf",q:"If area doubles and width stays same, length doubles.",a:true},
{t:"missing",q:"Path 1 m wide, 12 m long. Area?",o:["12 m²","13 m²","6 m²","24 m²"],a:0},
{t:"missing",type:"enterval",q:"How many 1 cm² stamps fit on a 8 cm by 5 cm sheet?",a:40},
{t:"missing",type:"tapall",q:"Tap pairs (l,w) giving area 24.",pool:["2 by 12","3 by 8","4 by 6","5 by 5"],correct:["2 by 12","3 by 8","4 by 6"]},
{t:"missing",q:"A square room area 100 m². Side?",o:["10 m","20 m","25 m","50 m"],a:0},
{t:"missing",type:"tf",q:"A rectangle of area 18 cm² could be 2 by 9.",a:true}
],
[
{t:"compare2",q:"Field A: 8 m by 6 m. Field B: 7 m by 7 m. Bigger?",o:["B","A","equal","cannot tell"],a:0},
{t:"compare2",type:"enterval",q:"By how many m² is a 10 by 10 bigger than a 9 by 9?",a:19},
{t:"compare2",type:"tf",q:"Doubling both sides of a square makes area 4 times bigger.",a:true},
{t:"compare2",q:"Square 5 m vs rectangle 4 m by 6 m. Bigger?",o:["square","rectangle","equal","cannot tell"],a:0},
{t:"compare2",type:"fillin",q:"A 12 by 5 has area ___ sq units more than a 6 by 5.",blanks:["30"]},
{t:"compare2",q:"Area of L shape: 4 by 5 minus 2 by 2 cut?",o:["16 sq units","20 sq units","18 sq units","24 sq units"],a:0},
{t:"compare2",type:"tapall",q:"Tap shapes with area greater than 20.",pool:["6 by 4","5 by 5","3 by 6","4 by 8"],correct:["6 by 4","5 by 5","4 by 8"]},
{t:"compare2",q:"A path around a 5 by 5 garden, 1 wide. Total area with path?",o:["49 sq units","30 sq units","36 sq units","45 sq units"],a:0},
{t:"compare2",type:"tf",q:"A 6 by 6 square has more area than a 3 by 12 rectangle.",a:false},
{t:"compare2",q:"Two equal rectangles 3 by 4 joined long. New area?",o:["24 sq units","12 sq units","48 sq units","20 sq units"],a:0}
],
[
{t:"realworld",q:"Tile 20 cm by 20 cm. How many cover 1 m²?",o:["25","20","100","50"],a:0},
{t:"realworld",type:"enterval",q:"A wall 4 m by 3 m. How many m² of paint needed?",a:12},
{t:"realworld",type:"tf",q:"A cricket pitch is more naturally measured in m² than cm².",a:true},
{t:"realworld",q:"Cost of carpet ₹100/m². Room 5 m by 4 m. Total cost?",o:["₹2000","₹900","₹2500","₹1500"],a:0},
{t:"realworld",type:"fillin",q:"A field 25 m by 20 m has area ___ m².",blanks:["500"]},
{t:"realworld",q:"A handkerchief 30 cm by 30 cm. Area?",o:["900 cm²","60 cm²","300 cm²","9 cm²"],a:0},
{t:"realworld",type:"tapall",q:"Tap things best measured in cm².",pool:["a stamp","a postcard","a cricket field","a school playground"],correct:["a stamp","a postcard"]},
{t:"realworld",type:"enterval",q:"Garden 8 m by 5 m. Border 1 m wide all around. Outer area in m²?",a:70},
{t:"realworld",q:"A blackboard is 2 m by 1 m. Area in cm²?",o:["20000 cm²","2000 cm²","200 cm²","2 cm²"],a:0},
{t:"realworld",type:"tf",q:"A floor of 6 m² needs more tiles than a floor of 4 m².",a:true}
],
[
{t:"twostep",q:"Square area 81 cm². Perimeter?",o:["36 cm","27 cm","18 cm","81 cm"],a:0},
{t:"twostep",type:"enterval",q:"Rectangle area 48 m², length 8 m. Perimeter in m?",a:28},
{t:"twostep",type:"tf",q:"Two rectangles with same area can have different perimeters.",a:true},
{t:"twostep",q:"A garden 10 by 6 minus a 3 by 2 pond. Lawn area?",o:["54 m²","60 m²","50 m²","66 m²"],a:0},
{t:"twostep",type:"fillin",q:"Area of an L shape: 5 by 4 plus 2 by 3 is ___ sq units.",blanks:["26"]},
{t:"twostep",q:"Floor 6 m by 5 m. Tiles 1 m by 1 m cost ₹50 each. Total cost?",o:["₹1500","₹1100","₹2000","₹3000"],a:0},
{t:"twostep",type:"tapall",q:"Tap shapes with area exactly 100.",pool:["10 by 10","20 by 5","25 by 4","12 by 8"],correct:["10 by 10","20 by 5","25 by 4"]},
{t:"twostep",type:"enterval",q:"A frame 7 by 5 with 1 wide border inside. Inner area?",a:15},
{t:"twostep",q:"Square side 12 m. New square has side 6 m. Area difference?",o:["108 m²","72 m²","144 m²","36 m²"],a:0},
{t:"twostep",type:"tf",q:"If area of a square is 25 m², its perimeter is 20 m.",a:true}
]
]
},
4: { title:'Parts and Wholes',
beginner:[
[
{t:"basics",q:"What does ½ mean?",o:["one of two equal parts","one of three equal parts","two halves","one of four equal parts"],a:0},
{t:"basics",q:"A pizza is cut into 4 equal parts. Each is a:",o:["quarter","half","third","fifth"],a:0},
{t:"basics",type:"tf",q:"½ is bigger than ¼.",a:true},
{t:"basics",type:"fillin",q:"Three out of five equal parts is written as ___.",blanks:["3/5"]},
{t:"basics",q:"A cake is cut into 8 equal parts. Each is:",o:["one-eighth","one-fourth","one-half","one-tenth"],a:0},
{t:"basics",type:"enterval",q:"How many quarters make a whole?",a:4},
{t:"basics",type:"tapall",q:"Tap fractions equal to ½.",pool:["2/4","3/6","1/3","1/4"],correct:["2/4","3/6"]},
{t:"basics",q:"Which is bigger?",o:["½","¼","1/8","1/10"],a:0},
{t:"basics",type:"tf",q:"1/3 means one out of three equal parts.",a:true},
{t:"basics",q:"How many thirds in 1 whole?",o:["3","2","4","6"],a:0}
],
[
{t:"naming",q:"Numerator of 3/5 is:",o:["3","5","8","2"],a:0},
{t:"naming",q:"Denominator of 7/10 is:",o:["10","7","17","3"],a:0},
{t:"naming",type:"tf",q:"In 4/9, 9 is the denominator.",a:true},
{t:"naming",type:"fillin",q:"Half of an apple is written as ___.",blanks:["1/2"]},
{t:"naming",type:"enterval",q:"How many fifths make a whole?",a:5},
{t:"naming",q:"Which fraction is one-tenth?",o:["1/10","1/100","10/1","1/5"],a:0},
{t:"naming",type:"tapall",q:"Tap unit fractions.",pool:["1/2","1/3","2/3","3/4"],correct:["1/2","1/3"]},
{t:"naming",q:"What is 2/3 of 9 mangoes?",o:["6","3","9","4"],a:0},
{t:"naming",type:"tf",q:"1/8 is smaller than 1/6.",a:true},
{t:"naming",q:"Which is one-quarter?",o:["¼","½","1/3","1/8"],a:0}
],
[
{t:"equiv",q:"Which is equal to ½?",o:["3/6","2/3","1/3","2/5"],a:0},
{t:"equiv",q:"Which is equal to 2/4?",o:["½","¼","2/3","3/4"],a:0},
{t:"equiv",type:"tf",q:"4/8 = ½.",a:true},
{t:"equiv",type:"fillin",q:"2/6 = 1/___ in simplest form.",blanks:["3"]},
{t:"equiv",type:"enterval",q:"5/10 in simplest form is 1 over what?",a:2},
{t:"equiv",q:"Which is equal to 1/3?",o:["2/6","2/4","3/6","2/5"],a:0},
{t:"equiv",type:"tapall",q:"Tap fractions equal to ¼.",pool:["2/8","3/12","1/3","2/6"],correct:["2/8","3/12"]},
{t:"equiv",q:"6/8 is the same as:",o:["3/4","2/3","½","2/5"],a:0},
{t:"equiv",type:"tf",q:"3/9 = 1/3.",a:true},
{t:"equiv",q:"Equivalent of 4/10?",o:["2/5","½","¼","1/3"],a:0}
],
[
{t:"compare",q:"Which is greater: 2/5 or 3/5?",o:["3/5","2/5","equal","cannot tell"],a:0},
{t:"compare",q:"Which is greater: ½ or 1/3?",o:["½","1/3","equal","both"],a:0},
{t:"compare",type:"tf",q:"2/8 < 3/8.",a:true},
{t:"compare",type:"fillin",q:"Between 1/4 and 3/4, the bigger is ___.",blanks:["3/4"]},
{t:"compare",type:"enterval",q:"How many sixths in 1 whole?",a:6},
{t:"compare",q:"Smallest fraction:",o:["1/10","1/8","1/5","1/3"],a:0},
{t:"compare",type:"tapall",q:"Tap fractions less than ½.",pool:["1/3","2/5","3/4","5/6"],correct:["1/3","2/5"]},
{t:"compare",q:"Which is greater: 5/8 or 3/8?",o:["5/8","3/8","equal","both"],a:0},
{t:"compare",type:"tf",q:"1/2 = 5/10.",a:true},
{t:"compare",q:"Same denominator: which is biggest?",o:["7/10","5/10","3/10","1/10"],a:0}
],
[
{t:"addsub",q:"1/5 + 2/5 = ?",o:["3/5","3/10","1/5","2/5"],a:0},
{t:"addsub",q:"3/8 + 4/8 = ?",o:["7/8","7/16","1/8","12/8"],a:0},
{t:"addsub",type:"tf",q:"2/7 + 3/7 = 5/7.",a:true},
{t:"addsub",type:"fillin",q:"5/9 - 2/9 = ___.",blanks:["3/9"]},
{t:"addsub",q:"7/10 - 3/10 = ?",o:["4/10","10/10","4/0","3/10"],a:0},
{t:"addsub",type:"enterval",q:"How many quarters in 2 wholes?",a:8},
{t:"addsub",type:"tapall",q:"Tap sums equal to 1.",pool:["3/4 + 1/4","2/5 + 3/5","1/3 + 1/3","1/8 + 1/8"],correct:["3/4 + 1/4","2/5 + 3/5"]},
{t:"addsub",q:"½ + ¼ = ?",o:["3/4","2/6","1/2","2/4"],a:0},
{t:"addsub",type:"tf",q:"4/6 - 2/6 = 2/6.",a:true},
{t:"addsub",q:"1/10 + 5/10 = ?",o:["6/10","5/100","6/20","5/10"],a:0}
]
],
pro:[
[
{t:"word1",q:"Riya ate 3/8 of a pizza, Aman ate 2/8. Total eaten?",o:["5/8","6/8","1/8","5/16"],a:0},
{t:"word1",q:"Out of ₹100, Mira spent ½ and saved ¼. Left?",o:["¼","½","1/8","¾"],a:0},
{t:"word1",type:"tf",q:"If you eat 3/4 of a chocolate, 1/4 is left.",a:true},
{t:"word1",type:"fillin",q:"6/12 in simplest form is ___.",blanks:["1/2"]},
{t:"word1",q:"3/5 of 20 mangoes?",o:["12","10","15","8"],a:0},
{t:"word1",type:"enterval",q:"How many tenths in 3 wholes?",a:30},
{t:"word1",q:"Sita drank 2/6 l of milk, then 1/6 l more. Total?",o:["3/6 l","3/12 l","1/6 l","2/12 l"],a:0},
{t:"word1",type:"tapall",q:"Tap fractions equal to 2/3.",pool:["4/6","6/9","3/4","1/2"],correct:["4/6","6/9"]},
{t:"word1",type:"tf",q:"1/2 + 1/2 = 1 whole.",a:true},
{t:"word1",q:"A jug holds 1 l. ¾ l poured. How much left?",o:["¼ l","½ l","1 l","¾ l"],a:0}
],
[
{t:"compare2",q:"Order from smallest: 1/3, ½, 2/3.",o:["1/3, ½, 2/3","½, 1/3, 2/3","2/3, ½, 1/3","1/3, 2/3, ½"],a:0},
{t:"compare2",q:"Which is bigger: 3/5 or ½?",o:["3/5","½","equal","cannot tell"],a:0},
{t:"compare2",type:"tf",q:"5/8 > 1/2.",a:true},
{t:"compare2",type:"fillin",q:"4/8 = ___ in simplest form.",blanks:["1/2"]},
{t:"compare2",type:"enterval",q:"How many eighths in 1 whole?",a:8},
{t:"compare2",q:"Largest of 7/10, 8/10, 5/10?",o:["8/10","7/10","5/10","equal"],a:0},
{t:"compare2",type:"tapall",q:"Tap fractions greater than ½.",pool:["3/4","5/8","2/5","1/3"],correct:["3/4","5/8"]},
{t:"compare2",q:"Which is smaller: 2/3 or 5/6?",o:["2/3","5/6","equal","cannot tell"],a:0},
{t:"compare2",type:"tf",q:"1/3 + 1/3 + 1/3 = 1.",a:true},
{t:"compare2",q:"How many ¼ in 3?",o:["12","6","8","4"],a:0}
],
[
{t:"word2",q:"Anu had 3/4 m of ribbon. Cut 1/4 m. Left?",o:["½ m","2/4 m equal half","1 m","¼ m"],a:0},
{t:"word2",q:"7/10 of 30 students like cricket. How many?",o:["21","10","7","17"],a:0},
{t:"word2",type:"tf",q:"3/5 + 2/5 = 1 whole.",a:true},
{t:"word2",type:"fillin",q:"Half of 1/2 is ___.",blanks:["1/4"]},
{t:"word2",q:"4/5 - 1/5 = ?",o:["3/5","5/5","3/10","4/10"],a:0},
{t:"word2",type:"enterval",q:"What is 1/3 of 27?",a:9},
{t:"word2",type:"tapall",q:"Tap pairs that add to 1.",pool:["3/8 + 5/8","1/4 + 3/4","2/5 + 2/5","1/3 + 1/3"],correct:["3/8 + 5/8","1/4 + 3/4"]},
{t:"word2",q:"Bottle 1 l. Used 3/10 l. Left?",o:["7/10 l","3/10 l","1/10 l","6/10 l"],a:0},
{t:"word2",type:"tf",q:"½ of 100 = 50.",a:true},
{t:"word2",q:"2/3 of 12 chapatis?",o:["8","6","4","12"],a:0}
],
[
{t:"mixed",q:"What is half of 24 kg?",o:["12 kg","8 kg","6 kg","48 kg"],a:0},
{t:"mixed",q:"What is 1/4 of 40 km?",o:["10 km","8 km","5 km","20 km"],a:0},
{t:"mixed",type:"tf",q:"3/4 of 20 = 15.",a:true},
{t:"mixed",type:"fillin",q:"Two halves make ___ whole.",blanks:["1"]},
{t:"mixed",type:"enterval",q:"How many sixths in 2 wholes?",a:12},
{t:"mixed",q:"Half of ₹50?",o:["₹25","₹20","₹10","₹5"],a:0},
{t:"mixed",type:"tapall",q:"Tap fractions equal to 3/4.",pool:["6/8","9/12","2/3","4/5"],correct:["6/8","9/12"]},
{t:"mixed",q:"3/10 + 4/10 + 2/10 = ?",o:["9/10","9/30","7/10","9/20"],a:0},
{t:"mixed",type:"tf",q:"1/8 + 1/8 = 1/4.",a:true},
{t:"mixed",q:"5/6 - 1/6 = ?",o:["4/6","5/6","6/6","4/12"],a:0}
],
[
{t:"twostep",q:"From 1 l milk, ½ l drunk and 1/4 l spilt. Left?",o:["¼ l","½ l","¾ l","1/8 l"],a:0},
{t:"twostep",q:"Field divided into 8 parts. Wheat in 5, rice in 3. Wheat fraction?",o:["5/8","3/8","8/8","5/3"],a:0},
{t:"twostep",type:"tf",q:"If 2/3 of class is girls and class is 30, girls are 20.",a:true},
{t:"twostep",type:"fillin",q:"Half of half is ___ in simplest form.",blanks:["1/4"]},
{t:"twostep",type:"enterval",q:"3/5 of 25 marbles is how many?",a:15},
{t:"twostep",q:"From ₹80, Ravi spent ¼ and Mona spent ½. Total spent?",o:["₹60","₹40","₹20","₹70"],a:0},
{t:"twostep",type:"tapall",q:"Tap fractions less than 3/4.",pool:["1/2","2/3","5/6","7/8"],correct:["1/2","2/3"]},
{t:"twostep",q:"5/8 + 1/8 - 2/8 = ?",o:["4/8","6/8","8/8","2/8"],a:0},
{t:"twostep",type:"tf",q:"7/10 - 4/10 = 3/10.",a:true},
{t:"twostep",q:"Cake into 10 pieces. 4 eaten by kids, 3 by adults. Left?",o:["3/10","7/10","6/10","1/10"],a:0}
]
]
},
5: { title:'Does it Look the Same?',
beginner:[
[
{t:"sym",q:"A line of symmetry divides a shape into:",o:["two equal halves","two unequal parts","four parts","three parts"],a:0},
{t:"sym",q:"How many lines of symmetry does a square have?",o:["4","2","1","6"],a:0},
{t:"sym",type:"tf",q:"A circle has many lines of symmetry.",a:true},
{t:"sym",type:"fillin",q:"A rectangle has ___ lines of symmetry.",blanks:["2"]},
{t:"sym",type:"enterval",q:"Lines of symmetry in an equilateral triangle?",a:3},
{t:"sym",q:"Which letter has a vertical line of symmetry?",o:["A","F","G","R"],a:0},
{t:"sym",type:"tapall",q:"Tap letters with line symmetry.",pool:["A","M","F","R"],correct:["A","M"]},
{t:"sym",q:"Number of lines of symmetry in a regular hexagon?",o:["6","3","2","1"],a:0},
{t:"sym",type:"tf",q:"A scalene triangle has no line of symmetry.",a:true},
{t:"sym",q:"How many lines of symmetry in letter H?",o:["2","1","0","4"],a:0}
],
[
{t:"reflect",q:"Reflection is also called:",o:["mirror image","slide","turn","grow"],a:0},
{t:"reflect",q:"In a mirror, your right hand looks like:",o:["left hand","right hand","both","neither"],a:0},
{t:"reflect",type:"tf",q:"A mirror flips left and right.",a:true},
{t:"reflect",type:"fillin",q:"A reflection of letter b in a vertical mirror looks like ___.",blanks:["d"]},
{t:"reflect",q:"Which letter looks the same in a vertical mirror?",o:["A","B","D","E"],a:0},
{t:"reflect",type:"enterval",q:"Lines of symmetry in letter X?",a:2},
{t:"reflect",type:"tapall",q:"Tap shapes that have at least 1 line of symmetry.",pool:["square","circle","scalene triangle","random blob"],correct:["square","circle"]},
{t:"reflect",q:"Mirror image of '12' looks like:",o:["21 reversed","12","13","11"],a:0},
{t:"reflect",type:"tf",q:"Letter O looks the same after reflection.",a:true},
{t:"reflect",q:"Which is its own mirror image?",o:["O","P","Q","R"],a:0}
],
[
{t:"rotate",q:"Rotation means:",o:["turning","sliding","flipping","stretching"],a:0},
{t:"rotate",q:"How many degrees in a full turn?",o:["360","180","90","270"],a:0},
{t:"rotate",type:"tf",q:"A square looks the same after a 90° rotation.",a:true},
{t:"rotate",type:"fillin",q:"Half a turn is ___ degrees.",blanks:["180"]},
{t:"rotate",type:"enterval",q:"A quarter turn is how many degrees?",a:90},
{t:"rotate",q:"Which shape looks the same after every rotation?",o:["circle","square","triangle","rectangle"],a:0},
{t:"rotate",type:"tapall",q:"Tap shapes with rotational symmetry.",pool:["square","circle","scalene triangle","letter F"],correct:["square","circle"]},
{t:"rotate",q:"Letter that looks the same after 180° turn:",o:["S","P","R","F"],a:0},
{t:"rotate",type:"tf",q:"A rectangle looks the same after a half turn.",a:true},
{t:"rotate",q:"Three-quarter turn is:",o:["270°","180°","90°","360°"],a:0}
],
[
{t:"tile",q:"A tiling pattern is:",o:["shapes that cover without gaps","shapes with gaps","big shapes","colored only"],a:0},
{t:"tile",q:"Which shape tiles the floor without gaps?",o:["square","circle","oval","star"],a:0},
{t:"tile",type:"tf",q:"Equilateral triangles can tile a plane.",a:true},
{t:"tile",type:"fillin",q:"A regular shape with 6 sides that tiles is ___.",blanks:["hexagon"]},
{t:"tile",type:"enterval",q:"Lines of symmetry in a regular pentagon?",a:5},
{t:"tile",q:"Which does NOT tile alone?",o:["circle","square","triangle","hexagon"],a:0},
{t:"tile",type:"tapall",q:"Tap shapes that tile a flat surface.",pool:["square","hexagon","circle","oval"],correct:["square","hexagon"]},
{t:"tile",q:"Honeycomb is made from which shape?",o:["hexagon","square","triangle","pentagon"],a:0},
{t:"tile",type:"tf",q:"Two pentagons fit together to tile without gap.",a:false},
{t:"tile",q:"Bathroom tiles are usually:",o:["squares","circles","ovals","stars"],a:0}
],
[
{t:"mixed",q:"Lines of symmetry in letter T?",o:["1","2","0","3"],a:0},
{t:"mixed",q:"Which has no line of symmetry?",o:["letter F","letter A","letter M","letter T"],a:0},
{t:"mixed",type:"tf",q:"A rangoli pattern often has many lines of symmetry.",a:true},
{t:"mixed",type:"fillin",q:"A circle has ___ lines of symmetry.",blanks:["infinite"]},
{t:"mixed",type:"enterval",q:"Lines of symmetry in a regular octagon?",a:8},
{t:"mixed",q:"Reflection of digit 8 in vertical mirror?",o:["8","3","E","B"],a:0},
{t:"mixed",type:"tapall",q:"Tap things with line symmetry.",pool:["butterfly","leaf","number 5","letter R"],correct:["butterfly","leaf"]},
{t:"mixed",q:"How many lines of symmetry in letter D?",o:["1","2","0","3"],a:0},
{t:"mixed",type:"tf",q:"An isoceles triangle has 1 line of symmetry.",a:true},
{t:"mixed",q:"Which is a half turn?",o:["180°","90°","270°","360°"],a:0}
]
],
pro:[
[
{t:"applyL",q:"How many lines of symmetry in a regular polygon with 12 sides?",o:["12","6","4","1"],a:0},
{t:"applyL",q:"A kite has how many lines of symmetry?",o:["1","2","0","4"],a:0},
{t:"applyL",type:"tf",q:"A parallelogram (not rectangle) has 0 lines of symmetry.",a:true},
{t:"applyL",type:"fillin",q:"Lines of symmetry in a rhombus is ___.",blanks:["2"]},
{t:"applyL",type:"enterval",q:"Lines of symmetry in a regular nonagon (9 sides)?",a:9},
{t:"applyL",q:"Letters with 2 lines of symmetry:",o:["H, I, X","A, B, C","F, G, J","P, Q, R"],a:0},
{t:"applyL",type:"tapall",q:"Tap shapes with exactly 1 line of symmetry.",pool:["isoceles triangle","kite","square","rectangle"],correct:["isoceles triangle","kite"]},
{t:"applyL",q:"Number of symmetry lines in semicircle?",o:["1","2","0","infinite"],a:0},
{t:"applyL",type:"tf",q:"A regular star with 5 points has 5 lines of symmetry.",a:true},
{t:"applyL",q:"Lines of symmetry in word 'MOM'?",o:["1 vertical","1 horizontal","2","0"],a:0}
],
[
{t:"rotapply",q:"After 180° turn, which letter shows itself?",o:["N","P","R","B"],a:0},
{t:"rotapply",q:"Order of rotational symmetry of a square is:",o:["4","2","1","8"],a:0},
{t:"rotapply",type:"tf",q:"An equilateral triangle has rotational symmetry of order 3.",a:true},
{t:"rotapply",type:"fillin",q:"A regular hexagon has rotational symmetry of order ___.",blanks:["6"]},
{t:"rotapply",type:"enterval",q:"Smallest angle a square can be rotated to look same (degrees)?",a:90},
{t:"rotapply",q:"Which has rotational symmetry order 2?",o:["rectangle","square","equilateral triangle","circle"],a:0},
{t:"rotapply",type:"tapall",q:"Tap letters that look the same after a 180° turn.",pool:["S","Z","A","B"],correct:["S","Z"]},
{t:"rotapply",q:"Smallest turn for a regular pentagon to look same?",o:["72°","60°","90°","45°"],a:0},
{t:"rotapply",type:"tf",q:"A rectangle has rotational symmetry of order 2.",a:true},
{t:"rotapply",q:"Order of rotational symmetry of a circle:",o:["infinite","1","4","8"],a:0}
],
[
{t:"refl2",q:"Mirror image of letter 'E' in vertical mirror is:",o:["reversed E","E","M","W"],a:0},
{t:"refl2",q:"Numbers that look same in vertical mirror:",o:["8 and 0","6 and 9","3 and 5","2 and 7"],a:0},
{t:"refl2",type:"tf",q:"AMBULANCE is written reversed on the front so drivers read it correctly in mirrors.",a:true},
{t:"refl2",type:"fillin",q:"Mirror image of letter p (vertical) is ___.",blanks:["q"]},
{t:"refl2",q:"Mirror image of 'WOW' (vertical mirror)?",o:["WOW","MOM","WMW","OWO"],a:0},
{t:"refl2",type:"enterval",q:"How many lines of symmetry in the digit 8?",a:2},
{t:"refl2",type:"tapall",q:"Tap words that read the same in a vertical mirror.",pool:["MOM","TOOT","TIME","BOOK"],correct:["MOM","TOOT"]},
{t:"refl2",q:"In a horizontal mirror, letter 'B' looks like:",o:["upside-down B","B","D","P"],a:0},
{t:"refl2",type:"tf",q:"Letter K has 1 horizontal line of symmetry.",a:true},
{t:"refl2",q:"Which letter looks same in both horizontal and vertical mirror?",o:["O","B","M","T"],a:0}
],
[
{t:"tile2",q:"Which combination tiles the plane?",o:["squares + triangles","circles + squares","ovals only","stars only"],a:0},
{t:"tile2",q:"Why don't regular pentagons tile the plane?",o:["angles don't fit","too many sides","they overlap","they curve"],a:0},
{t:"tile2",type:"tf",q:"A regular hexagon and equilateral triangle can together tile a plane.",a:true},
{t:"tile2",type:"fillin",q:"At each corner of a square tiling there are ___ squares.",blanks:["4"]},
{t:"tile2",type:"enterval",q:"How many equilateral triangles meet at a point in tiling?",a:6},
{t:"tile2",q:"Honeycomb tiling uses regular:",o:["hexagons","octagons","pentagons","heptagons"],a:0},
{t:"tile2",type:"tapall",q:"Tap regular polygons that tile alone.",pool:["triangle","square","hexagon","pentagon"],correct:["triangle","square","hexagon"]},
{t:"tile2",q:"At each corner of hexagon tiling, how many hexagons?",o:["3","4","6","2"],a:0},
{t:"tile2",type:"tf",q:"Tiling has no gaps and no overlaps.",a:true},
{t:"tile2",q:"Which Indian art uses tiling and symmetry?",o:["rangoli","painting","sketching","writing"],a:0}
],
[
{t:"realuse",q:"Anu folds a square paper along a diagonal. Halves match. Diagonal is a:",o:["line of symmetry","fold only","mirror line","not symmetric"],a:0},
{t:"realuse",q:"How many lines of symmetry does this rangoli with 8-fold pattern have?",o:["8","4","2","16"],a:0},
{t:"realuse",type:"tf",q:"Indian flag's chakra has rotational symmetry.",a:true},
{t:"realuse",type:"fillin",q:"A snowflake usually has ___ lines of symmetry.",blanks:["6"]},
{t:"realuse",type:"enterval",q:"After how many 90° turns does a square return to start?",a:4},
{t:"realuse",q:"A wheel turning 90° from the start has rotated:",o:["a quarter turn","half turn","full turn","no turn"],a:0},
{t:"realuse",type:"tapall",q:"Tap real things with line symmetry.",pool:["leaf","building front","random rock","crumpled paper"],correct:["leaf","building front"]},
{t:"realuse",q:"A flower with 5 identical petals has rotational symmetry of order:",o:["5","1","2","10"],a:0},
{t:"realuse",type:"tf",q:"A handprint on paper folded in half is symmetric.",a:true},
{t:"realuse",q:"Angle between adjacent lines of symmetry of a regular hexagon:",o:["30°","60°","45°","90°"],a:0}
]
]
},
6: { title:'Be My Multiple, I\'ll be Your Factor',
beginner:[
[
{t:"factors",q:"Which is a factor of 12?",o:["4","5","7","9"],a:0},
{t:"multiples",q:"Which is a multiple of 5?",o:["25","22","18","13"],a:0},
{t:"prime",q:"Which number is prime?",o:["7","9","15","21"],a:0},
{t:"composite",q:"Which number is composite?",o:["8","11","13","17"],a:0},
{t:"factors",type:"tf",q:"1 is a factor of every number.",a:true},
{t:"multiples",type:"tf",q:"10 is a multiple of 3.",a:false},
{t:"factors",type:"fillin",q:"The smallest factor of any number is ___.",blanks:["1"]},
{t:"primes",type:"tapall",q:"Tap all the prime numbers.",pool:["2","3","4","5","6","9"],correct:["2","3","5"]},
{t:"factors",type:"enterval",q:"How many factors does 6 have?",a:4},
{t:"multiples",type:"enterval",q:"What is the 3rd multiple of 4?",a:12}
],
[
{t:"factors",q:"Which is NOT a factor of 20?",o:["3","4","5","10"],a:0},
{t:"multiples",q:"Which is a multiple of 6?",o:["18","20","22","26"],a:0},
{t:"prime",q:"Which is the smallest prime number?",o:["2","1","3","5"],a:0},
{t:"composite",q:"Which of these is composite?",o:["9","2","5","11"],a:0},
{t:"prime",type:"tf",q:"9 is a prime number.",a:false},
{t:"multiples",type:"tf",q:"Every multiple of 10 ends with 0.",a:true},
{t:"prime",type:"fillin",q:"The only even prime number is ___.",blanks:["2"]},
{t:"factors",type:"tapall",q:"Tap all factors of 12.",pool:["1","2","3","4","5","6","12"],correct:["1","2","3","4","6","12"]},
{t:"multiples",type:"enterval",q:"What is the 5th multiple of 3?",a:15},
{t:"factors",type:"enterval",q:"How many factors does 10 have?",a:4}
],
[
{t:"hcf",q:"What is the HCF of 6 and 9?",o:["3","2","6","9"],a:0},
{t:"lcm",q:"What is the LCM of 2 and 3?",o:["6","5","2","3"],a:0},
{t:"factors",q:"Which is a factor of 15?",o:["5","4","6","7"],a:0},
{t:"multiples",q:"The 4th multiple of 7 is",o:["28","21","35","14"],a:0},
{t:"prime",type:"tf",q:"15 is a prime number.",a:false},
{t:"composite",type:"tf",q:"4 is the smallest composite number.",a:true},
{t:"hcf",type:"fillin",q:"The HCF of 4 and 8 is ___.",blanks:["4"]},
{t:"primes",type:"tapall",q:"Tap all primes between 1 and 10.",pool:["2","3","4","5","6","7","8","9"],correct:["2","3","5","7"]},
{t:"lcm",type:"enterval",q:"What is the LCM of 4 and 6?",a:12},
{t:"hcf",type:"enterval",q:"What is the HCF of 10 and 15?",a:5}
],
[
{t:"factors",q:"How many factors does 8 have?",o:["4","3","5","6"],a:0},
{t:"multiples",q:"The first 5 multiples of 5 end with which digit?",o:["0 or 5","2","4","8"],a:0},
{t:"prime",q:"Which pair are both primes?",o:["3 and 7","4 and 6","8 and 9","6 and 9"],a:0},
{t:"composite",q:"Which is the smallest composite number?",o:["4","6","8","9"],a:0},
{t:"factors",type:"tf",q:"Every number is a factor of itself.",a:true},
{t:"multiples",type:"tf",q:"0 is a multiple of every number.",a:true},
{t:"factors",type:"fillin",q:"The largest factor of 20 is ___.",blanks:["20"]},
{t:"factors",type:"tapall",q:"Tap all factors of 18.",pool:["1","2","3","4","6","9","12","18"],correct:["1","2","3","6","9","18"]},
{t:"multiples",type:"enterval",q:"What is the 6th multiple of 2?",a:12},
{t:"factors",type:"enterval",q:"How many factors does 7 have?",a:2}
],
[
{t:"hcf",q:"HCF of 8 and 12 is",o:["4","2","6","8"],a:0},
{t:"lcm",q:"LCM of 3 and 5 is",o:["15","8","10","30"],a:0},
{t:"factors",q:"Which is NOT a factor of 24?",o:["5","6","8","12"],a:0},
{t:"prime",q:"Which is a prime between 20 and 30?",o:["23","21","25","27"],a:0},
{t:"composite",type:"tf",q:"21 is a composite number.",a:true},
{t:"prime",type:"tf",q:"1 is a prime number.",a:false},
{t:"hcf",type:"fillin",q:"The HCF of 6 and 12 is ___.",blanks:["6"]},
{t:"composite",type:"tapall",q:"Tap all composite numbers.",pool:["4","5","6","7","8","9"],correct:["4","6","8","9"]},
{t:"lcm",type:"enterval",q:"What is the LCM of 2 and 5?",a:10},
{t:"factors",type:"enterval",q:"What is the largest factor of 16?",a:16}
]
],
pro:[
[
{t:"factors",q:"Reema has 24 sweets to share equally. Which group size won't work?",o:["5","4","6","8"],a:0},
{t:"multiples",q:"A bus stops every 6 km. After 30 km it has stopped how many times?",o:["5","4","6","3"],a:0},
{t:"hcf",q:"Two ribbons are 12 m and 18 m long. Largest equal piece length?",o:["6 m","3 m","9 m","12 m"],a:0},
{t:"lcm",q:"Bell A rings every 4 min, B every 6 min. They ring together after?",o:["12 min","10 min","8 min","24 min"],a:0},
{t:"prime",type:"tf",q:"The sum of two primes 3 and 5 is also a prime.",a:false},
{t:"composite",type:"tf",q:"All even numbers greater than 2 are composite.",a:true},
{t:"factors",type:"fillin",q:"The number with exactly two factors is called a ___ number.",blanks:["prime"]},
{t:"primes",type:"tapall",q:"Tap all primes between 10 and 20.",pool:["11","12","13","14","15","17","18","19"],correct:["11","13","17","19"]},
{t:"lcm",type:"enterval",q:"LCM of 3 and 4 is?",a:12},
{t:"hcf",type:"enterval",q:"HCF of 14 and 21 is?",a:7}
],
[
{t:"factors",q:"Anil packs 30 mangoes equally in boxes. Which is NOT possible?",o:["7 boxes","5 boxes","6 boxes","3 boxes"],a:0},
{t:"multiples",q:"Which is a common multiple of 3 and 4?",o:["12","9","8","10"],a:0},
{t:"hcf",q:"The HCF of 9 and 15 is?",o:["3","1","5","9"],a:0},
{t:"lcm",q:"LCM of 6 and 8 is?",o:["24","12","16","48"],a:0},
{t:"prime",type:"tf",q:"There are exactly 4 primes less than 10.",a:true},
{t:"factors",type:"tf",q:"A prime number has more than 2 factors.",a:false},
{t:"hcf",type:"fillin",q:"HCF of 16 and 24 is ___.",blanks:["8"]},
{t:"factors",type:"tapall",q:"Tap all factors of 24.",pool:["1","2","3","4","5","6","8","12","24"],correct:["1","2","3","4","6","8","12","24"]},
{t:"multiples",type:"enterval",q:"What is the smallest 2-digit multiple of 7?",a:14},
{t:"lcm",type:"enterval",q:"LCM of 5 and 6 is?",a:30}
],
[
{t:"hcf",q:"Two ropes are 20 m and 30 m. Largest equal piece without waste?",o:["10 m","5 m","15 m","20 m"],a:0},
{t:"lcm",q:"Two trains depart every 5 and 10 min. Together again after?",o:["10 min","5 min","15 min","20 min"],a:0},
{t:"prime",q:"Sum of the first two primes is?",o:["5","6","4","7"],a:0},
{t:"factors",q:"Which number has exactly 3 factors?",o:["9","6","10","12"],a:0},
{t:"multiples",type:"tf",q:"Every multiple of 6 is also a multiple of 3.",a:true},
{t:"composite",type:"tf",q:"15 is a composite number.",a:true},
{t:"lcm",type:"fillin",q:"LCM of 4 and 5 is ___.",blanks:["20"]},
{t:"primes",type:"tapall",q:"Tap all primes between 1 and 30.",pool:["1","2","11","21","23","25","29"],correct:["2","11","23","29"]},
{t:"hcf",type:"enterval",q:"HCF of 12 and 18 is?",a:6},
{t:"factors",type:"enterval",q:"How many factors does 16 have?",a:5}
],
[
{t:"multiples",q:"First common multiple of 4 and 6 is?",o:["12","8","18","24"],a:0},
{t:"factors",q:"Which number is NOT a multiple of 9?",o:["20","18","27","36"],a:0},
{t:"hcf",q:"HCF of 18 and 30?",o:["6","3","9","15"],a:0},
{t:"lcm",q:"LCM of 2, 3 and 4?",o:["12","6","8","24"],a:0},
{t:"prime",type:"tf",q:"Twin primes are pairs of primes that differ by 2.",a:true},
{t:"composite",type:"tf",q:"25 is a composite number.",a:true},
{t:"factors",type:"fillin",q:"The HCF of two co-prime numbers is ___.",blanks:["1"]},
{t:"factors",type:"tapall",q:"Tap all factors of 30.",pool:["1","2","3","5","6","8","10","15","30"],correct:["1","2","3","5","6","10","15","30"]},
{t:"multiples",type:"enterval",q:"How many multiples of 5 are between 1 and 30?",a:6},
{t:"lcm",type:"enterval",q:"LCM of 6 and 9 is?",a:18}
],
[
{t:"hcf",q:"Two cans hold 12 L and 18 L milk. Largest measure to fill both exactly?",o:["6 L","2 L","3 L","9 L"],a:0},
{t:"lcm",q:"Lights blink every 4 and 5 sec. Together every?",o:["20 sec","9 sec","10 sec","40 sec"],a:0},
{t:"factors",q:"Which has the most factors?",o:["24","11","13","19"],a:0},
{t:"prime",q:"Which pair are co-primes?",o:["8 and 9","6 and 9","4 and 8","10 and 15"],a:0},
{t:"multiples",type:"tf",q:"Every multiple of 4 is also a multiple of 2.",a:true},
{t:"prime",type:"tf",q:"All odd numbers are prime.",a:false},
{t:"hcf",type:"fillin",q:"HCF of 20 and 25 is ___.",blanks:["5"]},
{t:"primes",type:"tapall",q:"Tap all primes.",pool:["13","14","15","17","18","19"],correct:["13","17","19"]},
{t:"lcm",type:"enterval",q:"LCM of 8 and 12?",a:24},
{t:"hcf",type:"enterval",q:"HCF of 24 and 30?",a:6}
]
]
},
7: { title:'Can You See the Pattern?',
beginner:[
[
{t:"pattern",q:"What comes next: 2, 4, 6, 8, ___?",o:["10","9","12","11"],a:0},
{t:"pattern",q:"Next in 5, 10, 15, 20, ___?",o:["25","22","30","23"],a:0},
{t:"square",q:"Square of 3 is?",o:["9","6","12","8"],a:0},
{t:"triangular",q:"First triangular number is?",o:["1","2","3","0"],a:0},
{t:"pattern",type:"tf",q:"In 1, 3, 5, 7, the next number is 9.",a:true},
{t:"square",type:"tf",q:"Square of 4 is 16.",a:true},
{t:"pattern",type:"fillin",q:"Next in 10, 20, 30, ___.",blanks:["40"]},
{t:"square",type:"tapall",q:"Tap all square numbers.",pool:["1","2","4","6","9","12","16"],correct:["1","4","9","16"]},
{t:"square",type:"enterval",q:"Square of 5 is?",a:25},
{t:"pattern",type:"enterval",q:"Next in 3, 6, 9, 12, ___?",a:15}
],
[
{t:"pattern",q:"What is the rule in 7, 14, 21, 28?",o:["add 7","add 5","add 6","add 8"],a:0},
{t:"square",q:"Which is a square number?",o:["25","20","30","18"],a:0},
{t:"triangular",q:"Triangular numbers start with 1, 3, 6, 10. Next?",o:["15","12","18","20"],a:0},
{t:"pattern",q:"What comes next: 100, 90, 80, ___?",o:["70","75","85","60"],a:0},
{t:"pattern",type:"tf",q:"Even numbers go 2, 4, 6, 8, 10.",a:true},
{t:"magic",type:"tf",q:"In a magic square, all rows add to the same number.",a:true},
{t:"square",type:"fillin",q:"Square of 6 is ___.",blanks:["36"]},
{t:"triangular",type:"tapall",q:"Tap all triangular numbers.",pool:["1","2","3","4","6","8","10"],correct:["1","3","6","10"]},
{t:"pattern",type:"enterval",q:"Next in 50, 45, 40, ___?",a:35},
{t:"square",type:"enterval",q:"Square of 7 is?",a:49}
],
[
{t:"pattern",q:"Next in 1, 4, 7, 10, ___?",o:["13","12","14","15"],a:0},
{t:"square",q:"Square of 8 is?",o:["64","48","56","72"],a:0},
{t:"triangular",q:"4th triangular number is?",o:["10","6","12","15"],a:0},
{t:"pattern",q:"Pattern 2, 4, 8, 16. Rule?",o:["multiply by 2","add 2","add 4","multiply by 3"],a:0},
{t:"pattern",type:"tf",q:"In 11, 22, 33, the rule is +11.",a:true},
{t:"square",type:"tf",q:"Square of 9 is 81.",a:true},
{t:"pattern",type:"fillin",q:"Next in 5, 10, 20, 40, ___.",blanks:["80"]},
{t:"square",type:"tapall",q:"Tap all square numbers.",pool:["25","30","36","40","49","50","64"],correct:["25","36","49","64"]},
{t:"square",type:"enterval",q:"Square of 10 is?",a:100},
{t:"triangular",type:"enterval",q:"5th triangular number is?",a:15}
],
[
{t:"pattern",q:"Next in 9, 18, 27, ___?",o:["36","30","45","40"],a:0},
{t:"magic",q:"In a 3x3 magic square with sum 15, the centre is?",o:["5","3","7","9"],a:0},
{t:"square",q:"Which is NOT a square number?",o:["20","16","25","36"],a:0},
{t:"triangular",q:"Sum 1+2+3+4 gives a ___ number?",o:["triangular","square","prime","odd"],a:0},
{t:"pattern",type:"tf",q:"Pattern 1, 2, 4, 8 doubles each time.",a:true},
{t:"triangular",type:"tf",q:"6 is a triangular number.",a:true},
{t:"pattern",type:"fillin",q:"Next in 100, 95, 90, ___.",blanks:["85"]},
{t:"square",type:"tapall",q:"Tap all squares.",pool:["1","4","9","11","16","20","25"],correct:["1","4","9","16","25"]},
{t:"pattern",type:"enterval",q:"Next in 12, 24, 36, ___?",a:48},
{t:"square",type:"enterval",q:"What is 11 squared?",a:121}
],
[
{t:"pattern",q:"Pattern: 81, 72, 63, 54. Rule?",o:["subtract 9","subtract 8","subtract 7","subtract 10"],a:0},
{t:"triangular",q:"Triangular: 1, 3, 6, 10, 15. Next?",o:["21","18","20","25"],a:0},
{t:"square",q:"Square of 12 is?",o:["144","124","132","156"],a:0},
{t:"magic",q:"In a magic square, the diagonal sum equals?",o:["row sum","double row","half row","row+1"],a:0},
{t:"pattern",type:"tf",q:"Odd numbers go 1, 3, 5, 7, 9.",a:true},
{t:"square",type:"tf",q:"Square of 0 is 0.",a:true},
{t:"pattern",type:"fillin",q:"Next in 7, 14, 21, ___.",blanks:["28"]},
{t:"triangular",type:"tapall",q:"Tap all triangular numbers.",pool:["3","5","6","9","10","15","16"],correct:["3","6","10","15"]},
{t:"square",type:"enterval",q:"Square of 13 is?",a:169},
{t:"pattern",type:"enterval",q:"Next in 2, 4, 8, 16, ___?",a:32}
]
],
pro:[
[
{t:"pattern",q:"Riya wrote 3, 6, 12, 24. The next is?",o:["48","36","30","60"],a:0},
{t:"square",q:"Sum of first 3 odd numbers (1+3+5) is which square?",o:["9","6","4","12"],a:0},
{t:"triangular",q:"Triangular number with 10 dots is the ___ one.",o:["4th","3rd","5th","6th"],a:0},
{t:"magic",q:"Magic sum of a 3x3 square using 1 to 9 is?",o:["15","12","18","21"],a:0},
{t:"pattern",type:"tf",q:"In 100, 81, 64, 49, the numbers are squares going down.",a:true},
{t:"square",type:"tf",q:"Sum 1+3+5+7 equals 4 squared.",a:true},
{t:"pattern",type:"fillin",q:"Next in 1, 4, 9, 16, 25, ___.",blanks:["36"]},
{t:"square",type:"tapall",q:"Tap squares between 30 and 100.",pool:["25","36","49","50","64","81","90","100"],correct:["36","49","64","81","100"]},
{t:"pattern",type:"enterval",q:"Next in 5, 10, 20, 40, ___?",a:80},
{t:"triangular",type:"enterval",q:"6th triangular number is?",a:21}
],
[
{t:"pattern",q:"In 2, 5, 10, 17, the differences are 3, 5, 7. Next?",o:["26","24","20","28"],a:0},
{t:"square",q:"Which sum gives a square? 1+3+5+7+9 =",o:["25","20","23","30"],a:0},
{t:"triangular",q:"Sum of first 5 numbers (1+2+3+4+5) is?",o:["15","12","20","10"],a:0},
{t:"magic",q:"In magic sum 15, if a row is 2, ?, 6, the missing is?",o:["7","5","9","3"],a:0},
{t:"pattern",type:"tf",q:"Pattern 1, 2, 4, 7, 11 adds 1 more each time.",a:true},
{t:"square",type:"tf",q:"Square numbers always end in 0,1,4,5,6 or 9.",a:true},
{t:"pattern",type:"fillin",q:"Next in 1, 8, 27, 64, ___.",blanks:["125"]},
{t:"square",type:"tapall",q:"Tap all square numbers.",pool:["100","110","121","130","144","150"],correct:["100","121","144"]},
{t:"square",type:"enterval",q:"Square of 14 is?",a:196},
{t:"pattern",type:"enterval",q:"Next in 100, 90, 81, 73, ___? (diff -10,-9,-8,-7)",a:66}
],
[
{t:"pattern",q:"Geet sees 3, 7, 11, 15. Next?",o:["19","17","20","22"],a:0},
{t:"square",q:"How many squares are between 1 and 50?",o:["7","6","8","5"],a:0},
{t:"triangular",q:"The 7th triangular number is?",o:["28","21","25","30"],a:0},
{t:"magic",q:"In a magic square, opposite corners and centre add to ___ times centre.",o:["3","2","4","5"],a:0},
{t:"pattern",type:"tf",q:"In 1, 1, 2, 3, 5, 8 each is sum of previous two (Fibonacci).",a:true},
{t:"square",type:"tf",q:"Square of 15 is 225.",a:true},
{t:"pattern",type:"fillin",q:"Next in 64, 32, 16, 8, ___.",blanks:["4"]},
{t:"triangular",type:"tapall",q:"Tap triangular numbers.",pool:["10","15","18","21","25","28"],correct:["10","15","21","28"]},
{t:"square",type:"enterval",q:"Square of 20 is?",a:400},
{t:"pattern",type:"enterval",q:"Next in 11, 22, 33, 44, ___?",a:55}
],
[
{t:"pattern",q:"Pattern 1, 2, 4, 8, 16, 32. Rule?",o:["double","add 2","add 3","triple"],a:0},
{t:"square",q:"Sum of first 4 odds (1+3+5+7) equals?",o:["16","12","18","20"],a:0},
{t:"triangular",q:"How many small triangles needed to make 3rd triangular shape?",o:["6","3","9","10"],a:0},
{t:"magic",q:"In magic square sum 15, if centre is 5, opposite corners add to?",o:["10","8","12","15"],a:0},
{t:"pattern",type:"tf",q:"Pattern 81, 27, 9, 3 divides by 3 each time.",a:true},
{t:"square",type:"tf",q:"Difference between 5 squared and 4 squared is 9.",a:true},
{t:"pattern",type:"fillin",q:"Next in 3, 9, 27, 81, ___.",blanks:["243"]},
{t:"square",type:"tapall",q:"Tap squares less than 50.",pool:["1","4","9","16","25","36","49","50"],correct:["1","4","9","16","25","36","49"]},
{t:"square",type:"enterval",q:"Square of 16 is?",a:256},
{t:"triangular",type:"enterval",q:"Sum 1+2+3+4+5+6 equals?",a:21}
],
[
{t:"pattern",q:"Aman lays bricks: row1 has 1, row2 has 3, row3 has 5. Row 5?",o:["9","7","11","8"],a:0},
{t:"square",q:"What is 17 squared?",o:["289","272","256","306"],a:0},
{t:"triangular",q:"Sum of dots in row1 to row5 of triangular pattern is?",o:["15","10","20","21"],a:0},
{t:"magic",q:"A 3x3 magic square uses each number 1-9 ___ time.",o:["once","twice","thrice","never"],a:0},
{t:"pattern",type:"tf",q:"In 2, 6, 18, 54, the rule is times 3.",a:true},
{t:"square",type:"tf",q:"All square numbers are even.",a:false},
{t:"pattern",type:"fillin",q:"Next in 1, 3, 6, 10, 15, ___.",blanks:["21"]},
{t:"triangular",type:"tapall",q:"Tap triangular numbers under 50.",pool:["1","3","6","10","12","15","21","28","36","45"],correct:["1","3","6","10","15","21","28","36","45"]},
{t:"square",type:"enterval",q:"Square of 19 is?",a:361},
{t:"pattern",type:"enterval",q:"Next in 6, 12, 24, 48, ___?",a:96}
]
]
},
8: { title:'Mapping Your Way',
beginner:[
[
{t:"directions",q:"The sun rises in the?",o:["East","West","North","South"],a:0},
{t:"directions",q:"Opposite of North is?",o:["South","East","West","NE"],a:0},
{t:"scale",q:"If 1 cm on a map = 10 km, then 3 cm =?",o:["30 km","13 km","20 km","3 km"],a:0},
{t:"compass",q:"Between North and East lies?",o:["NE","NW","SE","SW"],a:0},
{t:"directions",type:"tf",q:"The sun sets in the West.",a:true},
{t:"compass",type:"tf",q:"NW means North-West.",a:true},
{t:"directions",type:"fillin",q:"Opposite of East is ___.",blanks:["West"]},
{t:"compass",type:"tapall",q:"Tap the four main compass directions.",pool:["North","NE","South","SW","East","West","NW"],correct:["North","South","East","West"]},
{t:"scale",type:"enterval",q:"If 1 cm = 10 km, then 5 cm equals how many km?",a:50},
{t:"scale",type:"enterval",q:"If 1 cm = 5 km, then 4 cm equals how many km?",a:20}
],
[
{t:"directions",q:"You face North. Your right hand points to?",o:["East","West","South","NE"],a:0},
{t:"scale",q:"On a map 1 cm = 2 km, 6 cm represents?",o:["12 km","8 km","6 km","16 km"],a:0},
{t:"compass",q:"Between South and West lies?",o:["SW","SE","NW","NE"],a:0},
{t:"map",q:"A map is drawn from which view?",o:["Top","Side","Front","Back"],a:0},
{t:"directions",type:"tf",q:"If you face East, South is on your right.",a:true},
{t:"scale",type:"tf",q:"On a map, 'scale' tells how distances compare to real ones.",a:true},
{t:"directions",type:"fillin",q:"Opposite of South is ___.",blanks:["North"]},
{t:"compass",type:"tapall",q:"Tap all in-between (intercardinal) directions.",pool:["NE","NW","SE","SW","North","East","South"],correct:["NE","NW","SE","SW"]},
{t:"scale",type:"enterval",q:"1 cm = 10 km. Distance for 7 cm is how many km?",a:70},
{t:"scale",type:"enterval",q:"1 cm = 4 km. Distance for 6 cm is how many km?",a:24}
],
[
{t:"directions",q:"Facing North, behind you is?",o:["South","East","West","NE"],a:0},
{t:"compass",q:"Direction between North and West?",o:["NW","NE","SW","SE"],a:0},
{t:"scale",q:"If 1 cm = 100 m, then 4 cm =?",o:["400 m","40 m","100 m","4 m"],a:0},
{t:"map",q:"Symbols on a map are explained in the?",o:["Key","Scale","Title","Border"],a:0},
{t:"directions",type:"tf",q:"At noon the sun is roughly in the South in India.",a:true},
{t:"map",type:"tf",q:"A map shows things bigger than they are in real life.",a:false},
{t:"scale",type:"fillin",q:"If 1 cm = 10 km, then 8 cm = ___ km.",blanks:["80"]},
{t:"compass",type:"tapall",q:"Tap all directions starting with N.",pool:["North","NE","NW","South","East","West","SE"],correct:["North","NE","NW"]},
{t:"scale",type:"enterval",q:"1 cm = 5 km. 9 cm equals how many km?",a:45},
{t:"scale",type:"enterval",q:"1 cm = 2 km. 10 cm equals how many km?",a:20}
],
[
{t:"directions",q:"Standing facing East, North is on your?",o:["Left","Right","Behind","Front"],a:0},
{t:"compass",q:"South-East lies between?",o:["South and East","North and East","South and West","North and West"],a:0},
{t:"scale",q:"1 cm on map = 50 m. 6 cm =?",o:["300 m","150 m","250 m","60 m"],a:0},
{t:"map",q:"Which is shown smaller on a map than real life?",o:["A city","A coin","A pencil","An ant"],a:0},
{t:"directions",type:"tf",q:"Facing West, your back is to the East.",a:true},
{t:"compass",type:"tf",q:"There are 8 main compass directions including NE, NW, SE, SW.",a:true},
{t:"scale",type:"fillin",q:"If 1 cm = 100 km, 5 cm = ___ km.",blanks:["500"]},
{t:"compass",type:"tapall",q:"Tap directions that include South.",pool:["South","SE","SW","NE","NW","North"],correct:["South","SE","SW"]},
{t:"scale",type:"enterval",q:"1 cm = 10 km. 12 cm = how many km?",a:120},
{t:"scale",type:"enterval",q:"1 cm = 1 km. 25 cm = how many km?",a:25}
],
[
{t:"directions",q:"If shadow falls in the West, sun is in the?",o:["East","South","North","West"],a:0},
{t:"compass",q:"NE is between North and?",o:["East","West","South","SE"],a:0},
{t:"scale",q:"1 cm = 20 km. 5 cm =?",o:["100 km","20 km","50 km","25 km"],a:0},
{t:"map",q:"Which is the use of a map?",o:["Find a place","Cook food","Read a story","Sing a song"],a:0},
{t:"directions",type:"tf",q:"East and West are opposite directions.",a:true},
{t:"map",type:"tf",q:"A map of India shows real size of India.",a:false},
{t:"scale",type:"fillin",q:"If 1 cm = 25 km, 4 cm = ___ km.",blanks:["100"]},
{t:"compass",type:"tapall",q:"Tap directions opposite to North, East, South, West.",pool:["South","West","North","East","NE","SW"],correct:["South","West","North","East"]},
{t:"scale",type:"enterval",q:"1 cm = 5 km. 11 cm = how many km?",a:55},
{t:"scale",type:"enterval",q:"1 cm = 50 m. 6 cm equals how many metres?",a:300}
]
],
pro:[
[
{t:"scale",q:"Map scale 1 cm = 10 km. Two cities are 7 cm apart. Real distance?",o:["70 km","17 km","700 km","7 km"],a:0},
{t:"directions",q:"Anu walks 3 km East then 3 km North. She is now ___ of start.",o:["NE","NW","SE","SW"],a:0},
{t:"compass",q:"Facing NE you turn 90 degrees clockwise. You now face?",o:["SE","NW","SW","North"],a:0},
{t:"map",q:"On a map of school, 1 cm = 5 m. Library is 4 cm from gate. Real distance?",o:["20 m","9 m","45 m","25 m"],a:0},
{t:"scale",type:"tf",q:"A larger scale map shows more detail of a smaller area.",a:true},
{t:"directions",type:"tf",q:"If you walk South then turn left, you face East.",a:true},
{t:"scale",type:"fillin",q:"If 1 cm = 100 km, 9 cm = ___ km.",blanks:["900"]},
{t:"compass",type:"tapall",q:"Tap directions exactly between two cardinal ones.",pool:["NE","NW","SE","SW","North","East","South","West"],correct:["NE","NW","SE","SW"]},
{t:"scale",type:"enterval",q:"1 cm = 10 km. 15 cm = how many km?",a:150},
{t:"scale",type:"enterval",q:"1 cm = 6 km. 8 cm = how many km?",a:48}
],
[
{t:"scale",q:"Delhi to Agra is 200 km. On a 1 cm = 50 km map it is?",o:["4 cm","2 cm","8 cm","10 cm"],a:0},
{t:"directions",q:"Ravi faces South. He turns right twice (90 each). He now faces?",o:["North","South","East","West"],a:0},
{t:"compass",q:"You are at park. Temple is 2 cm North and shop 2 cm East. Temple is ___ of shop.",o:["NW","NE","SW","SE"],a:0},
{t:"scale",q:"Map: 1 cm = 4 km. Distance 24 km equals how many cm?",o:["6","4","8","12"],a:0},
{t:"map",type:"tf",q:"A map's key explains what symbols mean.",a:true},
{t:"directions",type:"tf",q:"Facing East and turning left twice, you face West.",a:true},
{t:"scale",type:"fillin",q:"If 1 cm = 5 km, then 50 km = ___ cm.",blanks:["10"]},
{t:"compass",type:"tapall",q:"Tap the 8 directions on a compass.",pool:["North","South","East","West","NE","NW","SE","SW"],correct:["North","South","East","West","NE","NW","SE","SW"]},
{t:"scale",type:"enterval",q:"1 cm = 10 km. 30 km = how many cm?",a:3},
{t:"scale",type:"enterval",q:"1 cm = 5 km. 35 km = how many cm?",a:7}
],
[
{t:"directions",q:"Meena walks 5 km North then 5 km West. From start, she is in?",o:["NW","NE","SW","SE"],a:0},
{t:"scale",q:"On a 1 cm = 8 km map, two villages are 5 cm apart. Real distance?",o:["40 km","13 km","45 km","50 km"],a:0},
{t:"compass",q:"Direction opposite to NE is?",o:["SW","NW","SE","South"],a:0},
{t:"map",q:"A bus stand 6 cm from station on a 1 cm = 200 m map is at?",o:["1200 m","600 m","1000 m","800 m"],a:0},
{t:"scale",type:"tf",q:"On a map of India, 1 cm could equal 100 km in real distance.",a:true},
{t:"directions",type:"tf",q:"If you face North and turn 180 degrees, you face South.",a:true},
{t:"scale",type:"fillin",q:"If 1 cm = 10 km, then 4 cm = ___ km.",blanks:["40"]},
{t:"compass",type:"tapall",q:"Tap directions between South and West and South and East.",pool:["SW","SE","NW","NE","North"],correct:["SW","SE"]},
{t:"scale",type:"enterval",q:"1 cm = 10 km. 100 km = how many cm?",a:10},
{t:"scale",type:"enterval",q:"1 cm = 25 km. 6 cm = how many km?",a:150}
],
[
{t:"directions",q:"Shadow of a tree at 6 am falls in which direction?",o:["West","East","North","South"],a:0},
{t:"scale",q:"Pune to Mumbai 150 km. On 1 cm = 30 km map, distance is?",o:["5 cm","3 cm","6 cm","10 cm"],a:0},
{t:"compass",q:"Going from N to NE to E, you turn ___?",o:["clockwise","anti-clockwise","backward","randomly"],a:0},
{t:"map",q:"Which is needed to read a map correctly?",o:["Scale and direction","Pencil","Eraser","Ruler only"],a:0},
{t:"scale",type:"tf",q:"A scale of 1 cm = 1 km is bigger than 1 cm = 100 km.",a:true},
{t:"compass",type:"tf",q:"If you face SE and turn 90 clockwise, you face SW.",a:true},
{t:"scale",type:"fillin",q:"If 1 cm = 50 m, then 200 m = ___ cm.",blanks:["4"]},
{t:"compass",type:"tapall",q:"Tap directions between two cardinal points (intercardinal).",pool:["NE","SE","NW","SW","North","South"],correct:["NE","SE","NW","SW"]},
{t:"scale",type:"enterval",q:"1 cm = 12 km. 5 cm = how many km?",a:60},
{t:"scale",type:"enterval",q:"1 cm = 2 km. 14 km = how many cm?",a:7}
],
[
{t:"scale",q:"Map: 1 cm = 15 km. Distance 4 cm represents?",o:["60 km","19 km","45 km","20 km"],a:0},
{t:"directions",q:"From your house: school is 4 km North, market 4 km South. Distance school to market?",o:["8 km","4 km","2 km","6 km"],a:0},
{t:"compass",q:"You travel from East to North. Your turn is?",o:["anti-clockwise","clockwise","backward","downward"],a:0},
{t:"map",q:"A map needs which 3 things?",o:["Scale, direction, key","Colour, name, border","Lines, dots, words","Pen, paper, ink"],a:0},
{t:"scale",type:"tf",q:"On a map 1 cm = 10 km, 8 cm equals 80 km.",a:true},
{t:"directions",type:"tf",q:"East is to the right of someone facing North.",a:true},
{t:"scale",type:"fillin",q:"If 1 cm = 100 m, then 7 cm = ___ m.",blanks:["700"]},
{t:"compass",type:"tapall",q:"Tap all directions that have East in their name.",pool:["East","NE","SE","NW","SW","West"],correct:["East","NE","SE"]},
{t:"scale",type:"enterval",q:"1 cm = 20 km. 7 cm = how many km?",a:140},
{t:"scale",type:"enterval",q:"1 cm = 100 m. 1500 m = how many cm?",a:15}
]
]
},
9: { title:'Boxes and Sketches',
beginner:[
[
{t:"faces",q:"How many faces does a cube have?",o:["6","4","8","12"],a:0},
{t:"edges",q:"How many edges does a cube have?",o:["12","6","8","10"],a:0},
{t:"vertices",q:"How many vertices (corners) does a cube have?",o:["8","6","12","4"],a:0},
{t:"cuboid",q:"How many faces does a cuboid have?",o:["6","4","8","5"],a:0},
{t:"net",type:"tf",q:"A net is a flat shape that can be folded to make a solid.",a:true},
{t:"cube-faces",type:"tf",q:"All faces of a cube are squares.",a:true},
{t:"shape",q:"Aarav has a Rubik's cube. What 3D shape is it?",o:["Cube","Cuboid","Cylinder","Cone"],a:0},
{t:"counting",type:"enterval",q:"How many corners does a cuboid have?",a:8},
{t:"edges-cuboid",type:"enterval",q:"How many edges does a cuboid have?",a:12},
{t:"matchbox",type:"fillin",q:"A matchbox is shaped like a ___.",blanks:["cuboid"]}
],
[
{t:"net-cube",q:"How many squares are in the net of a cube?",o:["6","4","8","12"],a:0},
{t:"shape",q:"A dice is an example of which solid?",o:["Cube","Cuboid","Sphere","Cone"],a:0},
{t:"shape",q:"A brick is shaped like a ___.",o:["Cuboid","Cube","Sphere","Cylinder"],a:0},
{t:"faces-shape",q:"All faces of a cuboid are ___.",o:["Rectangles","Triangles","Circles","Pentagons"],a:0},
{t:"net",type:"tf",q:"A cube net always has exactly 6 squares.",a:true},
{t:"vertices",type:"tf",q:"A cube has more vertices than faces.",a:true},
{t:"identify",q:"Which is NOT a face of a cube?",o:["Triangle","Square","Rectangle","Circle"],a:0},
{t:"count",type:"enterval",q:"Faces of a cube?",a:6},
{t:"tap",type:"tapall",q:"Tap all solids that have flat faces only.",pool:["Cube","Cuboid","Sphere","Cone"],correct:["Cube","Cuboid"]},
{t:"fill",type:"fillin",q:"A solid with 6 equal square faces is a ___.",blanks:["cube"]}
],
[
{t:"net",q:"Riya unfolds a tea box. What net does she likely see?",o:["6 rectangles","4 squares","3 triangles","Circle"],a:0},
{t:"shape",q:"Which shape has 0 vertices?",o:["Sphere","Cube","Cuboid","Pyramid"],a:0},
{t:"shape",q:"Which has 1 curved face and 2 flat circular faces?",o:["Cylinder","Cube","Cone","Sphere"],a:0},
{t:"cone",q:"How many flat faces does a cone have?",o:["1","2","3","0"],a:0},
{t:"net-tf",type:"tf",q:"A net of a cuboid has 6 rectangles.",a:true},
{t:"sphere",type:"tf",q:"A sphere has flat faces.",a:false},
{t:"identify",q:"Which solid is a tin of biscuits usually shaped like?",o:["Cylinder","Cube","Cone","Pyramid"],a:0},
{t:"count",type:"enterval",q:"Edges of a cube?",a:12},
{t:"tap",type:"tapall",q:"Tap all 3D solids.",pool:["Cube","Square","Cuboid","Triangle"],correct:["Cube","Cuboid"]},
{t:"fill",type:"fillin",q:"A line where two faces meet is called an ___.",blanks:["edge"]}
],
[
{t:"net-fold",q:"Which net folds to a cube?",o:["6 squares in a cross","6 triangles","4 rectangles","Circle and 2 rectangles"],a:0},
{t:"compare",q:"Which has more edges, a cube or a cuboid?",o:["Both same","Cube","Cuboid","Cannot say"],a:0},
{t:"compare",q:"Which has more vertices, a cube or a cone?",o:["Cube","Cone","Both same","Neither"],a:0},
{t:"shape",q:"An ice cream cone is shaped like a ___.",o:["Cone","Cube","Cuboid","Cylinder"],a:0},
{t:"tf",type:"tf",q:"A cube is a special type of cuboid.",a:true},
{t:"tf",type:"tf",q:"A cuboid has 8 vertices.",a:true},
{t:"identify",q:"Which is the top view of a cube?",o:["Square","Triangle","Circle","Rectangle"],a:0},
{t:"count",type:"enterval",q:"Vertices of a cuboid?",a:8},
{t:"tap",type:"tapall",q:"Tap shapes that can be a face of a cuboid.",pool:["Rectangle","Square","Triangle","Circle"],correct:["Rectangle","Square"]},
{t:"fill",type:"fillin",q:"The corner of a solid is called a ___.",blanks:["vertex"]}
],
[
{t:"net",q:"A net for a die has how many dots-faces?",o:["6","4","8","12"],a:0},
{t:"shape",q:"A football's shape is a ___.",o:["Sphere","Cube","Cone","Cylinder"],a:0},
{t:"top-view",q:"Top view of a cylinder?",o:["Circle","Square","Triangle","Rectangle"],a:0},
{t:"side-view",q:"Side view of a cube?",o:["Square","Triangle","Circle","Hexagon"],a:0},
{t:"tf",type:"tf",q:"A cone has 1 vertex.",a:true},
{t:"tf",type:"tf",q:"A cylinder has 3 faces.",a:true},
{t:"identify",q:"Which solid rolls easily?",o:["Sphere","Cube","Cuboid","Pyramid"],a:0},
{t:"count",type:"enterval",q:"Flat faces of a cylinder?",a:2},
{t:"tap",type:"tapall",q:"Tap all things shaped like a cuboid.",pool:["Brick","Matchbox","Ball","Ice-cream cone"],correct:["Brick","Matchbox"]},
{t:"fill",type:"fillin",q:"A cylinder has ___ curved face.",blanks:["1"]}
]
],
pro:[
[
{t:"compare",q:"A cube has 6 faces and a cuboid has 6 faces. How many faces do they have together?",o:["12","6","10","14"],a:0},
{t:"net",q:"A net has 6 identical squares. What does it form?",o:["Cube","Cuboid","Pyramid","Cone"],a:0},
{t:"reason",q:"Why can't a net of 5 squares form a cube?",o:["Cube needs 6 faces","Squares are too small","Squares are equal","It can"],a:0},
{t:"missing",q:"A solid has 6 faces, 12 edges and ___ vertices.",o:["8","6","10","4"],a:0},
{t:"tf",type:"tf",q:"All cubes are cuboids but not all cuboids are cubes.",a:true},
{t:"tf",type:"tf",q:"A net of a cuboid can have rectangles of different sizes.",a:true},
{t:"identify",q:"A box has length 5cm, breadth 3cm, height 2cm. It is a ___.",o:["Cuboid","Cube","Sphere","Cone"],a:0},
{t:"count",type:"enterval",q:"Total faces in 2 cubes together?",a:12},
{t:"tap",type:"tapall",q:"Tap nets that can fold to form a cube (each has 6 squares).",pool:["Cross of 6 squares","Strip of 6 squares in row","4 squares","5 squares"],correct:["Cross of 6 squares","Strip of 6 squares in row"]},
{t:"fill",type:"fillin",q:"A cuboid with all equal sides is called a ___.",blanks:["cube"]}
],
[
{t:"word",q:"Meera makes 3 paper cubes. How many faces in all?",o:["18","12","15","21"],a:0},
{t:"word",q:"A cuboid has 12 edges. Two cuboids have how many edges?",o:["24","12","18","30"],a:0},
{t:"reason",q:"Which net will NOT fold into a cube?",o:["6 squares in straight line","Cross of 6 squares","T-shape of 6 squares","Z-shape of 6 squares"],a:0},
{t:"compare",q:"Cube vertices + Cuboid vertices = ?",o:["16","12","10","8"],a:0},
{t:"tf",type:"tf",q:"Two adjacent faces of a cube share one edge.",a:true},
{t:"tf",type:"tf",q:"A cube has 6 vertices.",a:false},
{t:"identify",q:"Which solid has the SAME shape from all sides?",o:["Cube","Cuboid","Cone","Cylinder"],a:0},
{t:"count",type:"enterval",q:"Edges in 2 cubes?",a:24},
{t:"tap",type:"tapall",q:"Tap shapes that are cubes in real life.",pool:["Sugar cube","Dice","Football","Tin"],correct:["Sugar cube","Dice"]},
{t:"fill",type:"fillin",q:"A cube has 8 vertices and 12 ___.",blanks:["edges"]}
],
[
{t:"word",q:"A box has 4 rectangular and 2 square faces. It is a ___.",o:["Cuboid","Cube","Sphere","Pyramid"],a:0},
{t:"reason",q:"How many edges meet at a vertex of a cube?",o:["3","2","4","6"],a:0},
{t:"missing",q:"Faces + Vertices - Edges of a cube = ___.",o:["2","6","8","12"],a:0},
{t:"compare",q:"Which solid has more flat faces, cube or cylinder?",o:["Cube","Cylinder","Same","Neither"],a:0},
{t:"tf",type:"tf",q:"Faces + Vertices - Edges = 2 for any cuboid.",a:true},
{t:"tf",type:"tf",q:"A cuboid net always has identical rectangles.",a:false},
{t:"identify",q:"A Toblerone box is shaped like a ___.",o:["Triangular prism","Cube","Cylinder","Cone"],a:0},
{t:"count",type:"enterval",q:"Faces in 3 cuboids?",a:18},
{t:"tap",type:"tapall",q:"Tap solids with at least one curved surface.",pool:["Sphere","Cone","Cube","Cylinder"],correct:["Sphere","Cone","Cylinder"]},
{t:"fill",type:"fillin",q:"3 edges meet at each ___ of a cube.",blanks:["vertex"]}
],
[
{t:"word",q:"Arjun cuts open a chocolate box. He sees 6 rectangles. The box is a ___.",o:["Cuboid","Cube","Sphere","Pyramid"],a:0},
{t:"reason",q:"If a cube has side 4cm, how long is each edge?",o:["4cm","6cm","8cm","12cm"],a:0},
{t:"missing",q:"A net has 6 rectangles: 2 of 3×2, 2 of 3×4, 2 of 2×4. It folds into a ___.",o:["Cuboid","Cube","Pyramid","Cone"],a:0},
{t:"compare",q:"Total vertices in a cube + a cone = ?",o:["9","8","10","12"],a:0},
{t:"tf",type:"tf",q:"Opposite faces of a cuboid are equal.",a:true},
{t:"tf",type:"tf",q:"All edges of a cuboid are equal.",a:false},
{t:"identify",q:"Which net forms a cuboid?",o:["6 rectangles","6 triangles","4 squares","5 squares"],a:0},
{t:"count",type:"enterval",q:"Vertices in 2 cubes?",a:16},
{t:"tap",type:"tapall",q:"Tap solids whose top view is a circle.",pool:["Cylinder","Cone","Cube","Cuboid"],correct:["Cylinder","Cone"]},
{t:"fill",type:"fillin",q:"Opposite faces of a cuboid are ___ in size.",blanks:["equal"]}
],
[
{t:"word",q:"A factory makes 5 dice. How many faces are painted in all?",o:["30","25","20","35"],a:0},
{t:"reason",q:"How many small cubes form a 2×2×2 cube?",o:["8","6","4","12"],a:0},
{t:"missing",q:"A cube has side 3cm. Total length of all edges?",o:["36cm","12cm","24cm","30cm"],a:0},
{t:"compare",q:"Which solid CANNOT roll?",o:["Cube","Sphere","Cylinder","Cone"],a:0},
{t:"tf",type:"tf",q:"A 3×3×3 cube is made of 27 small cubes.",a:true},
{t:"tf",type:"tf",q:"A cuboid has 4 rectangular faces and 2 square faces always.",a:false},
{t:"identify",q:"Front view of a cylinder lying down?",o:["Rectangle","Circle","Triangle","Square"],a:0},
{t:"count",type:"enterval",q:"Small cubes in a 3×3×3 big cube?",a:27},
{t:"tap",type:"tapall",q:"Tap views possible for a cube.",pool:["Square top","Square front","Circle top","Triangle side"],correct:["Square top","Square front"]},
{t:"fill",type:"fillin",q:"Total edges of a cube = ___.",blanks:["12"]}
]
]
},
10: { title:'Tenths and Hundredths',
beginner:[
[
{t:"tenth",q:"What is 1/10 as a decimal?",o:["0.1","0.01","1.0","10"],a:0},
{t:"tenth",q:"What is 5/10 as a decimal?",o:["0.5","0.05","5.0","50"],a:0},
{t:"hundredth",q:"What is 1/100 as a decimal?",o:["0.01","0.1","1.0","100"],a:0},
{t:"convert",q:"What is 1/2 as a decimal?",o:["0.5","0.2","0.25","0.05"],a:0},
{t:"tf",type:"tf",q:"0.1 is greater than 0.01.",a:true},
{t:"tf",type:"tf",q:"0.5 = 5/10.",a:true},
{t:"read",q:"How do you read 0.7?",o:["Seven tenths","Seven hundredths","Seventy","Zero point seven hundred"],a:0},
{t:"value",type:"enterval",q:"How many tenths in 1 whole?",a:10},
{t:"add",type:"fillin",q:"0.2 + 0.3 = ___",blanks:["0.5"]},
{t:"tap",type:"tapall",q:"Tap all decimals less than 1.",pool:["0.5","0.9","1.5","2.0"],correct:["0.5","0.9"]}
],
[
{t:"convert",q:"What is 1/4 as a decimal?",o:["0.25","0.5","0.4","0.14"],a:0},
{t:"tenth",q:"3 tenths is written as ___.",o:["0.3","0.03","3.0","30"],a:0},
{t:"hundredth",q:"7/100 as decimal?",o:["0.07","0.7","7.0","0.007"],a:0},
{t:"compare",q:"Which is bigger: 0.6 or 0.06?",o:["0.6","0.06","Same","Cannot say"],a:0},
{t:"tf",type:"tf",q:"0.25 is the same as 1/4.",a:true},
{t:"tf",type:"tf",q:"0.7 has 7 in the tenths place.",a:true},
{t:"value",q:"In 0.45, the digit 4 is in the ___ place.",o:["Tenths","Hundredths","Ones","Tens"],a:0},
{t:"add",type:"enterval",q:"How many hundredths in one tenth?",a:10},
{t:"sub",type:"fillin",q:"0.9 - 0.4 = ___",blanks:["0.5"]},
{t:"tap",type:"tapall",q:"Tap decimals equal to 1/2.",pool:["0.5","0.50","0.05","0.25"],correct:["0.5","0.50"]}
],
[
{t:"convert",q:"3/4 as a decimal?",o:["0.75","0.5","0.34","0.25"],a:0},
{t:"tenth",q:"9 tenths = ?",o:["0.9","0.09","9.0","90"],a:0},
{t:"hundredth",q:"25/100 = ?",o:["0.25","0.025","2.5","25"],a:0},
{t:"compare",q:"Which is greatest?",o:["0.8","0.5","0.3","0.1"],a:0},
{t:"tf",type:"tf",q:"0.25 is one-fourth.",a:true},
{t:"tf",type:"tf",q:"0.10 = 0.1.",a:true},
{t:"value",q:"In 0.36, the 6 is in the ___ place.",o:["Hundredths","Tenths","Ones","Tens"],a:0},
{t:"add",type:"enterval",q:"How many tenths in 2 wholes?",a:20},
{t:"add",type:"fillin",q:"0.4 + 0.5 = ___",blanks:["0.9"]},
{t:"tap",type:"tapall",q:"Tap decimals greater than 0.5.",pool:["0.7","0.8","0.3","0.2"],correct:["0.7","0.8"]}
],
[
{t:"money",q:"50 paise = Rs ___",o:["0.50","0.05","5.00","0.005"],a:0},
{t:"money",q:"25 paise as rupees?",o:["₹0.25","₹0.025","₹2.50","₹25.00"],a:0},
{t:"convert",q:"2/10 = ?",o:["0.2","0.02","2.0","20"],a:0},
{t:"convert",q:"50/100 = ?",o:["0.5","0.05","5.0","50"],a:0},
{t:"tf",type:"tf",q:"75 paise = Rs 0.75.",a:true},
{t:"tf",type:"tf",q:"0.5 + 0.5 = 1.",a:true},
{t:"value",q:"In 2.7, the digit after the dot is in the ___ place.",o:["Tenths","Hundredths","Ones","Tens"],a:0},
{t:"add",type:"enterval",q:"How many paise make 1 rupee?",a:100},
{t:"sub",type:"fillin",q:"1.0 - 0.3 = ___",blanks:["0.7"]},
{t:"tap",type:"tapall",q:"Tap decimals equal to 1/4.",pool:["0.25","0.250","0.5","0.75"],correct:["0.25","0.250"]}
],
[
{t:"length",q:"5 cm in metres = ?",o:["0.05","0.5","5.0","50"],a:0},
{t:"length",q:"50 cm = ?m",o:["0.5","0.05","5.0","500"],a:0},
{t:"convert",q:"4/10 = ?",o:["0.4","0.04","4.0","40"],a:0},
{t:"convert",q:"75/100 = ?",o:["0.75","0.075","7.5","75"],a:0},
{t:"tf",type:"tf",q:"100 cm = 1 m = 1.0 m.",a:true},
{t:"tf",type:"tf",q:"0.6 > 0.4.",a:true},
{t:"value",q:"0.07 has 7 in the ___ place.",o:["Hundredths","Tenths","Ones","Tens"],a:0},
{t:"value",type:"enterval",q:"How many hundredths in 1 whole?",a:100},
{t:"add",type:"fillin",q:"0.6 + 0.2 = ___",blanks:["0.8"]},
{t:"tap",type:"tapall",q:"Tap decimals less than 0.5.",pool:["0.2","0.3","0.7","0.9"],correct:["0.2","0.3"]}
]
],
pro:[
[
{t:"word",q:"Riya has Rs 0.50. She gets Rs 0.25 more. How much now?",o:["Rs 0.75","Rs 0.25","Rs 0.55","Rs 1.00"],a:0},
{t:"word",q:"A ribbon is 0.7 m long. Anu cuts 0.3 m. How much left?",o:["0.4 m","1.0 m","0.5 m","0.10 m"],a:0},
{t:"compare",q:"Order from smallest: 0.3, 0.03, 0.33, 0.13.",o:["0.03 < 0.13 < 0.3 < 0.33","0.3 < 0.03 < 0.13 < 0.33","0.33 < 0.3 < 0.13 < 0.03","0.13 < 0.03 < 0.3 < 0.33"],a:0},
{t:"missing",q:"___ + 0.4 = 1.0",o:["0.6","0.4","0.5","0.7"],a:0},
{t:"tf",type:"tf",q:"0.50 + 0.50 = 1.00.",a:true},
{t:"tf",type:"tf",q:"0.7 is the same as 7/10.",a:true},
{t:"convert",q:"3/4 + 1/4 as decimal?",o:["1.0","0.75","0.5","0.34"],a:0},
{t:"add",type:"enterval",q:"How many tenths in 5 wholes?",a:50},
{t:"sub",type:"fillin",q:"0.8 - 0.5 = ___",blanks:["0.3"]},
{t:"tap",type:"tapall",q:"Tap decimals between 0 and 1.",pool:["0.4","0.9","1.5","2.0"],correct:["0.4","0.9"]}
],
[
{t:"word",q:"Karan walks 0.6 km then 0.3 km. Total walked?",o:["0.9 km","0.3 km","1.0 km","0.06 km"],a:0},
{t:"word",q:"A jug holds 1.0 L. 0.4 L is poured out. How much left?",o:["0.6 L","0.4 L","1.4 L","0.5 L"],a:0},
{t:"compare",q:"Which is bigger: 0.45 or 0.5?",o:["0.5","0.45","Same","Cannot say"],a:0},
{t:"missing",q:"0.7 - ___ = 0.3",o:["0.4","0.3","0.7","1.0"],a:0},
{t:"tf",type:"tf",q:"0.5 = 50/100.",a:true},
{t:"tf",type:"tf",q:"0.3 + 0.7 = 1.0.",a:true},
{t:"convert",q:"1/2 as a decimal in hundredths?",o:["0.50","0.5","0.05","0.25"],a:0},
{t:"add",type:"enterval",q:"100 paise + 50 paise = how many paise?",a:150},
{t:"sub",type:"fillin",q:"1.0 - 0.5 = ___",blanks:["0.5"]},
{t:"tap",type:"tapall",q:"Tap decimals equal to 0.5.",pool:["0.5","0.50","5/10","0.05"],correct:["0.5","0.50","5/10"]}
],
[
{t:"word",q:"Meena buys pencil for Rs 0.75 and eraser for Rs 0.25. Total?",o:["Rs 1.00","Rs 0.50","Rs 0.75","Rs 1.50"],a:0},
{t:"word",q:"A cloth piece is 2.5 m. 1.2 m is used. How much left?",o:["1.3 m","1.5 m","2.0 m","0.7 m"],a:0},
{t:"compare",q:"Order largest first: 0.9, 0.99, 0.09, 0.19.",o:["0.99 > 0.9 > 0.19 > 0.09","0.9 > 0.99 > 0.19 > 0.09","0.09 > 0.19 > 0.9 > 0.99","0.19 > 0.09 > 0.9 > 0.99"],a:0},
{t:"missing",q:"0.6 + ___ = 1.5",o:["0.9","0.6","0.5","1.0"],a:0},
{t:"tf",type:"tf",q:"1/4 + 1/4 = 0.5.",a:true},
{t:"tf",type:"tf",q:"0.05 > 0.5.",a:false},
{t:"convert",q:"What is 1/5 as a decimal?",o:["0.2","0.5","0.15","0.25"],a:0},
{t:"add",type:"enterval",q:"How many tenths in 3.5?",a:35},
{t:"sub",type:"fillin",q:"2.0 - 1.4 = ___",blanks:["0.6"]},
{t:"tap",type:"tapall",q:"Tap fractions equal to 0.25.",pool:["1/4","25/100","0.25","1/2"],correct:["1/4","25/100","0.25"]}
],
[
{t:"word",q:"Sneha runs 0.8 km daily. How far in 2 days?",o:["1.6 km","0.8 km","2.0 km","1.0 km"],a:0},
{t:"word",q:"A tank has 3.5 L. 1.5 L is used. How much remains?",o:["2.0 L","1.5 L","5.0 L","2.5 L"],a:0},
{t:"compare",q:"Smallest of 0.6, 0.06, 0.66, 0.16?",o:["0.06","0.16","0.6","0.66"],a:0},
{t:"missing",q:"___ - 0.3 = 0.5",o:["0.8","0.2","0.5","1.0"],a:0},
{t:"tf",type:"tf",q:"0.75 = 3/4.",a:true},
{t:"tf",type:"tf",q:"0.25 + 0.25 = 0.50.",a:true},
{t:"convert",q:"2/4 as decimal?",o:["0.5","0.25","0.4","0.24"],a:0},
{t:"add",type:"enterval",q:"50 paise + 50 paise = how many rupees?",a:1},
{t:"sub",type:"fillin",q:"0.7 - 0.4 = ___",blanks:["0.3"]},
{t:"tap",type:"tapall",q:"Tap decimals greater than 0.5.",pool:["0.6","0.8","0.4","0.3"],correct:["0.6","0.8"]}
],
[
{t:"word",q:"3 students each get 0.2 L milk. Total milk?",o:["0.6 L","0.2 L","0.5 L","1.0 L"],a:0},
{t:"word",q:"Rohit has Rs 5.00. He spends Rs 2.50. How much left?",o:["Rs 2.50","Rs 3.50","Rs 7.50","Rs 1.50"],a:0},
{t:"compare",q:"Which is largest?",o:["0.99","0.9","0.09","0.89"],a:0},
{t:"missing",q:"0.5 + 0.5 + ___ = 1.5",o:["0.5","1.0","0.25","0.75"],a:0},
{t:"tf",type:"tf",q:"75 paise + 25 paise = Re 1.",a:true},
{t:"tf",type:"tf",q:"0.4 = 4/100.",a:false},
{t:"convert",q:"What is 6/10 as a decimal?",o:["0.6","0.06","6.0","60"],a:0},
{t:"add",type:"enterval",q:"How many hundredths in 0.5?",a:50},
{t:"sub",type:"fillin",q:"1.5 - 0.5 = ___",blanks:["1.0"]},
{t:"tap",type:"tapall",q:"Tap pairs that add to 1.",pool:["0.5 and 0.5","0.3 and 0.7","0.2 and 0.7","0.4 and 0.5"],correct:["0.5 and 0.5","0.3 and 0.7"]}
]
]
},
11: { title:'Area and Its Boundary',
beginner:[
[
{t:"area",q:"Area of a square of side 3 cm?",o:["9 cm²","6 cm²","12 cm²","3 cm²"],a:0},
{t:"area",q:"Area of a rectangle 4 cm × 5 cm?",o:["20 cm²","9 cm²","18 cm²","12 cm²"],a:0},
{t:"perimeter",q:"Perimeter of a square of side 5 cm?",o:["20 cm","10 cm","15 cm","25 cm"],a:0},
{t:"perimeter",q:"Perimeter of a rectangle 3 cm × 4 cm?",o:["14 cm","12 cm","7 cm","10 cm"],a:0},
{t:"tf",type:"tf",q:"Perimeter is the boundary of a shape.",a:true},
{t:"tf",type:"tf",q:"Area is measured in square units.",a:true},
{t:"unit",q:"Which is the unit of area?",o:["cm²","cm","kg","L"],a:0},
{t:"count",type:"enterval",q:"Area of a square of side 2 cm in cm²?",a:4},
{t:"add",type:"fillin",q:"Perimeter of square = 4 × ___.",blanks:["side"]},
{t:"tap",type:"tapall",q:"Tap units of area.",pool:["cm²","m²","cm","kg"],correct:["cm²","m²"]}
],
[
{t:"area",q:"Area of square side 4 cm?",o:["16 cm²","8 cm²","12 cm²","4 cm²"],a:0},
{t:"area",q:"Area of rectangle 6 × 2?",o:["12","8","10","16"],a:0},
{t:"perimeter",q:"Perimeter of square side 6?",o:["24","12","18","36"],a:0},
{t:"perimeter",q:"Perimeter of rectangle 5 × 3?",o:["16","15","8","10"],a:0},
{t:"tf",type:"tf",q:"Area of rectangle = length × breadth.",a:true},
{t:"tf",type:"tf",q:"Perimeter is measured in cm² or m².",a:false},
{t:"unit",q:"Which is the unit of perimeter?",o:["cm","cm²","m²","kg"],a:0},
{t:"count",type:"enterval",q:"Area of 5×5 square in cm²?",a:25},
{t:"fill",type:"fillin",q:"Area of square = side × ___.",blanks:["side"]},
{t:"tap",type:"tapall",q:"Tap units of perimeter.",pool:["cm","m","cm²","kg"],correct:["cm","m"]}
],
[
{t:"area",q:"Area of square side 7?",o:["49","14","28","56"],a:0},
{t:"area",q:"Area of rectangle 8 × 3?",o:["24","11","22","16"],a:0},
{t:"perimeter",q:"Perimeter of square side 10?",o:["40","20","100","30"],a:0},
{t:"perimeter",q:"Perimeter of rectangle 7 × 2?",o:["18","14","9","16"],a:0},
{t:"tf",type:"tf",q:"All squares of side 4 have area 16 sq.units.",a:true},
{t:"tf",type:"tf",q:"Perimeter of rectangle = 2 × (l + b).",a:true},
{t:"compare",q:"Which has larger area: 4×4 square or 3×5 rectangle?",o:["Square","Rectangle","Same","Cannot say"],a:0},
{t:"count",type:"enterval",q:"Perimeter of square side 8?",a:32},
{t:"fill",type:"fillin",q:"Number of unit squares inside is the ___.",blanks:["area"]},
{t:"tap",type:"tapall",q:"Tap shapes whose area can be 12 sq.units.",pool:["3×4 rect","2×6 rect","5×5 sq","1×12 rect"],correct:["3×4 rect","2×6 rect","1×12 rect"]}
],
[
{t:"count",q:"A shape covers 6 unit squares. Area = ?",o:["6 sq.units","3 sq.units","12 sq.units","9 sq.units"],a:0},
{t:"count",q:"A shape covers 10 unit squares. Area = ?",o:["10","5","15","20"],a:0},
{t:"area",q:"Area of square side 9?",o:["81","18","36","27"],a:0},
{t:"perimeter",q:"Perimeter of rectangle 10 × 4?",o:["28","14","40","20"],a:0},
{t:"tf",type:"tf",q:"Two rectangles can have same area but different perimeter.",a:true},
{t:"tf",type:"tf",q:"A square of side 5 has perimeter 20.",a:true},
{t:"compare",q:"A garden 6×4 has area ___ sq.m.",o:["24","10","20","12"],a:0},
{t:"count",type:"enterval",q:"Area of 6×6 square?",a:36},
{t:"fill",type:"fillin",q:"Boundary length of a shape is its ___.",blanks:["perimeter"]},
{t:"tap",type:"tapall",q:"Tap rectangles with area 20 sq.units.",pool:["4×5","2×10","1×20","3×6"],correct:["4×5","2×10","1×20"]}
],
[
{t:"area",q:"A floor 5m × 4m. Area?",o:["20 m²","9 m²","18 m²","25 m²"],a:0},
{t:"perimeter",q:"A field 10m × 6m. Perimeter?",o:["32 m","16 m","60 m","26 m"],a:0},
{t:"area",q:"Area of square side 12?",o:["144","48","24","72"],a:0},
{t:"perimeter",q:"Perimeter of square side 9?",o:["36","18","81","27"],a:0},
{t:"tf",type:"tf",q:"Area of a 1×1 square is 1 sq.unit.",a:true},
{t:"tf",type:"tf",q:"Perimeter is found by adding all sides.",a:true},
{t:"compare",q:"Which has bigger perimeter: 5×5 square or 4×6 rectangle?",o:["Same","Square","Rectangle","Cannot say"],a:0},
{t:"count",type:"enterval",q:"Perimeter of rectangle 6 × 3?",a:18},
{t:"fill",type:"fillin",q:"Area of rectangle = length × ___.",blanks:["breadth"]},
{t:"tap",type:"tapall",q:"Tap shapes with perimeter 12.",pool:["Square side 3","Rectangle 2×4","Rectangle 1×5","Square side 4"],correct:["Square side 3","Rectangle 2×4","Rectangle 1×5"]}
]
],
pro:[
[
{t:"word",q:"A room is 8m × 5m. What is the area of the floor?",o:["40 m²","13 m²","26 m²","45 m²"],a:0},
{t:"word",q:"A rectangular garden is 12m × 7m. Find perimeter.",o:["38 m","19 m","84 m","42 m"],a:0},
{t:"word",q:"A square plot has side 15 m. Area?",o:["225 m²","60 m²","30 m²","100 m²"],a:0},
{t:"missing",q:"Area of rectangle is 24 sq.cm. If length is 6, breadth = ?",o:["4 cm","3 cm","8 cm","2 cm"],a:0},
{t:"tf",type:"tf",q:"A 4×6 rectangle and a 3×8 rectangle have the same area.",a:true},
{t:"tf",type:"tf",q:"Doubling the side of a square doubles its area.",a:false},
{t:"compare",q:"Two rectangles: 5×8 and 4×10. Which has bigger area?",o:["Same","5×8","4×10","Cannot say"],a:0},
{t:"calc",type:"enterval",q:"Area of 7×8 rectangle?",a:56},
{t:"sub",type:"fillin",q:"Area of square side 11 = ___ sq.units.",blanks:["121"]},
{t:"tap",type:"tapall",q:"Tap rectangles with perimeter 14.",pool:["3×4","2×5","1×6","5×5"],correct:["3×4","2×5","1×6"]}
],
[
{t:"word",q:"A floor is 6m × 4m. To tile it, how many 1m×1m tiles are needed?",o:["24","10","20","30"],a:0},
{t:"word",q:"A rectangle has area 36 sq.m and length 9 m. Breadth?",o:["4 m","6 m","9 m","12 m"],a:0},
{t:"word",q:"A square garden has perimeter 36 m. Side?",o:["9 m","6 m","12 m","18 m"],a:0},
{t:"missing",q:"Perimeter of rectangle is 30. Length = 10. Breadth = ?",o:["5","15","20","10"],a:0},
{t:"tf",type:"tf",q:"All squares with same perimeter have same area.",a:true},
{t:"tf",type:"tf",q:"Two shapes with same area must have same perimeter.",a:false},
{t:"compare",q:"4×4 square vs 2×8 rectangle: Same area but different ___.",o:["perimeter","color","shape","size"],a:0},
{t:"calc",type:"enterval",q:"Area of square side 13?",a:169},
{t:"fill",type:"fillin",q:"If side of square is 7, perimeter = ___.",blanks:["28"]},
{t:"tap",type:"tapall",q:"Tap shapes with area 16 sq.units.",pool:["4×4 square","2×8 rectangle","1×16 rectangle","3×5 rectangle"],correct:["4×4 square","2×8 rectangle","1×16 rectangle"]}
],
[
{t:"word",q:"Anu's room is 5m × 4m. She wants to put a border. Length of border?",o:["18 m","20 m","9 m","22 m"],a:0},
{t:"word",q:"A field 20m × 15m needs fencing. How many metres?",o:["70 m","35 m","300 m","60 m"],a:0},
{t:"word",q:"A tile is 2m × 2m. How many tiles fit in a 8m × 4m floor?",o:["8","16","4","12"],a:0},
{t:"missing",q:"Area = 48 sq.cm, breadth = 6. Length = ?",o:["8","6","12","4"],a:0},
{t:"tf",type:"tf",q:"Perimeter of rectangle 7×3 is 20.",a:true},
{t:"tf",type:"tf",q:"A bigger area always means bigger perimeter.",a:false},
{t:"compare",q:"Square side 6 vs Rectangle 4×9. Area larger?",o:["Same","Square","Rectangle","Cannot say"],a:0},
{t:"calc",type:"enterval",q:"Perimeter of rectangle 12 × 5?",a:34},
{t:"fill",type:"fillin",q:"Area = length × breadth = 8 × 5 = ___ sq.units.",blanks:["40"]},
{t:"tap",type:"tapall",q:"Tap rectangles with area 24.",pool:["3×8","4×6","2×12","5×5"],correct:["3×8","4×6","2×12"]}
],
[
{t:"word",q:"A path is 1 m wide around a 5m × 3m garden. Old perimeter?",o:["16 m","8 m","15 m","20 m"],a:0},
{t:"word",q:"A square sheet has area 64 sq.cm. What is its side?",o:["8 cm","16 cm","4 cm","32 cm"],a:0},
{t:"word",q:"Two squares: side 3 and side 4. Total area?",o:["25","12","49","16"],a:0},
{t:"missing",q:"Side × Side = 81. Side = ?",o:["9","8","11","10"],a:0},
{t:"tf",type:"tf",q:"A rectangle with sides 5 and 5 is also a square.",a:true},
{t:"tf",type:"tf",q:"Area of a square of side 10 m is 100 sq.m.",a:true},
{t:"compare",q:"A 6×6 square has perimeter ___, a 4×9 rectangle has perimeter 26.",o:["24","36","12","18"],a:0},
{t:"calc",type:"enterval",q:"Side of a square with perimeter 32?",a:8},
{t:"fill",type:"fillin",q:"Perimeter of rectangle 9 × 6 = ___.",blanks:["30"]},
{t:"tap",type:"tapall",q:"Tap squares (length = breadth).",pool:["5×5","7×7","3×4","6×8"],correct:["5×5","7×7"]}
],
[
{t:"word",q:"Ravi's notebook cover is 25 cm × 20 cm. Area?",o:["500 cm²","45 cm²","90 cm²","250 cm²"],a:0},
{t:"word",q:"A wall 4m × 3m is to be painted. Total area to paint?",o:["12 m²","7 m²","14 m²","9 m²"],a:0},
{t:"word",q:"A rectangle plot needs 50 m of fence. If length is 15 m, breadth is?",o:["10 m","15 m","20 m","25 m"],a:0},
{t:"missing",q:"Side of square with area 49 sq.m?",o:["7 m","6 m","8 m","9 m"],a:0},
{t:"tf",type:"tf",q:"If length doubles and breadth stays same, area doubles.",a:true},
{t:"tf",type:"tf",q:"Perimeter of square side 5 = Area of square side 5.",a:false},
{t:"compare",q:"Which is bigger area: 10×2 or 4×5?",o:["Same","10×2","4×5","Cannot say"],a:0},
{t:"calc",type:"enterval",q:"Area of square side 14?",a:196},
{t:"fill",type:"fillin",q:"Side of square with perimeter 40 = ___.",blanks:["10"]},
{t:"tap",type:"tapall",q:"Tap shapes with perimeter 20.",pool:["Square side 5","Rectangle 4×6","Rectangle 3×7","Rectangle 8×4"],correct:["Square side 5","Rectangle 4×6","Rectangle 3×7"]}
]
]
},
12: { title:'Smart Charts',
beginner:[
[
{t:"bar graph",q:"In a bar graph, what does the height of a bar show?",o:["The value of that item","The colour","The order","The name length"],a:0},
{t:"pictograph",q:"If 1 picture = 5 students, how many students do 4 pictures show?",o:["20","9","15","25"],a:0},
{t:"reading data",q:"Most means:",o:["Highest value","Lowest value","Middle value","Equal value"],a:0},
{t:"reading data",q:"Least means:",o:["Lowest value","Highest value","Total","Average"],a:0},
{t:"pie chart",q:"A pie chart looks like a:",o:["Circle","Square","Line","Triangle"],a:0},
{t:"bar graph",type:"tf",q:"In a bar graph, taller bar means bigger number.",a:true},
{t:"pictograph",type:"tf",q:"In a pictograph, each picture stands for a fixed number.",a:true},
{t:"data",type:"fillin",q:"A graph that uses pictures to show data is called a ___.",blanks:["pictograph"]},
{t:"compare",type:"tapall",q:"Tap all words used to compare values in graphs.",pool:["most","least","more","fewer","red","tall"],correct:["most","least","more","fewer"]},
{t:"pictograph",type:"enterval",q:"If 1 = 10 books, how many books do 6 pictures show?",a:60}
],
[
{t:"bar graph",q:"Class 5 has these students in clubs: Music 20, Art 15, Sports 25. Which club has the most?",o:["Sports","Music","Art","All same"],a:0},
{t:"bar graph",q:"From the same data, which club has the least?",o:["Art","Music","Sports","None"],a:0},
{t:"pictograph",q:"Apples sold: Mon 4 pics, Tue 6 pics. 1 pic = 5 apples. Tuesday sold:",o:["30","20","25","35"],a:0},
{t:"reading",q:"How many more apples on Tuesday than Monday (1 pic = 5)?",o:["10","5","15","20"],a:0},
{t:"pie chart",q:"A pie chart shows parts of a:",o:["Whole","Line","Square","Bar"],a:0},
{t:"bar graph",type:"tf",q:"If two bars are the same height, the values are equal.",a:true},
{t:"pictograph",type:"tf",q:"Half a picture can mean half the value.",a:true},
{t:"reading",type:"fillin",q:"The value that appears the highest on a bar graph is called the ___.",blanks:["most"]},
{t:"data",type:"tapall",q:"Tap all that are types of charts.",pool:["bar graph","pictograph","pie chart","poem","story"],correct:["bar graph","pictograph","pie chart"]},
{t:"pictograph",type:"enterval",q:"5 pictures, each = 4 mangoes. Total mangoes?",a:20}
],
[
{t:"bar graph",q:"Rainfall in mm: Jun 80, Jul 120, Aug 100. Which month had highest rain?",o:["July","June","August","Same"],a:0},
{t:"bar graph",q:"From the same rainfall, June had how many less than July?",o:["40","20","60","30"],a:0},
{t:"pictograph",q:"1 = 10 students. Class A: 3 pics, Class B: 5 pics. Total students?",o:["80","50","30","60"],a:0},
{t:"compare",q:"Which is the smallest: 25, 40, 15, 30?",o:["15","25","30","40"],a:0},
{t:"compare",q:"Which is the largest: 25, 40, 15, 30?",o:["40","30","25","15"],a:0},
{t:"data",type:"tf",q:"A bar graph can be drawn vertically or horizontally.",a:true},
{t:"pictograph",type:"tf",q:"In a pictograph, the key tells what each picture means.",a:true},
{t:"chart",type:"fillin",q:"A circular chart divided into slices is a ___ chart.",blanks:["pie"]},
{t:"data",type:"tapall",q:"Tap all that can be shown on a bar graph.",pool:["marks","rainfall","heights","sounds","smells"],correct:["marks","rainfall","heights"]},
{t:"pictograph",type:"enterval",q:"7 pictures, 1 pic = 2 cars. Total cars?",a:14}
],
[
{t:"reading",q:"In a class survey, favourite fruit: Apple 10, Mango 18, Banana 8. Most loved fruit?",o:["Mango","Apple","Banana","All"],a:0},
{t:"reading",q:"From same survey, how many more love Mango than Banana?",o:["10","8","18","2"],a:0},
{t:"bar graph",q:"Books read: Riya 6, Aman 9, Sita 4. Total books?",o:["19","15","13","20"],a:0},
{t:"pictograph",q:"1 pic = ₹100. Saved: 8 pics. How much saved?",o:["₹800","₹80","₹100","₹880"],a:0},
{t:"pie chart",q:"In a pie of a class, sports slice is biggest. So sports is:",o:["Most popular","Least popular","Equal","Unknown"],a:0},
{t:"data",type:"tf",q:"Graphs make data easier to compare.",a:true},
{t:"pictograph",type:"tf",q:"If 1 picture = 5, then 0 pictures = 5.",a:false},
{t:"data",type:"fillin",q:"The number written next to bars is called the ___.",blanks:["scale"]},
{t:"reading",type:"tapall",q:"Tap all questions a chart can answer.",pool:["which is most","which is least","how many more","what is colour of sky"],correct:["which is most","which is least","how many more"]},
{t:"pictograph",type:"enterval",q:"1 pic = 6 cakes. 9 pictures = how many cakes?",a:54}
],
[
{t:"bar graph",q:"Goals scored: Team A 4, Team B 7, Team C 5. Highest scorer?",o:["Team B","Team A","Team C","Tie"],a:0},
{t:"bar graph",q:"From same data, Team A scored how many fewer than Team B?",o:["3","2","4","1"],a:0},
{t:"pictograph",q:"1 pic = 20 mangoes. Shopkeeper has 4 pics. Mangoes?",o:["80","60","40","100"],a:0},
{t:"compare",q:"Numbers 12, 19, 15, 8. The most is:",o:["19","15","12","8"],a:0},
{t:"compare",q:"Numbers 12, 19, 15, 8. The least is:",o:["8","12","15","19"],a:0},
{t:"data",type:"tf",q:"A bar graph cannot show negative things like loss.",a:false},
{t:"pictograph",type:"tf",q:"Pictographs are easier to read than tables for kids.",a:true},
{t:"chart",type:"fillin",q:"A ___ graph uses rectangular bars to show data.",blanks:["bar"]},
{t:"data",type:"tapall",q:"Tap all parts of a bar graph.",pool:["title","bars","scale","music","colour code"],correct:["title","bars","scale"]},
{t:"pictograph",type:"enterval",q:"1 pic = 3 dolls. 8 pics = how many dolls?",a:24}
]
],
pro:[
[
{t:"bar graph",q:"Marks: Hindi 65, Maths 80, Science 75, English 70. Difference between highest and lowest?",o:["15","10","20","5"],a:0},
{t:"pictograph",q:"1 pic = 12 ice creams. Sold: Mon 3, Tue 5, Wed 4. Total sold in 3 days?",o:["144","120","132","156"],a:0},
{t:"compare",q:"In a graph, bar A = 45 and bar B = 28. A is how many more than B?",o:["17","15","18","13"],a:0},
{t:"two-step",q:"Sales: Jan 200, Feb 350, Mar 250. Average sales for 3 months?",o:["266","250","300","200"],a:0},
{t:"pie chart",q:"In a pie chart of a 100-student class, 25 like cricket. The cricket slice is what fraction?",o:["1/4","1/2","1/3","3/4"],a:0},
{t:"reading",type:"tf",q:"If a bar shows 60 and the scale is 1 unit = 10, the bar is 6 units tall.",a:true},
{t:"pictograph",type:"tf",q:"If 1 pic = 5 and value is 12, you draw 2 pics and 2 small pics.",a:false},
{t:"two-step",type:"fillin",q:"Bars: 30, 45, 25, 50. Sum of largest and smallest is ___.",blanks:["80"]},
{t:"data",type:"tapall",q:"Tap all numbers that are bigger than 40.",pool:["35","42","50","28","60","20"],correct:["42","50","60"]},
{t:"two-step",type:"enterval",q:"Pictograph 1 pic = 8 books. Class A: 5 pics, Class B: 7 pics. Total books?",a:96}
],
[
{t:"bar graph",q:"Saved money (₹): Mon 50, Tue 80, Wed 70, Thu 100. Which day saved most?",o:["Thursday","Wednesday","Monday","Tuesday"],a:0},
{t:"two-step",q:"From same data, total saved in 4 days?",o:["₹300","₹250","₹280","₹320"],a:0},
{t:"compare",q:"Bar X = 90, Bar Y = 55. Y is how many less than X?",o:["35","45","25","30"],a:0},
{t:"pictograph",q:"1 pic = 25 cars. Showroom shows 6 pics. Total cars?",o:["150","125","100","175"],a:0},
{t:"pie chart",q:"A pie chart of fruits: Apple 1/2, Mango 1/4, Banana 1/4. Largest slice is:",o:["Apple","Mango","Banana","Equal"],a:0},
{t:"data",type:"tf",q:"Adding all bar values gives the total.",a:true},
{t:"reading",type:"tf",q:"A scale on a bar graph helps measure each bar.",a:true},
{t:"two-step",type:"fillin",q:"If sales of 3 shops are 120, 180, 150, total sale is ___.",blanks:["450"]},
{t:"pictograph",type:"tapall",q:"1 pic = 10 toys. Tap all values that need exactly 3 pics.",pool:["30","20","40","30","10"],correct:["30","30"]},
{t:"two-step",type:"enterval",q:"Bar P = 75, Q = 95. How much more is Q?",a:20}
],
[
{t:"reading",q:"Class 5 favourite sport: Cricket 24, Football 18, Hockey 12. How many students in all?",o:["54","42","36","48"],a:0},
{t:"compare",q:"From same data, Cricket fans are how many more than Hockey?",o:["12","6","18","24"],a:0},
{t:"pictograph",q:"1 pic = 50 packets. Stock shows 7 pics. Packets in stock?",o:["350","300","400","250"],a:0},
{t:"two-step",q:"Marks of 4 students: 80, 90, 70, 60. Average mark?",o:["75","70","80","85"],a:0},
{t:"pie chart",q:"In a pie chart, half the circle is shaded for English. Then English forms:",o:["1/2","1/4","1/3","1/8"],a:0},
{t:"data",type:"tf",q:"In a pictograph, half a picture means half the value.",a:true},
{t:"data",type:"tf",q:"Two bars of same height always show different numbers.",a:false},
{t:"two-step",type:"fillin",q:"Bars 40, 60, 50. Highest minus lowest = ___.",blanks:["20"]},
{t:"data",type:"tapall",q:"Tap all values shown by 4 pics if 1 pic = 15.",pool:["60","45","60","30","75"],correct:["60","60"]},
{t:"two-step",type:"enterval",q:"1 pic = 9 pencils. 6 pics + 3 pics = how many pencils?",a:81}
],
[
{t:"bar graph",q:"Books donated: Class A 35, B 50, C 25, D 40. Total books donated?",o:["150","140","160","135"],a:0},
{t:"compare",q:"From same data, B donated how many more than C?",o:["25","15","10","30"],a:0},
{t:"pictograph",q:"1 pic = 100 g rice. 8 pics = how many grams?",o:["800","700","900","600"],a:0},
{t:"two-step",q:"Sales (₹): Mon 250, Tue 300, Wed 250. Total weekly sales for these 3 days?",o:["₹800","₹750","₹850","₹700"],a:0},
{t:"pie chart",q:"In a pie of 24 hours: Sleep 8 hr, School 6 hr, Play 4 hr, Other 6 hr. Largest slice?",o:["Sleep","Play","School","Other"],a:0},
{t:"data",type:"tf",q:"You can compare three values quickly using a bar graph.",a:true},
{t:"data",type:"tf",q:"A pie chart shows parts of a whole.",a:true},
{t:"two-step",type:"fillin",q:"If pictograph shows 5 pics for Mon and 8 for Tue with 1 pic = 10, total = ___.",blanks:["130"]},
{t:"data",type:"tapall",q:"Tap all that are 'most' or 'least' words.",pool:["highest","lowest","biggest","smallest","middle"],correct:["highest","lowest","biggest","smallest"]},
{t:"two-step",type:"enterval",q:"Bars 15, 20, 25, 30. Sum of all bars = ?",a:90}
],
[
{t:"bar graph",q:"Goals: Player A 6, B 9, C 4, D 7. Top scorer?",o:["B","A","C","D"],a:0},
{t:"compare",q:"From same data, total goals by all 4?",o:["26","24","28","22"],a:0},
{t:"pictograph",q:"1 pic = ₹500. Saved 5 pics. Money saved?",o:["₹2500","₹2000","₹3000","₹1500"],a:0},
{t:"two-step",q:"Sale of toys: Jan 80, Feb 120, Mar 100. Average per month?",o:["100","120","90","80"],a:0},
{t:"pie chart",q:"Pie shows day of 24 hours: Study 1/4. Study hours?",o:["6","8","12","4"],a:0},
{t:"data",type:"tf",q:"In a bar graph, longer bar always means greater value.",a:true},
{t:"reading",type:"tf",q:"A bar graph cannot have a title.",a:false},
{t:"two-step",type:"fillin",q:"Pictograph: 1 pic = 7 birds, 9 pics = ___ birds.",blanks:["63"]},
{t:"data",type:"tapall",q:"Tap all that can be drawn as bars.",pool:["heights","ages","weights","feelings","dreams"],correct:["heights","ages","weights"]},
{t:"two-step",type:"enterval",q:"4 bars: 12, 18, 20, 30. Difference between largest and smallest?",a:18}
]
]
},
13: { title:'Ways to Multiply and Divide',
beginner:[
[
{t:"multiply",q:"23 × 10 = ?",o:["230","203","320","2300"],a:0},
{t:"multiply",q:"45 × 2 = ?",o:["90","80","85","95"],a:0},
{t:"divide",q:"36 ÷ 6 = ?",o:["6","5","7","8"],a:0},
{t:"divide",q:"100 ÷ 10 = ?",o:["10","1","100","20"],a:0},
{t:"multiply",q:"123 × 1 = ?",o:["123","12","132","1"],a:0},
{t:"multiply",type:"tf",q:"Any number × 0 = 0.",a:true},
{t:"divide",type:"tf",q:"50 ÷ 1 = 50.",a:true},
{t:"multiply",type:"fillin",q:"175 × 4 = ___.",blanks:["700"]},
{t:"facts",type:"tapall",q:"Tap all multiples of 5.",pool:["5","10","12","15","20","17"],correct:["5","10","15","20"]},
{t:"divide",type:"enterval",q:"24 ÷ 4 = ?",a:6}
],
[
{t:"multiply",q:"34 × 10 = ?",o:["340","304","430","34"],a:0},
{t:"multiply",q:"25 × 4 = ?",o:["100","90","80","110"],a:0},
{t:"divide",q:"48 ÷ 8 = ?",o:["6","8","7","5"],a:0},
{t:"divide",q:"63 ÷ 9 = ?",o:["7","8","9","6"],a:0},
{t:"multiply",q:"12 × 5 = ?",o:["60","50","65","55"],a:0},
{t:"multiply",type:"tf",q:"15 × 100 = 1500.",a:true},
{t:"divide",type:"tf",q:"81 ÷ 9 = 8.",a:false},
{t:"divide",type:"fillin",q:"42 ÷ 6 = ___.",blanks:["7"]},
{t:"multiply",type:"tapall",q:"Tap all answers equal to 24.",pool:["6×4","12×2","8×3","5×5","2×11"],correct:["6×4","12×2","8×3"]},
{t:"multiply",type:"enterval",q:"11 × 11 = ?",a:121}
],
[
{t:"multiply",q:"50 × 6 = ?",o:["300","250","350","200"],a:0},
{t:"divide",q:"72 ÷ 8 = ?",o:["9","8","7","6"],a:0},
{t:"multiply",q:"125 × 2 = ?",o:["250","225","275","240"],a:0},
{t:"divide",q:"96 ÷ 12 = ?",o:["8","7","9","6"],a:0},
{t:"multiply",q:"99 × 1 = ?",o:["99","9","100","90"],a:0},
{t:"multiply",type:"tf",q:"40 × 10 = 400.",a:true},
{t:"divide",type:"tf",q:"56 ÷ 7 = 9.",a:false},
{t:"multiply",type:"fillin",q:"100 × 9 = ___.",blanks:["900"]},
{t:"divide",type:"tapall",q:"Tap all numbers divisible by 3.",pool:["9","10","12","14","15"],correct:["9","12","15"]},
{t:"multiply",type:"enterval",q:"15 × 4 = ?",a:60}
],
[
{t:"multiply",q:"13 × 11 = ?",o:["143","133","123","153"],a:0},
{t:"multiply",q:"22 × 5 = ?",o:["110","100","120","115"],a:0},
{t:"divide",q:"60 ÷ 5 = ?",o:["12","10","15","20"],a:0},
{t:"divide",q:"84 ÷ 7 = ?",o:["12","11","14","13"],a:0},
{t:"word",q:"5 boxes have 12 pens each. Total pens?",o:["60","50","55","65"],a:0},
{t:"multiply",type:"tf",q:"125 × 8 = 1000.",a:true},
{t:"divide",type:"tf",q:"45 ÷ 5 = 8.",a:false},
{t:"multiply",type:"fillin",q:"6 × 11 = ___.",blanks:["66"]},
{t:"multiply",type:"tapall",q:"Tap all multiples of 4.",pool:["4","6","8","10","12","16"],correct:["4","8","12","16"]},
{t:"divide",type:"enterval",q:"99 ÷ 9 = ?",a:11}
],
[
{t:"multiply",q:"14 × 5 = ?",o:["70","60","75","65"],a:0},
{t:"divide",q:"144 ÷ 12 = ?",o:["12","11","13","14"],a:0},
{t:"multiply",q:"33 × 3 = ?",o:["99","93","96","102"],a:0},
{t:"divide",q:"100 ÷ 4 = ?",o:["25","20","30","24"],a:0},
{t:"word",q:"A book has 8 chapters of 10 pages each. Total pages?",o:["80","18","70","90"],a:0},
{t:"multiply",type:"tf",q:"Multiplication is repeated addition.",a:true},
{t:"divide",type:"tf",q:"Division is repeated subtraction.",a:true},
{t:"divide",type:"fillin",q:"50 ÷ 5 = ___.",blanks:["10"]},
{t:"multiply",type:"tapall",q:"Tap all that equal 36.",pool:["6×6","9×4","12×3","7×5","18×2"],correct:["6×6","9×4","12×3","18×2"]},
{t:"multiply",type:"enterval",q:"20 × 6 = ?",a:120}
]
],
pro:[
[
{t:"3-digit×2-digit",q:"123 × 12 = ?",o:["1476","1376","1486","1276"],a:0},
{t:"3-digit×2-digit",q:"245 × 11 = ?",o:["2695","2595","2795","2685"],a:0},
{t:"long division",q:"896 ÷ 8 = ?",o:["112","102","122","132"],a:0},
{t:"remainder",q:"45 ÷ 6 gives remainder?",o:["3","2","4","5"],a:0},
{t:"word",q:"A school orders 156 books for 12 classes equally. Books per class?",o:["13","14","12","15"],a:0},
{t:"multiply",type:"tf",q:"352 × 10 = 3520.",a:true},
{t:"divide",type:"tf",q:"In 23 ÷ 5, the quotient is 4 and remainder is 3.",a:true},
{t:"3-digit×2-digit",type:"fillin",q:"100 × 25 = ___.",blanks:["2500"]},
{t:"divide",type:"tapall",q:"Tap all numbers exactly divisible by 7.",pool:["14","21","25","28","30","42"],correct:["14","21","28","42"]},
{t:"3-digit×2-digit",type:"enterval",q:"125 × 8 = ?",a:1000}
],
[
{t:"3-digit×2-digit",q:"234 × 21 = ?",o:["4914","4814","4924","5014"],a:0},
{t:"3-digit×2-digit",q:"108 × 25 = ?",o:["2700","2600","2800","2500"],a:0},
{t:"long division",q:"672 ÷ 6 = ?",o:["112","102","122","132"],a:0},
{t:"remainder",q:"100 ÷ 7 gives remainder?",o:["2","3","1","4"],a:0},
{t:"word",q:"A truck carries 250 bricks per trip. In 12 trips, how many bricks?",o:["3000","2500","3500","2750"],a:0},
{t:"multiply",type:"tf",q:"199 × 1 = 199.",a:true},
{t:"divide",type:"tf",q:"144 ÷ 12 = 11.",a:false},
{t:"3-digit×2-digit",type:"fillin",q:"150 × 4 = ___.",blanks:["600"]},
{t:"divide",type:"tapall",q:"Tap all numbers divisible by 5.",pool:["10","12","15","20","23","30"],correct:["10","15","20","30"]},
{t:"3-digit×2-digit",type:"enterval",q:"112 × 11 = ?",a:1232}
],
[
{t:"3-digit×2-digit",q:"302 × 13 = ?",o:["3926","3826","3936","3916"],a:0},
{t:"long division",q:"1250 ÷ 5 = ?",o:["250","240","260","225"],a:0},
{t:"remainder",q:"75 ÷ 8 gives remainder?",o:["3","2","4","5"],a:0},
{t:"word",q:"A box has 144 chocolates. 9 boxes have how many chocolates?",o:["1296","1196","1396","1500"],a:0},
{t:"word",q:"₹560 is shared equally among 7 friends. Each friend gets?",o:["₹80","₹70","₹90","₹100"],a:0},
{t:"multiply",type:"tf",q:"500 × 4 = 2000.",a:true},
{t:"divide",type:"tf",q:"81 ÷ 9 = 9 with remainder 0.",a:true},
{t:"3-digit×2-digit",type:"fillin",q:"125 × 12 = ___.",blanks:["1500"]},
{t:"divide",type:"tapall",q:"Tap all that give remainder 0 when divided by 4.",pool:["8","10","12","14","16","20"],correct:["8","12","16","20"]},
{t:"long division",type:"enterval",q:"840 ÷ 7 = ?",a:120}
],
[
{t:"3-digit×2-digit",q:"175 × 16 = ?",o:["2800","2700","2900","2750"],a:0},
{t:"long division",q:"945 ÷ 9 = ?",o:["105","115","95","125"],a:0},
{t:"remainder",q:"50 ÷ 9 gives remainder?",o:["5","4","6","3"],a:0},
{t:"word",q:"A shopkeeper sells 24 apples per kg. He has 12 kg. Total apples?",o:["288","268","298","278"],a:0},
{t:"word",q:"₹720 is divided equally among 8 children. Each gets?",o:["₹90","₹80","₹100","₹70"],a:0},
{t:"multiply",type:"tf",q:"400 × 25 = 10000.",a:true},
{t:"divide",type:"tf",q:"123 ÷ 1 = 123.",a:true},
{t:"3-digit×2-digit",type:"fillin",q:"99 × 9 = ___.",blanks:["891"]},
{t:"divide",type:"tapall",q:"Tap all multiples of 11.",pool:["11","22","30","33","44","50"],correct:["11","22","33","44"]},
{t:"long division",type:"enterval",q:"864 ÷ 8 = ?",a:108}
],
[
{t:"3-digit×2-digit",q:"215 × 14 = ?",o:["3010","2910","3110","3000"],a:0},
{t:"long division",q:"1296 ÷ 12 = ?",o:["108","118","98","128"],a:0},
{t:"remainder",q:"85 ÷ 12 gives remainder?",o:["1","2","3","0"],a:0},
{t:"word",q:"A bus travels 180 km in 4 hours. Average speed per hour?",o:["45","40","50","55"],a:0},
{t:"word",q:"A factory makes 250 toys daily. How many in 16 days?",o:["4000","3500","4500","3800"],a:0},
{t:"multiply",type:"tf",q:"99 × 99 = 9801.",a:true},
{t:"divide",type:"tf",q:"63 ÷ 7 = 9 remainder 0.",a:true},
{t:"3-digit×2-digit",type:"fillin",q:"250 × 4 = ___.",blanks:["1000"]},
{t:"divide",type:"tapall",q:"Tap all that divide 24 with no remainder.",pool:["2","3","5","4","6","7"],correct:["2","3","4","6"]},
{t:"long division",type:"enterval",q:"600 ÷ 5 = ?",a:120}
]
]
},
14: { title:'How Big? How Heavy?',
beginner:[
[
{t:"volume",q:"Volume is measured in:",o:["cubic units","square units","line units","flat units"],a:0},
{t:"unit cubes",q:"A box has 8 unit cubes. Volume is:",o:["8 cm³","8 cm","8 cm²","8 g"],a:0},
{t:"weight",q:"1 kg = ___ g.",o:["1000","100","10","10000"],a:0},
{t:"weight",q:"Which is heavier: 1 kg or 500 g?",o:["1 kg","500 g","Equal","Cannot say"],a:0},
{t:"volume",q:"Volume of a cube of side 1 cm is:",o:["1 cm³","1 cm","1 cm²","1 g"],a:0},
{t:"weight",type:"tf",q:"2 kg = 2000 g.",a:true},
{t:"volume",type:"tf",q:"Volume tells how much space a thing takes.",a:true},
{t:"weight",type:"fillin",q:"500 g + 500 g = ___ kg.",blanks:["1"]},
{t:"unit cubes",type:"tapall",q:"Tap all units of volume.",pool:["cm³","m³","cm","g","l"],correct:["cm³","m³","l"]},
{t:"unit cubes",type:"enterval",q:"How many unit cubes make a 2×2×2 cube?",a:8}
],
[
{t:"unit cubes",q:"3 × 2 × 1 box holds how many unit cubes?",o:["6","5","8","9"],a:0},
{t:"weight",q:"3 kg = ___ g.",o:["3000","300","30","30000"],a:0},
{t:"weight",q:"2500 g = ___ kg ___ g.",o:["2 kg 500 g","25 kg","2 kg 50 g","250 g"],a:0},
{t:"volume",q:"A cube of side 2 cm has volume:",o:["8 cm³","4 cm³","6 cm³","12 cm³"],a:0},
{t:"weight",q:"Which is lighter: 750 g or 1 kg?",o:["750 g","1 kg","Equal","Cannot say"],a:0},
{t:"weight",type:"tf",q:"1500 g = 1 kg 500 g.",a:true},
{t:"volume",type:"tf",q:"Volume of cuboid = length × width × height.",a:true},
{t:"weight",type:"fillin",q:"4 kg = ___ g.",blanks:["4000"]},
{t:"unit cubes",type:"tapall",q:"Tap all that measure weight.",pool:["g","kg","mg","cm","l"],correct:["g","kg","mg"]},
{t:"unit cubes",type:"enterval",q:"How many unit cubes in a 3×2×2 box?",a:12}
],
[
{t:"weight",q:"Convert 5 kg to g:",o:["5000","500","50","50000"],a:0},
{t:"weight",q:"Convert 2000 g to kg:",o:["2","20","200","0.2"],a:0},
{t:"unit cubes",q:"A box 4 × 3 × 2 holds:",o:["24","20","18","30"],a:0},
{t:"volume",q:"Cube of side 3 cm has volume:",o:["27 cm³","9 cm³","18 cm³","36 cm³"],a:0},
{t:"weight",q:"3 packets of 250 g each weigh:",o:["750 g","250 g","500 g","1 kg"],a:0},
{t:"weight",type:"tf",q:"Half a kg = 500 g.",a:true},
{t:"unit cubes",type:"tf",q:"A bigger box holds more unit cubes.",a:true},
{t:"weight",type:"fillin",q:"2 kg + 500 g = ___ g.",blanks:["2500"]},
{t:"weight",type:"tapall",q:"Tap all heavier than 500 g.",pool:["1 kg","250 g","2 kg","100 g","750 g"],correct:["1 kg","2 kg","750 g"]},
{t:"unit cubes",type:"enterval",q:"How many unit cubes fit in a 5 × 1 × 1 row?",a:5}
],
[
{t:"unit cubes",q:"How many cubes in a 2 × 3 × 4 box?",o:["24","18","20","12"],a:0},
{t:"weight",q:"How many g in 6 kg?",o:["6000","600","60","60000"],a:0},
{t:"weight",q:"3500 g = ___.",o:["3 kg 500 g","35 kg","3 kg 50 g","350 g"],a:0},
{t:"volume",q:"What is volume of 4 cm cube?",o:["64 cm³","16 cm³","12 cm³","48 cm³"],a:0},
{t:"weight",q:"Which is heaviest: 1 kg, 500 g, 1500 g?",o:["1500 g","1 kg","500 g","All equal"],a:0},
{t:"weight",type:"tf",q:"100 g + 900 g = 1 kg.",a:true},
{t:"volume",type:"tf",q:"cm³ is read as 'cubic centimetre'.",a:true},
{t:"unit cubes",type:"fillin",q:"A 5 × 5 × 5 cube has ___ unit cubes.",blanks:["125"]},
{t:"weight",type:"tapall",q:"Tap all equal to 1 kg.",pool:["1000 g","500 g","100 g","1 kg","2 × 500 g"],correct:["1000 g","1 kg","2 × 500 g"]},
{t:"weight",type:"enterval",q:"How many g in 7 kg?",a:7000}
],
[
{t:"unit cubes",q:"A cuboid 6 × 2 × 1 holds:",o:["12","10","14","8"],a:0},
{t:"volume",q:"Volume of cube of side 5 cm:",o:["125 cm³","25 cm³","75 cm³","100 cm³"],a:0},
{t:"weight",q:"4500 g = ___.",o:["4 kg 500 g","45 kg","4 kg 50 g","450 g"],a:0},
{t:"weight",q:"How many 250 g packets make 1 kg?",o:["4","2","3","5"],a:0},
{t:"weight",q:"A bag has 2 kg rice. In grams, that is:",o:["2000","200","20","20000"],a:0},
{t:"weight",type:"tf",q:"1/4 kg = 250 g.",a:true},
{t:"volume",type:"tf",q:"A box and a cuboid have different shapes.",a:false},
{t:"unit cubes",type:"fillin",q:"Volume of a 1 cm side cube = ___ cm³.",blanks:["1"]},
{t:"weight",type:"tapall",q:"Tap all that equal 2 kg.",pool:["2000 g","2 kg","1500 g","4 × 500 g","1000 g"],correct:["2000 g","2 kg","4 × 500 g"]},
{t:"unit cubes",type:"enterval",q:"How many unit cubes in a 4 × 4 × 1 layer?",a:16}
]
],
pro:[
[
{t:"volume",q:"Volume of a cuboid 5 cm × 4 cm × 3 cm:",o:["60 cm³","30 cm³","12 cm³","45 cm³"],a:0},
{t:"weight",q:"3 kg 250 g + 1 kg 750 g = ?",o:["5 kg","4 kg 500 g","4 kg","5 kg 500 g"],a:0},
{t:"word",q:"A bag holds 5 kg rice. 7 such bags hold:",o:["35 kg","30 kg","40 kg","25 kg"],a:0},
{t:"weight",q:"6500 g = ___.",o:["6 kg 500 g","65 kg","6 kg 50 g","650 g"],a:0},
{t:"unit cubes",q:"How many 1 cm cubes fill a 3 × 3 × 3 box?",o:["27","9","18","36"],a:0},
{t:"weight",type:"tf",q:"5 kg − 2 kg 500 g = 2 kg 500 g.",a:true},
{t:"volume",type:"tf",q:"A cube and a cuboid both have 6 faces.",a:true},
{t:"weight",type:"fillin",q:"1 kg − 250 g = ___ g.",blanks:["750"]},
{t:"weight",type:"tapall",q:"Tap all equal to 1500 g.",pool:["1.5 kg","1 kg 500 g","3 × 500 g","1 kg 50 g","2 kg"],correct:["1.5 kg","1 kg 500 g","3 × 500 g"]},
{t:"volume",type:"enterval",q:"Volume of cube side 6 cm in cm³?",a:216}
],
[
{t:"volume",q:"Volume of cuboid 8 × 5 × 2 cm:",o:["80 cm³","40 cm³","30 cm³","100 cm³"],a:0},
{t:"weight",q:"Sum of 2 kg 400 g and 1 kg 600 g:",o:["4 kg","3 kg 500 g","4 kg 100 g","3 kg"],a:0},
{t:"word",q:"A box has 250 g of biscuits. 8 such boxes weigh:",o:["2 kg","1 kg","3 kg","2 kg 500 g"],a:0},
{t:"weight",q:"5 kg − 1 kg 200 g = ?",o:["3 kg 800 g","4 kg 200 g","3 kg 200 g","4 kg 800 g"],a:0},
{t:"unit cubes",q:"Cuboid of 6 × 4 × 5 cm has volume:",o:["120 cm³","100 cm³","140 cm³","90 cm³"],a:0},
{t:"weight",type:"tf",q:"7500 g = 7.5 kg.",a:true},
{t:"volume",type:"tf",q:"Doubling a cube's side doubles its volume.",a:false},
{t:"weight",type:"fillin",q:"3 kg = ___ g.",blanks:["3000"]},
{t:"volume",type:"tapall",q:"Tap all volumes greater than 50 cm³.",pool:["64 cm³","27 cm³","100 cm³","8 cm³","125 cm³"],correct:["64 cm³","100 cm³","125 cm³"]},
{t:"volume",type:"enterval",q:"Cuboid 10 × 4 × 2 has volume in cm³?",a:80}
],
[
{t:"word",q:"A man buys 1 kg 500 g apples and 750 g grapes. Total weight in g?",o:["2250","2150","2350","2050"],a:0},
{t:"word",q:"Each brick weighs 2 kg. Weight of 12 bricks?",o:["24 kg","20 kg","26 kg","22 kg"],a:0},
{t:"volume",q:"A tank holds 1000 cm³ water. A cube of side 10 cm holds:",o:["1000 cm³","100 cm³","10000 cm³","500 cm³"],a:0},
{t:"weight",q:"5 packets of 200 g each weigh:",o:["1 kg","500 g","2 kg","1 kg 500 g"],a:0},
{t:"unit cubes",q:"How many 1 cm cubes form a 4 × 5 × 3 box?",o:["60","45","75","50"],a:0},
{t:"weight",type:"tf",q:"4 kg 250 g = 4250 g.",a:true},
{t:"volume",type:"tf",q:"Volume of a flat sheet is zero (no thickness).",a:true},
{t:"weight",type:"fillin",q:"2 kg 500 g − 1 kg 250 g = ___ g.",blanks:["1250"]},
{t:"weight",type:"tapall",q:"Tap all heavier than 1 kg.",pool:["1500 g","800 g","2 kg","500 g","3 kg"],correct:["1500 g","2 kg","3 kg"]},
{t:"volume",type:"enterval",q:"Volume of cube side 7 cm in cm³?",a:343}
],
[
{t:"word",q:"Mother bought 3 kg sugar and 2 kg 500 g rice. Total weight?",o:["5 kg 500 g","5 kg","6 kg","4 kg 500 g"],a:0},
{t:"word",q:"A box of mangoes weighs 8 kg. 5 boxes weigh:",o:["40 kg","35 kg","45 kg","30 kg"],a:0},
{t:"volume",q:"Volume of cuboid 12 × 5 × 2 cm:",o:["120 cm³","100 cm³","60 cm³","140 cm³"],a:0},
{t:"weight",q:"Convert 9 kg 50 g to g:",o:["9050","950","9500","9005"],a:0},
{t:"unit cubes",q:"A box made of 8 small cubes (each 1 cm side) is a:",o:["2 cm cube","4 cm cube","8 cm cube","1 cm cube"],a:0},
{t:"weight",type:"tf",q:"1 kg of cotton and 1 kg of iron weigh same.",a:true},
{t:"volume",type:"tf",q:"A 1 m cube has volume 1 m³.",a:true},
{t:"weight",type:"fillin",q:"6 kg − 2 kg 750 g = ___ g.",blanks:["3250"]},
{t:"weight",type:"tapall",q:"Tap all that equal 500 g.",pool:["1/2 kg","0.5 kg","250 g","500 g","2 × 250 g"],correct:["1/2 kg","0.5 kg","500 g","2 × 250 g"]},
{t:"volume",type:"enterval",q:"Volume of cuboid 9 × 3 × 2 cm in cm³?",a:54}
],
[
{t:"word",q:"A bag of cement weighs 50 kg. 8 bags weigh:",o:["400 kg","350 kg","450 kg","300 kg"],a:0},
{t:"word",q:"Riya bought 1 kg 250 g potatoes and 750 g onions. Total in g?",o:["2000","1500","2500","1750"],a:0},
{t:"volume",q:"A cube of side 8 cm has volume:",o:["512 cm³","64 cm³","256 cm³","128 cm³"],a:0},
{t:"weight",q:"7 kg 500 g + 2 kg 500 g = ?",o:["10 kg","9 kg 500 g","9 kg","10 kg 500 g"],a:0},
{t:"unit cubes",q:"How many unit cubes in a 6 × 2 × 3 cuboid?",o:["36","30","42","24"],a:0},
{t:"weight",type:"tf",q:"500 g × 4 = 2 kg.",a:true},
{t:"volume",type:"tf",q:"Volume of cuboid = l × b × h.",a:true},
{t:"weight",type:"fillin",q:"4 kg 800 g + 200 g = ___ kg.",blanks:["5"]},
{t:"weight",type:"tapall",q:"Tap all equal to 3 kg.",pool:["3000 g","3 kg","6 × 500 g","2500 g","1500 g + 1500 g"],correct:["3000 g","3 kg","6 × 500 g","1500 g + 1500 g"]},
{t:"volume",type:"enterval",q:"Volume of cube side 9 cm in cm³?",a:729}
]
]
}
},

// ═══════════════════════════════════════════════════════════════
// GRADE 6 · Chapter 1 · Patterns in Mathematics
// ═══════════════════════════════════════════════════════════════
6: { 1: { title:'Patterns in Mathematics',
beginner:[
[
{t:"Arithmetic",type:"enterval",q:"Next: 2, 4, 6, 8, ?",a:10},
{t:"Arithmetic",type:"enterval",q:"Next: 5, 10, 15, 20, ?",a:25},
{t:"Arithmetic",type:"enterval",q:"Next (going down): 10, 9, 8, 7, ?",a:6},
{t:"Arithmetic",type:"fillin",q:"Next in 1, 3, 5, 7, ___.",blanks:["9"]},
{t:"Arithmetic",type:"enterval",q:"Next: 3, 6, 9, 12, ?",a:15},
{t:"Arithmetic",type:"tf",q:"The pattern 100, 90, 80, 70 decreases by 10 each step.",a:true},
{t:"Arithmetic",type:"enterval",q:"Next: 7, 14, 21, 28, ?",a:35},
{t:"Arithmetic",type:"tapall",q:"Tap all sequences that use +5 each step.",pool:["5,10,15,20","2,7,12,17","1,6,11,16","3,6,9,12","10,15,20,25","100,95,90"],correct:["5,10,15,20","2,7,12,17","1,6,11,16","10,15,20,25"]},
{t:"Arithmetic",type:"enterval",q:"Next: 0, 4, 8, 12, ?",a:16},
{t:"Arithmetic",type:"enterval",q:"Next: 11, 22, 33, 44, ?",a:55}
],
[
{t:"Geometric",type:"enterval",q:"×2 pattern: 2, 4, 8, 16, ?",a:32},
{t:"Geometric",type:"enterval",q:"×3 pattern: 1, 3, 9, 27, ?",a:81},
{t:"Geometric",type:"enterval",q:"÷3 pattern: 81, 27, 9, ?",a:3},
{t:"Geometric",type:"fillin",q:"×2 pattern: 3, 6, 12, 24, ___.",blanks:["48"]},
{t:"Geometric",type:"enterval",q:"×10 pattern: 1, 10, 100, ?",a:1000},
{t:"Geometric",type:"tf",q:"Pattern 32, 16, 8, 4 divides by 2 each step.",a:true},
{t:"Geometric",type:"enterval",q:"×5 pattern: 1, 5, 25, ?",a:125},
{t:"Geometric",type:"tapall",q:"Tap all sequences that DOUBLE each step.",pool:["2,4,8","3,6,12","5,10,20","2,4,6","1,3,9","1,2,4"],correct:["2,4,8","3,6,12","5,10,20","1,2,4"]},
{t:"Geometric",type:"enterval",q:"×4 pattern: 1, 4, 16, ?",a:64},
{t:"Geometric",type:"enterval",q:"÷10 pattern: 10000, 1000, 100, ?",a:10}
],
[
{t:"Shape Pat",q:"Next: △ □ △ □ △ ___?",o:["□","△","○","◇"],a:0},
{t:"Shape Pat",type:"tf",q:"In pattern ○ ● ○ ● ○ the next is ●.",a:true},
{t:"Shape Pat",type:"fillin",q:"Next in A B A B A B ___.",blanks:["A"]},
{t:"Shape Pat",q:"Next: A B C A B C ___?",o:["A","B","C","D"],a:0},
{t:"Shape Pat",type:"tf",q:"In a repeating block ABC, after two full blocks the next is A.",a:true},
{t:"Shape Pat",q:"Next: X Y X Y X Y ___?",o:["X","Y","Z","XY"],a:0},
{t:"Shape Pat",type:"fillin",q:"Next: 1 2 3 1 2 3 ___.",blanks:["1"]},
{t:"Shape Pat",type:"tapall",q:"Tap all patterns of period 2 (every 2 items repeat).",pool:["A B A B","X Y X Y","A B C A B C","🔴🔵🔴🔵","1 2 3 4 5","🟥🟨🟥🟨"],correct:["A B A B","X Y X Y","🔴🔵🔴🔵","🟥🟨🟥🟨"]},
{t:"Shape Pat",q:"Next: red, blue, red, blue, red, ___?",o:["blue","red","green","yellow"],a:0},
{t:"Shape Pat",type:"tf",q:"A pattern with block length 3 repeats every 3 items.",a:true}
],
[
{t:"Odd/Even",type:"enterval",q:"Next odd after 5?",a:7},
{t:"Odd/Even",type:"enterval",q:"Next even after 6?",a:8},
{t:"Odd/Even",type:"tf",q:"37 is an odd number.",a:true},
{t:"Odd/Even",type:"tf",q:"124 is an even number.",a:true},
{t:"Odd/Even",type:"enterval",q:"Sum of first 5 odd numbers (1+3+5+7+9)?",a:25},
{t:"Odd/Even",type:"enterval",q:"Sum of first 4 even numbers?",a:20},
{t:"Odd/Even",type:"fillin",q:"Odd + Odd = ___.",blanks:["even"]},
{t:"Odd/Even",type:"tf",q:"Even + Even is always even.",a:true},
{t:"Odd/Even",type:"tapall",q:"Tap all EVEN numbers.",pool:["7","12","25","48","99","100"],correct:["12","48","100"]},
{t:"Odd/Even",type:"tf",q:"99 is an odd number.",a:true}
],
[
{t:"Rules",type:"enterval",q:"Rule +2, start 3. 4th term?",a:9},
{t:"Rules",type:"enterval",q:"Rule ×2, start 1. 5th term?",a:16},
{t:"Rules",type:"enterval",q:"Rule +5, start 0. 3rd term?",a:10},
{t:"Rules",type:"enterval",q:"Rule ×3, start 2. 4th term?",a:54},
{t:"Rules",type:"fillin",q:"Rule +10, start 5. 6th term is ___.",blanks:["55"]},
{t:"Rules",type:"tf",q:"Pattern 1, 4, 7, 10 uses the rule +3.",a:true},
{t:"Rules",q:"Pattern 2, 6, 18, 54 rule?",o:["×3","+4","×2","+6"],a:0},
{t:"Rules",q:"Pattern 100, 90, 80 rule?",o:["−10","÷10","+10","−5"],a:0},
{t:"Rules",type:"tapall",q:"Tap all sequences that use the rule ×2.",pool:["1,2,4,8","3,6,12","5,10,20","2,4,6","1,3,9","10,20,40"],correct:["1,2,4,8","3,6,12","5,10,20","10,20,40"]},
{t:"Rules",type:"tf",q:"Pattern 5, 8, 11, 14 uses the rule +3.",a:true}
]
],
pro:[
[
{t:"Squares",type:"enterval",q:"1st square number?",a:1},
{t:"Squares",type:"enterval",q:"2nd square number?",a:4},
{t:"Squares",type:"enterval",q:"3rd square?",a:9},
{t:"Squares",type:"enterval",q:"5th square?",a:25},
{t:"Squares",type:"enterval",q:"7th square?",a:49},
{t:"Squares",type:"enterval",q:"8²?",a:64},
{t:"Squares",type:"enterval",q:"10²?",a:100},
{t:"Squares",type:"fillin",q:"12² = ___.",blanks:["144"]},
{t:"Squares",type:"tapall",q:"Tap all perfect squares.",pool:["4","9","16","20","25","30","36","50"],correct:["4","9","16","25","36"]},
{t:"Squares",type:"tf",q:"81 is a perfect square.",a:true}
],
[
{t:"Triangular",type:"enterval",q:"1st triangular number?",a:1},
{t:"Triangular",type:"enterval",q:"2nd triangular?",a:3},
{t:"Triangular",type:"enterval",q:"3rd triangular?",a:6},
{t:"Triangular",type:"enterval",q:"4th triangular?",a:10},
{t:"Triangular",type:"enterval",q:"5th triangular?",a:15},
{t:"Triangular",type:"enterval",q:"n(n+1)/2 for n=6?",a:21},
{t:"Triangular",type:"fillin",q:"n(n+1)/2 for n=7 is ___.",blanks:["28"]},
{t:"Triangular",type:"enterval",q:"n(n+1)/2 for n=10?",a:55},
{t:"Triangular",type:"tf",q:"15 is a triangular number.",a:true},
{t:"Triangular",type:"tapall",q:"Tap all TRIANGULAR numbers.",pool:["1","3","4","6","10","12","15","18"],correct:["1","3","6","10","15"]}
],
[
{t:"Cubes",type:"enterval",q:"1³ = ?",a:1},
{t:"Cubes",type:"enterval",q:"2³ = ?",a:8},
{t:"Cubes",type:"enterval",q:"3³ = ?",a:27},
{t:"Cubes",type:"enterval",q:"4³ = ?",a:64},
{t:"Cubes",type:"enterval",q:"5³ = ?",a:125},
{t:"Cubes",type:"fillin",q:"6³ = ___.",blanks:["216"]},
{t:"Cubes",type:"enterval",q:"10³ = ?",a:1000},
{t:"Cubes",type:"tf",q:"125 is a perfect cube.",a:true},
{t:"Cubes",type:"tf",q:"100 is a perfect cube.",a:false},
{t:"Cubes",type:"tapall",q:"Tap all PERFECT CUBES.",pool:["1","8","16","27","36","64","100","125"],correct:["1","8","27","64","125"]}
],
[
{t:"Fibonacci",type:"enterval",q:"Next in 1, 1, 2, 3, 5, 8, ?",a:13},
{t:"Fibonacci",type:"enterval",q:"Fibonacci after 13?",a:21},
{t:"Fibonacci",type:"tf",q:"Each Fibonacci term is the sum of the previous two.",a:true},
{t:"Fibonacci",type:"enterval",q:"8th Fibonacci (starting 1, 1)?",a:21},
{t:"Fibonacci",type:"enterval",q:"10th Fibonacci?",a:55},
{t:"Fibonacci",type:"fillin",q:"Fibonacci starts with ___ and 1.",blanks:["1"]},
{t:"Fibonacci",type:"tf",q:"The rule aₙ = aₙ₋₁ + aₙ₋₂ defines Fibonacci.",a:true},
{t:"Fibonacci",type:"tf",q:"50 is a Fibonacci number.",a:false},
{t:"Fibonacci",type:"tapall",q:"Tap all numbers in the Fibonacci sequence.",pool:["1","2","3","4","5","7","8","13","20"],correct:["1","2","3","5","8","13"]},
{t:"Fibonacci",type:"enterval",q:"4th Fibonacci (1,1,2,3,...)?",a:3}
],
[
{t:"Formula",type:"enterval",q:"100th term of 2, 4, 6, 8…?",a:200},
{t:"Formula",type:"enterval",q:"50th term of 1, 3, 5, 7…?",a:99},
{t:"Formula",type:"enterval",q:"aₙ = 5n. 7th term?",a:35},
{t:"Formula",type:"enterval",q:"aₙ = n² + 1. 3rd term?",a:10},
{t:"Formula",type:"fillin",q:"aₙ = 2n−1. 5th term is ___.",blanks:["9"]},
{t:"Formula",type:"enterval",q:"aₙ = n(n+1)/2. 4th term?",a:10},
{t:"Formula",type:"enterval",q:"aₙ = 3n. 8th term?",a:24},
{t:"Formula",type:"enterval",q:"Common difference of 7, 11, 15, 19?",a:4},
{t:"Formula",type:"tapall",q:"Tap all arithmetic sequences (constant difference).",pool:["2,4,6,8","1,2,4,8","3,5,7,9","10,20,30,40","1,4,9,16","5,10,15,20"],correct:["2,4,6,8","3,5,7,9","10,20,30,40","5,10,15,20"]},
{t:"Formula",type:"tf",q:"Common ratio of 3, 6, 12, 24 is 2.",a:true}
]
]
},
// ─── Grade 6 · Chapter 2 · Lines and Angles ───
2: { title:'Lines and Angles',
beginner:[
[
{t:"Lines",type:"enterval",q:"Endpoints of a line?",a:0},
{t:"Lines",type:"enterval",q:"Endpoints of a ray?",a:1},
{t:"Lines",type:"enterval",q:"Endpoints of a line segment?",a:2},
{t:"Lines",q:"Shortest path between 2 points?",o:["Line segment","Curve","Ray","Line"],a:0},
{t:"Lines",type:"tf",q:"A line can be extended in both directions.",a:true},
{t:"Lines",type:"fillin",q:"A ray starts from one ___.",blanks:["point"]},
{t:"Lines",type:"tf",q:"Line AB is the same as line BA.",a:true},
{t:"Lines",type:"tf",q:"Ray AB is the same as ray BA.",a:false},
{t:"Lines",type:"tapall",q:"Tap all true statements about lines.",pool:["Line has 0 endpoints","Ray has 1 endpoint","Segment has 2 endpoints","Line has fixed length","Ray can be extended both ways","Two distinct lines meet at most at 1 point"],correct:["Line has 0 endpoints","Ray has 1 endpoint","Segment has 2 endpoints","Two distinct lines meet at most at 1 point"]},
{t:"Lines",q:"Collinear points lie on?",o:["Same line","Different lines","A triangle","A square"],a:0}
],
[
{t:"Types",type:"fillin",q:"Acute angles are less than ___°.",blanks:["90"]},
{t:"Types",type:"tf",q:"Obtuse angles are between 90° and 180°.",a:true},
{t:"Types",type:"enterval",q:"A right angle is ? degrees.",a:90},
{t:"Types",type:"enterval",q:"A straight angle is ? degrees.",a:180},
{t:"Types",type:"tf",q:"A reflex angle is between 180° and 360°.",a:true},
{t:"Types",q:"Angle of zero turn?",o:["Zero angle","Right","Acute","Straight"],a:0},
{t:"Types",type:"enterval",q:"A full turn is ? degrees.",a:360},
{t:"Types",type:"tapall",q:"Tap all acute angles.",pool:["10°","45°","90°","30°","100°","170°"],correct:["10°","45°","30°"]},
{t:"Types",type:"enterval",q:"Perpendicular lines meet at ? degrees.",a:90},
{t:"Types",type:"tf",q:"In school maths, angles are typically non-negative.",a:true}
],
[
{t:"Measure",q:"Tool to measure angles?",o:["Protractor","Ruler","Compass","Scale"],a:0},
{t:"Measure",type:"fillin",q:"The unit of angle measure is ___.",blanks:["degrees"]},
{t:"Measure",q:"Protractor shape?",o:["Semicircle","Square","Triangle","Rectangle"],a:0},
{t:"Measure",type:"tf",q:"The centre of a protractor aligns with the vertex of the angle.",a:true},
{t:"Measure",q:"To measure, align ___ on baseline.",o:["One arm","Vertex","Far end","Neither arm"],a:0},
{t:"Measure",type:"enterval",q:"Right angle reads ? on a protractor.",a:90},
{t:"Measure",type:"tf",q:"Reading beyond 90° indicates an obtuse angle.",a:true},
{t:"Measure",type:"enterval",q:"Straight angle reads ? on a protractor.",a:180},
{t:"Measure",type:"tapall",q:"Tap all true measurement facts.",pool:["Degrees are the unit","A protractor is a semicircle","Full turn = 360°","Angles are measured in cm","Right angle is 90°","Straight angle is 270°"],correct:["Degrees are the unit","A protractor is a semicircle","Full turn = 360°","Right angle is 90°"]},
{t:"Measure",type:"enterval",q:"Full turn = ? degrees",a:360}
],
[
{t:"Para/Inter",type:"tf",q:"Parallel lines never meet.",a:true},
{t:"Para/Inter",type:"fillin",q:"Distance between parallel lines is ___ (constant/growing).",blanks:["constant"]},
{t:"Para/Inter",type:"tf",q:"Train tracks are parallel lines.",a:true},
{t:"Para/Inter",type:"enterval",q:"Two intersecting lines meet at how many points?",a:1},
{t:"Para/Inter",type:"enterval",q:"Perpendicular lines intersect at ? degrees.",a:90},
{t:"Para/Inter",q:"Sides of a ladder are?",o:["Parallel","Perpendicular","Intersecting","Curved"],a:0},
{t:"Para/Inter",type:"tf",q:"Rungs of a ladder are perpendicular to its side rails.",a:true},
{t:"Para/Inter",type:"tapall",q:"Tap all examples of PERPENDICULAR lines.",pool:["L shape","+ shape","Cross intersection","T shape","Parallel train rails","Y shape"],correct:["L shape","+ shape","Cross intersection","T shape"]},
{t:"Para/Inter",q:"'X' shape lines are?",o:["Intersecting","Parallel","Perpendicular","Same"],a:0},
{t:"Para/Inter",type:"fillin",q:"Symbol '||' means ___.",blanks:["parallel"]}
],
[
{t:"Pairs",q:"Angles summing to 90° are?",o:["Complementary","Supplementary","Vertically opposite","Straight"],a:0},
{t:"Pairs",type:"fillin",q:"Angles summing to 180° are ___.",blanks:["supplementary"]},
{t:"Pairs",q:"Angles sharing a vertex and a common side?",o:["Adjacent","Vertical","Supplementary","Parallel"],a:0},
{t:"Pairs",type:"tf",q:"Vertically opposite angles are equal.",a:true},
{t:"Pairs",type:"enterval",q:"Linear pair of angles sums to ? degrees.",a:180},
{t:"Pairs",type:"tf",q:"Two angles on a straight line form a linear pair.",a:true},
{t:"Pairs",type:"enterval",q:"Supplement of a right angle (90°)?",a:90},
{t:"Pairs",type:"enterval",q:"Complementary pair sums to ? degrees.",a:90},
{t:"Pairs",type:"tapall",q:"Tap all COMPLEMENTARY angle pairs.",pool:["30°+60°","45°+45°","70°+20°","100°+80°","40°+50°","90°+90°"],correct:["30°+60°","45°+45°","70°+20°","40°+50°"]},
{t:"Pairs",type:"tf",q:"Adjacent angles share a vertex and a side but don't overlap.",a:true}
]
],
pro:[
[
{t:"Calc",type:"enterval",q:"Complement of 40° (degrees)?",a:50},
{t:"Calc",type:"enterval",q:"Supplement of 100°?",a:80},
{t:"Calc",type:"enterval",q:"Two complementary angles; one is 35°. Other?",a:55},
{t:"Calc",type:"enterval",q:"Two equal supplementary angles — each?",a:90},
{t:"Calc",type:"fillin",q:"Supplement of 45° is ___°.",blanks:["135"]},
{t:"Calc",type:"enterval",q:"Complement of 60°?",a:30},
{t:"Calc",type:"enterval",q:"Complement of 70°?",a:20},
{t:"Calc",type:"enterval",q:"Supplement of 130°?",a:50},
{t:"Calc",type:"tapall",q:"Tap all angles whose SUPPLEMENT is also their COMPLEMENT (impossible — careful!).",pool:["0°","45°","90°","None exists","180°","360°"],correct:["None exists"]},
{t:"Calc",type:"enterval",q:"3/4 of 360°?",a:270}
],
[
{t:"Intersect",type:"enterval",q:"Two intersecting lines form how many angles?",a:4},
{t:"Intersect",type:"tf",q:"Opposite angles at an intersection are equal.",a:true},
{t:"Intersect",type:"enterval",q:"Sum of all 4 angles at an intersection (degrees)?",a:360},
{t:"Intersect",type:"tf",q:"Adjacent angles at an intersection are supplementary.",a:true},
{t:"Intersect",type:"enterval",q:"Two lines make a 60° angle. Vertically opposite angle?",a:60},
{t:"Intersect",type:"enterval",q:"If two of the four angles are 60°, the other two are each ___°?",a:120},
{t:"Intersect",type:"tf",q:"If one angle at an intersection is 90°, all four are 90°.",a:true},
{t:"Intersect",type:"fillin",q:"Linear pair sums to ___°.",blanks:["180"]},
{t:"Intersect",type:"tapall",q:"Tap all TRUE facts about 2 intersecting lines.",pool:["4 angles form","Opposite angles equal","All angles = 90° always","Sum of all 4 = 360°","Adjacent angles supplementary","Only 2 distinct angle values possible"],correct:["4 angles form","Opposite angles equal","Sum of all 4 = 360°","Adjacent angles supplementary","Only 2 distinct angle values possible"]},
{t:"Intersect",type:"enterval",q:"Vertically opposite angle of 135°?",a:135}
],
[
{t:"Transversal",type:"enterval",q:"A transversal cutting 2 parallel lines creates how many angles total?",a:8},
{t:"Transversal",type:"tf",q:"Corresponding angles (parallel lines + transversal) are equal.",a:true},
{t:"Transversal",type:"tf",q:"Alternate interior angles are equal.",a:true},
{t:"Transversal",type:"enterval",q:"Co-interior (same-side interior) angles sum to ? degrees.",a:180},
{t:"Transversal",type:"tf",q:"Alternate exterior angles are also equal.",a:true},
{t:"Transversal",type:"enterval",q:"If one angle is 70°, its corresponding angle is ?",a:70},
{t:"Transversal",q:"If corresponding angles are equal, the lines are?",o:["Parallel","Perpendicular","Intersecting","Skew"],a:0},
{t:"Transversal",type:"fillin",q:"Alternate angle of 50° is ___°.",blanks:["50"]},
{t:"Transversal",type:"enterval",q:"Co-interior angle of 110° is ? degrees.",a:70},
{t:"Transversal",type:"tapall",q:"Tap all angle pairs that are EQUAL when a transversal cuts parallel lines.",pool:["Corresponding","Alternate interior","Alternate exterior","Vertically opposite","Co-interior","Linear pair"],correct:["Corresponding","Alternate interior","Alternate exterior","Vertically opposite"]}
],
[
{t:"Construct",q:"Perpendicular bisector divides a segment into?",o:["2 equal halves, at 90°","2 unequal halves","3 parts","1 half"],a:0},
{t:"Construct",type:"tf",q:"An angle bisector splits an angle into 2 equal halves.",a:true},
{t:"Construct",type:"enterval",q:"Bisector of 60° gives ? degrees per half.",a:30},
{t:"Construct",type:"enterval",q:"Perpendicular bisector of a 10 cm segment — each half (cm)?",a:5},
{t:"Construct",q:"Tools for angle bisection?",o:["Compass + ruler","Only ruler","Only compass","Protractor only"],a:0},
{t:"Construct",type:"enterval",q:"Perpendicular lines make angle ? degrees.",a:90},
{t:"Construct",type:"fillin",q:"Bisector of 90° gives two ___° angles.",blanks:["45"]},
{t:"Construct",type:"tf",q:"A right angle bisected gives two 45° angles.",a:true},
{t:"Construct",type:"enterval",q:"Bisector of 40° — each half?",a:20},
{t:"Construct",type:"tapall",q:"Tap all angles whose bisector gives an integer number of degrees.",pool:["40°","60°","90°","75°","30°","45°"],correct:["40°","60°","90°","30°"]}
],
[
{t:"Word",type:"enterval",q:"Triangle with angles 60°, 60°, ?°.",a:60},
{t:"Word",q:"Right triangle with 30° — other two angles?",o:["90° + 60°","45° + 45°","60° + 60°","90° + 90°"],a:0},
{t:"Word",type:"enterval",q:"Linear pair — one is 75°. Other angle?",a:105},
{t:"Word",type:"tf",q:"Vertically opposite angles are always equal (never differ).",a:true},
{t:"Word",type:"enterval",q:"Sum of EXTERIOR angles of any polygon (degrees)?",a:360},
{t:"Word",type:"enterval",q:"Each exterior angle of a regular pentagon?",a:72},
{t:"Word",type:"fillin",q:"Each interior angle of a regular hexagon is ___°.",blanks:["120"]},
{t:"Word",type:"tf",q:"Between parallel lines cut by a transversal, corresponding angles are equal.",a:true},
{t:"Word",type:"enterval",q:"One right-angle turn = ? degrees.",a:90},
{t:"Word",type:"enterval",q:"Angle sum of a quadrilateral?",a:360}
]
]
}},

// ═══════════════════════════════════════════════════════════════
// GRADE 7 · Chapter 1 · Large Numbers Around Us
// ═══════════════════════════════════════════════════════════════
7: { 1: { title:'Large Numbers Around Us',
beginner:[
[
{t:"Indian Sys",type:"enterval",q:"Zeros in 1 crore?",a:7},
{t:"Indian Sys",q:"1 crore = ?",o:["1,00,00,000","10,00,000","10,000","1,000,000"],a:0},
{t:"Indian Sys",type:"enterval",q:"1 crore = how many lakhs?",a:100},
{t:"Indian Sys",q:"Indian system places commas after?",o:["Thousands, lakhs, crores","Every 3 digits","After millions","After billions"],a:0},
{t:"Indian Sys",type:"tf",q:"'Twenty-five lakh thirty thousand' in digits is 25,30,000.",a:true},
{t:"Indian Sys",type:"enterval",q:"Thousands in 1 lakh?",a:100},
{t:"Indian Sys",type:"enterval",q:"Place value of 6 in 6,34,250?",a:600000},
{t:"Indian Sys",type:"fillin",q:"In 5,67,89,123 — the lakhs-place digit is ___.",blanks:["7"]},
{t:"Indian Sys",type:"tapall",q:"Tap all values equal to 1 crore.",pool:["1,00,00,000","10,000,000","1 crore","100 lakh","10 lakh","10,00,000"],correct:["1,00,00,000","10,000,000","1 crore","100 lakh"]},
{t:"Indian Sys",type:"tf",q:"1 million = 10 lakh.",a:true}
],
[
{t:"Place Val",type:"enterval",q:"In 12,34,567 — tens digit?",a:6},
{t:"Place Val",type:"enterval",q:"In 12,34,567 — thousands digit?",a:4},
{t:"Place Val",type:"enterval",q:"In 12,34,567 — lakhs digit?",a:2},
{t:"Place Val",q:"Standard form of 'Three crore'?",o:["3,00,00,000","30,00,000","3,00,000","3,000,000"],a:0},
{t:"Place Val",type:"fillin",q:"'Fifty lakh' in digits is ___.",blanks:["5000000"]},
{t:"Place Val",type:"tf",q:"Place value of 7 in 7,00,000 is seven lakh.",a:true},
{t:"Place Val",type:"tf",q:"Place value of 1 in 1,23,45,678 is one crore.",a:true},
{t:"Place Val",type:"enterval",q:"Smallest 7-digit number?",a:1000000},
{t:"Place Val",type:"tapall",q:"Tap all numbers with 7 digits.",pool:["9,99,999","10,00,000","50,00,000","99,99,999","1,00,00,000","25,000"],correct:["10,00,000","50,00,000","99,99,999"]},
{t:"Place Val",type:"tf",q:"Successor of 9,99,99,999 is 10,00,00,000.",a:true}
],
[
{t:"Reading",q:"Name of 3,45,67,890?",o:["Three crore forty-five lakh sixty-seven thousand eight hundred ninety","Thirty-four crore...","Three lakh forty-five crore...","Three hundred forty-five thousand..."],a:0},
{t:"Reading",type:"fillin",q:"'Two lakh thirty thousand' in digits is ___.",blanks:["230000"]},
{t:"Reading",type:"tf",q:"1 crore is greater than 12 lakh.",a:true},
{t:"Reading",type:"tf",q:"1,00,00,000 is greater than 99,99,999.",a:true},
{t:"Reading",type:"tf",q:"45 lakh is smaller than 4 crore.",a:true},
{t:"Reading",q:"1,23,45,678 is approximately?",o:["1.2 crore","12 lakh","12 crore","1.2 lakh"],a:0},
{t:"Reading",q:"An 8-digit number lies in?",o:["Crore range","Lakh range","Thousand range","Million range"],a:0},
{t:"Reading",type:"enterval",q:"1 day = how many seconds?",a:86400},
{t:"Reading",type:"enterval",q:"Year ≈ 365 × 24 ≈ how many hours?",a:8760},
{t:"Reading",type:"tapall",q:"Tap all numbers that READ as a lakh-range amount (6-digit).",pool:["3,84,000","9,99,999","1,00,000","99,999","25,00,000","8,000"],correct:["3,84,000","9,99,999","1,00,000"]}
],
[
{t:"Names",q:"1,23,456 in words?",o:["One lakh twenty-three thousand four hundred fifty-six","Twelve lakh thirty-four thousand","One hundred twenty-three thousand","One crore twenty-three thousand"],a:0},
{t:"Names",type:"enterval",q:"'One crore' in digits?",a:10000000},
{t:"Names",type:"enterval",q:"'Seventy-five lakh' in digits?",a:7500000},
{t:"Names",type:"fillin",q:"'Three lakh five thousand' in digits is ___.",blanks:["305000"]},
{t:"Names",type:"tf",q:"'Two hundred crore' in digits is 2,00,00,00,000.",a:true},
{t:"Names",type:"enterval",q:"'Ten crore' equals?",a:100000000},
{t:"Names",type:"tf",q:"'100 crore' is the same as 1 arab (1 billion).",a:true},
{t:"Names",type:"enterval",q:"'Twenty lakh' in digits?",a:2000000},
{t:"Names",type:"tapall",q:"Tap all names that equal the same numeric value as 10 crore.",pool:["100 × 10 lakh","1,000 lakh","10 × 1 crore","1,00,00,000","1 arab","10,00,00,000"],correct:["100 × 10 lakh","1,000 lakh","10 × 1 crore","10,00,00,000"]},
{t:"Names",type:"tf",q:"1,000 lakh equals 10 crore.",a:false}
],
[
{t:"Compare",q:"Greater: 5,67,89,012 or 6,56,78,901?",o:["6,56,78,901","5,67,89,012","Equal","Cannot tell"],a:0},
{t:"Compare",type:"tf",q:"34,56,789 is smaller than 3,45,67,890.",a:true},
{t:"Compare",q:"Order (ascending) 1 crore, 10 lakh, 1 lakh:",o:["1 lakh < 10 lakh < 1 crore","1 crore < 10 lakh < 1 lakh","10 lakh < 1 lakh < 1 crore","Equal"],a:0},
{t:"Compare",type:"fillin",q:"Largest among 45,00,000 / 4,50,000 / 4,50,00,000 is ___.",blanks:["45000000"]},
{t:"Compare",type:"tf",q:"99,99,999 is smaller than 1,00,00,000.",a:true},
{t:"Compare",type:"enterval",q:"1 crore − 1 = ?",a:9999999},
{t:"Compare",type:"tf",q:"2 crore is greater than 20 lakh.",a:true},
{t:"Compare",type:"tf",q:"10 lakh equals 1 million.",a:true},
{t:"Compare",type:"tf",q:"1 crore equals 10 million.",a:true},
{t:"Compare",type:"tapall",q:"Tap all TRUE equivalences.",pool:["1 crore = 10 million","100 crore = 1 billion","10 lakh = 1 million","1 crore = 100 lakh","1 billion = 10 crore","1 lakh = 10,000"],correct:["1 crore = 10 million","100 crore = 1 billion","10 lakh = 1 million","1 crore = 100 lakh"]}
]
],
pro:[
[
{t:"Ind vs Intl",q:"Indian 1,00,000 = International?",o:["100,000","10,000","1,000,000","10,00,00"],a:0},
{t:"Ind vs Intl",type:"tf",q:"1 million = 10 lakh in Indian system.",a:true},
{t:"Ind vs Intl",q:"Commas (Indian) in 987654321?",o:["98,76,54,321","987,654,321","9876,54,321","98765,4321"],a:0},
{t:"Ind vs Intl",q:"Commas (International) in 987654321?",o:["987,654,321","98,76,54,321","987,65,43,21","9876,54,321"],a:0},
{t:"Ind vs Intl",type:"enterval",q:"1 billion = how many crores?",a:100},
{t:"Ind vs Intl",type:"tf",q:"100 crore is 1 arab (= 1 billion).",a:true},
{t:"Ind vs Intl",type:"fillin",q:"1 trillion = ___ lakh crore.",blanks:["1"]},
{t:"Ind vs Intl",type:"tf",q:"International 1,000,000 equals Indian 10 lakh.",a:true},
{t:"Ind vs Intl",q:"Is 10⁶ = 1 lakh?",o:["No (it's 10 lakh)","Yes","Approximately","Cannot tell"],a:0},
{t:"Ind vs Intl",q:"Is 10⁷ = 1 crore?",o:["Yes","No","Approximately","Cannot tell"],a:0}
],
[
{t:"Powers",type:"enterval",q:"10² = ?",a:100},
{t:"Powers",type:"enterval",q:"10³ = ?",a:1000},
{t:"Powers",type:"enterval",q:"10⁴ = ?",a:10000},
{t:"Powers",type:"enterval",q:"10⁵ = ?",a:100000},
{t:"Powers",type:"fillin",q:"10⁶ = ___.",blanks:["1000000"]},
{t:"Powers",type:"tf",q:"10⁷ = 1 crore.",a:true},
{t:"Powers",type:"tf",q:"10⁸ = 10 crore.",a:true},
{t:"Powers",type:"tf",q:"10⁹ = 1 arab (1 billion).",a:true},
{t:"Powers",type:"tapall",q:"Tap all equivalences to 10 lakh (1 million).",pool:["10⁶","1,000,000","10 × 1 lakh","10⁷","1 crore","100 × 10,000"],correct:["10⁶","1,000,000","10 × 1 lakh","100 × 10,000"]},
{t:"Powers",q:"10¹² equals?",o:["1 trillion","1 billion","1 crore","1 lakh crore"],a:0}
],
[
{t:"Word",q:"India population ≈ 140 crore. In digits?",o:["1,40,00,00,000","14,00,00,00,000","1,40,00,000","14,00,000"],a:0},
{t:"Word",type:"fillin",q:"Earth–Sun ≈ 15 crore km = ___ km.",blanks:["150000000"]},
{t:"Word",type:"enterval",q:"Factory makes 2,500 toys/day × 30 days = ?",a:75000},
{t:"Word",type:"enterval",q:"₹2 crore split in lots of ₹5 lakh — number of lots?",a:40},
{t:"Word",type:"enterval",q:"25 × 2,00,000 = ?",a:5000000},
{t:"Word",type:"enterval",q:"Light 3 lakh km/s × 5 s = ? lakh km.",a:15},
{t:"Word",type:"enterval",q:"₹1 crore in ₹1,000 notes = how many notes?",a:10000},
{t:"Word",type:"tf",q:"10.5 crore people equals 1,050 lakh.",a:true},
{t:"Word",type:"enterval",q:"A city of 1.2 crore = how many million?",a:12},
{t:"Word",type:"tapall",q:"Tap all correct totals.",pool:["₹1L × 12 = ₹12L","2,500 × 30 = 75,000","25 × 2L = 50L","₹2cr ÷ ₹5L = 40","1 cr = 10 million","100 × 100 = 1,000"],correct:["₹1L × 12 = ₹12L","2,500 × 30 = 75,000","25 × 2L = 50L","₹2cr ÷ ₹5L = 40","1 cr = 10 million"]}
],
[
{t:"Estimate",type:"enterval",q:"Estimate 4,87,652 + 3,12,348 ≈ ?",a:800000,tol:20000},
{t:"Estimate",type:"enterval",q:"Round 87,45,321 to nearest lakh?",a:8700000},
{t:"Estimate",type:"fillin",q:"Round 4,56,78,901 to nearest crore = ___.",blanks:["50000000"]},
{t:"Estimate",type:"enterval",q:"1,00,00,000 − 1 = ?",a:9999999},
{t:"Estimate",type:"enterval",q:"Round 34,56,789 to nearest lakh?",a:3500000},
{t:"Estimate",type:"tf",q:"9,87,65,432 rounded to nearest crore is 10,00,00,000.",a:true},
{t:"Estimate",type:"enterval",q:"Estimate 98 × 1,02,000 ≈ ?",a:10000000,tol:500000},
{t:"Estimate",type:"enterval",q:"Estimate 4,95,000 + 5,05,000 ≈ ?",a:1000000,tol:20000},
{t:"Estimate",type:"enterval",q:"Estimate 29,87,654 − 10,12,345 ≈ ?",a:2000000,tol:50000},
{t:"Estimate",type:"tapall",q:"Tap all estimations that are reasonable approximations.",pool:["29×41 ≈ 1,200","101×99 ≈ 10,000","498 × 502 ≈ 2,50,000","1,234 + 5,678 ≈ 7,000","9,999 − 1,001 ≈ 9,000","50 × 200 ≈ 10,000"],correct:["29×41 ≈ 1,200","101×99 ≈ 10,000","498 × 502 ≈ 2,50,000","1,234 + 5,678 ≈ 7,000","9,999 − 1,001 ≈ 9,000","50 × 200 ≈ 10,000"]}
],
[
{t:"RealWorld",type:"fillin",q:"₹1 lakh/month × 12 months = ₹___ lakh.",blanks:["12"]},
{t:"RealWorld",type:"enterval",q:"City area 500 km², pop 10 lakh. Per km²?",a:2000},
{t:"RealWorld",q:"25 crore households × ₹1 lakh each = ?",o:["₹25 lakh crore","₹25 crore","₹2.5 lakh crore","₹250 crore"],a:0},
{t:"RealWorld",type:"enterval",q:"₹1 crore split among 500 prizes equally — each ₹?",a:20000},
{t:"RealWorld",type:"enterval",q:"100 crore ÷ 100 = ? crore",a:1},
{t:"RealWorld",type:"tf",q:"50 lakh bottles × ₹20 each = ₹10 crore.",a:true},
{t:"RealWorld",type:"enterval",q:"2 crore tickets × ₹10 each = ? crore",a:20},
{t:"RealWorld",type:"enterval",q:"₹50 crore ÷ 5 years = annual ₹? crore",a:10},
{t:"RealWorld",type:"enterval",q:"500/hr × 24 × 30 = monthly total?",a:360000},
{t:"RealWorld",type:"tapall",q:"Tap all revenues of ₹10 crore or more.",pool:["50 lakh × ₹20","2 crore × ₹10","1 lakh × ₹10","50 × ₹10 lakh","5 lakh × ₹2","1 crore × ₹100"],correct:["50 lakh × ₹20","2 crore × ₹10","50 × ₹10 lakh","1 crore × ₹100"]}
]
]
},
// ─── Grade 7 · Chapter 2 · Arithmetic Expressions ───
2: { title:'Arithmetic Expressions',
beginner:[
[
{t:"Ops",type:"enterval",q:"5 + 3 × 2 = ?",a:11},
{t:"Ops",type:"enterval",q:"10 − 4 + 2 = ?",a:8},
{t:"Ops",type:"enterval",q:"(5 + 3) × 2 = ?",a:16},
{t:"Ops",type:"enterval",q:"20 ÷ 4 + 1 = ?",a:6},
{t:"Ops",type:"enterval",q:"3 × (4 + 2) = ?",a:18},
{t:"Ops",type:"fillin",q:"7 + 2 − 1 = ___.",blanks:["8"]},
{t:"Ops",type:"tf",q:"6 × 2 + 3 = 15.",a:true},
{t:"Ops",type:"enterval",q:"9 − 3 × 2 = ?",a:3},
{t:"Ops",type:"tapall",q:"Tap all expressions that equal 12.",pool:["8÷2×3","4×3","10+2","6×2","20-8","9+3"],correct:["8÷2×3","4×3","10+2","6×2","20-8","9+3"]},
{t:"Ops",type:"enterval",q:"5 + 5 + 5 = ?",a:15}
],
[
{t:"BODMAS",q:"B, O, D, M, A, S stands for?",o:["Brackets, Of, ÷, ×, +, −","Brackets, Over, ×, ÷, +, −","Big, Over, ÷, Main, Add, Sub","Basic, Order, ÷, ×, +, −"],a:0},
{t:"BODMAS",type:"enterval",q:"6 + 3 × 2 − 1 = ?",a:11},
{t:"BODMAS",type:"enterval",q:"10 − (3 + 4) = ?",a:3},
{t:"BODMAS",type:"enterval",q:"12 ÷ 4 + 5 = ?",a:8},
{t:"BODMAS",type:"fillin",q:"4 × 3 − 2 = ___.",blanks:["10"]},
{t:"BODMAS",type:"enterval",q:"(8 + 2) ÷ 5 = ?",a:2},
{t:"BODMAS",type:"tf",q:"5 × (6 − 1) = 25.",a:true},
{t:"BODMAS",type:"enterval",q:"20 − 10 + 5 = ?",a:15},
{t:"BODMAS",type:"enterval",q:"24 ÷ (8 − 2) = ?",a:4},
{t:"BODMAS",type:"tapall",q:"Tap all expressions that equal 20.",pool:["7×2+3×2","4×5","10+10","2×10","12+8","6×4-4"],correct:["7×2+3×2","4×5","10+10","2×10","12+8","6×4-4"]}
],
[
{t:"Brackets",type:"enterval",q:"(3 + 4) + 2 = ?",a:9},
{t:"Brackets",type:"enterval",q:"(5 × 2) + 3 = ?",a:13},
{t:"Brackets",type:"enterval",q:"10 − (2 + 3) = ?",a:5},
{t:"Brackets",type:"fillin",q:"(6 + 2) × 3 = ___.",blanks:["24"]},
{t:"Brackets",type:"enterval",q:"5 + (4 × 2) = ?",a:13},
{t:"Brackets",type:"enterval",q:"(9 − 3) ÷ 2 = ?",a:3},
{t:"Brackets",type:"tf",q:"8 × (2 − 1) = 8.",a:true},
{t:"Brackets",type:"enterval",q:"(10 + 5) ÷ 3 = ?",a:5},
{t:"Brackets",type:"tapall",q:"Tap all expressions equal to 8.",pool:["4×2","(9−1)","16÷2","(3+5)","(2×5)-2","10-2"],correct:["4×2","(9−1)","16÷2","(3+5)","(2×5)-2","10-2"]},
{t:"Brackets",type:"enterval",q:"(2 × 3) + (4 × 5) = ?",a:26}
],
[
{t:"Words",type:"enterval",q:"Sum of 3 and 4?",a:7},
{t:"Words",type:"enterval",q:"Product of 5 and 2?",a:10},
{t:"Words",type:"enterval",q:"Difference of 10 and 3?",a:7},
{t:"Words",type:"enterval",q:"Quotient of 12 by 3?",a:4},
{t:"Words",type:"fillin",q:"Twice of 6 is ___.",blanks:["12"]},
{t:"Words",type:"tf",q:"Half of 10 is 5.",a:true},
{t:"Words",type:"enterval",q:"Thrice of 4?",a:12},
{t:"Words",type:"enterval",q:"5 more than 7?",a:12},
{t:"Words",type:"tapall",q:"Tap all phrases that describe the value 12.",pool:["Twice of 6","Thrice of 4","Sum of 5 and 7","Half of 24","Double of 10","Ten more than 2"],correct:["Twice of 6","Thrice of 4","Sum of 5 and 7","Half of 24","Ten more than 2"]},
{t:"Words",type:"enterval",q:"Double 8 then add 2 = ?",a:18}
],
[
{t:"EasyEq",type:"enterval",q:"x + 3 = 7. x = ?",a:4},
{t:"EasyEq",type:"enterval",q:"x − 2 = 5. x = ?",a:7},
{t:"EasyEq",type:"enterval",q:"2x = 10. x = ?",a:5},
{t:"EasyEq",type:"enterval",q:"x/2 = 4. x = ?",a:8},
{t:"EasyEq",type:"fillin",q:"x + 5 = 12 → x = ___.",blanks:["7"]},
{t:"EasyEq",type:"tf",q:"In x − 4 = 6, x = 10.",a:true},
{t:"EasyEq",type:"enterval",q:"3x = 9. x = ?",a:3},
{t:"EasyEq",type:"enterval",q:"x/3 = 2. x = ?",a:6},
{t:"EasyEq",type:"tapall",q:"Tap all equations where x = 5.",pool:["x+3=8","2x=10","x-2=3","x/2=4","x+1=6","3x=15"],correct:["x+3=8","2x=10","x-2=3","x+1=6","3x=15"]},
{t:"EasyEq",type:"enterval",q:"4x = 20. x = ?",a:5}
]
],
pro:[
[
{t:"BODMAS+",type:"enterval",q:"2 + 3 × 4 − 5 = ?",a:9},
{t:"BODMAS+",type:"enterval",q:"20 − 4 × 3 + 2 = ?",a:10},
{t:"BODMAS+",type:"enterval",q:"(8 + 2) × 3 − 5 = ?",a:25},
{t:"BODMAS+",type:"enterval",q:"30 ÷ 5 + 2 × 3 = ?",a:12},
{t:"BODMAS+",type:"fillin",q:"4 × (6 − 2) + 1 = ___.",blanks:["17"]},
{t:"BODMAS+",type:"enterval",q:"100 − 5 × 8 + 20 ÷ 4 = ?",a:65},
{t:"BODMAS+",type:"enterval",q:"(10 − 3) × (4 + 1) = ?",a:35},
{t:"BODMAS+",type:"enterval",q:"50 ÷ (2 + 3) × 2 = ?",a:20},
{t:"BODMAS+",type:"tapall",q:"Tap all expressions equal to 10.",pool:["2+3×4-5+1","20-4×3+2","5×2","3+7","(8-3)×2","6+4"],correct:["20-4×3+2","5×2","3+7","(8-3)×2","6+4"]},
{t:"BODMAS+",type:"enterval",q:"15 − 2 × (4 − 1) = ?",a:9}
],
[
{t:"Neg",type:"enterval",q:"−5 + 3 = ?",a:-2},
{t:"Neg",type:"enterval",q:"5 + (−3) = ?",a:2},
{t:"Neg",type:"enterval",q:"−2 × 3 = ?",a:-6},
{t:"Neg",type:"enterval",q:"(−4) × (−2) = ?",a:8},
{t:"Neg",type:"fillin",q:"10 − (−5) = ___.",blanks:["15"]},
{t:"Neg",type:"enterval",q:"−8 ÷ 2 = ?",a:-4},
{t:"Neg",type:"enterval",q:"−12 ÷ (−3) = ?",a:4},
{t:"Neg",type:"tf",q:"5 × (−2) + 3 = −7.",a:true},
{t:"Neg",type:"tapall",q:"Tap all products that are POSITIVE.",pool:["(−3)×(−4)","3×4","(−2)×5","(−5)×(−5)","2×(−3)","(−1)×(−1)"],correct:["(−3)×(−4)","3×4","(−5)×(−5)","(−1)×(−1)"]},
{t:"Neg",type:"enterval",q:"(−3)² = ?",a:9}
],
[
{t:"Word",type:"enterval",q:"3 pens @ ₹5 + 2 books @ ₹10 = ₹?",a:35},
{t:"Word",type:"enterval",q:"Double 6 and add 3 = ?",a:15},
{t:"Word",type:"enterval",q:"Triple 4 then subtract 2 = ?",a:10},
{t:"Word",type:"enterval",q:"(Sum of 7 and 3) divided by 2 = ?",a:5},
{t:"Word",type:"fillin",q:"Rectangle area = L × B. 5 × 3 = ___.",blanks:["15"]},
{t:"Word",type:"enterval",q:"10 books @ ₹20 + 5 @ ₹10 = ₹?",a:250},
{t:"Word",type:"enterval",q:"Discount: 100 − 20 = ?",a:80},
{t:"Word",type:"tf",q:"Profit = SP − CP. SP=100, CP=70 → Profit = 30.",a:true},
{t:"Word",type:"enterval",q:"Total of 15 + 25 + 35 = ?",a:75},
{t:"Word",type:"tapall",q:"Tap all statements with Average = 15.",pool:["10, 20","15, 15","12, 18","5, 25","14, 16","7, 22"],correct:["10, 20","15, 15","12, 18","5, 25","14, 16"]}
],
[
{t:"Vars",type:"enterval",q:"If x = 3, 2x + 1 = ?",a:7},
{t:"Vars",type:"enterval",q:"If y = 4, y² = ?",a:16},
{t:"Vars",type:"enterval",q:"If a = 5, 3a − 2 = ?",a:13},
{t:"Vars",type:"enterval",q:"If x = 2, y = 3, then x + y = ?",a:5},
{t:"Vars",type:"enterval",q:"If x = 2, y = 4, then xy = ?",a:8},
{t:"Vars",q:"Cost of n pens @ ₹5 each?",o:["5n","n/5","n+5","5/n"],a:0},
{t:"Vars",type:"enterval",q:"Rectangle L = 3, B = 2. Perimeter?",a:10},
{t:"Vars",type:"fillin",q:"If x = 5, (x+1)(x−1) = ___.",blanks:["24"]},
{t:"Vars",type:"tapall",q:"Tap all expressions that equal 0 when x = 0.",pool:["3x","x²","5x+1","2x-2x","0","x+1"],correct:["3x","x²","2x-2x","0"]},
{t:"Vars",type:"enterval",q:"If x = −1, 2x + 3 = ?",a:1}
],
[
{t:"Identities",q:"a + b = b + a is called?",o:["Commutative (addition)","Associative","Distributive","Identity"],a:0},
{t:"Identities",type:"tf",q:"a × b = b × a (commutative) is always true.",a:true},
{t:"Identities",type:"tf",q:"a − b = b − a (subtraction is commutative).",a:false},
{t:"Identities",type:"fillin",q:"a + 0 = ___.",blanks:["a"]},
{t:"Identities",type:"fillin",q:"a × 1 = ___.",blanks:["a"]},
{t:"Identities",type:"enterval",q:"a × 0 = ?",a:0},
{t:"Identities",q:"(a+b)+c = a+(b+c) is called?",o:["Associative","Commutative","Distributive","Identity"],a:0},
{t:"Identities",q:"a(b + c) = ?",o:["ab + ac","a+b+c","a+bc","abc"],a:0},
{t:"Identities",type:"tapall",q:"Tap all correct identity statements.",pool:["a + 0 = a","a × 1 = a","a − a = 0","a × 0 = 0","a + a = 2a","a ÷ a = 1"],correct:["a + 0 = a","a × 1 = a","a − a = 0","a × 0 = 0","a + a = 2a"]},
{t:"Identities",type:"enterval",q:"a − a = ?",a:0}
]
]
}},

// ═══════════════════════════════════════════════════════════════
// GRADE 8 · Chapter 1 · Rational Numbers
// ═══════════════════════════════════════════════════════════════
8: { 1: { title:'Rational Numbers',
beginner:[
[
{t:"Identify",q:"Is 1/2 a rational number?",o:["Yes","No","Sometimes","Only positive"],a:0},
{t:"Identify",q:"Is 0 a rational number?",o:["Yes","No","Only as 0/1","Undefined"],a:0},
{t:"Identify",q:"Is −3/7 rational?",o:["Yes","No","Only positives count","Cannot say"],a:0},
{t:"Identify",q:"Is √2 rational?",o:["No","Yes","Sometimes","Only if squared"],a:0},
{t:"Identify",q:"p/q is rational when q ≠ ?",o:["0","1","p","−1"],a:0},
{t:"Identify",q:"Rationals are denoted by?",o:["Q","R","N","Z"],a:0},
{t:"Identify",q:"Is every integer a rational?",o:["Yes","No","Only positives","Only if > 0"],a:0},
{t:"Identify",q:"Is every natural number rational?",o:["Yes","No","Only some","Only primes"],a:0},
{t:"Identify",q:"1/2 in decimal?",o:["0.5","0.2","0.25","0.1"],a:0},
{t:"Identify",q:"Is 22/7 exactly equal to π?",o:["No","Yes","Only in school","Only if rounded"],a:0}
],
[
{t:"Add",q:"1/2 + 1/2 = ?",o:["1","2","1/4","3/4"],a:0},
{t:"Add",q:"1/3 + 1/3 = ?",o:["2/3","1/6","2/6 only","1"],a:0},
{t:"Add",q:"1/4 + 1/2 = ?",o:["3/4","2/6","1/6","1/8"],a:0},
{t:"Add",q:"2/3 + 1/6 = ?",o:["5/6","3/9","1","3/6"],a:0},
{t:"Add",q:"3/4 + 1/8 = ?",o:["7/8","4/12","5/8","4/8"],a:0},
{t:"Add",q:"−1/2 + 1/2 = ?",o:["0","1","−1","1/4"],a:0},
{t:"Add",q:"1/5 + 2/5 = ?",o:["3/5","2/10","3/10","2/25"],a:0},
{t:"Add",q:"−2/5 + 3/5 = ?",o:["1/5","−1/5","5/5","1"],a:0},
{t:"Add",q:"1/4 + 1/4 = ?",o:["1/2","2/8 only","1/8","2/4 only"],a:0},
{t:"Add",q:"3/7 + 2/7 = ?",o:["5/7","5/14","1","6/49"],a:0}
],
[
{t:"Sub",q:"3/5 − 1/5 = ?",o:["2/5","4/5","1/5","2/10"],a:0},
{t:"Sub",q:"5/6 − 1/3 = ?",o:["1/2","4/3","1/3","2/3"],a:0},
{t:"Sub",q:"1 − 1/2 = ?",o:["1/2","3/2","0","1"],a:0},
{t:"Sub",q:"1/2 − 1/3 = ?",o:["1/6","2/6","1/3","5/6"],a:0},
{t:"Sub",q:"2/3 − 1/6 = ?",o:["1/2","1/3","1/6","5/6"],a:0},
{t:"Sub",q:"3/4 − 1/4 = ?",o:["1/2","2/4 only","1/4","3/8"],a:0},
{t:"Sub",q:"7/8 − 3/8 = ?",o:["1/2","4/8 only","5/8","3/8"],a:0},
{t:"Sub",q:"9/10 − 1/10 = ?",o:["4/5","8/10 only","8/20","1/10"],a:0},
{t:"Sub",q:"5/6 − 2/3 = ?",o:["1/6","3/6","1/3","3/3"],a:0},
{t:"Sub",q:"1/2 + (−1/3) = ?",o:["1/6","−1/6","5/6","2/5"],a:0}
],
[
{t:"Decimal",q:"1/2 = ?",o:["0.5","0.2","0.25","0.1"],a:0},
{t:"Decimal",q:"1/4 = ?",o:["0.25","0.5","0.4","0.14"],a:0},
{t:"Decimal",q:"3/4 = ?",o:["0.75","0.34","0.25","0.43"],a:0},
{t:"Decimal",q:"1/5 = ?",o:["0.2","0.5","0.15","0.25"],a:0},
{t:"Decimal",q:"1/10 = ?",o:["0.1","0.01","0.10","0.001"],a:0},
{t:"Decimal",q:"0.5 as fraction?",o:["1/2","5/10 only","1/5","2/5"],a:0},
{t:"Decimal",q:"0.25 as fraction?",o:["1/4","25/100 only","1/25","2/5"],a:0},
{t:"Decimal",q:"0.75 as fraction?",o:["3/4","75/100 only","7/5","3/40"],a:0},
{t:"Decimal",q:"1/3 ≈ ?",o:["0.333...","0.3","0.13","0.03"],a:0},
{t:"Decimal",q:"0.2 as fraction?",o:["1/5","2/5","1/2","2/10 only"],a:0}
],
[
{t:"Compare",q:"Greater: 1/2 or 1/3?",o:["1/2","1/3","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Smaller: 2/3 or 3/4?",o:["2/3","3/4","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Greater: −1/2 or −1/3?",o:["−1/3","−1/2","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Ascending: 1/2, 1/4, 3/4?",o:["1/4, 1/2, 3/4","3/4, 1/2, 1/4","1/2, 1/4, 3/4","1/4, 3/4, 1/2"],a:0},
{t:"Compare",q:"Is 5/6 > 4/6?",o:["Yes","No","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Is −1/2 < 0?",o:["Yes","No","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Greater: 7/10 or 3/5?",o:["7/10","3/5","Equal","Cannot tell"],a:0},
{t:"Compare",q:"Descending: 2/3, 1/3, 4/3?",o:["4/3, 2/3, 1/3","1/3, 2/3, 4/3","4/3, 1/3, 2/3","Equal"],a:0},
{t:"Compare",q:"Is 0 rational AND an integer?",o:["Yes, both","Only rational","Only integer","Neither"],a:0},
{t:"Compare",q:"Is 2/4 = 1/2?",o:["Yes","No","Only approximately","Cannot tell"],a:0}
]
],
pro:[
[
{t:"Multiply",q:"(2/3) × (3/4) = ?",o:["1/2","6/12 only","2/4","3/2"],a:0},
{t:"Multiply",q:"(1/2) × (1/4) = ?",o:["1/8","2/8","1/6","1/16"],a:0},
{t:"Multiply",q:"(3/5) × (5/6) = ?",o:["1/2","15/30 only","3/6","8/11"],a:0},
{t:"Multiply",q:"(2/3) × 6 = ?",o:["4","12/3","6","8/3"],a:0},
{t:"Multiply",q:"(7/9) × (3/14) = ?",o:["1/6","21/126","1/3","3/14"],a:0},
{t:"Multiply",q:"(−3/5) × (5/6) = ?",o:["−1/2","1/2","−15/30","−3/6"],a:0},
{t:"Multiply",q:"(−1/2) × (−4) = ?",o:["2","−2","−1/8","1/2"],a:0},
{t:"Multiply",q:"0 × (5/7) = ?",o:["0","5/7","7/5","1"],a:0},
{t:"Multiply",q:"(4/5) × (5/4) = ?",o:["1","16/25","0","5/4"],a:0},
{t:"Multiply",q:"(2/3) × 0 = ?",o:["0","2/3","3/2","1"],a:0}
],
[
{t:"Divide",q:"(1/2) ÷ (1/4) = ?",o:["2","1/8","1/2","4"],a:0},
{t:"Divide",q:"(1/3) ÷ (2/9) = ?",o:["3/2","2/27","9/6","1/6"],a:0},
{t:"Divide",q:"(2/5) ÷ (4/10) = ?",o:["1","2/5","4/10","1/2"],a:0},
{t:"Divide",q:"(3/4) ÷ (3/4) = ?",o:["1","9/16","3/4","0"],a:0},
{t:"Divide",q:"(1/2) ÷ 2 = ?",o:["1/4","1","1/2","2"],a:0},
{t:"Divide",q:"(−1/2) ÷ (1/2) = ?",o:["−1","1","−1/4","0"],a:0},
{t:"Divide",q:"(5/6) ÷ 5 = ?",o:["1/6","25/6","5","1"],a:0},
{t:"Divide",q:"6 ÷ (2/3) = ?",o:["9","4","3","12"],a:0},
{t:"Divide",q:"(2/3) ÷ (1/3) = ?",o:["2","2/9","1/3","6"],a:0},
{t:"Divide",q:"(1/5) ÷ (1/10) = ?",o:["2","1/50","1/2","5"],a:0}
],
[
{t:"Inverse",q:"Reciprocal of 3/5?",o:["5/3","−3/5","3/−5","15"],a:0},
{t:"Inverse",q:"Reciprocal of 7?",o:["1/7","−7","7","49"],a:0},
{t:"Inverse",q:"Multiplicative inverse of −5/7?",o:["−7/5","7/5","5/7","−5/7"],a:0},
{t:"Inverse",q:"Additive inverse of 2/3?",o:["−2/3","3/2","2/−3","0"],a:0},
{t:"Inverse",q:"Additive inverse of 0?",o:["0","1","Undefined","−1"],a:0},
{t:"Inverse",q:"Reciprocal of 1?",o:["1","−1","0","Undefined"],a:0},
{t:"Inverse",q:"Reciprocal of −1?",o:["−1","1","0","Undefined"],a:0},
{t:"Inverse",q:"Reciprocal of 1/2?",o:["2","1/2","−1/2","0"],a:0},
{t:"Inverse",q:"Does 0 have a reciprocal?",o:["No","Yes","Only in Q","Only if integer"],a:0},
{t:"Inverse",q:"Sum: rational + its additive inverse = ?",o:["0","1","The same rational","Undefined"],a:0}
],
[
{t:"Props",q:"Is addition of rationals commutative?",o:["Yes","No","Only for positives","Only in Z"],a:0},
{t:"Props",q:"Is subtraction commutative?",o:["No","Yes","Only if equal","Sometimes"],a:0},
{t:"Props",q:"Multiplicative identity?",o:["1","0","−1","∞"],a:0},
{t:"Props",q:"Additive identity?",o:["0","1","−1","Q"],a:0},
{t:"Props",q:"Is multiplication associative?",o:["Yes","No","Only with primes","Sometimes"],a:0},
{t:"Props",q:"Is division associative?",o:["No","Yes","Only if equal","Sometimes"],a:0},
{t:"Props",q:"(a+b)+c = a+(b+c)?",o:["Yes (associative)","No","Only commutative","Never"],a:0},
{t:"Props",q:"a × 0 = ?",o:["0","a","1","Undefined"],a:0},
{t:"Props",q:"a × 1 = ?",o:["a","1","0","a²"],a:0},
{t:"Props",q:"a + 0 = ?",o:["a","0","1","2a"],a:0}
],
[
{t:"Word",q:"3/4 of a cake eaten. Left?",o:["1/4","3/4","1/3","1/2"],a:0},
{t:"Word",q:"2 1/2 kg + 1 3/4 kg = ?",o:["4 1/4 kg","3 3/4 kg","4 kg","4 1/2 kg"],a:0},
{t:"Word",q:"1/2 of 40 = ?",o:["20","40","10","30"],a:0},
{t:"Word",q:"3/4 of 100 = ?",o:["75","25","50","100"],a:0},
{t:"Word",q:"Rational between 1/2 and 3/4?",o:["5/8","1","1/3","2"],a:0},
{t:"Word",q:"Average of 1/2 and 1/4?",o:["3/8","1/6","1/3","1/8"],a:0},
{t:"Word",q:"1/3 of class = 10 kids. Total?",o:["30","13","20","40"],a:0},
{t:"Word",q:"Walk 3/4 km + Run 1/2 km = ?",o:["5/4 km","1/4 km","3/8 km","1 km"],a:0},
{t:"Word",q:"Bag 2 3/4 kg + bag 1 1/4 kg = ?",o:["4 kg","3 kg","4 1/2 kg","3 1/2 kg"],a:0},
{t:"Word",q:"Pizza 1/8 per slice; eat 3. Eaten?",o:["3/8","1/8","3/24","2/8"],a:0}
]
]
},
// ─── Grade 8 · Chapter 2 · Linear Equations in One Variable ───
2: { title:'Linear Equations in One Variable',
beginner:[
[
{t:"ID",q:"Which IS an equation: 2x + 3, or 2x + 3 = 5?",o:["2x + 3 = 5","2x + 3","Both","Neither"],a:0},
{t:"ID",q:"An equation must have?",o:["An equal sign","A variable","A constant","A bracket"],a:0},
{t:"ID",q:"'Solve' an equation means?",o:["Find the variable value","Simplify only","Write bigger","Check units"],a:0},
{t:"ID",q:"Variable is usually denoted by?",o:["Letters (x, y)","Only numbers","Only +","Only ="],a:0},
{t:"ID",q:"A constant is?",o:["A fixed number","A variable","An operator","A unit"],a:0},
{t:"ID",q:"Coefficient in 3x?",o:["3","x","3x","1"],a:0},
{t:"ID",q:"In 5y − 2 = 8, constant on LHS?",o:["−2","5","8","y"],a:0},
{t:"ID",q:"LHS / RHS stand for?",o:["Left/Right Hand Side","Long/Right","Left/Round","Low/High"],a:0},
{t:"ID",q:"Balanced equation means?",o:["LHS = RHS","LHS > RHS","LHS < RHS","Either side"],a:0},
{t:"ID",q:"Linear equation: variable is to the power?",o:["1","0","2","3"],a:0}
],
[
{t:"Simple",q:"x + 5 = 10. x = ?",o:["5","15","2","50"],a:0},
{t:"Simple",q:"x − 3 = 7. x = ?",o:["10","4","21","−10"],a:0},
{t:"Simple",q:"2x = 14. x = ?",o:["7","12","28","16"],a:0},
{t:"Simple",q:"x/4 = 3. x = ?",o:["12","7","1","0.75"],a:0},
{t:"Simple",q:"x + 2 = 2. x = ?",o:["0","2","4","−2"],a:0},
{t:"Simple",q:"x − 5 = 0. x = ?",o:["5","−5","0","10"],a:0},
{t:"Simple",q:"3x = 0. x = ?",o:["0","3","1","−3"],a:0},
{t:"Simple",q:"10 − x = 3. x = ?",o:["7","13","−7","3"],a:0},
{t:"Simple",q:"x + 7 = 7. x = ?",o:["0","14","7","−7"],a:0},
{t:"Simple",q:"2x + 1 = 9. x = ?",o:["4","5","8","10"],a:0}
],
[
{t:"Steps",q:"3x + 2 = 11. x = ?",o:["3","4","2","9"],a:0},
{t:"Steps",q:"2x − 5 = 7. x = ?",o:["6","1","12","2"],a:0},
{t:"Steps",q:"5x = 25. x = ?",o:["5","20","30","25"],a:0},
{t:"Steps",q:"x/3 + 2 = 5. x = ?",o:["9","15","1","3"],a:0},
{t:"Steps",q:"4x − 4 = 0. x = ?",o:["1","−1","4","0"],a:0},
{t:"Steps",q:"6x = 18. x = ?",o:["3","12","24","2"],a:0},
{t:"Steps",q:"3x + 6 = 15. x = ?",o:["3","5","9","21"],a:0},
{t:"Steps",q:"2x − 10 = 4. x = ?",o:["7","3","14","−3"],a:0},
{t:"Steps",q:"x + 3x = 20. x = ?",o:["5","4","20","1"],a:0},
{t:"Steps",q:"x − 2x = −5. x = ?",o:["5","−5","10","0"],a:0}
],
[
{t:"Transp",q:"x + 5 = 12. x = ?",o:["7","17","5","12"],a:0},
{t:"Transp",q:"x − 3 = 10. x = ?",o:["13","7","30","3"],a:0},
{t:"Transp",q:"3x = 15. x = ?",o:["5","45","18","12"],a:0},
{t:"Transp",q:"x/2 = 4. x = ?",o:["8","2","6","4"],a:0},
{t:"Transp",q:"2x + 3 = 11. x = ?",o:["4","7","5","8"],a:0},
{t:"Transp",q:"4x − 5 = 11. x = ?",o:["4","2","6","3"],a:0},
{t:"Transp",q:"x + x = 10. x = ?",o:["5","10","0","20"],a:0},
{t:"Transp",q:"3x − x = 8. x = ?",o:["4","2","8","6"],a:0},
{t:"Transp",q:"5x = 10. x = ?",o:["2","50","15","5"],a:0},
{t:"Transp",q:"−3x = 12. x = ?",o:["−4","4","−9","9"],a:0}
],
[
{t:"BothSides",q:"2x + 3 = x + 8. x = ?",o:["5","11","−5","1"],a:0},
{t:"BothSides",q:"3x − 2 = 2x + 3. x = ?",o:["5","1","−5","25"],a:0},
{t:"BothSides",q:"5x = 3x + 10. x = ?",o:["5","2","10","15"],a:0},
{t:"BothSides",q:"4x − 1 = 3x + 2. x = ?",o:["3","1","−3","4"],a:0},
{t:"BothSides",q:"2x + 5 = x + 9. x = ?",o:["4","14","−4","2"],a:0},
{t:"BothSides",q:"7x = 5x + 12. x = ?",o:["6","2","12","7"],a:0},
{t:"BothSides",q:"3x − 2 = x + 4. x = ?",o:["3","6","2","−3"],a:0},
{t:"BothSides",q:"x + 8 = 2x + 3. x = ?",o:["5","11","−5","2"],a:0},
{t:"BothSides",q:"5x − 3 = 2x + 6. x = ?",o:["3","9","1","−3"],a:0},
{t:"BothSides",q:"4x + 2 = 3x + 6. x = ?",o:["4","8","2","1"],a:0}
]
],
pro:[
[
{t:"Word",q:"Two numbers sum = 10. Larger − smaller = 4. Larger?",o:["7","3","5","6"],a:0},
{t:"Word",q:"Son = half of father (40). Son?",o:["20","10","40","15"],a:0},
{t:"Word",q:"Square perimeter = 20 m. Side?",o:["5 m","10 m","4 m","2 m"],a:0},
{t:"Word",q:"3 pens cost ₹60. Each?",o:["₹20","₹30","₹10","₹15"],a:0},
{t:"Word",q:"Number + 5 = 17. Number?",o:["12","22","13","10"],a:0},
{t:"Word",q:"3 × number + 2 = 17. Number?",o:["5","6","4","15"],a:0},
{t:"Word",q:"Twice a number = 16. Number?",o:["8","4","16","32"],a:0},
{t:"Word",q:"4 × number = 20. Number?",o:["5","16","4","24"],a:0},
{t:"Word",q:"15 − number = 6. Number?",o:["9","21","6","3"],a:0},
{t:"Word",q:"Half of a number = 8. Number?",o:["16","4","8","2"],a:0}
],
[
{t:"Frac",q:"x/2 + x/3 = 5. x = ?",o:["6","5","30","10"],a:0},
{t:"Frac",q:"x/4 = 3. x = ?",o:["12","7","4","3"],a:0},
{t:"Frac",q:"2x/5 = 4. x = ?",o:["10","4","8","2"],a:0},
{t:"Frac",q:"x − x/2 = 3. x = ?",o:["6","3","12","1"],a:0},
{t:"Frac",q:"(x + 1)/2 = 4. x = ?",o:["7","9","3","5"],a:0},
{t:"Frac",q:"3x/4 = 6. x = ?",o:["8","2","12","4"],a:0},
{t:"Frac",q:"x/5 + 1 = 3. x = ?",o:["10","2","4","5"],a:0},
{t:"Frac",q:"x/2 + x/4 = 6. x = ?",o:["8","4","12","6"],a:0},
{t:"Frac",q:"(2x − 3)/5 = 1. x = ?",o:["4","2","8","5"],a:0},
{t:"Frac",q:"x/3 = x/6 + 1. x = ?",o:["6","2","3","12"],a:0}
],
[
{t:"Multi",q:"2(x + 3) = 10. x = ?",o:["2","4","5","10"],a:0},
{t:"Multi",q:"3(x − 1) = 9. x = ?",o:["4","3","10","2"],a:0},
{t:"Multi",q:"5(x + 2) = 25. x = ?",o:["3","5","7","23"],a:0},
{t:"Multi",q:"2(3x − 1) = 16. x = ?",o:["3","5","8","2"],a:0},
{t:"Multi",q:"4(x + 1) = 3(x + 3). x = ?",o:["5","4","1","7"],a:0},
{t:"Multi",q:"2(x − 3) = 3(x − 5). x = ?",o:["9","3","5","−3"],a:0},
{t:"Multi",q:"(x+1)+(x+2)+(x+3) = 15. x = ?",o:["3","5","15","4"],a:0},
{t:"Multi",q:"3(x + 2) = 15. x = ?",o:["3","5","9","15"],a:0},
{t:"Multi",q:"7(x − 2) = 21. x = ?",o:["5","3","14","9"],a:0},
{t:"Multi",q:"2(x + 4) = 12. x = ?",o:["2","8","4","6"],a:0}
],
[
{t:"Apply",q:"Rectangle perimeter 30; L = 2 × B. L = ?",o:["10","5","15","8"],a:0},
{t:"Apply",q:"3 consecutive integers sum = 18. Middle?",o:["6","5","7","18"],a:0},
{t:"Apply",q:"5 books @ ₹15 + 5 pens = ₹100. Each pen?",o:["₹5","₹15","₹20","₹10"],a:0},
{t:"Apply",q:"Son = 1/4 of father (40). Son?",o:["10","14","20","8"],a:0},
{t:"Apply",q:"Two numbers differ by 5, sum 21. Larger?",o:["13","8","16","11"],a:0},
{t:"Apply",q:"1/3 of number = 8. Number?",o:["24","11","8","3"],a:0},
{t:"Apply",q:"5 years from now age = 20. Now?",o:["15","25","5","20"],a:0},
{t:"Apply",q:"Boys = 2 × girls; total 30. Girls?",o:["10","20","30","15"],a:0},
{t:"Apply",q:"4 items = ₹60. Each?",o:["₹15","₹240","₹4","₹56"],a:0},
{t:"Apply",q:"5 less than twice a number is 9. Number?",o:["7","2","5","9"],a:0}
],
[
{t:"Adv",q:"3x + 5 = 2x + 10. x = ?",o:["5","15","−5","1"],a:0},
{t:"Adv",q:"5(x − 1) = 3(x + 1). x = ?",o:["4","1","5","8"],a:0},
{t:"Adv",q:"x + 3 = 2x. x = ?",o:["3","−3","1","6"],a:0},
{t:"Adv",q:"2x/3 = 4. x = ?",o:["6","3","2","12"],a:0},
{t:"Adv",q:"(x + 1)/(x − 1) = 2. x = ?",o:["3","1","−3","5"],a:0},
{t:"Adv",q:"x + (x+1) = 11. x = ?",o:["5","6","4","10"],a:0},
{t:"Adv",q:"3(x + 4) − 5 = 22. x = ?",o:["5","3","11","7"],a:0},
{t:"Adv",q:"Sum of 3 consecutive evens = 36. Middle?",o:["12","10","14","6"],a:0},
{t:"Adv",q:"4x − 7 = 2x + 5. x = ?",o:["6","1","−6","3"],a:0},
{t:"Adv",q:"x/2 + 3 = x/3 + 4. x = ?",o:["6","3","12","1"],a:0}
]
]
}},

// ═══════════════════════════════════════════════════════════════
// GRADE 9 · Chapter 1 · Number Systems
// ═══════════════════════════════════════════════════════════════
9: { 1: { title:'Number Systems',
beginner:[
[
{t:"Classify",q:"Natural numbers start from?",o:["1","0","−1","Any number"],a:0},
{t:"Classify",q:"Whole numbers add ___ to the naturals.",o:["0","−1","1/2","Infinity"],a:0},
{t:"Classify",q:"Integers include?",o:["Neg, pos, zero","Only positives","Only zero","Only fractions"],a:0},
{t:"Classify",q:"Is −5 a natural number?",o:["No","Yes","Only in Z","Only if |−5|"],a:0},
{t:"Classify",q:"Is 0 a whole number?",o:["Yes","No","Only in N","Undefined"],a:0},
{t:"Classify",q:"1/2 belongs to which set?",o:["Rational","Natural","Integer","Irrational"],a:0},
{t:"Classify",q:"Is √2 rational?",o:["No","Yes","Sometimes","Only if squared"],a:0},
{t:"Classify",q:"Are all rationals real?",o:["Yes","No","Only positives","Only integers"],a:0},
{t:"Classify",q:"Is every integer rational?",o:["Yes","No","Only positives","Only primes"],a:0},
{t:"Classify",q:"Is every whole number an integer?",o:["Yes","No","Only evens","Only primes"],a:0}
],
[
{t:"RatIrr",q:"0.5 is?",o:["Rational","Irrational","Natural","Neither"],a:0},
{t:"RatIrr",q:"0.333... (repeating) is?",o:["Rational (=1/3)","Irrational","Natural","Whole"],a:0},
{t:"RatIrr",q:"1.414213... (non-repeating) is?",o:["Irrational","Rational","Integer","Natural"],a:0},
{t:"RatIrr",q:"Decimal form of rationals is?",o:["Terminating or recurring","Always terminating","Never terminating","Never recurring"],a:0},
{t:"RatIrr",q:"Decimal form of irrationals is?",o:["Non-terminating, non-repeating","Always terminating","Always repeating","Always whole"],a:0},
{t:"RatIrr",q:"√9 = ?",o:["3","9","±3","4.5"],a:0},
{t:"RatIrr",q:"Which is irrational?",o:["√2","√4","√9","√16"],a:0},
{t:"RatIrr",q:"Is √25 irrational?",o:["No (=5)","Yes","Only 1 root","Undefined"],a:0},
{t:"RatIrr",q:"0.1010010001... (patterned non-repeating) is?",o:["Irrational","Rational","Natural","Integer"],a:0},
{t:"RatIrr",q:"All real numbers are rational or?",o:["Irrational","Complex","Imaginary","Negative"],a:0}
],
[
{t:"Decimals",q:"1/2 decimal?",o:["0.5","0.2","0.25","0.1"],a:0},
{t:"Decimals",q:"1/3 decimal?",o:["0.333...","0.3","0.33","0.03"],a:0},
{t:"Decimals",q:"1/4 decimal?",o:["0.25","0.5","0.4","0.14"],a:0},
{t:"Decimals",q:"1/8 decimal?",o:["0.125","0.18","0.12","0.08"],a:0},
{t:"Decimals",q:"1/10 decimal?",o:["0.1","0.01","0.10","0.001"],a:0},
{t:"Decimals",q:"Is 1/7 terminating?",o:["No","Yes","Only approximately","Only in some cases"],a:0},
{t:"Decimals",q:"1/5 decimal?",o:["0.2","0.15","0.5","0.05"],a:0},
{t:"Decimals",q:"Is 3/4 terminating?",o:["Yes","No","Only approximately","Only sometimes"],a:0},
{t:"Decimals",q:"1/6 decimal?",o:["0.1666...","0.16","0.17","0.6"],a:0},
{t:"Decimals",q:"Is 5/6 terminating?",o:["No","Yes","Only approximately","Only sometimes"],a:0}
],
[
{t:"Roots",q:"√16?",o:["4","8","16","2"],a:0},
{t:"Roots",q:"√49?",o:["7","6","8","49"],a:0},
{t:"Roots",q:"√100?",o:["10","50","100","20"],a:0},
{t:"Roots",q:"√144?",o:["12","10","14","72"],a:0},
{t:"Roots",q:"√0?",o:["0","1","Undefined","Any"],a:0},
{t:"Roots",q:"√1?",o:["1","0","±1","−1"],a:0},
{t:"Roots",q:"√81?",o:["9","8","81","18"],a:0},
{t:"Roots",q:"√64?",o:["8","6","64","16"],a:0},
{t:"Roots",q:"√121?",o:["11","12","10","121"],a:0},
{t:"Roots",q:"(√a)²?",o:["a","√a","a²","Undefined"],a:0}
],
[
{t:"Props",q:"Rationals closed under +?",o:["Yes","No","Only positives","Only primes"],a:0},
{t:"Props",q:"Irrationals closed under +?",o:["No","Yes","Only if equal","Always"],a:0},
{t:"Props",q:"Is π rational?",o:["No","Yes","Only approximately","Only as 22/7"],a:0},
{t:"Props",q:"0 + 1/2 = ?",o:["1/2","0","1","3/2"],a:0},
{t:"Props",q:"1 × √2 = ?",o:["√2","1","2","√3"],a:0},
{t:"Props",q:"Is √2 a real number?",o:["Yes","No","Only approximately","Only in Z"],a:0},
{t:"Props",q:"Is N ⊂ Q?",o:["Yes","No","Only finitely","Sometimes"],a:0},
{t:"Props",q:"Is Q ⊂ R?",o:["Yes","No","Only integers","Sometimes"],a:0},
{t:"Props",q:"Are irrationals ⊂ R?",o:["Yes","No","Only finitely","Sometimes"],a:0},
{t:"Props",q:"2 + √3 is?",o:["Irrational","Rational","Integer","Natural"],a:0}
]
],
pro:[
[
{t:"Surds",q:"√12 = ?",o:["2√3","3√2","6","4√3"],a:0},
{t:"Surds",q:"√8 = ?",o:["2√2","4√2","√8","2"],a:0},
{t:"Surds",q:"√18 = ?",o:["3√2","2√3","6","9√2"],a:0},
{t:"Surds",q:"√50 = ?",o:["5√2","10√5","√50","25√2"],a:0},
{t:"Surds",q:"√75 = ?",o:["5√3","3√5","15","25√3"],a:0},
{t:"Surds",q:"√45 = ?",o:["3√5","5√3","15","9√5"],a:0},
{t:"Surds",q:"√20 = ?",o:["2√5","5√2","10","4√5"],a:0},
{t:"Surds",q:"√32 = ?",o:["4√2","2√4","16","8√2"],a:0},
{t:"Surds",q:"√200 = ?",o:["10√2","2√10","20","100√2"],a:0},
{t:"Surds",q:"√27 = ?",o:["3√3","9√3","√27","27"],a:0}
],
[
{t:"SurdOps",q:"√3 × √12 = ?",o:["6","√36","√15","36"],a:0},
{t:"SurdOps",q:"(√2 + √3)² = ?",o:["5 + 2√6","5","2√6","6 + √5"],a:0},
{t:"SurdOps",q:"(√5 − √2)(√5 + √2) = ?",o:["3","7","√10","25 − 2"],a:0},
{t:"SurdOps",q:"(√7)² = ?",o:["7","49","14","√49"],a:0},
{t:"SurdOps",q:"√18 ÷ √2 = ?",o:["3","9","√9","6"],a:0},
{t:"SurdOps",q:"Sum of two irrationals — always irrational?",o:["No (e.g. √2 + (−√2))","Yes","Only positives","Sometimes"],a:0},
{t:"SurdOps",q:"Non-zero rational × irrational = ?",o:["Irrational","Rational","Zero","Natural"],a:0},
{t:"SurdOps",q:"Rational + irrational = ?",o:["Irrational","Rational","Zero","Natural"],a:0},
{t:"SurdOps",q:"(2√3)² = ?",o:["12","6","4√3","18"],a:0},
{t:"SurdOps",q:"√2 × √8 = ?",o:["4","2","16","√10"],a:0}
],
[
{t:"Ration",q:"Rationalize 1/√2?",o:["√2/2","2/√2","1/2","√2/1"],a:0},
{t:"Ration",q:"Rationalize 1/√3?",o:["√3/3","3/√3","1/3","√3"],a:0},
{t:"Ration",q:"Rationalize 1/(√3 − 1)?",o:["(√3+1)/2","(√3−1)/2","√3+1","2(√3+1)"],a:0},
{t:"Ration",q:"Rationalize 2/√5?",o:["2√5/5","5/2√5","√5","2/5"],a:0},
{t:"Ration",q:"Rationalize 1/(√2+1)?",o:["√2−1","√2+1","1/(√2−1)","1/(√2+1)"],a:0},
{t:"Ration",q:"Rationalize 3/√2?",o:["3√2/2","2/3√2","√6","3/2"],a:0},
{t:"Ration",q:"Rationalize 1/(3+√2)?",o:["(3−√2)/7","(3+√2)/7","3−√2","(3−√2)/11"],a:0},
{t:"Ration",q:"Rationalize 5/√7?",o:["5√7/7","7/5√7","√35","5/7"],a:0},
{t:"Ration",q:"Rationalize √3/√5?",o:["√15/5","5/√15","√15","3/5"],a:0},
{t:"Ration",q:"Conjugate of √a + √b?",o:["√a − √b","√a + √b","−√a − √b","√a · √b"],a:0}
],
[
{t:"Exp",q:"aᵐ × aⁿ = ?",o:["a^(m+n)","a^(mn)","a^(m−n)","a^m + a^n"],a:0},
{t:"Exp",q:"aᵐ ÷ aⁿ = ?",o:["a^(m−n)","a^(m/n)","a^(mn)","a^(m+n)"],a:0},
{t:"Exp",q:"(aᵐ)ⁿ = ?",o:["a^(mn)","a^(m+n)","a^(m−n)","a^m·n"],a:0},
{t:"Exp",q:"a⁰ (a ≠ 0) = ?",o:["1","0","a","Undefined"],a:0},
{t:"Exp",q:"2³ × 2² = ?",o:["32","16","64","10"],a:0},
{t:"Exp",q:"5⁴ ÷ 5² = ?",o:["25","625","10","20"],a:0},
{t:"Exp",q:"(3²)³ = ?",o:["729","243","27","81"],a:0},
{t:"Exp",q:"a^(1/2) × a^(1/2) = ?",o:["a","a²","√a","1"],a:0},
{t:"Exp",q:"(√2)⁴ = ?",o:["4","2","8","16"],a:0},
{t:"Exp",q:"2⁵ = ?",o:["32","16","64","25"],a:0}
],
[
{t:"Compute",q:"√2 + √2 = ?",o:["2√2","√4","2","4"],a:0},
{t:"Compute",q:"3√2 + 2√2 = ?",o:["5√2","6√2","√10","5"],a:0},
{t:"Compute",q:"√2 − √2 = ?",o:["0","√0","√4","2"],a:0},
{t:"Compute",q:"(1+√2)(1−√2) = ?",o:["−1","1","√2","0"],a:0},
{t:"Compute",q:"(√5)² + (√3)² = ?",o:["8","√8","√15","15"],a:0},
{t:"Compute",q:"5⁻¹ = ?",o:["1/5","−5","5","−1/5"],a:0},
{t:"Compute",q:"2⁻³ = ?",o:["1/8","−8","−1/8","6"],a:0},
{t:"Compute",q:"(1/2)⁻² = ?",o:["4","1/4","−4","2"],a:0},
{t:"Compute",q:"4^(1/2) = ?",o:["2","4","1/2","16"],a:0},
{t:"Compute",q:"27^(1/3) = ?",o:["3","9","27","1/3"],a:0}
]
]
},
// ─── Grade 9 · Chapter 2 · Polynomials ───
2: { title:'Polynomials',
beginner:[
[
{t:"Def",q:"In a polynomial, powers of the variable must be?",o:["Whole numbers (non-negative integers)","Any real number","Negative","Fractional"],a:0},
{t:"Def",q:"Is x² + 3x − 1 a polynomial?",o:["Yes","No","Only in Q","Only in Z"],a:0},
{t:"Def",q:"Is 1/x a polynomial?",o:["No (negative power)","Yes","Only in R","Sometimes"],a:0},
{t:"Def",q:"Is x^(1/2) a polynomial?",o:["No (fractional power)","Yes","Only if squared","Only in N"],a:0},
{t:"Def",q:"Is 5 a polynomial?",o:["Yes (constant)","No","Only in Q","Only if added"],a:0},
{t:"Def",q:"Highest power of a polynomial = ?",o:["Degree","Coefficient","Constant","Term count"],a:0},
{t:"Def",q:"Degree of 3x⁴ + 2x − 1?",o:["4","3","1","5"],a:0},
{t:"Def",q:"Linear polynomial degree?",o:["1","0","2","3"],a:0},
{t:"Def",q:"Quadratic polynomial degree?",o:["2","1","3","0"],a:0},
{t:"Def",q:"Cubic polynomial degree?",o:["3","2","1","4"],a:0}
],
[
{t:"Types",q:"Zero polynomial?",o:["0 (no defined degree)","x","1","No such thing"],a:0},
{t:"Types",q:"Example of constant polynomial?",o:["5","x","x+1","x²"],a:0},
{t:"Types",q:"Example of linear polynomial?",o:["2x + 1","x²","5","x³"],a:0},
{t:"Types",q:"Example of quadratic polynomial?",o:["x² + 2x + 1","x + 1","5","x³ + 1"],a:0},
{t:"Types",q:"Example of cubic polynomial?",o:["x³ + 1","x² + 1","x + 1","5"],a:0},
{t:"Types",q:"Degree of 7?",o:["0","1","7","undefined"],a:0},
{t:"Types",q:"Degree of 3x + 1?",o:["1","0","3","2"],a:0},
{t:"Types",q:"Degree of x² + 1?",o:["2","1","0","3"],a:0},
{t:"Types",q:"Degree of 5x³?",o:["3","5","0","15"],a:0},
{t:"Types",q:"Degree of 2x⁴ + 3x² + 1?",o:["4","2","3","5"],a:0}
],
[
{t:"Coef",q:"Coefficient of x in 3x + 2?",o:["3","2","1","x"],a:0},
{t:"Coef",q:"Coefficient of x² in 5x² − 2x + 1?",o:["5","−2","1","2"],a:0},
{t:"Coef",q:"Constant in 3x + 4?",o:["4","3","1","x"],a:0},
{t:"Coef",q:"Coefficient of x³ in 2x³?",o:["2","3","1","6"],a:0},
{t:"Coef",q:"Coefficient of x in 7 − x + 2x²?",o:["−1","1","2","7"],a:0},
{t:"Coef",q:"Coefficient of x² in 1 + x + x²?",o:["1","0","2","−1"],a:0},
{t:"Coef",q:"Constant in −3x + 2?",o:["2","−3","0","3"],a:0},
{t:"Coef",q:"Coefficient of x⁰ means?",o:["Constant term","Degree","x coefficient","Zero"],a:0},
{t:"Coef",q:"In −4x + 1, coefficient of x?",o:["−4","4","1","−1"],a:0},
{t:"Coef",q:"Coefficient of x in just '5'?",o:["0","5","1","undefined"],a:0}
],
[
{t:"Value",q:"p(x)=x+1. p(2)=?",o:["3","2","1","0"],a:0},
{t:"Value",q:"p(x)=2x. p(3)=?",o:["6","5","3","9"],a:0},
{t:"Value",q:"p(x)=x²+1. p(1)=?",o:["2","1","3","0"],a:0},
{t:"Value",q:"p(x)=x²−2x+1. p(1)=?",o:["0","1","−1","2"],a:0},
{t:"Value",q:"p(x)=3x. p(0)=?",o:["0","3","1","undefined"],a:0},
{t:"Value",q:"p(x)=x²−4. p(2)=?",o:["0","8","4","−4"],a:0},
{t:"Value",q:"p(x)=5. p(100)=?",o:["5","100","500","105"],a:0},
{t:"Value",q:"p(x)=x−3. p(5)=?",o:["2","8","−2","15"],a:0},
{t:"Value",q:"p(x)=2x²+1. p(−1)=?",o:["3","−1","1","−3"],a:0},
{t:"Value",q:"p(x)=x²+x+1. p(0)=?",o:["1","0","2","3"],a:0}
],
[
{t:"Zeros",q:"p(x)=x−2. Zero?",o:["2","−2","1","0"],a:0},
{t:"Zeros",q:"p(x)=x+3. Zero?",o:["−3","3","1","0"],a:0},
{t:"Zeros",q:"p(x)=2x−4. Zero?",o:["2","−2","4","0"],a:0},
{t:"Zeros",q:"p(x)=3x. Zero?",o:["0","3","1","−3"],a:0},
{t:"Zeros",q:"p(x)=x−5. Zero?",o:["5","−5","1","0"],a:0},
{t:"Zeros",q:"p(x)=x+7. Zero?",o:["−7","7","1","0"],a:0},
{t:"Zeros",q:"p(x)=x²−4. Zeros?",o:["±2","±4","2 only","−2 only"],a:0},
{t:"Zeros",q:"p(x)=x²−9. Zeros?",o:["±3","±9","3 only","−3 only"],a:0},
{t:"Zeros",q:"p(x)=(x−1)(x−2). Zeros?",o:["1, 2","−1, −2","1 only","2 only"],a:0},
{t:"Zeros",q:"p(x)=x²−x. Zeros?",o:["0, 1","0, −1","1, −1","1 only"],a:0}
]
],
pro:[
[
{t:"Remainder",q:"p(x)=x²+1. Remainder by (x−2)?",o:["5","0","1","4"],a:0},
{t:"Remainder",q:"p(x)=x³. Remainder by (x−1)?",o:["1","0","3","−1"],a:0},
{t:"Remainder",q:"p(x)=x²−4. Remainder by (x−2)?",o:["0","4","2","−4"],a:0},
{t:"Remainder",q:"p(x)=2x+3. Remainder by (x−1)?",o:["5","3","1","2"],a:0},
{t:"Remainder",q:"p(x)=x²+x+1. By (x+1)?",o:["1","3","0","−1"],a:0},
{t:"Remainder",q:"p(x)=x³−1. By (x−1)?",o:["0","1","−1","2"],a:0},
{t:"Remainder",q:"p(x)=x³+1. By (x+1)?",o:["0","2","1","−1"],a:0},
{t:"Remainder",q:"p(x)=x²−x. By (x+2)?",o:["6","2","4","−2"],a:0},
{t:"Remainder",q:"p(x)=5. By (x−3)?",o:["5","0","3","15"],a:0},
{t:"Remainder",q:"p(x)=x+5. By (x+5)?",o:["0","10","5","−5"],a:0}
],
[
{t:"Factor",q:"Factor theorem: (x−a) is a factor iff?",o:["p(a)=0","p(a)=1","p(a)=a","p(a)=∞"],a:0},
{t:"Factor",q:"Is (x−1) a factor of x²−1?",o:["Yes","No","Only if squared","Sometimes"],a:0},
{t:"Factor",q:"Is (x+2) a factor of x²−4?",o:["Yes","No","Only in Z","Only in N"],a:0},
{t:"Factor",q:"Is (x−3) a factor of x²+3?",o:["No","Yes","Only in R","Sometimes"],a:0},
{t:"Factor",q:"Is (x+1) a factor of x³+1?",o:["Yes","No","Only in Q","Only if doubled"],a:0},
{t:"Factor",q:"Is (x−2) a factor of x²−5x+6?",o:["Yes","No","Only if squared","Only in Z"],a:0},
{t:"Factor",q:"Is (x+1) a factor of x²−1?",o:["Yes","No","Only if squared","Sometimes"],a:0},
{t:"Factor",q:"Is (x−1) a factor of x²+1?",o:["No","Yes","Only in R","Sometimes"],a:0},
{t:"Factor",q:"Factor of x²−9: (x−3) or (x−4)?",o:["(x−3)","(x−4)","Both","Neither"],a:0},
{t:"Factor",q:"Factor of x²+5x+6: (x+2) or (x−2)?",o:["(x+2)","(x−2)","Both","Neither"],a:0}
],
[
{t:"Fact",q:"x²−4 = ?",o:["(x−2)(x+2)","(x−4)(x+1)","(x−2)²","(x+2)²"],a:0},
{t:"Fact",q:"x²−9 = ?",o:["(x−3)(x+3)","(x−9)(x+1)","(x−3)²","(x+3)²"],a:0},
{t:"Fact",q:"x²+5x+6 = ?",o:["(x+2)(x+3)","(x−2)(x−3)","(x+1)(x+6)","(x+5)(x+1)"],a:0},
{t:"Fact",q:"x²−5x+6 = ?",o:["(x−2)(x−3)","(x+2)(x+3)","(x−1)(x−6)","(x−5)(x−1)"],a:0},
{t:"Fact",q:"x²+7x+12 = ?",o:["(x+3)(x+4)","(x+2)(x+6)","(x−3)(x−4)","(x+7)(x+1)"],a:0},
{t:"Fact",q:"x²−7x+12 = ?",o:["(x−3)(x−4)","(x+3)(x+4)","(x−2)(x−6)","(x−7)(x−1)"],a:0},
{t:"Fact",q:"x²−1 = ?",o:["(x−1)(x+1)","(x−1)²","(x+1)²","x(x−1)"],a:0},
{t:"Fact",q:"x²+6x+9 = ?",o:["(x+3)²","(x−3)²","(x+9)(x−1)","(x+6)(x+3)"],a:0},
{t:"Fact",q:"x²−6x+9 = ?",o:["(x−3)²","(x+3)²","(x−9)(x+1)","(x−6)(x−3)"],a:0},
{t:"Fact",q:"x²+2x+1 = ?",o:["(x+1)²","(x−1)²","(x+2)(x+1)","(x+2)²"],a:0}
],
[
{t:"Idents",q:"(a+b)² = ?",o:["a² + 2ab + b²","a² − 2ab + b²","a² + b²","a² + ab + b²"],a:0},
{t:"Idents",q:"(a−b)² = ?",o:["a² − 2ab + b²","a² + 2ab + b²","a² − b²","a² − ab + b²"],a:0},
{t:"Idents",q:"(a+b)(a−b) = ?",o:["a² − b²","a² + b²","(a−b)²","(a+b)²"],a:0},
{t:"Idents",q:"(x+y)² at x=1, y=2?",o:["9","5","7","3"],a:0},
{t:"Idents",q:"(x+2)² = ?",o:["x² + 4x + 4","x² + 2x + 4","x² + 4","x² − 4x + 4"],a:0},
{t:"Idents",q:"(x−3)² = ?",o:["x² − 6x + 9","x² + 6x + 9","x² − 9","x² − 3x + 9"],a:0},
{t:"Idents",q:"(x+1)(x−1) = ?",o:["x² − 1","x² + 1","x² − 2x + 1","x² + 2x + 1"],a:0},
{t:"Idents",q:"(a+b)³ = ?",o:["a³ + 3a²b + 3ab² + b³","a³ + b³","a³ − b³","a³ + 3ab + b³"],a:0},
{t:"Idents",q:"(a−b)³ = ?",o:["a³ − 3a²b + 3ab² − b³","a³ − b³","a³ + b³","a³ − 3ab + b³"],a:0},
{t:"Idents",q:"a³ + b³ = ?",o:["(a+b)(a² − ab + b²)","(a−b)(a² + ab + b²)","(a+b)³","a³ + b³ (doesn't factor)"],a:0}
],
[
{t:"Div",q:"Divide x²+2x+1 by x+1. Quotient?",o:["x + 1","x − 1","x + 2","x²"],a:0},
{t:"Div",q:"Remainder above?",o:["0","1","2","x"],a:0},
{t:"Div",q:"Divide x²−4 by x+2. Q?",o:["x − 2","x + 2","x² − 4","x"],a:0},
{t:"Div",q:"Remainder above?",o:["0","4","−4","2"],a:0},
{t:"Div",q:"Divide x²+3x+2 by x+1. Q?",o:["x + 2","x + 1","x + 3","x"],a:0},
{t:"Div",q:"Degree of x² ÷ x quotient?",o:["1","2","0","3"],a:0},
{t:"Div",q:"Polynomial exactly divisible — remainder?",o:["0","1","dividend","divisor"],a:0},
{t:"Div",q:"Dividend = Divisor × Q + R. In 10÷3?",o:["10 = 3×3 + 1","10 = 3×2 + 4","10 = 3×4 − 2","10 = 3×3 + 0"],a:0},
{t:"Div",q:"Divide x³ by x. Q?",o:["x²","x","x³","1"],a:0},
{t:"Div",q:"Degree 3 polynomial ÷ degree 1 → Q degree?",o:["2","3","1","0"],a:0}
]
]
}},

// ═══════════════════════════════════════════════════════════════
// GRADE 10 · Chapter 1 · Real Numbers
// ═══════════════════════════════════════════════════════════════
10: { 1: { title:'Real Numbers',
beginner:[
[
{t:"HCF",q:"HCF(12, 18)?",o:["6","3","12","18"],a:0},
{t:"HCF",q:"HCF(25, 30)?",o:["5","10","25","15"],a:0},
{t:"HCF",q:"HCF(4, 8)?",o:["4","8","2","1"],a:0},
{t:"HCF",q:"HCF(15, 10)?",o:["5","10","15","3"],a:0},
{t:"HCF",q:"HCF of two coprime numbers?",o:["1","0","Product","Sum"],a:0},
{t:"HCF",q:"HCF(48, 18)?",o:["6","12","3","48"],a:0},
{t:"HCF",q:"HCF(1, 100)?",o:["1","100","10","50"],a:0},
{t:"HCF",q:"HCF(21, 14)?",o:["7","14","3","21"],a:0},
{t:"HCF",q:"HCF(2, 3)?",o:["1","2","3","6"],a:0},
{t:"HCF",q:"HCF(100, 25)?",o:["25","5","100","10"],a:0}
],
[
{t:"LCM",q:"LCM(4, 6)?",o:["12","24","6","4"],a:0},
{t:"LCM",q:"LCM(9, 12)?",o:["36","108","18","12"],a:0},
{t:"LCM",q:"LCM(2, 3)?",o:["6","5","2","3"],a:0},
{t:"LCM",q:"LCM(8, 12)?",o:["24","96","8","12"],a:0},
{t:"LCM",q:"LCM(10, 15)?",o:["30","150","10","15"],a:0},
{t:"LCM",q:"LCM(5, 7)?",o:["35","12","5","7"],a:0},
{t:"LCM",q:"LCM(2, 4)?",o:["4","8","2","6"],a:0},
{t:"LCM",q:"LCM(3, 5)?",o:["15","8","3","5"],a:0},
{t:"LCM",q:"LCM(6, 9)?",o:["18","54","6","3"],a:0},
{t:"LCM",q:"LCM(7, 14)?",o:["14","98","7","21"],a:0}
],
[
{t:"Rel",q:"LCM × HCF = ?",o:["Product of numbers","Sum","Difference","Quotient"],a:0},
{t:"Rel",q:"12, 18: HCF=6. LCM?",o:["36","108","12","18"],a:0},
{t:"Rel",q:"15, 25: HCF=5. LCM?",o:["75","375","25","15"],a:0},
{t:"Rel",q:"8, 12: HCF=4, LCM=24. Product 8×12?",o:["96","100","24","48"],a:0},
{t:"Rel",q:"HCF=6, LCM=60. Product of numbers?",o:["360","60","6","120"],a:0},
{t:"Rel",q:"20, 30: HCF?",o:["10","5","60","20"],a:0},
{t:"Rel",q:"20, 30: LCM?",o:["60","600","30","20"],a:0},
{t:"Rel",q:"LCM(4,5) × HCF(4,5)?",o:["20","9","1","40"],a:0},
{t:"Rel",q:"HCF(a,b)=1 and a·b=35. LCM?",o:["35","1","70","7"],a:0},
{t:"Rel",q:"12, 18: LCM?",o:["36","72","12","18"],a:0}
],
[
{t:"Euclid",q:"Euclid: a = bq + r, r satisfies?",o:["0 ≤ r < b","0 < r < b","r = 0","r > b"],a:0},
{t:"Euclid",q:"48 = 2·18 + 12, then HCF(18, 12) = ?",o:["6","12","2","18"],a:0},
{t:"Euclid",q:"Every integer >1 is a unique product of?",o:["Primes","Composites","Squares","Evens"],a:0},
{t:"Euclid",q:"Smallest prime?",o:["2","1","3","5"],a:0},
{t:"Euclid",q:"Primes < 10: 2, 3, 5, ?",o:["7","9","6","10"],a:0},
{t:"Euclid",q:"Is 1 a prime?",o:["No","Yes","Only in N","Sometimes"],a:0},
{t:"Euclid",q:"Coprime numbers have HCF?",o:["1","0","Product","Sum"],a:0},
{t:"Euclid",q:"HCF(100, 75) via Euclid?",o:["25","50","5","75"],a:0},
{t:"Euclid",q:"HCF(36, 24)?",o:["12","6","24","36"],a:0},
{t:"Euclid",q:"HCF(60, 48)?",o:["12","6","48","60"],a:0}
],
[
{t:"PrimeFac",q:"Prime factors of 60?",o:["2²×3×5","2×30","6×10","4×15"],a:0},
{t:"PrimeFac",q:"Prime factors of 100?",o:["2²×5²","10²","2×5²","4×25"],a:0},
{t:"PrimeFac",q:"Prime factors of 36?",o:["2²×3²","6²","4×9","2³×3"],a:0},
{t:"PrimeFac",q:"Prime factors of 18?",o:["2×3²","9×2","3×6","2²×3"],a:0},
{t:"PrimeFac",q:"Prime factors of 24?",o:["2³×3","4×6","2²×6","8×3"],a:0},
{t:"PrimeFac",q:"Prime factors of 45?",o:["3²×5","9×5","5×9","3×15"],a:0},
{t:"PrimeFac",q:"Prime factors of 50?",o:["2×5²","10×5","2²×5","25×2"],a:0},
{t:"PrimeFac",q:"Prime factors of 72?",o:["2³×3²","8×9","2²×3²","4×18"],a:0},
{t:"PrimeFac",q:"Prime factors of 81?",o:["3⁴","9²","27×3","3³"],a:0},
{t:"PrimeFac",q:"Prime factors of 90?",o:["2×3²×5","9×10","2×45","6×15"],a:0}
]
],
pro:[
[
{t:"Irrat",q:"Is √2 rational or irrational?",o:["Irrational","Rational","Both","Neither"],a:0},
{t:"Irrat",q:"Proof √2 is irrational uses?",o:["Contradiction","Induction","Direct proof","Construction"],a:0},
{t:"Irrat",q:"Sum rational + irrational = ?",o:["Irrational","Rational","Natural","Zero"],a:0},
{t:"Irrat",q:"Is 2+√3 rational?",o:["Irrational","Rational","Both","Zero"],a:0},
{t:"Irrat",q:"Square of any odd integer is?",o:["Odd","Even","Zero","Prime"],a:0},
{t:"Irrat",q:"If prime p | a², then p | ?",o:["a","a+1","a²","1"],a:0},
{t:"Irrat",q:"Product of two irrationals can be?",o:["Rational or irrational","Always rational","Always irrational","Always zero"],a:0},
{t:"Irrat",q:"Is √2 × √8 rational?",o:["Yes (=4)","No","Only if reduced","Irrational"],a:0},
{t:"Irrat",q:"Is π rational?",o:["No","Yes","Only as 22/7","Only approximately"],a:0},
{t:"Irrat",q:"Is 22/7 irrational?",o:["No (rational)","Yes","Only approximately","Sometimes"],a:0}
],
[
{t:"DecExp",q:"Decimal form of 3/8?",o:["0.375 (terminating)","0.3","0.38","Non-terminating"],a:0},
{t:"DecExp",q:"Decimal form of 1/7?",o:["Non-terminating recurring","Terminating","Irrational","0.14"],a:0},
{t:"DecExp",q:"Fraction terminates iff denominator (lowest form) has only?",o:["2 and/or 5","Only 3","Only 7","Any prime"],a:0},
{t:"DecExp",q:"Does 1/6 terminate?",o:["No","Yes","Only approximately","Sometimes"],a:0},
{t:"DecExp",q:"Does 7/20 terminate?",o:["Yes","No","Only approximately","Sometimes"],a:0},
{t:"DecExp",q:"0.25 as fraction?",o:["1/4","25/100","2/5","1/25"],a:0},
{t:"DecExp",q:"0.333... as fraction?",o:["1/3","3/10","1/30","3/100"],a:0},
{t:"DecExp",q:"0.75 as fraction?",o:["3/4","7/5","75/10","3/5"],a:0},
{t:"DecExp",q:"Digits in recurring block of 1/7?",o:["6","3","1","7"],a:0},
{t:"DecExp",q:"Terminating decimal is always?",o:["Rational","Irrational","Integer","Natural"],a:0}
],
[
{t:"AdvHCF",q:"HCF(336, 240)?",o:["48","24","12","96"],a:0},
{t:"AdvHCF",q:"LCM(336, 240)?",o:["1680","6720","336","240"],a:0},
{t:"AdvHCF",q:"HCF(867, 255)?",o:["51","17","3","255"],a:0},
{t:"AdvHCF",q:"LCM(867, 255)?",o:["4335","12990","867","255"],a:0},
{t:"AdvHCF",q:"HCF(135, 225)?",o:["45","15","9","225"],a:0},
{t:"AdvHCF",q:"LCM(135, 225)?",o:["675","3375","225","1350"],a:0},
{t:"AdvHCF",q:"HCF(4052, 12576)?",o:["4","2","8","12"],a:0},
{t:"AdvHCF",q:"LCM(52, 130)?",o:["260","520","130","100"],a:0},
{t:"AdvHCF",q:"HCF(6, 35)?",o:["1","2","5","7"],a:0},
{t:"AdvHCF",q:"LCM(8, 9, 25)?",o:["1800","200","100","225"],a:0}
],
[
{t:"FTA",q:"Fundamental Theorem: every integer >1 is a?",o:["Unique product of primes","Product of squares","Sum of primes","Unique sum"],a:0},
{t:"FTA",q:"Prime factorization of 1000?",o:["2³×5³","10³","2×500","4×250"],a:0},
{t:"FTA",q:"Factor 225?",o:["3²×5²","15²","9×25","3×75"],a:0},
{t:"FTA",q:"Factor 1024?",o:["2¹⁰","4⁵","2⁵×2⁵","32²"],a:0},
{t:"FTA",q:"Factor 729?",o:["3⁶","27²","9³","3³"],a:0},
{t:"FTA",q:"Smallest number divisible by 2, 3, 5, 7?",o:["210","42","105","30"],a:0},
{t:"FTA",q:"Numbers with same prime factorization are?",o:["Equal","Coprime","Different","Unrelated"],a:0},
{t:"FTA",q:"If a = 2³ × 3² × 5, does 5 | a?",o:["Yes","No","Only approximately","Only if squared"],a:0},
{t:"FTA",q:"Is 11 prime?",o:["Yes","No","Only in Z","Sometimes"],a:0},
{t:"FTA",q:"Prime factors of 77?",o:["7×11","1×77","7+11","77"],a:0}
],
[
{t:"Word",q:"Two drums 850 L and 680 L. Max same vessel to measure both?",o:["HCF = 170","LCM = 3400","680","850"],a:0},
{t:"Word",q:"Buses every 12, 18, 24 min. Meet every?",o:["LCM = 72 min","HCF = 6 min","12 min","36 min"],a:0},
{t:"Word",q:"Dodecagon (12-sided) and pentagon (5-sided) match at step?",o:["LCM(12,5) = 60","HCF = 1","12","5"],a:0},
{t:"Word",q:"HCF = 13, LCM = 182. One number is 26. Other?",o:["91","13","182","14"],a:0},
{t:"Word",q:"Classes 40 and 32 students. Max equal groups?",o:["HCF = 8","LCM = 160","40","32"],a:0},
{t:"Word",q:"Cyclists 48 and 60 km/h meet at common km?",o:["LCM = 240","HCF = 12","60","48"],a:0},
{t:"Word",q:"Tiles 20, 30, 45 cm. Min room length?",o:["LCM = 180 cm","HCF = 5 cm","90 cm","360 cm"],a:0},
{t:"Word",q:"Largest no. dividing 245 & 1029 with rem 5?",o:["HCF(240,1024) = 16","HCF(245,1029)","12","8"],a:0},
{t:"Word",q:"Coprime numbers 13 and 17. LCM?",o:["221","1","13","17"],a:0},
{t:"Word",q:"Classes every 18 and 24 min meet at?",o:["LCM = 72 min","HCF = 6 min","18 min","24 min"],a:0}
]
]
},
// ─── Grade 10 · Chapter 2 · Polynomials ───
2: { title:'Polynomials',
beginner:[
[
{t:"Zeros",q:"Zero of linear p(x)=ax+b?",o:["−b/a","b/a","a/b","−a/b"],a:0},
{t:"Zeros",q:"Zero of 2x + 6?",o:["−3","3","−6","6"],a:0},
{t:"Zeros",q:"Zero of x − 5?",o:["5","−5","0","1"],a:0},
{t:"Zeros",q:"Linear polynomial has how many zeros?",o:["1","0","2","Infinite"],a:0},
{t:"Zeros",q:"Quadratic polynomial has at most?",o:["2 zeros","1 zero","3 zeros","0 zeros"],a:0},
{t:"Zeros",q:"Cubic polynomial has at most?",o:["3 zeros","2 zeros","1 zero","4 zeros"],a:0},
{t:"Zeros",q:"If p(2)=0, then 2 is a?",o:["Zero of p","Constant","Degree","Coefficient"],a:0},
{t:"Zeros",q:"Zeros of x² + 2x − 3?",o:["1, −3","−1, 3","3, −3","1, 3"],a:0},
{t:"Zeros",q:"Zeros of x² − 9?",o:["±3","±9","3 only","−3 only"],a:0},
{t:"Zeros",q:"Zeros of x² + 1 (real)?",o:["None (complex)","±1","0","±i"],a:0}
],
[
{t:"QuadZeros",q:"Zeros of x² − 4?",o:["±2","±4","2 only","−2 only"],a:0},
{t:"QuadZeros",q:"Zeros of x² − 25?",o:["±5","±25","5 only","−5 only"],a:0},
{t:"QuadZeros",q:"Zeros of x² − 5x + 6?",o:["2, 3","−2, −3","1, 6","3, −2"],a:0},
{t:"QuadZeros",q:"Zeros of x² + 5x + 6?",o:["−2, −3","2, 3","−6, 1","1, 6"],a:0},
{t:"QuadZeros",q:"Zeros of x² − 7x + 12?",o:["3, 4","−3, −4","2, 6","1, 12"],a:0},
{t:"QuadZeros",q:"Zeros of x(x − 7)?",o:["0, 7","−7, 0","7 only","0 only"],a:0},
{t:"QuadZeros",q:"Zeros of (x−1)(x+1)?",o:["±1","±2","1 only","−1 only"],a:0},
{t:"QuadZeros",q:"Zeros of x² − 8x + 15?",o:["3, 5","−3, −5","1, 15","2, 4"],a:0},
{t:"QuadZeros",q:"Zeros of x² + x − 6?",o:["2, −3","−2, 3","3, −2","−3, 2"],a:0},
{t:"QuadZeros",q:"Zeros of x² + 3x − 10?",o:["2, −5","−2, 5","5, −2","2, 5"],a:0}
],
[
{t:"SumProd",q:"For ax² + bx + c, sum of zeros = ?",o:["−b/a","b/a","c/a","a/c"],a:0},
{t:"SumProd",q:"Product of zeros for ax²+bx+c = ?",o:["c/a","−c/a","b/a","a/c"],a:0},
{t:"SumProd",q:"Sum of zeros of x² − 5x + 6?",o:["5","−5","6","−6"],a:0},
{t:"SumProd",q:"Product of zeros of x² − 5x + 6?",o:["6","−6","5","−5"],a:0},
{t:"SumProd",q:"Sum of zeros of x² + 3x + 2?",o:["−3","3","2","−2"],a:0},
{t:"SumProd",q:"Product of zeros of x² + 3x + 2?",o:["2","−2","3","−3"],a:0},
{t:"SumProd",q:"Sum of zeros of 2x² − 4x + 1?",o:["2","−2","1/2","−1/2"],a:0},
{t:"SumProd",q:"Product of zeros of 2x² − 4x + 1?",o:["1/2","−1/2","2","−2"],a:0},
{t:"SumProd",q:"Sum of zeros of x² − 1?",o:["0","1","−1","2"],a:0},
{t:"SumProd",q:"Product of zeros of x² − 1?",o:["−1","1","0","2"],a:0}
],
[
{t:"Construct",q:"Quadratic with zeros 3 and −2?",o:["x² − x − 6","x² + x − 6","x² − x + 6","x² + x + 6"],a:0},
{t:"Construct",q:"Quadratic with zeros 1 and 4?",o:["x² − 5x + 4","x² + 5x + 4","x² − 4x + 1","x² − 3x + 4"],a:0},
{t:"Construct",q:"Quadratic with zeros 0 and 5?",o:["x² − 5x","x² + 5x","x² − 5","x² − 5x + 5"],a:0},
{t:"Construct",q:"Quadratic with zeros ±2?",o:["x² − 4","x² + 4","x² − 2x","x² − 2"],a:0},
{t:"Construct",q:"Quadratic with zeros −1 and −3?",o:["x² + 4x + 3","x² − 4x + 3","x² + 4x − 3","x² − 4x − 3"],a:0},
{t:"Construct",q:"Sum 5, product 6. Equation?",o:["x² − 5x + 6","x² + 5x + 6","x² − 6x + 5","x² + 6x + 5"],a:0},
{t:"Construct",q:"Sum 3, product 2. Equation?",o:["x² − 3x + 2","x² + 3x + 2","x² − 2x + 3","x² + 2x − 3"],a:0},
{t:"Construct",q:"Sum −4, product 3. Equation?",o:["x² + 4x + 3","x² − 4x + 3","x² + 4x − 3","x² − 4x − 3"],a:0},
{t:"Construct",q:"Zeros ±3. Equation?",o:["x² − 9","x² + 9","x² − 3","x² + 3"],a:0},
{t:"Construct",q:"Zeros 0 and 1. Equation?",o:["x² − x","x² + x","x² − 1","x² − x + 1"],a:0}
],
[
{t:"Kinds",q:"p(x) = 3 is?",o:["Constant (degree 0)","Linear","Quadratic","Zero"],a:0},
{t:"Kinds",q:"p(x) = 2x + 1 is?",o:["Linear","Constant","Quadratic","Cubic"],a:0},
{t:"Kinds",q:"p(x) = x² + 1 is?",o:["Quadratic","Linear","Cubic","Constant"],a:0},
{t:"Kinds",q:"p(x) = x³ + x is?",o:["Cubic","Quadratic","Linear","Biquadratic"],a:0},
{t:"Kinds",q:"p(x) = x⁴ + 2 is?",o:["Biquadratic (degree 4)","Cubic","Quadratic","Quintic"],a:0},
{t:"Kinds",q:"Degree of zero polynomial?",o:["Undefined (convention 0)","1","∞","−1"],a:0},
{t:"Kinds",q:"Is p(x) = 5x linear?",o:["Yes","No","Constant","Quadratic"],a:0},
{t:"Kinds",q:"Standard form writes polynomial in?",o:["Decreasing powers","Increasing powers","Alphabetical","Random"],a:0},
{t:"Kinds",q:"Polynomial degree = degree of highest term. True?",o:["True","False","Only for linear","Only for cubic"],a:0},
{t:"Kinds",q:"x² + 0 has degree?",o:["2","0","1","undefined"],a:0}
]
],
pro:[
[
{t:"DivAlgo",q:"Dividend = Divisor × ___ + Remainder",o:["Quotient","Zero","Degree","Coefficient"],a:0},
{t:"DivAlgo",q:"Divide x² by x. Q and R?",o:["Q=x, R=0","Q=1, R=x","Q=x², R=0","Q=0, R=x²"],a:0},
{t:"DivAlgo",q:"Remainder of x²+1 divided by x−1?",o:["2","0","1","−1"],a:0},
{t:"DivAlgo",q:"Remainder of x²−4 divided by x−2?",o:["0","4","−4","2"],a:0},
{t:"DivAlgo",q:"Remainder of x³+1 by x+1?",o:["0","2","−1","1"],a:0},
{t:"DivAlgo",q:"In division, degree of remainder < ?",o:["Divisor degree","Dividend degree","Quotient degree","Doesn't matter"],a:0},
{t:"DivAlgo",q:"Polynomial long division resembles?",o:["Number long division","Matrix multiplication","Graphing","Integration"],a:0},
{t:"DivAlgo",q:"Degree 5 ÷ Degree 2 → Q degree?",o:["3","2","1","5"],a:0},
{t:"DivAlgo",q:"If (x−a) divides p(x) exactly, p(a)=?",o:["0","1","a","−a"],a:0},
{t:"DivAlgo",q:"Is the division algorithm unique?",o:["Yes (Q and R unique)","No","Only for linear","Only over Z"],a:0}
],
[
{t:"IrrZ",q:"Zeros of x²−2?",o:["±√2","±2","±√3","±4"],a:0},
{t:"IrrZ",q:"Zeros of x²−3?",o:["±√3","±3","±√2","±9"],a:0},
{t:"IrrZ",q:"Zeros of x²+1 (real)?",o:["Not real","±1","0","±i"],a:0},
{t:"IrrZ",q:"Zeros of x²−2x−1?",o:["1±√2","−1±√2","1±√3","2±√2"],a:0},
{t:"IrrZ",q:"Discriminant b²−4ac > 0 means?",o:["Two real zeros","One zero","No real zeros","Always complex"],a:0},
{t:"IrrZ",q:"Discriminant = 0 means?",o:["One (repeated) real zero","Two distinct zeros","No real zeros","Infinite zeros"],a:0},
{t:"IrrZ",q:"Discriminant < 0 means?",o:["No real zeros","One zero","Two real zeros","Only integer zeros"],a:0},
{t:"IrrZ",q:"Zeros of x²−4x+4?",o:["2, 2","±2","4, −1","4, 1"],a:0},
{t:"IrrZ",q:"Zeros of x²+4 (real)?",o:["Not real","±2","±4","0"],a:0},
{t:"IrrZ",q:"Golden-ratio-related equation?",o:["x² − x − 1 = 0","x² − 4 = 0","x² + 1 = 0","x² − 1 = 0"],a:0}
],
[
{t:"Graph",q:"Graph of y = ax + b?",o:["Straight line","Parabola","Circle","Hyperbola"],a:0},
{t:"Graph",q:"Graph of y = ax² (a≠0)?",o:["Parabola","Line","Circle","Ellipse"],a:0},
{t:"Graph",q:"Quadratic opens up if?",o:["a > 0","a < 0","a = 0","Always"],a:0},
{t:"Graph",q:"Quadratic opens down if?",o:["a < 0","a > 0","a = 0","Never"],a:0},
{t:"Graph",q:"x-intercepts of a polynomial are?",o:["Its zeros","Its coefficients","Its degree","Its constant"],a:0},
{t:"Graph",q:"y-intercept of p(x) is p(0) = ?",o:["Constant term","Leading coefficient","Degree","Slope"],a:0},
{t:"Graph",q:"Cubic has at most how many x-intercepts?",o:["3","2","1","4"],a:0},
{t:"Graph",q:"Parabola vertex is at x = ?",o:["−b/(2a)","b/(2a)","−a/2","a/b"],a:0},
{t:"Graph",q:"Graph crosses x-axis at polynomial's?",o:["Zeros","Maxima","Minima","y-intercept"],a:0},
{t:"Graph",q:"Linear has how many x-intercepts?",o:["1","2","0","Infinite"],a:0}
],
[
{t:"Solve",q:"2x + 6 = 0. x = ?",o:["−3","3","−6","6"],a:0},
{t:"Solve",q:"x² − 9 = 0. x = ?",o:["±3","±9","3","−3"],a:0},
{t:"Solve",q:"x² − 5x + 6 = 0. x = ?",o:["2 or 3","−2 or −3","1 or 6","5 or 6"],a:0},
{t:"Solve",q:"x² + 2x − 8 = 0. x = ?",o:["−4 or 2","4 or −2","8 or −1","−8 or 1"],a:0},
{t:"Solve",q:"x² − 10x + 25 = 0. x = ?",o:["5 (repeated)","±5","25","−5"],a:0},
{t:"Solve",q:"x² = 4. x = ?",o:["±2","2","−2","±4"],a:0},
{t:"Solve",q:"(x−1)(x−2)(x−3) = 0. x = ?",o:["1, 2, 3","−1, −2, −3","0 only","1 only"],a:0},
{t:"Solve",q:"x² + 5x = 0. x = ?",o:["0, −5","0, 5","5, −5","0 only"],a:0},
{t:"Solve",q:"x(x − 1) = 0. x = ?",o:["0, 1","0, −1","1 only","0 only"],a:0},
{t:"Solve",q:"x³ = 8. x = ?",o:["2","±2","8","4"],a:0}
],
[
{t:"Apply",q:"Sum of zeros of 2x² + 3x + 1?",o:["−3/2","3/2","1/2","−1/2"],a:0},
{t:"Apply",q:"Product of zeros of 2x² + 3x + 1?",o:["1/2","−1/2","3/2","−3/2"],a:0},
{t:"Apply",q:"Quadratic with sum=7, product=12?",o:["x² − 7x + 12","x² + 7x + 12","x² − 12x + 7","x² − 7x − 12"],a:0},
{t:"Apply",q:"Polynomial with zeros 2, −3?",o:["x² + x − 6","x² − x − 6","x² + x + 6","x² − x + 6"],a:0},
{t:"Apply",q:"If one zero of x² − 3x + k is 2, k = ?",o:["2","4","6","−2"],a:0},
{t:"Apply",q:"Zeros of x² − (a+b)x + ab?",o:["a, b","a+b, ab","a−b, a+b","−a, −b"],a:0},
{t:"Apply",q:"Polynomial with only zero at origin (degree 1)?",o:["x","x + 1","x²","x − 1"],a:0},
{t:"Apply",q:"Polynomial degree n has at most how many zeros?",o:["n","n+1","2n","Infinite"],a:0},
{t:"Apply",q:"Can a polynomial have more zeros than its degree?",o:["No","Yes","Only even","Only odd"],a:0},
{t:"Apply",q:"Number of zeros (with multiplicity) of (x−1)²(x+2)?",o:["3","2","1","4"],a:0}
]
]
}}

};
