let seats = document.querySelector(".all-seats");
for (let i = 0; i < 59; i++) {
    let randint = Math.floor(Math.random() * 2);
    let booked = randint === 1 ? "Booked" : "";

    seats.insertAdjacentHTML(
        "beforeend",
        `<input type="checkbox" name="tickets" id="s${i}" />
         <label for="s${i}" class="seat ${booked}"></label>`
    );
}
