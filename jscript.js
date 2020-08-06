var obj = {  
      age: 12,
      //error
      some_prop: console.log(obj.age),

      //error
      know_this: console.log(this.obj.age), //global

      // how to access age here
      some_other_prop: console.log(age),

      func: function(){
        console.log(this.age);   // 12
        // why acessible form here?, here `this` represents "func"
      }
};