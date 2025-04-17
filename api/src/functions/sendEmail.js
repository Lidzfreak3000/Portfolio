const { app } = require('@azure/functions');
const { Resend } = require('resend');

app.http('sendEmail', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const resend = new Resend(process.env.RESEND_KEY);
        const requestBody = await request.json();

        // Add email address to an array of addresses for the recipients
        var recipientAddresses = ['j.r.nerdy@hotmail.com'];
        recipientAddresses.push(requestBody.recipients);

        console.log(JSON.stringify(recipientAddresses));

        const { data, error } = await resend.emails.send({
            from: `John's Portfolio <noreply@johnduncan.tech>`,
            to: recipientAddresses,
            subject: requestBody.subject,
            html: requestBody.body,
        });

        if (error) {
            return {
                status: 500,
                body: JSON.stringify(error),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        }

        return {
            status: 200,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
});
