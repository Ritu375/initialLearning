 const projects = [
    { 
      name: 'Real-Time Chat Application', 
      description: 'A real-time chat application built with Socket.io and Node.js. The app allows users to send and receive messages instantly in a group chat or private messages. It features a clean, minimal interface and includes user authentication with JWT tokens for secure access.',
      image: 'https://i.ytimg.com/vi/domt_Sx-wTY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCft2WyiGX6UF6WCKxo-soRZtd1gQ',
      link: '#'
    },
    { 
      name: 'Social Media Clone (Instagram/Facebook)', 
      description: 'A social media platform clone where users can upload photos, like posts, and comment on them. Built using React and Firebase, the app includes user authentication, image storage with Firebase Storage, and a real-time news feed. Users can follow each other and share posts.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKIGAMhww5hZiMZpRMqVPaX5w0m7ITNYD4Q&s',
      link: '#'
    },
    { 
      name: 'Weather App with API Integration', 
      description: 'A weather app that allows users to search for current weather conditions in any city worldwide. Built using JavaScript and the OpenWeatherMap API, the app displays real-time weather data, including temperature, humidity, and weather forecasts for the next few days.',
      image: 'https://dianapps.com/blog/wp-content/uploads/2024/01/react-native-weather-min-scaled.jpg',
      link: '#'
    }
  ];
  
  const projectListElement = document.getElementById('projectList');
  
  // Function to add projects to the page
  function displayProjects() {
    projects.forEach((project, index) => {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project');
      
      const projectTitle = document.createElement('h2');
      projectTitle.textContent = project.name;
  
      const projectDescription = document.createElement('p');
      projectDescription.textContent = project.description;
      projectDescription.style.display = 'none';  // Hide description initially
      
      // Add project image
      const projectImage = document.createElement('img');
      projectImage.src = project.image;
      projectImage.alt = `${project.name} image`;
      
      // Add "View Details" button
      const projectButton = document.createElement('button');
      projectButton.textContent = 'View Details';
      projectButton.onclick = () => toggleProjectDetails(index);
  
      projectDiv.appendChild(projectImage);
      projectDiv.appendChild(projectTitle);
      projectDiv.appendChild(projectDescription);
      projectDiv.appendChild(projectButton);
      
      projectListElement.appendChild(projectDiv);
    });
  }
  
  // Function to toggle the visibility of project description
  function toggleProjectDetails(index) {
    const projectDescription = document.querySelectorAll('.project p')[index];
    
    // Toggle visibility
    if (projectDescription.style.display === 'none') {
      projectDescription.style.display = 'block';
    } else {
      projectDescription.style.display = 'none';
    }
  }
  
  // Fetching HTML content dynamically (simulate loading external HTML)
  function fetchProjectContent() {
    const content = `
      <h3>Project Details</h3>
      <p>This is a description of a detailed project.</p>
    `;
    
    const projectContainer = document.getElementById('projectsContainer');
    projectContainer.innerHTML = content;
  }
  
  // Run functions on page load
  window.onload = function() {
    displayProjects();    // For projects page
    fetchProjectContent(); // For dynamic content on the landing page
  };
  
  
  


  