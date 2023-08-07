import { useState } from "react";
import "./App.css";

const allSectors = [
  {
    id: 1,
    name: "Agropecuário",
  },
  {
    id: 2,
    name: "Educação",
  },
  {
    id: 3,
    name: "Saúde",
  },
  {
    id: 4,
    name: "Transporte",
  },
];

const defaultForm = {
  name: "",
  startup: "",
  email: "",
  marketValue: 0,
  description: "",
  valueToReceive: 0,
};

function SuperForm() {
  const [success, setSuccess] = useState("");
  const [form, setForm] = useState({ ...defaultForm });
  const [sector, setSector] = useState({ id: 0, name: "" });

  // alterando os dados dinâmicamente
  function handleSelectForm(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleChangeSelect(event) {
    const currentSelectedSector = allSectors.find(
      (item) => item.id === parseInt(event.target.value)
    );

    setSector({
      id: currentSelectedSector.id,
      name: currentSelectedSector.name,
    });
  }

  // submit - enviando dados
  function handleSubmit(event) {
    event.preventDefault();

    if (!sector) {
      alert("Selecione um setor");
      return;
    }

    for (const prop in form) {
      if (!form[prop]) {
        alert("Preencha todos os dados!");
        return;
      }
      console.log(form[prop]);
    }

    setSuccess(true);

    console.log(form);
  }

  // Limpar formulário
  function handleClear() {
    setForm({ ...defaultForm });
  }

  return (
    <main>
      <div className="container">
        {!success ? (
          <>
            <h1>Inscrição Online</h1>
            <p>
              Bem-vindo ao formulário de cadastro para o nosso programa de
              aceleração de{" "}
              <b>
                <b>startups</b>
              </b>
              ! Este programa tem como objetivo ajudar empreendedores a
              transformar suas ideias em negócios bem-sucedidos. Se você é um
              fundador de uma startup em estágio inicial e busca apoio para
              acelerar o crescimento da sua empresa, você está no lugar certo.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="container-input">
                <label htmlFor="name">Nome do empreendedor</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleSelectForm}
                />
              </div>

              <div className="container-input">
                <label htmlFor="startup">Nome da startup</label>
                <input
                  type="text"
                  name="startup"
                  id="startup"
                  value={form.startup}
                  onChange={handleSelectForm}
                />
              </div>

              <div className="container-input">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleSelectForm}
                />
              </div>

              <div className="container-input">
                <label htmlFor="marketValue">Valor de Mercado</label>
                <input
                  type="number"
                  name="marketValue"
                  id="marketValue"
                  value={form.marketValue}
                  onChange={handleSelectForm}
                />
              </div>

              <div className="container-input">
                <label htmlFor="sector">Setor</label>
                <select
                  id="sector"
                  value={sector.id}
                  onChange={handleChangeSelect}
                >
                  <option value="">Selecione um setor</option>
                  {allSectors.map((sector) => (
                    <option key={sector.id} value={sector.id}>
                      {sector.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="container-input">
                <label htmlFor="description">Descreva o seu negócio</label>
                <textarea
                  rows={10}
                  name="description"
                  id="description"
                  value={form.description}
                  onChange={handleSelectForm}
                ></textarea>
              </div>

              <div className="container-input">
                <label htmlFor="valueToReceive">Valor que deseja</label>
                <input
                  type="number"
                  name="valueToReceive"
                  id="valueToReceive"
                  value={form.valueToReceive}
                  onChange={handleSelectForm}
                />
              </div>

              <button className="btn-success">Cadastrar</button>
              <button
                className="btn-warning"
                type="button"
                onClick={handleClear}
              >
                Limpar
              </button>
            </form>
          </>
        ) : (
          <>
            <h1>Parabéns {form.name}!</h1>
            <p>
              Obrigado por enviar sua inscrição para o nosso programa de
              aceleração de <b>startups</b>! Estamos entusiasmados em ter
              recebido sua candidatura e agradecemos o tempo que você dedicou
              para preencher o formulário. Nosso processo seletivo é rigoroso,
              pois buscamos identificar as <b>startups</b> mais promissoras e
              com maior potencial de crescimento. Nossa equipe analisará
              cuidadosamente todas as candidaturas recebidas e entrará em
              contato com você em breve para informá-lo sobre o resultado da
              seleção. Pedimos que aguarde o nosso contato e, enquanto isso,
              continue trabalhando duro em sua startup. Sabemos que o processo
              empreendedor é desafiador, mas é importante manter o foco e a
              determinação em sua jornada. Agradecemos novamente pela sua
              candidatura e desejamos a você todo o sucesso em sua jornada
              empreendedora!
            </p>
          </>
        )}
      </div>
    </main>
  );
}

export default SuperForm;
