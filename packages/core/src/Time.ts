const MilliSeconds = {
  second: 1000,
  minute: 6000,
  hour: 3_600_000,
  day: 86_400_000,
}

export class Time {
  static seconds(n: number) {
    return {
      get toMs() {
        return n * 1000
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
