### Gemini Spark - AI-Powered Chrome Extension

Gemini Spark is a feature-rich Chrome Extension that utilizes Chrome's native AI capabilities to enhance productivity across Google Workspace applications, including Gmail, Docs, Sheets, and Slides. Powered by Chrome's Gemini Nano model and AI APIs, Gemini Spark provides on-device AI processing for privacy, speed, and seamless integration.


Table of Contents

1. [Features](#features)
   - [Gmail Integration](#gmail-integration)
   - [Google Docs](#google-docs)
   - [Google Sheets](#google-sheets)
   - [Google Slides](#google-slides)
   - [AI Chat](#ai-chat)
   - [Other Tools](#other-tools)
2. [Built with Chrome's AI APIs](#built-with-chromes-ai-apis)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Integration](#api-integration)
6. [Permissions](#permissions)
7. [Development](#development)
8. [Contributing](#contributing)
9. [License](#license)

---

## Features

### Gmail Integration
- **Smart Compose**: Compose emails faster with AI suggestions.
- **Reply Generation**: Automated, context-aware responses.
- **Auto Reply**: Create personalized automated responses.
- **Email Summarization**: Condense long emails into brief summaries.
- **Text Translation**: Real-time translation for:
  - English ↔ Spanish
  - English ↔ Japanese

### Google Docs
- **Paraphrasing Tools**:
  - Multiple writing styles: Standard, Formal, Simple, Creative, and more.
  - Synonym customization: Choose the level of change.
  - Context-aware: Ensure meaning and tone are preserved.
  - Format retention: Maintain original text structure.
- **Translation**:
  - Supports English, Spanish, and Japanese.
  - Progress tracking for translation model downloads.

### Google Sheets
- **Formula Generation**:
  - Supports calculations, lookups, conditionals, arrays, and more.
  - Adjustable complexity levels: Simple, Intermediate, Advanced.
  - Provides examples and detailed explanations.

### Google Slides
- **Content Generation**:
  - Generate slides tailored to specific topics and audiences.
  - Create outlines, speaker notes, and visual suggestions.
- **Outline Creation**:
  - Time-based structuring for better presentations.
  - Adjustable depth and flow optimization.

### AI Chat
- **Interactive Interface**:
  - Context-aware conversations.
  - Multiple styles of responses.

### Other Tools
- **Tab Summarizer**:
  - Summarize all open tabs in real time.
  - View customizable summaries at a glance.
- **Right-Click Summarizer**:
  - Summarize selected text instantly via context menu.
  - Customizable summary output.

---

<a href="https://youtu.be/f0YiFZvrJcw?si=-8DY_n1ItumHOQm1">
  <img src="https://github.com/user-attachments/assets/cffd8c8a-214c-4493-a3e0-16d1684dd0f1" alt="Click to Watch Video" width="300">
</a>

---


## Built with Chrome's AI APIs

Gemini Spark leverages the following APIs:
- **Gemini Nano Model**: On-device processing ensures privacy and speed.
- **Prompt API**: Content generation and text transformation.
- **Summarization API**: Summarize selected content and tab content.
- **Language API**: Real-time translation and language detection.

## Installation

1. **Prerequisites**:
   - Chrome version 122 or higher, or Chrome Canary (recommended for testing)
   - Enable experimental AI features:
     1. Open Chrome/Chrome Canary
     2. Navigate to `chrome://flags`
     3. Search for "Generative AI" 
     4. Enable "Generative AI features in Chrome"
     5. Enable "Extension Generative AI APIs"
     6. Restart browser when prompted

2. **Quick Test (Using Pre-built dist)**:
   - A pre-built `dist` folder is included for immediate testing
   - Skip to step 4 if you just want to test the extension

3. **Build from Source** (Optional):
   ```bash
   # Clone the repository
   git clone <repository-url>
   cd gemini-spark

   # Remove existing dist folder
   rm -rf dist

   # Install dependencies
   npm install

   # Build the extension
   npm run build
   ```

4. **Load in Chrome Canary (Recommended for Testing)**:
   1. Download and install [Chrome Canary](https://www.google.com/chrome/canary/)
   2. Open Chrome Canary
   3. Navigate to `chrome://extensions/`
   4. Enable "Developer mode" in the top-right corner
   5. Click "Load unpacked" in the top-left
   6. Navigate to your project's `dist` folder and select it
   7. The extension should now appear in your toolbar

5. **Load in Chrome (Version 122+)**:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `dist` folder

**Note**: For the best testing experience, we recommend using Chrome Canary as it provides the latest AI features and APIs.

---

## Usage

1. Open Gemini Spark from the extension toolbar.
2. Select a Google Workspace application or tool.
3. Choose the desired AI feature and follow the instructions.

### Debugging and Monitoring

All features include detailed console logging for debugging and verification:

1. **Access Console Logs**:
   - Right-click anywhere → "Inspect" (or press F12)
   - Select the "Console" tab
   - Filter logs by typing "Gemini-Spark:" in the console filter

2. **Log Categories**:
   ```javascript
   // Feature initialization
   console.log("Gemini-Spark: [Feature] initialized")
   
   // API calls
   console.log("Gemini-Spark: Calling [API_Name]", parameters)
   
   // Success responses
   console.log("Gemini-Spark: [Operation] completed", result)
   
   // Errors and warnings
   console.error("Gemini-Spark: Error in [Feature]", error)
   console.warn("Gemini-Spark: Warning - [Message]")
   ```

3. **Common Log Patterns**:
   - Model Loading: `"Gemini-Spark: Loading [model_name] - Progress: X%"`
   - API Status: `"Gemini-Spark: [API_Name] status: ready/error"`
   - Feature Usage: `"Gemini-Spark: Using [feature_name] with params:"`
   - Performance: `"Gemini-Spark: Operation completed in Xms"`

4. **Error Codes**:
   - `GS-001`: API initialization error
   - `GS-002`: Model loading failed
   - `GS-003`: Permission error
   - `GS-004`: Network error
   - `GS-005`: Invalid input

Example of checking if features are working:
```javascript
// Gmail Smart Compose
"Gemini-Spark: Smart Compose initialized"
"Gemini-Spark: Loading language model - Progress: 100%"
"Gemini-Spark: Suggestion generated in 150ms"

// Translation
"Gemini-Spark: Translation model ready"
"Gemini-Spark: Translating [en->es]"
"Gemini-Spark: Translation completed"

// Summarization
"Gemini-Spark: Summarizer initialized"
"Gemini-Spark: Processing text (length: X)"
"Gemini-Spark: Summary generated"
```

---

## API Integration

Gemini Spark uses Chrome's built-in AI APIs, ensuring robust and efficient performance:
- **Prompt API**: For generating and enhancing content.
- **Summarization API**: For creating concise, context-aware summaries.
- **Language API**:
  - On-device translation.
  - Real-time language detection.

---

## Permissions

- **`storage`**: Save user preferences.
- **`scripting`**: Inject content scripts into webpages.
- **`sidePanel`**: Provide a seamless user interface.
- **`activeTab`**: Access the content of the current tab.
- **`generativeContent`**: Enable AI-powered features.
- **`contextMenus`**: Add right-click options for quick access.

---

## Development

### Project Structure

```plaintext
gemini-spark/
├── sidepanel/               # Main extension UI components
│   ├── about/               # About page components
│   │   ├── about.js         # About page logic and content
│   │   └── about.css        # About page styling
│   ├── docs/                # Google Docs features
│   │   ├── docs.js          # Main Docs feature handler
│   │   ├── paraphrasingTools.js # Text paraphrasing functionality
│   │   └── translation.js   # Text translation features
│   ├── gmail/               # Gmail integration features
│   │   ├── gmail.js         # Gmail feature initialization
│   │   ├── gmailInteractions.js # Gmail content script for AI interactions
│   │   ├── gmailInteractions.css # Styles for Gmail interactions
│   │   ├── smartCompose.js  # Smart compose functionality
│   │   └── otherFeatures.js # Additional Gmail AI features
│   ├── sheets/              # Google Sheets features
│   │   ├── sheets.js        # Sheets feature initialization
│   │   └── generateFormula.js # Formula generation functionality
│   ├── slides/              # Google Slides features
│   │   ├── slides.js        # Slides feature initialization
│   │   ├── slideContentGen.js # Slide content generation
│   │   └── outlineCreator.js # Presentation outline creation
│   ├── otherTools/          # Additional utility features
│   │   ├── otherTools.js    # Other tools initialization
│   │   ├── rightClickSummarizer/
│   │   │   └── rightClickSummarizer.js # Right-click summary logic
│   │   └── tabSummarizer/
│   │       └── tabSummarizer.js # Tab summary implementation
│   ├── index.html           # Main extension HTML
│   ├── index.js             # Main extension JavaScript
│   └── index.css            # Main extension styles
├── background.js            # Service worker for extension
└── manifest.json            # Extension configuration
```



## API Implementation Examples

### Summarization API
Used in Tab Summarizer and Right-Click Summarizer features.

```javascript
// Example from rightClickSummarizer.js
const summarizationSession = await window.ai.summarizer.create({
  maxOutputWords: 30,
  minOutputWords: 10,
  targetOutputWords: 20,
  temperature: 0.2
});

// Check if model needs downloading
if (canSummarize.available === 'after-download') {
  await summarizationSession.ready;
}

const summary = await summarizationSession.summarize(text);
```

### Language (Translation) API
Used for real-time text translation features.

```javascript
// Example from translation.js
// Check translation availability
const canTranslate = await window.translation.canTranslate({
  sourceLanguage: fromLang,
  targetLanguage: toLang
});

// Create translator and handle model download if needed
const translator = await window.translation.createTranslator(languagePair);
if (canTranslate === 'after-download') {
  translator.addEventListener('downloadprogress', (e) => {
    const percent = Math.round((e.loaded / e.total) * 100);
    outputText.value = `Downloading translation model: ${percent}%`;
  });
  await translator.ready;
}

// Perform translation
const result = await translator.translate(inputText);
```

### Language Model (Prompt) API
Used for generating content, paraphrasing, and smart compose features.

```javascript
// Example from smartCompose.js
const session = await window.ai.languageModel.create({
  systemPrompt: `You are an expert email writer who crafts precise, well-structured emails.
                Follow these rules strictly:
                1. Maintain a ${tone} tone throughout
                2. Length requirement: ${lengthGuides[length]}
                3. Be concise and direct
                4. Include proper email greeting and signature`
});

const stream = await session.promptStreaming(prompt);
for await (const chunk of stream) {
  const newContent = chunk.slice(previousLength);
  outputBox.textContent += newContent;
  previousLength = chunk.length;
}
```

Key Implementation Notes:
1. **Prompt API**:
   - Supports streaming responses
   - Allows system prompts for context
   - Handles real-time content generation

2. **Summarization API**:
   - Configurable output length
   - Supports model downloading
   - Optimized for on-device processing

3. **Translation API**:
   - Handles model downloads with progress tracking
   - Supports language pair validation
   - Real-time translation capabilities


---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m 'Add feature-name'`).
4. Push to your fork (`git push origin feature-name`).
5. Submit a pull request.

---

## License

Gemini Spark is released under the [MIT License](LICENSE). 
