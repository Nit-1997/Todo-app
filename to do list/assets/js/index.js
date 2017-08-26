//striping through and dimming todo
$("ul").on("click","li",function(){
      $(this).toggleClass("completed");    
});

//X icon functionality
$("ul").on("click","span",function(event){
     $(this).parent().fadeOut(500,function(){
          $(this).remove();
     });
     event.stopPropagation();
});

//making new todos
$("input[type='text']").keypress(function(event){
    if(event.which===13){
    	var text=$(this).val();
    	$(this).val("");
    	$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+text+"</li>");
    }
});

$(".fa-plus").click(function(){
   $("input[type='text']").fadeToggle(300);
});