const resources = {
  cybersecurity: [
    { title: "Intro to Cybersecurity", link: "https://youtu.be/ooJSgsB5fIE?si=wol_HqREXOMDybL5r" },
    { title: "Week 2 Cybersecurity Basics ", link: "https://docs.google.com/document/d/1FpJR0kgoRYoPsBdeRJbsDGXm1oejnhbLI7gvVaRyBQM/edit?usp=drivesdk" },
  ],
  ai: [
    { title: "Intro to Artificial Intelligence", link: "https://youtu.be/bknUn7yMwNI?si=VPNyFJRtnZa5HcUE" },
    { title: "Week 2 AI Intro||", link: "https://docs.google.com/document/d/1vue81DUPTt0XblodFQIm7hMbXQOSgyyv7nsn8KTCEH8/edit?usp=drivesdk" },
  ],
  web: [
    { title: "Intro to Web Dev", link: "https://youtu.be/GxmfcnU3feo?si=EB5zCHUOHwq7A1wA" },
    { title: "Week 2- HTML & CSS", link: "https://docs.google.com/document/d/1_sS7iimeq6478fsfzdc713K7y8UH9v8B4IW9cACm2Pg/edit?usp=drivesdk" },
  ],
  cloud: [
    { title: "Intro to Cloud Computing ", link: "https://youtu.be/M988_fsOSWo?si=53Q1j4OD41h0G1fu" },
  
  
  { title: "Week 2 - Cloud ||", link: "https://docs.google.com/document/d/16UTJ_euLyionKKgtKfE8ciOcCWsGNsQcUCbLFS5C1cw/edit?usp=drivesdk" },
  
  ],
  uiux: [
    { title: "Intro To UI/UX Design", link: "https://youtu.be/55NvZjUZIO8?si=5-vhtPbLERTTW2PM" },
    {
      title: "Week 2 UI UX||", link: "https://docs.google.com/document/d/1-cjZ0ofKPEFotMl_MyHkpmZ3SDk9n1bdSqihayFu2og/edit?usp=drivesdk"
    }
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
