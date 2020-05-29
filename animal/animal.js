let dog ={
  //属性
  name: "mahua" ,
  age: 3,

  //饱食度
  food:100,

  //健康值
  health:100,
  
  //是否存活
  isLive: true,

  //生存计时器
  liveTimer:null,





  //叫声
  bark: function (){
  if (!this.isLiving()) return;
    console.log("wang!wang!")
  },

  // 告诉别人自己的名字
  tellName :function(){
    if (!this.isLiving()) return;
    console.log("我的名字叫" + this.name);
    return this.name;
  },

  //利用内部的方法，来修改宠物的名字
  setName : function(newName) {
    if (!this.isLiving()) return;
    this.name = newName;
  
  },

  //是否存活
  isLiving:function(){
    if (this.isLive){
      return true;
    } else {
      view.displayYell(this.name + "没有了生命体征");
      return false;
    }
  },

  //跑起来
  run : function() {
    //再让他跑之前，判断是否存活
    if (this.isLive ){
      //存活，判断饱食度
      if(this.food <= 20){
      console.log("主人" + this.name +"饿了");
      } else {
        console.log(this.name + "在草地上撒欢的跑");
        this.food -= 10 ;
      } 
    } else {
      console.log(this.name + "没有了生命体征")
    }
  },

  //喂食
  feed:function(){
    if (this.isLive){
      this.food = 100 ;
      console.log(this.name + "吃饱了");
    }
  },

  //自然消耗,饱食度减1，检查饱食度和健康值
  live:function(){
    let self = this ;
    // 将 自然消耗饱食度-1，检查饱食度，健康值作为一个循环计时器 赋值给生存计时器liveTimer
    this.liveTimer = setInterval(function() {
      self.food--;
      self.checkFood();
      self.checkHealth();
    }, 100);
  },




  //查看饱食度，饱食度为0时，减少健康值。饱食度大于80时，健康值加5
  checkFood :function(){
    if (this.food <= 0 ){
      this.food = 0;
      this.health -= 5;
      console.log ("wawangwang");
    } else if (this.food >= 80){
      this.food = this.food >= 100 ? 100 : this.food;
      this.health += 5;
    }
  },


  //查看健康值，健康值大于100为100，小于100为this.health，小于0就死
  checkHealth: function(){
    this.health = (this.health >= 100 ? 100 : this.health);
    if (this.health <= 0){
      this.dead();
    }
  },

  //死了,清除生存计时器
  dead: function(){
    console.log ("aowoooo...");
    clearInterval(this.liveTimer);
    //死了，isLive为false
    this.islive = false;
  },

  //告诉别人，宠物目前的状态
  tellStatus:function(){
    return '饱食度:['+this.food+'],健康值:['+this.health+ '],是否存活:['+ (this.isLive ? '活着' : '死了') + ']';
  },


























};



dog.bark();
dog.tellName();
dog.run();
dog.run();
dog.run();
dog.run();
dog.run();
dog.run();
dog.run();
dog.run();
dog.run();
dog.run();
dog.run();
dog.run();
dog.feed();
dog.feed();
dog.feed();
dog.feed();







