const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  title: { type: String },
  body: { type: String },
}, {
  timestamps: true //时间戳
})

module.exports = mongoose.model('Article', schema)