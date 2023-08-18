const sendEmail = (emailRequest) => {
    if (!emailRequest.address)
        return "Um destinatário precisa ser fornecido ao enviar um e-mail.";
    if (!emailRequest.subject)
        return "O campo de assunto não deveria estar vazio ao enviar um e-mail.";
    if (!emailRequest.content)
        return "O corpo da mensagem precisa ser fornecido ao enviar um e-mail.";

    console.log(`
        From: news@carstore.com
        To: ${emailRequest.address}
        Subject: ${emailRequest.subject}
        
        Dear ${emailRequest.name},
        
        ${emailRequest.content}
    `);
    return "E-mail enviado com sucesso!";
};

module.exports = sendEmail;