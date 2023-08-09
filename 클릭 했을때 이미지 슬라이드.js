let count = 0, pos;

    $(".next").on("click", function(){
        if(count < 3)
        count++;
        pos = count * 1000;
        $(".img4").animate({"left":"-" + pos + "px"}, 500);
        $(".disp").html((count+1) +" / 4");
    })
    $(".prev").on("click", function(){
        if(count >= 1)
        count--;
        pos = count * 1000;
        $(".img4").animate({"left":"-" + pos + "px"}, 500);
        $(".disp").html((count+1) +" / 4");
    })
