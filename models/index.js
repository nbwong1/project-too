const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const Interest = require("./Interest");

//wip
// Post.belongsToMany(User, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

Post.hasMany(Interest, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

// User.hasMany(Post, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

// User.hasMany(Comment, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Interest.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Comment.belongsTo(Post, {
//   foreignKey: "post_id",
//   onDelete: "CASCADE",
// });

module.exports = { User, Post, Comment, Interest };
