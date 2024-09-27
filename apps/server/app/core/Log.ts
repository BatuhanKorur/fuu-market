export class Log {
  static success(message: string) {
    console.log(`\x1b[32m%s\x1b[0m`, `${`\u2714`} ${message}`)
  }

  static info(message: string) {
    console.log(`\x1b[34m%s\x1b[0m`, `${`\u2139`} ${message}`)
  }

  static warning(message: string) {
    console.log(`\x1b[33m%s\x1b[0m`, `${`\u26A0`} ${message}`)
  }

  static error(message: string) {
    console.log(`\x1b[31m%s\x1b[0m`, `${`\u2718`} ${message}`)
  }
}
