$(document).ready(function(){
  $(".devour-form").on("submit", function (event){
    event.preventDefault()
    var burgerid = $(this).children(".burger_id").val() 
    console.log(burgerid)
    $.ajax({method: "PUT", url: "/burgers/" + burgerid
  }).then(function(data){location.reload()
})
})
})