const sql = {
  insert (CollectionName, insertData) {
    return new Promise((resolve, reject) => {
      CollectionName.insertMany(insertData, (err) => {
        if (err) {
          reject()
        } else {
          resolve()
        }
      })
    })
  },
  delete (CollectionName, deleteData, deleteType) {
    let deleteFn = deleteType === 1 ? 'deleteMany' : 'deleteOne'
    return new Promise((resolve, reject) => {
      CollectionName[deleteFn](deleteData, (err) => {
        if (err) {
          reject()
        } else {
          console.log('*************************')
          resolve()
        }
      })
    })
  },
  update (CollectionName, whereData, updateData, updateType) {
    let updateFn = updateType === 1 ? 'updateMany' : 'updateOne'
    return new Promise((resolve, reject) => {
      CollectionName[updateFn](whereData, updateData, (err) => {
        if (err) {
          reject()
        } else {
          resolve()
        }
      })
    })
  },
  find (CollectionName, whereData, showData) {
    return new Promise((resolve, reject) => {
      CollectionName.find(whereData, showData).exec((err, data) => {
        if (err) {
          reject()
        } else {
          resolve(data)
        }
      })
    })
  },
  sort(CollectionName, whereData, showData, sortData) {
    return new Promise((resolve, reject) => {
      CollectionName.find(whereData, showData).sort(sortData).exec((err, data) => {
        if (err) {
          reject()
        } else {
          resolve(data)
        }
      })
    })
  },
  paging(CollectionName, whereData, showData, pageCode, limitNum) {
    limitNum = limitNum * 1 || 10; // 默认每页显示10条数据
    pageCode = pageCode * 1 || 0; // 默认显示第0页数据
    return new Promise((resolve, reject) => {
      CollectionName.find(whereData, showData).skip(limitNum * pageCode).limit(limitNum).exec((err, data) => {
        if (err) {
          reject()
        } else {
          resolve(data)
        }
      })
    })
  },
  distinct (CollectionName, type) {
    return new Promise((resolve, reject) => {
      CollectionName.distinct(type).exec((err, data) => {
        if (err) {
          reject()
        } else {
          resolve(data)
        }
      })
    })
  }
}

module.exports = sql