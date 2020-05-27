let baby = { 
  name: 'lili',
  age: 3,
  food:100,
  healthy: 100,
  liveTimer: null,
  isLive: true,
  




  bark:function () {
    console.log('汪');
  },

  tell:function () {
    console.log('我的名字是' + this.name);
  
  },

  setName: function (newName) {
    this.name = newName;
    return newName;
  },


  run: function () {
    if(this.isLive){
      consoel.log('i am running');
    } else {
      console.log('si le');
    }
  },

  isfood: function () {
      if (this.food <= 20){
        console.log('我饿了');
      } else {
        console.log("跑的很开心");
        this.food -= 10;
      }
  },
  

  feed: function () {
    if(this.food <= 20){
      console.log('喂食');
      this.food = 100;
    }
  },


  live:function () {
    let self = this;
    this.liveTimer = setInterval( function() {
      self.food--;
      if(self.food < 0){
        self.food=0;
      }
      this.dead();
      // if(self.food <= 0){
      //   clearInterval(this.liveTimer);
      // }
      console.log(self.food);
    } ,100);
  },
 
  


  health: function(){
    if(this.food < 20){
      this.healty--;
      this.healthy >= 0;
      console.log(this.health);
    }
  },

  healthAdd:function(){
    setInterval(function () {
      if(this.food >= 80){
        this.food += 5;
        this.food <= 100;
      }
    }, 1000);
  },



  dead :function(){
    clearInterval(this.liveTimer);
    this.isLive = false;
  },
  tellStatus:function(){
    return '健康值：[' +this.health+'],饱食度：['+this.food;
  },

};



let view = {
  dogDisplay:function(){
    let dogDiv = document.getElementById("dogPic");
    dogDiv.setAttribute("class","dog");
  },
  displayStatus:function(){
    setInterval(function (){
      let dogStatus = document.getElementById("status");
      dogStatus.innerHTML(baby.tellStatus());
    },100)
  },
};





view.dogDisplay();


// dog.bark();
// dog.tell();
// dog.setName('jojo');
// dog.tell();
// dog.isfood();
// dog.isfood();
// dog.isfood();
// dog.isfood();
// dog.isfood();
// dog.isfood();
// dog.isfood();
// dog.isfood();
// dog.isfood();
// dog.health();
// dog.live();
// dog.dead();

// dog.healthAdd();