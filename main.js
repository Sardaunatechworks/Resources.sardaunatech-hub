const resourcesData = {
  cybersecurity: [
    { 
      title: "Intro to Cybersecurity", 
      type: "video",
      description: "A comprehensive introduction to the fundamental concepts of cybersecurity and threat landscapes.",
      link: "https://youtu.be/ooJSgsB5fIE?si=wol_HqREXOMDybL5r" 
    },
    { 
      title: "Week 2 - Cybersecurity Basics", 
      type: "document",
      description: "Detailed study guide covering the essential building blocks for secure systems.",
      link: "https://docs.google.com/document/d/1FpJR0kgoRYoPsBdeRJbsDGXm1oejnhbLI7gvVaRyBQM/edit?usp=drivesdk" 
    },
  ],
  ai: [
    { 
      title: "Intro to Artificial Intelligence", 
      type: "video",
      description: "Explore the basics of machine learning, neural networks, and AI ethics.",
      link: "https://youtu.be/bknUn7yMwNI?si=VPNyFJRtnZa5HcUE" 
    },
    { 
      title: "Week 2 - AI Deep Dive", 
      type: "document",
      description: "Analysis of the mathematical foundations and use cases for modern AI.",
      link: "https://docs.google.com/document/d/1vue81DUPTt0XblodFQIm7hMbXQOSgyyv7nsn8KTCEH8/edit?usp=drivesdk" 
    },
  ],
  web: [
    { 
      title: "Intro to Web Development", 
      type: "video",
      description: "Start your journey with the core technologies of the internet.",
      link: "https://youtu.be/GxmfcnU3feo?si=EB5zCHUOHwq7A1wA" 
    },
    { 
      title: "Week 2 - HTML & CSS Mastery", 
      type: "document",
      description: "Advanced layout techniques and semantic HTML best practices.",
      link: "https://docs.google.com/document/d/1_sS7iimeq6478fsfzdc713K7y8UH9v8B4IW9cACm2Pg/edit?usp=drivesdk" 
    },
  ],
  cloud: [
    { 
      title: "Intro to Cloud Computing", 
      type: "video",
      description: "Understanding IaaS, PaaS, and SaaS in today's digital landscape.",
      link: "https://youtu.be/M988_fsOSWo?si=53Q1j4OD41h0G1fu" 
    },
    { 
      title: "Week 2 - Cloud Architecture", 
      type: "document",
      description: "Diving into scalable infrastructure and cloud security models.",
      link: "https://docs.google.com/document/d/16UTJ_euLyionKKgtKfE8ciOcCWsGNsQcUCbLFS5C1cw/edit?usp=drivesdk" 
    },
  ],
  uiux: [
    { 
      title: "Intro To UI/UX Design", 
      type: "video",
      description: "The principles of user-centric design and the design thinking process.",
      link: "https://youtu.be/55NvZjUZIO8?si=5-vhtPbLERTTW2PM" 
    },
    {
      title: "Week 2 - UI UX Fundamentals", 
      type: "document",
      description: "Color theory, typography, and wireframing for digital products.",
      link: "https://docs.google.com/document/d/1-cjZ0ofKPEFotMl_MyHkpmZ3SDk9n1bdSqihayFu2og/edit?usp=drivesdk"
    }
  ]
};

const courseSelect = document.getElementById("course");
const searchInput = document.getElementById("search");
const resourceList = document.getElementById("resource-list");

function createResourceCard(res) {
  const card = document.createElement("div");
  card.className = "resource-card";
  
  card.innerHTML = `
    <span class="type-badge">${res.type}</span>
    <h3>${res.title}</h3>
    <p>${res.description}</p>
    <a href="${res.link}" target="_blank" class="resource-link">
      Access Resource
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
    </a>
  `;
  
  return card;
}

function filterResources() {
  const selectedCourse = courseSelect.value;
  const searchTerm = searchInput.value.toLowerCase();
  
  resourceList.innerHTML = "";
  
  let filtered = [];
  
  if (selectedCourse === "all") {
    // Combine all arrays
    filtered = Object.values(resourcesData).flat();
  } else {
    filtered = resourcesData[selectedCourse] || [];
  }
  
  // Apply search filter
  filtered = filtered.filter(res => 
    res.title.toLowerCase().includes(searchTerm) || 
    res.description.toLowerCase().includes(searchTerm)
  );
  
  if (filtered.length === 0) {
    resourceList.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; color: var(--text-secondary);">
        <p style="font-size: 1.25rem;">No resources found matching your search.</p>
        <p>Try a different keyword or category.</p>
      </div>
    `;
    return;
  }
  
  filtered.forEach(res => {
    resourceList.appendChild(createResourceCard(res));
  });
}

// Event Listeners
courseSelect.addEventListener("change", filterResources);
searchInput.addEventListener("input", filterResources);

// Initial Load
document.addEventListener("DOMContentLoaded", filterResources);
