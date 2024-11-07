const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access private

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//@desc Get a particular contact
//@route GET /api/contacts/:id
//@access private

const getContact = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const contact = await Contact.findById(id);

  console.log(contact);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  res.status(200).json({
    message: "Successfully Retrieved Contact Id " + id,
    contact,
  });
});

//@desc Create new contact
//@route POST /api/contacts
//@access private

const createContact = asyncHandler(async (req, res) => {
  console.log("Req Body: ➡️ ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(201).json(contact);
});

//@desc Edit existing contacts
//@route PUT /api/contacts/:id
//@access private

const updateContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403).json({ message: "No Permission to update this contact" });
  }
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json({ message: "Update Contact " + id, updatedContact });
});

//@desc Delete existing contacts
//@route DELETE /api/contacts/:id
//@access private

const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403).json({ message: "No Permission to delete this contact" });
  }
  await contact.deleteOne();
  res.status(200).json({ message: "Delete Contact " + id });
});

module.exports = {
  getContacts,
  createContact,
  updateContact,
  getContact,
  deleteContact,
};
