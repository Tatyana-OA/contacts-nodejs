//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Get a particular contact
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: "Get Contact " + req.params.id });
};

//@desc Create new contact
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
  res.status(201).json({ message: "Create Contact" });
};

//@desc Edit existing contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res.status(200).json({ message: "Update Contact " + req.params.id });
};

//@desc Delete existing contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
  res.status(200).json({ message: "Delete Contact " + req.params.id });
};

module.exports = {
  getContacts,
  createContact,
  updateContact,
  getContact,
  deleteContact,
};
