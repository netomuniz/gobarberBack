export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MARIL_PASS
  },
  default: {
    from: 'Equipe GoBarber <noreplay@gobarber.com>'
  }
};
