const Member = require("../models/members");

exports.greetMember = (req, res, next) => {
  return res.render("greeting.ejs");
};

exports.getMemberList = (req, res, next) => {
  Member.find().then((memberListData) => {
    console.log("memberListData:", memberListData);
    return res.render("attendance.ejs", { members: memberListData });
  });
};

exports.createMember = (req, res, next) => {
  const name = req.body.name;
  const department = req.body.department;
  const part = req.body.part;
  console.log("req:", req.body);
  const member = new Member({
    name,
    department,
    part,
  });
  member
    .save()
    .then((newMember) => {
      res.status(201).json({
        message: "New member successfully created",
        newMemberInfo: newMember,
      });
    })
    .catch((err) => console.log("DB ERROR:", err));
};
