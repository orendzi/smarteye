SmartEye.views.common = (function(SmartEye) {

       var s = $('#smartEye');
       
    //   function init(canvas){
    //       _canvas = canvas;
    //   }
       
    //   function render(data){
    //       s.attr({
    //             viewBox: '0 0 600 600'
    //         });
            
        function builder(){
            // should build all stuff
        }
        
        // Shapes
        var shape_circle = s.circle(100, 100, 50)
                .attr({
                    fill: "#bada55",
                    stroke: "#000",
                    strokeWidth: 5
                }),
        shape_rect = s.rect(200, 50, 100, 100, 20, 20)
                .attr({
                    stroke: '#123456',
                    'strokeWidth': 20,
                    fill: 'red',
                    'opacity': 0.2,
                    'cursor': 'pointer',
                    title: 'Click me!'
                })
                .click(function() {
                    this.attr('fill', 'green');
                    }
                );
       }
       
       // builder gathers all stuff for init in app
        SmartEye.views.circle.builder = {
            init: init(canvas);
        };
        
}(SmartEye));