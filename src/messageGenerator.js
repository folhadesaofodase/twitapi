let messages = [
  obj =>
    `No mes de ${obj.month} de ${obj.year} nós gastamos R$ ${obj.value} em ${obj.field}. Brasil acima de tudo, Deus acima de todos 🇧🇷 🇧🇷!`,
  obj =>
    `Em ${obj.month} de ${obj.year}, foi investido pelo governo R$ ${obj.value} destinado à ${obj.field}, GRANDE DIA 👈 👈!`,
  obj =>
    `Nesse ano de ${obj.year}, foi envestido um total de R$ ${obj.value}, destinado à ${obj.field}. Quero que todos possam comprar seus fuzis 👈 👈!`,
  obj =>
    `No mês de ${obj.month} de ${obj.year}, nós torramos em ${obj.field} R$ ${obj.value}. Eu sou daltônico, para mim todos tem a mesma cor.`,
  obj =>
    `No mês de ${obj.month}, nos orgulhamos de gastar R$ ${obj.value} em ${obj.field}. É melhor Jair se acostumando 👈 👈!`,
  obj =>
    `Em ${obj.month} de ${obj.year}, para ${obj.field} gastamos R$ ${obj.value}. Canalhas! Canalhas! Canalhas, mil vezes!!`,
  obj =>
    `No mês de ${obj.month} de ${obj.year}, gastamos R$ ${obj.value} em ${obj.field}. Cocaina não tem imposto.!`,
  obj =>
    `Em ${obj.year} no mês de ${obj.month}, investimos R$ ${obj.value} em ${obj.field} Quero que todos possam comprar seus fuzis 👈 👈!.`,
  obj =>
    `No mês de ${obj.month} de ${obj.year}, aplicamos R$ ${obj.value} em ${obj.field}, GRANDE DIA 👈 👈!`,
  obj =>
    `No mês de ${obj.month} de ${obj.year} jogamos fora R$ ${obj.value} em ${obj.field} TALKEY 👈 👈!`
];

export default obj => {
  let sort = Math.floor(Math.random() * messages.length);

  return messages[sort](obj);
};
