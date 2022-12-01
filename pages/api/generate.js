import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = "This is a chat with Lord Rama who is God and a character from ramayana,  hinduism";
const generateAction = async (req, res) => {
  // Run first prompt
//   document.getElementById('yourchat').value='';
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.7,
    max_tokens: 250,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();
//   document.getElementById('yourchat').value="";
  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;