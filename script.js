console.log("jai mata di lets rock")

const carousel=document.querySelector('.carousel')
const carouselimage=document.querySelector('.carouselimage')
let index=0;

const images=[]
images[0]="1.jpg"
images[1]="2.jpg"
images[2]="3.jpg"
let random=Math.floor(Math.random()*images.length)
let i=0;

function changeimage(){
    carouselimage.src=images[i]
    if(i<images.length-1){
        i++
}else{
    i=0
}
setTimeout("changeimage()",5000)
}
window.onload=changeimage



//audioElement

const audioElement=new Audio("songs/1.mp3")
const playinggif=document.getElementById('playing')
const playbutton=document.querySelector('#maincircleplaybutton')
const myprogressbar=document.querySelector('#myprogressbar')

playbutton.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        playbutton.classList.remove('fa-play-circle')
        playbutton.classList.add('fa-pause-circle')
        playinggif.classList.add('visible')
        
        audioElement.play()
    }else if(audioElement.played || audioElement.currentTime>0){
        playbutton.classList.remove('fa-pause-circle')
        playbutton.classList.add('fa-play-circle')
        playinggif.classList.remove('visible')

        audioElement.pause()
    }
    //  secondcircleplaybutton.classList.add('fa-pause-circle')
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogressbar.value=progress
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100
})

const makeallplay=()=>{
    Array.from(document.querySelectorAll('.timeicon')).forEach((e)=>{
        e.classList.add('fa-play-circle')
        e.classList.remove('fa-pause-circle')
    })
}

Array.from(document.querySelectorAll('.timeicon')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplay()
        index=e.target.id
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src=`songs/${index}.mp3`
        audioElement.currentTime=0
        audioElement.play()
        playbutton.classList.remove('fa-play-circle')
        playbutton.classList.add('fa-pause-circle')
    })
})

const previous=document.getElementById('previous')
const forward=document.getElementById('forward')

previous.addEventListener('click',()=>{
    if(index<1){
        index=6
    }else{
        index -=1
    }
    audioElement.src=`songs/${index}.mp3`
    audioElement.currentTime=0
    audioElement.play()
    playbutton.classList.remove('fa-play-circle')
    playbutton.classList.add('fa-pause-circle')

})

forward.addEventListener('click',()=>{
    if(index>6){
        index=0
    }else{
        index +=1
    }
    audioElement.src=`songs/${index}.mp3`
    audioElement.currentTime=0
    audioElement.play()
    playbutton.classList.remove('fa-play-circle')
    playbutton.classList.add('fa-pause-circle')
})