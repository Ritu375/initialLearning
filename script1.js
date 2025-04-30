window.addEventListener('DOMContentLoaded', function() {
    // Change background color on button click
    const changeColorBtn = document.getElementById('changeColorBtn');
    if (changeColorBtn) {
      changeColorBtn.addEventListener('click', function() {
        const currentColor = window.getComputedStyle(document.body).backgroundColor;
        if (currentColor === 'rgb(152, 255, 152)' || currentColor === '#98ff98') {
          document.body.style.backgroundColor = 'white';
        } else {
          document.body.style.backgroundColor = '#98ff98';
        }
      });
    }
  
    // About Page: Load bio text dynamically
    const loadBioBtn = document.getElementById('loadBioBtn');
    if (loadBioBtn) {
      loadBioBtn.addEventListener('click', function() {
        const bioText = "I am a passionate web developer with expertise in front-end and back-end technologies. With a keen eye for design and functionality, I specialize in creating responsive, user-friendly websites. I have experience working with HTML, CSS, JavaScript, and frameworks like React and Node.js. My goal is to build engaging web applications that provide exceptional user experiences. Always learning and staying updated with the latest trends in web development.";
        document.getElementById('bio').textContent = bioText;
      });
    }
     
    





  
    // Featured Projects


  
  const featuredProjects = [
    {
      name: '"NextGen E-Commerce Platform"',
      description: 'A state-of-the-art e-commerce platform built using React and Node.js, designed for seamless user experience and high-performance transactions. This platform features real-time inventory tracking, personalized recommendations, and an intuitive checkout process.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/8/441535251/QG/NY/RQ/92862087/ecommerce-website.jpeg'  // Add the image path here
    },
    {
      name: '"Data Insight Explorer"',
      description: 'An interactive data visualization tool powered by D3.js and Python that turns complex datasets into accessible insights. Users can explore and analyze various datasets through dynamic charts, graphs, and interactive features that highlight key trends and correlations.',
      image: 'https://etimg.etb2bimg.com/photo/93180170.cms'  // Add the image path here
    },
    {
      name: '"SmartTask – Task Management App"',
      description: 'A productivity-enhancing app that helps users manage their tasks and deadlines effectively. Built with React Native, it integrates task prioritization, notifications, and a smart calendar feature to keep track of personal and professional goals.',
      image: 'https://i.pinimg.com/736x/af/eb/d9/afebd9837ff6953c2f8e8b9f13031155.jpg'  // Add the image path here
    }
  ];

  // Get the correct element for Featured Projects
  const featuredProjectsContainer = document.getElementById('projectsContainer');
  
  // Function to add featured projects to the page
  function displayFeaturedProjects() {
    featuredProjects.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project');
  
      const projectImage = document.createElement('img');
      projectImage.src = project.image;  // Set the image source
      projectImage.alt = project.name;  // Set alt text for accessibility
      projectImage.style.width = '100%'; // Make the image responsive or adjust size as needed
      projectImage.style.height = 'auto';
  
      const projectTitle = document.createElement('h3');
      projectTitle.textContent = project.name;
  
      const projectDescription = document.createElement('p');
      projectDescription.textContent = project.description;
  
        
      projectDiv.appendChild(projectTitle);
      projectDiv.appendChild(projectDescription);
      projectDiv.appendChild(projectImage);// Append the image first
  
      featuredProjectsContainer.appendChild(projectDiv);
    });
  }

  // Call the function to display the projects
  displayFeaturedProjects();





  // Get the container for social links
  const socialLinksContainer = document.getElementById('Social-links');

  // Dynamically create and add links
  Object.keys(socialLinks).forEach(platform => {
    const linkElement = document.createElement('a');
    linkElement.href = socialLinks[platform];
    linkElement.textContent = platform.charAt(0).toUpperCase() + platform.slice(1); // Capitalize the first letter
    linkElement.target = '_blank'; // Open the link in a new tab
    linkElement.style.display = 'block'; // Display each link in a new line
    linkElement.style.margin = '10px 0'; // Add some spacing between the links
    socialLinksContainer.appendChild(linkElement);
  });

}); 