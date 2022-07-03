canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")
li=["R1.jpg","R2.jpg","R3.jpg","R4.jpg","R5.jpg"]
rm=Math.floor(Math.random()*5)
console.log(rm)
bgi=li[rm]
console.log("Name of the background image "+bgi)
ri="rover.png"
rw=100
rh=90
rx=10
ry=10

function add(){
bi=new Image()
bi.onload=loadbg
bi.src=bgi
ro=new Image()
ro.onload=loadro
ro.src=ri}

function loadbg(){
ctx.drawImage(bi,0,0,canvas.width,canvas.height)}

function loadro(){
ctx.drawImage(ro,rx,ry,rw,rh)}

window.addEventListener("keydown",mykeydown)

function mykeydown(e){
kp=e.keyCode
console.log(kp)
if(kp=='38')
{
up ()
console.log("User Pressed Up Key")}
if(kp=='40')
{
down ()
console.log("User Pressed Down Key")}
if(kp=='37')
{
left ()
console.log("User Pressed Left Key")}
if(kp=='39')
{
right()
console.log("User Pressed Right Ket")}
}

function up(){
if (ry>=0)
{
ry=ry-10
console.log("Y position of the rover is "+ry)
loadbg()
loadro()}}

function down(){
    if (ry<=580)
    {
    ry=ry+10
    console.log("Y position of the rover is "+ry)
    loadbg()
    loadro()}}

    function left(){
        if (rx>=0)
        {
        rx=rx-10
        console.log("X position of the rover is "+rx)
        loadbg()
        loadro()}}

        function right(){
            if (rx<=780)
            {
            rx=rx+10
            console.log("X position of the rover is "+rx)
            loadbg()
            loadro()}}







