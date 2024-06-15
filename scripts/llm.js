
document.body.innerHTML = 'hasdadsasdola'

import * as webllm from "https://esm.run/@mlc-ai/web-llm";


// Callback function to update model loading progress
const initProgressCallback = (initProgress) => {
  console.log(initProgress);
  document.body.innerHTML = initProgress.progress * 100 + '%';
}
const selectedModel = "Llama-3-8B-Instruct-q4f32_1-MLC";
// const selectedModel = 'gemma-2b-it-q4f32_1-MLC';

const engine = await webllm.CreateMLCEngine(
  selectedModel,
  { initProgressCallback: initProgressCallback }, // engineConfig
);

const messages = [
    { role: "system", content: "You are a helpful AI assistant." },
    { role: "user", content: "Hello!" },
  ]
  
  const reply = await engine.chat.completions.create({
    messages,
  });

  console.log('@@@@@@@@@',reply);