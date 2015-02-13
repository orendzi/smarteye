SmartEye.controllers.mainController = (function() {
    
    var canvas = $('#smartEye'),
        toolbar = $('.toolbar'),
        toolbarBtn = toolbar.children('button'),
        clickedBtn,
        dataModel = [];
        
        // Draw new shape sequence
        toolbarBtn.on('click', function() {
            clickedBtn = event.target;
            console.log(clickedBtn, this);
            // SmartEye.modules.this();
        });
    
    return; 
})();