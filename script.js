// Objects for Accenture
const openAccenture = document.querySelector('.accenture')
const accentureContent = document.getElementById('accenture_content')
const closeButton_accenture = document.getElementById('closeButton-accenture')

// Objects for PARI
const openPari = document.querySelector('.pari')
const pariContent = document.getElementById('pari_content')
const closeButton_pari = document.getElementById('closeButton-pari')

// Objects for PARI
const openVarun = document.querySelector('.varun-beverages')
const varunContent = document.getElementById('varun-beverages_content')
const closeButton_varun = document.getElementById('closeButton-varun-beverages')

// Objects for PARI
const openJbm = document.querySelector('.jbm')
const jbmContent = document.getElementById('jbm_content')
const closeButton_jbm = document.getElementById('closeButton-jbm')

const overlay = document.getElementById('overlay')


// Objects for asme information box 
const openAsme = document.querySelector('.asme')
const asmeBox = document.getElementById('asme-box')
const closeButton_asme = document.getElementById('closeButton-asme')

// Objects for nurc information box 
const openNurc = document.querySelector('.nurc')
const nurcBox = document.getElementById('nurc-box')
const closeButton_nurc = document.getElementById('closeButton-nurc')

// Objects for ktp information box 
const openKtp = document.querySelector('.ktp')
const ktpBox = document.getElementById('ktp-box')
const closeButton_ktp = document.getElementById('closeButton-ktp')

// Objects for frc information box 
const openFrc = document.querySelector('.frc')
const frcBox = document.getElementById('frc-box')
const closeButton_frc = document.getElementById('closeButton-frc')

// Objects for rifle shooting information box 
const openShooting = document.querySelector('.shooting')
const shootingBox = document.getElementById('shooting-box')
const closeButton_shooting = document.getElementById('closeButton-shooting')


// For opnening the accenture information card 
openAccenture.addEventListener('click', () => { 
    openCard(accentureContent)
})
// For closing the accenture information card 
closeButton_accenture.addEventListener('click', () => { 
    closeCard(accentureContent)
})

// For opnening the PARI information card 
openPari.addEventListener('click', () => { 
    openCard(pariContent)
})
// For closing the PARI information card 
closeButton_pari.addEventListener('click', () => { 
    closeCard(pariContent)
})

// For opnening the Varun Beverages information card 
openVarun.addEventListener('click', () => { 
    openCard(varunContent)
})
// For closing the Varun Beverages information card 
closeButton_varun.addEventListener('click', () => { 
    closeCard(varunContent)
})

// For opnening the JBM information card 
openJbm.addEventListener('click', () => { 
    openCard(jbmContent)
})
// For closing the JBM information card 
closeButton_jbm.addEventListener('click', () => { 
    closeCard(jbmContent)
})



// JavaScript for the clubs and organizations section

// For opnening the asme information card 
openAsme.addEventListener('click', () => { 
    closeCard(nurcBox)
    closeCard(ktpBox)
    closeCard(frcBox)
    closeCard(shootingBox)
    openCard(asmeBox)
})
// For closing the asme information card 
closeButton_asme.addEventListener('click', () => { 
    closeCard(asmeBox)
})

// For opnening the asme information card 
openNurc.addEventListener('click', () => { 
    closeCard(asmeBox)
    closeCard(ktpBox)
    closeCard(frcBox)
    closeCard(shootingBox)
    openCard(nurcBox)
})
// For closing the asme information card 
closeButton_nurc.addEventListener('click', () => { 
    closeCard(nurcBox)
})

// For opnening the asme information card 
openKtp.addEventListener('click', () => { 
    closeCard(nurcBox)
    closeCard(asmeBox)
    closeCard(frcBox)
    closeCard(shootingBox)
    openCard(ktpBox)
})
// For closing the asme information card 
closeButton_ktp.addEventListener('click', () => { 
    closeCard(ktpBox)
})

// For opnening the asme information card 
openFrc.addEventListener('click', () => { 
    closeCard(nurcBox)
    closeCard(ktpBox)
    closeCard(asmeBox)
    closeCard(shootingBox)
    openCard(frcBox)
})
// For closing the asme information card 
closeButton_frc.addEventListener('click', () => { 
    closeCard(frcBox)
})

// For opnening the asme information card 
openShooting.addEventListener('click', () => { 
    closeCard(nurcBox)
    closeCard(ktpBox)
    closeCard(frcBox)
    closeCard(asmeBox)
    openCard(shootingBox)
})
// For closing the asme information card 
closeButton_shooting.addEventListener('click', () => { 
    closeCard(shootingBox)
})

function openCard(card) 
{ 
    if (card == null) return
    card.classList.add('active')
    overlay.classList.add('active')
}

function closeCard(card) 
{ 
    if (card == null) return
    card.classList.remove('active')
    overlay.classList.remove('active')
}
