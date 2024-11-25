<script>
            document.getElementById("registrationForm").addEventListener("submit", function (event) {
                event.preventDefault();
                
                // Value buat email dan name
                const txtname = document.getElementById("txtname").value.trim();
                const txtemail = document.getElementById("txtemail").value.trim();
                const errorMessage = document.getElementById("error-message");

                // Buat bikin apakah nama & email terisi atau tidak
                if (!txtname || !txtemail) {
                    // buat error message
                    errorMessage.style.display = "block";
                } else {
                    // buat hilangin error message dan melanjutkan submit
                    errorMessage.style.display = "none";
                    alert("Form submitted successfully!");
                }
            });

            // Hide error message when the reset button is clicked
            document.getElementById("btnreset").addEventListener("click", function () {
                const errorMessage = document.getElementById("error-message");
                errorMessage.style.display = "none";
            });
        </script>