const periods = document.querySelectorAll(".period");

// Gerar evneto de clique para cada lista
periods.forEach((period) => {
  period.addEventListener("click", (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obter a LI pai
      const item = event.target.closest("li");
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar esse agendamento?"
        );

        if (isConfirm) {
          console.log("REMOVER");
        }
      }
    }
  });
});
