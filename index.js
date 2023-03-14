const mainContainerElement = document.querySelector(".main-container");
const careers = ["Youtuber", "Web Developer", "Engineer", "Teacher", "Stripper","Astronaut"]
let careerIndex = 0;
let characterIndex = 0
// regex to determine if letter is vowel 
const isVowel = char => /[aeiou]/i.test(char);


//update text to start to display text
updateText();


function updateText(){
    //increment character index
    characterIndex++;
    // update text  to show the next letter also take into account if its a vowel or not for "a" and "an" 
    mainContainerElement.innerHTML = `<h1>I am ${isVowel(careers[careerIndex].slice(0,1)) === true ? "an" : "a"}  ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
    // when you get to the last character of the career go back to the first character and increment the career 
    if(characterIndex === (careers[careerIndex].length)){
        characterIndex = 0;
        careerIndex++;
    }
    // when you get to the last career go back to the first 
    if(careers[careerIndex] === careers[(careers.length)]){
        careerIndex=0;
    }

    // 300ms pause before showing the next character to give feeling of being typed 
    timeout=setTimeout(()=>{
        updateText();

    },300)
}


    
        
