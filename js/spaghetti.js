$(document).ready(function() {
    var paper = Snap('#canvas'),
        nodeShapesBar = $('.toolbar'),
        nodeCircle = $('#drawCircle'),
        nodeRect = $('#drawRect'),
        nodePosition = paper.text(20, 20, ' ').attr({fontSize: '12', fill: '#bbbbbb', zIndex: '9999'})
        canvasPosition = $('#canvas').position(),
        elementTotalCount = 0;
    
    // constructor: input, behavior
    nodeShapesBar.on('click', function(e) {
        var shapeType = $(e.target).attr('data-type'),
            shape = new Shape(paper, common, shapeType);
        // shape.render();
    });

    // Element selection
    paper.click(activate);
    
    // Cursor position
    paper.mousemove(showPosition);
    paper.mouseout(hidePosition);
    
    function activate (e) {
        console.log(e.target);
        console.log(this);
    }
    
    function showPosition (event) {
        nodePosition.attr({
            text:'X=' + event.pageX + '; ' + 'Y=' + (event.pageY - parseInt(canvasPosition.top) - 1)
        });
    }
    function hidePosition (event) {
        nodePosition.attr({text: ' '});
    }

    // models: constructor
    var common = {
        fill: '#fff',
        stroke: '#bbb',
        strokeWidth: 1,
        width: '150',
        height: '150',
        radius: '80',
        borderRadiusX: '0',
        borderRadiusY: '0',
        positionX: '100',
        positionY: '100',
        positionXstart: '100',
        positionYstart: '100',
        positionXend: '300',
        positionYend: '100',
        polygonCoords: [100,100,100,100,200,20,200,200],
        text: 'Text element is added.',
        zIndex: '9999',
        isActive: false,
        class: 'snap-element',
        giveId: function() {
            elementTotalCount++;
            console.log(elementTotalCount + ' Fix me, am undefined!');
        },
        highlightThis: function(event) {
            var element = event.target;
            console.log(element);
        }
    }; 
    
    // var modelCircle = {
    //     // move: function(){
    //     //     this.positionX +=1;
    //     //     this.positionY +=1;
    //     // }  
    // };
    
    // Views: output
    
    // function render () {
    //     this.shape.appendTo(canvas); 
    // }
    
    function Shape (canvas, style, type) {
        if (type == 'circle') {
            this.shape = canvas.circle(style.positionX, style.positionY, style.radius);
        } 
        else if (type == 'rect') {
            this.shape = canvas.rect(style.positionX, style.positionY, style.width, style.height, style.borderRadiusX, style.borderRadiusY);
        }
        else if (type == 'line') {
            this.shape = canvas.line(style.positionXstart, style.positionYstart, style.positionXend, style.positionYend);
        }
        else if (type == 'poly') {
            this.shape = canvas.polygon(style.polygonCoords);
        }
        else if (type == 'text') {
            this.shape == canvas.text(style.positionX, style.positionY, style.text);
            console.log('Fix me!!!');
        }
        
        var id = style.giveId();
        this.shape.attr({
                fill: style.fill,
                stroke: style.stroke,
                strokeWidth: style.strokeWidth,
                zIndex: style.zIndex,
                id: id
            });
    }


});