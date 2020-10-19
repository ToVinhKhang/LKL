const { Notify } = require("../../db/models/notify");
const { v4: uuidv4 } = require("uuid");

async function getNotify() {
  const notify = await Notify.query();

  return {
    notify: notify,
  };
}

async function postNotify(title, content) {
  const crrDate = new Date();
  crrDateStr =
    crrDate.getDate() +
    "/" +
    (crrDate.getMonth() + 1) +
    "/" +
    crrDate.getFullYear();

  const notify = await Notify.query().insert({
    id: uuidv4(),
    title: title,
    notification_content: content,
    post_date: crrDateStr,
  });

  return notify;
}

async function deleteNotify(id) {
  await Notify.query().deleteById(id);

  return { mess: "deleted" };
}

module.exports = {
  getNotify,
  postNotify,
  deleteNotify,
};
