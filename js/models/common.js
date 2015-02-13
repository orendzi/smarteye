SmartEye.models.common = (function() {
    // dependecies, private vars
    var _anyShape = SmartEye.views.common,
        _Snap = Snap;
    
    return {
        defaults: {
            fill: '#fff',
            stroke: '#bbb',
            strokeWidth: 1,
            size: '100, 100',
            position: '100, 100',
            zIndex: '9999'
        },
        
        builder: function() {
            _anyShape.init(_Snap());
        }
    };
})();