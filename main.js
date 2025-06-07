const resources = {
  cybersecurity: [
    { title: "Intro to Cybersecurity", link: "https://youtu.be/fIntroCyber" },
    { title: "Ethical Hacking Guide", link: "https://example.com/hacking-guide.pdf" },
  ],
  ai: [
    { title: "AI Basics with Python", link: "https://youtu.be/ai-python" },
    { title: "Machine Learning Crash Course", link: "https://example.com/ml-course" },
  ],
  web: [
    { title: "HTML, CSS, JS Bootcamp", link: "https://youtube.com/webbootcamp" },
    { title: "Frontend Dev Guide", link: "https://example.com/frontend.pdf" },
  ],
  mobile: [
    { title: "React Native for Beginners", link: "https://youtube.com/shorts/V_8PlJhjzI4?si=aK70umSIJHOsPYiy" }
  ],
  uiux: [
    { title: "Design Thinking", link: "https://example.com/design-thinking" }
  ]
};

const courseSelect = document.getElementById("course");
const resourceList = document.getElementById("resource-list");

function loadResources(course) {
  resourceList.innerHTML = "";
  const selected = resources[course] || [];
  selected.forEach((res) => {
    const div = document.createElement("div");
    div.className = "resource-card";
    div.innerHTML = `<h3>${res.title}</h3><a href="${res.link}" target="_blank">Access Resource</a>`;
    resourceList.appendChild(div);
  });
}

// Initial load
loadResources(courseSelect.value);

// Change course
courseSelect.addEventListener("change", (e) => {
  loadResources(e.target.value);
});