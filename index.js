$(document).ready(function() {
	$("#one").mouseenter(function() {
		$("#one").html('cout << "hello world";');
		$("#one").addClass("hoverOne");
	});
	$("#one").mouseleave(function() {
		$("#one").html("CODER");
		$("#one").removeClass("hoverOne");
	});


	$("#two").mouseenter(function() {
		$("#two").html('She said, "Hello World!"');
		$("#two").addClass("hoverTwo");
	});
	$("#two").mouseleave(function() {
		$("#two").html("WRITER");
		$("#two").removeClass("hoverTwo");
	});


	$("#three").mouseenter(function() {
		$("#three").html('HELLO WORLD!');
		$("#three").addClass("hoverThree");
	});
	$("#three").mouseleave(function() {
		$("#three").html("EXPLORER");
		$("#three").removeClass("hoverThree");
	});
});

