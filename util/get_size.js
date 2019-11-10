outlets = 1
inlets = 1
setoutletassist(0,"box rect (list)");

function loadbang() {
	this.bang();
}

function bang() {
	if ( this.patcher.box ) {
		rec = this.patcher.box.rect;
		outlet( 0, rec[2]-rec[0], rec[3]-rec[1] );
	}
}

