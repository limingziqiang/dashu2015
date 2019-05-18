'use strict';

var Human = function(param) {

  // 技能
  this.skill = param && param.skill || '保密';

  // 兴趣爱好
  this.hobby = param && param.hobby || '保密';
};

Human.prototype = {
  getSkill: function() {
    return this.skill;
  },
  getHobby: function() {
    return this.hobby;
  }
};

// 实例化姓名类
var Named = function(name) {
  var that = this;

  // 构造器
  // 构造函数解析姓名的姓与名
  (function(name, that) {
    that.wholeName = name;

    if (name.indexOf(' ') > -1) {
      that.firstName = name.slice(0, name.indexOf(' '));
      that.secondName = name.slice(name.indexOf(' '));
    }
  })(name, that)
};

// 实例化职位类
var Work = function(work) {
  var that = this;

  // 构造器
  // 构造函数中通过传入的职位特征来设置相应职位以及描述
  (function(work, that) {
    switch(work) {
      case 'code':
        that.work = '工程师';
        that.workDescript = '每天沉醉于编程';
        break;
      case 'UI':
      case 'UE':
        that.work = '设计师';
        that.workDescript = '设计更似一种艺术';
        break;
      case 'teach':
        that.work = '教师';
        that.workDescript = '分享也是一种快乐';
        break;
      default:
        that.work = work;
        that.workDescript = '对不起，我们还不清楚您所选择职位的相关描述';
    }
  })(work, that);
};

// 更换期望的职位
Work.prototype.changeWork = function(work) {
  this.work = work;
}

// 添加对职位的描述
Work.prototype.changeDescript = function(des) {
  this.workDescript = des;
};


/**
 * 应聘者建造者
 *
 * @param name 姓名（全名）
 * @param work 期望职位
 */
var Person = function(name, work) {
  // 创建应聘者缓存对象
  var _person = new Human();

  // 创建应聘者姓名解析对象
  _person.name = new Named(name);

  // 创建应聘者期望职位
  _person.work = new Work(work);

  return _person;
};

var person = new Person('xiao ming', 'code');
console.log(person)