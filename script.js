var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilepictureInput = document.getElementById('profilepicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var CvnameElement = document.getElementById('cvname');
    if (profilepictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && CvnameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var Cvname = CvnameElement.value;
        var profilepictureFile = (_a = profilepictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepictureFile ? URL.createObjectURL(profilepictureFile) : '';
        var resumeHTMLContent = "\n            <!DOCTYPE html>\n            <html lang=\"en\">\n            <head>\n                <meta charset=\"UTF-8\">\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                <title>".concat(Cvname, " - Resume</title>\n                <style>\n                    body { font-family: Arial, sans-serif; }\n                    h2 { color: rgb(110, 64, 60); }\n                    .profilepic { width: 150px; height: 150px; border-radius: 50%; }\n                </style>\n            </head>\n            <body>\n                <h2>Resume</h2>\n                ").concat(profilepictureURL ? "<img src=\"".concat(profilepictureURL, "\" alt=\"Profile Picture\" class=\"profilepic\">") : "", "\n                <p><strong>Name:</strong> ").concat(name_1, "</p>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Experience</h3>\n                <p>").concat(experience, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n            </body>\n            </html>\n        ");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=UTF-8,' + encodeURIComponent(resumeHTMLContent);
        downloadLink.download = "".concat(Cvname.replace(/\s+/g, '_'), "_cv.html");
        downloadLink.textContent = 'Download your 2024 Resume';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTMLContent;
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = "block";
        }
        else {
            console.error('The resumeOutput element is missing');
        }
    }
    else {
        console.error('Some form fields are missing');
    }
});
