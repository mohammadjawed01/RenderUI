let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

let userManager = {
    user: [],

    init: function(){
        form.addEventListener('submit', this.submitForm.bind(this));
    },

    submitForm: function(e){
        e.preventDefault();
        this.addUser();
    }, 

    addUser: function(){
        this.user.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });

        form.reset();
    }

}