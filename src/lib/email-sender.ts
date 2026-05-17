import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'mail.tozyapi.com.tr',
  port: 465,
  secure: true,
  auth: {
    user: 'pergoclean@tozyapi.com.tr',
    pass: '2026Zuleyna*#?'
  }
});

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    const info = await transporter.sendMail({
      from: '"PergoClean" <pergoclean@tozyapi.com.tr>',
      to: to,
      subject: subject,
      html: html
    });
    console.log('Email sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error: String(error) };
  }
}

export function buildEmailHTML(data: any, type: string) {
  const typeLabels: Record<string, string> = {
    quote: 'Fiyat Teklifi Talebi',
    appointment: 'Randevu Talebi',
    contact: 'İletişim Formu',
    photo: 'Fotoğraf Analiz Talebi'
  };

  let rows = '';
  for (const [key, value] of Object.entries(data)) {
    if (key !== '_honey' && value) {
      rows += `<tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">${key}</td><td style="padding: 8px; border: 1px solid #ddd;">${value}</td></tr>`;
    }
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>PergoClean - ${typeLabels[type] || 'Yeni Talep'}</title>
    </head>
    <body style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px;">
        <h2 style="color: #13b3a3; border-bottom: 2px solid #13b3a3; padding-bottom: 10px;">
          🏛️ PergoClean - ${typeLabels[type] || 'Yeni Talep'}
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          ${rows}
        </table>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          Bu e-posta PergoClean web sitesindeki formdan gönderilmiştir.
        </p>
      </div>
    </body>
    </html>
  `;
}