document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const profilepictureInput = document.getElementById('profilepicture') as HTMLInputElement;

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const CvnameElement = document.getElementById('cvname') as HTMLInputElement;

    if(profilepictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && CvnameElement) 
    {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const Cvname = CvnameElement.value;

        const profilepictureFile = profilepictureInput.files?.[0];
        const profilepictureURL = profilepictureFile ? URL.createObjectURL(profilepictureFile) : '';

        const resumeHTMLContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${Cvname} - Resume</title>
                <style>
                    body { font-family: Arial, sans-serif; }
                    h2 { color: rgb(110, 64, 60); }
                    .profilepic { width: 150px; height: 150px; border-radius: 50%; }
                </style>
            </head>
            <body>
                <h2>Resume</h2>
                ${profilepictureURL ? `<img src="${profilepictureURL}" alt="Profile Picture" class="profilepic">` : ""}
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Experience</h3>
                <p>${experience}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
            </body>
            </html>
        `;

        const downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=UTF-8,' + encodeURIComponent(resumeHTMLContent);
        downloadLink.download = `${Cvname.replace(/\s+/g, '_')}_cv.html`;
        downloadLink.textContent = 'Download your 2024 Resume';

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTMLContent;
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = "block";
        } else {
            console.error('The resumeOutput element is missing');
        }
    } else {
        console.error('Some form fields are missing');
    }
});
