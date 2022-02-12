const images = ["./images/campus.jpg","./images/unimet.jpg","./images/unimet2.jpg"]


function nextImage(){
    console.log('image changed')
    let image = document.getElementById('top');
    if(image.src.match("./images/campus.jpg")){
        image.src = "./images/unimet.jpg";
    }
    if(image.src.match("./images/unimet.jpg")){
        image.src = "./images/unimet2.jpg";
    }
    else{
        image.src = "./images/campus.jpg"; 
    }

}

function previousImage(){
    console.log('image changed')
    let image = document.getElementById('top');
    if(image.src.match("./images/campus.jpg")){
        image.src = "./images/unimet.jpg";
    }
    if(image.src.match("./images/unimet.jpg")){
        image.src = "./images/unimet2.jpg";
    }
    else{
        image.src = "./images/unimet.jpg"; 
    }
}


function gotoAboutMe(){

//                                                      !!!!!!!!!!!!!!!!!!!!!!!!!!!!poner los  ifs!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11

    if(document.getElementById("aboutMe").style.visibility !== 'visible'){
        document.getElementById("home1").style.display = 'none';
        document.getElementById("experience").style.display = 'none';
        document.getElementById("contact").style.display = 'none';
        document.getElementById("aboutMe").style.visibility = 'visible';
        document.getElementById("skills").style.display = 'none';
    }
    
}

function gotoExperience(){
    document.getElementById("home1").style.display = 'none';
    document.getElementById("aboutMe").style.display = 'none';
    document.getElementById("contact").style.display = 'none';
    document.getElementById("experience").style.visibility = 'visible';
    document.getElementById("skills").style.display = 'none';

}

function gotoContact(){
    document.getElementById("home1").style.display = 'none';
    document.getElementById("aboutMe").style.display = 'none';
    document.getElementById("experience").style.display = 'none';
    document.getElementById("contact").style.visibility = 'visible';
    document.getElementById("skills").style.display = 'none';
}

function gotoProjects(){
    document.getElementById("home1").style.display = 'none';
    document.getElementById("aboutMe").style.display = 'none';
    document.getElementById("experience").style.display = 'none';
    document.getElementById("contact").style.visibility = 'visible';
    document.getElementById("skills").style.display = 'none';
}

function gotoSkills(){
    document.getElementById("home1").style.display = 'none';
    document.getElementById("aboutMe").style.display = 'none';
    document.getElementById("experience").style.display = 'none';
    document.getElementById("contact").style.display = 'none';
    document.getElementById("skills").style.visibility = 'visible';
}


function sendInfo(){

    const email = document.getElementById("emailInput").value;
    const name = document.getElementById("nameInput").value;
    const msg = document.getElementById("messageInput").value;
    const company = document.getElementById("companyInput").value;

    const message = 'Nueva solicitud de: ' + name +"\nEmpresa: "+company
                    +"\nEmail: " + email + "\nMensaje: " + msg;
    console.log(message);
}