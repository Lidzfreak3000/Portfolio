const { app } = require('@azure/functions');
const { Resend } = require('resend');

app.http('sendEmail', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const resend = new Resend(process.env.RESEND_KEY);

        const requestBody = req.body;
        console.log(requestBody)

        const { data, error } = await resend.emails.send({
            from: `John's Portfolio <noreply@johnduncan.tech>`,
            to: requestBody.recipients,
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
