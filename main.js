(function() {
	
		var ox = null, oy = null;
		var id = 0;
		//console.log(d3.version);
		var svgContainer = d3.select("#simple").append("svg")
		.attr("id", "svgContain")
		.attr("width", 500)
		.attr("height", 500);

		var rectangle = svgContainer.append("rect").style("fill", "#ffffff")
		.attr("width", 500)
		.attr("height", 500)
		.attr("stroke-width", 1)
		.attr("stroke", "black")
		//.on("mouseover", mouseover)
		.on("mousemove", mouseMove)
		.on("click", mouseClick);

		var mouseCircle = svgContainer.append("circle")
		.attr("id", "mousecircle")
		.attr("cx",0)
		.attr("cy", 0)
		.attr("r", 20)
		.style({"fill": "#4CADDC", "pointer-events": "none"});
		
		function mouseMove(evt) {

			//console.log("move", d3.event.layerX, d3.event.layerY, d3.event.offsetX, d3.event.offsetY);
			if ("offsetX" in d3.event){
				ox = d3.event.offsetX;
				oy = d3.event.offsetY;
			} else {
				ox = d3.event.layerX;
				oy = d3.event.layerY;
			}

			d3.select("#mousecircle").attr("transform", "translate("+ox+","+oy+")");
			
		}

		function mouseClick(evt) {
			//console.log("click", d3.event.layerX, d3.event.layerY, d3.event.offsetX, d3.event.offsetY);
			if ("offsetX" in d3.event){
				ox = d3.event.offsetX;
				oy = d3.event.offsetY;
			} else {
				ox = d3.event.layerX;
				oy = d3.event.layerY;
			}
			var circle = new Circle(ox, oy);
		}

		function Circle(x,y) {
			id++;
			var circle = svgContainer.append("circle")
			.attr("class", "circle"+id)
			.attr("cx", x)
			.attr("cy", y)
			.attr("r", 20)
			.style({"fill": "#4CADDC", "pointer-events": "none"});
		}

})();