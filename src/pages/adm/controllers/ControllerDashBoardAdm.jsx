let host = "http://localhost:5000/members/";

async function deleteMember(id) {
  await fetch(`${host}${id}`, { method: "DELETE" })
    .then((response) => response.json())
    .then((responseJson) => {
      window.location.reload();
    })
    .catch((error) => {
      //   console.log(`Erro no ${error}`);
    });
}

export default { deleteMember };
