# Jason Yeske Code Journal

## cpnt262-a1, Fetching API Data

- For my assignment, I want to use the random dog api
- [Random Dog](https://dog.ceo/dog-api/documentation/random)
- In order to do this I will need to use an async function
- We then need to fetch the data from the site we want to use, in this case we want to fetch the random dog images from the site
- We then want to turn this fetch into a json file by making it a const

- I then want to create a const that grabs the photo from the array
    - Since all the photos are in an array called "message", we want to call that using .message from the json
- Now I want to make the source of the image the link to the dog, so everytime the page is changed, a new dog is pulled.
    - We do this by calling our image id of "randomDog"
    - use .src to make the source of the image the random dogs being pulled from the api

- We can now print the image to the site using our function and on every refresh it will update.


- Now we want to create a try, catch
    - To do this we want to use try on most of our code from above
        - If it works, good, don't need to do anything else
        - If it doesn't work:
            - We want to use a catch to push an error to the console
            - We can do this by just creating a catch, so if the above code fails, we console log there was an error with the api loading


- We also want to add an interactive portion to our site.
    - We can do this by adding a button
        - Not just any button though, we need to use an input type.
        - This way, we can use the "onclick()" command
            - This allows the button so everytime it is pushed, it will replay the function that we created, in this case fetch another random dog from the api, and print it to the screen


### Some errors I encountered
- I wanted to be able to print the breed of the dog to the screen
    - I was not able to do this
        - I believe because the site doesn't know itself what its grabbing, its just pulling a random link from its very long array and printing it.
- I tried using a button tag instead of an input tag
    - I corrected this so I could use onClick, but maybe there is a way with a normal button tag that I do not know of yet
- The retrieved data for part 1 of the assignment I was able to get the image url, and the one other property showing that the image was successfully loaded
    - I wasn't able to get the off-site link because I'm not fully sure what that means
    - The name or title again because I couldn't get the dog breed without printing the whole url of the dog.


## Attributions

- [Dog API](https://dog.ceo/dog-api/documentation/)
- [w3schools .src](https://www.w3schools.com/jsref/prop_script_src.asp)
- [Fetching Asynchronous data](https://gist.github.com/acidtone/82944dbaa59aef9247833fe79eae3fb2)
- [developer.mozilla throw command](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [khaalipaper.com onclick command](https://khaalipaper.com/javascript/javascript-change-image-onclick-event.php#parentHorizontalTab1)
- [developer.mozilla fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)


