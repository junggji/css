let timer = setInterval("show()", 3000);
let no = 1, position;
function show() {
    
        if(no<4) {
        no++;
    }   else {
        no=1;
    }
        $(".disp").html(no + " / 4");
        // position = no*1000;
        $(".img4").animate({"left": "-=1000px"}, 500, function(){
            $(".img4 li:first").appendTo(".img4"); // 첫이미지를 맨 뒤로 옮기기
            $(".img4").css("left", "+=1000px"); // 이미지가 앞으로 땡겨지니까 1000px 뒤로 미루기
        });
    }
