document.addEventListener('DOMContentLoaded' , ()=>{
    const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
    const skillsSection = document.getElementById("skills") as HTMLElement;
      toggleButton.addEventListener('click',()=>{
        if (skillsSection.style.display === 'none'){
          skillsSection.style.display = 'block';
        } else {
          skillsSection.style.display = 'none';
        }
      })
     }
)


document.getElementById('generateBtn')?.addEventListener('click', function () {
    const picture = (document.getElementById('picture') as HTMLInputElement)?.files?.[0];
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const work = (document.getElementById('work') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const linkdin = (document.getElementById('linkedin') as HTMLInputElement).value;
    // const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skill') as HTMLInputElement).value;
    const age = (document.getElementById('age') as HTMLInputElement).value;
    // const education = (document.getElementById('hsc') as HTMLTextAreaElement).value;
    // const experience = (document.getElementById('ssc') as HTMLTextAreaElement).value;
    const genderInput = document.querySelector('input[name="gender"]:checked') as HTMLInputElement;
    const gender = genderInput ? genderInput.value : 'Not specified';
    const metriatInput = document.querySelector('input[name="metriat"]:checked') as HTMLInputElement;
    const metriat = metriatInput ? metriatInput.value : 'Not specified';
    const dobb = (document.getElementById("dob") as HTMLInputElement).value;
    const city = (document.getElementById("city") as HTMLSelectElement).value;
    const province = (document.getElementById("province") as HTMLSelectElement).value;
    const yearofexp = (document.getElementById('expyear') as HTMLInputElement).value;
    const feild = (document.getElementById('indystryy') as HTMLInputElement).value;
    const qualication = (document.getElementById('qualification') as HTMLInputElement).value;
    const hsc = (document.getElementById('hsc') as HTMLInputElement).value;
    const yearhsc = (document.getElementById('hscYear') as HTMLInputElement).value;
    const ssc = (document.getElementById('ssc') as HTMLInputElement).value;
    const yearssc = (document.getElementById('sscYear') as HTMLInputElement).value;
    const courname = (document.getElementById('coc') as HTMLInputElement).value;
    const courinst = (document.getElementById('cocInstitute') as HTMLInputElement).value;
    const coyear = (document.getElementById('cocYear') as HTMLInputElement).value;

    let pictureURL = '';
    if (picture) {
        pictureURL = URL.createObjectURL(picture);
    }

    const generatedResume = `
        <div>
        <div class="maindivforall">
        <div class="formain">
            <div class="headings">
            <img src="${pictureURL}" alt="" class="forpic">
            <div class="forheadings">
            <h3>${name}</h3>
            <h1 class="h1dev"><span>${work}</span></h1>
            <h6 class="paraformetsss">Hello, I'm ${name} , a highly motivated and experienced ${work} with ${yearofexp} years of expertise in ${feild}. I possess a strong foundation in ${qualication} from ${hsc}. You can reach me at ${phone} or ${email}.I am eager to apply my technical skills and learnings in real-world projects, while continuously expanding my knowledge in cutting-edge technologies. Known for my adaptability, quick learning, and dedication to achieving excellence in both academics and technical pursuits.</h6>
            </div>
            </div>
            <div class="contact-info">
               <p class="contact-label">Email:</p>
                    <p class="contact-detail"><a href="mailto:${email}">${email}</a></p>
        
                <p class="contact-label">LinkedIn:</p>
                    <p class="contact-detail"><a href="${linkdin}" target="_blank">${linkdin}</a></p>
        
                <p class="contact-label">Phone:</p>
                    <p class="contact-detail"><a href="tel:${phone}">${phone}</a></p>
            </div>
        </div>


        <div class="others">
            <div>
                <div class="Profile">
                    <h1>Profile</h1>
                    <h2>Hello, I'm ${name} , a highly motivated and experienced ${work} with ${yearofexp} years of expertise in ${feild}. I possess a strong foundation in ${qualication} from ${hsc}. You can reach me at ${phone} or ${email}.I am eager to apply my technical skills and learnings in real-world projects, while continuously expanding my knowledge in cutting-edge technologies. Known for my adaptability, quick learning, and dedication to achieving excellence in both academics and technical pursuits.</h2>
                </div>
                <hr>
                <div class="personalinfo">
                    <h1 >Personal Information</h1>
                    <ul>
                        <li> Age: ${age}</li> 
                        <li>Date of Birth: ${dobb}</li>
                        <li>Nationaltiy: Pakistani</li>
                        <li>Gender: ${gender}</li>
                        <li>Metriat status: ${metriat}</li>
                        <li>Province: ${province}</li>
                        <li>City: ${city}</li>
                    </ul>
                </div>
                <hr>
                <div class="contact">
                    <h1 >Contact me</h1>
                    <ul>
                        <li><pre><i class="fa-solid fa-phone"></i>  ${phone}</pre></li> 
                        <li><pre><i class="fa-solid fa-paper-plane"></i> ${email}</pre></li>
                        <li><pre><i class="fa-solid fa-house-chimney"></i>  Pakistan</pre></li>
                        <li><pre><i class="fa-solid fa-house-chimney"></i>  ${city}</pre></li>
                    </ul>
                </div>
            </div>
           
           <div>
            <div class="education">
                <h1>Education & Learning</h1>
                <h2>Higher Secondary Certificate </h2>
                <ul>
                    <li>${hsc}</li>
                    <li>${yearhsc}</li>
                </ul>
                <hr>
                <h2>Secondary School Certificate</h2>
                <ul>
                    <li>${ssc}</li>
                    <li>${yearssc}</li>
                </ul>
                <hr>
                <h2>Certifications or Courses:</h1>
                <ul>
                <li>${courname}</li>
                <li>From : ${courinst}</li>
                <li>${coyear}</li>
            </ul>
            <hr>
            </div>
            <div id="skills" class="skills">
                <h1>Skills</h1>
               <div class="ullllll">
                <div>
                  <ul id="skillsList">
                        <li>${skills}</li>
                    </ul>
                    <button id="showSkillInputBtn">Add Skill</button><br>
                    <div id="newSkillContainer" style="display: none;">
                        <input type="text" id="newSkillInput" placeholder="Enter new skill"><br><br>
                        <button id="addSkillBtn">Add</button>
                </div>
                
               </div>
               
               </div>
           </div>
        </div>
    </div>
           
            
        </div>
    `;
 if (!name || !work || !picture || !email || !age || !dobb || !phone || !linkdin || !hsc || !yearhsc || !ssc || !yearssc || !skills || !courname || !courinst || !coyear || !yearofexp || !feild || !qualication) {
        alert("Please fill in all the fields before generating the resume.");
    } else {
        // Call function to generate the resume (if all fields are filled)
        generatedResume;
    }
    (document.getElementById('generatedResume') as HTMLElement).innerHTML = generatedResume;


    const showSkillButton = document.getElementById('showSkillInputBtn');
    const newSkillContainer = document.getElementById('newSkillContainer') as HTMLElement;

    if (showSkillButton) {
        showSkillButton.addEventListener('click', function () {
            showSkillButton.style.display = 'none'; 
            newSkillContainer.style.display = 'block';
        });
    }
    const addSkillButton = document.getElementById('addSkillBtn');
    if (addSkillButton) {
        addSkillButton.addEventListener('click', function () {
            addNewSkill(showSkillButton, newSkillContainer);
        });
    }
});
function addNewSkill(showSkillButton: HTMLElement, newSkillContainer: HTMLElement) {
    const newSkillInput = document.getElementById('newSkillInput') as HTMLInputElement;
    const newSkill = newSkillInput.value;

    if (newSkill.trim()) {
        const skillsList = document.getElementById('skillsList');
        const newSkillItem = document.createElement('li');
        newSkillItem.textContent = newSkill;
        skillsList?.appendChild(newSkillItem);
        newSkillInput.value = '';
        newSkillContainer.style.display = 'none';
        showSkillButton.style.display = 'block';
    }
}
