// function to return element ID in the document
var getID = function(name) {
    return document.getElementById(name);
};

// function to toggle <div> tag visibility
var displayDiv  = function(id) {
    if (id === "what-is-sdn") {
        getID("what-is-sdn").style.display = "block";
        getID("sdn-history").style.display = "none";
        getID("how-does-sdn-work").style.display = "none";
        getID("citation").style.display = "none";
    } else if (id === "sdn-history") {
        getID("what-is-sdn").style.display = "none";
        getID("sdn-history").style.display = "block";
        getID("how-does-sdn-work").style.display = "none";
        getID("citation").style.display = "none";
    } else if (id === "how-does-sdn-work") {
        getID("what-is-sdn").style.display = "none";
        getID("sdn-history").style.display = "none";
        getID("how-does-sdn-work").style.display = "block";
        getID("citation").style.display = "none";
    } else if (id === "citation") {
        getID("what-is-sdn").style.display = "none";
        getID("sdn-history").style.display = "none";
        getID("how-does-sdn-work").style.display = "none";
        getID("citation").style.display = "block";
    }
};

// display default page
displayDiv("what-is-sdn");

// button event functions to switch <div> tag visibility
getID("bttn-a").onclick = function() {
    displayDiv("what-is-sdn");
};

getID("bttn-b").onclick = function() {
    displayDiv("sdn-history");
};

getID("bttn-c").onclick = function() {
    displayDiv("how-does-sdn-work");
};

getID("bttn-d").onclick = function() {
    displayDiv("citation");
};


