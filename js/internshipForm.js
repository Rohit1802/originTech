
// Just change your firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZ-tCDoJB_rHw4-g-J8UFmk2QACAEMWH0",
    authDomain: "origintech-8290c.firebaseapp.com",
    databaseURL: "https://origintech-8290c-default-rtdb.firebaseio.com",
    projectId: "origintech-8290c",
    storageBucket: "origintech-8290c.appspot.com",
    messagingSenderId: "95473509688",
    appId: "1:95473509688:web:c0f1c5c1eb6cb9387ccdcd",
    measurementId: "G-YT3RGFQPLH"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
let contactFormDb = firebase.database().ref('InternshipForm')

document.getElementById('InternshipForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    let fullname = getElementVal('fullname')
    let company = getElementVal('company')
    let department = getElementVal('department')
    let experience = getElementVal('experience')
    let email = getElementVal('email')
    let phone = getElementVal('phone')
    let message = getElementVal('message')

    saveMessage(fullname,company, department, experience, email, phone, message);

    // enable alert
    document.querySelector('.alert').style.display = 'block';

    setTimeout(()=>{
        document.querySelector('.alert').style.display = 'none';
    }, 3000)

    // reset the form
    document.getElementById('InternshipForm').reset()
}

const saveMessage = (fullname,company, department, experience, email, phone, message) => {
    var newContactForm = contactFormDb.push();
    newContactForm.set({
        fullname: fullname,
        company: company,
        department: department,
        experience: experience,
        email:email,
        phone:phone,
        message:message
    })
};

const getElementVal  = (id)=>{
    return document.getElementById(id).value;
}



