const download = require('download-git-repo');

const downloadTemp = (url, name)=> {
  return new Promise((resolve, reject)=> {
    download(`direct:${url}`, name, {clone: true}, (err)=> {
      if (err) {
        reject(err)
      }
      resolve();
    })
  });
}

module.exports = downloadTemp;
