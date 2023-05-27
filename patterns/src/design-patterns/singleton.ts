class Singleton {
  private static instance: Singleton;
  private static count = 0;

  private constructor() {
    /** keep */
  }

  // static means it is a class member and cannot be accesses via instance of the clas
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // can be accessed via instance
  public incrementCount(value: number): void {
    console.log("incre");
    Singleton.count += value;
  }

  public decrementCount(value: number): void {
    Singleton.count -= value;
  }

  public getCount(): number {
    return Singleton.count;
  }
}

export default Singleton;
