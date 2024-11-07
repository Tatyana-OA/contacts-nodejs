const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please add the user_id of the creator"],
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add contact email address"],
    },
    phone: {
      type: String,
      required: [true, "Please add contact phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
