const { BaseModel } = require('@models/basemodel');

const relation = (selfclass) => {
  return {
    user_token: {
      relation: BaseModel.HasManyRelation,
      modelClass: 'user_token',
      join: {
        from: 'user.id',
        to: 'user_token.user_id',
      },
    },
  };
};

module.exports = relation;