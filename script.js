
function createTicket() {
  let name = document.getElementById("name").value.trim();
  let issue = document.getElementById("issue").value.trim();

  if (name === "" || issue === "") {
    alert("Please fill all fields properly");
    return;
  }
  let ticketDiv = document.createElement("div");
  ticketDiv.classList.add("ticket");

  // ticketDiv.innerHTML = `
  //   <strong>Name:</strong> ${name} <br>
  //   <strong>Issue:</strong> ${issue}
  // `;

  const nameEl = document.createElement('p');
  nameEl.innerHTML = `<strong>Name:</strong> `;
  nameEl.appendChild(document.createTextNode(name));

  const issueEl = document.createElement('p');
  issueEl.innerHTML = `<strong>Issue:</strong> `;
  issueEl.appendChild(document.createTextNode(issue));

  ticketDiv.appendChild(nameEl);
  ticketDiv.appendChild(issueEl);

  document.getElementById("ticketList").appendChild(ticketDiv);

  document.getElementById("name").value = "";
  document.getElementById("issue").value = "";
}
