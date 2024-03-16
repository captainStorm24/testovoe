$(document).ready(function () {
    const form = $("#login-form"),
        submitBtn = $("#submitBtn"),
        formResult = $(".form__result");

    submitBtn.on("click", function () {
        submitForm("login.php", form, formResult);
        return false;
    })
})

function submitForm(url, form, resultOutput) {

    $.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        data: form.serialize(),
        success: function (response) {
            let result = $.parseJSON(response);
            if (result.error === 0) resultOutput.html("Вход выполнен успешно");
            else resultOutput.html("Не верный логин или пароль");
        },
        error: function (response) {
            let result = $.parseJSON(response);
            resultOutput.html("Вход в учетную запись не выполнен<br>Сервер не доступен в данный момент")
        }
    });


}