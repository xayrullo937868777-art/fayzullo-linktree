document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link-item');
    
    // Staggered entrance animation for links
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            link.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 300 + (index * 100));
    });

    // Profile image interaction
    const profileImg = document.getElementById('profile-pic');
    if (profileImg) {
        profileImg.addEventListener('click', () => {
            profileImg.style.transform = 'scale(0.95)';
            setTimeout(() => {
                profileImg.style.transform = 'scale(1)';
            }, 100);
        });
    }
});
