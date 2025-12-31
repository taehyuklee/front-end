class MyPromise {
  constructor(asyncFunc) {
    this.asyncFunc = asyncFunc;
  }

  then(callback) {
    this.asyncFunc();
    callback(result);
    console.log(`안녕하세요, 저는 ${this.name}이고 ${this.age}살입니다.`);
    return this;
  }

  catch(callback) {
    return this.age >= 19;
  }
}

Promise((resolve, reject) => {
  const num = 10;
  setTimeout(() => {
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("wrong value");
    }
  }, 1000);
});

/**
 * 참고용 MyPromise
 */
class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;

    this.onFulfilled = [];
    this.onRejected = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilled.forEach((fn) => fn(value));
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejected.forEach((fn) => fn(reason));
      }
    };

    // 역시 Promise에서 제공해주는 값들이었음.
    executor(resolve, reject);
  }

  then(callback) {
    if (this.state === "fulfilled") {
      callback(this.value);
    } else if (this.state === "pending") {
      this.onFulfilled.push(callback);
    }
    return this;
  }

  catch(callback) {
    if (this.state === "rejected") {
      callback(this.reason);
    } else if (this.state === "pending") {
      this.onRejected.push(callback);
    }
    return this;
  }
}
