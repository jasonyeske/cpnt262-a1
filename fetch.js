
//const





const dogPhoto = async function() {
    
    try {

const loadDog = await fetch('https://dog.ceo/api/breeds/image/random');
if (!loadDog.ok){
throw 'The api cannot be reached at this time';

}



const dog = await loadDog.json();


    const imageLink =  dog.message;
    randomDog.src= imageLink;
    

    document.getElementById('imageSource').innerHTML = "Image Source: ";
    document.getElementById('dogBreed').innerHTML =  imageLink;
    console.log(dog);
    


    }


    catch (error) {

        console.log(error);
    }


}

  dogPhoto();
