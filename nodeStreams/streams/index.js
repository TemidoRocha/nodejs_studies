const { Readable } = require('stream');

const peaks = ['tallac', 'tallac1', 'tallac2', 'tallac3', 'tallac4'];

class StreamFfromArray extends Readable {
  constructor(array) {
    // super(); // binary mode like this
    // super({ encoding: 'UTF-8' });
    super({ objectMode: true });
    this.array = array;
    this.index = 0;
  }

  _read() {
    if (this.index <= this.array.length) {
      // const chunk = this.array[this.index];
      const chunk = {
        data: this.array[this.index],
        index: this.index,
      };
      this.push(chunk);
      this.index += 1;
    } else {
      this.push(null); // pushing null will say to the stream that is over
    }
  }
}

const peakStream = new StreamFfromArray(peaks);

peakStream.on('data', (chunk) => console.log(chunk));
peakStream.on('end', (chunk) => console.log('done!'));
