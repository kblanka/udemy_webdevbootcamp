//check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click on X to delete ToDo element
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//adding new elements to the list
$("input[type='text']").keypress(function(event){ 
  if(event.which === 13){
    //grabbing new todo text from input
    var todoText = $(this).val();
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + todoText + "</li>");
    $(this).val("");
  }
});

//click on pencil button fade in and out the input field
$(".fa-pencil").click(function(){
  $("input[type='text']").fadeToggle();
});