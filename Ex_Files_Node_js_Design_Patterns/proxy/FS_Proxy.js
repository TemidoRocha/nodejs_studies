class FS_Proxy {
  constructor(fs_subject) {
    // here we save the real file system
    this.fs = fs_subject;
  }

  readFile(path, format, callback) {
    // here we wil prevent to read any files that are not MD
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error(`Can only read Markdown files.`));
    }

    this.fs.readFile(path, format, (error, contents) => {
      if (error) {
        console.error(error);
        return callback(error);
      }

      return callback(null, contents);
    });
  }
}

module.exports = FS_Proxy;
