//https://teachablemachine.withgoogle.com/models/2m1t53PRW/
function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2m1t53PRW/model.json',modelready)
    
}
function modelready(){
    console.log("model is loaded")
    classifier.classify(gotResults)
}
function gotResults(error, results) {
    if(error) {
        console.error(error);
    }else {
        console.log(results)
        random_number_r = Math.floor(Math.random() *255) +1;
        random_number_g = Math.floor(Math.random() *255) +1;
        random_number_b = Math.floor(Math.random() *255) +1;

        document.getElementById("result_label").innerHTML = 'Ican hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
            
        img=document.getElementById('aliens-01');
        img1=document.getElementById('aliens-02');
        img2=document.getElementById('aliens-03');
        img3=document.getElementById('aliens-04');

        if(results[0].label == "Clap") {
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';

        }else if(results[0].label == "Bell") {
                img.src = 'aliens-01.png';
                img1.src = 'aliens-02.gif';
                img2.src = 'aliens-03.png';
                img3.src = 'aliens-04.png';

        }else if(results[0].label == "Snapping") {
                    img.src = 'aliens-01.png';
                    img1.src = 'aliens-02.png';
                    img2.src = 'aliens-03.gif';
                    img3.src = 'aliens-04.png';

        }else{
                        img.src = 'aliens-01.png';
                        img1.src = 'aliens-02.png';
                        img2.src = 'aliens-03.png';
                        img3.src = 'aliens-04.gif';

        }
    }
}

        


