function change_role() {
    document.getElementById("form_select_utilisateur_role").submit();
}

function controlInput() {

    var re_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById("email_id");
    var password = document.getElementById("password");
    var tel = document.getElementById("tel");
    var form = document.getElementById("form_add_user");
    var x = document.getElementById("verifPass");
    var tel_int = parseInt(tel.value);
    var message = "Veuiller bien remplir les champs : ";

    console.log(form);

    if (!validateEmail(email.value, re_email) || password.value.length < 8 || tel_int == NaN || tel_int.toString() == 9 || x.value != document.getElementById("password").value) {

        if (!validateEmail(email.value, re_email)) {
            email.classList.add("border-danger");
            message += "Email (exemple test@mail.com) ";
        } else {
            email.classList.remove("border-danger");
        }
        if (password.value.length < 8) {
            password.classList.add("border-danger");
            message += "mot de passe (au moin 8 caractères) ";
        } else {
            password.classList.remove("border-danger");
        }
        if (tel_int != NaN && tel_int.toString().length != 9) {
            tel.classList.add("border-danger");
            message += "numéro de téléphone a 9 caractère numérique";
        } else {
            tel.classList.remove("border-danger");
        }
        alert(message);
    } else {
        document.getElementById("form_add_user").submit();
    }
}

function validateEmail(email, re) {
    return re.test(String(email).toLowerCase());
}

//TODO au click sur la liste des role affiche tous les utilisateurs qui ont ce rôle
$("#select_role").change(function(e) {
    $("#select_user").html('<img src="../img/loadgif.gif">');
    var param = 'id_role=' + $("#select_role").val();
    $("#select_user").load("select_user_role.php", param);
});

//TODO au click d'un utilisateur affiche toutes les questions qu'il a eu à poser
$("#select_user1").change(function(e) {
    alert("change");
    $("#list_question").html('<img src="../img/loadgif.gif" style="align:center">');
    var param = 'id_user=' + $("#select_user1").val();
    console.log($("#select_user1"))
    $("#list_question").load("select_user_role.php", param);
})