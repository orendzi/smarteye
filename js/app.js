var SmartEye = SmartEye || {};
SmartEye = {
    
    config: {
        container: '#smarteye'
    },
    
    init: function(config) {
        // probably should move to controller?
    },
    
    controllers: {
        mainController: null
    },
    
    models: {
        Circle: function(x, y, r) {
            this.x = x;
            this.y = y;
            this.r = r;
        },
        Rect: function(x, y, width, height, rx, ry) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.rx = rx;
            this.ry = ry;
        },
        Poly: function(points) {
            // should be array, can be used as polyline without closing
            this.points = points;
        },
        Line: function(xa, ya, xb, yb) {
            // start and end points
            this.xa = xa;
            this.ya = ya;
            this.xb = xb;
            this.yb = yb;
        },
        Text: function(x, y, text) {
            // text may be string or array
            this.x = x;
            this.y = y;
        }
    },
    
    views: {
        circle: null,
        rectangle: null,
        polygon: null,
        line: null,
        text: null
    }
    
};

// Initialize everything
$(document).ready(function() {
    //SmartEye.init().foundation();
    
    // Models = tpl
    var modelCircle1 = new SmartEye.models.Circle({
        x: 1,
        y: 1,
        r: 1
    });
    
    // Views = 
    var viewsCircle1 = new SmartEye.views.Circle(modelCircle1);
    
    viewsCircle1.render();
});
    












