function toggleTree(levelId) {
    var level = document.getElementById(levelId);
    var toggleIcon = document.getElementById(levelId + '-toggle');
    if (level.classList.contains('collapsed')) {
        level.classList.remove('collapsed');
        toggleIcon.textContent = '-';
    } else {
        level.classList.add('collapsed');
        toggleIcon.textContent = '+';
    }
}

function showCard(role) {
    var card = document.getElementById('card');
    var content = document.getElementById('card-content');
    var data = {
        'president': {
            'name': 'Shyam',
            'position': 'CEO',
            'phone': '897880808',
            'Date of joining': '',
            'bio': '...'
        },
        'vp-marketing': {
            'name': 'Kate Williams',
            'position': 'VP Marketing',
            'phone': '555-3042',
            'email': 'kwilliams@abc.com',
            'bio': 'Kate Williams is responsible for the marketing strategy...'
        },
        'vp-sales': {
            'name': 'Holly Greene',
            'position': 'VP Sales',
            'phone': '555-3017',
            'email': 'hgreene@abc.com',
            'bio': 'Holly Greene has led the sales team to new heights...'
        },
        'vp-production': {
            'name': 'Tom Allen',
            'position': 'VP Production',
            'phone': '555-3021',
            'email': 'tallen@abc.com',
            'bio': 'Tom Allen oversees the production process...'
        },
        'manager1': {
            'name': 'Alice Johnson',
            'position': 'Manager',
            'phone': '555-3033',
            'email': 'ajohnson@abc.com',
            'bio': 'Alice Johnson manages the marketing team...'
        },
        'manager2': {
            'name': 'Mike Fox',
            'position': 'Manager',
            'phone': '555-3022',
            'email': 'mfox@abc.com',
            'bio': 'Mike Fox is responsible for product management...'
        },
        'manager3': {
            'name': 'Lou Silva',
            'position': 'Manager',
            'phone': '555-3018',
            'email': 'lsilva@abc.com',
            'bio': 'Lou Silva leads the sales team...'
        },
        'manager4': {
            'name': 'Kate Bush-White',
            'position': 'Manager',
            'phone': '555-3009',
            'email': 'kbushwhite@abc.com',
            'bio': 'Kate Bush-White is a key figure in customer relations...'
        },
        'manager5': {
            'name': 'Cassie Bonne',
            'position': 'Manager',
            'phone': '555-3007',
            'email': 'cbonne@abc.com',
            'bio': 'Cassie Bonne manages the production team...'
        },
        'manager6': {
            'name': 'Lydia Chance',
            'position': 'Manager',
            'phone': '555-3015',
            'email': 'lchance@abc.com',
            'bio': 'Lydia Chance handles corporate communications...'
        }
    };

    content.innerHTML = `<h2>${data[role].name}</h2>
                         <p><strong>Position:</strong> ${data[role].position}</p>
                         <p><strong>Phone:</strong> ${data[role].phone}</p>
                         <p><strong>Email:</strong> ${data[role].email}</p>
                         <p><strong>Bio:</strong> ${data[role].bio}</p>`;
    card.style.display = 'block';
}

function closeCard() {
    var card = document.getElementById('card');
    card.style.display = 'none';
}
