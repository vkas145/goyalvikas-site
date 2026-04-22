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
}},

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
}},

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
}},

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
}},

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
