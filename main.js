document.addEventListener('DOMContentLoaded', function () {
    var _a, _b;
    // Function to update the URL with the user's name
    function updateURLWithName(name) {
        var url = new URL(window.location.href);
        url.searchParams.set('name', name); // Add or update the 'name' parameter
        window.history.pushState({}, '', url.toString()); // Update the browser URL without reloading the page
    }
    // Function to handle form submission and display the resume
    function generateResume() {
        var _a;
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var skills = document.getElementById("skills").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var picture = (_a = document.getElementById("picture").files) === null || _a === void 0 ? void 0 : _a[0];
        // Populate the resume display
        document.getElementById("displayName").innerText = name;
        document.getElementById("displayPhone").innerText = phone;
        document.getElementById("displayEmail").innerText = email;
        document.getElementById("displayAddress").innerText = address;
        document.getElementById("displaySkills").innerText = skills;
        document.getElementById("displayEducation").innerText = education;
        document.getElementById("displayExperience").innerText = experience;
        if (picture) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                document.getElementById("displayPicture").src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            };
            reader.readAsDataURL(picture);
        }
        // Update the URL with the user's name
        updateURLWithName(name);
    }
    // Add event listener to form submission
    (_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        event.preventDefault();
        generateResume();
    });
    // Event listener for input change
    (_b = document.getElementById("name")) === null || _b === void 0 ? void 0 : _b.addEventListener("input", function () {
        var name = document.getElementById("name").value;
        if (name) {
            updateURLWithName(name);
        }
    });
    // Function to check if 'name' exists in URL and populate the input field
    function checkURLForName() {
        var urlParams = new URLSearchParams(window.location.search);
        var nameFromURL = urlParams.get('name');
        if (nameFromURL) {
            document.getElementById("name").value = nameFromURL;
            generateResume(); // Auto-populate resume if the name is already in the URL
        }
    }
    // Call function to check URL when the page loads
    checkURLForName();
});
