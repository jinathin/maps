var cities;

function preload() {
    cities = loadTable("data/cities.csv","header");
    // console.log("fired");
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    fill(255);
    background(10);
    // noLoop();
    frameRate(60);
}

function draw() {

    scale(4);
    translate(-100,-100)

    for(var i=0; i < cities.getRowCount(); i++) {
        var latitude = cities.getNum(i, "lat");
        var longitude = cities.getNum(i, "lng");
        setXY(latitude, longitude);

    }

    //this function expects lat and lng to be passed
    function setXY(lat, lng) {
        //change range of lng to match sketch dimensions
        var x = map(lng, -180,180,0,width);
        var y = map(lat, 90,-90,0,height);
        ellipse(x,y,0.15,0.15);

    }
    
}