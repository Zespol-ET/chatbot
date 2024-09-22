const chatBox = document.getElementById('chat-box');  

function sendUserMessage() {  
  const userInput = document.getElementById('user-input').value;  
  appendMessage(userInput, 'user');  
  appendMessage('Typing...', 'bot');  

  setTimeout(() => {  
    const response = getBotResponse(userInput);  
    appendMessage(response, 'bot');  
  }, 1000); // Delay for 1 second (1000 milliseconds)  
}  

function getBotResponse(userInput) {  
  const lowerInput = userInput.toLowerCase();  

  // Personal Information Questions  
  if (lowerInput.includes('name')) {  
    return "My name is Tsegameriam Eskinder.";  
  }   
  if (lowerInput.includes('where are you from') || lowerInput.includes('you from') || lowerInput.includes('where are you')) {  
    return "I’m originally from Ethiopia.";  
  }  
  if (lowerInput.includes('you study') || lowerInput.includes('what do you study') || lowerInput.includes('your field of study')) {  
    return "I study computer science.";  
  }  
  if (lowerInput.includes('your degree') || lowerInput.includes('what degree do you have') || lowerInput.includes('what qualification')) {  
    return "I hold a Udacity's Nanodegree in web development.";  
  }  
  if (lowerInput.includes('hobbies') || lowerInput.includes('what do you enjoy') || lowerInput.includes('what do you like to do in your free time')) {  
    return "I enjoy coding, reading, and hiking.";  
  }  
  if (lowerInput.includes('favorite book') || lowerInput.includes('what book do you love') || lowerInput.includes('best book')) {  
    return "I love 'Atomic Habits' by James Clear.";  
  }  
  if (lowerInput.includes('sports') || lowerInput.includes('do you play any sports') || lowerInput.includes('favorite sport')) {  
    return "I enjoy playing basketball and football.";  
  }  
  if (lowerInput.includes('food') || lowerInput.includes('favorite food') || lowerInput.includes('what do you like to eat')) {  
    return "I love traditional Ethiopian dishes, especially injera.";  
  }  
  if (lowerInput.includes('speak') || lowerInput.includes('what languages do you speak') || lowerInput.includes('are you multilingual')) {  
    return "I speak Amharic and English.";  
  }  
  if (lowerInput.includes('who inspires you') || lowerInput.includes('who is your inspiration') || lowerInput.includes('who do you admire')) {  
    return "I am inspired by innovators like Steve Jobs and Elon Musk.";  
  }  
  if (lowerInput.includes('favorite season') || lowerInput.includes('which season do you like') || lowerInput.includes('what is your favorite time of year')) {  
    return "I enjoy summer for the warmth and outdoor activities.";  
  }  
  if (lowerInput.includes('color') || lowerInput.includes('what is your favorite color') || lowerInput.includes('favorite color?')) {  
    return "My favorite color is blue.";  
  }  
  if (lowerInput.includes('pets') || lowerInput.includes('do you have any pets') || lowerInput.includes('do you own any animals')) {  
    return "Yes, I have a dog named Dory.";  
  }  
  if (lowerInput.includes('weekends') || lowerInput.includes('what do you do on weekends') || lowerInput.includes('weekend activities')) {  
    return "I like to relax, read, and catch up with friends.";  
  }  
  
  // Career and Work Questions  
  if (lowerInput.includes('current job') || lowerInput.includes('what are you doing now') || lowerInput.includes('current work')) {  
    return "I am currently a student and also work on personal coding projects.";  
  }  
  if (lowerInput.includes('dream job') || lowerInput.includes('what is your ideal job') || lowerInput.includes('your career goal')) {  
    return "My dream job is to be a software engineer at a tech company.";  
  }  
  if (lowerInput.includes('career aspirations') || lowerInput.includes('what do you want to achieve in your career') || lowerInput.includes('future career plans')) {  
    return "I aspire to work in artificial intelligence and machine learning.";  
  }  
  if (lowerInput.includes('yourself in five years') || lowerInput.includes('where do you see yourself in five years') || lowerInput.includes('future self')) {  
    return "In five years, I see myself as a software engineer with experience in AI.";  
  }  
  if (lowerInput.includes('strengths') || lowerInput.includes('what are your strengths') || lowerInput.includes('personal strengths')) {  
    return "My strengths include problem-solving, adaptability, and teamwork.";  
  }  
  if (lowerInput.includes('biggest achievement') || lowerInput.includes('what are you proud of') || lowerInput.includes('successes')) {  
    return "My greatest achievement is completing a challenging project successfully.";  
  }  
  if (lowerInput.includes('plan to pursue studies') || lowerInput.includes('further studies') || lowerInput.includes('studies plans')) {  
    return "No, I don't plan to pursue further studies; my plan is to build my own company in the future.";  
  }  
  if (lowerInput.includes('favorite subjects') || lowerInput.includes('what subjects do you like') || lowerInput.includes('subjects you enjoy')) {  
    return "I enjoy subjects related to programming and mathematics.";  
  }  
  
  // Future and Aspirations  
  if (lowerInput.includes('goals') || lowerInput.includes('future goals') || lowerInput.includes('what do you want to achieve')) {  
    return "My future goals include building a company and investing in businesses, especially in tech.";  
  }  
  if (lowerInput.includes('travel plans') || lowerInput.includes('do you plan to travel') || lowerInput.includes('where will you go next')) {  
    return "Yes, I plan to visit Saudi Arabia next year.";  
  }  
  if (lowerInput.includes('who inspires you') || lowerInput.includes('what inspires you') || lowerInput.includes('inspiration')) {  
    return "I am inspired by the potential of technology to change lives.";  
  }  
  if (lowerInput.includes('what impact do you want') || lowerInput.includes('impact you wish to make') || lowerInput.includes('how do you want to contribute')) {  
    return "I want to contribute positively to my community and the tech industry.";  
  }  
  if (lowerInput.includes('motivation') || lowerInput.includes('what drives you') || lowerInput.includes('what inspires you to work')) {  
    return "My motivation comes from the desire to solve real-world problems and change my life.";  
  }  
  if (lowerInput.includes('see yourself') || lowerInput.includes('future vision') || lowerInput.includes('where do you envision yourself')) {  
    return "I hope to live in a vibrant city with a strong tech scene.";  
  }  
  if (lowerInput.includes('dream project') || lowerInput.includes('what would be your ideal project') || lowerInput.includes('biggest project aspiration')) {  
    return "My dream project is to create an impactful app that helps people.";  
  }  
  
  // General Questions  
  if (lowerInput.includes('philosophy of life') || lowerInput.includes('life philosophy') || lowerInput.includes('belief system')) {  
    return "I believe in continuous learning and making a difference.";  
  }  
  if (lowerInput.includes('role model') || lowerInput.includes('who do you look up to') || lowerInput.includes('who influences you')) {  
    return "My role model is my uncle for his achievements and integrity.";  
  }  
  if (lowerInput.includes('biggest challenge') || lowerInput.includes('what is your greatest challenge') || lowerInput.includes("challenges you've faced")) {  
    return "Overcoming self-doubt and staying focused is sometimes a challenge.";  
  }
  if (lowerInput.includes('teamwork') || lowerInput.includes('working in teams') || lowerInput.includes('collaboration')) {  
    return "Teamwork is essential for success; collaboration brings out the best ideas.";  
  }  
  if (lowerInput.includes('handle stress') || lowerInput.includes('how do you manage stress') || lowerInput.includes('stress management')) {  
    return "I manage stress by exercising, meditating, and staying organized.";  
  }  
  if (lowerInput.includes('problem solving') || lowerInput.includes('how do you approach problems') || lowerInput.includes('your problem-solving strategy')) {  
    return "I break problems down into smaller parts and tackle them step by step.";  
  }  
  if (lowerInput.includes('life lessons you have learned') || lowerInput.includes('important life lessons') || lowerInput.includes('what have you learned in life')) {  
    return "If you have a dream for tomorrow and live for today, you are successful.";  
  }  
  
  // Fun and Personal Preferences  
  if (lowerInput.includes('favorite game') || lowerInput.includes('what game do you like') || lowerInput.includes('games you enjoy')) {  
    return "I enjoy playing video games, especially strategy games.";  
  }  
  if (lowerInput.includes('enjoy nature') || lowerInput.includes('do you like nature') || lowerInput.includes('spend time outdoors')) {  
    return "Yes, I love going hiking and spending time outdoors.";  
  }  
  if (lowerInput.includes('holiday') || lowerInput.includes('favorite holiday') || lowerInput.includes('what holiday do you enjoy')) {  
    return "I love Christmas for the festive spirit.";  
  }  
  if (lowerInput.includes('kind of movies') || lowerInput.includes('favorite type of movies') || lowerInput.includes('what movies do you like')) {  
    return "I enjoy science fiction and thrillers.";  
  }  
  if (lowerInput.includes('enjoy art') || lowerInput.includes('do you appreciate art') || lowerInput.includes('art preferences')) {  
    return "Yes, I appreciate various forms of art and creativity.";  
  }  
  if (lowerInput.includes('favorite cartoon') || lowerInput.includes('cartoons you like') || lowerInput.includes('what cartoon do you enjoy')) {  
    return "My favorite cartoon is 'Soul'.";  
  }  
  if (lowerInput.includes('travel next') || lowerInput.includes('where do you want to travel next') || lowerInput.includes('next travel destination')) {  
    return "I would love to travel to the UK next.";  
  }  
  
  // Technology Questions  
  if (lowerInput.includes('programming languages') || lowerInput.includes('what languages do you code in') || lowerInput.includes('coding languages')) {  
    return "I am familiar with Python and JavaScript.";  
  }  
  if (lowerInput.includes('coding project') || lowerInput.includes('favorite coding project') || lowerInput.includes("best project you've worked on")) {  
    return "My favorite coding project was a personal website I built.";  
  }  
  if (lowerInput.includes('stay updated with tech') || lowerInput.includes('how do you keep up with technology') || lowerInput.includes('technology news sources')) {  
    return "I follow tech blogs, podcasts, and attend webinars.";  
  }  
  if (lowerInput.includes('about AI') || lowerInput.includes('what do you think about artificial intelligence') || lowerInput.includes('AI perspective')) {  
    return "I think AI has the potential to revolutionize many industries and it is a great tool.";  
  }  
  
  // Default Responses  
  if (userInput.length === 0) {  
    return "Please write something to get a response.";  
  }  
  return "I'm sorry, I didn't understand that. Please only ask about Tsegameriam Eskinder, as this is a personal chatbot.";  
}

function appendMessage(message, sender) {  
  const messageElement = document.createElement('div');  
  messageElement.classList.add('message', sender);  
  messageElement.innerText = message;  
  chatBox.appendChild(messageElement);  

  if (sender === 'bot' && message === 'Typing...') {  
    setTimeout(() => {  
      chatBox.removeChild(messageElement);  
    }, 1000); // Delay for 1 second (1000 milliseconds)  
  }  
}