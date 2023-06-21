import { buildForm } from "./containers";

export const handleInputSave = (e) => {
  console.log("event target ", e.target);

  const formKey = e.target.name;
  const formSection = e.target.classList.value.split("-")[0];

  console.log("form section", formKey);

  const form = JSON.parse(localStorage.getItem("form"));

  form[formSection][formKey] = true;

  localStorage.setItem("form", JSON.stringify(form));
  console.log(form);
};

export const handleFormToggle = (e) => {
  const selectedElements = document.querySelectorAll(
    `#form-select-container > input`
  );
  console.log("selected elements", selectedElements);

  for (const element of selectedElements) {
    if (element.checked) {
      element.checked = false;
    }
  }
  switch (e.target.name) {
    case "pythonHeadings":
      e.target.checked = true;
      localStorage.setItem("form-type", e.target.name);
      break;
    case "fullStackHeadings":
      e.target.checked = true;
      localStorage.setItem("form-type", e.target.name);
      break;
    default:
      return;
  }

  document.getElementById("form-container").textContent = ""
  buildForm()
};
