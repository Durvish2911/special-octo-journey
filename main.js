
var canvas= new fabric.Canvas('mydanvasissanwas');
playerx =10;
playery =10;
blockimagewidth =30;
blockimageheight =30; 
var playerobject= "";
var blockimageobject="";
function playerupdate(){
    console.log("dd");
    fabric.Image.fromURL("groot.jpg",function(Img){
    playerobject=Img;
    playerobject.scaleToHeight(150);
playerobject.scaleToWidth(150);
playerobject.set({
    top:playery,
    left:playerx
});
canvas.add(playerobject);
    });}
function new_image(get_image){
    console.log("webwhatsapp");
    fabric.Image.fromURL(get_image,function(Img){
        blockimageobject = Img;
    blockimageobject.scaleToWidth(blockimagewidth);
    blockimageobject.scaleToHeight(blockimageheight);
    blockimageobject.set({
        top:playery,
        left:playerx
    });
    canvas.add(blockimageobject);
});
}
window.addEventListener("keydown",my_name_is_mahan);
function my_name_is_mahan(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed == '38'){
        up();
        console.log("up");
    }
    if(keypressed == '40'){
      down();
      console.log("down");
    }
    if(keypressed == '37'){
        left();
        console.log("left");
    }
    if(keypressed == '39'){
        right();
        console.log("right");
    }
    if(keypressed == '87'){
        new_image('thor hand.jpeg');
    }
    if(keypressed =='67'){
        new_image('hulk body.jpg');
    }
    if(keypressed == '68'){
   new_image('gun.jpeg');
    }
    if(keypressed == '71'){
new_image('and that is theb old sorting hat said tom riddle.jpeg');
    }
    if(keypressed == '76'){
new_image('iton man head.jpeg');
    }
if(e.shiftKey == true &&
    keypressed == '80'){
        blockimageheight=blockimageheight+10;
        blockimagewidth=blockimagewidth+10;
        document.getElementById("hidth").innerHTML=blockimageheight;
        document.getElementById("width").innerHTML=blockimagewidth;
    }
    if(e.shiftKey == true &&
        keypressed == '77'){
            blockimageheight=blockimageheight-10;
            blockimagewidth=blockimagewidth-10;
            document.getElementById("hidth").innerHTML=blockimageheight;
            document.getElementById("width").innerHTML=blockimagewidth;
        }}
        function up(){
            if(playery>=0){
                playery=playery-blockimageheight;
                canvas.remove(playerobject);
                playerupdate();
            }
        }
        function down(){
            if(playery<=500){
                playery=playery+blockimageheight;
                canvas.remove(playerobject);
                playerupdate();
            }
        }
        function left(){
            if(playerx>=0){
                playerx=playerx-blockimagewidth;
                canvas.remove(playerobject);
                playerupdate();
            }
        }
        function right(){
            if(playerx<=500){
                playerx=playerx+blockimagewidth;
                canvas.remove(playerobject);
                playerupdate();
            }
        }