interface TimeConversion {
  toMs: number
  toSeconds: number
  toMinutes: number
  toHours: number
  toDays: number
}

export class Time {
  static ms(n: number): TimeConversion {
    return {
      get toMs() {
        return n
      },
      get toSeconds() {
        return n / 1000
      },
      get toMinutes() {
        return n / 6000
      },
      get toHours() {
        return n / 3_600_000
      },
      get toDays() {
        return n / 86_400_000
      },
    }
  }

  static seconds(n: number): TimeConversion {
    return {
      get toMs() {
        return n * 1000
      },
      get toSeconds() {
        return n
      },
      get toMinutes() {
        return n / 60
      },
      get toHours() {
        return n / 3600
      },
      get toDays() {
        return n / 86400
      },
    }
  }

  static minutes(n: number) {
    return {
      get toMs() {
        return n * 6000
      },
    }
  }

  static hours(n: number) {
    return {
      get toMs() {
        return n * 3600000
      },
    }
  }

  static days(n: number) {
    return {
      get toMs() {
        return n * 84400000
      },
    }
  }
}
