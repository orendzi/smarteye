$(document).ready(function() {
    var s = Snap();  
        // Responsivity
        s.attr({
            viewBox: '0 0 600 600'
        });
        
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
            
              
        // Text            
        var text_mouth = s.text(100, 200, 'I am Robo and this is my mouth')
});


