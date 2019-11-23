let messages = [
  obj =>
    `No mes de ${obj.month} de ${obj.year} nós gastamos R$ ${obj.value} em ${obj.field}. GRANDE DIA 👈 👈!`,
  obj =>
    `Em ${obj.month} de ${obj.year}, foi investido pelo governo R$ ${obj.value} destinado à ${obj.field}, GRANDE DIA 👈 👈!`,
  obj =>
    `Nesse ano de ${obj.year}, foi envestido um total de R$ ${obj.value}, destinado à ${obj.field}. GRANDE DIA 👈 👈!`,
  obj =>
    `No mês de ${obj.month} de ${obj.year}, nós torramos em ${obj.field} R$ ${obj.value}. GRANDE DIA 👈 👈!!`,
  obj =>
    `No mês de ${obj.month}, nos orgulhamos de gastar R$ ${obj.value} em ${obj.field}, GRANDE DIA 👈 👈!`,
  obj =>
    `Em ${obj.month} de ${obj.year}, para ${obj.field} gastamos R$ ${obj.value}. GRANDE DIA 👈 👈!`,
  obj =>
    `No mês de ${obj.month} de ${obj.year}, gastamos R$ ${obj.value} em ${obj.field}, GRANDE DIA 👈 👈!`,
  obj =>
    `Em ${obj.year} no mês de ${obj.month}, investimos R$ ${obj.value} em ${obj.field}, obrigado capitalistas opressores, GRANDE DIA 👈 👈!.`,
  obj =>
    `No mês de ${obj.month} de ${obj.year}, aplicamos R$ ${obj.value} em ${obj.field}, GRANDE DIA 👈 👈!`,
  obj =>
    `No mês de ${obj.month} de ${obj.year} jogamos fora R$ ${obj.value} em ${obj.field} GRANDE DIA 👈 👈!`
];

export default obj => {
  let sort = Math.floor(Math.random() * messages.length);

  return messages[sort](obj);
};
