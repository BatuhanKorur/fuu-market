import nodemailer, { Transporter } from 'nodemailer'
import { ENV } from '@/core'
import pug from 'pug'
import path from 'path'
export class Mailer {
  private transporter: Transporter
  constructor() {
    const transporterConfig = {
      host: ENV.MAIL_HOST,
      port: ENV.MAIL_PORT,
      secure: ENV.MAIL_SECURE,
      auth: {
        user: ENV.MAIL_USER,
        pass: ENV.MAIL_PASS,
      },
    }
    this.transporter = nodemailer.createTransport(transporterConfig)
  }

  async sendTestEmail() {
    const templatePath = path.resolve('views/emails/welcome.pug')
    const html = pug.renderFile(templatePath, { name: 'John Doe' })
    const info = await this.transporter.sendMail({
      from: '"Test" <test@example.com>',
      to: 'recipient@example.com',
      subject: 'Hello ✔',
      html,
    })
    console.log('Message sent: %s', info.messageId)
  }
}
