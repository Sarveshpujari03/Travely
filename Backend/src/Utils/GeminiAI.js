import { GoogleGenerativeAI } from '@google/generative-ai'

const responseGeneration = async (prompt) => {

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(prompt);

    // console.log(result.response.text());

    return result.response.text();

}

export default responseGeneration;