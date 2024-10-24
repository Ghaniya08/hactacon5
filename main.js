var _a;
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById("toggle-skills");
    var skillsSection = document.getElementById("skills");
    toggleButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
});
(_a = document.getElementById('generateBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var _a, _b;
    var picture = (_b = (_a = document.getElementById('picture')) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b[0];
    var name = document.getElementById('name').value;
    var work = document.getElementById('work').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var linkdin = document.getElementById('linkedin').value;
    // const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    var skills = document.getElementById('skill').value;
    var age = document.getElementById('age').value;
    // const education = (document.getElementById('hsc') as HTMLTextAreaElement).value;
    // const experience = (document.getElementById('ssc') as HTMLTextAreaElement).value;
    var genderInput = document.querySelector('input[name="gender"]:checked');
    var gender = genderInput ? genderInput.value : 'Not specified';
    var metriatInput = document.querySelector('input[name="metriat"]:checked');
    var metriat = metriatInput ? metriatInput.value : 'Not specified';
    var dobb = document.getElementById("dob").value;
    var city = document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var yearofexp = document.getElementById('expyear').value;
    var feild = document.getElementById('indystryy').value;
    var qualication = document.getElementById('qualification').value;
    var hsc = document.getElementById('hsc').value;
    var yearhsc = document.getElementById('hscYear').value;
    var ssc = document.getElementById('ssc').value;
    var yearssc = document.getElementById('sscYear').value;
    var courname = document.getElementById('coc').value;
    var courinst = document.getElementById('cocInstitute').value;
    var coyear = document.getElementById('cocYear').value;
    var pictureURL = '';
    if (picture) {
        pictureURL = URL.createObjectURL(picture);
    }
    var generatedResume = "\n        <div>\n        <div class=\"maindivforall\">\n        <div class=\"formain\">\n            <div class=\"headings\">\n            <img src=\"".concat(pictureURL, "\" alt=\"\" class=\"forpic\">\n            <div class=\"forheadings\">\n            <h3>").concat(name, "</h3>\n            <h1 class=\"h1dev\"><span>").concat(work, "</span></h1>\n            <h6 class=\"paraformetsss\">Hello, I'm ").concat(name, " , a highly motivated and experienced ").concat(work, " with ").concat(yearofexp, " years of expertise in ").concat(feild, ". I possess a strong foundation in ").concat(qualication, " from ").concat(hsc, ". You can reach me at ").concat(phone, " or ").concat(email, ".I am eager to apply my technical skills and learnings in real-world projects, while continuously expanding my knowledge in cutting-edge technologies. Known for my adaptability, quick learning, and dedication to achieving excellence in both academics and technical pursuits.</h6>\n            </div>\n            </div>\n            <div class=\"contact-info\">\n               <p class=\"contact-label\">Email:</p>\n                    <p class=\"contact-detail\"><a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n        \n                <p class=\"contact-label\">LinkedIn:</p>\n                    <p class=\"contact-detail\"><a href=\"").concat(linkdin, "\" target=\"_blank\">").concat(linkdin, "</a></p>\n        \n                <p class=\"contact-label\">Phone:</p>\n                    <p class=\"contact-detail\"><a href=\"tel:").concat(phone, "\">").concat(phone, "</a></p>\n            </div>\n        </div>\n\n\n        <div class=\"others\">\n            <div>\n                <div class=\"Profile\">\n                    <h1>Profile</h1>\n                    <h2>Hello, I'm ").concat(name, " , a highly motivated and experienced ").concat(work, " with ").concat(yearofexp, " years of expertise in ").concat(feild, ". I possess a strong foundation in ").concat(qualication, " from ").concat(hsc, ". You can reach me at ").concat(phone, " or ").concat(email, ".I am eager to apply my technical skills and learnings in real-world projects, while continuously expanding my knowledge in cutting-edge technologies. Known for my adaptability, quick learning, and dedication to achieving excellence in both academics and technical pursuits.</h2>\n                </div>\n                <hr>\n                <div class=\"personalinfo\">\n                    <h1 >Personal Information</h1>\n                    <ul>\n                        <li> Age: ").concat(age, "</li> \n                        <li>Date of Birth: ").concat(dobb, "</li>\n                        <li>Nationaltiy: Pakistani</li>\n                        <li>Gender: ").concat(gender, "</li>\n                        <li>Metriat status: ").concat(metriat, "</li>\n                        <li>Province: ").concat(province, "</li>\n                        <li>City: ").concat(city, "</li>\n                    </ul>\n                </div>\n                <hr>\n                <div class=\"contact\">\n                    <h1 >Contact me</h1>\n                    <ul>\n                        <li><pre><i class=\"fa-solid fa-phone\"></i>  ").concat(phone, "</pre></li> \n                        <li><pre><i class=\"fa-solid fa-paper-plane\"></i> ").concat(email, "</pre></li>\n                        <li><pre><i class=\"fa-solid fa-house-chimney\"></i>  Pakistan</pre></li>\n                        <li><pre><i class=\"fa-solid fa-house-chimney\"></i>  ").concat(city, "</pre></li>\n                    </ul>\n                </div>\n            </div>\n           \n           <div>\n            <div class=\"education\">\n                <h1>Education & Learning</h1>\n                <h2>Higher Secondary Certificate </h2>\n                <ul>\n                    <li>").concat(hsc, "</li>\n                    <li>").concat(yearhsc, "</li>\n                </ul>\n                <hr>\n                <h2>Secondary School Certificate</h2>\n                <ul>\n                    <li>").concat(ssc, "</li>\n                    <li>").concat(yearssc, "</li>\n                </ul>\n                <hr>\n                <h2>Certifications or Courses:</h1>\n                <ul>\n                <li>").concat(courname, "</li>\n                <li>From : ").concat(courinst, "</li>\n                <li>").concat(coyear, "</li>\n            </ul>\n            <hr>\n            </div>\n            <div id=\"skills\" class=\"skills\">\n                <h1>Skills</h1>\n               <div class=\"ullllll\">\n                <div>\n                  <ul id=\"skillsList\">\n                        <li>").concat(skills, "</li>\n                    </ul>\n                    <button id=\"showSkillInputBtn\">Add Skill</button><br>\n                    <div id=\"newSkillContainer\" style=\"display: none;\">\n                        <input type=\"text\" id=\"newSkillInput\" placeholder=\"Enter new skill\"><br><br>\n                        <button id=\"addSkillBtn\">Add</button>\n                </div>\n                \n               </div>\n               \n               </div>\n           </div>\n        </div>\n    </div>\n           \n            \n        </div>\n    ");
    document.getElementById('generatedResume').innerHTML = generatedResume;
    var showSkillButton = document.getElementById('showSkillInputBtn');
    var newSkillContainer = document.getElementById('newSkillContainer');
    if (showSkillButton) {
        showSkillButton.addEventListener('click', function () {
            showSkillButton.style.display = 'none';
            newSkillContainer.style.display = 'block';
        });
    }
    var addSkillButton = document.getElementById('addSkillBtn');
    if (addSkillButton) {
        addSkillButton.addEventListener('click', function () {
            addNewSkill(showSkillButton, newSkillContainer);
        });
    }
});
function addNewSkill(showSkillButton, newSkillContainer) {
    var newSkillInput = document.getElementById('newSkillInput');
    var newSkill = newSkillInput.value;
    if (newSkill.trim()) {
        var skillsList = document.getElementById('skillsList');
        var newSkillItem = document.createElement('li');
        newSkillItem.textContent = newSkill;
        skillsList === null || skillsList === void 0 ? void 0 : skillsList.appendChild(newSkillItem);
        newSkillInput.value = '';
        newSkillContainer.style.display = 'none';
        showSkillButton.style.display = 'block';
    }
}
function printCV(){
    document.getElementById("okok").style.display="none";
    document.getElementById("h1make").style.display="none";
    document.getElementById("buttonpdf").style.display="none";
    document.getElementById("toppnav").style.display="none";
    document.getElementById("generateBtn").style.display="none";
    document.getElementById("showSkillInputBtn").style.display="none";
    document.getElementById("resumeForm").style.display="none";
     document.getElementById("generatedResume").style.display="block";

    window.print();
<<<<<<< HEAD
}
=======
}
>>>>>>> 4237f28c85daa0888262de29831f5a988f4345b5
