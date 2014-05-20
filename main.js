(function() {
	
	var svgContainer = d3.select("#simple").append("svg")
										   .attr("id", "svgContain")
										   .attr("width", 300)
										   .attr("height", 300);
	// Draw rectangle
	var rectangle = svgContainer.append("rect").style("fill", "#cccccc")
											.attr("id", "bg")
											.attr("width", 300)
											.attr("height", 300);


	// Draw circle
	function makeCircle() {
		var circle = svgContainer.append("circle")
							.attr("cx", 30)
							.attr("cy", 30)
							.attr("r", 20);	
	}

	makeCircle();

})();