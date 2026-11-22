// Класс заявки фермера: хранит введённые данные формы
class FarmerApplication {
  constructor(name, email, password, season, farm, about, agree) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.season = season;
    this.farm = farm;
    this.about = about;
    this.agree = agree;
  }

  //вывод данных на консоль
  print() {
    console.log("===== Заявка нового фермера =====");
    console.log(`Имя фермера:      ${this.name}`);
    console.log(`Почта:            ${this.email}`);
    console.log(`Пароль:           ${"*".repeat(this.password.length)}`);
    console.log(`Любимый сезон:    ${this.season}`);
    console.log(`Тип фермы:        ${this.farm}`);
    console.log(`О себе:           ${this.about || "не указано"}`);
    console.log(`Согласие на ПД:   ${this.agree ? "да" : "нет"}`);
    console.log("=================================");
  }
}

const form = document.getElementById("farmer-form");
const message = document.getElementById("form-message");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); //чтобы увидеть вывод в консоле

    const data = new FormData(form);
    const application = new FarmerApplication(
      data.get("name"),
      data.get("email"),
      data.get("password"),
      data.get("season"),
      data.get("farm"),
      data.get("about"),
      form.elements["agree"].checked
    );

    application.print();
    message.hidden = false;
  });
}
