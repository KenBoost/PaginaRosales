function validacion() {
  let nombre = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let tema = document.getElementById("subject").value;
  let mensaje = document.getElementById("message").value;

  debugger;
  if (mensaje == undefined) {
    mensaje = "Sin mensaje";
  }

  if (!nombre || !tema || !email) {
    alert("Aún faltan datos para completar el mensaje, por favor revisar!");
  } else {
    const mensa =
      "Nombre: " + nombre + "<br/> Tema: " + tema + "<br/> mensaje: " + mensaje;

    envioCorreo(email, mensa);
  }
}

function envioCorreo(email, mensaje) {
  Email.send({
    SecureToken: "ab27e522-cabb-4814-9a22-dfeeaabae4b3",
    To: "asadaapp2022@gmail.com",
    From: email,
    Subject: "Formulario de solicitud de pagina Rosales",
    Body: mensaje,
  }).then((message) => alert(message));
}

/*$(function () {
  $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {},
    submitSuccess: function ($form, event) {
      event.preventDefault();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var subject = $("input#subject").val();
      var message = $("textarea#message").val();

      $this = $("#sendMessageButton");
      $this.prop("disabled", true);

      $.ajax({
        url: "contact.php",
        type: "POST",
        data: {
          name: name,
          email: email,
          subject: subject,
          message: message,
        },
        cache: false,
        success: function () {
          $("#success").html("<div class='alert alert-success'>");
          $("#success > .alert-success")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $("#success > .alert-success").append(
            "<strong>Your message has been sent. </strong>"
          );
          $("#success > .alert-success").append("</div>");
          $("#contactForm").trigger("reset");
        },
        error: function () {
          $("#success").html("<div class='alert alert-danger'>");
          $("#success > .alert-danger")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $("#success > .alert-danger").append(
            $("<strong>").text(
              "Lo sentimos " +
                name +
                ", parece que nuestro servidor no responde, intente de nuevo mas tarde!"
            )
          );
          $("#success > .alert-danger").append("</div>");
          $("#contactForm").trigger("reset");
        },
        complete: function () {
          setTimeout(function () {
            $this.prop("disabled", false);
          }, 1000);
        },
      });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

$("#name").focus(function () {
  $("#success").html("");
});*/
