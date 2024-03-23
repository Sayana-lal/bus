// Initialize variables to track tickets booked and buses allotted
var AtoBtickets = 0;
var AtoCtickets = 0;
var BtoAtickets = 0;
var BtoCtickets = 0;
var CtoBtickets = 0;
var CtoAtickets = 0;

var AtoBbus = 1;
var AtoCbus = 1;
var BtoAbus = 1;
var BtoCbus = 1;
var CtoBbus = 1;
var CtoAbus = 1;

// Function to update details and check if additional buses are required
function updateDetails() {
    // Update buses allotted based on ticket bookings
    if (AtoBtickets > 50) {
        AtoBbus = Math.ceil(AtoBtickets / 50);
    }
    if (AtoCtickets > 50) {
        AtoCbus = Math.ceil(AtoCtickets / 50);
    }
    if (BtoAtickets > 50) {
        BtoAbus = Math.ceil(BtoAtickets / 50);
    }
    if (BtoCtickets > 50) {
        BtoCbus = Math.ceil(BtoCtickets / 50);
    }
    if (CtoBtickets > 50) {
        CtoBbus = Math.ceil(CtoBtickets / 50);
    }
    if (CtoAtickets > 50) {
        CtoAbus = Math.ceil(CtoAtickets / 50);
    }
}

// Function to show details for specific stand
function showStandDetails(stand) {
    var detailsContainer = document.getElementById("details");
    var details = "";

    if (stand === 'A') {
        details += "<h3>Bus Stand A</h3>";
        details += "<p>Tickets Booked to B: " + AtoBtickets + "</p>";
        details += "<p>Buses Allotted to B: " + AtoBbus + "</p>";
        details += "<p>Tickets Booked to C: " + AtoCtickets + "</p>";
        details += "<p>Buses Allotted to C: " + AtoCbus + "</p>";
    } else if (stand === 'B') {
        details += "<h3>Bus Stand B</h3>";
        details += "<p>Tickets Booked to A: " + BtoAtickets + "</p>";
        details += "<p>Buses Allotted to A: " + BtoAbus + "</p>";
        details += "<p>Tickets Booked to C: " + BtoCtickets + "</p>";
        details += "<p>Buses Allotted to C: " + BtoCbus + "</p>";
    } else if (stand === 'C') {
        details += "<h3>Bus Stand C</h3>";
        details += "<p>Tickets Booked to A: " + CtoAtickets + "</p>";
        details += "<p>Buses Allotted to A: " + CtoAbus + "</p>";
        details += "<p>Tickets Booked to B: " + CtoBtickets + "</p>";
        details += "<p>Buses Allotted to B: " + CtoBbus + "</p>";
    }

    detailsContainer.innerHTML = details;
}
