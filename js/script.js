// script.js

$(function() {


  $('.day').mouseenter(function() {

    $(this).closest('.row').find('.day').hide();
    $(this).closest('.row').find('.input').show();
  })

  $('.input').mouseleave(function() {
    $('.day').show();
    $('.input').hide();
    $(this).closest('.row').find('.day').show();
    $(this).closest('.row').find('.input').hide();
  })

  $('.add').click(function() {
    $('.day').show();
    $('.input').hide();
    $(this).parent().parent().find('ul').append('<li class="toDoItem">' + $(this).closest('.row').find('.timestamp').val() + " : " + $(this).closest('.row').find('.note').val() + '</li>');
    $(this).closest('.row').find('.timestamp').val('');
    $(this).closest('.row').find('.note').val('');
  })

  $('ul').sortable({
    connectWith: "ul",
    dropOnEmpty: true,
    placeholder: "yellowBox"
  });

  $('#deleteBox').droppable({
    drop: function(event, ui) {
      ui.draggable.remove();
    }
  });


});
