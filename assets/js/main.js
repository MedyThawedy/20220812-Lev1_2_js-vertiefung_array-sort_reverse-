let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

console.log('Unsorted : ', languages);

let languages1 = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

//sortierung2() 
const sortArray = (languages1) => {
    let sortLanguages = languages1.sort();
    console.log('Sorted : ', sortLanguages);
    return sortLanguages;
}

sortArray(languages1);


let languages2 = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];
//sortierung2()

const reverseArray = (languages2) => {
    let sortLanguages = languages2.sort();
    let reverseLanguages = sortLanguages.reverse();
    console.log('Reverse : ', reverseLanguages);
    return reverseLanguages;
}

reverseArray(languages2);