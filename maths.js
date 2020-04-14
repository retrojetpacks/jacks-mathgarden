var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    const n2 = Math.ceil(Math.random() * 5);
    console.log(n1);
    console.log(n2);

    document.getElementById('n1').innerHTML = n1;
    document.getElementById('n2').innerHTML = n2;

    answer = n1 + n2;

}

function checkAnswer(params) {
    const prediction = predictImage();
    if (prediction == answer) {
        score ++;
        backgroundImages.push(`url(images/background${score}.svg)`);
        document.body.style.backgroundImage = backgroundImages;

    } else{
        if (score != 0){ 
            setTimeout(function(){
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;
            }, 1000);
            score--;
        }
    }
        console.log(`Score: ${score}`);
    
    
    if (score == 6){
        alert('Congratulations!')
        score = 0;
        backgroundImages = [];
        document.body.style.backgroundImage = backgroundImages;

    }
}