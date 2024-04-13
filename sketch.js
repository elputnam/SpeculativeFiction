//Speculative Fiction lecture for MD235

var genres = [];
let specFont;
let button1;
let button2;
let button3;
let i = 0;
let definitions = [];
let alp1 = 100;
let alp2 = 0;


function preload(){
  genres = loadStrings('data/genreList.txt');
  specFont = loadFont('data/RobotoMono-VariableFont_wght.ttf');
  definitions = loadJSON("data/definitions.json")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(specFont);
  frameRate(10);
  colorMode(HSB, 360, 100, 100, 100);


  //buttons
  button1 = createButton('what is speculative fiction?');
  button1.position(width*.1, height*.15);
  button1.mousePressed(speculate);
  button2 = createButton('genres');
  button2.position(width*.65, height*.15);
  button2.mousePressed(genreBubbles);
  button3 = createButton("i'm feeling lucky");
  button3.position(width*.4, height*.15);
  button3.mousePressed(lucky); 
  background(0, 0, 16);
}

function draw() {
  
  noFill();
  stroke(108, 100, 100);
  rect(width*.1, height*.25, width*.8, height*.6);
  textSize(45);
  text("ProfBot 1", width*.1, height*.1);
  //speculate();
  //genreBubbles();
  textWrap(WORD);
  textSize(30);
  text("Source: Oziewicz, Marek. 2017. “Speculative Fiction.” In Oxford Research Encyclopedia of Literature. Oxford University Press.", width*.1, height*.9, 1500, height*8)
  noFill();
  stroke(288, 100, 100, alp2);
  rect(width*.86+random(10), height*.86+random(10), 200, 50) 
  noStroke();
  fill(225, alp2);
  text("fieldMode", width*.87+random(10), height*.9+random(10), 100, 150);
  if (mouseX > width*.85 && mouseY > height*.85){
    alp2 = 100;
    field();
  } else{
    alp2= 0;
  }

}

function genreBubbles(){
  background(0, 0, 16);
  
  textWrap(WORD);
  fill(108, 100, 100, alp1); 
  for (let j = 0; j < genres.length; j++){
    textSize(random(20,60));
    text(genres[j], random(width*.1, width*.8), random(height*.25, height*.8), 50, 200);
  }
}

function speculate(){
  background(0, 0, 16);
  textWrap(WORD);
  fill(108, 100, 100, alp1); 
  textSize(30);
  //let cite = floor(random(definitions.quotes.length));
  text(definitions.quotes[i].text, width*.15, height*.3, width*.7, height*.8);
  i++;
  if (i >= definitions.quotes.length){
    i = 0;
  }
}

function lucky(){
  background(0, 0, 16);
  textWrap(WORD);
  fill(108, 100, 100); 
  textSize(30);
  let cite = floor(random(definitions.quotes.length));
  //text(definitions.quotes[cite].text, random(0, width*.7), random(0, height*.8), width*.7, height*.8);
  text(definitions.quotes[cite].text,width*.15, height*.3, width*.7, height*.8);
}

function field(){
  background(random(20), 50);
  fill(108, 100, 100);
  //lucky();
  //genreBubbles();
  textSize(35);
  let cite = floor(random(definitions.quotes.length));
  text(definitions.quotes[cite].text, random(0, width*.7), random(0, height*.8), width*.7, height*.8);
  for (let j = 0; j < genres.length; j++){
    textSize(random(20,60));
    text(genres[j], random(width*.1, width*.8), random(height*.25, height*.8), 50, 200);
  }
}


