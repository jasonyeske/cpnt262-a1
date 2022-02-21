
//const





const dogPhoto = async function() {
    
    try {

const loadDog = await fetch('https://dog.ceo/api/breeds/image/random');
const dog = await loadDog.json();


    const imageLink =  dog.message;
    randomDog.src= imageLink;

    document.getElementById('randomDog').innerHTML;
    console.log(dog);


    }


    catch (error) {

        console.log(error);
    }


}

  dogPhoto();


// dogPhoto();






/*const randomDog = document.getElementById('randomDog');
const dogPhoto = async function() {
try {
    const loadDog = 'https://dog.ceo/api/breeds/image/random';
    
    

        fetch(loadDog)
        .then(function(dogUrl){
            
            return dogUrl.json();


        })
        .then(function(json){
       
       const imageLink = json.message;
            dogPhoto.src= imageLink;

        //document.getElementById('randomDog').innerHTML;
        console.log(loadDog);
    })

}

catch (error) {

    console.log(error);
}

} */




//fetch('https://dog.ceo/api/breeds/image/random'){
  
//}

/*const loadDog = await fetch('https://dog.ceo/api/breeds/image/random');
const dog = await loadDog.json();


    const imageLink =  loadDog.message;
    dogPhoto.src= imageLink;

    document.getElementById('randomDog').innerHTML;
    console.log(dog);*/