class Counter {
  private count: number = 0;

  constructor(count: number) {
    this.count = count;
  }
  add(num?: number) {
    this.count = this.count + num;
  }
  get(){
    return this.count.toString();
  }
  reset(){
    this.count = count;
  }
}