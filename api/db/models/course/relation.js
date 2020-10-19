const { BaseModel } = require('@models/basemodel');

const relation = (selfclass) => {
  return {
    // menu: {
    //   relation: BaseModel.ManyToManyRelation,
    //   modelClass: selfclass,
    //   join: {
    //     from: 'role.id',
    //     through: {
    //       from: 'rel_menu_role.role_id',
    //       to: 'rel_menu_role.menu_id',
    //     },
    //     to: 'menu.id',
    //   },
    // },
  };
};

module.exports = relation;
