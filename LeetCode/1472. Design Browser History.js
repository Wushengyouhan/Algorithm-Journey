class BrowserHistory {
  constructor(homepage) {
    this.history = [homepage];
    this.curIndex = 0;
  }

  visit(url) {
    this.history.length = this.curIndex + 1;
    this.history.push(url);
    this.curIndex++;
  }

  back(steps) {
    this.curIndex = Math.max(0, this.curIndex - steps);
    return this.history(this.curIndex);
  }

  forward(steps) {
    this.curIndex = Math.min(this.history.length - 1, this.curIndex + steps);
    return this.history(this.curIndex);
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
