
$(function() {

    function makeGrid() {
        /**
         * holds user's grid heigth and width input to respective variables.
         */
        const inputHeight = $("#inputHeight").val();
        const inputWidth = $("#inputWidth").val();
        
        /**
         * using a for loop to add table rows(heigth) depending on the user's input value.
         */
        for(let i=0; i< inputHeight; i++) {
            $("#pixelCanvas").append("<tr></tr>");
        }

        /**
         * using a for loop to add table column(width) depending on the user's input value.
         */
        for(let j=0; j< inputWidth; j++) {
            $("#pixelCanvas>tr").append("<td></td>");
        }
            
        };
        /**
         * on 'submit', function makes sure the previous table drawn by user is erased each time before a new one.
         * function event allows user input value to be stable. 
         */
        $("#sizePicker").submit(function(event) {
            $("#pixelCanvas").children().remove();
            makeGrid();
            event.preventDefault();
        });
        
        /**
         * function runs on click of a grid cell, with presence of a <td> element.
         * uses conditional tenary operator to toggle 'style' attribute.
         */
        $("#pixelCanvas").on("click","td", function (event){
            let color = $('#colorPicker').val();
            $(this).attr('style') ? $(this).removeAttr('style') : $(this).css('background', color);
    
        });
        /**
         * allows user the option of a background color.
         * the purpose is to not limit the user on color to paint with.i.e user can paint with white unlike the default code.
         */
        $("#backgroundColor").on('change',function() {
            let backgroundColor = $('#backgroundColor').val();
            $('body').css('background',backgroundColor);
        });
        
});
