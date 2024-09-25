document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill-progress');
    skills.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0%';
        setTimeout(() => {
            skill.style.width = width;
        }, 100);
    });
});
