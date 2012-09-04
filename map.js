function init() {
    var data={};
    $.getJSON("http://netneutralitymap.org/json/countries.json",function
    (results) { 
        for (i in results) {
                    var cc=results[i].cc
                    // build the data object for vectorMap
                    data[cc]=results[i].percent+1; 
                }
            console.log(data);    
    $("#worldmap").vectorMap({map:'world_mill_en',
           series: {regions:[ {
               values: data,
               scale: ["#EEEEEE","#000000"]
               }]}
               });
                
                });
    }

$(document).ready(init);    
