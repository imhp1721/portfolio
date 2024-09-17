import Swal from "sweetalert2";

function ContactForm() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "32660dd6-2170-4fc4-9c91-6067a6e4c9af");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      let timerInterval;
      Swal.fire({
        title: "Tak! Din besked er sendt.",
        html: "Denne boks lukker om <b></b> sekunder.",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft() / 1000}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Kontaktformular</h2>
      <div>
        <label>Dit fulde navn</label>
        <input type="text" name="navn" placeholder="Lars Larsen" required />
      </div>
      <div>
        <label>Din e-mail</label>
        <input
          type="email"
          name="e-mail"
          placeholder="eksempel@mail.dk"
          required
        />
      </div>
      <div>
        <label>Angiv emne</label>
        <input
          type="text"
          name="emne"
          placeholder="Praktikplads hos Eksempel A/S"
          required
        />
      </div>
      <div>
        <label>Din besked</label>
        <textarea
          name="besked"
          placeholder="Hej Inger-Margrethe..."
          required
        ></textarea>
      </div>
      <button type="submit" className="cta_btn">
        Send besked
      </button>
    </form>
  );
}

export default ContactForm;
