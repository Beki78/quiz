export enum Difficulty{
    EASY = "easy",
    MEDIUAM = 'mediuam',
    HARD = "hard"
}

export const fetchQuestions = async(amount:number, difficulty:Difficulty) =>{
    const endpoint = "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple";
    const data = await (await fetch(endpoint)).json()
    console.log(data);
    
}