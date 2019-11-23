let messages = [
  obj =>
    `No mes de ${obj.month} de ${obj.year} nós gastamos ${obj.value} em ${obj.field}`,
  obj =>
    `Em ${obj.month} de ${obj.year}, foi investido pelo governo ${obj.value} destinado à ${obj.field}, e não estamos vendo chegar esse investimeto na educação atual`,
  obj =>
    `Nesse ano de ${obj.year}, foi envestido um total de ${obj.value}, destinado à ${obj.field}`,
  obj =>
    `No mês de ${obj.month} de ${obj.year}, nós torramos ${obj.value} em ${obj.field}, pague mais impostos para nós. BRASIL!`,
  obj =>
    `No mês de ${obj.month}, nos orgulhamos de gastar ${obj.value} em ${obj.field}, GRANDE DIA!`,
  obj =>
    `Em ${obj.month} de ${obj.year}, para ${obj.field} gastamos ${obj.value}, por favor pague mais impostos para nós. BRASIL!`,
  obj =>
    `No mês de ${obj.month} de ${obj.year}, gastamos ${obj.value} em ${obj.field}, ATÉ QUE ENFIM VOCÊS TIRARAM A MÃO DO BOLSO, BRASIL!`,
  obj =>
    `Em ${obj.year} no mês de ${obj.month}, investimos R$ ${obj.value} em ${obj.field}, OBRIGADO CAPITALISTAS OPRESSORES, PAPAI AGRADECE.`,
  obj =>
    `No mês de ${obj.month} de ${obj.year}, cuidamos muito bem do seu ${obj.value} em um ${obj.field}, então por favor trabalhe mais para nós, BRASIL!`,
  obj =>
    `No mês de ${obj.month} de ${obj.year} jogamos fora ${obj.value} em ${obj.field}, por favor ajude mais nossos campos agora, BRASIL!`
];

export default obj => {
  let sort = Math.floor(Math.random() * messages.length);

  return messages[sort](obj);
};
