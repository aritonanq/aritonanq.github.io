//punten banget inimah ya kak cuma bisa js batas ini doang :DDDDDDD

function checkForm() {
  var nama = $("#name").val();
  var email = $("#email").val();
  var msg = $("#message").val();
  if (msg == "" || email == "" || nama == "") {
    Swal.fire({
      type: "warning",
      title: "EVERY COLUMN IS REQUIRED!",
    });
  } else {
    Swal.fire({
      type: "success",
      title: "SENT SUCCESSFULLY",
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
}
