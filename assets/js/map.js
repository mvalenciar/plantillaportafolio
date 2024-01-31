document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector("#load-iframe-map").innerHTML = `
  <iframe
                  class="contact__iframe"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6682482286483!2d-76.49572229192941!3d0.49694969949608736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2878dc998c9115%3A0x48313dec9fed31c!2sCl.%2013a%2C%20Puerto%20As%C3%ADs%2C%20Putumayo!5e0!3m2!1ses!2sco!4v1706649633724!5m2!1ses!2sco"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
  `;
  }, 500);
});
