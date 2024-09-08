document.addEventListener('DOMContentLoaded', () => {
    
    // Function to update the URL with the user's name
    function updateURLWithName(name: string) {
        const url = new URL(window.location.href);
        url.searchParams.set('name', name); // Add or update the 'name' parameter
        window.history.pushState({}, '', url.toString()); // Update the browser URL without reloading the page
    }

    // Function to handle form submission and display the resume
    function generateResume() {
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const address = (document.getElementById("address") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
        const picture = (document.getElementById("picture") as HTMLInputElement).files?.[0];

        // Populate the resume display
        (document.getElementById("displayName") as HTMLElement).innerText = name;
        (document.getElementById("displayPhone") as HTMLElement).innerText = phone;
        (document.getElementById("displayEmail") as HTMLElement).innerText = email;
        (document.getElementById("displayAddress") as HTMLElement).innerText = address;
        (document.getElementById("displaySkills") as HTMLElement).innerText = skills;
        (document.getElementById("displayEducation") as HTMLElement).innerText = education;
        (document.getElementById("displayExperience") as HTMLElement).innerText = experience;

        if (picture) {
            const reader = new FileReader();
            reader.onload = function (e) {
                (document.getElementById("displayPicture") as HTMLImageElement).src = e.target?.result as string;
            };
            reader.readAsDataURL(picture);
        }

        // Update the URL with the user's name
        updateURLWithName(name);
    }

    // Add event listener to form submission
    document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
        event.preventDefault();
        generateResume();
    });

    // Event listener for input change
    document.getElementById("name")?.addEventListener("input", function () {
        const name = (document.getElementById("name") as HTMLInputElement).value;
        if (name) {
            updateURLWithName(name);
        }
    });

    // Function to check if 'name' exists in URL and populate the input field
    function checkURLForName() {
        const urlParams = new URLSearchParams(window.location.search);
        const nameFromURL = urlParams.get('name');
        if (nameFromURL) {
            (document.getElementById("name") as HTMLInputElement).value = nameFromURL;
            generateResume(); // Auto-populate resume if the name is already in the URL
        }
    }

    // Call function to check URL when the page loads
    checkURLForName();
});
