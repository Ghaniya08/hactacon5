    document.getElementById('generateBtn')?.addEventListener('click', function () {
        const picture = (document.getElementById('picture') as HTMLInputElement)?.files?.[0];
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const address = (document.getElementById('address') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    
        let pictureURL = '';
        if (picture) {
            pictureURL = URL.createObjectURL(picture);
        }
    
        // Generate the resume content
        const generatedResume = `
            <div>
                <h2>${name}</h2>
                <img src="${pictureURL}" alt="Profile Picture" width="100" height="100"><br>
                <strong>Phone:</strong> ${phone}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Address:</strong> ${address}<br><br>
                <strong>Skills:</strong> <div id="skillsList">${skills}</div><br>
                <button id="addSkillBtn">Add More Skills</button>
                <div id="additionalSkills"></div><br>
                <strong>Education:</strong> <div id="educationList">${education}</div><br>
                <button id="addEducationBtn">Add More Education</button>
                <div id="additionalEducation"></div><br>
                <strong>Experience:</strong> <div id="experienceList">${experience}</div><br>
                <button id="addExperienceBtn">Add More Experience</button>
                <div id="additionalExperience"></div><br>
            </div>
        `;
    
        // Insert generated resume into the DOM
        (document.getElementById('generatedResume') as HTMLElement).innerHTML = generatedResume;
    
        // Add event listeners after the DOM has been updated with the generated content
    
        // Event Listener for Adding More Skills
        document.getElementById('addSkillBtn')?.addEventListener('click', function () {
            const additionalSkillsDiv = document.getElementById('additionalSkills');
            const newSkillInput = document.createElement('input');
            newSkillInput.type = 'text';
            newSkillInput.placeholder = 'Additional Skill';
            additionalSkillsDiv?.appendChild(newSkillInput);
    
            // Add a listener to update the skills list when a new skill is added
            newSkillInput.addEventListener('change', function () {
                const skillsList = document.getElementById('skillsList');
                if (skillsList) {
                    skillsList.innerHTML += `<br>${newSkillInput.value}`;
                }
            });
        });
    
        // Event Listener for Adding More Education
        document.getElementById('addEducationBtn')?.addEventListener('click', function () {
            const additionalEducationDiv = document.getElementById('additionalEducation');
            const newEducationInput = document.createElement('textarea');
            newEducationInput.placeholder = 'Additional Education';
            additionalEducationDiv?.appendChild(newEducationInput);
    
            // Add a listener to update the education list when a new education is added
            newEducationInput.addEventListener('change', function () {
                const educationList = document.getElementById('educationList');
                if (educationList) {
                    educationList.innerHTML += `<br>${newEducationInput.value}`;
                }
            });
        });
    
        // Event Listener for Adding More Experience
        document.getElementById('addExperienceBtn')?.addEventListener('click', function () {
            const additionalExperienceDiv = document.getElementById('additionalExperience');
            const newExperienceInput = document.createElement('textarea');
            newExperienceInput.placeholder = 'Additional Experience';
            additionalExperienceDiv?.appendChild(newExperienceInput);
    
            // Add a listener to update the experience list when a new experience is added
            newExperienceInput.addEventListener('change', function () {
                const experienceList = document.getElementById('experienceList');
                if (experienceList) {
                    experienceList.innerHTML += `<br>${newExperienceInput.value}`;
                }
            });
        });

    const baseURL = window.location.origin + window.location.pathname; // Get base URL + path
    const shareableURL = `${baseURL}?name=${encodeURIComponent(name)}`;

    // Display the shareable link
    const shareableLinkElement = document.getElementById('shareableLink') as HTMLAnchorElement;
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;

    // Show the link section
    const shareableLinkSection = document.getElementById('shareableLinkSection') as HTMLElement;
    shareableLinkSection.style.display = 'block';
});

// Handle loading the resume from the shared link
window.addEventListener('load', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name');
    
    // Check if the "name" parameter is present in the URL
    if (nameParam) {
        const decodedName = decodeURIComponent(nameParam);
        const picture = (document.getElementById('picture') as HTMLInputElement)?.files?.[0];
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const address = (document.getElementById('address') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        let pictureURL = '';
        if (picture) {
            pictureURL = URL.createObjectURL(picture);
        }
    

        // Display the resume with the name from the URL
        const aftershare = `
            <div>
                <h2>${decodedName}</h2>
                <h2>${name}</h2>
                <img src="${pictureURL}" alt="Profile Picture" width="100" height="100"><br>
                <strong>Phone:</strong> ${phone}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Address:</strong> ${address}<br><br>
                <strong>Skills:</strong> <div id="skillsList">${skills}</div><br>
                <button id="addSkillBtn">Add More Skills</button>
                <div id="additionalSkills"></div><br>
                <strong>Education:</strong> <div id="educationList">${education}</div><br>
                <button id="addEducationBtn">Add More Education</button>
                <div id="additionalEducation"></div><br>
                <strong>Experience:</strong> <div id="experienceList">${experience}</div><br>
                <button id="addExperienceBtn">Add More Experience</button>
                <div id="additionalExperience"></div><br>
            </div>
        `;

        (document.getElementById('shareableLinkSection') as HTMLElement).innerHTML = aftershare;
    }

    });

