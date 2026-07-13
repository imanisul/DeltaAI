
import { getModel } from "../config/llm.models.js"


export const router=async (state) => {
    const llm = await getModel("router");

    const prompt = `You are an agent router.
    
    Available agents:

    - chat
    - search
    - coding
    - pdf
    - ppt
    - imageGen

    Rules:

    chat:
  - General conversation
  - Explanations
  - Learning
  - Questions & Answers
  - Brainstorming
  - Writing assistance
  - Summarization
  - Translation
  - Content generation
  - Email writing

search:
  - Current events
  - Latest information
  - News
  - Recent developments
  - Internet lookup
  - Documentation
  - Research
  - Fact checking
  - Trends
  - Comparisons
  - Tutorials

coding:
  - Generate code
  - Debug code
  - Build projects
  - Software architecture
  - API design
  - Database design
  - System design
  - Code review
  - Refactoring
  - Testing
  - DevOps
  - Code explanation
  - Bug fixing
  - Optimization
  - Deployment
  - CI/CD
  - Docker
  - Kubernetes
  - Microservices
  - AI integration

pdf:
  - Generate PDF
  - Read PDF
  - Summarize PDF
  - Extract text
  - OCR scanned PDFs
  - Convert to PDF
  - Merge PDFs
  - Split PDFs
  - Fill PDF forms
  - Compress PDFs
  - Annotate PDFs

ppt:
  - Generate presentations
  - Professional slides
  - Educational presentations
  - Business pitch decks
  - Company profiles
  - Research presentations
  - Training materials
  - Infographics
  - Speaker notes
  - Export PPTX

imageGen:
  - Generate images
  - Edit images
  - Image enhancement
  - Background removal
  - Upscaling
  - Logo design
  - Posters
  - Banners
  - Thumbnails
  - Social media graphics
  - AI art
  - Illustrations
  - Product mockups
  - Image analysis
  
  
  Return ONLY one word:

  chat
  search
  coding
  pdf
  ppt
  imageGen

  User Query:
    ${state.prompt}

`
 const response =  await llm.invoke(prompt);
 console.log(response)
 return {
    ...state,
    agent:response.content
            .trim()
            .toLowerCase()
    }
}