SmartEye.models.circle = (function() {
    // dependecies, private vars
    var _circle = SmartEye.views.circle,
        _Snap = Snap;
    
    return {
        render: function (style) {
            _Snap.circle()
                .attr({
                    fill: style.fill,
                    stroke: style.stroke,
                    strokeWidth: style.strokeWidth,
                    position: style.position,
                    size: style.size,
                    'z-index': style.zIndex
                })
        },
        
        builder: function() {
            _circle.render(SmartEye.modules.common.defaults);
        }
    };
})();

