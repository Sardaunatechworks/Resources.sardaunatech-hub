const resources = {
  cybersecurity: [
    { title: "Intro to Cybersecurity", link: "https://youtu.be/ooJSgsB5fIE?si=wol_HqREXOMDybL5r" },
    { title: "Coming Soon", link: "" },
  ],
  ai: [
    { title: "Intro to Artificial Intelligence", link: "https://youtu.be/bknUn7yMwNI?si=VPNyFJRtnZa5HcUE" },
    { title: "Coming Soon 🔜", link: "" },
  ],
  web: [
    { title: "Intro to Web Dev", link: "https://youtu.be/GxmfcnU3feo?si=EB5zCHUOHwq7A1wA" },
    { title: "Coming Soon", link: "" },
  ],
  cloud: [
    { title: "Intro to Cloud Computing ", link: "https://youtu.be/M988_fsOSWo?si=53Q1j4OD41h0G1fu" }
  ],
  uiux: [
    { title: "Intro To UI/UX Design", link: "https://youtu.be/55NvZjUZIO8?si=5-vhtPbLERTTW2PM" }
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
