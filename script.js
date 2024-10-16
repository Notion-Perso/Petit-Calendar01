$(document).ready(function () {

    var monthNames = [ "Janvier", "Fevier", "March", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre" ]; 
    var dayNames= [ "Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi" ];
    
    var newDate = new Date();
    newDate.setDate(newDate.getDate());
        
    setInterval( function() {
        var hours = new Date().getHours();
        $(".hour").html(( hours < 10 ? "0" : "" ) + hours);
        var seconds = new Date().getSeconds();
        $(".second").html(( seconds < 10 ? "0" : "" ) + seconds);
        var minutes = new Date().getMinutes();
        $(".minute").html(( minutes < 10 ? "0" : "" ) + minutes);
        
        $(".month span,.month2 span").text(monthNames[newDate.getMonth()]);
        $(".date span,.date2 span").text(newDate.getDate());
        $(".day span,.day2 span").text(dayNames[newDate.getDay()]);
        $(".year span").html(newDate.getFullYear());
    }, 1000);	
    
    
    
    $(".outer").on({
        mousedown:function(){
            $(".dribbble").css("opacity","1");
        },
        mouseup:function(){
            $(".dribbble").css("opacity","0");
        }
    });
    
    
    
    });