export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, phone, email, service, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !service || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Here you would typically send an email or save to database
    // For now, we'll just log the data and return success
    console.log('New contact form submission:', {
      name,
      phone,
      email,
      service,
      message,
      timestamp: new Date().toISOString()
    });

    // You can integrate with email services like SendGrid, Mailgun, etc.
    // Example with SendGrid:
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'contact@esm.ma',
      from: 'noreply@esm.ma',
      subject: `Nouvelle demande de devis - ${service}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await sgMail.send(msg);
    */

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
