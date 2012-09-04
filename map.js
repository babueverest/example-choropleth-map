
function init() {
    var data={};
    $("#worldmap").vectorMap({map:'world_mill_en',
        series: {regions:[ {
            values: data}]}
            });
    }

$(document).ready(init);    
